import { Crown } from "lucide-react";
import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <footer className="bg-primary text-primary-foreground py-16">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 mb-12">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <Crown className="h-5 w-5 text-gold" />
              <span className="font-display text-lg font-bold tracking-tight">CROWN WALK</span>
            </div>
            <p className="text-sm text-primary-foreground/60 max-w-xs">
              Premium sneakers delivered to your door. Walk like royalty, every day.
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-display font-semibold text-sm mb-4 tracking-wide">SHOP</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="#products" className="hover:text-primary-foreground transition-colors">All Products</a></li>
              <li><a href="#brands" className="hover:text-primary-foreground transition-colors">Brands</a></li>
              <li><a href="#products" className="hover:text-primary-foreground transition-colors">New Arrivals</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-display font-semibold text-sm mb-4 tracking-wide">INFO</h4>
            <ul className="space-y-2 text-sm text-primary-foreground/60">
              <li><a href="#why" className="hover:text-primary-foreground transition-colors">About Us</a></li>
              <li><span className="cursor-default">Free Delivery 🇿🇦</span></li>
              <li><span className="cursor-default">Secure Payments</span></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-primary-foreground/10 pt-8 text-center">
          <p className="text-xs text-primary-foreground/40">
            © {new Date().getFullYear()} Crown Walk. All rights reserved. Premium sneakers, South Africa.
          </p>
        </div>
      </div>
    </footer>
  );
};
