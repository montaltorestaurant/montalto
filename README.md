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

Wichtig: Nach Änderungen an CSS oder JS in allen HTML-Dateien die Nummer hinter `?v=` erhöhen (z. B. `?v=20261009b` → `?v=20261010a`). Sonst zeigen Handys noch die alte Version aus dem Zwischenspeicher.

## Veröffentlichen

1. Alle Dateien in das Repository hochladen (Hauptverzeichnis, inkl. `.nojekyll`).
2. Repository → **Settings → Pages** → Source: *Deploy from a branch* → `main` / `(root)`.

## Domain verbinden (restaurant-montalto.de bei STRATO)

1. GitHub → Repository → **Settings → Pages → Custom domain**: `restaurant-montalto.de` eintragen, **Save**.
2. STRATO-Login → **Domains → Domainverwaltung** → Zahnrad bei der Domain → Reiter **DNS**:
   - **A-Record verwalten** → *Eigene IP-Adresse* → `185.199.108.153`
   - **AAAA-Record verwalten** → *Eigene IP-Adresse* → `2606:50c0:8000::153`
3. Subdomain `www` (ggf. erst anlegen) → **DNS-Verwaltung → CNAME-Record verwalten** → `montaltorestaurant.github.io`
4. Warten (bis 24 h), dann in GitHub **Enforce HTTPS** anhaken.

Die Datei `CNAME` im Hauptverzeichnis enthält die Domain und muss im Repository bleiben.

## Vor dem Livegang

- Impressum und Datenschutz: rot markierte Platzhalter ausfüllen.
- Telefonnummern und Öffnungszeiten mit dem Inhaber abgleichen.

Schriften: TeX Gyre Pagella und TeX Gyre Heros Cn (GUST Font License, siehe `assets/fonts/`).
