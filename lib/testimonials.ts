/**
 * All patient testimonials in one place — used by:
 *   - components/Reviews.tsx (homepage carousel)
 *   - app/patient-reviews/page.tsx (index)
 *   - app/patient-reviews/testimonial/page.tsx (full set)
 *
 * 15 verbatim direct testimonials harvested from
 * https://piedmontdentalbydesign.com/patient-reviews/testimonial/
 * plus 4 selected Google reviews.
 */

export type Testimonial = {
  name: string;
  initials: string;
  quote: string;
  /** "google" reviews link out to Google; "direct" are submitted via the practice site. */
  source: "google" | "direct";
};

function initialsFor(name: string): string {
  return name
    .split(/\s+/)
    .map((p) => p[0]?.toUpperCase() ?? "")
    .slice(0, 2)
    .join("");
}

const directRaw: Omit<Testimonial, "initials" | "source">[] = [
  {
    name: "Roni F.",
    quote:
      "Have visited a few times. Everyone has been great and very friendly. They were able to figure out an issue that I'd been having that previous dentists had not. I feel well looked after. Nice office and waiting room, too.",
  },
  {
    name: "Mia",
    quote:
      "I always have a good experience at Piedmont Dental by Design. Everyone in the office is professional and attentive, providing good quality care in a clean, inviting environment.",
  },
  {
    name: "John H.",
    quote:
      "Dr. Martenson is the best dentist I've ever had. Needle? What needle? Her gentle touch ensures that your experience is as pain-free as possible. Highly recommended.",
  },
  {
    name: "Chris L.",
    quote:
      "My first exam and cleaning at PDxD was wonderful. Dr. Martenson is thorough and explains everything with care and patience. Manny is an excellent hygienist. I highly recommend this practice.",
  },
  {
    name: "Chuck B.",
    quote:
      "I have been going to Piedmont Dental by Design for almost 20 years. My experience has always been nothing but the best — friendly staff, talented staff.",
  },
  {
    name: "Irene L.",
    quote:
      "This is the best dental office with the best dentist. Expert work done. Staff is polite and attentive. Dr. Martenson's work is painless. The prices reflect the quality.",
  },
  {
    name: "Laura L.",
    quote:
      "Dr. Martenson and staff are wonderful and make a visit to the dentist easy and comfortable.",
  },
  {
    name: "Devony C.",
    quote:
      "I have been a patient with Dr. Martenson for over 20 years. She is highly skilled and keeps up with the latest equipment and techniques. The entire experience is spa-like. I love it.",
  },
  {
    name: "Paul K.",
    quote:
      "Got a deep cleaning done. They were super nice and professional. Really good work — highly recommend.",
  },
  {
    name: "Betsie M.",
    quote:
      "Dr. Martenson and her staff are top notch — professional, friendly, and they care about their patients. Recently had a filling replacement and Dr. Martenson called me in the evening to follow up to make sure I was doing OK. Appreciate the personal touch.",
  },
  {
    name: "Janette F.",
    quote:
      "Love everything about this practice and I'm not easy to please. It far exceeds my expectations and continues to impress.",
  },
  {
    name: "Don P.",
    quote:
      "Replaced a fractured crown within two hours. No need for a second visit. There could be no better dentistry — and I've been going for quite a while.",
  },
  {
    name: "Charlie B.",
    quote:
      "Dr. Martenson and her whole team are amazing. Thank you for making me feel comfortable and informed and for taking such good care of me.",
  },
  {
    name: "Frank M.",
    quote:
      "As always — a great appointment at Piedmont Dental. Manny was terrific as my hygienist.",
  },
  {
    name: "Erik K.",
    quote:
      "My daughter had her first significant dentist appointment with Piedmont Dental, one that required some less-than-pleasant procedures. They did a great job calming her and making her feel safe. Very pleased.",
  },
];

const googleRaw: Omit<Testimonial, "initials" | "source">[] = [
  {
    name: "Thiago Reis",
    quote: "Dr. Martenson definitely is the best dentist I've ever been to.",
  },
  {
    name: "Claudia Sieber",
    quote: "Great dental hygienist. Gentle, knowledgeable, and professional.",
  },
  {
    name: "Carol Warren",
    quote: "Professional, thoughtful and always with a smile.",
  },
  {
    name: "Ruth Shapiro",
    quote: "The best dentist ever.",
  },
];

export const directTestimonials: Testimonial[] = directRaw.map((t) => ({
  ...t,
  initials: initialsFor(t.name),
  source: "direct",
}));

export const googleTestimonials: Testimonial[] = googleRaw.map((t) => ({
  ...t,
  initials: initialsFor(t.name),
  source: "google",
}));

export const allTestimonials: Testimonial[] = [
  ...directTestimonials,
  ...googleTestimonials,
];

export const REVIEW_TOTALS = {
  google: 344,
  rating: "4.9",
};

export const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Piedmont+Dental+By+Design+reviews";
