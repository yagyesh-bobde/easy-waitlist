## Context

Part of Epic: #1

## Overview

Create a page where users can browse all available templates in a gallery/grid layout.

## Tasks

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

## Technical Details

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

## Acceptance Criteria

- [ ] All tasks in this phase completed
- [ ] Code passes lint and typecheck
- [ ] Changes follow project conventions

