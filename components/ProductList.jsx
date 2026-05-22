"use client";

import { Sparkles } from "lucide-react";
import { ProductCard } from "./ProductCard";

export function ProductList({ collection, onAdd, onProductClick }) {
  return (
    <div>
      <div className="section-heading reveal">
        <span className="eyebrow">
          <Sparkles size={14} />
          The collection
        </span>
        <h2>Everything your skin deserves.</h2>
        <p>
          From deep moisture to a fresh floral lift — each product is crafted to
          layer beautifully with the rest of the range.
        </p>
        <div className="section-heading__rule" aria-hidden="true" />
      </div>

      <div className="product-grid">
        {collection.map((product, index) => (
          <div
            className={`reveal ${index % 2 === 1 ? "reveal--delay" : ""}`}
            key={product.id}
          >
            <ProductCard
              product={product}
              onAdd={onAdd}
              onClick={() => onProductClick(product)}
            />
          </div>
        ))}
      </div>
    </div>
  );
}
