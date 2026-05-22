"use client";

import { useState } from "react";
import { promoCodes, collection } from "./data/content";
import { SiteHeader } from "../components/SiteHeader";
import { Hero } from "../components/Hero";
import { ProductList } from "../components/ProductList";
import { CartDrawer } from "../components/CartDrawer";
import { Benefits } from "../components/Benefits";
import { Reviews } from "../components/Reviews";
import { SiteFooter } from "../components/SiteFooter";
import { Toast } from "../components/Toast";
import { ProductModal } from "../components/ProductModal";

export default function Home() {
  const [cart, setCart] = useState([]);
  const [cartOpen, setCartOpen] = useState(false);
  const [promoInput, setPromoInput] = useState("GLOW10");
  const [appliedPromo, setAppliedPromo] = useState("");
  const [promoMessage, setPromoMessage] = useState("Use GLOW10 for 10% off any order.");
  const [toast, setToast] = useState(null);
  const [activeProduct, setActiveProduct] = useState(null);

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);
  const itemCount = cart.reduce((sum, item) => sum + item.quantity, 0);

  function resolvePromo(code, subtotal, itemCount) {
    const promo = promoCodes.find((entry) => entry.code === code);
    if (!promo) {
      return { valid: false, message: "That promo code is not active right now.", discount: 0, promo: null };
    }
    if (promo.minSubtotal && subtotal < promo.minSubtotal) {
      return { valid: false, message: `${promo.code} unlocks at $${promo.minSubtotal}.`, discount: 0, promo };
    }
    if (promo.minItems && itemCount < promo.minItems) {
      return { valid: false, message: `${promo.code} unlocks with ${promo.minItems} items in your bag.`, discount: 0, promo };
    }
    return { valid: true, message: `${promo.code} applied. ${promo.label} unlocked.`, discount: promo.discount, promo };
  }

  const resolvedPromo = resolvePromo(appliedPromo, subtotal, itemCount);
  const discount = resolvedPromo.valid ? subtotal * resolvedPromo.discount : 0;
  const shipping = subtotal > 0 && subtotal - discount >= 40000 ? 0 : subtotal > 0 ? 2500 : 0;
  const total = Math.max(subtotal - discount + shipping, 0);
  const displayPromoMessage = appliedPromo && !resolvedPromo.valid ? resolvedPromo.message : promoMessage;

  function addToCart(product) {
    setCart((current) => {
      const existing = current.find((item) => item.id === product.id);
      if (existing) {
        return current.map((item) => (item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item));
      }
      return [...current, { ...product, quantity: 1 }];
    });
    
    // Show toast notification instead of automatically opening the cart drawer
    setToast(null);
    setTimeout(() => {
      setToast({
        name: product.name,
        image: product.image,
        visible: true,
      });
    }, 50);
  }

  function updateQuantity(id, delta) {
    setCart((current) =>
      current.map((item) => (item.id === id ? { ...item, quantity: item.quantity + delta } : item)).filter((item) => item.quantity > 0)
    );
  }

  function removeFromCart(id) {
    setCart((current) => current.filter((item) => item.id !== id));
  }

  function applyPromo(nextCode = promoInput) {
    const code = nextCode.trim().toUpperCase();
    if (!code) {
      setAppliedPromo("");
      setPromoMessage("Enter a promo code to unlock savings.");
      return;
    }
    const promo = resolvePromo(code, subtotal, itemCount);
    if (!promo.valid) {
      setAppliedPromo("");
      setPromoMessage(promo.message);
      return;
    }
    setAppliedPromo(code);
    setPromoMessage(promo.message);
  }

  return (
    <main className="page-shell">
      <SiteHeader itemCount={itemCount} onOpenCart={() => setCartOpen(true)} />

      <Hero onAddToCart={addToCart} />

      <section className="product-section" id="collection">
        <ProductList
          collection={collection}
          onAdd={addToCart}
          onProductClick={(product) => setActiveProduct(product)}
        />
      </section>

      <Benefits />
      <Reviews />
      <SiteFooter />

      <CartDrawer
        open={cartOpen}
        onClose={() => setCartOpen(false)}
        cart={cart}
        itemCount={itemCount}
        subtotal={subtotal}
        discount={discount}
        shipping={shipping}
        total={total}
        promoInput={promoInput}
        setPromoInput={setPromoInput}
        appliedPromo={appliedPromo}
        promoMessage={promoMessage}
        displayPromoMessage={displayPromoMessage}
        onApplyPromo={applyPromo}
        onIncrease={(id) => updateQuantity(id, 1)}
        onDecrease={(id) => updateQuantity(id, -1)}
        onRemove={removeFromCart}
      />
      <Toast
        toast={toast}
        onClose={() => setToast((prev) => (prev ? { ...prev, visible: false } : null))}
        onAction={() => setCartOpen(true)}
      />
      <ProductModal
        product={activeProduct}
        open={!!activeProduct}
        onClose={() => setActiveProduct(null)}
        onAddToCart={addToCart}
      />
    </main>
  );
}
