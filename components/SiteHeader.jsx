"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Menu, ShoppingBag, Sparkles, X } from "lucide-react";
import { logoSrc } from "../app/data/content";

const navItems = [
  { href: "#collection", label: "Shop" },
  { href: "#benefits", label: "Rituals" },
  { href: "#journal", label: "Journal" },
  { href: "#reviews", label: "Reviews" },
];

export function SiteHeader({ itemCount, onOpenCart }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    function handleResize() {
      if (window.innerWidth > 960) {
        setMobileOpen(false);
      }
    }

    function handleKeyDown(event) {
      if (event.key === "Escape") {
        setMobileOpen(false);
      }
    }

    window.addEventListener("resize", handleResize);
    window.addEventListener("keydown", handleKeyDown);
    return () => {
      window.removeEventListener("resize", handleResize);
      window.removeEventListener("keydown", handleKeyDown);
    };
  }, []);

  function handleNavClick() {
    setMobileOpen(false);
  }

  return (
    <header className="site-header">
      <div className="site-header__frame">
        <div className="site-header__inner">
          <a className="brand" href="#top" aria-label="Body by Beecee home" onClick={handleNavClick}>
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

          <nav className="site-nav site-nav--desktop" aria-label="Primary">
            {navItems.map((item) => (
              <a key={item.href} href={item.href}>
                {item.label}
              </a>
            ))}
          </nav>

          <div className="site-header__actions">
            <a className="site-header__shop-link" href="#collection">
              Shop now
            </a>
            <button
              className="button button--ghost button--header bag-button"
              type="button"
              onClick={onOpenCart}
              aria-label={`Open cart, ${itemCount} item${itemCount === 1 ? "" : "s"}`}
            >
              <span className="bag-button__icon-wrap">
                <ShoppingBag size={16} />
                <span className="bag-button__count">{itemCount}</span>
              </span>
              <span className="bag-button__label">Bag</span>
            </button>

            <button
              className="icon-button site-header__menu-toggle"
              type="button"
              aria-expanded={mobileOpen}
              aria-controls="mobile-nav"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((open) => !open)}
            >
              {mobileOpen ? <X size={18} /> : <Menu size={18} />}
            </button>
          </div>
        </div>

        <div
          className={`site-header__mobile-menu${mobileOpen ? " site-header__mobile-menu--open" : ""}`}
          id="mobile-nav"
        >
          <div className="site-header__mobile-note">
            <Sparkles size={15} />
            <span>Free shipping over NGN 40,000</span>
          </div>

          <nav className="site-nav site-nav--mobile" aria-label="Mobile">
            {navItems.map((item) => (
              <a key={item.href} href={item.href} onClick={handleNavClick}>
                {item.label}
              </a>
            ))}
          </nav>

          <button
            className="button button--primary button--full site-header__mobile-bag"
            type="button"
            onClick={() => {
              setMobileOpen(false);
              onOpenCart();
            }}
          >
            <ShoppingBag size={16} />
            Open bag ({itemCount})
          </button>
        </div>
      </div>
    </header>
  );
}
