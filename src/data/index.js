// ============================================================
// THE SETUP VAULT — Curated Mock Data
// All brand/product names & affiliate URLs are curated.
// ============================================================

export const SITE = {
  name: "Savor.it",
  tagline: "India's Premium Workspace Curation & Discovery",
  description:
    "A premium, editorial discovery ecosystem for aesthetic workspaces, creator gear, and design setups.",
  stats: {
    users: "120K+",
    setups: "850+",
    products: "2,400+",
    brands: "80+",
    premiumBrands: "35+",
  },
};

/* ────────────────── CATEGORIES ────────────────── */

export const categories = [
  { id: "monitors", name: "Monitors", icon: "🖥️", slug: "monitors", count: 82 },
  { id: "keyboards", name: "Keyboards", icon: "⌨️", slug: "keyboards", count: 124 },
  { id: "mouse", name: "Mouse", icon: "🖱️", slug: "mouse", count: 67 },
  { id: "chairs", name: "Chairs", icon: "🪑", slug: "chairs", count: 43 },
  { id: "lighting", name: "Lighting", icon: "💡", slug: "lighting", count: 91 },
  { id: "deskmats", name: "Desk Mats", icon: "🖼️", slug: "desk-mats", count: 56 },
  { id: "accessories", name: "Accessories", icon: "🎧", slug: "accessories", count: 110 },
  { id: "audio", name: "Audio", icon: "🔊", slug: "audio", count: 38 },
  { id: "storage", name: "Storage", icon: "🗄️", slug: "storage", count: 29 },
  { id: "decor", name: "Decor", icon: "🌿", slug: "decor", count: 47 },
];

/* ────────────────── PRODUCTS ────────────────── */

