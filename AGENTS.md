# Agent Guidelines for OldFont.net

## Development Commands

| Command | Description |
|---------|-------------|
| `npm run dev` | Start development server (http://localhost:3000) |
| `npm run build` | Build production bundle |
| `npm run start` | Start production server |
| `npm run lint` | Run ESLint |

**Testing**: No test framework is configured. When adding tests, set up Vitest or Jest and document commands here.

## Code Style & Conventions

### TypeScript
- Strict mode enabled in `tsconfig.json`
- Use `import type` for type-only imports
- Type all component props explicitly
- Use `React.ReactNode` for children prop

### Imports
- Path aliases: `@/components/*`, `@/lib/*`, `@/styles/*`
- Order: external libraries → Next.js → internal modules

```typescript
import { useCallback, useState } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { fontOptions } from '@/lib/fonts'
```

### Styling
- Use Tailwind CSS exclusively
- Custom colors: `parchment` (#f7f4eb), `ink` (#1f2937), `brass` (#b08d57)
- Use `clsx` for conditional classes

### Component Structure
- Server Components: Default (no `'use client'`)
- Client Components: Add `'use client'` at top
- Accept optional props with sensible defaults
- Destructure props in function signature

### Naming Conventions
| Type | Convention | Example |
|------|------------|---------|
| Components | PascalCase | `FontGeneratorTool` |
| Files | PascalCase (components), kebab-case (utilities) | `Button.tsx`, `font-utils.ts` |
| Functions/Variables | camelCase | `handleExport`, `selectedFont` |
| Types/Interfaces | PascalCase | `FontOption`, `ToolSeoConfig` |
| Constants (primitives) | UPPER_SNAKE_CASE | `MAX_FONT_SIZE` |
| Constants (objects) | camelCase | `fontOptions` |

### Error Handling
- Use try/catch for async operations
- `console.error` for debugging
- User-facing alerts for critical errors

```typescript
try {
  const dataUrl = await toPng(previewRef.current, options)
} catch (error) {
  console.error('Export failed:', error)
  alert('导出失败，请重试')
}
```

### State Management
- Use React hooks: `useState`, `useCallback`, `useMemo`, `useRef`
- Optimize with `useCallback` for event handlers passed to children
- Use `useMemo` for expensive computations

### Performance
- Use `'use client'` only when necessary
- Lazy load heavy components
- Export images at 2x pixel ratio for high DPI displays

## Project Structure

```
app/              # Next.js App Router pages and layouts
components/       # Reusable React components
  layout/         # Header, Footer, Container
  ui/             # Button, Input, Select
  tools/          # FontGeneratorTool, FontPreview
lib/              # Utilities (fonts, seo, schema)
public/           # Static assets
styles/           # Global CSS (globals.css)
```

### Key Files
- `lib/fonts.ts` - Font configuration, exports `fontVariables` and `fontOptions`
- `lib/seo.ts` - SEO helpers (`buildToolMetadata`)
- `lib/schema.ts` - Structured data
