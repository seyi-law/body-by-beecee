"use client";

import { ShieldCheck } from "lucide-react";
import { benefits } from "../app/data/content";

export function Benefits() {
  return (
    <section className="benefit-section" id="benefits">
      <div className="section-heading reveal">
        <span className="eyebrow">
          <ShieldCheck size={14} />
          Why Body by Beecee
        </span>
        <h2>Luxury skin care that actually works.</h2>
        <p>
          Every product is built around one promise — skin that looks and feels
          better with every single use.
        </p>
        <div className="section-heading__rule" aria-hidden="true" />
      </div>

      <div className="benefit-grid">
        {benefits.map((benefit, index) => {
          const Icon = benefit.icon;
          return (
            <article
              className={`benefit-card glass-panel reveal ${index === 1 ? "reveal--delay" : ""}`}
              key={benefit.title}
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
