import { z } from "zod";

import { publicProcedure, router } from "../index";

// Import template types - we'll need to share these between packages
// For now, using a simple inline type that matches the Template interface
type Template = {
  id: string;
  name: string;
  description: string;
  previewImage?: string;
  category?: string;
  tags?: string[];
  code: string;
  sections?: Array<{
    id: string;
    name: string;
    code: string;
    description?: string;
  }>;
  seo?: {
    title: string;
    description: string;
    keywords?: string[];
  };
};

// Mock data - in production, this would come from a database
// For now, matching the structure from apps/web/src/data/templates.ts
const templates: Template[] = [
  {
    id: "minimal-modern",
    name: "Minimal Modern Waitlist",
    description: "A clean, minimalistic landing page template perfect for waitlist signups",
    category: "minimal",
    tags: ["minimal", "modern", "waitlist"],
    code: "// Template code will be added in Phase 5",
    seo: {
      title: "Minimal Modern Waitlist - Landing Page Template",
      description: "A clean, minimalistic landing page template perfect for waitlist signups",
      keywords: ["waitlist", "landing page", "minimal", "modern"],
    },
  },
  {
    id: "bold-animated",
    name: "Bold Animated Waitlist",
    description: "A bold, eye-catching template with smooth animations",
    category: "bold",
    tags: ["bold", "animated", "waitlist"],
    code: "// Template code will be added in Phase 5",
    seo: {
      title: "Bold Animated Waitlist - Landing Page Template",
      description: "A bold, eye-catching template with smooth animations",
      keywords: ["waitlist", "landing page", "bold", "animated"],
    },
  },
  {
    id: "elegant-gradient",
    name: "Elegant Gradient Waitlist",
    description: "An elegant template with beautiful gradient overlays",
    category: "elegant",
    tags: ["elegant", "gradient", "waitlist"],
    code: "// Template code will be added in Phase 5",
    seo: {
      title: "Elegant Gradient Waitlist - Landing Page Template",
      description: "An elegant template with beautiful gradient overlays",
      keywords: ["waitlist", "landing page", "elegant", "gradient"],
    },
  },
];

export const templatesRouter = router({
  getTemplates: publicProcedure.query(() => {
    return templates;
  }),

  getTemplateById: publicProcedure.input(z.string()).query(({ input }) => {
    const template = templates.find((t) => t.id === input);
    if (!template) {
      throw new Error(`Template with id "${input}" not found`);
    }
    return template;
  }),
});

