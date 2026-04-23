import Navbar from "@/components/site/Navbar";
import Hero from "@/components/site/Hero";
import Services from "@/components/site/Services";
import About from "@/components/site/About";
import Process from "@/components/site/Process";
import WhyChooseUs from "@/components/site/WhyChooseUs";
import Contact from "@/components/site/Contact";
import Footer from "@/components/site/Footer";
import useReveal from "@/hooks/useReveal";

export default function Landing() {
  useReveal();
  return (
    <div data-testid="landing-page" className="min-h-screen bg-[#FAFAFA] text-[#111827]">
      <Navbar />
      <main>
        <Hero />
        <Services />
        <About />
        <Process />
        <WhyChooseUs />
        <Contact />
      </main>
      <Footer />
    </div>
  );
}
