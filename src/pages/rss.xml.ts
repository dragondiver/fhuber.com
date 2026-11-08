import type { APIContext } from "astro";
import { feed } from "../components/rss";
export const GET = (context: APIContext) => feed("de", context);
