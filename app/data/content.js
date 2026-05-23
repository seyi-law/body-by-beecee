import { BadgePercent, Leaf, ShieldCheck, Sparkles, Truck } from "lucide-react";

export const logoSrc = "/images/brand/bodybecee-logo.svg";
export const beeceeUgbohImage = "/images/brand/BeeCee%20Ugboh.jpg";
export const topeMarkOdigieImage = "/images/brand/Tope%20Mark-Odigie.jpg";

export const featuredProduct = {
  id: "orange-c-serum",
  name: "Orange C Serum",
  category: "Serum",
  price: 31050,
  size: "30 ml",
  rating: 4.9,
  image: "/images/products/orange-serum.webp",
  imageAlt: "/images/products/orange-serum-3.webp",
  description:
    "The Orange C Serum is that quiet kind of luxury your skin understands instantly. Lightweight, silky, and deeply nourishing, it melts into your skin like morning sunlight, gentle, but powerful.",
  story: [
    "Infused with a thoughtful blend of Vitamin C, Tranexamic Acid, and Ferulic Acid, it works beneath the surface to gradually restore clarity and radiance. Over time, dark spots soften, uneven tone begins to even out, and your natural glow finds its way back... unforced, effortless.",
    "What makes it a best-seller isn't noise, it's results. It smooths where your skin feels tired, brightens where it looks dull, and hydrates in a way that feels calm and balanced, never heavy. Even sensitive skin finds comfort here.",
    "With consistent use, your skin doesn't just look better... it feels healthier, stronger, and quietly luminous.",
    "It's not just skincare. It's that \"your skin but better\" kind of confidence.",
  ],
  badge: "Best seller",
  badges: ["Best seller", "Staff pick"],
  notes: [
    "Vitamin C, Tranexamic Acid, and Ferulic Acid",
    "Targets dullness and uneven tone",
    "Lightweight finish for morning or evening routines",
  ],
  range: "Orange",
};

