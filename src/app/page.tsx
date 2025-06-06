import Hero from "@/components/Hero";
import Sponsors from "@/components/Sponsors";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import Events from "@/components/Events";
import Teams from "@/components/Teams";
import Footer from "@/components/Footer";
import { Toaster } from "react-hot-toast";

export default function Home() {
  return (
    <main className="min-h-screen">
      <section id="home">
        <Hero />
      </section>
      <section id="sponsors">
        <Sponsors />
      </section>
      <section id="about">
        <AboutUs />
      </section>
      <section id="teams">
        <Teams />
      </section>
      <section id="testimonials">
        <Testimonials />
      </section>
      <section id="events">
        <Events />
      </section>
      {/* <section id="games">
        <GameSection />
      </section> */}
      <section id="blogs">
        {/* Add your Blogs component here if available */}
      </section>
      <section id="projects">
        {/* Add your Projects component here if available */}
      </section>
      <section id="story">
        {/* Add your Story component here if available */}
      </section>
      <Footer />
      <Toaster />
    </main>
  );
}
