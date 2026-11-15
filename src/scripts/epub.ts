// Minimal EPUB 3 builder that runs in the browser. No dependencies: a store-only ZIP writer is enough
// (the EPUB spec wants "mimetype" first and uncompressed, which "store" satisfies).

export interface Chapter { title: string; date: string; xhtmlBody: string; }
export interface BookMeta { title: string; author: string; lang: string; tocTitle: string; }

const enc = new TextEncoder();
const esc = (s: string) => s.replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

const CRC = (() => {
  const t = new Uint32Array(256);
  for (let n = 0; n < 256; n++) { let c = n; for (let k = 0; k < 8; k++) c = c & 1 ? 0xedb88320 ^ (c >>> 1) : c >>> 1; t[n] = c >>> 0; }
  return t;
})();
const crc32 = (b: Uint8Array) => { let c = 0xffffffff; for (let i = 0; i < b.length; i++) c = CRC[(c ^ b[i]) & 0xff] ^ (c >>> 8); return (c ^ 0xffffffff) >>> 0; };

function zip(files: { name: string; data: Uint8Array }[]): Uint8Array {
  const now = new Date();
  const time = (now.getHours() << 11) | (now.getMinutes() << 5) | (now.getSeconds() >> 1);
  const date = ((now.getFullYear() - 1980) << 9) | ((now.getMonth() + 1) << 5) | now.getDate();
  const parts: Uint8Array[] = [], central: Uint8Array[] = [];
  let offset = 0;
  for (const f of files) {
    const name = enc.encode(f.name), crc = crc32(f.data), size = f.data.length;
    const local = new DataView(new ArrayBuffer(30));
    local.setUint32(0, 0x04034b50, true); local.setUint16(4, 20, true); local.setUint16(6, 0x0800, true);
    local.setUint16(8, 0, true); local.setUint16(10, time, true); local.setUint16(12, date, true);
    local.setUint32(14, crc, true); local.setUint32(18, size, true); local.setUint32(22, size, true);
    local.setUint16(26, name.length, true); local.setUint16(28, 0, true);
    parts.push(new Uint8Array(local.buffer), name, f.data);
    const c = new DataView(new ArrayBuffer(46));
    c.setUint32(0, 0x02014b50, true); c.setUint16(4, 20, true); c.setUint16(6, 20, true); c.setUint16(8, 0x0800, true);
    c.setUint16(10, 0, true); c.setUint16(12, time, true); c.setUint16(14, date, true);
    c.setUint32(16, crc, true); c.setUint32(20, size, true); c.setUint32(24, size, true);
    c.setUint16(28, name.length, true); c.setUint32(42, offset, true);
    central.push(new Uint8Array(c.buffer), name);
    offset += 30 + name.length + size;
  }
  const cdSize = central.reduce((n, p) => n + p.length, 0);
  const end = new DataView(new ArrayBuffer(22));
  end.setUint32(0, 0x06054b50, true); end.setUint16(8, files.length, true); end.setUint16(10, files.length, true);
  end.setUint32(12, cdSize, true); end.setUint32(16, offset, true);
  const all = [...parts, ...central, new Uint8Array(end.buffer)];
  const out = new Uint8Array(all.reduce((n, p) => n + p.length, 0));
  let o = 0; for (const p of all) { out.set(p, o); o += p.length; }
  return out;
}

const CSS = `body{font-family:serif;line-height:1.5;margin:1em}h1,h2,h3{font-family:sans-serif;line-height:1.2}
h1{margin:0 0 .3em}p.meta{color:#666;font-family:sans-serif;font-size:.85em;margin:0 0 1.5em}
blockquote{margin:1em 0 1em 1em;padding-left:1em;border-left:3px solid #ccc;font-style:italic}
code,pre{font-family:monospace;font-size:.9em}pre{white-space:pre-wrap;background:#f5f5f5;padding:.6em}
table{border-collapse:collapse}td,th{border:1px solid #ccc;padding:.2em .5em}a{color:#0b5fff}`;

const xhtml = (lang: string, title: string, body: string) =>
  `<?xml version="1.0" encoding="utf-8"?>\n<html xmlns="http://www.w3.org/1999/xhtml" xmlns:epub="http://www.idpf.org/2007/ops" lang="${lang}" xml:lang="${lang}"><head><meta charset="utf-8"/><title>${esc(title)}</title><link rel="stylesheet" type="text/css" href="style.css"/></head><body>${body}</body></html>`;

