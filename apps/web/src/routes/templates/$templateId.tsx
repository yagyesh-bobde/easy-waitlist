import { createFileRoute, notFound } from "@tanstack/react-router";
import TemplateRenderer from "@/components/templates/template-renderer";

export const Route = createFileRoute("/templates/$templateId")({
  component: TemplateComponent,
  loader: async ({ context, params }) => {
    try {
      const template = await context.trpc.templates.getTemplateById.query(
        params.templateId
      );
      return { template };
    } catch (error) {
      // Template not found, throw notFound to trigger 404
      throw notFound();
    }
  },
  head: ({ loaderData }) => {
    const template = loaderData?.template;
    if (!template) {
      return {
        meta: [
          {
            title: "Template Not Found",
          },
        ],
      };
    }

    const seo = template.seo;
    return {
      meta: [
        {
          title: seo?.title || `${template.name} - Landing Page Template`,
        },
        {
          name: "description",
          content: seo?.description || template.description,
        },
        {
          name: "keywords",
          content: seo?.keywords?.join(", ") || template.tags?.join(", "),
        },
        {
          property: "og:title",
          content: seo?.title || `${template.name} - Landing Page Template`,
        },
        {
          property: "og:description",
          content: seo?.description || template.description,
        },
        {
          property: "og:type",
          content: "website",
        },
        {
          property: "og:url",
          content: `https://easy-waitlist.com/templates/${template.id}`,
        },
        ...(template.previewImage
          ? [
              {
                property: "og:image",
                content: template.previewImage,
              },
            ]
          : []),
        {
          name: "twitter:card",
          content: "summary_large_image",
        },
        {
          name: "twitter:title",
          content: seo?.title || `${template.name} - Landing Page Template`,
        },
        {
          name: "twitter:description",
          content: seo?.description || template.description,
        },
        ...(template.previewImage
          ? [
              {
                name: "twitter:image",
                content: template.previewImage,
              },
            ]
          : []),
      ],
    };
  },
});

function TemplateComponent() {
  const { template } = Route.useLoaderData();

  // Template should always be available here since loader throws notFound() if missing
  if (!template) {
    return (
      <main className="flex min-h-[calc(100vh-4rem)] items-center justify-center">
        <div className="text-center">
          <h1 className="mb-4 text-4xl font-bold">Template Not Found</h1>
          <p className="text-muted-foreground mb-6">
            The template you're looking for doesn't exist or has been removed.
          </p>
          <a
            href="/templates"
            className="text-primary hover:underline"
          >
            ← Back to Templates
          </a>
        </div>
      </main>
    );
  }

  // Structured data for SEO
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    name: template.name,
    description: template.description,
    applicationCategory: "WebApplication",
    url: `https://easy-waitlist.com/templates/${template.id}`,
    ...(template.previewImage
      ? {
          image: template.previewImage,
        }
      : {}),
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <main className="flex min-h-[calc(100vh-4rem)] flex-col">
        {/* Template metadata header - shown above the template */}
        <section className="container mx-auto max-w-7xl border-b px-4 py-8">
          <div className="mb-4">
            <h1 className="mb-2 text-3xl font-bold tracking-tight md:text-4xl lg:text-5xl">
              {template.name}
            </h1>
            <p className="text-muted-foreground text-base md:text-lg">
              {template.description}
            </p>
          </div>
          {template.tags && template.tags.length > 0 && (
            <div className="flex flex-wrap gap-2">
              {template.tags.map((tag) => (
                <span
                  key={tag}
                  className="text-muted-foreground rounded-full bg-muted px-3 py-1 text-xs"
                >
                  {tag}
                </span>
              ))}
            </div>
          )}
        </section>

        {/* Template content - rendered by TemplateRenderer */}
        <section className="w-full">
          <TemplateRenderer template={template} />
        </section>
      </main>
    </>
  );
}

