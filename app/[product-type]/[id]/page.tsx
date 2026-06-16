import Link from "next/link";
import { ArrowLeft, BadgeCheck, Clock, Package, ShieldCheck, Sparkles } from "lucide-react";
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

const productDetails = [
  "Flexible access built around real workflows.",
  "Simple setup through your iTolz account.",
  "Support for common access and subscription questions.",
];

function formatSegment(value: string) {
  return value
    .split("-")
    .filter(Boolean)
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export default async function ProductDetail({
  params,
}: {
  params: Promise<{ "product-type": string; id: string }>;
}) {
  const { "product-type": productType, id } = await params;
  const typeLabel = formatSegment(productType);
  const productLabel = formatSegment(id);

  return (
    <main className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 lg:gap-8">
      <Stagger>
        <Card className="relative overflow-hidden">
          <CardContent className="relative z-10 flex flex-col items-center justify-center px-4 py-8 text-center md:px-6 md:py-12">
            <StaggerItem>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/70 px-4 py-1.5 text-sm text-primary shadow-sm">
                <Package className="size-4" />
                {typeLabel}
              </div>
            </StaggerItem>
            <StaggerItem>
              <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                {productLabel}
              </h1>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                A curated iTolz access option for users who want useful tools without managing every subscription separately.
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
          </CardHeader>
          <CardContent>
            <ul className="grid gap-3 md:grid-cols-3">
              {productDetails.map((detail) => (
                <li
                  key={detail}
                  className="rounded-3xl border bg-background p-4 text-sm leading-6 text-muted-foreground ring-1 ring-foreground/5"
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
