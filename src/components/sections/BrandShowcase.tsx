import { motion } from "framer-motion";

const brands = [
  { name: "Nike", letter: "NIKE" },
  { name: "Jordan", letter: "JORDAN" },
  { name: "New Balance", letter: "NEW BALANCE" },
  { name: "Converse", letter: "CONVERSE" },
  { name: "Timberland", letter: "TIMBERLAND" },
  { name: "Lacoste", letter: "LACOSTE" },
];

export const BrandShowcase = () => {
  return (
    <section id="brands" className="py-16 bg-background">
      <div className="container mx-auto px-4">
        <h2 className="font-display text-sm font-semibold tracking-[0.2em] text-muted-foreground text-center mb-10 uppercase">
          Premium Brands
        </h2>
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
          {brands.map((brand, i) => (
            <motion.div
              key={brand.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="flex items-center justify-center py-8 px-4 rounded-lg bg-muted/50 hover:bg-muted transition-colors duration-300 cursor-pointer group"
            >
              <span className="font-display text-sm font-bold tracking-widest text-muted-foreground group-hover:text-foreground transition-colors">
                {brand.letter}
              </span>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
