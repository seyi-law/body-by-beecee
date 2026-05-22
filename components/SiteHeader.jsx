"use client";

import Image from "next/image";
import { ShoppingBag } from "lucide-react";
import { logoSrc } from "../app/data/content";

export function SiteHeader({ itemCount, onOpenCart }) {
  return (
    <header className="site-header">
      <div className="site-header__inner">
        <a className="brand" href="#top" aria-label="Body by Beecee home">
          <div className="brand__logo-container">
            <Image
              src={logoSrc}
              alt="Body by Beecee logo"
              fill
              className="brand__logo-image"
              priority
            />
          </div>
        </a>

        <nav className="site-nav" aria-label="Primary">
          <a href="#collection">Shop</a>
          <a href="#benefits">Why us</a>
          <a href="#reviews">Reviews</a>
        </nav>

        <button
          className="button button--ghost button--header bag-button"
          type="button"
          onClick={onOpenCart}
          aria-label={`Open cart, ${itemCount} item${itemCount === 1 ? "" : "s"}`}
        >
          <ShoppingBag size={16} />
          Bag ({itemCount})
        </button>
      </div>
    </header>
  );
}
