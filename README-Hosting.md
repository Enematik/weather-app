# Wetter-App als PWA hosten (kostenlos)

Diese Dateien hochladen – fertig ist deine Wetter-App:

```
index.html               → die App selbst (Ortssuche, Favoriten, Tages-Details, Radar-Seite)
manifest.webmanifest     → macht sie installierbar (Name, Icon, Farben)
sw.js                    → Offline-Cache (App startet auch ohne Netz)
icons/                   → App-Icons (192/512 px + apple-touch-icon)
```

## Variante A: Netlify Drop (am schnellsten, ~2 Minuten)

1. Gehe zu **https://app.netlify.com/drop**
2. Ziehe den **gesamten Ordner** per Drag & Drop hinein
3. Adresse: `https://xyz.netlify.app`

## Variante B: Cloudflare Pages

**https://dash.cloudflare.com** → *Workers & Pages* → *Create* → *Pages* → *Upload assets*
Adresse: `https://<projekt>.pages.dev`

## Variante C: GitHub Pages

Neues Repo (public) → Dateien hochladen → *Settings → Pages* → *Deploy from a branch* → `main`

## Auf dem iPhone installieren

1. Adresse in **Safari** öffnen
2. Teilen → **„Zum Home-Bildschirm"**
3. App startet ab sofort mit eigenem Icon im Vollbild

## Funktionen

- **Ortssuche:** Panel öffnet sich von rechts; Suche startet beim Tippen (Enter beschleunigt).
  Ergebnisse und GPS-Standort wandern automatisch in die ⭐ Favoriten (bis 8, bleiben gespeichert).
- **Tages-Details:** Tag in der 10-Tage-Vorhersage antippen → Details mit Regen, Wind, UV,
  Sonnenauf-/untergang und Stundenverlauf.
- **📡 Radar-Seite:** Klick auf „Radar" öffnet eine große Seite von rechts mit zwei Ansichten:
  - *Karte + Radar*: OpenStreetMap-Karte mit RainViewer-Radar-Overlay, Zoom-Buttons,
    Zeitanimation (letzte 2 Stunden + Prognose)
  - *Interaktiv (Windy)*: eingebettete Windy-Karte mit Regen-Overlay (für Deutschland
    u. a. DWD-Radardaten), frei zoom- und schwenkbar
- **Hintergrund:** passt sich Tageszeit und Wetter an; animierter Regen/Schnee.

**Hinweis:** In der Vorschau/Canvas-Umgebung sind Netzwerkaufrufe blockiert – dort laufen
Demodaten und eine stilisierte Demo-Karte. Live gehostet funktioniert alles.
