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

