@AGENTS.md

# Techmate Developer Guidelines & Project Scan Reference

This document serves as the primary reference for the Techmate frontend project, outlining development commands, project structure, architecture patterns, and styling standards.

## 🛠️ Development Commands

- **Start Dev Server**: `bun run dev` (uses Next.js Dev Server)
- **Production Build**: `bun run build` (builds the Next.js production package)
- **Start Production Server**: `bun run start` (serves the built application)
- **Lint Code**: `bun run lint` (runs ESLint checks)

---

## 📂 Architecture & Directory Structure

We use Next.js 16 (App Router) with a structured hybrid page development pattern. Every main page in the `app/` directory follows a **3-Tier Structure**:

```text
app/[page-folder]/
├── page.tsx                  # SSR Layer: Summons all sections and manages page metadata/fetching
├── _sections/                # Sections Layer: Main full-width UI sections of the page
│   ├── HeroSection.tsx
│   └── ServicesSection.tsx
└── _components/              # Page-Specific Components Layer: Local components used ONLY in this page's sections
    └── LocalCard.tsx
```

### 1. Structure Breakdown:
* **`page.tsx` (Summoner)**: Acts as the entry point. Primarily Server Component (SSR) by default. It fetches initial data, defines metadata, and renders the corresponding sections in order.
* **`_sections/`**: Co-locates high-level visual/layout segments of the page. Sections can be Server Components (for content) or Client Components (for interactivity).
* **`_components/`**: Houses small, reusable UI elements used strictly inside the current page's sections (e.g. specialized cards, custom toggle buttons, unique animations).
* **`components/ui/` (Shadcn UI)**: Global reusable components (e.g. `button.tsx`) configured using `@base-ui/react` and Tailwind CSS.
* **`lib/`**: Global helper utilities (like `cn` in `utils.ts`).

---

## ⚡ Hybrid SSR + CSR Development Pattern

1. **Server-Side Rendering (SSR) by Default**:
   - Keep page-level components (`page.tsx`) as Server Components to benefit from fast initial load and excellent SEO.
   - Perform API fetches and generate dynamic metadata inside Server Components.

2. **Client-Side Rendering (CSR) for Interactivity**:
   - Use `"use client"` at the very top of files inside `_sections/` or `_components/` only when they require:
     - React hooks (`useState`, `useEffect`, `useContext`, `useRef`).
     - Framer Motion animation triggers.
     - Browser-specific event handlers (click, submit, scroll).
   - Keep interactive parts isolated into smaller client-side components to minimize the client-side JavaScript bundle.

---

## 🎨 Coding & Styling Standards

* **Styling**: Tailwind CSS v4 using modern `@tailwindcss/postcss` and CSS Variables in `app/globals.css`.
* **Colors**: Prefer the custom `oklch` theme variables. High-contrast colors with vivid accent shades (e.g., emerald green, black backgrounds).
* **Aesthetic**: Premium Retro/Arcade style.
  * **Typography**: Modern typography blended with the retro font `Press Start 2P` (`font-[family-name:var(--font-press-start-2p)]`) for labels, key titles, and buttons.
  * **Shapes**: Pixel-perfect borders, sharp edges (`rounded-none`), solid borders, and offset solid retro shadows.
* **Icons**: Always import icons from `lucide-react`.
* **Component Framework**: shadcn components integrated with `@base-ui/react`.
