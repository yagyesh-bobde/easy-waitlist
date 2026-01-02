/**
 * Minimal Modern Waitlist Template
 * 
 * A clean, minimalistic landing page template perfect for waitlist signups.
 * Features:
 * - Animated gradient hero section
 * - Waitlist signup form with validation
 * - Feature highlights section
 * - Smooth scroll animations
 * - SEO-friendly semantic HTML
 */

import { useState } from "react";

export default function MinimalModernTemplate() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    // Simulate form submission - actual API integration will be added later
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setEmail("");
    // In a real implementation, this would show a success message
  };
  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-[80vh] items-center justify-center overflow-hidden bg-gradient-to-br from-background via-background to-muted/20 animate-gradient">
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="mx-auto max-w-3xl space-y-8 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Join the Waitlist
            </h1>
            <p className="text-muted-foreground text-xl md:text-2xl">
              Be the first to know when we launch. Get early access and exclusive
              updates.
            </p>
            
            {/* Waitlist Form */}
            <div className="mx-auto mt-8 max-w-md">
              <form
                onSubmit={handleSubmit}
                className="flex flex-col gap-4 sm:flex-row"
              >
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={isSubmitting}
                  className="flex-1 rounded-lg border bg-background px-4 py-3 text-sm transition-all focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="rounded-lg bg-primary px-6 py-3 text-sm font-medium text-primary-foreground transition-all hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Why Join Our Waitlist?
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Early Access",
                description: "Get access before everyone else",
              },
              {
                title: "Exclusive Updates",
                description: "Stay informed about our progress",
              },
              {
                title: "Special Perks",
                description: "Enjoy exclusive benefits and discounts",
              },
            ].map((feature, index) => (
              <div
                key={feature.title}
                className="rounded-lg border bg-card p-6 text-center transition-all hover:shadow-lg animate-in fade-in slide-in-from-bottom-4"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <h3 className="mb-2 text-xl font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {feature.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t bg-muted/30 py-8">
        <div className="container mx-auto px-4 text-center text-sm text-muted-foreground">
          <p>© {new Date().getFullYear()} Your Company. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}