export function buildEpub(meta: BookMeta, chapters: Chapter[]): Blob {
  const id = 'urn:uuid:' + crypto.randomUUID();
  const modified = new Date().toISOString().replace(/\.\d+Z$/, 'Z');
  const ch = chapters.map((c, i) => ({ ...c, file: `chapter-${i + 1}.xhtml`, id: `ch${i + 1}` }));
  const files: { name: string; data: Uint8Array }[] = [];
  const add = (name: string, text: string) => files.push({ name, data: enc.encode(text) });

  add('mimetype', 'application/epub+zip');
  add('META-INF/container.xml', `<?xml version="1.0"?>\n<container version="1.0" xmlns="urn:oasis:names:tc:opendocument:xmlns:container"><rootfiles><rootfile full-path="OEBPS/content.opf" media-type="application/oebps-package+xml"/></rootfiles></container>`);
  add('OEBPS/style.css', CSS);
  ch.forEach((c) => add(`OEBPS/${c.file}`, xhtml(meta.lang, c.title,
    `<h1>${esc(c.title)}</h1><p class="meta">${esc(c.date)}</p>${c.xhtmlBody}`)));
  add('OEBPS/nav.xhtml', xhtml(meta.lang, meta.tocTitle,
    `<nav epub:type="toc" id="toc"><h1>${esc(meta.tocTitle)}</h1><ol>${ch.map((c) => `<li><a href="${c.file}">${esc(c.title)}</a></li>`).join('')}</ol></nav>`));
  add('OEBPS/toc.ncx', `<?xml version="1.0" encoding="utf-8"?>\n<ncx xmlns="http://www.daisy.org/z3986/2005/ncx/" version="2005-1"><head><meta name="dtb:uid" content="${id}"/></head><docTitle><text>${esc(meta.title)}</text></docTitle><navMap>${ch.map((c, i) => `<navPoint id="n${i + 1}" playOrder="${i + 1}"><navLabel><text>${esc(c.title)}</text></navLabel><content src="${c.file}"/></navPoint>`).join('')}</navMap></ncx>`);
  add('OEBPS/content.opf', `<?xml version="1.0" encoding="utf-8"?>\n<package xmlns="http://www.idpf.org/2007/opf" version="3.0" unique-identifier="bookid" xml:lang="${meta.lang}"><metadata xmlns:dc="http://purl.org/dc/elements/1.1/"><dc:identifier id="bookid">${id}</dc:identifier><dc:title>${esc(meta.title)}</dc:title><dc:creator>${esc(meta.author)}</dc:creator><dc:language>${meta.lang}</dc:language><meta property="dcterms:modified">${modified}</meta></metadata><manifest><item id="nav" href="nav.xhtml" media-type="application/xhtml+xml" properties="nav"/><item id="ncx" href="toc.ncx" media-type="application/x-dtbncx+xml"/><item id="css" href="style.css" media-type="text/css"/>${ch.map((c) => `<item id="${c.id}" href="${c.file}" media-type="application/xhtml+xml"/>`).join('')}</manifest><spine toc="ncx">${ch.map((c) => `<itemref idref="${c.id}"/>`).join('')}</spine></package>`);

  return new Blob([zip(files)], { type: 'application/epub+zip' });
}

/** Turn the rendered body of a post page into an XHTML fragment safe for an EPUB chapter. */
export function toXhtmlFragment(prose: Element, pageUrl: string): string {
  const doc = prose.ownerDocument!;
  const box = doc.createElement('div');
  box.innerHTML = prose.innerHTML;
  box.querySelectorAll('script,style,iframe,img,picture,svg,video,audio,button,form').forEach((n) => n.remove());
  box.querySelectorAll('a[href]').forEach((a) => {
    const h = a.getAttribute('href')!;
    if (!h.startsWith('#')) { try { a.setAttribute('href', new URL(h, pageUrl).href); } catch { a.removeAttribute('href'); } }
  });
  box.querySelectorAll('*').forEach((n) => { for (const a of [...n.attributes]) if (/^(on|data-|style$|class$|id$|tabindex$)/.test(a.name) && !(a.name === 'id')) n.removeAttribute(a.name); });
  const s = new XMLSerializer().serializeToString(box);
  // Drop the wrapper element (and its xmlns) but keep the content, which is now well-formed XHTML.
  return s.replace(/^<div[^>]*>/, '').replace(/<\/div>$/, '').replace(/ xmlns="http:\/\/www\.w3\.org\/1999\/xhtml"/g, '');
}
