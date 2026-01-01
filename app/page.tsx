import Hero from "@/components/Hero";

import Services from "@/components/Services";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Projects from "@/components/Projects";
import CTA from "@/components/CTA";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

import FeatureHighlight from "@/components/FeatureHighlight";
import ScaleSection from "@/components/ScaleSection";
import AIShowcase from "@/components/AIShowcase";

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-bg-primary font-sans text-text-primary selection:bg-accent-coffee selection:text-black">
      <Header />

      <main className="flex-grow pt-20">
        <Hero />
        <Services />
        <AIShowcase />
        <Process />
        <WhyUs />
        <Projects />

        <FeatureHighlight />
        <ScaleSection />
        <CTA />

      </main>

      <Footer />
    </div>
  );
}
