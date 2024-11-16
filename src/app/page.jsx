import Header from "@/components/Header";
import Navbar from "@/components/Navbar";
import About from "../components/About";
import Skills from "@/components/Skills";
import Experience from "@/components/Experience";
import Services from "@/components/Services";
import Portfolio from "@/components/Portfolio";
import ContactCard from "@/components/ContactCard";
import Testimonials from "@/components/Testimonials";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";

const Home = () => {
  return (
    <>
      <section id="home">
        <Navbar />
        <Header />
      </section>
      <section id="about">
        <About />
      </section>
      <section id="skills">
        <Skills />
      </section>
      <section id="experience">
        <Experience />
      </section>
      <section id="services">
        <Services />
      </section>
      <section id="portfolio">
        <Portfolio />
      </section>
      <section id="contact-card">
        <ContactCard />
      </section>
      <section id="testimonial">
        <Testimonials />
      </section>
      <section id="contact">
        <Contact />
      </section>
      <section id="footer">
        <Footer />
      </section>
    </>
  );
};

export default Home;
