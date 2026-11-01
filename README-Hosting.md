# Wetter-App als PWA hosten (kostenlos)

Dateien hochladen – fertig ist die App (index.html, manifest.webmanifest, sw.js, icons/).

## Hosting (alle kostenlos)
- **Netlify Drop:** https://app.netlify.com/drop → gesamten Ordner hineinziehen
- **Cloudflare Pages:** Workers & Pages → Create → Pages → Upload assets
- **GitHub Pages:** public Repo, Dateien hochladen, Settings → Pages → Deploy from a branch (main)

## iPhone-Installation
Safari öffnen → Teilen → „Zum Home-Bildschirm" → App startet mit eigenem Icon im Vollbild.

## Funktionen
- Startet immer mit dem **aktuellen Standort** (GPS; ohne Erlaubnis Fallback Bonn)
- Ortssuche-Panel von rechts mit automatischen Favoriten (bis 8, gespeichert)
- Tages-Details in der 10-Tage-Vorhersage (Regen, Wind, UV, Sonne, Stundenverlauf)
- Radar-Seite von rechts: „Karte + Radar" (OSM + RainViewer, Standard ≈ 50 km Umkreis,
  zoombar) und „Interaktiv (Windy)" mit DWD-Radardaten für Deutschland
- Hintergrund passt sich Tageszeit und Wetter an (animierter Regen/Schnee)

In der Canvas-Vorschau sind Netzwerkaufrufe blockiert (Demodaten); live gehostet funktioniert alles.
