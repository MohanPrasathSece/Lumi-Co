import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const isActive = (path: string) => location.pathname === path;

  useEffect(() => {
    setIsMobileMenuOpen(false);
  }, [location.pathname]);

  const links = [
    { href: "/", label: "Home" },
    { href: "/about", label: "About" },
    { href: "/products", label: "Products" },
    { href: "/contact", label: "Contact" },
  ];
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <div className="flex items-center justify-between w-full md:w-auto gap-4">
          <Link to="/" className="font-playfair text-xl md:text-2xl font-semibold text-gradient-rose">
            Lumi & Co.
          </Link>

          <button
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
            className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-border/70 bg-background/60 text-foreground transition-colors hover:border-primary hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:hidden"
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            {isMobileMenuOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>

        <div className="hidden md:flex items-center gap-8">
          {links.map((link) => (
            <Link
              key={link.href}
              to={link.href}
              className={cn(
                "text-sm font-lato tracking-wide transition-colors hover:text-primary",
                isActive(link.href) ? "text-primary font-medium" : "text-muted-foreground"
              )}
            >
              {link.label}
            </Link>
          ))}
        </div>
      </nav>

      {isMobileMenuOpen ? (
        <div className="md:hidden border-t border-border/60 bg-background/97 backdrop-blur-sm">
          <div className="container mx-auto px-4 py-4 flex flex-col gap-2">
            {links.map((link, index) => (
              <div key={link.href}>
                <Link
                  to={link.href}
                  className={cn(
                    "flex items-center justify-between py-3 text-base font-lato tracking-wide transition-colors",
                    isActive(link.href) ? "text-primary font-medium" : "text-muted-foreground hover:text-primary"
                  )}
                >
                  <span>{link.label}</span>
                  {isActive(link.href) ? <span className="text-sm text-primary">•</span> : null}
                </Link>
                {index < links.length - 1 ? <div className="h-px bg-border/70" /> : null}
              </div>
            ))}
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navigation;
