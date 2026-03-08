import { motion } from "framer-motion";
import { Shield, Truck, Award, Lock } from "lucide-react";

const values = [
  { icon: Shield, title: "100% Authentic", desc: "Every pair is verified genuine" },
  { icon: Truck, title: "Free Delivery", desc: "Nationwide across South Africa" },
  { icon: Award, title: "Premium Selection", desc: "Only the finest brands and styles" },
  { icon: Lock, title: "Secure Checkout", desc: "Shop with confidence, always" },
];

export const WhyCrownWalk = () => {
  return (
    <section id="why" className="py-20 bg-background">
      <div className="container mx-auto px-4">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-3">Why Crown Walk</h2>
          <p className="text-muted-foreground">Trusted by sneakerheads across South Africa</p>
        </motion.div>

        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((v, i) => (
            <motion.div
              key={v.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="text-center p-6 rounded-xl bg-muted/40 hover:bg-muted/70 transition-colors duration-300"
            >
              <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 mb-4">
                <v.icon className="h-5 w-5 text-foreground" />
              </div>
              <h3 className="font-display font-semibold text-foreground mb-1">{v.title}</h3>
              <p className="text-sm text-muted-foreground">{v.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
