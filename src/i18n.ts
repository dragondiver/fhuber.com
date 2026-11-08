// Alle festen Texte der Seite, je Sprache. Beiträge stehen in src/content/posts/.
// TEXT: markiert Stellen, die Florian noch in eigenen Worten schreibt.

export type Lang = "de" | "en";

export const t = {
  de: {
    htmlLang: "de",
    name: "Florian Huber",
    nav: { posts: "Beiträge", projects: "Projekte", about: "Über mich" },
    // TEXT: Startseite, Überschrift und ein, zwei Sätze darunter
    heroTitle: "Florian Huber",
    heroText: "Hier schreibe ich über meine Projekte und darüber, wie ich arbeite.",
    sectionPosts: "Beiträge",
    sectionProjects: "Projekte",
    noPosts: "Noch keine Beiträge.",
    minutes: "Min.",
    readMore: "Weiterlesen",
    otherLang: "English",
    allPosts: "Alle Beiträge",
    footer: "Kornwestheim",
    rssTitle: "Florian Huber",
    rssDescription: "Beiträge von Florian Huber",
  },
  en: {
    htmlLang: "en",
    name: "Florian Huber",
    nav: { posts: "Posts", projects: "Projects", about: "About" },
    heroTitle: "Florian Huber",
    heroText: "I write about my projects and about how I work.",
    sectionPosts: "Posts",
    sectionProjects: "Projects",
    noPosts: "No posts yet.",
    minutes: "min",
    readMore: "Read",
    otherLang: "Deutsch",
    allPosts: "All posts",
    footer: "Kornwestheim, Germany",
    rssTitle: "Florian Huber",
    rssDescription: "Posts by Florian Huber",
  },
} as const;

// Projekte auf der Startseite. Links zeigen auf die öffentlichen Repos/Seiten.
// TEXT: Beschreibungen
export const projects = [
  {
    name: "KI-Telefon",
    url: "https://dragondiver.github.io/ki-telefon/projekt/",
    de: "Ein altes Telefon, mit dem man mit einer KI spricht.",
    en: "An old telephone you can talk to an AI with.",
  },
  {
    name: "Küchen-Display",
    url: "https://dragondiver.github.io/kuechen-display/",
    de: "Ein Display für die Küche mit Sprachsteuerung.",
    en: "A voice-controlled display for the kitchen.",
  },
  {
    name: "Mise en Place",
    url: null,
    de: "Rezepte und Einkaufsliste für die Familie.",
    en: "Recipes and shopping list for the family.",
  },
] as const;

export const paths = {
  de: { home: "/", post: (slug: string) => `/blog/${slug}/`, about: "/ueber/" },
  en: { home: "/en/", post: (slug: string) => `/en/blog/${slug}/`, about: "/en/about/" },
};

export function formatDate(d: Date, lang: Lang) {
  return d.toLocaleDateString(lang === "de" ? "de-DE" : "en-GB", {
    day: "2-digit",
    month: lang === "de" ? "2-digit" : "short",
    year: "numeric",
  });
}

export function readingMinutes(body: string | undefined) {
  const words = (body ?? "").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.round(words / 200));
}
