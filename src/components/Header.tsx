import { useState } from "react";
import { Link } from "react-router-dom";
import { ShoppingBag, Menu, X, Crown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useCartStore } from "@/stores/cartStore";
import { CartDrawer } from "./CartDrawer";

export const Header = () => {
  const [mobileOpen, setMobileOpen] = useState(false);
  const totalItems = useCartStore((s) => s.items.reduce((sum, i) => sum + i.quantity, 0));

  return (
    <header className="sticky top-0 z-50 bg-background/80 backdrop-blur-md border-b border-border">
      <div className="container mx-auto flex items-center justify-between h-16 px-4">
        {/* Logo */}
        <Link to="/" className="flex items-center gap-2">
          <Crown className="h-6 w-6 text-gold" />
          <span className="font-display text-xl font-bold tracking-tight text-foreground">
            CROWN WALK
          </span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          <Link to="/" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Home
          </Link>
          <a href="#products" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Shop
          </a>
          <a href="#brands" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            Brands
          </a>
          <a href="#why" className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors">
            About
          </a>
        </nav>

        {/* Right */}
        <div className="flex items-center gap-3">
          <CartDrawer />
          <Button
            variant="ghost"
            size="icon"
            className="md:hidden"
            onClick={() => setMobileOpen(!mobileOpen)}
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </Button>
        </div>
      </div>

      {/* Mobile Nav */}
      {mobileOpen && (
        <div className="md:hidden border-t border-border bg-background animate-fade-in">
          <nav className="flex flex-col p-4 gap-4">
            <Link to="/" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-foreground">Home</Link>
            <a href="#products" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-foreground">Shop</a>
            <a href="#brands" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-foreground">Brands</a>
            <a href="#why" onClick={() => setMobileOpen(false)} className="text-sm font-medium text-foreground">About</a>
          </nav>
        </div>
      )}
    </header>
  );
};
