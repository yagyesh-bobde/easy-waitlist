/**
 * Elegant Gradient Waitlist Template
 * 
 * An elegant template with beautiful gradient overlays and sophisticated design.
 * Features:
 * - Elegant hero with gradient overlays
 * - Benefits/features grid
 * - Waitlist form with validation
 * - Testimonials section
 * - Fade-in animations on scroll
 */

import { useState } from "react";

export default function ElegantGradientTemplate() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [error, setError] = useState("");

  const validateEmail = (email: string) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setError("");

    if (!email) {
      setError("Please enter your email address");
      return;
    }

    if (!validateEmail(email)) {
      setError("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setEmail("");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section className="relative flex min-h-[90vh] items-center justify-center overflow-hidden">
        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-br from-primary/20 via-primary/10 to-background" />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent" />
        
        <div className="container relative z-10 mx-auto px-4 py-20 text-center">
          <div className="mx-auto max-w-3xl space-y-10 animate-in fade-in slide-in-from-bottom-8 duration-1000">
            <h1 className="text-5xl font-bold tracking-tight md:text-6xl lg:text-7xl">
              Welcome to the
              <span className="block bg-gradient-to-r from-primary via-primary/80 to-primary/60 bg-clip-text text-transparent">
                Future
              </span>
            </h1>
            <p className="text-muted-foreground text-xl md:text-2xl">
              Join our exclusive waitlist and be part of something extraordinary
            </p>
            
            {/* Waitlist Form */}
            <div className="mx-auto mt-10 max-w-md">
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <input
                    type="email"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError("");
                    }}
                    required
                    disabled={isSubmitting}
                    className={`w-full rounded-lg border bg-background/80 backdrop-blur-sm px-6 py-4 text-base transition-all focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed ${
                      error ? "border-destructive focus:ring-destructive" : "border-primary/20"
                    }`}
                  />
                  {error && (
                    <p className="mt-2 text-sm text-destructive">{error}</p>
                  )}
                </div>
                <button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="w-full rounded-lg bg-gradient-to-r from-primary to-primary/80 px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:from-primary/90 hover:to-primary/70 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Benefits/Features Grid */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-5xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            Why Choose Us
          </h2>
          <div className="grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Exclusive Access",
                description: "Get early access to features before public release",
                icon: "✨",
              },
              {
                title: "Premium Support",
                description: "Dedicated support team ready to help you succeed",
                icon: "💎",
              },
              {
                title: "Regular Updates",
                description: "Stay informed with regular progress updates",
                icon: "📬",
              },
              {
                title: "Community Access",
                description: "Join an exclusive community of early adopters",
                icon: "👥",
              },
              {
                title: "Special Pricing",
                description: "Enjoy special pricing and exclusive offers",
                icon: "🎁",
              },
              {
                title: "Feedback Influence",
                description: "Your feedback shapes the product direction",
                icon: "💬",
              },
            ].map((benefit, index) => (
              <div
                key={benefit.title}
                className="rounded-xl border bg-card p-6 text-center transition-all hover:border-primary/40 hover:shadow-lg animate-in fade-in slide-in-from-bottom-4"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
                <div className="mb-4 text-4xl">{benefit.icon}</div>
                <h3 className="mb-2 text-xl font-semibold">{benefit.title}</h3>
                <p className="text-muted-foreground text-sm">
                  {benefit.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-5xl">
            <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
              Trusted by Early Adopters
            </h2>
            <div className="grid gap-8 md:grid-cols-3">
              {[
                {
                  name: "Alexandra Smith",
                  role: "Founder & CEO",
                  quote: "The waitlist experience has been exceptional. Can't wait for the full launch!",
                  rating: 5,
                },
                {
                  name: "James Wilson",
                  role: "Product Designer",
                  quote: "Beautiful design and thoughtful user experience. This is going to be amazing!",
                  rating: 5,
                },
                {
                  name: "Maria Garcia",
                  role: "Marketing Director",
                  quote: "The communication and updates have been outstanding. Very impressed!",
                  rating: 5,
                },
              ].map((testimonial, index) => (
                <div
                  key={testimonial.name}
                  className="rounded-xl border bg-card p-6 transition-all hover:shadow-lg animate-in fade-in slide-in-from-bottom-4"
                  style={{
                    animationDelay: `${index * 150}ms`,
                  }}
                >
                  <div className="mb-4 flex text-primary">
                    {"★".repeat(testimonial.rating)}
                  </div>
                  <p className="text-muted-foreground mb-4 italic">
                    "{testimonial.quote}"
                  </p>
                  <div>
                    <div className="font-semibold">{testimonial.name}</div>
                    <div className="text-muted-foreground text-sm">
                      {testimonial.role}
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="mb-6 text-3xl font-bold md:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="text-muted-foreground mb-8 text-lg">
            Join thousands of others on the waitlist today
          </p>
          <form onSubmit={handleSubmit} className="mx-auto max-w-md space-y-4">
            <div>
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  setError("");
                }}
                required
                disabled={isSubmitting}
                className={`w-full rounded-lg border bg-background px-6 py-4 text-base transition-all focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed ${
                  error ? "border-destructive focus:ring-destructive" : "border-primary/20"
                }`}
              />
              {error && (
                <p className="mt-2 text-sm text-destructive">{error}</p>
              )}
            </div>
            <button
              type="submit"
              disabled={isSubmitting || !email}
              className="w-full rounded-lg bg-gradient-to-r from-primary to-primary/80 px-8 py-4 text-base font-semibold text-primary-foreground transition-all hover:from-primary/90 hover:to-primary/70 hover:shadow-lg focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed"
            >
              {isSubmitting ? "Joining..." : "Join Waitlist Now"}
            </button>
          </form>
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

