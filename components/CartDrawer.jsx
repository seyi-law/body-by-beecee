"use client";

import { useState } from "react";
import { ShoppingBag, Sparkles, BadgePercent, X, ArrowRight, Truck, ChevronDown } from "lucide-react";
import { formatPrice } from "../app/data/content";
import { CartItem } from "./CartItem";

export function CartDrawer({
  open,
  onClose,
  cart,
  itemCount,
  subtotal,
  discount,
  shipping,
  total,
  promoInput,
  setPromoInput,
  appliedPromo,
  displayPromoMessage,
  onApplyPromo,
  onIncrease,
  onDecrease,
  onRemove,
}) {
  const [promoOpen, setPromoOpen] = useState(false);
  const freeShippingThreshold = 40000;
  const freeShippingRemaining = Math.max(freeShippingThreshold - (subtotal - discount), 0);
  const shippingProgress = Math.min(((subtotal - discount) / freeShippingThreshold) * 100, 100);
  const showPromoControls = promoOpen || Boolean(appliedPromo || displayPromoMessage);

  return (
    <>
      {/* Backdrop */}
      <div
        className={`cart-backdrop ${open ? "cart-backdrop--open" : ""}`}
        aria-hidden="true"
        onClick={onClose}
      />

      {/* Drawer */}
      <aside
        className={`cart-drawer glass-panel--dark ${open ? "cart-drawer--open" : ""}`}
        id="cart"
        aria-label="Shopping cart"
        aria-hidden={!open}
      >
        {/* Header */}
        <div className="cart-drawer__header">
          <div>
            <span className="eyebrow eyebrow--inverse">
              <ShoppingBag size={14} />
              Your bag
            </span>
            <h3>Cart &amp; checkout</h3>
            {cart.length > 0 && (
              <p className="cart-drawer__subtitle">
                Review your glow ritual before checkout.
              </p>
            )}
          </div>
          <div className="cart-drawer__header-right">
            <span className="cart-panel__count">
              {itemCount} item{itemCount === 1 ? "" : "s"}
            </span>
            <button
              className="icon-button cart-drawer__close"
              type="button"
              onClick={onClose}
              aria-label="Close cart"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Scrollable body */}
        <div className="cart-drawer__body">
          {cart.length > 0 ? (
            <>
              <div className="shipping-progress" aria-label="Free shipping progress">
                <div className="shipping-progress__row">
                  <span>
                    <Truck size={16} />
                    {shipping === 0 ? "Free shipping unlocked" : `${formatPrice(freeShippingRemaining)} away from free shipping`}
                  </span>
                  <strong>{Math.round(shippingProgress)}%</strong>
                </div>
                <div className="shipping-progress__track">
                  <span style={{ width: `${shippingProgress}%` }} />
                </div>
              </div>

              <ul className="cart-list">
                {cart.map((item) => (
                  <CartItem
                    key={item.id}
                    item={item}
                    onIncrease={onIncrease}
                    onDecrease={onDecrease}
                    onRemove={onRemove}
                  />
                ))}
              </ul>

              <a className="cart-continue" href="#collection" onClick={onClose}>
                Continue shopping
                <ArrowRight size={14} />
              </a>
            </>
          ) : (
            <div className="cart-empty">
              <Sparkles size={18} />
              <p>Your bag is empty.</p>
              <span>Add the featured product or any item from the collection to get started.</span>
              <a className="button button--primary button--small" href="#collection" onClick={onClose}>
                Shop collection
                <ArrowRight size={14} />
              </a>
            </div>
          )}
        </div>

        {/* Fixed Footer */}
        {cart.length > 0 && (
          <div className="cart-drawer__footer">
            <div className="summary-box">
              <div className="summary-box__header">
                <span>Order summary</span>
                <strong>{itemCount} item{itemCount === 1 ? "" : "s"}</strong>
              </div>
              <div className="summary-row">
                <span>Subtotal</span>
                <strong>{formatPrice(subtotal)}</strong>
              </div>
              <div className="summary-row">
                <span>Discount</span>
                <strong>-{formatPrice(discount)}</strong>
              </div>
              <div className="summary-row">
                <span>Shipping</span>
                <strong>{shipping === 0 ? "Free" : formatPrice(shipping)}</strong>
              </div>

              <div className={`promo-panel ${showPromoControls ? "promo-panel--open" : ""}`}>
                <button
                  className="promo-panel__toggle"
                  type="button"
                  onClick={() => setPromoOpen((current) => !current)}
                  aria-expanded={showPromoControls}
                >
                  <span>
                    <BadgePercent size={15} />
                    Have a promo code?
                  </span>
                  <span className="promo-panel__toggle-status">
                    {appliedPromo || "Add code"}
                    <ChevronDown size={15} />
                  </span>
                </button>

                {showPromoControls && (
                  <div className="promo-panel__content">
                    <form
                      className="promo-form"
                      onSubmit={(event) => {
                        event.preventDefault();
                        onApplyPromo();
                      }}
                    >
                      <input
                        type="text"
                        value={promoInput}
                        onChange={(event) => setPromoInput(event.target.value)}
                        placeholder="Enter code"
                        aria-label="Promo code"
                      />
                      <button className="button button--primary button--small" type="submit">
                        Apply
                      </button>
                    </form>

                    {displayPromoMessage && <p className="promo-message">{displayPromoMessage}</p>}
                  </div>
                )}
              </div>

              <div className="summary-total">
                <span>Total</span>
                <strong>{formatPrice(total)}</strong>
              </div>

              <button className="button button--light button--full" type="button">
                Checkout
              </button>

              <p className="summary-note">
                Secure checkout powered by your chosen payment provider.
              </p>
            </div>
          </div>
        )}
      </aside>
    </>
  );
}
