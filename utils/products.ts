export type Product = {
  title: string;
  slug: string;
  type: string;
  category: string;
  description: string;
  price: string;
  //originalPrice: string;
  href: string;
  image: string;
  imageAlt: string;
  //badge: string;
  accent: string;
  isFree?: boolean;
};

export const products: Product[] = [
  {
    title: "ChatGPT Plus",
    slug: "chatgpt-plus",
    type: "ai-tools",
    category: "AI Tools",
    description:
      "Access advanced AI workflows, faster responses, file analysis, and daily productivity support.",
    price: "$13.99",
    href: "/ai-tools/chatgpt-plus",
    image: "/products/chatgpt-plus.png",
    imageAlt: "ChatGPT Plus AI assistant product preview",
    accent: "bg-emerald-500",
    isFree:true
  },
  {
    title: "Midjourney Pro",
    slug: "midjourney-pro",
    type: "ai-tools",
    category: "AI Tools",
    description:
      "Generate polished concepts, visuals, and campaign-ready creative assets with premium image tools.",
    price: "Free",
    href: "/ai-tools/midjourney-pro",
    image: "/products/midjourney-pro.png",
    imageAlt: "Midjourney Pro image generation product preview",
    accent: "bg-zinc-600",
  },
  {
    title: "Canva Pro",
    slug: "canva-pro",
    type: "design",
    category: "Design",
    description:
      "Use premium templates, brand kits, magic tools, background removal, and flexible export options.",
    price: "Free",
    href: "/design/canva-pro",
    image: "/products/canva-pro.png",
    imageAlt: "Canva Pro design product preview",
    accent: "bg-cyan-500",
  },
  {
    title: "Netflix Premium",
    slug: "netflix-premium",
    type: "streaming",
    category: "Streaming",
    description:
      "Premium entertainment access for movies and shows with simple monthly access through iTolz.",
    price: "Free",
    href: "/streaming/netflix-premium",
    image: "/products/netflix-premium.png",
    imageAlt: "Netflix Premium streaming product preview",
    accent: "bg-red-500",
  },
  {
    title: "Adobe CC Full",
    slug: "adobe-cc-full",
    type: "design",
    category: "Design",
    description:
      "Creative apps for photo editing, video, illustration, layout, and professional production work.",
    price: "Free",
    href: "/design/adobe-cc-full",
    image: "/products/adobe-cc-full.png",
    imageAlt: "Adobe CC Full creative suite product preview",
    accent: "bg-rose-500",
  },
  {
    title: "GitHub Copilot",
    slug: "github-copilot",
    type: "development",
    category: "Development",
    description:
      "AI coding assistance for faster development, refactoring, documentation, and daily engineering work.",
    price: "Free",
    href: "/development/github-copilot",
    image: "/products/github-copilot.png",
    imageAlt: "GitHub Copilot AI coding product preview",
    accent: "bg-violet-500",
  },
];

export const productCategories = [
  "All",
  ...Array.from(new Set(products.map((product) => product.category))),
];


export function getProduct(type: string, slug: string) {
  return products.find((product) => product.type === type && product.slug === slug);
}

export function formatSegment(value: string) {
  return value
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}
