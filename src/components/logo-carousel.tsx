import { Card } from "@/components/ui/card";

// Simple icon component for company logos
const SimpleIcon = ({
  iconSlug,
  size = 24,
}: {
  iconSlug: string;
  size?: number;
}) => {
  const iconMap = {
    aveda:
      "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 18c-4.41 0-8-3.59-8-8s3.59-8 8-8 8 3.59 8 8-3.59 8-8 8zm-1-13h2v6h-2zm0 8h2v2h-2z",
    clarins:
      "M12 2L2 7v10c0 5.55 3.84 10.74 9 12 5.16-1.26 9-6.45 9-12V7l-10-5zm0 18.5c-4 0-7-2.69-7-6.5V8.3l7-3.11 7 3.11V14c0 3.81-3 6.5-7 6.5z",
    loccitane:
      "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z",
    dermalogica:
      "M19 3H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2V5c0-1.1-.9-2-2-2zm0 16H5V5h14v14zm-7-2h2v-4h4v-2h-4V7h-2v4H8v2h4z",
    elemis:
      "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm0 3c1.66 0 3 1.34 3 3s-1.34 3-3 3-3-1.34-3-3 1.34-3 3-3zm0 14.2c-2.5 0-4.71-1.28-6-3.22.03-1.99 4-3.08 6-3.08 1.99 0 5.97 1.09 6 3.08-1.29 1.94-3.5 3.22-6 3.22z",
    fresh:
      "M12 2L4 5v6.09c0 5.05 3.41 9.76 8 10.91 4.59-1.15 8-5.86 8-10.91V5l-8-3zm6 9.09c0 4-2.55 7.7-6 8.83-3.45-1.13-6-4.82-6-8.83V6.31l6-2.12 6 2.12v4.78z",
    kiehls:
      "M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z",
    lamer:
      "M12 2L4.5 20.29l.71.71L12 18l6.79 3 .71-.71L12 2zm0 2.83l5.63 12.96L12 15.67l-5.63 2.12L12 4.83z",
  } as const;

  const iconPath = iconMap[iconSlug as keyof typeof iconMap];

  if (!iconPath) {
    return (
      <div
        className="bg-muted animate-pulse rounded-sm"
        style={{ width: size, height: size }}
      />
    );
  }

  return (
    <svg
      role="img"
      viewBox="0 0 24 24"
      className="fill-primary"
      style={{ width: size, height: size }}
    >
      <path d={iconPath} />
    </svg>
  );
};

// Spa brands data
const spaBrands = [
  { name: "Aveda", id: "aveda" },
  { name: "Clarins", id: "clarins" },
  { name: "L'Occitane", id: "loccitane" },
  { name: "Dermalogica", id: "dermalogica" },
  { name: "Elemis", id: "elemis" },
  { name: "Fresh", id: "fresh" },
  { name: "Kiehl's", id: "kiehls" },
  { name: "La Mer", id: "lamer" },
] as const;

export function LogoCarousel() {
  return (
    <section className="pb-12 sm:pb-16 lg:pb-20 pt-8 bg-secondary/20">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center">
          <p className="text-sm font-medium text-muted-foreground mb-8">
            Trabajamos con las mejores marcas de belleza
          </p>

          {/* Logo Carousel with Fade Effect */}
          <div className="relative">
            {/* Left Fade */}
            <div className="absolute left-0 top-0 bottom-0 w-20 bg-linear-to-r from-secondary/20 to-transparent z-10 pointer-events-none" />

            {/* Right Fade */}
            <div className="absolute right-0 top-0 bottom-0 w-20 bg-linear-to-l from-secondary/20 to-transparent z-10 pointer-events-none" />

            {/* Logo Container */}
            <div className="overflow-hidden">
              <div className="flex animate-logo-scroll space-x-8 sm:space-x-12">
                {/* First set of logos */}
                {spaBrands.map((brand, index) => (
                  <Card
                    key={`first-${index}`}
                    className="shrink-0 flex items-center justify-center h-16 w-40 opacity-60 hover:opacity-100 transition-opacity duration-300 border-border/50 shadow-sm bg-background/50 backdrop-blur"
                  >
                    <div className="flex items-center gap-3">
                      <SimpleIcon iconSlug={brand.id} size={24} />
                      <span className="text-foreground text-lg font-serif font-semibold whitespace-nowrap">
                        {brand.name}
                      </span>
                    </div>
                  </Card>
                ))}
                {/* Second set for seamless loop */}
                {spaBrands.map((brand, index) => (
                  <Card
                    key={`second-${index}`}
                    className="shrink-0 flex items-center justify-center h-16 w-40 opacity-60 hover:opacity-100 transition-opacity duration-300 border-border/50 shadow-sm bg-background/50 backdrop-blur"
                  >
                    <div className="flex items-center gap-3">
                      <SimpleIcon iconSlug={brand.id} size={24} />
                      <span className="text-foreground text-lg font-serif font-semibold whitespace-nowrap">
                        {brand.name}
                      </span>
                    </div>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
