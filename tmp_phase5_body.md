## Context

Part of Epic: #1

## Overview

Create the actual landing page templates. Start with 2-3 high-quality, modern templates.

## Tasks

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

## Technical Details

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

## Acceptance Criteria

- [ ] All tasks in this phase completed
- [ ] Code passes lint and typecheck
- [ ] Changes follow project conventions