export const products = [
  {
    id: 1,
    name: 'LG UltraGear 27" Nano IPS 4K Monitor',
    slug: "lg-ultragear-27-4k",
    category: "monitors",
    price: 26999,
    mrp: 34999,
    discount: 23,
    rating: 4.8,
    reviews: 2340,
    sold: "2.9K",
    image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?auto=format&fit=crop&w=600&q=80",
    description:
      "27-inch Nano IPS display with 144Hz refresh rate, 1ms response time, HDR10 and HDMI 2.1 for ultra-smooth gaming and creative work.",
    specs: [
      "27\" 4K UHD (3840x2160)",
      "144Hz Refresh Rate",
      "Nano IPS Panel",
      "1ms Response Time",
      "HDR10 Support",
      "HDMI 2.1 + DisplayPort 1.4",
    ],
    affiliateLinks: {
      amazon: "#",
      flipkart: "#",
      brand: "#",
    },
    tags: ["Gaming", "Productivity", "4K"],
  },
  {
    id: 2,
    name: "Keychron K2 (V2) Wireless Mechanical Keyboard",
    slug: "keychron-k2-v2",
    category: "keyboards",
    price: 8499,
    mrp: 10999,
    discount: 23,
    rating: 4.9,
    reviews: 1246,
    sold: "2.1K",
    image: "https://images.unsplash.com/photo-1618384887929-16ec33fab9ef?auto=format&fit=crop&w=600&q=80",
    description:
      "75% layout wireless mechanical keyboard with Gateron switches, RGB backlight, and Mac/Windows compatibility.",
    specs: [
      "Wireless / Bluetooth",
      "Hot-swappable",
      "RGB Backlight",
      "Gateron Brown Switches",
      "Mac & Windows",
      "4000mAh Battery",
    ],
    affiliateLinks: {
      amazon: "#",
      flipkart: "#",
      brand: "#",
    },
    tags: ["Mechanical", "Wireless", "RGB"],
  },
  {
    id: 3,
    name: "Logitech MX Master 3S Ergonomic Mouse",
    slug: "logitech-mx-master-3s",
    category: "mouse",
    price: 9995,
    mrp: 11999,
    discount: 17,
    rating: 4.9,
    reviews: 3890,
    sold: "5.2K",
    image: "https://images.unsplash.com/photo-1615663245857-ac93bb7c39e7?auto=format&fit=crop&w=600&q=80",
    description:
      "Advanced ergonomic wireless mouse with MagSpeed scroll, 8K DPI sensor, USB-C charging, and multi-device connectivity.",
    specs: [
      "8000 DPI Sensor",
      "MagSpeed Scroll Wheel",
      "USB-C Rechargeable",
      "Bluetooth + USB Receiver",
      "Ergonomic Design",
      "Multi-device (3)",
    ],
    affiliateLinks: {
      amazon: "#",
      flipkart: "#",
      brand: "#",
    },
    tags: ["Ergonomic", "Wireless", "Productivity"],
  },
  {
    id: 4,
    name: "Premium Merino Wool Felt Desk Mat",
    slug: "souled-store-desk-mat",
    category: "deskmats",
    price: 1249,
    mrp: 1599,
    discount: 22,
    rating: 4.6,
    reviews: 567,
    sold: "1.8K",
    image: "https://images.unsplash.com/photo-1632292224971-0d45778bd364?auto=format&fit=crop&w=600&q=80",
    description:
      "Extra large premium desk mat made of heavy merino wool felt with anti-slip cork base and hand-stitched edges.",
    specs: [
      '900mm x 400mm x 3mm',
      "Anti-slip Natural Cork Base",
      "100% Merino Wool Felt",
      "Hand-Stitched Edges",
      "Water Resistant",
      "Acoustic Dampening",
    ],
    affiliateLinks: {
      amazon: "#",
      flipkart: "#",
      brand: "#",
    },
    tags: ["Minimal", "Aesthetic", "Felt"],
  },
  {
    id: 5,
    name: "Quente Asymmetric LED Monitor Light Bar",
    slug: "quente-monitor-light-bar",
    category: "lighting",
    price: 2999,
    mrp: 4499,
    discount: 33,
    rating: 4.7,
    reviews: 892,
    sold: "1.4K",
    image: "https://images.unsplash.com/photo-1542751371-adc38448a05e?auto=format&fit=crop&w=600&q=80",
    description:
      "Asymmetric LED monitor light bar with adjustable color temperature, zero screen glare, and touch-sensitive dimming controls.",
    specs: [
      "Asymmetric Light Design",
      "3000K–6500K Color Temp",
      "No Screen Glare",
      "USB-C Powered",
      "Touch Controls",
      "Auto-dimming Sensor",
    ],
    affiliateLinks: {
      amazon: "#",
      flipkart: "#",
      brand: "#",
    },
    tags: ["Lighting", "Productivity"],
  },
  {
    id: 6,
    name: "Green Soul Vienna Ergonomic Executive Chair",
    slug: "green-soul-vienna",
    category: "chairs",
    price: 12999,
    mrp: 18999,
    discount: 32,
    rating: 4.8,
    reviews: 1123,
    sold: "980",
    image: "https://images.unsplash.com/photo-1505797149-43b0069ec26b?auto=format&fit=crop&w=600&q=80",
    description:
      "Premium ergonomic office chair with breathable mesh back, adjustable lumbar support, 3D armrests, and tilt mechanism.",
    specs: [
      "Breathable Mesh Back",
      "Adjustable Lumbar Support",
      "3D Armrests",
      "135° Recline",
      "Class 4 Gas Lift",
      "Weight Capacity: 120kg",
    ],
    affiliateLinks: {
      amazon: "#",
      flipkart: "#",
      brand: "#",
    },
    tags: ["Ergonomic", "Premium"],
  },
  {
    id: 7,
    name: "Sony WH-1000XM5 ANC Headphones",
    slug: "sony-wh-1000xm5",
    category: "audio",
    price: 24990,
    mrp: 29990,
    discount: 17,
    rating: 4.9,
    reviews: 4560,
    sold: "6.1K",
    image: "https://images.unsplash.com/photo-1546435770-a3e426bf472b?auto=format&fit=crop&w=600&q=80",
    description:
      "Industry-leading noise cancellation headphones with 30-hour battery, multipoint connection, and Hi-Res Audio support.",
    specs: [
      "Industry-leading ANC",
      "30-hour Battery Life",
      "Multipoint Connection",
      "Hi-Res Audio (LDAC)",
      "Speak-to-Chat",
      "Adaptive Sound Control",
    ],
    affiliateLinks: {
      amazon: "#",
      flipkart: "#",
      brand: "#",
    },
    tags: ["Audio", "Premium", "Wireless"],
  },
  {
    id: 8,
    name: "Elgato Stream Deck MK.2 Studio Controller",
    slug: "elgato-stream-deck-mk2",
    category: "accessories",
    price: 14999,
    mrp: 17999,
    discount: 17,
    rating: 4.7,
    reviews: 890,
    sold: "720",
    image: "https://images.unsplash.com/photo-1587829741301-dc798b83add3?auto=format&fit=crop&w=600&q=80",
    description:
      "15 customizable LCD keys for one-touch control of apps, streaming tools, and smart home devices.",
    specs: [
      "15 Customizable LCD Keys",
      "Detachable USB-C Cable",
      "Adjustable Stand",
      "Plugin Ecosystem",
      "Multi-action Support",
      "Compatible: Win/Mac",
    ],
    affiliateLinks: {
      amazon: "#",
      flipkart: "#",
      brand: "#",
    },
    tags: ["Creator", "Streaming"],
  },
  {
    id: 9,
    name: "Autonomous SmartDesk Pro Solid Oak standing Desk",
    slug: "autonomous-smartdesk-pro",
    category: "accessories",
    price: 42999,
    mrp: 52999,
    discount: 19,
    rating: 4.8,
    reviews: 670,
    sold: "340",
    image: "https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&fit=crop&w=600&q=80",
    description:
      "Electric standing desk with dual motors, programmable presets, and solid steel frame supporting up to 136kg.",
    specs: [
      "Dual Motor System",
      "4 Programmable Presets",
      'Size: 60" x 30"',
      "Height: 26.2\"–44.1\"",
      "Load Capacity: 136kg",
      "Anti-collision Technology",
    ],
    affiliateLinks: {
      amazon: "#",
      flipkart: "#",
      brand: "#",
    },
    tags: ["Standing Desk", "Premium"],
  },
  {
    id: 10,
    name: "BenQ ScreenBar Halo Monitor Light",
    slug: "benq-screenbar-halo",
    category: "lighting",
    price: 13500,
    mrp: 15900,
    discount: 15,
    rating: 4.9,
    reviews: 2100,
    sold: "3.2K",
    image: "https://images.unsplash.com/photo-1618609377864-68609b857e90?auto=format&fit=crop&w=600&q=80",
    description:
      "Premium monitor light with wireless controller, backlight for immersive ambiance, and auto-dimming sensor.",
    specs: [
      "Backlight + Front Light",
      "Wireless Controller",
      "Auto-dimming Sensor",
      "No Screen Glare",
      "USB Powered",
      "500 Lux Brightness",
    ],
    affiliateLinks: {
      amazon: "#",
      flipkart: "#",
      brand: "#",
    },
    tags: ["Premium", "Lighting"],
  },
];

