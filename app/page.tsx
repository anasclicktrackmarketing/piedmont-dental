import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import Hero from "@/components/Hero";
import AboutFeature from "@/components/AboutFeature";
import AwardsStrip from "@/components/AwardsStrip";
import Services from "@/components/Services";
import BeforeAfter from "@/components/BeforeAfter";
import About from "@/components/About";
import Reviews from "@/components/Reviews";
import FAQ from "@/components/FAQ";
import Visit from "@/components/Visit";
import SiteFooter from "@/components/SiteFooter";
import HomepageSchema from "@/components/schema/HomepageSchema";

export default function HomePage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <Hero />
      <AboutFeature
        eyebrow="— Our dentists —"
        heading={
          <>
            Meet our dentists behind <em>your smile.</em>
          </>
        }
        body={[
          "For 30 years, Piedmont Dental By Design has remained a locally owned, family-oriented practice — devoted to restoring and enhancing the natural beauty of your smile using conservative, state-of-the-art procedures that result in beautiful, long-lasting smiles.",
          "Today the practice is led by its co-owners, Dr. Jill Martenson and Dr. David Ma, who share the same values that have guided the practice for three decades — trust, comfort, and personalized care.",
        ]}
        image="/img/about/doctors-martenson-ma.jpg"
        imageAlt="Dr. Jill Martenson and Dr. David Ma of Piedmont Dental By Design"
        imageSide="right"
      />
      <AwardsStrip />
      <Services />
      <BeforeAfter />
      <About />
      <Reviews />
      <FAQ />
      <Visit />
      <SiteFooter />
      <HomepageSchema />
    </>
  );
}
