import { getCollection } from 'astro:content';
import { sortDate, slugTag } from './site';
import { langOf, slugOf, href, type Lang } from './i18n';

/** Published posts in one language, newest first. */
export async function postsIn(lang: Lang, filter: (p: any) => boolean = () => true) {
  return (await getCollection('posts', (p) => !p.data.draft && langOf(p) === lang && filter(p)))
    .sort((a, b) => sortDate(b) - sortDate(a));
}
/** URL of a post's counterpart in the other language, or null if it has no published translation. */
export async function counterpartOf(post: any) {
  const all = await getCollection('posts', (p) => !p.data.draft);
  if (langOf(post) === 'es') {
    const orig = all.find((p) => langOf(p) === 'en' && slugOf(p) === post.data.translationOf);
    return orig ? href('en', `/posts/${slugOf(orig)}/`) : null;
  }
  const tr = all.find((p) => langOf(p) === 'es' && p.data.translationOf === slugOf(post));
  return tr ? href('es', `/posts/${slugOf(tr)}/`) : null;
}
export async function tagPaths(lang: Lang) {
  const posts = await postsIn(lang);
  const names = new Map<string, string>();
  posts.forEach((p) => p.data.tags.forEach((t: string) => names.set(slugTag(t), t)));
  return [...names].map(([slug, name]) => ({
    params: { tag: slug },
    props: { name, posts: posts.filter((p) => p.data.tags.some((t: string) => slugTag(t) === slug)) },
  }));
}