/* ────────────────── SETUPS ────────────────── */

export const setups = [
  {
    id: 1,
    title: "Minimal Warm Oak Haven",
    slug: "minimal-desk-setup",
    description:
      "A soothing visual workspace designed with warm cedar oak wood, soft ambient backlighting, and heavy felt wool deskmats to foster absolute mental clarity.",
    image: "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1585776245991-cf89dd7fc73a?q=80&w=800&auto=format&fit=crop",
    ],
    tags: ["Minimal", "Cozy", "Warm", "Modern"],
    category: "minimal",
    style: "Minimal",
    views: "42.8K",
    saves: 2840,
    estimatedCost: 62641,
    productIds: [1, 2, 3, 4, 5, 6],
    creator: {
      name: "Ethan Lugun",
      avatar: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&w=150&auto=format&fit=crop",
    },
    keywords: ["Clean", "Productive", "Peaceful"],
    setupCount: 32,
  },
  {
    id: 2,
    title: "Ultrawide Deep Focus Battlestation",
    slug: "gaming-battlestation",
    description:
      "An immersive developer and creator sanctuary featuring high-contrast matte finishes, specialized acoustics, and deep amber backlighting for pure cognitive focus.",
    image: "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1618477388954-7852f32655ec?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1603481588273-2f908a9a7a1b?q=80&w=800&auto=format&fit=crop",
    ],
    tags: ["Professional", "Productivity", "Immersive", "Dark"],
    category: "focused",
    style: "Focused",
    views: "64.9K",
    saves: 4910,
    estimatedCost: 89990,
    productIds: [1, 2, 3, 6, 7],
    creator: {
      name: "Ravi Kumar",
      avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=150&auto=format&fit=crop",
    },
    keywords: ["Powerful", "Immersive", "Matte Black"],
    setupCount: 31,
  },
  {
    id: 3,
    title: "Nordic Minimalist Study Cabin",
    slug: "study-productivity",
    description:
      "A serene and heavily organized workspace. Incorporates bright northern light, soft natural timber textures, and minimal layout geometries.",
    image: "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1586023492125-27b2c045efd7?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1499750310107-5fef28a66643?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1516321165247-4aa89a48be28?q=80&w=800&auto=format&fit=crop",
    ],
    tags: ["Study", "Nordic", "Minimal", "Calm"],
    category: "cozy",
    style: "Cozy",
    views: "29.1K",
    saves: 1950,
    estimatedCost: 34500,
    productIds: [2, 3, 4, 5],
    creator: {
      name: "Ananya Desai",
      avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=150&auto=format&fit=crop",
    },
    keywords: ["Focused", "Organized", "Nordic"],
    setupCount: 14,
  },
  {
    id: 4,
    title: "Studio-Grade Creator Den",
    slug: "content-creator-setup",
    description:
      "A professional layout curated for content production, with high-fidelity acoustic elements, dual warm-toned monitor overlays, and plants.",
    image: "https://images.unsplash.com/photo-1618609377864-68609b857e90?q=80&w=800&auto=format&fit=crop",
    gallery: [
      "https://images.unsplash.com/photo-1618609377864-68609b857e90?q=80&w=800&auto=format&fit=crop",
      "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?q=80&w=800&auto=format&fit=crop",
    ],
    tags: ["Creator", "Studio", "Professional", "Design"],
    category: "creative",
    style: "Creative",
    views: "48.2K",
    saves: 3120,
    estimatedCost: 125000,
    productIds: [1, 2, 3, 7, 8, 9],
    creator: {
      name: "Vikram Singh",
      avatar: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=150&auto=format&fit=crop",
    },
    keywords: ["Create", "Inspire", "Acoustics"],
    setupCount: 14,
  },
];

