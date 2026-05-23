"use client";

import { useState } from "react";
import Image from "next/image";
import { ShoppingBag, Star } from "lucide-react";
import { formatPrice } from "../app/data/content";

export function ProductCard({ product, onAdd, onClick }) {
  const [selectedVariant, setSelectedVariant] = useState(
    product.variants?.reduce((highest, variant) =>
      variant.price > highest.price ? variant : highest
    ) ?? null
  );

  const activePrice = selectedVariant?.price ?? product.price;
  const activeSize = selectedVariant?.label ?? product.size;

  function handleAdd() {
    const cartProduct = selectedVariant
      ? {
          ...product,
          id: `${product.id}-${selectedVariant.id}`,
          parentId: product.id,
          price: selectedVariant.price,
          size: selectedVariant.label,
          selectedVariant,
        }
      : product;
    onAdd(cartProduct);
  }

  return (
    <article className="product-card" data-animate="zoom-in">
      {/* Product image */}
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
        <div className="product-card__overlay">
          <span className="product-card__hover-btn">View details</span>
        </div>
        {product.badge && (
          <span className="product-card__badge">{product.badge}</span>
        )}
      </button>

      {/* Card body */}
      <div className="product-card__body">

        {/* Row 1: category & optional single size */}
        <div className="product-card__meta-row">
          <span className="product-card__category">
            {product.category}
            {!product.variants && activeSize && ` / ${activeSize}`}
          </span>
        </div>

        {/* Row 2: product name (clickable) + price (right-aligned) */}
        <div className="product-card__header-row">
          <button className="product-card__title-button" type="button" onClick={onClick}>
            <h3 className="product-card__name">{product.name}</h3>
          </button>
          <div className="product-card__price">
            <strong>{formatPrice(activePrice)}</strong>
            {product.compareAt && <s>{formatPrice(product.compareAt)}</s>}
          </div>
        </div>

        {/* Row 3: star rating */}
        <div className="product-card__rating" aria-label={`${product.rating || 4.9} star rating`}>
          {[...Array(5)].map((_, i) => (
            <Star key={i} size={11} fill="currentColor" />
          ))}
          <span>{product.rating || 4.9}</span>
        </div>

        {/* Row 4: size selector */}
        {product.variants && (
          <div className="product-card__size-selector" aria-label={`${product.name} sizes`}>
            {product.variants.map((variant) => (
              <button
                className={`product-card__size-btn${selectedVariant?.id === variant.id ? " product-card__size-btn--active" : ""}`}
                type="button"
                key={variant.id}
                onClick={() => setSelectedVariant(variant)}
                aria-pressed={selectedVariant?.id === variant.id}
              >
                <span className="product-card__size-label">{variant.label}</span>
                <span className="product-card__size-price">{formatPrice(variant.price)}</span>
              </button>
            ))}
          </div>
        )}

        {/* Row 5: Add to bag — full width */}
        <button
          className="product-card__add-btn"
          type="button"
          onClick={handleAdd}
        >
          <span className="product-card__add-icon" aria-hidden="true">
            <ShoppingBag size={13} />
          </span>
          Add to bag
        </button>

      </div>
    </article>
  );
}
