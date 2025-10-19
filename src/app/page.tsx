import Hero from "@/components/modules/Hero";
import Features from "@/components/modules/Features";
import Pricing from "@/components/modules/Pricing";
import Testimonials from "@/components/modules/Testimonials";
import FAQ from "@/components/modules/FAQ";
import Contact from "@/components/modules/Contact";
import AnimationProvider from "@/components/effects/AnimationProvider";
import ProductIntro from "@/components/modules/ProductIntro";
import CompanyValues from "@/components/modules/CompanyValues";
import DataSecurity from "@/components/modules/DataSecurity";
import FloatingContact from "@/components/layout/FloatingContact";

export default function Home() {
  return (
    <div className="font-sans">
      <AnimationProvider>
        <section id="hero">
          <Hero />
        </section>
        
        <section id="product" className="py-20 bg-gradient-to-b from-background to-foreground/5">
          <ProductIntro />
        </section>
        
        <section id="features">
          <Features />
        </section>
        
        <section id="values" className="py-20">
          <CompanyValues />
        </section>

        <section id="security" className="py-20 bg-gradient-to-b from-background to-foreground/5">
          <DataSecurity />
        </section>

        <section id="pricing" className="py-20 bg-gradient-to-b from-background to-foreground/5">
          <Pricing />
        </section>
        
        <section id="research" className="py-20">
          <Testimonials />
        </section>
        
        <section id="knowledge" className="py-20 bg-gradient-to-b from-background to-foreground/5">
          <FAQ />
        </section>
        
        <section id="contact" className="py-20">
          <Contact />
        </section>
        
        <FloatingContact />
      </AnimationProvider>
    </div>
  );
}
