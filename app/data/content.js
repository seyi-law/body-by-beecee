import { BadgePercent, ShieldCheck, Truck } from "lucide-react";

export const logoSrc = "/images/brand/body-by-beecee-logo.png";

export const featuredProduct = {
  id: "orange-c-serum",
  name: "Orange C Serum",
  category: "Star product",
  price: 18000,
  compareAt: 24000,
  size: "30 ml",
  rating: 4.9,
  image: "/images/products/orange-serum.webp",
  imageAlt: "/images/products/orange-serum-3.webp",
  description:
    "Lightweight, silky, and deeply nourishing — it melts into your skin like morning sunlight. Gentle, but powerful. Infused with Vitamin C, Tranexamic Acid, and Ferulic Acid to gradually restore clarity, radiance, and your natural glow.",
  badges: ["Best seller", "Staff pick"],
  notes: [
    "Brightens dark spots & uneven tone",
    "Vitamin C + Tranexamic + Ferulic Acid",
    "Calm hydration — even for sensitive skin",
  ],
};

export const collection = [
  {
    id: "velvet-butter",
    name: "Velvet Cloud Body Butter",
    category: "Body care",
    price: 15000,
    compareAt: 18000,
    size: "200 ml",
    image:
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=1200&q=80",
    description:
      "A rich whipped formula that softens dry skin and seals in moisture for 24 hours. Sink in and glow.",
    badge: "Hydrating",
  },
  {
    id: "rose-mist",
    name: "Soft Rose Mist",
    category: "Fragrance",
    price: 10000,
    compareAt: 13000,
    size: "120 ml",
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=80",
    description:
      "A fresh floral mist that lifts your mood and leaves a delicate, clean trail — beautiful for layering.",
    badge: "Fresh",
  },
  {
    id: "glow-scrub",
    name: "Glow Polish Scrub",
    category: "Exfoliator",
    price: 8000,
    compareAt: 10000,
    size: "250 g",
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    description:
      "A gentle sugar-salt polish that smooths away dull skin, leaving you prepped and perfectly primed for oils.",
    badge: "Smooth",
  },
  {
    id: "lip-nectar",
    name: "Velvet Lip Nectar",
    category: "Lip care",
    price: 6000,
    compareAt: 8000,
    size: "12 ml",
    image:
      "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?auto=format&fit=crop&w=1200&q=80",
    description:
      "A glossy plumping treatment with a buildable tint that keeps lips soft, hydrated, and kissably smooth all day.",
    badge: "New",
  },
];

export const promoCodes = [
  {
    code: "GLOW10",
    label: "10% off",
    description: "Any order today",
    discount: 0.1,
  },
  {
    code: "BUNDLE15",
    label: "15% off",
    description: "Orders above ₦40,000",
    discount: 0.15,
    minSubtotal: 40000,
  },
  {
    code: "ROSE20",
    label: "20% off",
    description: "3+ products in cart",
    discount: 0.2,
    minItems: 3,
  },
];

export const trustMetrics = [
  { value: "24h", label: "Dispatch" },
  { value: "4.9/5", label: "Customer rating" },
  { value: "40k+", label: "Free shipping threshold" },
];

export const benefits = [
  {
    icon: ShieldCheck,
    title: "Skin-first formulas",
    text: "Every product is free from harsh chemicals and built to be kind, effective, and easy to love every single day.",
  },
  {
    icon: Truck,
    title: "Fast delivery",
    text: "Orders are packed and dispatched within 24 hours so your glow arrives before you lose the moment.",
  },
  {
    icon: BadgePercent,
    title: "Rewards for loyalty",
    text: "Stack promo codes, unlock bundle savings, and get more as you shop — because your skin deserves it.",
  },
];

export const testimonials = [
  {
    quote:
      "The Silk Glow Oil changed my whole morning routine. My skin has never looked so radiant — I get asked about it every week.",
    name: "Nia Morgan",
    role: "Verified buyer",
  },
  {
    quote:
      "I bought the full bundle and I have not looked back. The body butter alone is worth every cent. Absolutely obsessed.",
    name: "Ari James",
    role: "Verified buyer",
  },
  {
    quote:
      "I have tried so many body oils and this is the only one that doesn't leave a residue. Lightweight, glowy, perfect.",
    name: "Tara Ellis",
    role: "Verified buyer",
  },
];

export const formatter = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export function formatPrice(value) {
  return formatter.format(value);
}
