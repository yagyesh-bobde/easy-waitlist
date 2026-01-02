## Context

Part of Epic: #1

## Overview

Create dedicated pages for each template that showcase the full landing page and provide code copying functionality.

## Tasks

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

## Technical Details

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

## Acceptance Criteria

- [ ] All tasks in this phase completed
- [ ] Code passes lint and typecheck
- [ ] Changes follow project conventions

