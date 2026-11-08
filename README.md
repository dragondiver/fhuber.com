# fhuber.com

Florians Blog über Projekte und Arbeitsweise, auf Deutsch und Englisch.
Statische Seite mit [Astro](https://astro.build), gehostet auf GitHub Pages.

```bash
npm install
npm run dev      # Vorschau auf http://localhost:4321, zeigt auch Entwürfe
npm run build    # prüft Übersetzungen und baut nach dist/
```

- Neuen Beitrag schreiben: [docs/beitrag-schreiben.md](docs/beitrag-schreiben.md)
- Domain und DNS: [docs/domain.md](docs/domain.md)
- Feste Texte (Startseite, Menü, Projekte): `src/i18n.ts`
- Gestaltung: `src/styles/global.css` (Instrument Sans, IBM Plex Mono, Orange als einziger Akzent)

Die Schriften kommen aus npm (`@fontsource…`) und werden von der Seite selbst
ausgeliefert. Kein Aufruf zu Google Fonts, keine Cookies, kein Tracking.
