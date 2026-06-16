import Link from "next/link";
import {
  ArrowRight,
  Bot,
  Check,
  Clapperboard,
  Code2,
  Palette,
  Search,
  SlidersHorizontal,
  Sparkles,
} from "lucide-react";
import Footer from "@/components/footer";
import { Stagger } from "@/components/stagger";
import { StaggerItem } from "@/components/stagger-item";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const filters = ["All", "AI Tools", "Design", "Streaming", "Software", "Development"];

const tools = [
  {
    title: "ChatGPT Plus",
    category: "AI Tool",
    description: "Access GPT-4, advanced data analysis, faster responses, and premium AI workflows.",
    price: "$4.99/mo",
    href: "/ai-tools/chatgpt-plus",
    icon: Bot,
    accent: "bg-emerald-400",
  },
  {
    title: "Midjourney Pro",
    category: "AI Tool",
    description: "Generate high-quality images and creative concepts for brands, content, and projects.",
    price: "$6.49/mo",
    href: "/ai-tools/midjourney-pro",
    icon: Sparkles,
    accent: "bg-zinc-500",
  },
  {
    title: "Canva Pro",
    category: "Design",
    description: "Premium templates, brand kits, magic tools, and export options for fast design work.",
    price: "$3.99/mo",
    href: "/design/canva-pro",
    icon: Palette,
    accent: "bg-cyan-400",
  },
  {
    title: "Netflix Premium",
    category: "Streaming",
    description: "Premium entertainment access with high-quality viewing for movies and shows.",
    price: "$5.99/mo",
    href: "/streaming/netflix-premium",
    icon: Clapperboard,
    accent: "bg-red-500",
  },
  {
    title: "Adobe CC Full",
    category: "Design",
    description: "Creative apps for photo editing, video, illustration, layout, and production work.",
    price: "$12.99/mo",
    href: "/design/adobe-cc-full",
    icon: Palette,
    accent: "bg-red-500",
  },
  {
    title: "GitHub Copilot",
    category: "Development",
    description: "AI coding assistance for faster development, refactoring, and documentation.",
    price: "$4.49/mo",
    href: "/development/github-copilot",
    icon: Code2,
    accent: "bg-violet-500",
  },
];

export default function Products() {
  return (
    <main className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 lg:gap-8">
      <Stagger>
        <Card className="overflow-hidden">
          <CardHeader className="pt-4 md:pt-6">
            <div className="flex flex-col gap-4 lg:flex-row lg:items-end lg:justify-between">
              <div className="max-w-3xl">
                <div className="mb-3 inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/70 px-4 py-1.5 text-sm text-primary shadow-sm">
                  <Sparkles className="size-4" />
                  Product library
                </div>
                <h1 className="text-2xl font-bold tracking-tight md:text-4xl">
                  Unlock premium digital subscriptions
                </h1>
                <CardDescription className="mt-2 max-w-2xl leading-6">
                  Get instant access to AI tools, design software, streaming, and development services at affordable monthly prices.
                </CardDescription>
              </div>

              <div className="flex items-center gap-2 text-sm text-muted-foreground">
                <SlidersHorizontal className="size-4" />
                Sort by:
                <span className="font-semibold text-primary">Popularity</span>
              </div>
            </div>
          </CardHeader>

          <CardContent className="space-y-4 p-4 md:p-6">
            <div className="flex flex-wrap gap-2">
              {filters.map((filter) => (
                <button
                  key={filter}
                  className="rounded-full border bg-background px-3 py-1.5 text-xs font-medium text-muted-foreground transition hover:border-primary/40 hover:text-primary data-[active=true]:border-primary data-[active=true]:bg-primary data-[active=true]:text-primary-foreground"
                  data-active={filter === "All"}
                  type="button"
                >
                  {filter}
                </button>
              ))}
            </div>

            <div className="flex items-center gap-3 rounded-xl border bg-background px-4 py-3 text-sm text-muted-foreground">
              <Search className="size-4" />
              <div>Search for tools, categories, or keywords...</div>
            </div>

            <div className="grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {tools.map((tool) => (
                <StaggerItem key={tool.title}>
                  <Link
                    href={tool.href}
                    className="group flex h-full flex-col rounded-3xl border bg-background p-4 ring-1 ring-foreground/5 transition hover:border-primary/40 hover:shadow-md"
                  >
                    <div className="flex items-start justify-between gap-4">
                      <div className={`flex size-9 items-center justify-center rounded-lg ${tool.accent} text-white`}>
                        <tool.icon className="size-5" />
                      </div>
                      <div className="rounded-full border border-primary/20 bg-primary/10 px-2 py-1 text-[0.68rem] font-semibold uppercase text-primary">
                        {tool.category}
                      </div>
                    </div>

                    <h2 className="mt-4 font-semibold">{tool.title}</h2>
                    <div className="mt-2 min-h-12 text-sm leading-6 text-muted-foreground">
                      {tool.description}
                    </div>

                    <div className="mt-5 flex items-end justify-between gap-3 border-t pt-4">
                      <div>
                        <div className="text-[0.7rem] font-medium uppercase text-muted-foreground">
                          iTolz Price
                        </div>
                        <div className="text-xl font-bold text-primary">{tool.price}</div>
                      </div>
                      <div className="inline-flex items-center gap-1 rounded-lg bg-primary px-3 py-2 text-xs font-semibold text-primary-foreground transition group-hover:opacity-90">
                        Subscribe
                        <ArrowRight className="size-3.5 transition group-hover:translate-x-0.5" />
                      </div>
                    </div>
                  </Link>
                </StaggerItem>
              ))}
            </div>

            <div className="flex flex-col items-center gap-3 border-t pt-5 text-center">
              <div className="inline-flex items-center gap-2 text-xs font-medium text-muted-foreground">
                <Check className="size-4 text-primary" />
                Showing 6 featured premium subscriptions
              </div>
              <button
                type="button"
                className="rounded-xl border bg-background px-5 py-2 text-sm font-semibold transition hover:border-primary/40 hover:text-primary"
              >
                Load More Tools
              </button>
            </div>
          </CardContent>
        </Card>
      </Stagger>

      <Footer />
    </main>
  );
}
