import { createFileRoute } from "@tanstack/react-router";

import { useTRPC } from "@/utils/trpc";

import TemplateCard from "../components/templates/template-card";

export const Route = createFileRoute("/templates")({
  component: TemplatesComponent,
  head: () => ({
    meta: [
      {
        title: "Landing Page Templates - Browse Modern Waitlist Templates",
      },
      {
        name: "description",
        content:
          "Browse modern, animated landing page templates designed for waitlists. Copy code blocks directly and launch faster.",
      },
      {
        name: "keywords",
        content: "landing page templates, waitlist templates, website templates, copy code",
      },
      {
        property: "og:title",
        content: "Landing Page Templates - Browse Modern Waitlist Templates",
      },
      {
        property: "og:description",
        content:
          "Browse modern, animated landing page templates designed for waitlists. Copy code blocks directly and launch faster.",
      },
      {
        property: "og:type",
        content: "website",
      },
      {
        property: "og:url",
        content: "https://easy-waitlist.com/templates",
      },
      {
        name: "twitter:card",
        content: "summary_large_image",
      },
      {
        name: "twitter:title",
        content: "Landing Page Templates - Browse Modern Waitlist Templates",
      },
      {
        name: "twitter:description",
        content:
          "Browse modern, animated landing page templates designed for waitlists. Copy code blocks directly and launch faster.",
      },
    ],
  }),
});

const structuredData = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Landing Page Templates",
  description: "Browse modern, animated landing page templates designed for waitlists",
  url: "https://easy-waitlist.com/templates",
};

function TemplatesComponent() {
  const { data: templates, isLoading, error } = useTRPC.templates.getTemplates.useQuery();

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="flex min-h-[calc(100vh-4rem)] flex-col">
        <section className="container mx-auto max-w-7xl px-4 py-12 md:py-16">
          <div className="mb-12 text-center">
            <h1 className="mb-4 text-4xl font-bold tracking-tight md:text-5xl lg:text-6xl">
              Landing Page Templates
            </h1>
            <p className="text-muted-foreground text-lg md:text-xl">
              Browse modern, animated landing page templates designed for waitlists
            </p>
          </div>

          {isLoading && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {[1, 2, 3].map((i) => (
                <div
                  key={i}
                  className="h-64 animate-pulse rounded-lg bg-muted"
                  aria-label="Loading template"
                />
              ))}
            </div>
          )}

          {error && (
            <div className="text-center py-12">
              <p className="text-destructive text-lg">Failed to load templates</p>
              <p className="text-muted-foreground mt-2">{error.message}</p>
            </div>
          )}

          {!isLoading && !error && templates && templates.length === 0 && (
            <div className="text-center py-12">
              <p className="text-muted-foreground text-lg">No templates available yet</p>
              <p className="text-muted-foreground mt-2">Check back soon for new templates!</p>
            </div>
          )}

          {!isLoading && !error && templates && templates.length > 0 && (
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
              {templates.map((template) => (
                <TemplateCard key={template.id} template={template} />
              ))}
            </div>
          )}
        </section>
      </main>
    </>
  );
}

