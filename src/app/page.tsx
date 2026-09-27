import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";
import StatsBar from "@/components/StatsBar";
import Programs from "@/components/Programs";
import Coaches from "@/components/Coaches";
import Gallery from "@/components/Gallery";
import Testimonials from "@/components/Testimonials";
import NotablePlayers from "@/components/NotablePlayers";
import Sponsors from "@/components/Sponsors";
import EnrollForm from "@/components/EnrollForm";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <Navbar />
      <main>
        <Hero />
        <StatsBar />
        <Programs />
        <Coaches />
        <Gallery />
        <Testimonials />
        <NotablePlayers />
        <Sponsors />
        <EnrollForm />
      </main>
      <Footer />
    </>
  );
}
