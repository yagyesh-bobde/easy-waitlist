# Implementation Plan: Landing Page Template Platform

## Overview

Build a platform for browsing and copying landing page templates. The implementation will start with a minimalistic platform landing page, then add template browsing and individual template pages with code copy functionality.

## Phase 1: Platform Landing Page

Create the main landing page for the platform itself. This should be minimalistic, modern, and showcase the platform's purpose.

### Tasks

- [ ] Design and implement minimalistic platform landing page [complex]
  - [ ] Create hero section with platform name and tagline
  - [ ] Add feature highlights section
  - [ ] Add call-to-action section
  - [ ] Implement smooth scroll animations
  - [ ] Ensure responsive design across all breakpoints
- [ ] Add SEO optimization to platform landing page
  - [ ] Configure meta tags (title, description, keywords)
  - [ ] Add Open Graph tags
  - [ ] Add Twitter Card tags
  - [ ] Implement structured data (JSON-LD)
  - [ ] Ensure semantic HTML structure
- [ ] Create navigation header component
  - [ ] Add logo/brand name
  - [ ] Add navigation links (Home, Templates)
  - [ ] Make header sticky with smooth transitions
  - [ ] Ensure mobile-responsive navigation

### Technical Details

**File Structure:**
- `apps/web/src/routes/index.tsx` - Main platform landing page
- `apps/web/src/components/header.tsx` - Navigation header (update existing)
- `apps/web/src/components/footer.tsx` - Footer component (new)

**SEO Configuration:**
- Meta tags should be added to `apps/web/src/routes/__root.tsx` or via TanStack Start's meta API
- Use TanStack Start's `Meta` component or `useDocumentMeta` hook
- Structured data should be added as JSON-LD script tags

**Animation Library:**
- Consider using `framer-motion` for React animations or CSS animations with TailwindCSS
- Install: `bun add framer-motion` (if using Framer Motion)
- Or use TailwindCSS animation utilities and CSS transitions

**Design Guidelines:**
- Minimalistic aesthetic - clean, spacious, modern
- Color scheme: Use existing TailwindCSS theme or create custom palette
- Typography: Use system fonts or add a modern font (e.g., Inter, Geist)
- Animations: Subtle fade-ins, slide-ins, and hover effects

## Phase 2: Template Data Structure & Storage

Set up the data structure for templates and decide on storage approach (initially can be static data, later can be moved to database).

### Tasks

- [ ] Define TypeScript types for template data structure
  - [ ] Create `Template` type with id, name, description, preview, code, etc.
  - [ ] Create `TemplateSection` type if needed for future component copying
- [ ] Create static template data file
  - [ ] Store initial templates as JSON/TypeScript data
  - [ ] Include at least 2-3 example templates for initial launch
- [ ] Create tRPC router for templates (optional, for future API needs)
  - [ ] Add `getTemplates` procedure
  - [ ] Add `getTemplateById` procedure

### Technical Details

**Type Definitions:**
```typescript
// apps/web/src/types/template.ts
export interface Template {
  id: string;
  name: string;
  description: string;
  previewImage?: string;
  category?: string;
  tags?: string[];
  code: string; // Full template code
  sections?: TemplateSection[]; // For future component copying
  seo?: {
    title: string;
    description: string;
    keywords?: string[];
  };
}

export interface TemplateSection {
  id: string;
  name: string;
  code: string;
  description?: string;
}
```

**Data Storage:**
- Initially: `apps/web/src/data/templates.ts` - Static TypeScript/JSON file
- Future: Move to database or CMS

**tRPC Router:**
- File: `packages/api/src/routers/templates.ts`
- Procedures:
  - `getTemplates: publicProcedure.query(() => Template[])`
  - `getTemplateById: publicProcedure.input(z.string()).query(({ input }) => Template)`

## Phase 3: Template Gallery Page

Create a page where users can browse all available templates in a gallery/grid layout.

### Tasks

- [ ] Create templates gallery route (`/templates`)
  - [ ] Set up route file `apps/web/src/routes/templates.tsx`
  - [ ] Fetch templates data (from static file or tRPC)
- [ ] Design template card component
  - [ ] Display template preview image/thumbnail
  - [ ] Show template name and description
  - [ ] Add "View Template" button/link
  - [ ] Add hover effects and animations
