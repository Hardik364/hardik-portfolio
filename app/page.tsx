import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import Hero from "@/components/sections/Hero";
import TechMarquee from "@/components/sections/TechMarquee";
import About from "@/components/sections/About";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Services from "@/components/sections/Services";
import Testimonials from "@/components/sections/Testimonials";
import Contact from "@/components/sections/Contact";

export default function Home() {
  return (
    <main className="bg-[#0A0A0A] min-h-screen">
      <Navbar />
      <Hero />
      <TechMarquee />
      <About />
      <Skills />
      <Projects />
      <Services />
      <Testimonials />
      <Contact />
      <Footer />
    </main>
  );
}
