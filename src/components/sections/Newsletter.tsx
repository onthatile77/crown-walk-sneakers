import { motion } from "framer-motion";
import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import { Mail } from "lucide-react";

export const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      toast.success("You're in!", { description: "Thanks for subscribing to Crown Walk.", position: "top-center" });
      setEmail("");
    }
  };

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="max-w-lg mx-auto text-center"
        >
          <Mail className="h-8 w-8 text-muted-foreground mx-auto mb-4" />
          <h2 className="font-display text-2xl md:text-3xl font-bold text-foreground mb-3">Stay in the Loop</h2>
          <p className="text-muted-foreground mb-8 text-sm">
            Get early access to new drops, exclusive deals, and sneaker news.
          </p>
          <form onSubmit={handleSubmit} className="flex gap-3">
            <Input
              type="email"
              placeholder="your@email.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="flex-1 h-11 bg-muted/50 border-border"
              required
            />
            <Button type="submit" size="lg" className="font-display h-11 px-6">
              Subscribe
            </Button>
          </form>
        </motion.div>
      </div>
    </section>
  );
};
