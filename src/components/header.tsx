import { Button } from "@/components/ui/button";
import { Menu } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";

const navigationItems = [
  { name: "Inicio", href: "#inicio" },
  { name: "Tratamientos", href: "#tratamientos" },
  { name: "Servicios", href: "#servicios" },
  { name: "Testimonios", href: "#testimonios" },
  { name: "Precios", href: "#precios" },
  { name: "FAQ", href: "#faq" },
  { name: "Contacto", href: "#contacto" },
];

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);

  // Detectar scroll para cambiar el header
  useState(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  });

  return (
    <motion.header
      className={`fixed top-0 w-full backdrop-blur supports-backdrop-filter:bg-background/60 z-50 border-b transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 border-border shadow-sm"
          : "bg-background/80 border-border/50"
      }`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ type: "spring", stiffness: 300, damping: 30 }}
    >
      <div className="container mx-auto px-4 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo with animation */}
          <motion.div
            className="flex items-center gap-2"
            whileHover={{ scale: 1.02 }}
            transition={{ type: "spring", stiffness: 400, damping: 10 }}
          >
            <motion.div
              className="w-10 h-10 rounded-full bg-primary flex items-center justify-center"
              whileHover={{ rotate: 360 }}
              transition={{ duration: 0.6, ease: "easeInOut" }}
            >
              <svg
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="w-6 h-6 text-primary-foreground"
              >
                <path d="M12 2a3 3 0 0 0-3 3v4a3 3 0 0 0 6 0V5a3 3 0 0 0-3-3Z" />
                <path d="M12 9v13" />
                <path d="M8 22h8" />
              </svg>
            </motion.div>
            <span className="font-serif text-xl font-semibold">
              Belleza spa
            </span>
          </motion.div>

          {/* Navigation with stagger animation */}
          <motion.nav
            className="hidden md:flex items-center gap-8"
            initial="hidden"
            animate="visible"
            variants={{
              hidden: { opacity: 0 },
              visible: {
                opacity: 1,
                transition: {
                  staggerChildren: 0.08,
                  delayChildren: 0.2,
                },
              },
            }}
          >
            {navigationItems.map((item) => (
              <motion.a
                key={item.name}
                href={item.href}
                className="text-sm font-medium hover:text-primary transition-colors relative group"
                variants={{
                  hidden: { opacity: 0, y: -10 },
                  visible: { opacity: 1, y: 0 },
                }}
                whileHover={{ y: -2 }}
                transition={{ type: "spring", stiffness: 300, damping: 20 }}
              >
                {item.name}
                <motion.span
                  className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary group-hover:w-full transition-all duration-300"
                  layoutId="underline"
                />
              </motion.a>
            ))}
          </motion.nav>

          {/* CTA Buttons with animation */}
          <div className="flex items-center gap-4">
            <motion.div
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
              className="hidden md:block"
            >
              <Button>Reservar Cita</Button>
            </motion.div>

            <motion.div
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              transition={{ type: "spring", stiffness: 400, damping: 15 }}
            >
              <Button variant="ghost" size="icon" className="md:hidden">
                <Menu className="h-5 w-5" />
              </Button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.header>
  );
}
