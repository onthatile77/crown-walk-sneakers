import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Crown, ArrowDown } from "lucide-react";

export const HeroSection = () => {
  return (
    <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-gradient-to-br from-secondary via-background to-muted">
      {/* Abstract shapes */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-96 h-96 rounded-full bg-muted/60 blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 rounded-full bg-secondary/80 blur-3xl" />
      </div>

      <div className="relative container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <div className="flex items-center justify-center gap-3 mb-6">
            <Crown className="h-10 w-10 text-gold" />
          </div>
          <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-bold tracking-tight text-foreground mb-4">
            CROWN WALK
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-md mx-auto mb-2 font-light">
            Walk Like Royalty
          </p>
          <p className="text-sm text-muted-foreground max-w-sm mx-auto mb-10">
            Premium sneakers from Nike, Jordan, New Balance & more — delivered free across South Africa.
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Button asChild size="lg" className="font-display text-base px-10 h-12">
            <a href="#products">Shop Now</a>
          </Button>
          <Button asChild variant="outline" size="lg" className="font-display text-base px-10 h-12">
            <a href="#brands">Explore Brands</a>
          </Button>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 1.2, duration: 1 }}
          className="absolute bottom-8 left-1/2 -translate-x-1/2"
        >
          <ArrowDown className="h-5 w-5 text-muted-foreground animate-bounce" />
        </motion.div>
      </div>
    </section>
  );
};
