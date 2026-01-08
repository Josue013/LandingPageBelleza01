import { Card, CardContent } from "@/components/ui/card";
import { Sparkles, Heart, Leaf, Crown } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const features = [
  {
    icon: Sparkles,
    title: "Tratamientos Faciales",
    description:
      "Rejuvenece tu piel con nuestros tratamientos faciales personalizados que utilizan productos naturales y técnicas avanzadas.",
  },
  {
    icon: Heart,
    title: "Cuidado Corporal",
    description:
      "Experimenta una relajación total con nuestros masajes terapéuticos y tratamientos corporales diseñados para tu bienestar.",
  },
  {
    icon: Leaf,
    title: "Productos Naturales",
    description:
      "Usamos solo ingredientes orgánicos y naturales en todos nuestros tratamientos para cuidar tu piel de manera saludable.",
  },
  {
    icon: Crown,
    title: "Experiencia Exclusiva",
    description:
      "Disfruta de un ambiente tranquilo y elegante donde cada detalle está pensado para tu comodidad y satisfacción.",
  },
];

const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.15,
      delayChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      type: "spring" as const,
      stiffness: 100,
      damping: 12,
    },
  },
};

export function Features() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="servicios" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">
            Nuestros Servicios
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Ofrecemos una amplia gama de servicios de belleza y bienestar
            diseñados para realzar tu belleza natural
          </p>
        </motion.div>

        <motion.div
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6"
          variants={container}
          initial="hidden"
          animate={isInView ? "visible" : "hidden"}
        >
          {features.map((feature, index) => (
            <motion.div key={index} variants={item}>
              <motion.div
                whileHover={{ y: -8, scale: 1.02 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                <Card className="border-border hover:shadow-lg hover:border-primary/50 transition-all duration-300 h-full">
                  <CardContent className="p-6 space-y-4">
                    <motion.div
                      className="w-12 h-12 rounded-full bg-primary/10 flex items-center justify-center"
                      whileHover={{ rotate: 360, scale: 1.1 }}
                      transition={{ duration: 0.6 }}
                    >
                      <feature.icon className="w-6 h-6 text-primary" />
                    </motion.div>
                    <h3 className="font-serif text-xl font-semibold">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </CardContent>
                </Card>
              </motion.div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
