# AI Rules for React + Tauri + SQLite Desktop App

You are building a desktop application using React + Tauri + SQLite.

## Key Technologies & Guidelines

### Frontend (React)
- Use React 18 with TypeScript
- Use Vite as the build tool
- Use Tailwind CSS v4 for styling
- Use Shadcn/UI components for consistent design
- Follow React best practices and hooks patterns

### Backend (Tauri)
- Use Tauri 2.x for desktop app wrapper
- Implement SQLite operations using `@tauri-apps/plugin-sql`
- Keep all database operations on the frontend using Tauri's SQL plugin
- Use proper error handling for all database operations

### Database (SQLite)
- Use SQLite for local data storage
- Access database via `Database.load("sqlite:filename.db")`
- Create tables with `CREATE TABLE IF NOT EXISTS`
- Use parameterized queries to prevent SQL injection: `db.execute("INSERT INTO table (col) VALUES (?)", [value])`
- Handle database errors gracefully

### Desktop-specific Features
- Optimize UI for desktop usage (proper window sizing, keyboard shortcuts)
- Use native-feeling interactions
- Keep data local and secure
- Provide offline-first functionality

## Code Patterns

### Database Connection
```typescript
import Database from "@tauri-apps/plugin-sql";

const db = await Database.load("sqlite:myapp.db");
```

### CRUD Operations
```typescript
// Create
await db.execute("INSERT INTO table (column) VALUES (?)", [value]);

// Read
const results = await db.select<Type[]>("SELECT * FROM table WHERE id = ?", [id]);

// Update
await db.execute("UPDATE table SET column = ? WHERE id = ?", [value, id]);

// Delete
await db.execute("DELETE FROM table WHERE id = ?", [id]);
```

### Error Handling
```typescript
try {
  // database operation
} catch (err) {
  console.error("Database error:", err);
  setError("User-friendly error message");
}
```

### Component Structure
- Use functional components with hooks
- Separate concerns (database logic, UI logic)
- Use TypeScript interfaces for data types
- Implement loading states and error handling

## Build Commands
- `npm run tauri:dev` - Development with hot reload
- `npm run tauri:build` - Build for production
- `npm run build` - Build web assets only

## Important Notes
- SQLite database files are stored locally on the user's machine
- All operations are synchronous from the UI perspective
- Use loading states for better UX
- Always validate user inputs before database operations
- Keep the app lightweight and fast
- Focus on desktop UX patterns over web patterns

# Tech Stack

- You are building a desktop application using React + Tauri + SQLite.
- Use TypeScript for all code.
- Use React Router for navigation. KEEP the routes in src/App.tsx
- Always put source code in the src folder.
- Put pages into src/pages/
- Put components into src/components/
- The main page (default page) is src/pages/Index.tsx
- UPDATE the main page to include the new components. OTHERWISE, the user can NOT see any components!
- ALWAYS try to use the shadcn/ui library.
- Tailwind CSS: always use Tailwind CSS for styling components. Utilize Tailwind classes extensively for layout, spacing, colors, and other design aspects.

Available packages and libraries:

- The lucide-react package is installed for icons.
- You ALREADY have ALL the shadcn/ui components and their dependencies installed. So you don't need to install them again.
- You have ALL the necessary Radix UI components installed.
- Use prebuilt components from the shadcn/ui library after importing them. Note that these files shouldn't be edited, so make new components if you need to change them.
- React Router DOM is available for navigation between pages.
- TanStack Query is available for state management and data fetching.
- React Hook Form with Zod validation is available for forms.
- Date-fns is available for date manipulation.
- Sonner is available for toast notifications.
- Recharts is available for data visualization.

## Desktop-specific Guidelines

### Backend (Tauri)
- Use Tauri 2.x for desktop app wrapper
- Implement SQLite operations using `@tauri-apps/plugin-sql`
- Keep all database operations on the frontend using Tauri's SQL plugin
- Use proper error handling for all database operations

### Database (SQLite)
- Use SQLite for local data storage
- Access database via `Database.load("sqlite:filename.db")`
- Create tables with `CREATE TABLE IF NOT EXISTS`
- Use parameterized queries to prevent SQL injection: `db.execute("INSERT INTO table (col) VALUES (?)", [value])`
- Handle database errors gracefully

### Desktop-specific Features
- Optimize UI for desktop usage (proper window sizing, keyboard shortcuts)
- Use native-feeling interactions
- Keep data local and secure
- Provide offline-first functionality

## Code Patterns

### Database Connection
```typescript
import Database from "@tauri-apps/plugin-sql";

const db = await Database.load("sqlite:myapp.db");
```

### CRUD Operations
```typescript
// Create
await db.execute("INSERT INTO table (column) VALUES (?)", [value]);

// Read
const results = await db.select<Type[]>("SELECT * FROM table WHERE id = ?", [id]);

// Update
await db.execute("UPDATE table SET column = ? WHERE id = ?", [value, id]);

// Delete
await db.execute("DELETE FROM table WHERE id = ?", [id]);
```

### Error Handling
```typescript
try {
  // database operation
} catch (err) {
  console.error("Database error:", err);
  setError("User-friendly error message");
}
```

### Component Structure
- Use functional components with hooks
- Separate concerns (database logic, UI logic)
- Use TypeScript interfaces for data types
- Implement loading states and error handling

## Build Commands
- `npm run tauri:dev` - Development with hot reload
- `npm run tauri:build` - Build for production
- `npm run build` - Build web assets only

## Important Notes
- SQLite database files are stored locally on the user's machine
- All operations are synchronous from the UI perspective
- Use loading states for better UX
- Always validate user inputs before database operations
- Keep the app lightweight and fast
- Focus on desktop UX patterns over web patterns 