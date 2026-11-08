# Einen Beitrag schreiben

Jeden Beitrag gibt es zweimal, mit demselben Dateinamen:

```
src/content/posts/de/<slug>.md
src/content/posts/en/<slug>.md
```

Der Dateiname ist die Adresse: `fhuber.com/blog/<slug>/` und
`fhuber.com/en/blog/<slug>/`. Kleinbuchstaben und Bindestriche, keine Umlaute.

Kopf jeder Datei:

```markdown
---
title: "Titel"
description: "Ein Satz für Startseite, RSS und Suchmaschinen"
date: 2026-11-08
draft: true
---
```

Ablauf:

1. Beide Dateien mit `draft: true` anlegen. Entwürfe zeigt nur `npm run dev`.
2. Deutschen Text schreiben, dann die englische Fassung.
3. Lokal ansehen: `npm run dev`, dann http://localhost:4321.
4. `draft: true` in beiden Dateien löschen, committen, nach `main` pushen.
   Die Action baut und veröffentlicht, nach etwa einer Minute ist der Beitrag online.

Fehlt eine Sprache, bricht der Bau ab (`scripts/check-translations.mjs`).
Dateien, die mit `_` beginnen, werden ignoriert, zum Beispiel für Notizen.

Bilder: neben den Beitrag legen, etwa `src/content/posts/de/<slug>-bild.jpg`,
und im Text mit `![Beschreibung](./<slug>-bild.jpg)` einbinden. Astro
verkleinert sie beim Bauen.

Achtung: Das Repo ist öffentlich. Auch Entwürfe sind auf GitHub lesbar,
sie erscheinen nur nicht auf der Seite.
