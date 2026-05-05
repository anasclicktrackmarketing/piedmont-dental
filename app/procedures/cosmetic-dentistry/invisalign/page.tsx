import type { Metadata } from "next";
import AnnouncementBar from "@/components/AnnouncementBar";
import SiteHeader from "@/components/SiteHeader";
import ProcedureDetail from "@/components/ProcedureDetail";
import AwardsStrip from "@/components/AwardsStrip";
import AboutCTA from "@/components/AboutCTA";
import SiteFooter from "@/components/SiteFooter";
import { getCategory } from "@/lib/procedure-categories";

export const metadata: Metadata = {
  title:
    "Invisalign® Clear Aligners in Piedmont, CA | Discreet Teeth Straightening | Piedmont Dental",
  description:
    "Invisalign® aligners — a discreet alternative to traditional braces for adults. Mess-free iTero scans, custom clear trays, 22 hours of daily wear. Piedmont, Oakland & East Bay.",
  alternates: { canonical: "/procedures/cosmetic-dentistry/invisalign" },
  openGraph: {
    title: "Invisalign® — Piedmont Dental By Design",
    description:
      "Discreet teeth straightening with clear plastic aligners. iTero digital scanning, custom-made trays, comfortable removal for eating.",
    url: "https://piedmontdentalbydesign.com/procedures/cosmetic-dentistry/invisalign",
    type: "article",
    images: ["/svc/invisalign.jpg"],
  },
};

const category = getCategory("cosmetic-dentistry");

export default function InvisalignPage() {
  return (
    <>
      <AnnouncementBar />
      <SiteHeader />
      <main>
        <ProcedureDetail
          category={{ slug: category.slug, label: category.label }}
          slug="invisalign"
          title="Invisalign® Clear Aligners"
          tagline="Discreet teeth straightening — clear plastic, removable, planned in 3D."
          intro={[
            "Your smile is too important to not look, feel, and function at its best. If you are looking to correct crooked teeth or a misaligned bite without noticeable metal braces, we may have the solution for you. Jill Martenson, DDS offers Invisalign — a popular alternative to traditional orthodontics that focuses on preserving your personal aesthetics.",
            "We blend reliable techniques with advanced technology and safe materials to provide you with a one-of-a-kind smile. Our Invisalign dentist and team take the time to craft a personalized treatment plan based on your needs.",
          ]}
          stats={[
            { value: "6–18 mo", label: "Typical treatment" },
            { value: "22 hrs", label: "Daily wear required" },
            { value: "Adults 18+", label: "Recommended for" },
            { value: "iTero", label: "Digital scan, no goop" },
          ]}
          sections={[
            {
              title: "How does Invisalign work?",
              body: [
                "Conventional braces use metal brackets, wires, and tension to guide your teeth into healthier positions. Invisalign can do the same without requiring metal components of any kind. It works by using a series of clear, smooth plastic aligners. Each is designed to fit over your teeth comfortably.",
                "Instead of using tension, your trays target specific teeth in need of straightening and apply gentle pressure to guide your smile into ideal alignment. Dr. Martenson begins treatment with a thorough consultation and exam. We use digital and panoramic X-rays to gain detailed images of your teeth, gums, and jaws. These pictures provide us with the information we need to determine if Invisalign is your best option.",
                "If you qualify, we will take mess-free impressions of your smile with our iTero scanner. With this technology, we can create a digital blueprint which we send to a lab. There, they create a series of aligners made just for you. You wear each set of trays for 22 hours a day before graduating to the next every two weeks.",
              ],
            },
            {
              title: "Who qualifies for Invisalign treatment?",
              body: [
                "Our team can ensure greater success for those willing to comply with treatment guidelines. Since the aligners are removable, it can be challenging for some individuals to wear them for 22 hours daily. We typically recommend Invisalign for those who are serious about wanting to improve their smile. The treatment is often ideal for correcting mild to moderate concerns that can impact dental function, aesthetics, and long-term health.",
              ],
              bullets: [
                "Crooked teeth.",
                "Crowded teeth.",
                "Noticeable dental gaps.",
                "Underbites.",
                "Crossbites.",
                "Overbites.",
                "Open bites.",
              ],
            },
            {
              title: "Invisalign benefits you can expect",
              body: [
                "There is no question that straighter teeth make for a stunning smile. They also usually enable greater long-term oral health. Teeth in their ideal positions are easier to clean, making the removal of harmful dental plaque, tartar, and bacteria easier. Being able to clean your smile more effectively helps reduce your chances of gum disease and tooth decay.",
                "When teeth meet correctly, they are at fewer risks for abnormal wear and other concerns like TMJ disorders. An aligned bite can prevent the need for more complex treatment in the future.",
                "When you choose to straighten your smile with Invisalign, you may continue to enjoy your favorite foods and beverages. You need only remove your aligners before eating and drinking. The treatment also allows you to go about your daily life without interruptions and compromises.",
              ],
            },
            {
              title: "Does getting Invisalign hurt?",
              body: [
                "Preparing for treatment does not require any intrusive preparation. The only discomfort you should experience is when wearing your new set of aligners. Some slight pressure and soreness are expected and should subside quickly as your teeth adjust. Because your trays are made from smooth plastic, irritation or injury is unlikely.",
              ],
            },
            {
              title: "How long does Invisalign take?",
              body: [
                "Your length of treatment depends on the severity of your situation. If your needs are more moderate, it may take longer to align your smile. Typically, Invisalign can take anywhere from six to eighteen months to complete.",
              ],
            },
            {
              title: "How do I care for my Invisalign trays?",
              body: [
                "Cleaning and caring for your aligners is simple and straightforward. Be sure to remove them before eating and clean them using a soft-bristled toothbrush and an approved rinse or toothpaste. Make sure to rinse your trays after removal and before putting them back in your smile. You may do this with room-temperature water.",
              ],
            },
          ]}
          related={category.items}
          featuredImage="/svc/invisalign.jpg"
        />
        <AwardsStrip />
        <AboutCTA />
      </main>
      <SiteFooter />
    </>
  );
}
