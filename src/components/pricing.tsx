import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Check } from "lucide-react";
import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";

const plans = [
  {
    name: "Básico",
    price: "49",
    description: "Perfecto para comenzar tu viaje de belleza",
    features: [
      "Tratamiento facial básico",
      "Consulta de cuidado de piel",
      "Productos para el hogar",
      "Atención por cita",
    ],
  },
  {
    name: "Premium",
    price: "99",
    description: "Nuestra opción más popular con beneficios exclusivos",
    features: [
      "Tratamiento facial avanzado",
      "Masaje corporal relajante",
      "Productos premium incluidos",
      "Prioridad en reservas",
      "Descuento del 15% en productos",
    ],
    popular: true,
  },
  {
    name: "Luxury",
    price: "199",
    description: "Experiencia completa de spa y bienestar",
    features: [
      "Todos los servicios Premium",
      "Tratamientos corporales completos",
      "Aromaterapia personalizada",
      "Acceso a eventos exclusivos",
      "Descuento del 25% en productos",
      "Servicio de concierge",
    ],
  },
];

export function Pricing() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: "-100px" });

  return (
    <section id="precios" className="py-16 md:py-24 bg-background">
      <div className="container mx-auto px-4 lg:px-8" ref={ref}>
        <motion.div
          className="text-center max-w-3xl mx-auto mb-16"
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 20 }}
          transition={{ duration: 0.6 }}
        >
          <Badge variant="outline" className="mb-4">
            Planes y Precios
          </Badge>
          <h2 className="font-serif text-4xl md:text-5xl font-bold mb-4 text-balance">
            Elige Tu Plan
          </h2>
          <p className="text-lg text-muted-foreground text-pretty">
            Elige el plan que mejor se adapte a tus necesidades de belleza y
            bienestar
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 50 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
              transition={{ duration: 0.5, delay: index * 0.15 }}
              whileHover={{ y: -8, scale: 1.02 }}
            >
              <Card
                className={`relative h-full ${
                  plan.popular ? "border-primary shadow-lg" : "border-border"
                }`}
              >
                {plan.popular && (
                  <motion.div
                    className="absolute -top-4 left-1/2 -translate-x-1/2"
                    initial={{ scale: 0 }}
                    animate={isInView ? { scale: 1 } : { scale: 0 }}
                    transition={{
                      delay: 0.5,
                      type: "spring",
                      stiffness: 300,
                      damping: 15,
                    }}
                  >
                    <span className="bg-primary text-primary-foreground px-4 py-1 rounded-full text-sm font-semibold">
                      Más Popular
                    </span>
                  </motion.div>
                )}
                <CardHeader className="text-center pb-8 pt-8">
                  <CardTitle className="font-serif text-2xl mb-2">
                    {plan.name}
                  </CardTitle>
                  <CardDescription className="text-pretty">
                    {plan.description}
                  </CardDescription>
                  <div className="mt-4">
                    <span className="text-5xl font-bold">${plan.price}</span>
                    <span className="text-muted-foreground">/mes</span>
                  </div>
                </CardHeader>
                <CardContent className="space-y-4">
                  {plan.features.map((feature, i) => (
                    <motion.div
                      key={i}
                      className="flex items-start gap-3"
                      initial={{ opacity: 0, x: -10 }}
                      animate={
                        isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -10 }
                      }
                      transition={{ delay: 0.6 + i * 0.05 }}
                    >
                      <div className="w-5 h-5 rounded-full bg-primary/10 flex items-center justify-center shrink-0 mt-0.5">
                        <Check className="w-3 h-3 text-primary" />
                      </div>
                      <span className="text-sm leading-relaxed">{feature}</span>
                    </motion.div>
                  ))}
                </CardContent>
                <CardFooter>
                  <motion.div
                    className="w-full"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    transition={{ type: "spring", stiffness: 400, damping: 15 }}
                  >
                    <Button
                      className="w-full"
                      variant={plan.popular ? "default" : "outline"}
                    >
                      Seleccionar Plan
                    </Button>
                  </motion.div>
                </CardFooter>
              </Card>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
