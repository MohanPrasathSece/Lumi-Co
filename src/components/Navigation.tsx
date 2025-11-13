import { Link, useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const Navigation = () => {
  const location = useLocation();
  
  const isActive = (path: string) => location.pathname === path;
  
  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-background/95 backdrop-blur-sm border-b border-border/50">
      <nav className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="font-playfair text-xl md:text-2xl font-semibold text-gradient-rose">
          Lumi & Co.
        </Link>
        
        <div className="flex items-center gap-8">
          <Link
            to="/"
            className={cn(
              "text-sm font-lato tracking-wide transition-colors hover:text-primary",
              isActive("/") ? "text-primary font-medium" : "text-muted-foreground"
            )}
          >
            Home
          </Link>
          <Link
            to="/about"
            className={cn(
              "text-sm font-lato tracking-wide transition-colors hover:text-primary",
              isActive("/about") ? "text-primary font-medium" : "text-muted-foreground"
            )}
          >
            About
          </Link>
          <Link
            to="/products"
            className={cn(
              "text-sm font-lato tracking-wide transition-colors hover:text-primary",
              isActive("/products") ? "text-primary font-medium" : "text-muted-foreground"
            )}
          >
            Products
          </Link>
          <Link
            to="/contact"
            className={cn(
              "text-sm font-lato tracking-wide transition-colors hover:text-primary",
              isActive("/contact") ? "text-primary font-medium" : "text-muted-foreground"
            )}
          >
            Contact
          </Link>
        </div>
      </nav>
    </header>
  );
};

export default Navigation;
