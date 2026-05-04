"use client";

import { useEffect, useRef, useState } from "react";

export default function Hero() {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [videoReady, setVideoReady] = useState(false);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    // Make sure the video is paused on mount (some browsers nudge towards autoplay).
    try { video.pause(); } catch {}

    const t = setTimeout(() => {
      const v = videoRef.current;
      if (!v) return;
      v.currentTime = 0;
      v.play()
        .then(() => setVideoReady(true))
        .catch(() => {
          // Browser blocked playback; reveal the video element anyway so the poster keeps showing.
          setVideoReady(true);
        });
    }, 3000);

    return () => clearTimeout(t);
  }, []);

  return (
    <section className="hero">
      <div className="hero-bg">
        <video
          ref={videoRef}
          className={`hero-video${videoReady ? " is-ready" : ""}`}
          loop
          muted
          playsInline
          preload="auto"
          poster="/hero-poster.jpg"
        >
          <source src="/hero.mp4" type="video/mp4" />
        </video>
        <div className="hero-overlay" />
      </div>

      <div className="hero-content">
        <div className="hero-eyebrow">Cosmetic Dentistry · Piedmont, California</div>
        <h1 className="hero-headline">
          Quietly <em>extraordinary</em>
          <br />
          smiles, since 2000.
        </h1>
        <p className="hero-sub">
          Personalized cosmetic and restorative care on Grand Avenue. Dr. Jill
          Martenson and team have served the East Bay for over twenty-five years.
        </p>
        <div className="hero-actions">
          <a href="#booker" className="btn btn-teal btn-lg">
            Book a visit →
          </a>
          <a href="#cosmetic" className="btn btn-ghost-light btn-lg">
            See our work
          </a>
        </div>
        <div className="hero-reassure">
          <span className="stars">★★★★★</span>
          <span><b>4.9</b> · 344 Google reviews</span>
          <span className="dot" />
          <span>Best Esthetic Dentist <b>2024</b></span>
          <span className="dot" />
          <span>Now accepting new patients</span>
        </div>
      </div>

      <a href="#awards" className="hero-scroll" aria-label="Scroll to next section">
        <span>Scroll</span>
        <span className="line" />
      </a>
    </section>
  );
}