export const collection = [
  featuredProduct,
  {
    id: "orange-exfoliating-scrub",
    name: "Orange Scrub",
    category: "Scrub",
    price: 22800,
    size: "150 g",
    variants: [
      { id: "150g", label: "150 g", price: 22800 },
      { id: "250g", label: "250 g", price: 29800 },
    ],
    rating: 4.8,
    image: "/images/products/orange-exfoliating-scrub.webp",
    description:
      "The Orange Exfoliating Scrub is where gentle care meets visible transformation. It’s not harsh, not aggressive… just a beautifully balanced polish that treats your skin with kindness while quietly refining it.",
    story: [
      "Infused with natural orange peel and brightening botanicals, it glides across the skin, lifting away dullness and buildup like a soft reset. As you massage it in, it begins to awaken your skin… unclogging pores, smoothing texture, and revealing that fresh, radiant layer underneath.",
      "What makes it a best-seller is how it does so much, yet feels like so little effort. It brightens without stripping, softens without heaviness, and leaves your skin feeling clean, supple, and renewed. Even areas that need extra attention, from rough patches to uneven tone, begin to look more refined and even.",
      "With consistent use, your skin feels smoother, looks clearer, and carries that natural glow that doesn’t need explaining.",
      "It’s more than an exfoliator. It’s your skin’s quiet reset button in a jar.",
    ],
    badge: "Best seller",
    range: "Orange",
  },
  {
    id: "orange-glow-oil",
    name: "Orange Glow Oil",
    category: "Oil",
    price: 19000,
    size: "100 ml",
    variants: [
      { id: "100ml", label: "100 ml", price: 19000 },
      { id: "200ml", label: "200 ml", price: 28800 },
    ],
    rating: 4.9,
    image: "/images/products/orange-glow-oil.webp",
    description:
      "The Orange Glow Oil is that final, delicate touch your skin didn’t know it was missing. Light, nourishing, and effortlessly radiant.",
    story: [
      "Crafted with vitamin-rich orange peel and soothing botanicals, it melts into the skin like warm silk, delivering deep hydration while quietly restoring balance. It doesn’t sit on the surface, it sinks in, leaving behind a soft, luminous finish that feels as good as it looks.",
      "Over time, your skin begins to tell a different story, brighter, clearer, and more even. Imperfections soften, texture feels smoother, and your natural glow rises gently to the surface. Even areas prone to dryness or uneven tone begin to feel renewed and cared for.",
      "What makes it a best-seller is its quiet versatility. It hydrates, soothes, and enhances all in one step. Whether used for a calming massage, a daily glow boost, or simply to seal in moisture, it adapts beautifully to your skin’s needs without overwhelming it.",
      "And then there’s the experience. That subtle citrus scent that lingers just enough to lift your mood, like a soft exhale at the end of a long day.",
      "It’s more than an oil. It’s glow, comfort, and confidence sealed into every drop.",
    ],
    badge: "Best seller",
    range: "Orange",
  },
  {
    id: "orange-brightening-soap",
    name: "Orange Soap",
    category: "Soap",
    price: 10350,
    size: "Bar",
    rating: 4.8,
    image: "/images/products/orange-brightening-soap.webp",
    description:
      "The Orange Brightening Soap is where simplicity meets quiet transformation. A gentle daily cleanse that does more than just wash, it renews.",
    story: [
      "Rich in skin-loving citrus extracts, it lathers into a soft, creamy foam that lifts away impurities while treating your skin with care. There’s no harshness here, just a smooth, comforting cleanse that leaves your skin feeling fresh, balanced, and beautifully awake.",
      "With time, your complexion begins to glow a little differently; brighter, more even, and softly refined. Dark spots appear less noticeable, texture feels smoother, and your skin takes on that naturally healthy, plump look.",
      "What makes it a best-seller is its everyday ease. It fits effortlessly into your routine, working quietly in the background to cleanse, brighten, and support your skin’s natural renewal without ever overwhelming it.",
      "Face or body, morning or night, it simply works. A gentle essential that turns an ordinary wash into a moment of care.",
      "It’s not just soap. It’s your daily glow, starting from the very first lather.",
    ],
    badge: "Daily Glow",
    range: "Orange",
  },
  {
    id: "orange-radiance-lotion",
    name: "Orange Lotion",
    category: "Lotion",
    price: 20800,
    size: "100 ml",
    variants: [
      { id: "100ml", label: "100 ml", price: 20800 },
      { id: "200ml", label: "200 ml", price: 38800 },
    ],
    rating: 4.9,
    image: "/images/products/orange-radiance-lotion.webp",
    description:
      "The Orange Radiance Lotion is that quiet layer of care your skin drinks in, light, silky, and deeply comforting.",
    story: [
      "Infused with vitamin-rich orange peel, nourishing butters, and calming botanicals, it melts effortlessly into the skin, delivering hydration that feels weightless yet lasting. It doesn’t just sit on the surface, it sinks in, leaving your skin soft, smooth, and naturally luminous.",
      "With every use, your skin begins to reflect a softer kind of glow, one that looks even, healthy, and well cared for. Dullness fades into clarity, texture feels refined, and your skin carries that subtle radiance that feels almost effortless.",
      "What makes it a best-seller is its perfect balance. It hydrates deeply without heaviness, brightens gently without irritation, and supports your skin in a way that feels calm and consistent. Even sensitive skin finds ease here.",
      "And over time, it becomes more than just a lotion, it becomes part of your daily ritual. That moment your skin exhales and settles into softness.",
      "It’s not just moisture. It’s glow, comfort, and quiet confidence bottled.",
    ],
    badge: "Best seller",
    range: "Orange",
  },
  {
    id: "banana-anti-aging-lotion",
    name: "Banana Lotion",
    category: "Lotion",
    price: 18800,
    size: "100 ml",
    variants: [
      { id: "100ml", label: "100 ml", price: 18800 },
      { id: "200ml", label: "200 ml", price: 34800 },
    ],
    rating: 4.8,
    image: "/images/products/banana-anti-aging-lotion.webp",
    description:
      "The Banana Anti-Aging Lotion is a quiet embrace for your skin. Rich, nourishing, and deeply restorative in the most effortless way.",
    story: [
      "Infused with banana fruit oil and a blend of comforting butters, it melts into the skin like warm silk, delivering lasting hydration while helping your skin feel firmer, smoother, and beautifully renewed. It doesn’t overwhelm, it simply supports your skin, gently and consistently.",
      "With time, your skin begins to soften into itself. Texture feels more refined, elasticity improves, and that subtle, youthful bounce starts to return. Fine lines appear less pronounced, and your skin carries a healthy, vibrant glow that feels natural, not forced.",
      "What makes it a best-seller is how seamlessly it fits into everyday care. It hydrates deeply without leaving a heavy or greasy trace, protects against environmental stress, and restores that supple, well-cared-for feel your skin craves.",
      "And beyond the results, there’s the feeling… That soft, comforting touch your skin holds onto long after application.",
      "It’s more than a lotion. Its daily renewal wrapped in warmth and glow.",
    ],
    badge: "Anti-Aging",
    range: "Banana",
  },
  {
    id: "banana-anti-aging-oil",
    name: "Banana Anti-Aging Oil",
    category: "Oil",
    price: 17000,
    size: "100 ml",
    variants: [
      { id: "100ml", label: "100 ml", price: 17000 },
      { id: "200ml", label: "200 ml", price: 22000 },
    ],
    rating: 4.9,
    image: "/images/products/banana-anti-aging-oil.webp",
    description:
      "The Banana Anti-Aging Oil is a gentle whisper of care your skin leans into. Rich, soothing, and quietly transformative.",
    story: [
      "Infused with nutrient-rich banana peel oil, brightening botanicals, and calming extracts, it glides effortlessly over the skin, delivering deep nourishment without feeling heavy. Each drop feels intentional, restoring moisture, softening texture, and bringing your skin back to balance.",
      "With time, your skin begins to respond in the most beautiful way. Fine lines appear softer, uneven areas look more refined, and your natural glow becomes more pronounced. It doesn’t rush the process, it nurtures it, allowing your skin to renew itself gradually and gracefully.",
      "What makes it a best-seller is its quiet versatility. It hydrates, soothes, and supports skin repair all at once, making it perfect for everything from daily care to targeted treatment. Even sensitive or easily irritated skin finds comfort in its calming touch.",
      "And beyond the visible results, there’s a deeper kind of care. Skin that feels healthier, calmer, and truly looked after.",
      "It’s more than an oil. It’s restoration, softness, and timeless glow in every drop.",
    ],
    badge: "Best seller",
    range: "Banana",
  },
  {
    id: "banana-exfoliating-scrub",
    name: "Banana Scrub",
    category: "Scrub",
    price: 21800,
    size: "150 g",
    variants: [
      { id: "150g", label: "150 g", price: 21800 },
      { id: "250g", label: "250 g", price: 27800 },
    ],
    rating: 4.8,
    image: "/images/products/banana-exfoliating-scrub.webp",
    description:
      "The Banana Exfoliating Scrub is a gentle reset your skin will keep coming back to. Comforting, effective, and beautifully balanced.",
    story: [
      "With its soft sugar base and nourishing blend of banana extracts and skin-loving actives, it glides across your skin like a delicate polish, lifting away dullness without ever feeling harsh. It’s that rare kind of exfoliation that refines while still caring, leaving your skin feeling fresh, smooth, and deeply nourished.",
      "As you use it, your skin begins to shift. Texture feels softer, tone appears more even, and that subtle firmness starts to return. It clears away what your skin no longer needs, while helping everything you apply after absorb better and work more effectively.",
      "What makes it a best-seller is how thoughtfully it treats your skin. It exfoliates without stripping, smooths without irritation, and hydrates while it renews. Even sensitive skin can settle into its rhythm without discomfort.",
      "Face or body, it adapts effortlessly, becoming that one product you reach for when your skin needs a fresh start.",
      "It’s more than a scrub. It’s a soft renewal, leaving your skin polished, nourished, and quietly radiant.",
    ],
    badge: "Gentle Reset",
    range: "Banana",
  },
  {
    id: "banana-soap",
    name: "Banana Soap",
    category: "Soap",
    price: 8625,
    size: "Bar",
    rating: 4.7,
    image: "/images/products/banana-soap.webp",
    description:
      "The Banana Soap is a gentle everyday luxury, a simple cleanse that feels anything but ordinary.",
    story: [
      "As it lathers, it wraps your skin in a soft, creamy foam that cleanses without stripping, leaving behind a feeling of comfort, not tightness. It’s the kind of wash your skin relaxes into, calm, nourishing, and quietly effective.",
      "With continued use, your skin begins to feel renewed, smoother to the touch, more even in tone, and softly radiant. Fine lines appear less pronounced, and your complexion takes on that fresh, well-rested look that doesn’t need effort to shine.",
      "What makes it a best-seller is its balance. It cleanses deeply while still preserving moisture, brightens gently without irritation, and is kind enough for daily use across all skin types.",
      "It becomes more than just a step in your routine. It becomes a moment your skin looks forward to.",
      "It’s not just soap. It’s a soft, daily reset, leaving your skin clean, hydrated, and naturally glowing.",
    ],
    badge: "Best seller",
    range: "Banana",
  },
  {
    id: "tigeroatmilk-soap",
    name: "Tiger Oat Milk Soap",
    category: "Soap",
    price: 6500,
    size: "Bar",
    rating: 4.9,
    image: "/images/products/tigeroat-milk-soap.webp",
    description:
      "The TigerOatmilk Soap is a gentle embrace for delicate skin, calm, comforting, and quietly restorative.",
    story: [
      "As it lathers, it creates a soft, milky foam that cleanses without disrupting your skin’s natural balance. It’s the kind of care that feels instinctively right, soothing irritation, easing dryness, and leaving your skin feeling protected, not exposed.",
      "From the very first use, your skin begins to settle, redness softens, sensitivity feels calmer, and moisture is held in just where it’s needed. Over time, your skin looks more even, smoother, and quietly radiant.",
      "What makes it a best-seller is its tenderness. It cares for all skin types, even the most sensitive, gentle enough for babies, yet effective enough for adult skin that needs extra comfort and repair.",
      "And beyond cleansing, it creates a layer of protection, helping your skin stand strong against everyday stress while staying soft and nourished.",
      "It’s more than soap. It’s comfort, care, and calm in every wash.",
    ],
    badge: "Best seller",
    range: "Tigernut",
  },
  {
    id: "tigermom-baby-lotion",
    name: "TigerMom Lotion",
    category: "Lotion",
    price: 35000,
    size: "Bottle",
    rating: 4.9,
    image: "/images/products/tigermom-baby-lotion.webp",
    description:
      "The TigerMom Baby Lotion is a gentle touch of care, soft, soothing, and made for the most delicate skin.",
    story: [
      "Lightweight yet deeply nourishing, it melts effortlessly into the skin, wrapping it in lasting hydration without any heaviness. Enriched with calming botanicals and skin-loving oils, it comforts dryness, eases irritation, and leaves the skin feeling protected and at peace.",
      "From the very first use, skin feels calmer, softer to the touch, better hydrated, and beautifully balanced. Whether for newborns or sensitive adult skin, it adapts with ease, offering comfort where it’s needed most.",
      "What makes it a best-seller is its purity and gentleness. It hydrates without clogging, soothes without irritation, and strengthens the skin’s natural barrier while remaining light and breathable. Safe, clean, and thoughtfully made, it’s the kind of care you can trust every single day.",
      "And beyond the results, there’s a feeling. That quiet reassurance that your skin, or your baby’s skin, is truly being cared for.",
      "It’s more than a lotion. It’s softness, protection, and everyday comfort in every drop.",
    ],
    badge: "Pure & Gentle",
    range: "Tigernut",
  },
  {
    id: "tigernut-salve",
    name: "Tigernut Salve",
    category: "Salve",
    price: 32000,
    size: "Jar",
    rating: 4.9,
    image: "/images/products/tigernut-salve.webp",
    description:
      "The Tigernut Salve is a quiet rescue for troubled skin, rich, soothing, and deeply restorative in the most gentle way.",
    story: [
      "Crafted with nourishing tigernut oil and skin-repairing butters, it melts slowly into the skin, creating a protective layer that locks in moisture and shields against dryness. It’s not just hydration, it’s relief you can feel almost instantly.",
      "For skin that feels irritated, fragile, or overwhelmed, this salve brings calm. Dry patches soften, itchiness eases, and areas that once felt uncomfortable begin to feel cared for again. Over time, your skin looks smoother, stronger, and more at ease.",
      "What makes it a best-seller is its depth of care. It doesn’t just sit on the surface, it works through layers of dryness and sensitivity, restoring comfort without irritation. Gentle enough for babies, yet powerful enough for more stubborn skin concerns, it becomes a trusted staple for the whole family.",
      "And beyond the results, there’s reassurance that your skin has something it can rely on, day after day.",
      "It’s more than a salve. It’s healing, comfort, and protection wrapped into one.",
    ],
    badge: "Best seller",
    range: "Tigernut",
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
  eyebrow: "Banana anti-aging collection",
  title: "Timeless Restoration, Wrapped in Warmth",
  productName: "Banana Anti-Aging Oil",
  description:
    "A gentle whisper of care. Infused with nutrient-rich banana peel oil and brightening botanicals, it melts into the skin like warm silk to restore a soft, luminous bounce.",
  image:
    "/images/products/banana-set-landscape.webp",
  stats: [
    { icon: Leaf, label: "Banana peel oil" },
    { icon: Sparkles, label: "Timeless glow" },
    { icon: ShieldCheck, label: "Deep restoration" },
  ],
};

export const editorialFeatures = [
  {
    title: "Orange Glow Set",
    eyebrow: "Citrus radiance ritual",
    copy:
      "A complete orange routine for bright, smooth, light-catching skin. Layer the serum, oil, lotion, scrub, and soap for a polished glow from first cleanse to final seal.",
    image:
      "/images/products/orange-set.webp",
    price: 138000,
    cta: "Explore Orange range",
    tone: "orange",
  },
  {
    title: "Banana Anti-Aging Set",
    eyebrow: "Timeless body ritual",
    copy:
      "A restorative banana-powered routine made to nourish, soften, and support skin that wants bounce, comfort, and a quietly luminous finish.",
    image:
      "/images/products/banana-set.webp",
    price: 124275,
    cta: "Explore Banana range",
    tone: "banana",
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
