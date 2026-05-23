"use client";

import { useState } from "react";
import { ProductCard } from "./ProductCard";

const rangeFilters = [
  { label: "All", desktopLabel: "All Products", value: null },
  { label: "Orange", desktopLabel: "Orange Range", value: "Orange" },
  { label: "Banana", desktopLabel: "Banana Range", value: "Banana" },
  { label: "Tigernut", desktopLabel: "Tigernut Range", value: "Tigernut" },
];

export function ProductList({ collection, onAdd, onProductClick }) {
  const [activeRange, setActiveRange] = useState(null);

  const filtered = activeRange
    ? collection.filter((p) => p.range === activeRange)
    : collection;

  return (
    <div className="collection-layout">
      <div className="product-section__intro" data-animate="fade-up">
        <div>
          <span className="section-kicker">Our Products</span>
          <h2>Your Glow</h2>
        </div>
        <p>
          A tightly edited shelf of high-touch formulas for everyday radiance,
          quiet confidence, and skin that feels cared for.
        </p>
      </div>

      <div className="product-tabs" aria-label="Product range filter">
        {rangeFilters.map((filter) => (
          <button
            className={`product-tab${activeRange === filter.value ? " product-tab--active" : ""}`}
            type="button"
            key={filter.label}
            onClick={() => setActiveRange(filter.value)}
          >
            <span className="product-tab__desktop-label">{filter.desktopLabel}</span>
            <span className="product-tab__mobile-label">{filter.label}</span>
          </button>
        ))}
      </div>

      <div className="product-grid" data-stagger="90" key={activeRange ?? "all"}>
        {filtered.map((product) => (
          <ProductCard
            key={product.id}
            product={product}
            onAdd={onAdd}
            onClick={() => onProductClick(product)}
          />
        ))}
      </div>

      <div className="product-section__footer">
        <a className="button button--primary button--small" href="#collection">
          See collection
        </a>
      </div>
    </div>
  );
}
