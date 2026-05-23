"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { editorialFeatures } from "../app/data/content";

export function EditorialShowcase() {
  return (
    <section className="editorial-showcase">
      {editorialFeatures.map((feature) => (
        <article
          className={`editorial-feature${feature.reversed ? " editorial-feature--reversed" : ""}`}
          key={feature.title}
        >
          <div className="editorial-feature__image" data-animate="zoom-in">
            <Image
              src={feature.image}
              alt={feature.title}
              fill
              sizes="(max-width: 900px) 90vw, 44vw"
            />
          </div>
          <div className="editorial-feature__copy" data-animate="fade-up">
            <h2>{feature.title}</h2>
            <p>{feature.copy}</p>
            <a className="button button--primary button--small" href="#collection">
              {feature.cta}
              <ArrowRight size={14} />
            </a>
          </div>
          <div className="editorial-feature__image editorial-feature__image--small" data-animate="fade-left">
            <Image
              src={feature.imageAlt}
              alt=""
              fill
              sizes="(max-width: 900px) 80vw, 32vw"
            />
          </div>
        </article>
      ))}
    </section>
  );
}
