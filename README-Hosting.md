# Wetter-App als PWA hosten (kostenlos)

Diese Dateien hochladen – fertig ist deine Wetter-App:

```
index.html               → die App selbst
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
4. Optional: unter *Site settings → Change site name* einen eigenen Namen vergeben

## Variante B: Cloudflare Pages

1. **https://dash.cloudflare.com** → *Workers & Pages* → *Create* → *Pages* → *Upload assets*
2. Ordner hochladen, Fertig. Adresse: `https://<projekt>.pages.dev`

## Variante C: GitHub Pages (mit eigenem Repo)

1. Neues Repository auf GitHub anlegen (public)
2. Alle Dateien hochladen
3. *Settings → Pages* → Quelle: *Deploy from a branch* → `main` → Save
4. Adresse: `https://<user>.github.io/<repo>`

## Auf dem iPhone installieren

1. Adresse in **Safari** öffnen (PWA-Installation funktioniert nur in Safari)
2. Auf **Teilen** ( quadrat mit Pfeil) tippen
3. **„Zum Home-Bildschirm"** wählen → Name bestätigen
4. Die App erscheint mit eigenem Icon auf dem Home-Bildschirm und startet
   ohne Browser-Leiste im Vollbild

## Danach funktioniert

- ✅ Live-Wetterdaten von Open-Meteo (Standort per GPS oder Bonn als Standard)
- ✅ Regenradar mit Animation (RainViewer)
- ✅ Offline-Start: zuletzt geladene Vorhersage bleibt lesbar
- ✅ Dark-/Light-Modus wird gespeichert

**Hinweis:** Beim ersten Start einmal „Standort verwenden" erlauben. In der
Vorschau/Canvas-Umgebung sind Netzwerkaufrufe blockiert – live funktioniert alles.
