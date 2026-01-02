import { lazy, Suspense } from "react";
import type { Template } from "@/types/template";

interface TemplateRendererProps {
  template: Template;
}

/**
 * Template registry - maps template IDs to their component imports
 * Add new templates here as they are created in Phase 5
 */
const templateRegistry: Record<
  string,
  () => Promise<{ default: React.ComponentType }>
> = {
  "minimal-modern": () => import("@/templates/minimal-modern"),
  "bold-animated": () => import("@/templates/bold-animated"),
  "elegant-gradient": () => import("@/templates/elegant-gradient"),
};

/**
 * TemplateRenderer dynamically loads and renders template components.
 * Templates are stored as React components in apps/web/src/templates/[template-id]/index.tsx
 */
export default function TemplateRenderer({ template }: TemplateRendererProps) {
  // Check if template exists in registry
  const templateLoader = templateRegistry[template.id];

  // If template component exists, render it with Suspense for lazy loading
  if (templateLoader) {
    const LazyTemplate = lazy(templateLoader);

    return (
      <Suspense fallback={<TemplateLoadingSkeleton />}>
        <div className="animate-in fade-in duration-500">
          <LazyTemplate />
        </div>
      </Suspense>
    );
  }

  // Fallback placeholder for templates that haven't been created yet
  return <TemplatePlaceholder template={template} />;
}

/**
 * Placeholder component shown when a template component doesn't exist yet
 */
function TemplatePlaceholder({ template }: { template: Template }) {
  return (
    <div className="min-h-[60vh] rounded-lg border bg-gradient-to-br from-muted/50 to-muted/30 p-12 text-center">
      <div className="mx-auto max-w-2xl space-y-6 animate-in fade-in slide-in-from-bottom-4 duration-700">
        <div className="space-y-2">
          <h2 className="text-3xl font-bold tracking-tight md:text-4xl">
            {template.name}
          </h2>
          <p className="text-muted-foreground text-lg">{template.description}</p>
        </div>

        <div className="mt-8 rounded-lg border bg-background/50 p-8 backdrop-blur-sm">
          <p className="text-muted-foreground mb-4">
            This template is coming soon! The template component will be rendered here
            once it's created in Phase 5.
          </p>
          {template.tags && template.tags.length > 0 && (
            <div className="flex flex-wrap justify-center gap-2">
              {template.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-muted-foreground rounded-full bg-muted px-3 py-1 text-sm"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}

/**
 * Loading skeleton shown while template component is being loaded
 */
function TemplateLoadingSkeleton() {
  return (
    <div className="min-h-[60vh] animate-pulse rounded-lg border bg-muted/50 p-12">
      <div className="mx-auto max-w-4xl space-y-6">
        <div className="h-12 w-3/4 rounded bg-muted" />
        <div className="h-6 w-1/2 rounded bg-muted" />
        <div className="mt-8 space-y-4">
          <div className="h-64 rounded-lg bg-muted" />
          <div className="h-32 rounded-lg bg-muted" />
        </div>
      </div>
    </div>
  );
}