- [ ] Implement gallery grid layout
  - [ ] Responsive grid (1 col mobile, 2-3 cols tablet, 3-4 cols desktop)
  - [ ] Add loading states
  - [ ] Add empty state if no templates
- [ ] Add SEO optimization to gallery page
  - [ ] Meta tags for templates page
  - [ ] Structured data for template collection

### Technical Details

**Route Setup:**
- File: `apps/web/src/routes/templates.tsx`
- Use `createFileRoute` from TanStack Router
- Fetch templates using tRPC or direct import from static data

**Template Card Component:**
- File: `apps/web/src/components/templates/template-card.tsx`
- Props: `{ template: Template }`
- Use shadcn/ui Card component as base
- Add Link to navigate to `/templates/${template.id}`

**Layout:**
- Use CSS Grid or Flexbox with TailwindCSS
- Responsive classes: `grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4`
- Add gap spacing: `gap-4` or `gap-6`

**SEO:**
- Page title: "Landing Page Templates - [Platform Name]"
- Meta description: "Browse modern, animated landing page templates for waitlists"
- Add JSON-LD structured data for ItemList

## Phase 4: Individual Template Pages

Create dedicated pages for each template that showcase the full landing page and provide code copying functionality.

### Tasks

- [ ] Create dynamic template route (`/templates/$templateId`)
  - [ ] Set up route file `apps/web/src/routes/templates/$templateId.tsx`
  - [ ] Fetch template data by ID
  - [ ] Handle 404 for non-existent templates
- [ ] Render template landing page
  - [ ] Create component that renders the template's code/component
  - [ ] Ensure template is fully functional and interactive
  - [ ] Add smooth animations as defined in template
- [ ] Add code display section
  - [ ] Create code block component with syntax highlighting
  - [ ] Display full template code
  - [ ] Add line numbers (optional)
  - [ ] Ensure code is readable and well-formatted
- [ ] Implement copy functionality
  - [ ] Add copy button to code blocks
  - [ ] Implement clipboard API integration
  - [ ] Add visual feedback (toast notification) on copy
  - [ ] Handle copy errors gracefully
- [ ] Add template metadata section
  - [ ] Display template name, description, tags
  - [ ] Add "Copy Full Code" button
  - [ ] Add template preview image (if available)
- [ ] Add SEO optimization per template
  - [ ] Dynamic meta tags based on template data
  - [ ] Open Graph image (use template preview)
  - [ ] Structured data for individual template

### Technical Details

**Route Setup:**
- File: `apps/web/src/routes/templates/$templateId.tsx`
- Use TanStack Router's `$` syntax for dynamic routes
- Load template: `const template = templates.find(t => t.id === templateId)`
- Handle 404: Use TanStack Router's `notFound()` or redirect

**Code Highlighting:**
- Option 1: `shiki` (VS Code syntax highlighting) - `bun add shiki`
- Option 2: `prismjs` - `bun add prismjs @types/prismjs`
- Option 3: `react-syntax-highlighter` - `bun add react-syntax-highlighter @types/react-syntax-highlighter`
- Recommended: `shiki` for best quality and performance

**Code Block Component:**
- File: `apps/web/src/components/templates/code-block.tsx`
- Props: `{ code: string; language: string; title?: string }`
- Features:
  - Syntax highlighting
  - Copy button (top-right corner)
  - Scrollable container
  - Line numbers (optional)

**Copy Functionality:**
```typescript
const copyToClipboard = async (text: string) => {
  try {
    await navigator.clipboard.writeText(text);
    toast.success("Code copied to clipboard!");
  } catch (err) {
    toast.error("Failed to copy code");
  }
};
```

**Template Rendering:**
- Option 1: Store templates as React components, import and render
- Option 2: Store templates as JSX strings, use `dangerouslySetInnerHTML` (not recommended)
- Option 3: Store templates as code strings, use a code evaluator (complex)
- Recommended: Store as React components in `apps/web/src/templates/[template-id]/index.tsx`

**SEO Per Template:**
- Dynamic meta tags: `useDocumentMeta` or `<Meta>` component
- Title: `{template.name} - Landing Page Template`
- Description: `template.seo?.description || template.description`
- OG Image: `template.previewImage`
- Structured data: JSON-LD for SoftwareApplication or WebPage

## Phase 5: Template Creation & Styling

