// Bilingual site: English is the original language, Spanish (Spain) the parallel edition under /es/.
export type Lang = 'en' | 'es';
export const LANGS: Lang[] = ['en', 'es'];
export const base = (l: Lang) => (l === 'en' ? '' : '/es');
/** Path inside the site for a language, e.g. href('es', '/topics/') -> '/es/topics/'. */
export const href = (l: Lang, path: string) => `${base(l)}${path}`;
/** Post slug without the language folder (Astro ids for Spanish posts look like "es/<slug>"). */
export const slugOf = (p: { id: string }) => p.id.replace(/^es\//, '');
export const langOf = (p: { data: { lang?: string } }): Lang => (p.data.lang === 'es' ? 'es' : 'en');
/** Swap the language prefix of a non-post path: /topics/ <-> /es/topics/. */
export const switchPath = (path: string, to: Lang) => {
  const bare = path.replace(/^\/es(\/|$)/, '/');
  return to === 'en' ? bare : `/es${bare === '/' ? '/' : bare}`;
};

export const UI = {
  en: {
    locale: 'en-GB',
    headline: 'Engineering, learning & everything in between.',
    tagline: 'Software, mathematics, education, history, human performance, and the ideas that sometimes connect them.',
    lede: `I'm Ruben, a software engineer who likes finding out how things work: how we build, learn, train and
      organise ourselves. This is where I read, think and write things down. Some posts are about code, many
      aren't, and a few connect fields that don't obviously belong together.`,
    nav: { writing: 'Writing', topics: 'Topics', about: 'About' },
    writing: 'Writing',
    topicsTitle: 'Topics', topicsDesc: 'The areas this blog keeps coming back to.',
    topicsLede: 'Six areas I keep coming back to. A post can belong to one, several, or none of them yet.',
    byTag: ['Prefer finer grain?', 'Browse by tag'],
    tags: 'Tags', tagPrefix: 'Tag',
    nothing: 'Nothing here yet.',
    part: (n: number, t: number) => `Part ${n} of ${t}`,
    series: 'Series', prev: 'Previous', next: 'Next',
    seriesBlurb: 'Not book summaries. Ideas worth breaking, challenging, testing against documented experience and turning into change.',
    seriesMeta: 'Each book gets one article in five parts: Break, Change, Experience, Challenge, Question.',
    switchTo: 'Español', switchLabel: 'Leer en español',
  },
  es: {
    locale: 'es-ES',
    headline: 'Ingeniería, aprendizaje y todo lo que hay entre medias.',
    tagline: 'Software, matemáticas, educación, historia, rendimiento humano y las ideas que a veces los conectan.',
    lede: `Soy Ruben, ingeniero de software, y me gusta entender cómo funcionan las cosas: cómo construimos,
      aprendemos, entrenamos y nos organizamos. Aquí leo, pienso y pongo las cosas por escrito. Algunos textos
      tratan de código, muchos no, y unos pocos conectan campos que a primera vista no tienen nada que ver.`,
    nav: { writing: 'Escritos', topics: 'Temas', about: 'Sobre mí' },
    writing: 'Escritos',
    topicsTitle: 'Temas', topicsDesc: 'Las áreas a las que este blog vuelve una y otra vez.',
    topicsLede: 'Seis áreas a las que vuelvo una y otra vez. Un texto puede pertenecer a una, a varias o, de momento, a ninguna.',
    byTag: ['¿Prefieres más detalle?', 'Explora por etiqueta'],
    tags: 'Etiquetas', tagPrefix: 'Etiqueta',
    nothing: 'Todavía no hay nada aquí.',
    part: (n: number, t: number) => `Parte ${n} de ${t}`,
    series: 'Serie', prev: 'Anterior', next: 'Siguiente',
    seriesBlurb: 'No son resúmenes de libros. Son ideas que merece la pena romper, cuestionar, contrastar con la experiencia documentada y convertir en cambio.',
    seriesMeta: 'Cada libro recibe un artículo en cinco partes: Break, Change, Experience, Challenge, Question.',
    switchTo: 'English', switchLabel: 'Read in English',
  },
} as const;

/** Localized display of the six topic areas. Frontmatter always stores the English canonical `name`. */
export const AREA_ES: Record<string, { name: string; short: string; blurb: string }> = {
  software: { name: 'Ingeniería de software', short: 'Software', blurb: 'Arquitectura, diseño, testing, entrega, plataformas, sistemas distribuidos e IA.' },
  learning: { name: 'Aprendizaje y educación', short: 'Aprendizaje', blurb: 'Cómo aprende la gente: pedagogía, autonomía, Montessori, Emmi Pikler, sistemas educativos europeos, pensamiento crítico.' },
  strength: { name: 'Fuerza y rendimiento humano', short: 'Fuerza', blurb: 'Entrenamiento de fuerza, fisiología, adaptación, progresión, recuperación y salud a largo plazo.' },
  history: { name: 'Historia y pensamiento clásico', short: 'Historia', blurb: 'Grecia y Roma: filosofía, sociedad, educación, ingeniería y cultura física.' },
  mathematics: { name: 'Matemáticas y razonamiento', short: 'Matemáticas', blurb: 'Lógica, probabilidad, estadística, optimización, abstracción y resolución de problemas.' },
  systems: { name: 'Sistemas y organizaciones', short: 'Sistemas', blurb: 'Complejidad, incentivos, organizaciones y cómo las interacciones determinan los resultados.' },
};
