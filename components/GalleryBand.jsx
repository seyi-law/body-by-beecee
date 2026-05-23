"use client";

import Image from "next/image";
import { galleryImages } from "../app/data/content";

export function GalleryBand() {
  return (
    <section className="gallery-band">
      <div className="gallery-band__copy" data-animate="fade-up">
        <h2>Where Beauty Meets Confidence</h2>
        <p>
          A high-glow ritual for skin that feels seen, cared for, and ready for
          its close-up.
        </p>
      </div>

      <div className="gallery-band__track" data-stagger="70">
        {galleryImages.map((src, index) => (
          <div className="gallery-band__image" key={src} data-animate="zoom-in">
            <Image
              src={src}
              alt={`Beauty editorial ${index + 1}`}
              fill
              sizes="(max-width: 900px) 42vw, 18vw"
            />
          </div>
        ))}
      </div>
    </section>
  );
}
