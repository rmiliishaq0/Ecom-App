import Link from "next/link";
import { BadgeCheck, Clock, KeyRound, ShieldCheck, Sparkles } from "lucide-react";
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

const steps = [
  "Confirm your selected pack and account details.",
  "Install or open the iTolz browser extension when required.",
  "Start your tool session from the dashboard or access link.",
];

export default async function AccessPage({
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
                <KeyRound className="size-4" />
                Access setup
              </div>
            </StaggerItem>
            <StaggerItem>
              <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                Prepare your access.
              </h1>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                Access ID: <span className="font-semibold text-foreground">{id}</span>
              </div>
            </StaggerItem>
          </CardContent>
        </Card>
      </Stagger>

      <section className="grid gap-4 md:grid-cols-3 md:gap-6">
        {[
          { title: "Status", value: "Ready", icon: BadgeCheck },
          { title: "Security", value: "Protected", icon: ShieldCheck },
          { title: "Session", value: "On demand", icon: Clock },
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
            <Sparkles className="mb-2 size-6 text-primary" />
            <CardTitle>How to start</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-3 md:grid-cols-3">
              {steps.map((step) => (
                <li
                  key={step}
                  className="rounded-3xl border bg-background p-4 text-sm leading-6 text-muted-foreground ring-1 ring-foreground/5"
                >
                  {step}
                </li>
              ))}
            </ul>
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
