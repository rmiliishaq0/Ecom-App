import Link from "next/link";
import { BadgeCheck, Crown, Headphones, ShieldCheck, Zap } from "lucide-react";
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

const proFeatures = [
  { title: "Priority access", description: "Start sessions faster when demand is high.", icon: Zap },
  { title: "Better support", description: "Get help with account and tool access issues sooner.", icon: Headphones },
  { title: "Extra checks", description: "A cleaner setup path for paid and advanced access.", icon: ShieldCheck },
];

export default async function ProAccessPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;

  return (
    <main className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 lg:gap-8">
      <Stagger>
        <Card className="relative overflow-hidden">
          <CardContent className="relative z-10 flex flex-col items-center justify-center px-4 py-8 text-center md:px-6 md:py-12">
            <StaggerItem>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/70 px-4 py-1.5 text-sm text-primary shadow-sm">
                <Crown className="size-4" />
                Pro access
              </div>
            </StaggerItem>
            <StaggerItem>
              <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                Premium access setup.
              </h1>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                Pro Access ID: <span className="font-semibold text-foreground">{id}</span>
              </div>
            </StaggerItem>
          </CardContent>
        </Card>
      </Stagger>

      <Stagger>
        <Card>
          <CardHeader className="pt-4 text-center md:pt-6">
            <CardTitle className="text-xl font-semibold md:text-2xl">
              What pro includes
            </CardTitle>
            <CardDescription>
              More reliable access for users who depend on their tools every day.
            </CardDescription>
          </CardHeader>
          <CardContent className="grid gap-4 p-4 md:grid-cols-3 md:p-6">
            {proFeatures.map((feature) => (
              <StaggerItem key={feature.title}>
                <div className="h-full rounded-3xl border bg-background p-4 ring-1 ring-foreground/5">
                  <feature.icon className="mb-4 size-6 text-primary" />
                  <h2 className="font-semibold">{feature.title}</h2>
                  <div className="mt-2 text-sm leading-6 text-muted-foreground">
                    {feature.description}
                  </div>
                </div>
              </StaggerItem>
            ))}
          </CardContent>
        </Card>
      </Stagger>

      <Stagger>
        <Card>
          <CardHeader>
            <BadgeCheck className="mb-2 size-6 text-primary" />
            <CardTitle>Ready when your subscription is active</CardTitle>
          </CardHeader>
          <CardContent className="leading-7 text-muted-foreground">
            <div>
              Once your pro subscription is confirmed, your available tools will
              appear in the dashboard with the correct access options.
            </div>
          </CardContent>
        </Card>
      </Stagger>

      <Link href="/dashboard" className="text-sm font-semibold text-primary underline-offset-4 hover:underline">
        Go to dashboard
      </Link>

      <Footer />
    </main>
  );
}
