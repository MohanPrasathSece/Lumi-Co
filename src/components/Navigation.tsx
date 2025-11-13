import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { ArrowUpRight, Menu, X } from "lucide-react";
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
            className={cn(
              "relative inline-flex h-11 w-11 items-center justify-center overflow-hidden rounded-2xl bg-gradient-to-br from-primary/90 via-primary/70 to-primary/50 text-primary-foreground shadow-soft transition-all duration-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:hidden",
              isMobileMenuOpen ? "scale-95 shadow-glow" : "hover:scale-105 hover:shadow-glow"
            )}
            onClick={() => setIsMobileMenuOpen((prev) => !prev)}
          >
            <span className="absolute inset-0 rounded-2xl bg-white/15 backdrop-blur-sm" aria-hidden="true" />
            <span className="relative flex items-center justify-center">
              {isMobileMenuOpen ? (
                <X className="h-5 w-5 transition-transform duration-300" />
              ) : (
                <Menu className="h-5 w-5 transition-transform duration-300" />
              )}
            </span>
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
        <div className="md:hidden px-4 pb-6">
          <div className="container px-0">
            <div className="rounded-3xl border border-white/25 bg-white/80 p-2 shadow-soft backdrop-blur-xl">
              <div className="rounded-[22px] bg-gradient-to-br from-background/95 via-background/80 to-white/50 p-6 shadow-inner">
                <div className="space-y-2 pb-4">
                  <p className="text-[10px] uppercase tracking-[0.4em] text-muted-foreground/70">Navigation</p>
                  <p className="text-sm font-medium text-foreground/80">Crafted paths, tailored for your journey.</p>
                </div>

                <div className="flex flex-col gap-3">
                  {links.map((link) => (
                    <Link
                      key={link.href}
                      to={link.href}
                      className={cn(
                        "group flex items-center justify-between rounded-2xl border border-transparent bg-white/70 px-4 py-3 text-sm font-semibold text-foreground/80 transition-all duration-300",
                        "hover:-translate-y-1 hover:border-primary/40 hover:bg-white hover:text-primary",
                        isActive(link.href) ? "border-primary/60 bg-white text-primary shadow-soft" : ""
                      )}
                    >
                      <span>{link.label}</span>
                      <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1" />
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navigation;
