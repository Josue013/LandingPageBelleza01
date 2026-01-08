import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Star, Quote } from "lucide-react";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const testimonials = [
  {
    name: "María González",
    role: "Cliente Regular",
    content:
      "Los tratamientos faciales son increíbles. Mi piel nunca se ha visto mejor. El personal es muy profesional y atento.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Maria",
  },
  {
    name: "Ana Rodríguez",
    role: "Cliente VIP",
    content:
      "El ambiente es tan relajante y los productos naturales realmente hacen la diferencia. ¡Totalmente recomendado!",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Ana",
  },
  {
    name: "Carmen López",
    role: "Cliente Frecuente",
    content:
      "Encontré mi lugar favorito de belleza y bienestar. La atención personalizada y los resultados son excepcionales.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Carmen",
  },
  {
    name: "Isabel Martín",
    role: "Cliente Nueva",
    content:
      "Desde mi primera visita quedé encantada. Los masajes son divinos y el ambiente es perfecto para desconectar.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Isabel",
  },
  {
    name: "Laura Sánchez",
    role: "Cliente Premium",
    content:
      "La calidad de los productos y la profesionalidad del equipo son incomparables. Cada visita es una experiencia única.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Laura",
  },
  {
    name: "Patricia Ruiz",
    role: "Cliente Satisfecha",
    content:
      "Después de probar varios spas, este es sin duda el mejor. Los resultados son visibles y duraderos.",
    rating: 5,
    image: "https://api.dicebear.com/7.x/avataaars/svg?seed=Patricia",
  },
];

export function Testimonials() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="testimonios" className="py-24 md:py-32 bg-secondary/20">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4">
            Testimonios
          </Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">
            Lo Que Dicen Nuestras Clientas
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Testimonios reales de clientas satisfechas que han transformado su
            experiencia de belleza con nosotros
          </p>
        </motion.div>

        {/* Masonry Grid Layout */}
        <div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
          {testimonials.map((testimonial, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -4, scale: 1.02 }}
            >
              <Card className="border-border break-inside-avoid hover:shadow-lg hover:border-primary/50 transition-all duration-300">
                <CardContent className="p-6 space-y-4">
                  {/* Quote Icon */}
                  <motion.div
                    className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center"
                    whileHover={{ rotate: 360, scale: 1.1 }}
                    transition={{ duration: 0.6 }}
                  >
                    <Quote className="w-5 h-5 text-primary" />
                  </motion.div>

                  {/* Rating */}
                  <div className="flex gap-1">
                    {[...Array(testimonial.rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={
                          isInView
                            ? { opacity: 1, scale: 1 }
                            : { opacity: 0, scale: 0 }
                        }
                        transition={{ delay: 0.5 + index * 0.1 + i * 0.05 }}
                      >
                        <Star className="w-4 h-4 fill-primary text-primary" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Content */}
                  <p className="text-foreground leading-relaxed italic">
                    "{testimonial.content}"
                  </p>

                  {/* Author */}
                  <div className="flex items-center gap-3 pt-4 border-t border-border">
                    <div className="w-10 h-10 rounded-full overflow-hidden bg-secondary">
                      <img
                        src={testimonial.image}
                        alt={testimonial.name}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <div>
                      <p className="font-semibold text-sm">
                        {testimonial.name}
                      </p>
                      <p className="text-xs text-muted-foreground">
                        {testimonial.role}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
