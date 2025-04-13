import Image from "next/image";

import Hero from "@/components/Hero";
import Sponsors from "@/components/Sponsors";
import AboutUs from "@/components/AboutUs";
import Testimonials from "@/components/Testimonials";
import Events from "@/components/Events";
import GameSection from "@/components/GameSection";
import Teams from "@/components/Teams";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen">
      <Hero />
      <Sponsors />
      <AboutUs />
      <Teams />
      <Testimonials />
      <Events />
      <GameSection />
      <Footer />
    </main>
  );
}
