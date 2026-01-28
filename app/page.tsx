import { Header } from "@/components/hotel/header";
import { Hero } from "@/components/hotel/hero";
import { About } from "@/components/hotel/about";
import { Rooms } from "@/components/hotel/rooms";
import { Dining } from "@/components/hotel/dining";
import { Experiences } from "@/components/hotel/experiences";
import { Gallery } from "@/components/hotel/gallery";
import { Contact } from "@/components/hotel/contact";
import { Footer } from "@/components/hotel/footer";

export default function HomePage() {
  return (
    <>
      <Header />
      <main className="min-h-screen bg-background">
        <Hero />
        <About />
        <Rooms />
        <Dining />
        <Experiences />
        <Gallery />
        {/* Booking kısmını buradan sildik */}
        <Contact />
      </main>
      <Footer />
    </>
  );
}