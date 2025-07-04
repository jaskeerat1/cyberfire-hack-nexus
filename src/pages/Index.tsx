import Hero from "@/components/Hero";
import About from "@/components/About";
import Vision from "@/components/Vision";
import Timeline from "@/components/Timeline";
import Sponsors from "@/components/Sponsors";
import Mentors from "@/components/Mentors";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Hero />
      <About />
      <Vision />
      <Timeline />
      <Sponsors />
      <Mentors />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;