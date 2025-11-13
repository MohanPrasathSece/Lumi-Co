import { useEffect, useState } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { Menu, X, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  const navigate = useNavigate();
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
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/90 backdrop-blur-xl border-b border-border/50">
      <nav className="container mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center justify-between w-full md:w-auto gap-4">
          <button
            type="button"
            onClick={() => {
              if (location.pathname === "/") {
                document.getElementById("hero")?.scrollIntoView({ behavior: "smooth" });
              } else {
                navigate("/", { state: { scrollToHero: true } });
              }
            }}
            className="font-cormorant text-xl md:text-2xl font-semibold text-gradient-rose focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary rounded-md"
          >
            Lumi & Co.
          </button>

          <button
            type="button"
            aria-expanded={isMobileMenuOpen}
            aria-label="Toggle menu"
            className={cn(
              "inline-flex h-11 w-11 items-center justify-center rounded-xl shadow-soft",
              "bg-gradient-rose text-primary-foreground border border-primary/20 backdrop-blur-md",
              "transition-all hover:shadow-glow hover:-translate-y-0.5 active:scale-95 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary md:hidden"
            )}
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
        <div className="md:hidden fixed inset-0 z-40">
          <div
            className="absolute inset-0 bg-black/40 backdrop-blur-sm"
            onClick={() => setIsMobileMenuOpen(false)}
          />
          <div
            className={cn(
              "absolute left-0 right-0 top-[64px]",
              "mx-4 rounded-3xl border border-white/40 bg-background/95 backdrop-blur-xl shadow-glow",
              "origin-top translate-y-0 animate-in fade-in-0 zoom-in-95"
            )}
          >
            <div className="h-1 w-16 rounded-full bg-gradient-rose mx-auto mt-4" />
            <div className="px-4 py-4 space-y-2">
              {links.map((link, index) => (
                <Link
                  key={link.href}
                  to={link.href}
                  className={cn(
                    "flex items-center justify-between rounded-xl px-3 py-4 transition-colors",
                    isActive(link.href)
                      ? "text-primary bg-primary/10 border border-primary/20"
                      : "text-muted-foreground hover:text-primary hover:bg-primary/10"
                  )}
                >
                  <span className="text-base font-lato tracking-wide">{link.label}</span>
                  <ChevronRight className="h-4 w-4 opacity-70" />
                </Link>
              ))}
            </div>
          </div>
        </div>
      ) : null}
    </header>
  );
};

export default Navigation;
