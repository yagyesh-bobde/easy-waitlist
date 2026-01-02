/**
 * Bold Animated Waitlist Template
 * 
 * A bold, eye-catching template with smooth animations and engaging visuals.
 * Features:
 * - Bold hero with large typography
 * - Animated statistics/numbers section
 * - Waitlist CTA section
 * - Social proof section
 * - Parallax and scroll-triggered animations
 */

import { useState, useEffect } from "react";

export default function BoldAnimatedTemplate() {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [scrollY, setScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      setScrollY(window.scrollY);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!email) return;

    setIsSubmitting(true);
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    setIsSubmitting(false);
    setEmail("");
  };

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <section 
        className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-primary/10 via-background to-primary/5"
        style={{
          transform: `translateY(${scrollY * 0.5}px)`,
        }}
      >
        <div className="container mx-auto px-4 py-20 text-center">
          <div className="mx-auto max-w-4xl space-y-12">
            <h1 className="text-6xl font-black tracking-tight md:text-7xl lg:text-8xl animate-in fade-in slide-in-from-bottom-8 duration-1000">
              Join the
              <span className="block bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent">
                Revolution
              </span>
            </h1>
            <p className="text-muted-foreground text-2xl md:text-3xl font-medium">
              Be among the first to experience something extraordinary
            </p>
            
            {/* Waitlist Form */}
            <div className="mx-auto mt-12 max-w-lg">
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
                  className="flex-1 rounded-lg border-2 border-primary/20 bg-background px-6 py-4 text-base font-medium transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
                />
                <button
                  type="submit"
                  disabled={isSubmitting || !email}
                  className="rounded-lg bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
                >
                  {isSubmitting ? "Joining..." : "Join Waitlist"}
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Animated Statistics Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 md:grid-cols-3">
            {[
              { number: "10K+", label: "Early Adopters", delay: 0 },
              { number: "50+", label: "Countries", delay: 100 },
              { number: "99%", label: "Satisfaction", delay: 200 },
            ].map((stat, index) => (
              <div
                key={stat.label}
                className="rounded-2xl border-2 border-primary/20 bg-card p-8 text-center transition-all hover:border-primary/40 hover:shadow-xl animate-in fade-in slide-in-from-bottom-4"
                style={{
                  animationDelay: `${stat.delay}ms`,
                }}
              >
                <div className="mb-4 text-5xl font-black text-primary md:text-6xl">
                  {stat.number}
                </div>
                <div className="text-lg font-semibold text-muted-foreground">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Waitlist CTA Section */}
      <section className="bg-muted/30 py-20">
        <div className="container mx-auto px-4">
          <div className="mx-auto max-w-3xl text-center">
            <h2 className="mb-6 text-4xl font-bold md:text-5xl">
              Don't Miss Out
            </h2>
            <p className="text-muted-foreground mb-8 text-xl">
              Join thousands of others who are already on the waitlist
            </p>
            <form
              onSubmit={handleSubmit}
              className="mx-auto flex max-w-md flex-col gap-4 sm:flex-row"
            >
              <input
                type="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
                disabled={isSubmitting}
                className="flex-1 rounded-lg border-2 border-primary/20 bg-background px-6 py-4 text-base font-medium transition-all focus:border-primary focus:outline-none focus:ring-2 focus:ring-primary disabled:opacity-50 disabled:cursor-not-allowed"
              />
              <button
                type="submit"
                disabled={isSubmitting || !email}
                className="rounded-lg bg-primary px-8 py-4 text-base font-bold text-primary-foreground transition-all hover:bg-primary/90 hover:scale-105 focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100"
              >
                {isSubmitting ? "Joining..." : "Join Now"}
              </button>
            </form>
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section className="container mx-auto px-4 py-20">
        <div className="mx-auto max-w-4xl">
          <h2 className="mb-12 text-center text-3xl font-bold md:text-4xl">
            What People Are Saying
          </h2>
          <div className="grid gap-6 md:grid-cols-2">
            {[
              {
                name: "Sarah Johnson",
                role: "Product Manager",
                quote: "This is exactly what I've been waiting for. Can't wait for launch!",
              },
              {
                name: "Michael Chen",
                role: "Entrepreneur",
                quote: "The early access has been incredible. Highly recommend joining!",
              },
              {
                name: "Emily Rodriguez",
                role: "Designer",
                quote: "The design and user experience are top-notch. Excited to see more!",
              },
              {
                name: "David Kim",
                role: "Developer",
                quote: "Finally, a solution that actually works. Worth the wait!",
              },
            ].map((testimonial, index) => (
              <div
                key={testimonial.name}
                className="rounded-lg border bg-card p-6 transition-all hover:shadow-lg animate-in fade-in slide-in-from-bottom-4"
                style={{
                  animationDelay: `${index * 100}ms`,
                }}
              >
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

