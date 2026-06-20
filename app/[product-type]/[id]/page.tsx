import Link from "next/link";
import Image from "next/image";
import type { Metadata } from "next";
import { notFound } from "next/navigation";
import {
  ArrowLeft,
  ArrowRight,
  BadgeCheck,
  Check,
  Clock,
  Package,
  ShieldCheck,
  Sparkles,
} from "lucide-react";
import Footer from "@/components/footer";
import { Stagger } from "@/components/stagger";
import { StaggerItem } from "@/components/stagger-item";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { formatSegment, getProduct, products } from "@/utils/products";

type ProductPageProps = {
  params: Promise<{ "product-type": string; id: string }>;
};

const fallbackDetails = [
  "Flexible access built around real workflows.",
  "Simple setup through your iTolz account.",
  "Support for common access and subscription questions.",
];

export function generateStaticParams() {
  return products.map((product) => ({
    "product-type": product.type,
    id: product.slug,
  }));
}

export async function generateMetadata({ params }: ProductPageProps): Promise<Metadata> {
  const { "product-type": productType, id } = await params;
  const product = getProduct(productType, id);

  if (!product) {
    return {
      title: `${formatSegment(id)} | iTolz`,
    };
  }

  return {
    title: `${product.title} | iTolz`,
    description: product.description,
  };
}

export default async function ProductDetail({ params }: ProductPageProps) {
  const { "product-type": productType, id } = await params;
  const product = getProduct(productType, id);

  if (!product) {
    notFound();
  }

  const productDetails = product.highlights.length ? product.highlights : fallbackDetails;

  return (
    <main className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 lg:gap-8">
      <Stagger>
        <Card className="relative overflow-hidden">
          <CardContent className="relative z-10 grid gap-6 px-4 py-6 md:px-6 md:py-8 lg:grid-cols-[1fr_20rem] lg:items-center">
            <div className="text-center lg:text-left">
              <StaggerItem>
                <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/70 px-4 py-1.5 text-sm text-primary shadow-sm">
                  <Package className="size-4" />
                  {product.category}
                </div>
              </StaggerItem>
              <StaggerItem>
                <h1 className="mt-4 text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                  {product.title}
                </h1>
              </StaggerItem>
              <StaggerItem>
                <div className="mx-auto mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base lg:mx-0">
                  {product.description}
                </div>
              </StaggerItem>
              <StaggerItem>
                <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:justify-center lg:justify-start">
                  <Button asChild size="lg">
                    <Link href={`/access/${product.slug}`}>
                  Get free access
                      <ArrowRight className="size-4" />
                    </Link>
                  </Button>
                  <Button asChild size="lg" variant="outline">
                    <Link href="/products">
                      <ArrowLeft className="size-4" />
                      All products
                    </Link>
                  </Button>
                </div>
              </StaggerItem>
            </div>

            <StaggerItem>
               <div className="rounded-3xl border bg-background p-4 shadow-sm ring-1 ring-foreground/5">
                <div className="flex items-start justify-between gap-4">
                  <div className={`flex size-12 items-center justify-center rounded-2xl ${product.accent} text-white`}>
                    <product.icon className="size-6" />
                  </div>
                  <div className="rounded-full border border-primary/20 bg-primary/10 px-2.5 py-1 text-[0.68rem] font-semibold uppercase text-primary">
                    Save more
                  </div>
                </div>
                <div className="mt-6">
                  <div className="text-xs font-medium uppercase text-muted-foreground">
                    iTolz price
                  </div>
                  <div className="mt-1 text-3xl font-bold text-primary">{product.price}</div>
                  <div className="text-sm text-muted-foreground">
                    Regular price <span className="line-through">{product.originalPrice}</span>
                  </div>
                </div>
                <div className="mt-5 grid gap-2 border-t pt-4">
                  {productDetails.map((detail) => (
                    <div key={detail} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <span className="flex size-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                        <Check className="size-3" />
                      </span>
                      {detail}
                    </div>
                  ))}
                </div>
              </div>
            </StaggerItem>
          </CardContent>
        </Card>
      </Stagger>

      <section className="grid gap-4 md:grid-cols-3 md:gap-6">
        {[
          { title: "Access", value: "Flexible", icon: BadgeCheck },
          { title: "Setup", value: "Simple", icon: Sparkles },
          { title: "Support", value: "Included", icon: ShieldCheck },
        ].map((item) => (
          <Stagger key={item.title}>
            <Card className="h-full">
              <CardHeader>
                <item.icon className="mb-2 size-6 text-primary" />
                <CardTitle>{item.value}</CardTitle>
                <CardDescription>{item.title}</CardDescription>
              </CardHeader>
            </Card>
          </Stagger>
        ))}
      </section>

      <Stagger>
        <Card>
          <CardHeader>
            <Clock className="mb-2 size-6 text-primary" />
            <CardTitle>What to expect</CardTitle>
            <CardDescription>
              A clear subscription flow with the same iTolz support pattern across the catalog.
            </CardDescription>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-3 md:grid-cols-3">
              {productDetails.map((detail) => (
                <li
                  key={detail}
                  className="rounded-3xl border bg-background p-4 text-sm leading-6 text-muted-foreground ring-1 ring-foreground/5 transition hover:border-primary/30"
                >
                  {detail}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </Stagger>

      <Link
        href="/products"
        className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
      >
        <ArrowLeft className="size-4" />
        Back to products
      </Link>

      <Footer />
    </main>
  );
}
