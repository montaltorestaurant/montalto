# Pizzeria Montalto – Webseite

Statische Webseite für GitHub Pages. Keine Cookies, kein Tracking, Schriften liegen lokal (DSGVO-freundlich).

- `/` – Frankfurt am Main (Hauptseite)
- `/oberursel/` – Oberursel (Taunus)
- `/impressum.html`, `/datenschutz.html`, `404.html`

## Inhalte ändern

| Was | Datei |
|---|---|
| Adresse, Telefon, Öffnungszeiten (beide Standorte) | `assets/js/standorte.js` |
| Gerichte, Zutaten, Preise | `assets/js/speisekarte.js` |
| Farben, Abstände, Schriften | `assets/css/style.css` |

Die Öffnungszeiten steuern auch die Live-Anzeige „Jetzt geöffnet“ (deutsche Zeit).

## Veröffentlichen

1. Alle Dateien in das Repository hochladen (Hauptverzeichnis, inkl. `.nojekyll`).
2. Repository → **Settings → Pages** → Source: *Deploy from a branch* → `main` / `(root)`.

## Domain verbinden

1. **Settings → Pages → Custom domain**: Domain eintragen, speichern.
2. Beim Domain-Anbieter DNS setzen:
   - `A`-Records für die Hauptdomain: `185.199.108.153`, `185.199.109.153`, `185.199.110.153`, `185.199.111.153`
   - `CNAME` für `www`: `DEIN-GITHUB-NAME.github.io`
3. Wenn das Zertifikat da ist: **Enforce HTTPS** anhaken.

## Vor dem Livegang

- Impressum und Datenschutz: rot markierte Platzhalter ausfüllen.
- Telefonnummern und Öffnungszeiten mit dem Inhaber abgleichen.

Schriften: TeX Gyre Pagella und TeX Gyre Heros Cn (GUST Font License, siehe `assets/fonts/`).
