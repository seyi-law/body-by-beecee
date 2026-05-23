"use client";

import Image from "next/image";
import { Star } from "lucide-react";
import { visualTestimonials } from "../app/data/content";

export function Reviews() {
  return (
    <section className="review-section" id="reviews">
      <div className="review-section__header" data-animate="fade-up">
        <h2>What Our Clients Are Saying</h2>
      </div>

      <div className="review-editorial" data-stagger="110">
        {visualTestimonials.map((testimonial) => (
          <article className="review-card" key={testimonial.name} data-animate="fade-up">
            <div className="review-card__image">
              <Image
                src={testimonial.image}
                alt={testimonial.name}
                fill
                sizes="(max-width: 900px) 90vw, 34vw"
              />
            </div>
            <div className="review-card__content">
              <div className="review-card__stars" aria-hidden="true">
                {[...Array(5)].map((_, starIndex) => (
                  <Star key={starIndex} size={14} fill="currentColor" />
                ))}
              </div>
              <p>{testimonial.quote}</p>
              <div className="review-card__author">
                <strong>{testimonial.name}</strong>
                <span>{testimonial.role}</span>
              </div>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
