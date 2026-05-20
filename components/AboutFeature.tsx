import Image from "next/image";
import type { ReactNode } from "react";

type AboutFeatureProps = {
  /** Eyebrow label, e.g. "— Our dentists —" */
  eyebrow: string;
  heading: ReactNode;
  body: string[];
  image: string;
  imageAlt: string;
  imageSide?: "left" | "right";
};

export default function AboutFeature({
  eyebrow,
  heading,
  body,
  image,
  imageAlt,
  imageSide = "right",
}: AboutFeatureProps) {
  return (
    <section
      className={`about-feature${
        imageSide === "left" ? " about-feature--img-left" : ""
      }`}
    >
      <div className="about-feature-inner">
        <div className="about-feature-text">
          <div className="num">{eyebrow}</div>
          <h2>{heading}</h2>
          {body.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>
        <div className="about-feature-image">
          <Image
            src={image}
            alt={imageAlt}
            width={2000}
            height={3000}
            sizes="(max-width: 900px) 100vw, 520px"
          />
        </div>
      </div>
    </section>
  );
}
