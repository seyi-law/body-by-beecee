"use client";

import { Star } from "lucide-react";
import { testimonials } from "../app/data/content";

export function Reviews() {
  return (
    <section className="review-section" id="reviews">
      <div className="section-heading reveal">
        <span className="eyebrow">
          <Star size={14} />
          Customer love
        </span>
        <h2>Real women. Real results.</h2>
        <p>
          Thousands of women trust Body by Beecee to be part of their daily
          ritual. Here&apos;s what they have to say.
        </p>
        <div className="section-heading__rule" aria-hidden="true" />
      </div>

      <div className="review-grid">
        {testimonials.map((testimonial, index) => (
          <article
            className={`review-card glass-panel reveal ${index === 1 ? "reveal--delay" : ""}`}
            key={testimonial.name}
          >
            <div className="review-card__stars icon-accent" aria-hidden="true">
              {[...Array(5)].map((_, starIndex) => (
                <Star key={starIndex} size={15} fill="currentColor" />
              ))}
            </div>
            <p>{testimonial.quote}</p>
            <div className="review-card__author">
              <strong>{testimonial.name}</strong>
              <span>{testimonial.role}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
