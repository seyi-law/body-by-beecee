import { BadgePercent, Leaf, ShieldCheck, Sparkles, Truck } from "lucide-react";

export const logoSrc = "/images/brand/bodybecee-logo.svg";
export const beeceeUgbohImage = "/images/brand/BeeCee%20Ugboh.jpg";
export const topeMarkOdigieImage = "/images/brand/Tope%20Mark-Odigie.jpg";

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
    "A silky vitamin-rich serum made to brighten uneven tone, soften the look of dark marks, and leave skin with a calm, healthy glow.",
  badge: "Best seller",
  badges: ["Best seller", "Staff pick"],
  notes: [
    "Vitamin C, Tranexamic Acid, and Ferulic Acid",
    "Targets dullness and uneven tone",
    "Lightweight finish for morning or evening routines",
  ],
};

export const collection = [
  featuredProduct,
  {
    id: "velvet-butter",
    name: "Velvet Cloud Body Butter",
    category: "Body care",
    price: 15000,
    compareAt: 18000,
    size: "200 ml",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=1200&q=80",
    description:
      "A whipped body cream that cushions dry skin in long-lasting moisture without feeling heavy.",
    badge: "Hydrating",
  },
  {
    id: "rose-mist",
    name: "Soft Rose Mist",
    category: "Face mist",
    price: 10000,
    compareAt: 13000,
    size: "120 ml",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1620916566398-39f1143ab7be?auto=format&fit=crop&w=1200&q=80",
    description:
      "A dewy floral mist for refreshing skin between routine steps or reviving makeup during the day.",
    badge: "Fresh",
  },
  {
    id: "glow-scrub",
    name: "Glow Polish Scrub",
    category: "Exfoliator",
    price: 8000,
    compareAt: 10000,
    size: "250 g",
    rating: 4.8,
    image:
      "https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?auto=format&fit=crop&w=1200&q=80",
    description:
      "A gentle polish that sweeps away dullness and leaves skin smooth, soft, and ready for oil or butter.",
    badge: "Smooth",
  },
  {
    id: "clarity-cleanser",
    name: "Milk Silk Cleanser",
    category: "Cleanser",
    price: 12000,
    compareAt: 15000,
    size: "150 ml",
    rating: 4.9,
    image:
      "https://images.unsplash.com/photo-1556228720-195a672e8a03?auto=format&fit=crop&w=1200&q=80",
    description:
      "A creamy cleanser that lifts away buildup while keeping the skin barrier comfortable and plush.",
    badge: "Gentle",
  },
  {
    id: "lip-nectar",
    name: "Velvet Lip Nectar",
    category: "Lip care",
    price: 6000,
    compareAt: 8000,
    size: "12 ml",
    rating: 4.7,
    image:
      "https://images.unsplash.com/photo-1580870069867-74c57ee1bb07?auto=format&fit=crop&w=1200&q=80",
    description:
      "A glossy treatment that keeps lips soft, hydrated, and lightly luminous throughout the day.",
    badge: "New",
  },
];

export const heroCards = [
  {
    name: "BeeCee Ugboh",
    role: "Verified buyer",
    image: beeceeUgbohImage,
  },
  {
    name: "Tope Mark-Odigie",
    role: "Verified buyer",
    image: topeMarkOdigieImage,
  },
];

export const featuredCollection = {
  eyebrow: "Skin-care collection",
  title: "The Ultimate Skincare Collection",
  productName: "Lumi Dew Hydrating Glow Serum",
  description:
    "A soft, glassy routine built for radiance: cleanse, hydrate, brighten, and seal in a finish that looks alive in every light.",
  image:
    "https://images.unsplash.com/photo-1608248597279-f99d160bfcbc?auto=format&fit=crop&w=1400&q=80",
  stats: [
    { icon: Leaf, label: "Skin-kind" },
    { icon: Sparkles, label: "Glow-first" },
    { icon: ShieldCheck, label: "Barrier care" },
  ],
};

export const editorialFeatures = [
  {
    title: "Natura Drop - Hydrating Face Mist",
    copy:
      "A fine, milky mist that gives thirsty skin a soft-focus reset. Keep it on your vanity, in your tote, and anywhere your glow needs a little weather support.",
    image:
      "https://images.unsplash.com/photo-1598440947619-2c35fc9aa908?auto=format&fit=crop&w=1300&q=80",
    imageAlt:
      "https://images.unsplash.com/photo-1608248543803-ba4f8c70ae0b?auto=format&fit=crop&w=1300&q=80",
    cta: "Explore mist",
  },
  {
    title: "Shine Shot - Glow Boosting Serum",
    copy:
      "A radiant serum step for days when your skin needs bounce, brightness, and a little main-character lighting.",
    image:
      "https://images.unsplash.com/photo-1617897903246-719242758050?auto=format&fit=crop&w=1300&q=80",
    imageAlt:
      "https://images.unsplash.com/photo-1612817288484-6f916006741a?auto=format&fit=crop&w=1300&q=80",
    cta: "View routine",
    reversed: true,
  },
];

export const blogPosts = [
  {
    tag: "Rituals",
    title: "Why our serum ritual protects your glow barrier",
    image:
      "https://images.unsplash.com/photo-1600428853876-fb5a850b444f?auto=format&fit=crop&w=800&q=80",
  },
  {
    tag: "Practice",
    title: "Why beauty meets confidence in the mirror",
    image:
      "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?auto=format&fit=crop&w=800&q=80",
  },
  {
    tag: "Skin talk",
    title: "Why our beauty masks are good to go off script",
    image:
      "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=800&q=80",
  },
  {
    tag: "Advice",
    title: "Five ways the magic of beauty matters",
    image:
      "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=800&q=80",
  },
];

export const galleryImages = [
  "https://images.unsplash.com/photo-1601412436009-d964bd02edbc?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1596815064285-45ed8a9c0463?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1596462502278-27bfdc403348?auto=format&fit=crop&w=700&q=80",
  "https://images.unsplash.com/photo-1567721913486-6585f069b332?auto=format&fit=crop&w=700&q=80",
];

export const visualTestimonials = [
  {
    quote:
      "My skin feels brighter, softer, and more even. The Orange C Serum has become my daily glow step.",
    name: "BeeCee Ugboh",
    role: "Verified buyer",
    image: beeceeUgbohImage,
  },
  {
    quote:
      "It feels luxurious without being complicated. The glow is immediate, and the softness lasts.",
    name: "Tope Mark-Odigie",
    role: "Verified buyer",
    image: topeMarkOdigieImage,
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
    description: "Orders above NGN 40,000",
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

export const benefits = [
  {
    icon: ShieldCheck,
    title: "Skin-first formulas",
    text: "Every product is designed to be kind, effective, and easy to love every single day.",
  },
  {
    icon: Truck,
    title: "Fast delivery",
    text: "Orders are packed quickly so your glow arrives before you lose the moment.",
  },
  {
    icon: BadgePercent,
    title: "Rewards for loyalty",
    text: "Unlock promo codes and bundle savings as you build the routine your skin loves.",
  },
];

export const testimonials = visualTestimonials.map(({ quote, name, role }) => ({
  quote,
  name,
  role,
}));

export const formatter = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  minimumFractionDigits: 0,
  maximumFractionDigits: 0,
});

export function formatPrice(value) {
  return formatter.format(value);
}
