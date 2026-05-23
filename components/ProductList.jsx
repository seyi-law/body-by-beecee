"use client";

import { ProductCard } from "./ProductCard";

const filterLabels = ["Serums", "Mists", "Creams"];

export function ProductList({ collection, onAdd, onProductClick }) {
  return (
    <div className="collection-layout">
      <div className="product-section__intro" data-animate="fade-up">
        <div>
          <span className="section-kicker">Our Product</span>
          <h2>Your Glow</h2>
        </div>
        <p>
          A tightly edited shelf of high-touch formulas for everyday radiance,
          quiet confidence, and skin that feels cared for.
        </p>
      </div>

      <div className="product-tabs" aria-label="Product categories">
        {filterLabels.map((label, index) => (
          <button
            className={`product-tab${index === 0 ? " product-tab--active" : ""}`}
            type="button"
            key={label}
          >
            {label}
          </button>
        ))}
      </div>

      <div className="product-grid" data-stagger="90">
        {collection.map((product) => (
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
