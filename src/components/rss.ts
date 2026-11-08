import rss from "@astrojs/rss";
import type { APIContext } from "astro";
import { t, paths, type Lang } from "../i18n";
import { postsFor, slugOf } from "../posts";

export async function feed(lang: Lang, context: APIContext) {
  const posts = await postsFor(lang);
  return rss({
    title: t[lang].rssTitle,
    description: t[lang].rssDescription,
    site: context.site!,
    items: posts.map((p) => ({
      title: p.data.title,
      description: p.data.description,
      pubDate: p.data.date,
      link: paths[lang].post(slugOf(p)),
    })),
    customData: `<language>${lang}</language>`,
  });
}
