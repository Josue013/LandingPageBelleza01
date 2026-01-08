import { Button } from "@/components/ui/button";
import { Image3D } from "@/components/image-3d";
import { motion } from "framer-motion";

export function Hero() {
  return (
    <section
      id="inicio"
      className="pt-24 pb-16 md:pt-32 md:pb-24 bg-secondary/30 overflow-hidden"
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid md:grid-cols-2 gap-12 items-center">
          <motion.div
            className="space-y-6"
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut" }}
          >
            <motion.div
              className="inline-block"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.2, duration: 0.5 }}
            >
              <span className="text-sm font-medium text-primary bg-primary/10 px-4 py-2 rounded-full">
                Tu Centro de Bienestar
              </span>
            </motion.div>

            <motion.h1
              className="font-serif text-5xl md:text-6xl lg:text-7xl font-bold leading-tight text-balance"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              El Hogar del Cuidado
            </motion.h1>

            <motion.p
              className="text-lg md:text-xl text-muted-foreground leading-relaxed text-pretty"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4, duration: 0.6 }}
            >
              Descubre una experiencia única de belleza y relajación con
              nuestros tratamientos personalizados que realzan tu belleza
              natural.
            </motion.p>

            <motion.div
              className="flex flex-col sm:flex-row gap-4 pt-4"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5, duration: 0.6 }}
            >
              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <Button size="lg" className="text-base">
                  Hacer una Cita
                </Button>
              </motion.div>

              <motion.div
                whileHover={{ scale: 1.05, y: -2 }}
                whileTap={{ scale: 0.95 }}
                transition={{ type: "spring", stiffness: 400, damping: 15 }}
              >
                <Button
                  size="lg"
                  variant="outline"
                  className="text-base bg-transparent"
                >
                  Ver Servicios
                </Button>
              </motion.div>
            </motion.div>
          </motion.div>

          <motion.div
            className="relative"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, ease: "easeOut", delay: 0.3 }}
          >
            <Image3D
              lightSrc="elegant-luxury-perfume-bottle-pink-coral-roses-pet.jpg"
              darkSrc="elegant-luxury-perfume-bottle-pink-coral-roses-pet.jpg"
              alt="Belleza Natural - Tratamientos Spa Premium"
              direction="right"
              className="aspect-square"
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