Create the actual landing page templates. Start with 2-3 high-quality, modern templates.

### Tasks

- [ ] Create Template 1: Minimal Modern Waitlist
  - [ ] Design hero section with animated gradient background
  - [ ] Add waitlist signup form
  - [ ] Add feature highlights section
  - [ ] Add footer section
  - [ ] Implement smooth scroll animations
  - [ ] Ensure SEO-friendly content
- [ ] Create Template 2: Bold Animated Waitlist
  - [ ] Design bold hero with large typography
  - [ ] Add animated statistics/numbers section
  - [ ] Add waitlist CTA section
  - [ ] Add social proof section
  - [ ] Implement parallax or scroll-triggered animations
- [ ] Create Template 3: Elegant Gradient Waitlist
  - [ ] Design elegant hero with gradient overlays
  - [ ] Add benefits/features grid
  - [ ] Add waitlist form with validation
  - [ ] Add testimonials section
  - [ ] Implement fade-in animations on scroll

### Technical Details

**Template Structure:**
```
apps/web/src/templates/
├── minimal-modern/
│   ├── index.tsx          # Template component
│   ├── styles.css         # Template-specific styles (if needed)
│   └── README.md          # Template documentation
├── bold-animated/
│   └── index.tsx
└── elegant-gradient/
    └── index.tsx
```

**Template Component Pattern:**
```typescript
// apps/web/src/templates/minimal-modern/index.tsx
export default function MinimalModernTemplate() {
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="hero-section">
        {/* Content */}
      </section>
      
      {/* Features Section */}
      <section className="features-section">
        {/* Content */}
      </section>
      
      {/* Waitlist Form */}
      <section className="waitlist-section">
        {/* Form */}
      </section>
      
      {/* Footer */}
      <footer>
        {/* Footer content */}
      </footer>
    </div>
  );
}
```

**Animation Libraries:**
- Use `framer-motion` for complex animations: `bun add framer-motion`
- Or use CSS animations with TailwindCSS utilities
- Consider `react-intersection-observer` for scroll-triggered animations: `bun add react-intersection-observer`

**Waitlist Form:**
- Use shadcn/ui Input and Button components
- Add form validation (client-side)
- For now, form submission can be a placeholder (future: integrate with waitlist API)
- Use `@tanstack/react-form` (already installed) for form management

**SEO Content:**
- Each template should have semantic HTML
- Use proper heading hierarchy (h1, h2, h3)
- Add alt text to images
- Include relevant keywords naturally in content
- Ensure content is unique and valuable

## Phase 6: Polish & Enhancements

Final polish, performance optimizations, and user experience improvements.

### Tasks

- [ ] Add loading states and skeletons
  - [ ] Skeleton component for template cards
  - [ ] Loading state for template page
- [ ] Optimize performance
  - [ ] Lazy load template components
  - [ ] Optimize images (use next/image equivalent or optimize manually)
  - [ ] Code splitting for template routes
- [ ] Add search/filter functionality (optional)
  - [ ] Search templates by name
  - [ ] Filter by category/tags
- [ ] Improve accessibility
  - [ ] Add ARIA labels
  - [ ] Ensure keyboard navigation
  - [ ] Test with screen readers
  - [ ] Ensure proper color contrast
- [ ] Add analytics tracking (optional)
  - [ ] Track template views
  - [ ] Track copy actions
- [ ] Add footer component
  - [ ] Add footer to all pages
  - [ ] Include links, copyright, etc.

### Technical Details

**Lazy Loading:**
- Use React.lazy() for template components
- Use Suspense boundaries
- Example:
```typescript
const MinimalModernTemplate = lazy(() => import('@/templates/minimal-modern'));
```

**Code Splitting:**
- TanStack Router handles code splitting automatically
- Ensure templates are imported dynamically in route files

**Search/Filter:**
- Use client-side filtering for now (static data)
- Add search input in templates gallery
- Filter templates array based on search query
- Future: Move to server-side search if templates are in database

**Accessibility:**
- Use semantic HTML elements
- Add `aria-label` to icon buttons
- Ensure focus states are visible
- Test with keyboard navigation (Tab, Enter, Escape)
- Use proper heading hierarchy

**Performance:**
- Optimize bundle size
- Use TailwindCSS purging (should be automatic)
- Minimize JavaScript bundle
- Optimize images (WebP format, proper sizing)

