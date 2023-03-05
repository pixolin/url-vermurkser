# URL-Vermurkser

Webseite mit kurzem JavaScript zum **Anonymisieren von URLs**.
Aus `https://myexample.com/` wird `https://mye…ple.com`.

Die Webseite verwendet ein Stylesheet aus dem OpenSource-Projekt [pico.css](https://picocss.com).

## Installation und Anwendung

```Bash
git clone https://github.com/pixolin/url-vermurkser.git
```

Anschließend das Verzeichnis im Browser öffnen, URL im angegebenen Format einfügen, Button anklicken. Die anonymisierte URL wird in die Zwischenablage kopiert.

Wer die Webseite auf einem öffentlich zugänglichen Server einsetzt, sollte zur Einhaltung der DSGVO das [CSS-Framework herunterladen](https://github.com/picocss/pico/archive/refs/heads/master.zip), entpacken, das Verzeichnis `css` kopiern und den Link zum Stylesheet auf `<link rel="stylesheet" href="css/pico.classless.min.css"  />` kürzen.

## Acknowledgement

Remerciements particuliers à Lucas Larroche, le développeur du génial framework CSS [pico.css](https://picocss.com).

---

© 2023 Bego Mario Garde, MIT-License
