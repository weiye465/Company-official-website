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

// Structured Data for SEO
const structuredData = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "深圳市慧泽致远人工智能科技有限公司",
  alternateName: "慧泽致远",
  url: "https://huizezhiyuan.com",
  logo: "https://huizezhiyuan.com/logo.png",
  description: "慧泽致远专注于AI数据分析领域，数驭穹图是以AI为核心的智能数据分析平台，通过自然语言对话、多源数据接入、自动洞察生成，为企业提供简单易用但功能强大的数据分析解决方案。",
  foundingDate: "2024",
  address: {
    "@type": "PostalAddress",
    addressLocality: "深圳",
    addressRegion: "广东省",
    addressCountry: "中国",
  },
  sameAs: [
    "https://www.aishujufenxi.com/",
  ],
  services: [
    {
      "@type": "Service",
      name: "数驭穹图 AI数据分析平台",
      description: "通过自然语言对话进行数据分析，支持Excel、CSV、数据库等多源数据接入，自动生成可视化报表和洞察",
    },
    {
      "@type": "Service",
      name: "智能数据分析解决方案",
      description: "为企业提供AI驱动的数据分析平台，支持自动报表生成、数据可视化和业务洞察",
    },
    {
      "@type": "Service",
      name: "企业级数据门户",
      description: "统一接入、多源联动、自动洞察与高可用交付的智能数据门户解决方案",
    },
  ],
};

export default function Home() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
      />
      <div className="font-sans">
        <AnimationProvider>
        <header role="banner">
          <section id="hero" aria-labelledby="hero-title">
            <Hero />
          </section>
        </header>

        <main role="main">
          <section id="product" className="py-20 bg-gradient-to-b from-background to-foreground/5" aria-labelledby="product-title">
            <ProductIntro />
          </section>

          <section id="features" aria-labelledby="features-title">
            <Features />
          </section>

          <section id="values" className="py-20" aria-labelledby="values-title">
            <CompanyValues />
          </section>

          <section id="security" className="py-20 bg-gradient-to-b from-background to-foreground/5" aria-labelledby="security-title">
            <DataSecurity />
          </section>

          <section id="pricing" className="py-20 bg-gradient-to-b from-background to-foreground/5" aria-labelledby="pricing-title">
            <Pricing />
          </section>

          <section id="research" className="py-20" aria-labelledby="research-title">
            <Testimonials />
          </section>

          <section id="knowledge" className="py-20 bg-gradient-to-b from-background to-foreground/5" aria-labelledby="knowledge-title">
            <FAQ />
          </section>
        </main>

        <footer role="contentinfo">
          <section id="contact" className="py-20" aria-labelledby="contact-title">
            <Contact />
          </section>
        </footer>
        
        <FloatingContact />
      </AnimationProvider>
      </div>
    </>
  );
}
