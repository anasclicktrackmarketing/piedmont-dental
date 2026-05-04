import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import AwardsStrip from "@/components/AwardsStrip";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Booker from "@/components/Booker";
import Visit from "@/components/Visit";
import SiteFooter from "@/components/SiteFooter";

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <Hero />
      <AwardsStrip />
      <Services />
      <BeforeAfter />
      <About />
      <Reviews />
      <FAQ />
      <Booker />
      <Visit />
      <SiteFooter />
    </>
  );
}
