import { Link } from "@tanstack/react-router";
import { Menu, X } from "lucide-react";
import { useState } from "react";

import { Button } from "@/components/ui/button";

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const links = [
    { to: "/", label: "Home" },
    { to: "/templates", label: "Templates" },
  ] as const;

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  const closeMobileMenu = () => {
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex flex-row items-center justify-between px-4 py-3 transition-all">
        <Link
          to="/"
          className="text-lg font-semibold transition-opacity hover:opacity-80"
          onClick={closeMobileMenu}
        >
          Landing Templates
        </Link>
        {/* Desktop Navigation */}
        <nav className="hidden md:flex gap-6">
          {links.map(({ to, label }) => {
            return (
              <Link
                key={to}
                to={to}
                className="text-sm font-medium transition-colors hover:text-primary"
              >
                {label}
              </Link>
            );
          })}
        </nav>
        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden"
          onClick={toggleMobileMenu}
          aria-label="Toggle mobile menu"
          aria-expanded={mobileMenuOpen}
        >
          {mobileMenuOpen ? (
            <X className="size-5" aria-hidden="true" />
          ) : (
            <Menu className="size-5" aria-hidden="true" />
          )}
        </Button>
      </div>
      {/* Mobile Navigation Menu */}
      {mobileMenuOpen && (
        <nav
          className="md:hidden border-t bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 animate-in slide-in-from-top-2"
          aria-label="Mobile navigation"
        >
          <div className="container mx-auto px-4 py-4 space-y-3">
            {links.map(({ to, label }) => {
              return (
                <Link
                  key={to}
                  to={to}
                  className="block text-sm font-medium transition-colors hover:text-primary py-2"
                  onClick={closeMobileMenu}
                >
                  {label}
                </Link>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
}
