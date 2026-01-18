# Agent Guidelines for OldFont.net

## Development Commands

### Build & Development
- `npm run dev` - Start development server (http://localhost:3000)
- `npm run build` - Build production bundle
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

### Testing
No test framework is currently configured. When adding tests:
- Set up a test framework (e.g., Vitest, Jest)
- Add test script to package.json
- Document test commands here

## Code Style & Conventions

### TypeScript & Types
- Strict mode enabled in tsconfig.json
- Use `import type` for type-only imports
- Define interfaces/types before component exports
- Type all component props explicitly
- Use `React.ReactNode` for children prop

```typescript
import type { Metadata } from 'next'

type ButtonProps = {
  variant?: 'primary' | 'secondary'
  disabled?: boolean
  children: React.ReactNode
}
```

### File & Component Structure
- Server Components: Default, no `'use client'` directive
- Client Components: Add `'use client'` at top of file
- Layout files: Use default export for root and nested layouts
- Page files: Export metadata object for SEO

```typescript
'use client'

import { useState } from 'react'

export default function ClientComponent() {
  // Component logic
}
```

### Imports
- Use path aliases: `@/components/*`, `@/lib/*`, `@/styles/*`
- Group imports: external libraries first, then internal modules
- Next.js specific imports: `import Link from 'next/link'`, `import { usePathname } from 'next/navigation'`

```typescript
import { useCallback, useState } from 'react'
import Link from 'next/link'
import Button from '@/components/ui/Button'
import { fontOptions } from '@/lib/fonts'
```

### Styling
- Use Tailwind CSS for all styling
- Custom colors: `parchment` (#f7f4eb), `ink` (#1f2937), `brass` (#b08d57)
- Custom shadow: `shadow-soft` (0 10px 30px rgba(0,0,0,0.08))
- Use `clsx` for conditional classes
- Font variables applied in root layout: `fontVariables` from `@/lib/fonts`

```typescript
import clsx from 'clsx'

<button className={clsx(
  'base-classes',
  isActive && 'active-classes',
  className
)} />
```

### Font Configuration
- Use `next/font/google` for Google Fonts with `variable` option
- Use `next/font/local` for custom font files
- Export font instances with descriptive names
- Add to `fontVariables` array in `lib/fonts.ts`
- Export `fontOptions` array for UI selects

```typescript
export const bodyFont = Inter({
  subsets: ['latin'],
  variable: '--font-body'
})
```

### State Management
- Use React hooks: `useState`, `useCallback`, `useMemo`, `useRef`
- Optimize with `useCallback` for event handlers passed to children
- Use `useMemo` for expensive computations
- Refs for DOM access (e.g., html-to-image export)

```typescript
const handleExport = useCallback(async () => {
  if (!previewRef.current) return
  // Export logic
}, [dependencies])
```

### Error Handling
- Use try/catch for async operations
- Console.error for debugging
- User-facing alerts for critical errors
- Export functions handle failures gracefully

```typescript
try {
  const dataUrl = await toPng(previewRef.current, options)
  // Process data
} catch (error) {
  console.error('Export failed:', error)
  alert('导出失败，请重试')
}
```

### SEO & Metadata
- Define metadata object in page components
- Use `buildToolMetadata` helper from `@/lib/seo` for consistency
- Include OpenGraph and Twitter cards
- Add structured data with `@/lib/schema`

```typescript
export const metadata: Metadata = {
  title: 'Page Title | OldFont.net',
  description: 'Page description',
  alternates: { canonical: 'https://oldfont.net/page' }
}
```

### Component Props Pattern
- Accept optional props with sensible defaults
- Destructure props in function signature
- Spread remaining props to underlying elements

```typescript
export default function Button({ 
  children, 
  className, 
  variant = 'primary',
  ...props 
}: ButtonProps) {
  return <button className={className} {...props}>{children}</button>
}
```

### Naming Conventions
- Components: PascalCase (e.g., `FontGeneratorTool`)
- Functions/Variables: camelCase (e.g., `handleExport`, `selectedFont`)
- Types/Interfaces: PascalCase (e.g., `FontOption`, `ToolSeoConfig`)
- Constants: camelCase for objects, UPPER_SNAKE_CASE for primitives
- Files: PascalCase for components, kebab-case for utilities

## Project Architecture

### Directory Structure
- `app/` - Next.js App Router pages and layouts
- `components/` - Reusable React components
  - `layout/` - Layout components (Header, Footer, Container)
  - `ui/` - Basic UI primitives (Button, Input, Select)
  - `tools/` - Feature-specific components (FontGeneratorTool, FontPreview)
- `lib/` - Utility functions and configurations (fonts, seo, schema)
- `public/` - Static assets (fonts, images)
- `styles/` - Global CSS (globals.css)

### Component Composition
- Keep components small and focused
- Pass data through props, avoid deep prop drilling where possible
- Use composition for flexible UI patterns
- Client components should be as small as possible

### Performance Considerations
- Use `'use client'` only when necessary
- Lazy load heavy components when appropriate
- Optimize font loading with `next/font/google`
- Use `useCallback` and `useMemo` to prevent unnecessary re-renders
- Export images at 2x pixel ratio for high DPI displays
