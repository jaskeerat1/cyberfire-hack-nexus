import Hero from "@/components/Hero";
import About from "@/components/About";
import Vision from "@/components/Vision";
import Timeline from "@/components/Timeline";
import Sponsors from "@/components/Sponsors";
import Mentors from "@/components/Mentors";
import Oragnizers from '@/components/Organizers';
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import NavBar from "@/components/NavBar";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <NavBar />
      <section data-aos="fade-up">
        <Hero />
      </section>
      <section data-aos="fade-right" id="about">
        <About />
      </section>
      <section data-aos="fade-left" >
        <Vision />
      </section>
      <section data-aos="fade-up" id="timeline">
        <Timeline />
      </section>
      <section data-aos="zoom-in"  id="sponsors">
        <Sponsors />
      </section>
      {/* <section data-aos="fade-up"  id="mentors">
        <Mentors />
      </section> */}
      <section data-aos='fade-up' id="organizers">
        <Oragnizers />
      </section> 
      <section data-aos="fade-up"  id="contact">
        <Contact />
      </section>
      <footer data-aos="fade-up">
        <Footer />
      </footer>
    </div>
  );
};

export default Index;