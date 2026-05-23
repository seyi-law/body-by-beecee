"use client";

import Image from "next/image";
import { ArrowRight, Leaf, Sparkles, Star } from "lucide-react";
import { featuredProduct, formatPrice, heroCards } from "../app/data/content";

export function Hero({ onAddToCart, onViewDetails = () => {} }) {
  return (
    <section className="hero editorial-hero" id="top">
      <div className="hero__copy" data-animate="fade-up">
        <span className="eyebrow hero__eyebrow">
          <Sparkles size={14} />
          Beauty meets luxury
        </span>
        <h1 className="hero__headline" data-text-split>
          Orange C Serum
        </h1>
        <p className="hero__lede">
          {featuredProduct.description}
        </p>

        <button
          className="hero__read-more"
          type="button"
          onClick={() => onViewDetails(featuredProduct)}
        >
          <span>Read the glow story</span>
        </button>

        <div className="hero__product-stage hero__product-stage--mobile" data-animate="fade-up">
          <button
            className="hero__product-card"
            type="button"
            onClick={() => onViewDetails(featuredProduct)}
            aria-label={`View details for ${featuredProduct.name}`}
          >
            <Image
              src={featuredProduct.image}
              alt={featuredProduct.name}
              fill
              priority
              sizes="92vw"
            />
          </button>
          <div className="hero__product-badge">
            <strong>{featuredProduct.rating.toFixed(1)}</strong>
            <span>Customer rating</span>
          </div>
        </div>

        <div className="hero__actions">
          <a
            className="button button--primary"
            href="#collection"
          >
            Shop now
            <ArrowRight size={16} />
          </a>
          <button
            className="button button--soft hero__leaf-button"
            type="button"
            onClick={() => onAddToCart(featuredProduct)}
            aria-label={`Add ${featuredProduct.name} to cart — ${formatPrice(featuredProduct.price)}`}
          >
            <Leaf size={16} />
            {formatPrice(featuredProduct.price)}
          </button>
        </div>

        <div className="hero__mini-cards" data-stagger="100">
          {heroCards.map((card) => (
            <article className="hero-mini" key={card.name} data-animate="zoom-in">
              <div className="hero-mini__image">
                <Image src={card.image} alt={card.name} fill sizes="120px" />
              </div>
              <div>
                <strong>{card.name}</strong>
                <span>{card.role}</span>
                <div className="hero-mini__stars" aria-hidden="true">
                  {[...Array(5)].map((_, index) => (
                    <Star key={index} size={10} fill="currentColor" />
                  ))}
                </div>
              </div>
            </article>
          ))}
        </div>
      </div>

      <div className="hero__product-stage hero__product-stage--desktop" data-animate="fade-left">
        <button
          className="hero__product-card"
          type="button"
          onClick={() => onViewDetails(featuredProduct)}
          aria-label={`View details for ${featuredProduct.name}`}
        >
          <Image
            src={featuredProduct.image}
            alt={featuredProduct.name}
            fill
            priority
            sizes="(max-width: 900px) 92vw, 46vw"
          />
        </button>
        <div className="hero__product-badge">
          <strong>{featuredProduct.rating.toFixed(1)}</strong>
          <span>Customer rating</span>
        </div>
      </div>
    </section>
  );
}
