# React + Tauri Template

Ein modernes, hybrides Template für React-Anwendungen, das sowohl in Dyad als auch als eigenständige Tauri-Desktop-Anwendung funktioniert.

## ✨ Features

- **Hybrid-Architektur**: Funktioniert sowohl in Dyad als auch als Tauri-App
- **Moderne UI**: 39+ Shadcn/UI Komponenten
- **Theme-System**: Dark/Light Mode mit next-themes
- **State Management**: TanStack Query für Server-State
- **Routing**: React Router v6
- **Styling**: Tailwind CSS v3.4.11
- **TypeScript**: Vollständige Typisierung
- **Error Boundaries**: Robuste Fehlerbehandlung

## 🚀 Verwendung

### In Dyad (Standard)
```bash
# Das Template wird automatisch von Dyad verwendet
# Keine zusätzliche Konfiguration erforderlich
```

### Als Tauri Desktop-App
```bash
# Entwicklung
pnpm run tauri:dev

# Build für Desktop
pnpm run tauri:build
```

### Als Web-App
```bash
# Entwicklung
pnpm run dev

# Build
pnpm run build
```

## 🏗️ Projekt-Struktur

```
src/
├── components/          # UI-Komponenten
│   ├── ui/             # Shadcn/UI Komponenten
│   ├── layout/         # Layout-Komponenten
│   └── ErrorBoundary.tsx
├── pages/              # Seiten-Komponenten
│   ├── Index.tsx       # Hauptseite
│   └── NotFound.tsx    # 404-Seite
├── lib/                # Utilities
├── App.tsx             # Haupt-App-Komponente
└── main.tsx            # Entry Point
```

## 🛠️ Verfügbare Scripts

- `pnpm run dev` - Web-Entwicklungsserver
- `pnpm run build` - Web-Build
- `pnpm run tauri:dev` - Tauri-Entwicklung
- `pnpm run tauri:build` - Tauri-Desktop-Build
- `pnpm run lint` - ESLint
- `pnpm run clean` - Cache löschen

## 🎨 UI-Komponenten

Das Template enthält alle wichtigen Shadcn/UI Komponenten:

- **Layout**: Card, Separator, Scroll Area
- **Navigation**: Tabs, Breadcrumb, Pagination
- **Forms**: Input, Button, Select, Checkbox, Switch
- **Feedback**: Alert, Toast, Dialog, Popover
- **Data Display**: Table, Avatar, Badge, Progress
- **Overlays**: Sheet, Drawer, Hover Card, Context Menu

## 🔧 Konfiguration

### Umgebungserkennung
Das Template erkennt automatisch die Laufzeitumgebung:
- **Tauri**: Aktiviert Desktop-spezifische Features
- **Web/Dyad**: Optimiert für Browser-Umgebung

### Theme-Konfiguration
```typescript
// Automatische Erkennung des System-Themes
// Persistierung in localStorage
// Nahtloser Theme-Wechsel
```

### Vite-Konfiguration
- **Flexible Ports**: Automatische Port-Auswahl für Dyad
- **Feste Ports**: Port 1420 für Tauri
- **Optimierte Chunks**: Bessere Performance
- **HMR**: Hot Module Replacement

## 📱 Responsive Design

Das Template ist vollständig responsive und funktioniert auf:
- Desktop (Tauri-App)
- Tablets
- Mobile Geräte
- Verschiedene Bildschirmgrößen

## 🐛 Debugging

### Entwicklungstools
- React DevTools
- Vite HMR
- TypeScript Fehlerprüfung
- ESLint Integration

### Error Boundaries
Umfassende Fehlerbehandlung auf mehreren Ebenen:
- App-Level Error Boundary
- Komponenten-Level Error Handling
- Graceful Degradation

### Logging
```typescript
// Automatisches Error-Logging
console.error("Component error:", error);
```

## 🔒 Sicherheit

- CSP (Content Security Policy) für Tauri
- Sichere externe Links
- Input-Validierung
- XSS-Schutz

## 📦 Dependencies

### Core
- React 18.3.1
- TypeScript 5.5.3
- Vite 6.3.4

### UI & Styling
- Tailwind CSS 3.4.11
- Radix UI Komponenten
- next-themes

### State & Routing
- TanStack Query 5.56.2
- React Router 6.26.2

### Tauri (Optional)
- @tauri-apps/api 2.5.0
- @tauri-apps/cli 2.5.0

## 🚀 Performance

- **Bundle Splitting**: Optimierte Chunk-Aufteilung
- **Tree Shaking**: Ungenutzte Code-Eliminierung
- **Lazy Loading**: Komponenten-basiertes Lazy Loading
- **Caching**: Intelligente Caching-Strategien

## 🌐 Browser-Unterstützung

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 Lizenz

MIT License - siehe LICENSE-Datei für Details.

---

**Made with Dyad** 🚀 