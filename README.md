# Jacob Weizman - Digital Detox Website

## 🌟 Überblick

Eine moderne, vollständig erneuerte Website für Jacob Weizman's Digital Detox Programm. Die Website wurde von Grund auf neu entwickelt mit Fokus auf:

- **Moderne UI/UX**: Ansprechendes Design mit smooth Animationen
- **Performance**: Optimiert für schnelle Ladezeiten
- **Responsive Design**: Funktioniert perfekt auf allen Geräten
- **Barrierefreiheit**: WCAG-konform und keyboard-navigierbar

## 🎨 Design & Farbschema

### Farbpalette (Original beibehalten)
- **Primary**: `#F9885F` (Coral Orange)
- **Primary Dark**: `#E66B3F` 
- **Primary Light**: `#FFAA88`
- **Text Dark**: `#1a1a1a`
- **Background Cream**: `#FFF8F5`

### Typografie
- **Headings**: Playfair Display (Serif)
- **Body**: Inter (Sans-serif)

## 🚀 Features

### Animationen & Interaktionen
- ✨ Smooth Scroll Navigation
- 📜 Scroll-triggered Reveal Animations
- 🔄 Parallax Effects im Hero
- 📊 Animated Statistics Counter
- 🎯 Active Section Tracking
- 💫 Hover Effects & Transitions

### Sections
1. **Hero** - Großer Einstieg mit Call-to-Actions
2. **Mission** - Warum Digital Detox mit Statistiken
3. **Über mich** - Persönliche Vorstellung
4. **4-Wochen-Programm** - Timeline mit Details
5. **Benefits** - Vorteile des Programms
6. **Das Buch** - Buchpräsentation
7. **Testimonials** - Kundenstimmen
8. **Instagram Feed** - Social Media Integration
9. **Kontakt** - Kontaktformular

### Technologie Stack
- **HTML5**: Semantisches, modernes Markup
- **CSS3**: 
  - CSS Variables für einfache Anpassungen
  - Flexbox & Grid Layout
  - Custom Animations
  - Mobile-First Approach
- **Vanilla JavaScript ES6+**:
  - Modular Class-based Architecture
  - Intersection Observer API
  - Smooth Scrolling
  - Event Delegation
  - Performance Optimizations

## 📁 Dateistruktur

```
jacob-weizman.com/
├── index.html              # Hauptseite (neu)
├── styles/
│   ├── modern.css          # Alle Styles (neu)
│   └── [alte Dateien]      # Können gelöscht werden
├── scripts/
│   ├── modern.js           # Alle Interaktionen (neu)
│   └── [alte Dateien]      # Können gelöscht werden
├── images/
│   ├── pexels-helenalopes-708440.jpg
│   ├── Bildschirmfoto-2025-09-17-um-18.09.54.png
│   ├── IMG_3334.jpeg
│   └── [weitere Bilder]
└── pages/
    ├── impressum.html
    ├── datenschutz.html
    └── [weitere Seiten]
```

## 🛠️ Installation & Setup

### Option 1: Docker (Empfohlen) 🐳

1. **Mit Docker Compose**:
   ```bash
   docker-compose up -d
   ```

2. **Manuell mit Docker**:
   ```bash
   # Build
   docker build -t jacob-weizman-website .
   
   # Run
   docker run -d -p 6343:6343 --name jacob-weizman-web jacob-weizman-website
   ```

3. **Browser öffnen**:
   ```
   http://localhost:6343
   ```

4. **Container stoppen**:
   ```bash
   docker-compose down
   # oder
   docker stop jacob-weizman-web
   ```

### Option 2: Lokaler Test

1. **Mit Python**:
   ```bash
   python -m http.server 8000
   ```

2. **Mit Node.js**:
   ```bash
   npx serve
   ```

3. **Browser öffnen**:
   ```
   http://localhost:8000
   ```

## ⚙️ Anpassungen

### Farben ändern
Bearbeite die CSS Variables in `styles/modern.css`:
```css
:root {
    --primary-color: #F9885F;
    --primary-dark: #E66B3F;
    /* ... weitere Variablen */
}
```

### Texte anpassen
Alle Texte befinden sich direkt im HTML (`index.html`). Suche nach dem entsprechenden Abschnitt und passe ihn an.

### Bilder austauschen
Ersetze die Bilder im `images/` Ordner und aktualisiere die Pfade in `index.html`.

## 📱 Responsive Breakpoints

- **Mobile**: < 768px
- **Tablet**: 768px - 992px
- **Desktop**: > 992px
- **Large Desktop**: > 1200px

## 🎯 Performance Optimierungen

- **Lazy Loading** für Bilder
- **Intersection Observer** für Animations
- **Debounced/Throttled** Scroll Events
- **CSS Animations** statt JavaScript wo möglich
- **Minimale Dependencies** (Vanilla JS, keine Frameworks)

## 🔧 Kontaktformular Integration

Das Formular ist aktuell als Demo implementiert. Für echte Funktionalität:

1. **Backend API** erstellen oder
2. **Service wie Formspree** nutzen:
   ```html
   <form action="https://formspree.io/f/YOUR_ID" method="POST">
   ```

## 📊 Browser Support

- ✅ Chrome (letzte 2 Versionen)
- ✅ Firefox (letzte 2 Versionen)
- ✅ Safari (letzte 2 Versionen)
- ✅ Edge (letzte 2 Versionen)
- ✅ Mobile Browsers

## 🚀 Deployment

### Docker Deployment

**Lokal testen**:
```bash
docker-compose up -d
# Website läuft auf http://localhost:6343
```

**Production Deployment**:
```bash
# Build für Production
docker build -t jacob-weizman-website:latest .

# Push zu Docker Registry (optional)
docker tag jacob-weizman-website:latest your-registry/jacob-weizman-website:latest
docker push your-registry/jacob-weizman-website:latest

# Deploy auf Server
docker run -d \
  --name jacob-weizman-web \
  -p 6343:6343 \
  --restart unless-stopped \
  jacob-weizman-website:latest
```

### GitHub Pages
```bash
git add .
git commit -m "Website relaunch"
git push origin main
```

### Netlify / Vercel
Einfach Repository verbinden und deployen.

### Eigener Server
Upload die Dateien via FTP/SFTP oder benutze die Docker-Variante.

## 📝 Nächste Schritte

- [ ] Analytics Integration (Google Analytics / Plausible)
- [ ] SEO Optimierung (Meta Tags, Schema.org)
- [ ] Blog Section hinzufügen
- [ ] Newsletter Integration
- [ ] Multi-language Support
- [ ] Dark Mode Option
- [ ] Progressive Web App (PWA) Features

## 🤝 Support & Kontakt

Bei Fragen oder Anpassungswünschen:
- Email: info@jacob-weizman.com
- Instagram: @daily4climate

## 📄 Lizenz

© 2026 Jacob Weizman. Alle Rechte vorbehalten.

---

**Viel Erfolg mit der neuen Website! 🎉**

*Erstellt mit ❤️ und modernem Vanilla JavaScript*
