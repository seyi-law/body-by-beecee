"use client";

import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { editorialFeatures, formatPrice } from "../app/data/content";

export function EditorialShowcase({ onAddToCart }) {
  return (
    <section className="editorial-showcase" id="sets">
      <div className="editorial-showcase__header" data-animate="fade-up">
        <span className="section-kicker">Complete routines</span>
        <h2>Glow Sets, Curated for the Full Ritual</h2>
        <p>
          Two full-body routines built around the brand's signature orange and
          banana collections.
        </p>
      </div>

      <div className="bundle-set-grid">
        {editorialFeatures.map((feature) => (
          <article
            className={`bundle-set-card bundle-set-card--${feature.tone}`}
            key={feature.title}
            data-animate="fade-up"
          >
            <div className="bundle-set-card__image">
              <Image
                src={feature.image}
                alt={feature.title}
                fill
                sizes="(max-width: 900px) 92vw, 42vw"
              />
            </div>
            <div className="bundle-set-card__copy">
              <span>{feature.eyebrow}</span>
              <h3>{feature.title}</h3>
              <p>{feature.copy}</p>
              <div className="bundle-set-card__footer">
                <strong>{formatPrice(feature.price)}</strong>
                <button
                  className="bundle-set-card__link"
                  type="button"
                  onClick={() =>
                    onAddToCart({
                      id: `set-${feature.tone}`,
                      name: feature.title,
                      price: feature.price,
                      image: feature.image,
                      category: "Complete Set",
                      rating: 5,
                    })
                  }
                >
                  <ShoppingBag size={15} />
                  Add to cart
                </button>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
