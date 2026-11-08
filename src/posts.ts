import { getCollection, type CollectionEntry } from "astro:content";
import type { Lang } from "./i18n";

export type Post = CollectionEntry<"posts">;

export function slugOf(post: Post) {
  return post.id.split("/").slice(1).join("/");
}

export async function postsFor(lang: Lang) {
  const all = await getCollection(
    "posts",
    (p) => p.id.startsWith(`${lang}/`) && (import.meta.env.DEV || !p.data.draft),
  );
  return all.sort((a, b) => b.data.date.getTime() - a.data.date.getTime());
}
