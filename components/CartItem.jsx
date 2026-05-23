"use client";

import Image from "next/image";
import { formatPrice } from "../app/data/content";
import { X, Minus, Plus } from "lucide-react";

export function CartItem({ item, onIncrease, onDecrease, onRemove }) {
  return (
    <li className="cart-item glass-item">
      <div className="cart-item__thumb">
        <Image src={item.image} alt={item.name} fill sizes="72px" />
      </div>

      <div className="cart-item__body">
        <div className="cart-item__row">
          <div>
            <p className="cart-item__title">{item.name}</p>
            <p className="cart-item__meta">{formatPrice(item.price)} each</p>
          </div>
          <button
            className="icon-button cart-item__remove"
            type="button"
            aria-label={`Remove ${item.name}`}
            onClick={() => onRemove(item.id)}
          >
            <X size={16} />
          </button>
        </div>

        <div className="cart-item__row">
          <div className="quantity-control" aria-label={`${item.name} quantity controls`}>
            <button
              className="icon-button icon-button--compact"
              type="button"
              aria-label={`Decrease ${item.name}`}
              onClick={() => onDecrease(item.id)}
            >
              <Minus size={14} />
            </button>
            <span>{item.quantity}</span>
            <button
              className="icon-button icon-button--compact"
              type="button"
              aria-label={`Increase ${item.name}`}
              onClick={() => onIncrease(item.id)}
            >
              <Plus size={14} />
            </button>
          </div>
          <strong className="cart-item__line-total">{formatPrice(item.price * item.quantity)}</strong>
        </div>
      </div>
    </li>
  );
}
