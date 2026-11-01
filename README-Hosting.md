# Wetter-App – Hosting-Paket

Inhalt: index.html (die App), manifest.webmanifest, sw.js (Offline-Cache),
icons/ (App-Icons für iPhone/Home-Bildschirm).

## Hosting (kostenlos, HTTPS – nötig für Standort & Installation)

### Netlify Drop (am schnellsten)
1. https://app.netlify.com/drop öffnen
2. Den Ordner mit allen Dateien hineinziehen
3. Fertig – die App läuft sofort unter einer https-Adresse

### Cloudflare Pages
1. cloudflare.com → Konto anlegen → Pages → Projekt erstellen
2. Ordner hochladen (Direct Upload)

### GitHub Pages
1. Neues Repository, Dateien hochladen (index.html im Hauptordner!)
2. Settings → Pages → Source: main → Save

## Auf dem iPhone installieren (als App)
1. Die gehostete Adresse in Safari öffnen
2. Teilen-Button → „Zum Home-Bildschirm"
3. App-Icon erscheint auf dem Home-Bildschirm, startet im Vollbild

## Datenquellen
- Vorhersage: Open-Meteo – kostenlos, ohne API-Key
- Regenradar: DWD-RADOLAN via BrightSky (api.brightsky.dev) – kostenlos,
  zentriert auf deinen Ort, ca. 50 km Umkreis, 5-Minuten-Schritte
  (letzte Stunden Rückblick + 2 Stunden Vorhersage)

## Hinweise
- Beim ersten Start fragt iOS nach dem Standort – erlauben
- Kein Server/Backend nötig, alles läuft im Browser
