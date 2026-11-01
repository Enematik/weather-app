# Wetter-App als PWA hosten (kostenlos)

Diese Dateien hochladen – fertig ist deine Wetter-App:

```
index.html               → die App selbst (Ortssuche, Favoriten, Tages-Details)
manifest.webmanifest     → macht sie installierbar (Name, Icon, Farben)
sw.js                    → Offline-Cache (App startet auch ohne Netz)
icons/
  icon-192.png           → Icon für Android/Chrome
  icon-512.png           → Icon für den Install-Prompt / Splash
  apple-touch-icon.png   → Icon auf dem iPhone-Home-Bildschirm
```

## Variante A: Netlify Drop (am schnellsten, ~2 Minuten)

1. Gehe zu **https://app.netlify.com/drop**
2. Ziehe den **gesamten Ordner** (mit allen Dateien) per Drag & Drop hinein
3. Du bekommst sofort eine Adresse wie `https://xyz.netlify.app`

## Variante B: Cloudflare Pages

1. **https://dash.cloudflare.com** → *Workers & Pages* → *Create* → *Pages* → *Upload assets*
2. Ordner hochladen. Adresse: `https://<projekt>.pages.dev`

## Variante C: GitHub Pages

1. Neues Repository auf GitHub anlegen (public), alle Dateien hochladen
2. *Settings → Pages* → Quelle: *Deploy from a branch* → `main` → Save
3. Adresse: `https://<user>.github.io/<repo>`

## Auf dem iPhone installieren

1. Adresse in **Safari** öffnen
2. Auf **Teilen** (Quadrat mit Pfeil) tippen → **„Zum Home-Bildschirm"**
3. Die App startet ab sofort mit eigenem Icon im Vollbild

## Funktionen

- **🔍 Ortssuche:** Panel öffnet sich von rechts; Suchergebnisse antippen lädt den Ort.
  Jede Suche landet automatisch unter ⭐ Favoriten (bis 8, löschbar, bleiben gespeichert).
- **📍 Standort:** GPS-Button im Panel ermittelt den aktuellen Ort (einmalige Erlaubnis).
- **Tages-Details:** In der 10-Tage-Vorhersage einen Tag antippen → Detail-Ansicht mit
  Regenmenge, Regenwahrscheinlichkeit, Wind/Böen, UV, gefühlter Temperatur,
  Sonnenauf-/-untergang und stündlichem Verlauf.
- **📡 Regenradar:** echte OpenStreetMap-Karte mit halbtransparentem Radar-Overlay
  (RainViewer), Zeitanimation über die letzten 2 Stunden + Prognose-Frame.
- **Hintergrund:** passt sich Tageszeit (Morgen/Tag/Abend/Nacht) und Wetter an;
  bei Regen/Schnee animierte Tropfen bzw. Flocken über dem Hintergrund.

**Hinweis:** In der Vorschau/Canvas-Umgebung sind Netzwerkaufrufe blockiert – dort
laufen Demodaten und eine stilisierte Demo-Karte. Live gehostet funktioniert alles.
