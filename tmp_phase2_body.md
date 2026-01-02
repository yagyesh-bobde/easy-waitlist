## Context

Part of Epic: #1

## Overview

Set up the data structure for templates and decide on storage approach (initially can be static data, later can be moved to database).

## Tasks

- [ ] Define TypeScript types for template data structure
  - [ ] Create `Template` type with id, name, description, preview, code, etc.
  - [ ] Create `TemplateSection` type if needed for future component copying
- [ ] Create static template data file
  - [ ] Store initial templates as JSON/TypeScript data
  - [ ] Include at least 2-3 example templates for initial launch
- [ ] Create tRPC router for templates (optional, for future API needs)
  - [ ] Add `getTemplates` procedure
  - [ ] Add `getTemplateById` procedure

## Technical Details

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

## Acceptance Criteria

- [ ] All tasks in this phase completed
- [ ] Code passes lint and typecheck
- [ ] Changes follow project conventions

