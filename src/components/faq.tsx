import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion, useInView } from "framer-motion";
import { useRef } from "react";

const faqItems = [
  {
    value: "item-1",
    question: "¿Necesito reservar cita previa?",
    answer:
      "Sí, recomendamos reservar con anticipación para garantizar tu horario preferido. Puedes reservar por teléfono, WhatsApp o a través de nuestra página web. También aceptamos citas para el mismo día según disponibilidad.",
  },
  {
    value: "item-2",
    question: "¿Qué debo llevar a mi primera cita?",
    answer:
      "No necesitas traer nada especial. Proporcionamos batas, toallas y todos los productos necesarios. Solo te recomendamos llegar 10 minutos antes para completar el formulario de consulta y comenzar tu experiencia de relajación.",
  },
  {
    value: "item-3",
    question: "¿Los productos que utilizan son naturales?",
    answer:
      "Sí, trabajamos exclusivamente con productos orgánicos y naturales de las mejores marcas internacionales. Todos nuestros productos están certificados y son seguros para todo tipo de piel, incluyendo pieles sensibles.",
  },
  {
    value: "item-4",
    question: "¿Ofrecen paquetes o membresías?",
    answer:
      "Sí, ofrecemos diversos paquetes mensuales y membresías VIP con beneficios exclusivos. Nuestros planes incluyen descuentos en tratamientos, prioridad en reservas y acceso a eventos especiales. Consulta nuestros planes en la sección de precios.",
  },
  {
    value: "item-5",
    question: "¿Cuánto dura cada tratamiento?",
    answer:
      "La duración varía según el tratamiento. Los tratamientos faciales básicos duran aproximadamente 60 minutos, mientras que los paquetes completos pueden durar hasta 3 horas. Te recomendamos consultar la duración específica al momento de reservar.",
  },
  {
    value: "item-6",
    question: "¿Tienen políticas de cancelación?",
    answer:
      "Solicitamos un aviso de cancelación con al menos 24 horas de anticipación. Las cancelaciones con menos de 24 horas pueden estar sujetas a un cargo del 50% del valor del servicio. Entendemos que pueden surgir imprevistos y valoramos tu comprensión.",
  },
];

export function FAQ() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="faq" className="py-24 md:py-32 bg-background">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8" ref={ref}>
        {/* Section Header */}
        <motion.div
          className="mx-auto max-w-2xl text-center mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4">
            FAQ
          </Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">
            Preguntas Frecuentes
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Respuestas a las preguntas más comunes sobre nuestros servicios y
            tratamientos
          </p>
        </motion.div>

        {/* FAQ Content */}
        <div className="max-w-4xl mx-auto">
          <div className="bg-transparent">
            <div className="p-0">
              <Accordion type="single" collapsible className="space-y-4">
                {faqItems.map((item, index) => (
                  <motion.div
                    key={item.value}
                    initial={{ opacity: 0, y: 20 }}
                    animate={
                      isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }
                    }
                    transition={{ duration: 0.5, delay: index * 0.1 }}
                  >
                    <AccordionItem
                      value={item.value}
                      className="rounded-lg border border-border bg-card px-6 hover:border-primary/50 transition-colors duration-300"
                    >
                      <AccordionTrigger className="cursor-pointer items-center gap-4 py-5 hover:no-underline hover:text-primary transition-colors">
                        <span className="text-left font-serif font-semibold">
                          {item.question}
                        </span>
                      </AccordionTrigger>
                      <AccordionContent className="pb-5 text-muted-foreground leading-relaxed">
                        {item.answer}
                      </AccordionContent>
                    </AccordionItem>
                  </motion.div>
                ))}
              </Accordion>
            </div>
          </div>

          {/* Contact Support CTA */}
          <motion.div
            className="text-center mt-12"
            initial={{ opacity: 0, y: 20 }}
            animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
            transition={{ delay: 0.8 }}
          >
            <p className="text-muted-foreground mb-4">
              ¿Tienes más preguntas? Estamos aquí para ayudarte.
            </p>
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button size="lg" className="cursor-pointer">
                Contáctanos
              </Button>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
