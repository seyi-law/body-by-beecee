"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import { Star, X, ShoppingBag } from "lucide-react";
import { formatPrice } from "../app/data/content";

export function ProductModal({ product, open, onClose, onAddToCart }) {
  const [selectedVariant, setSelectedVariant] = useState(null);

  // Lock background scroll when modal is open
  useEffect(() => {
    if (open) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);

  useEffect(() => {
    setSelectedVariant(
      product?.variants?.reduce((highest, variant) =>
        variant.price > highest.price ? variant : highest
      ) ?? null
    );
  }, [product]);

  if (!open || !product) return null;

  const selectedProduct = selectedVariant
    ? {
        ...product,
        id: `${product.id}-${selectedVariant.id}`,
        parentId: product.id,
        price: selectedVariant.price,
        size: selectedVariant.label,
        selectedVariant,
      }
    : product;

  return (
    <>
      {/* Backdrop */}
      <div className="modal-backdrop" onClick={onClose} aria-hidden="true" />

      {/* Modal Dialog */}
      <div className="product-modal glass-panel" role="dialog" aria-modal="true">
        <button
          className="icon-button product-modal__close"
          type="button"
          onClick={onClose}
          aria-label="Close modal"
        >
          <X size={20} />
        </button>

        <div className="product-modal__content">
          {/* Left: Product Image */}
          <div className="product-modal__media">
            <Image
              src={product.image}
              alt={product.name}
              fill
              priority
              sizes="(max-width: 768px) 100vw, 40vw"
            />
            {product.badge && <span className="product-modal__badge">{product.badge}</span>}
          </div>

          {/* Right: Product Details */}
          <div className="product-modal__details">
            <span className="eyebrow eyebrow--small">{product.category}</span>
            <h2 className="product-modal__name">{product.name}</h2>

            <div className="product-modal__meta">
              <div className="product-modal__rating">
                <Star size={14} fill="currentColor" className="icon-accent" />
                <span>{product.rating || "4.9"} rating</span>
              </div>
              <span className="product-modal__size">{selectedProduct.size}</span>
            </div>

            <div className="product-modal__price">
              <strong className="product-modal__price-current">
                {formatPrice(selectedProduct.price)}
              </strong>
              {product.compareAt && (
                <span className="product-modal__price-compare">
                  {formatPrice(product.compareAt)}
                </span>
              )}
            </div>

            {product.variants && (
              <div className="product-modal__variants" aria-label={`${product.name} sizes`}>
                <span>Choose size</span>
                <div className="product-modal__variant-options">
                  {product.variants.map((variant) => (
                    <button
                      className={`product-modal__variant ${selectedVariant?.id === variant.id ? "product-modal__variant--active" : ""}`}
                      type="button"
                      key={variant.id}
                      onClick={() => setSelectedVariant(variant)}
                    >
                      <strong>{variant.label}</strong>
                      <small>{formatPrice(variant.price)}</small>
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div className="product-modal__divider" />

            <div className="product-modal__description">
              <h4>About the product</h4>
              <p>{product.description}</p>
              {product.story?.map((paragraph) => (
                <p key={paragraph}>{paragraph}</p>
              ))}
            </div>

            <div className="product-modal__actions">
              <button
                className="button button--primary button--full"
                type="button"
                onClick={() => {
                  onAddToCart(selectedProduct);
                  onClose();
                }}
              >
                <ShoppingBag size={18} />
                Add to bag - {formatPrice(selectedProduct.price)}
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
