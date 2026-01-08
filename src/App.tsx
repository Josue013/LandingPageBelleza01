import { Header } from "./components/header";
import { Hero } from "./components/hero";
import { LogoCarousel } from "./components/logo-carousel";
import { FeaturesAdvanced } from "./components/features-advanced";
import { Features } from "./components/features";
import { Testimonials } from "./components/testimonials";
import { Pricing } from "./components/pricing";
import { FAQ } from "./components/faq";
import { Cta } from "./components/cta";
import { Footer } from "./components/footer";

function App() {
  return (
    <>
      <Header />
      <Hero />
      <LogoCarousel />
      <FeaturesAdvanced />
      <Features />
      <Testimonials />
      <Pricing />
      <FAQ />
      <Cta />
      <Footer />
    </>
  );
}

export default App;
