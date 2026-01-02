import { Link } from "@tanstack/react-router";

export default function Header() {
  const links = [
    { to: "/", label: "Home" },
    { to: "/templates", label: "Templates" },
  ] as const;

  return (
    <header className="sticky top-0 z-50 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container mx-auto flex flex-row items-center justify-between px-4 py-3 transition-all">
        <Link to="/" className="text-lg font-semibold transition-opacity hover:opacity-80">
          Landing Templates
        </Link>
        <nav className="flex gap-6">
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
      </div>
    </header>
  );
}
