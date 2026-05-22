"use client";

import Image from "next/image";
import { Plus } from "lucide-react";
import { formatPrice } from "../app/data/content";

export function ProductCard({ product, onAdd, onClick }) {
  return (
    <article className="product-card">
      <div
        className="product-card__media"
        onClick={onClick}
        style={{ cursor: "pointer" }}
        role="button"
        tabIndex={0}
        onKeyDown={(e) => {
          if (e.key === "Enter" || e.key === " ") {
            onClick();
          }
        }}
        aria-label={`View details for ${product.name}`}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority={false}
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
        />
        {product.badge && <span className="product-card__badge">{product.badge}</span>}
      </div>

      <div className="product-card__body">
        <div className="product-card__header">
          <div
            className="product-card__title-area"
            onClick={onClick}
            style={{ cursor: "pointer" }}
            role="button"
            tabIndex={0}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                onClick();
              }
            }}
          >
            <span className="product-card__category">{product.category}</span>
            <h3 className="product-card__name">{product.name}</h3>
          </div>
          <div className="product-card__price">
            <strong className="product-card__current-price">{formatPrice(product.price)}</strong>
            {product.compareAt && (
              <span className="product-card__compare-price">{formatPrice(product.compareAt)}</span>
            )}
          </div>
        </div>

        <div className="product-card__footer">
          <span className="product-card__size">{product.size}</span>
          <button
            className="button button--soft button--small product-card__add-btn"
            type="button"
            onClick={() => onAdd(product)}
          >
            <Plus size={14} />
            Add to bag
          </button>
        </div>
      </div>
    </article>
  );
}
