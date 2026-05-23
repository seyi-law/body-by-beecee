"use client";

import Image from "next/image";
import { ArrowRight } from "lucide-react";
import { featuredCollection } from "../app/data/content";

export function FeaturedCollection() {
  return (
    <section className="featured-collection" id="benefits">
      <div className="featured-collection__inner">
        <div className="featured-collection__copy" data-animate="fade-right">
          <span className="section-kicker section-kicker--light">
            {featuredCollection.eyebrow}
          </span>
          <h2>{featuredCollection.title}</h2>
          <p>{featuredCollection.description}</p>
        </div>

        <div className="featured-collection__media" data-animate="zoom-in">
          <Image
            src={featuredCollection.image}
            alt={featuredCollection.productName}
            fill
            sizes="(max-width: 900px) 90vw, 44vw"
          />
        </div>

        <div className="featured-collection__details" data-animate="fade-left">
          <h3>{featuredCollection.productName}</h3>
          <p>
            Layer it after cleansing and before cream for a soft, hydrated,
            light-catching finish.
          </p>
          <div className="featured-collection__stats">
            {featuredCollection.stats.map((stat) => {
              const Icon = stat.icon;
              return (
                <span key={stat.label}>
                  <Icon size={16} />
                  {stat.label}
                </span>
              );
            })}
          </div>
          <a className="button button--light button--small" href="#collection">
            Shop routine
            <ArrowRight size={14} />
          </a>
        </div>
      </div>
    </section>
  );
}
