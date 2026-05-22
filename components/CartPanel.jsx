"use client";

import { ShoppingBag, Sparkles, BadgePercent } from "lucide-react";
import { formatPrice, promoCodes } from "../app/data/content";
import { CartItem } from "./CartItem";

export function CartPanel({
  cart,
  itemCount,
  subtotal,
  discount,
  shipping,
  total,
  promoInput,
  setPromoInput,
  appliedPromo,
  promoMessage,
  displayPromoMessage,
  onApplyPromo,
  onIncrease,
  onDecrease,
  onRemove,
}) {
  return (
    <aside className="cart-panel reveal reveal--delay glass-panel--dark" id="cart">
      <div className="cart-panel__header">
        <div>
          <span className="eyebrow eyebrow--inverse">
            <ShoppingBag size={14} />
            Live bag
          </span>
          <h3>Cart and promo codes</h3>
        </div>
        <span className="cart-panel__count">
          {itemCount} item{itemCount === 1 ? "" : "s"}
        </span>
      </div>

      {cart.length > 0 ? (
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
      ) : (
        <div className="cart-empty">
          <Sparkles size={18} />
          <p>Your bag is empty.</p>
          <span>Add the featured product or any collection item to start the checkout flow.</span>
        </div>
      )}

      <div className="promo-panel glass-item">
        <div className="promo-panel__header">
          <BadgePercent size={18} />
          <div>
            <strong>Promo codes</strong>
            <span>Tap one or type your own.</span>
          </div>
        </div>

        <div className="promo-chips">
          {promoCodes.map((promo) => (
            <button
              className="promo-chip"
              type="button"
              key={promo.code}
              onClick={() => {
                setPromoInput(promo.code);
                onApplyPromo(promo.code);
              }}
            >
              <strong>{promo.code}</strong>
              <span>{promo.label}</span>
            </button>
          ))}
        </div>

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
            placeholder="Enter promo code"
            aria-label="Promo code"
          />
          <button className="button button--primary button--small" type="submit">
            Apply
          </button>
        </form>

        <p className="promo-message">{displayPromoMessage}</p>
      </div>

      <div className="summary-box">
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
        <div className="summary-total">
          <span>Total</span>
          <strong>{formatPrice(total)}</strong>
        </div>

        <button className="button button--light button--full" type="button">
          Checkout
        </button>

        <p className="summary-note">
          This is a front-end storefront flow. Connect your payment provider next.
        </p>
      </div>
    </aside>
  );
}
