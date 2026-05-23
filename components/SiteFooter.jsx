"use client";

import Image from "next/image";
import { ArrowRight, Instagram, Mail } from "lucide-react";

export function SiteFooter() {
  return (
    <>
      <section className="cta-banner" data-animate="fade-up">
        <div className="cta-banner__image">
          <Image
            src="/images/products/orange-set-landscape.webp"
            alt="Glowing skin close up"
            fill
            sizes="(max-width: 900px) 90vw, 36vw"
          />
        </div>
        <div className="cta-banner__copy">
          <span className="section-kicker section-kicker--light">
            Feel Alive In Every Beauty Step
          </span>
          <h2>Your glow has a ritual now.</h2>
          <a className="button button--light button--small" href="#collection">
            Go shop
            <ArrowRight size={14} />
          </a>
        </div>
      </section>

      <footer className="site-footer" data-animate="fade-up">
        <div>
          <strong>Body by Beecee</strong>
          <p>Premium beauty crafted for soft skin, steady confidence, and daily glow.</p>
        </div>
        <div className="site-footer__links">
          <a href="#collection">Shop</a>
          <a href="#reviews">Reviews</a>
        </div>
        <div className="site-footer__social" aria-label="Social links">
          <a href="mailto:hello@bodybybeecee.com" aria-label="Email Body by Beecee">
            <Mail size={16} />
          </a>
          <a href="#top" aria-label="Instagram">
            <Instagram size={16} />
          </a>
        </div>
      </footer>
    </>
  );
}
