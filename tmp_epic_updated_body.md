# Requirements: Landing Page Template Platform

## Overview

Build a platform similar to ChatCN but focused on landing page templates. The platform allows users to browse modern, animated landing page templates specifically designed for waitlists. Users can view templates and copy code blocks directly.

## Core Features

### 1. Platform Landing Page
- **Minimalistic design** - Clean, modern aesthetic focusing on front-end design skills
- **SEO-friendly** - Optimized meta tags, structured data, and semantic HTML
- **Responsive** - Works seamlessly across all device sizes
- **Animated** - Subtle animations that enhance the user experience

### 2. Template Browsing
- **Template Gallery** - Browse available landing page templates
- **Template Cards** - Each template displayed as a card with preview, name, and description
- **Template Details** - Individual pages for each template showcasing the full landing page

### 3. Template Pages
- **Modern Design** - Each template is a fully functional, modern landing page
- **Animations** - Smooth, professional animations throughout
- **Waitlist-Focused** - All templates are specifically tailored for waitlist signups
- **SEO-Optimized** - Proper meta tags, semantic HTML, and structured data
- **Code Display** - Code blocks showing the template's implementation
- **Copy Functionality** - Users can copy code blocks directly

### 4. Code Copy Feature
- **Code Blocks** - Display template code in syntax-highlighted code blocks
- **Copy Button** - One-click copy functionality for code blocks
- **Feedback** - Visual feedback when code is copied (toast notification)
- **Full Template Code** - Users can copy the entire template code

## Future Scope (Not in Initial Implementation)

- **Component Library** - Copy individual portions/sections of landing pages (like ChatCN)
- **Template Customization** - Allow users to customize templates before copying
- **Template Categories** - Organize templates by style, industry, etc.

## Acceptance Criteria

1. ✅ Platform has a minimalistic, modern landing page that showcases the platform
2. ✅ Users can browse available templates in a gallery view
3. ✅ Each template has its own dedicated page showing the full landing page
4. ✅ Templates are modern, animated, and waitlist-focused
5. ✅ All pages are SEO-friendly with proper meta tags and semantic HTML
6. ✅ Code blocks are displayed with syntax highlighting
7. ✅ Users can copy code blocks with one click
8. ✅ Copy action provides visual feedback
9. ✅ Platform is fully responsive across all device sizes
10. ✅ Animations are smooth and enhance UX without being distracting

## Technical Requirements

- **Framework**: TanStack Start (already in use)
- **Styling**: TailwindCSS (already in use)
- **Components**: shadcn/ui (already in use)
- **Animations**: CSS animations and/or Framer Motion (to be decided)
- **Code Highlighting**: Syntax highlighting library (e.g., Prism.js, Shiki, or highlight.js)
- **SEO**: Meta tags, Open Graph, Twitter Cards, structured data

## Dependencies

- Existing TanStack Start setup
- Existing TailwindCSS configuration
- Existing shadcn/ui components
- tRPC for any future API needs (if templates are stored server-side)

---

## Phases

- [ ] #2 Phase 1: Platform Landing Page
- [ ] #3 Phase 2: Template Data Structure & Storage
- [ ] #4 Phase 3: Template Gallery Page
- [ ] #5 Phase 4: Individual Template Pages
- [ ] #6 Phase 5: Template Creation & Styling
- [ ] #7 Phase 6: Polish & Enhancements

