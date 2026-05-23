"use client";

import Image from "next/image";
import { ArrowRight, Leaf, Play, Sparkles, Star } from "lucide-react";
import { featuredProduct, formatPrice, heroCards } from "../app/data/content";

export function Hero({ onAddToCart, onViewDetails = () => {} }) {
  return (
    <section className="hero editorial-hero" id="top">
      <div className="hero__portrait-card" data-animate="fade-right">
        <div className="hero__portrait">
          <Image
            src="https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?auto=format&fit=crop&w=1000&q=80"
            alt="Woman with glowing skin"
            fill
            priority
            sizes="(max-width: 900px) 90vw, 28vw"
          />
        </div>
        <button
          className="hero__play"
          type="button"
          onClick={() => onViewDetails(featuredProduct)}
          aria-label="View featured product details"
        >
          <Play size={16} fill="currentColor" />
        </button>
        <div className="hero__natural">
          <strong>100%</strong>
          <span>Natural</span>
        </div>
      </div>

      <div className="hero__copy" data-animate="fade-up">
        <span className="eyebrow hero__eyebrow">
          <Sparkles size={14} />
          Body by Beecee
        </span>
        <h1 className="hero__headline" data-text-split>
          Beauty Meets Luxury
        </h1>
        <p className="hero__lede">
          Soft, radiant skin care with an editorial glow: brightening serums,
          plush body rituals, and daily essentials made to feel beautiful from
          the first touch.
        </p>

        <div className="hero__actions">
          <button
            className="button button--primary"
            type="button"
            onClick={() => onAddToCart(featuredProduct)}
          >
            Shop now
            <ArrowRight size={16} />
          </button>
          <button
            className="button button--soft hero__leaf-button"
            type="button"
            onClick={() => onViewDetails(featuredProduct)}
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

      <div className="hero__product-swatch" data-animate="fade-left">
        <Image
          src={featuredProduct.imageAlt}
          alt={featuredProduct.name}
          fill
          priority
          sizes="(max-width: 900px) 70vw, 18vw"
        />
      </div>
    </section>
  );
}