/* ────────────────── SETUP STYLES (for filters) ────────────────── */

export const setupStyles = [
  "All",
  "Minimal",
  "Gaming",
  "Cozy",
  "Professional",
  "Aesthetic",
  "RGB",
  "Luxury",
  "Productivity",
];

export const budgetRanges = [
  { label: "Under ₹25K", min: 0, max: 25000, icon: "💰" },
  { label: "₹25K – ₹50K", min: 25000, max: 50000, icon: "💎" },
  { label: "₹50K – ₹1L", min: 50000, max: 100000, icon: "🏆" },
  { label: "₹1L+", min: 100000, max: Infinity, icon: "👑" },
];

/* ────────────────── HELPERS ────────────────── */

export function formatPrice(price) {
  return "₹" + price.toLocaleString("en-IN");
}

export function getProductsForSetup(setup) {
  return setup.productIds.map((id) => products.find((p) => p.id === id)).filter(Boolean);
}

export function getRelatedSetups(currentId, count = 4) {
  return setups.filter((s) => s.id !== currentId).slice(0, count);
}

export function getRelatedProducts(currentId, count = 6) {
  return products.filter((p) => p.id !== currentId).slice(0, count);
}

export function getSetupsByCategory(categorySlug) {
  return setups.filter(
    (s) => s.category === categorySlug || s.tags.some((t) => t.toLowerCase() === categorySlug)
  );
}
