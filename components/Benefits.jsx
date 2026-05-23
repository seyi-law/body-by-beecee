"use client";

import { ShieldCheck } from "lucide-react";
import { benefits } from "../app/data/content";

export function Benefits() {
  return (
    <section className="benefit-section" id="benefits">
      <div className="section-heading" data-animate="fade-up">
        <span className="eyebrow">
          <ShieldCheck size={14} />
          Why Body by Beecee
        </span>
        <h2 data-text-split data-delay="100">
          Luxury skin care that <span className="text-accent">actually works.</span>
        </h2>
        <p>
          Every product is built around one promise — skin that looks and feels
          better with every single use.
        </p>
        <div className="section-heading__rule" aria-hidden="true" />
      </div>

      <div className="benefit-grid" data-stagger="110">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <article
              className="benefit-card glass-panel"
              key={benefit.title}
              data-animate="zoom-in"
              data-tilt
            >
              <span className="benefit-card__icon icon-accent">
                <Icon size={20} />
              </span>
              <h3>{benefit.title}</h3>
              <p>{benefit.text}</p>
            </article>
          );
        })}
      </div>
    </section>
  );
}
