// Jeder Beitrag muss auf Deutsch und Englisch vorliegen, mit gleichem Dateinamen.
import { readdirSync } from "node:fs";

const list = (lang) =>
  new Set(readdirSync(`src/content/posts/${lang}`).filter((f) => f.endsWith(".md") && !f.startsWith("_")));
const de = list("de");
const en = list("en");
const missing = [
  ...[...de].filter((f) => !en.has(f)).map((f) => `en/${f} fehlt (zu de/${f})`),
  ...[...en].filter((f) => !de.has(f)).map((f) => `de/${f} fehlt (zu en/${f})`),
];
if (missing.length) {
  console.error("Übersetzung fehlt:\n  " + missing.join("\n  "));
  process.exit(1);
}
console.log(`Übersetzungen vollständig (${de.size} Beiträge).`);
