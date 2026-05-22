"use client";

import { ArrowRight } from "lucide-react";

export function SiteFooter() {
  return (
    <>
      <section className="cta-banner reveal glass-panel--heavy">
        <div>
          <span className="eyebrow eyebrow--inverse">
            <ArrowRight size={14} />
            Ready to glow?
          </span>
          <h2>Your glow starts here.</h2>
          <p>
            Shop the full Body by Beecee collection — clean formulas, fast delivery,
            and skin that feels as good as it looks.
          </p>
        </div>
        <a className="button button--light" href="#collection">
          Shop the collection
        </a>
      </section>

      <footer className="site-footer">
        <div>
          <strong>Body by Beecee</strong>
          <p>Premium beauty crafted for women who refuse to slow down.</p>
        </div>
        <div className="site-footer__links">
          <a href="#collection">Shop</a>
          <a href="#benefits">Why us</a>
          <a href="#reviews">Reviews</a>
        </div>
      </footer>
    </>
  );
}
