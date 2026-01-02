import { createFileRoute, Link } from "@tanstack/react-router";

import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

export const Route = createFileRoute("/")({
  component: HomeComponent,
});

function HomeComponent() {
  return (
    <div className="flex min-h-[calc(100vh-4rem)] flex-col">
      {/* Hero Section */}
      <section className="flex flex-1 flex-col items-center justify-center px-4 py-16 md:py-24">
        <div className="container mx-auto max-w-4xl text-center">
          <h1 className="mb-6 animate-fade-in-up text-4xl font-bold tracking-tight md:text-6xl lg:text-7xl">
            Landing Page
            <span className="block mt-2 bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
              Template Platform
            </span>
          </h1>
          <p className="mb-8 animate-fade-in-up animation-delay-200 text-lg text-muted-foreground md:text-xl lg:text-2xl">
            Browse modern, animated landing page templates designed for waitlists.
            Copy code blocks directly and launch faster.
          </p>
          <div className="animate-fade-in-up animation-delay-400 flex flex-col gap-4 sm:flex-row sm:justify-center">
            <Button asChild size="lg" className="text-base">
              <Link to="/templates">Browse Templates</Link>
            </Button>
            <Button asChild size="lg" variant="outline" className="text-base">
              <a href="#features">Learn More</a>
            </Button>
          </div>
        </div>
      </section>

      {/* Feature Highlights Section */}
      <section id="features" className="border-t bg-muted/30 py-16 md:py-24">
        <div className="container mx-auto max-w-6xl px-4">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">Why Choose Our Templates?</h2>
            <p className="text-muted-foreground text-lg">
              Everything you need to create stunning waitlist landing pages
            </p>
          </div>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            <Card className="animate-fade-in-up animation-delay-200 transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle>Modern Design</CardTitle>
                <CardDescription>
                  Beautiful, minimalistic templates that focus on conversion and user experience
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="animate-fade-in-up animation-delay-400 transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle>Smooth Animations</CardTitle>
                <CardDescription>
                  Professional animations that enhance UX without being distracting
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="animate-fade-in-up animation-delay-600 transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle>SEO Optimized</CardTitle>
                <CardDescription>
                  Built with semantic HTML, proper meta tags, and structured data
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="animate-fade-in-up animation-delay-800 transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle>Fully Responsive</CardTitle>
                <CardDescription>
                  Works seamlessly across all device sizes - mobile, tablet, and desktop
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="animate-fade-in-up animation-delay-1000 transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle>Copy & Paste</CardTitle>
                <CardDescription>
                  One-click code copying with syntax highlighting for easy integration
                </CardDescription>
              </CardHeader>
            </Card>
            <Card className="animate-fade-in-up animation-delay-1200 transition-all hover:shadow-lg">
              <CardHeader>
                <CardTitle>Waitlist Focused</CardTitle>
                <CardDescription>
                  Templates specifically tailored for waitlist signups and conversions
                </CardDescription>
              </CardHeader>
            </Card>
          </div>
        </div>
      </section>

      {/* Call-to-Action Section */}
      <section className="border-t py-16 md:py-24">
        <div className="container mx-auto max-w-4xl px-4 text-center">
          <h2 className="mb-4 text-3xl font-bold md:text-4xl">Ready to Get Started?</h2>
          <p className="mb-8 text-muted-foreground text-lg">
            Explore our collection of landing page templates and find the perfect one for your
            waitlist.
          </p>
          <Button asChild size="lg" className="text-base">
            <Link to="/templates">View All Templates</Link>
          </Button>
        </div>
      </section>
    </div>
  );
}
