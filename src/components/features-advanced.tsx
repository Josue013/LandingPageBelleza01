import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Sparkles, Heart, Leaf, Crown } from "lucide-react";
import { Image3D } from "@/components/image-3d";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const mainFeatures = [
  {
    icon: Sparkles,
    title: "Tratamientos Premium",
    description: "Tecnología avanzada en cuidado facial.",
  },
  {
    icon: Crown,
    title: "Experiencia VIP",
    description: "Atención personalizada y exclusiva.",
  },
  {
    icon: Leaf,
    title: "Productos Orgánicos",
    description: "Solo ingredientes naturales certificados.",
  },
  {
    icon: Heart,
    title: "Bienestar Total",
    description: "Cuidado integral de cuerpo y mente.",
  },
];

export function FeaturesAdvanced() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="tratamientos" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="mx-auto max-w-2xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4">
            Nuestros Tratamientos
          </Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">
            Experiencia de Spa de Clase Mundial
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Descubre nuestros tratamientos exclusivos diseñados para realzar tu
            belleza natural y brindarte la máxima relajación
          </p>
        </motion.div>

        {/* First Feature Section */}
        <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-8 xl:gap-16 mb-24">
          {/* Left Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <Image3D
              lightSrc="elegant-woman-spa-flowers-natural-beauty.jpg"
              darkSrc="elegant-woman-spa-flowers-natural-beauty.jpg"
              alt="Tratamientos faciales premium"
              direction="left"
            />
          </motion.div>

          {/* Right Content */}
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            <div className="space-y-4">
              <h3 className="font-serif text-3xl font-semibold tracking-tight text-balance">
                Tratamientos Diseñados Para Ti
              </h3>
              <p className="text-muted-foreground text-base text-pretty leading-relaxed">
                Cada tratamiento está cuidadosamente diseñado con productos
                premium y técnicas avanzadas para garantizar resultados
                excepcionales y una experiencia inolvidable.
              </p>
            </div>

            <ul className="grid gap-4 sm:grid-cols-2">
              {mainFeatures.map((feature, index) => (
                <motion.li
                  key={index}
                  className="flex gap-3 group"
                  initial={{ opacity: 0, y: 20 }}
                  animate={
                    isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                  }
                  transition={{ delay: 0.4 + index * 0.1 }}
                >
                  <div className="shrink-0">
                    <motion.div
                      className="w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/20 flex items-center justify-center transition-colors duration-300"
                      whileHover={{ scale: 1.1, rotate: 360 }}
                      transition={{ duration: 0.5 }}
                    >
                      <feature.icon className="w-5 h-5 text-primary" />
                    </motion.div>
                  </div>
                  <div className="space-y-1">
                    <h4 className="font-semibold text-sm">{feature.title}</h4>
                    <p className="text-sm text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.li>
              ))}
            </ul>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-2"
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
              transition={{ delay: 0.8 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg">Reservar Consulta</Button>
              </motion.div>
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
              >
                <Button size="lg" variant="outline">
                  Ver Todos los Tratamientos
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
