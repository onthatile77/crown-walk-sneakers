import { motion } from "framer-motion";

const categories = [
  { name: "Dunks", bg: "from-muted to-secondary" },
  { name: "Air Force 1", bg: "from-secondary to-accent" },
  { name: "Air Jordans", bg: "from-accent to-muted" },
  { name: "New Balance", bg: "from-muted to-background" },
  { name: "Timberlands", bg: "from-secondary to-muted" },
  { name: "Retros", bg: "from-accent to-secondary" },
];

export const CategoryCards = () => {
  return (
    <section className="py-20 bg-muted/30">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Shop by Style</h2>
          <p className="text-muted-foreground">Find your perfect pair</p>
        </motion.div>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {categories.map((cat, i) => (
            <motion.a
              key={cat.name}
              href="#products"
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.08 }}
              className={`relative rounded-xl overflow-hidden aspect-[4/3] bg-gradient-to-br ${cat.bg} group cursor-pointer`}
            >
              <div className="absolute inset-0 flex items-center justify-center">
                <span className="font-display text-lg md:text-2xl font-bold text-foreground/80 group-hover:text-foreground transition-colors group-hover:scale-110 transform transition-transform duration-300">
                  {cat.name}
                </span>
              </div>
            </motion.a>
          ))}
        </div>
      </div>
    </section>
  );
};
