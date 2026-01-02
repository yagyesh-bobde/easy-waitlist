import type { Template } from "@/types/template";

import { Link } from "@tanstack/react-router";
import { ArrowRight } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";

interface TemplateCardProps {
  template: Template;
}

export default function TemplateCard({ template }: TemplateCardProps) {
  return (
    <Card className="group flex h-full flex-col transition-all hover:shadow-lg">
      <CardHeader>
        <CardTitle className="line-clamp-2">{template.name}</CardTitle>
        <CardDescription className="line-clamp-3">{template.description}</CardDescription>
      </CardHeader>
      {template.previewImage && (
        <CardContent className="p-0">
          <div className="aspect-video w-full overflow-hidden bg-muted">
            <img
              src={template.previewImage}
              alt={template.name}
              className="h-full w-full object-cover transition-transform group-hover:scale-105"
            />
          </div>
        </CardContent>
      )}
      {template.tags && template.tags.length > 0 && (
        <CardContent className="flex flex-wrap gap-2">
          {template.tags.slice(0, 3).map((tag) => (
            <span
              key={tag}
              className="text-muted-foreground rounded-full bg-muted px-2 py-1 text-xs"
            >
              {tag}
            </span>
          ))}
        </CardContent>
      )}
      <CardFooter className="mt-auto">
        <Button asChild className="w-full group-hover:gap-2" variant="default">
          <Link to={`/templates/${template.id}`}>
            View Template
            <ArrowRight className="ml-2 size-4 transition-transform group-hover:translate-x-1" />
          </Link>
        </Button>
      </CardFooter>
    </Card>
  );
}

