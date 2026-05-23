"use client";

import Image from "next/image";
import { Plus, Star } from "lucide-react";
import { formatPrice } from "../app/data/content";

export function ProductCard({ product, onAdd, onClick }) {
  return (
    <article className="product-card" data-animate="zoom-in">
      <button
        className="product-card__media"
        type="button"
        onClick={onClick}
        aria-label={`View details for ${product.name}`}
      >
        <Image
          src={product.image}
          alt={product.name}
          fill
          priority={false}
          sizes="(max-width: 768px) 90vw, (max-width: 1200px) 30vw, 360px"
        />
        {product.badge && (
          <span className="product-card__badge">{product.badge}</span>
        )}
      </button>

      <div className="product-card__body">
        <button className="product-card__title-button" type="button" onClick={onClick}>
          <span className="product-card__category">{product.category}</span>
          <h3 className="product-card__name">{product.name}</h3>
        </button>

        <div className="product-card__rating" aria-label={`${product.rating || 4.9} star rating`}>
          {[...Array(5)].map((_, index) => (
            <Star key={index} size={12} fill="currentColor" />
          ))}
          <span>{product.rating || 4.9}</span>
        </div>

        <div className="product-card__footer">
          <div className="product-card__price">
            <strong>{formatPrice(product.price)}</strong>
            {product.compareAt && <span>{formatPrice(product.compareAt)}</span>}
          </div>
          <button
            className="button button--soft button--small product-card__add-btn"
            type="button"
            onClick={() => onAdd(product)}
          >
            <Plus size={14} />
            Add
          </button>
        </div>
      </div>
    </article>
  );
}
