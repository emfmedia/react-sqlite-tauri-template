# React + Tauri Template

A modern, hybrid template for React applications that works both in Dyad and as a standalone Tauri desktop application.

## ✨ Features

- **Hybrid Architecture**: Works both in Dyad and as a Tauri app
- **Modern UI**: 39+ Shadcn/UI components
- **Theme System**: Dark/Light mode with next-themes
- **State Management**: TanStack Query for server state
- **Routing**: React Router v6
- **Styling**: Tailwind CSS v3.4.11
- **TypeScript**: Complete type safety
- **Error Boundaries**: Robust error handling

## 🚀 Usage

### In Dyad (Default)
```bash
# The template is automatically used by Dyad
# No additional configuration required
```

### As Tauri Desktop App
```bash
# Development
pnpm run tauri:dev

# Build for desktop
pnpm run tauri:build
```

### As Web App
```bash
# Development
pnpm run dev

# Build
pnpm run build
```

## 🏗️ Project Structure

```
src/
├── components/          # UI components
│   ├── ui/             # Shadcn/UI components
│   ├── layout/         # Layout components
│   └── ErrorBoundary.tsx
├── pages/              # Page components
│   ├── Index.tsx       # Main page
│   └── NotFound.tsx    # 404 page
├── lib/                # Utilities
├── App.tsx             # Main app component
└── main.tsx            # Entry point
```

## 🛠️ Available Scripts

- `pnpm run dev` - Web development server
- `pnpm run build` - Web build
- `pnpm run tauri:dev` - Tauri development
- `pnpm run tauri:build` - Tauri desktop build
- `pnpm run lint` - ESLint
- `pnpm run clean` - Clear cache

## 🎨 UI Components

The template includes all important Shadcn/UI components:

- **Layout**: Card, Separator, Scroll Area
- **Navigation**: Tabs, Breadcrumb, Pagination
- **Forms**: Input, Button, Select, Checkbox, Switch
- **Feedback**: Alert, Toast, Dialog, Popover
- **Data Display**: Table, Avatar, Badge, Progress
- **Overlays**: Sheet, Drawer, Hover Card, Context Menu

## 🔧 Configuration

### Environment Detection
The template automatically detects the runtime environment:
- **Tauri**: Enables desktop-specific features
- **Web/Dyad**: Optimized for browser environment

### Theme Configuration
```typescript
// Automatic system theme detection
// Persistence in localStorage
// Seamless theme switching
```

### Vite Configuration
- **Flexible Ports**: Automatic port selection for Dyad
- **Fixed Ports**: Port 1420 for Tauri
- **Optimized Chunks**: Better performance
- **HMR**: Hot Module Replacement

## 📱 Responsive Design

The template is fully responsive and works on:
- Desktop (Tauri app)
- Tablets
- Mobile devices
- Various screen sizes

## 🐛 Debugging

### Development Tools
- React DevTools
- Vite HMR
- TypeScript error checking
- ESLint integration

### Error Boundaries
Comprehensive error handling on multiple levels:
- App-level error boundary
- Component-level error handling
- Graceful degradation

### Logging
```typescript
// Automatic error logging
console.error("Component error:", error);
```

## 🔒 Security

- CSP (Content Security Policy) for Tauri
- Secure external links
- Input validation
- XSS protection

## 📦 Dependencies

### Core
- React 18.3.1
- TypeScript 5.5.3
- Vite 6.3.4

### UI & Styling
- Tailwind CSS 3.4.11
- Radix UI components
- next-themes

### State & Routing
- TanStack Query 5.56.2
- React Router 6.26.2

### Tauri (Optional)
- @tauri-apps/api 2.5.0
- @tauri-apps/cli 2.5.0

## 🚀 Performance

- **Bundle Splitting**: Optimized chunk splitting
- **Tree Shaking**: Unused code elimination
- **Lazy Loading**: Component-based lazy loading
- **Caching**: Intelligent caching strategies

## 🌐 Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+

## 📄 License

MIT License - see LICENSE file for details.

---

**Made with Dyad** 🚀 