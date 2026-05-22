"use client";

import Image from "next/image";
import { Sparkles, Star } from "lucide-react";
import { featuredProduct, formatPrice } from "../app/data/content";

const ingredients = ["Vitamin C", "Tranexamic Acid", "Ferulic Acid"];

export function Hero({ onAddToCart, onViewDetails }) {
  return (
    <section className="hero" id="top">
      {/* ── Left: Copy ─────────────────────────────────── */}
      <div className="hero__copy reveal">
        <span className="eyebrow">
          <Sparkles size={14} />
          Star product
        </span>

        <h1>Quiet luxury your skin understands instantly.</h1>

        <p className="hero__lede">
          The Orange C Serum is that quiet kind of luxury your skin understands
          instantly. Lightweight, silky, and deeply nourishing, it melts into
          your skin like morning sunlight to gradually restore clarity and radiance.
        </p>

        {/* Clean, horizontal list of ingredients */}
        <div className="hero__ingredients-list">
          {ingredients.map((ing, idx) => (
            <span key={ing} className="hero__ingredient-item">
              {ing}
              {idx < ingredients.length - 1 && <span className="separator">•</span>}
            </span>
          ))}
        </div>

        {/* Main CTA with price & note */}
        <div className="hero__cta-wrapper">
          <div className="hero__actions">
            <button
              className="button button--primary"
              type="button"
              onClick={() => onAddToCart(featuredProduct)}
            >
              Add to bag — {formatPrice(featuredProduct.price)}
            </button>
            <button
              className="button button--ghost"
              type="button"
              onClick={() => onViewDetails(featuredProduct)}
            >
              Learn more
            </button>
          </div>
          <p className="hero__promo-note">
            Use code <strong>GLOW10</strong> for 10% off. Free shipping on orders over ₦40,000.
          </p>
        </div>
      </div>

      {/* ── Right: Visual card ──────────────────────────── */}
      <div
        className="hero__visual reveal reveal--delay"
        onClick={() => onViewDetails(featuredProduct)}
        style={{ cursor: "pointer" }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            onViewDetails(featuredProduct);
          }
        }}
        aria-label="View flagship product details"
      >
        <div className="hero-card glass-panel--heavy">
          {/* Full-bleed product image */}
          <div className="hero-card__image">
            <Image
              src={featuredProduct.image}
              alt={featuredProduct.name}
              fill
              priority
              sizes="(max-width: 1024px) 100vw, 45vw"
            />
            {/* Elegant badges floating on the image */}
            <span className="hero-card__badge">{featuredProduct.badges[0]}</span>

            <div className="hero-card__rating-pill">
              <Star size={13} fill="currentColor" />
              <span>{featuredProduct.rating.toFixed(1)} rating</span>
            </div>

            <div className="hero-card__size-pill">
              <span>{featuredProduct.size}</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
