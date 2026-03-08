import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";

export const LifestyleBanner = () => {
  return (
    <section className="relative py-32 bg-primary overflow-hidden">
      <div className="absolute inset-0 opacity-10">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(circle_at_30%_50%,hsl(var(--primary-foreground)/0.1),transparent_70%)]" />
      </div>
      <div className="relative container mx-auto px-4 text-center">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground mb-4">
            Elevate Your Step
          </h2>
          <p className="text-primary-foreground/70 max-w-md mx-auto mb-8">
            Every walk tells a story. Make yours unforgettable with Crown Walk's curated collection.
          </p>
          <Button asChild variant="outline" size="lg" className="font-display border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10">
            <a href="#products">Explore Collection</a>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};
