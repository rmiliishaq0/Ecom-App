import { Activity, BadgeCheck, Clock, Sparkles, WalletCards } from "lucide-react";
import AnimateTitle from "@/components/animate-title";
import Footer from "@/components/footer";
import { Stagger } from "@/components/stagger";
import { StaggerItem } from "@/components/stagger-item";
import {
  Card,
  CardHeader,
  CardDescription,
  CardContent,
  CardTitle,
} from "@/components/ui/card";

const stats = [
  { title: "Active packs", value: "2", icon: BadgeCheck },
  { title: "Available tools", value: "18", icon: Activity },
  { title: "Renewal window", value: "14 days", icon: Clock },
];

const quickActions = [
  "Review your active subscriptions.",
  "Open your available tools from one place.",
  "Check renewal dates before your next billing cycle.",
];

export default function Dashboard() {
  return (
    <main className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 lg:gap-8">
      <Stagger>
        <Card className="relative overflow-hidden">
          <CardContent className="relative z-10 flex flex-col items-center justify-center px-4 py-8 text-center md:px-6 md:py-12">
            <StaggerItem>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/70 px-4 py-1.5 text-sm text-primary shadow-sm">
                <Sparkles className="size-4" />
                Dashboard
              </div>
            </StaggerItem>
            <StaggerItem>
              <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                Your access, organized.
              </h1>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                Track subscriptions, available tools, and account activity from a single workspace.
              </div>
            </StaggerItem>
          </CardContent>
        </Card>
      </Stagger>

      <Stagger>
        <Card>
          <AnimateTitle>
            <CardHeader className="pt-4 text-center md:pt-6">
              <CardTitle className="text-xl font-semibold md:text-2xl">
                Account overview
              </CardTitle>
              <CardDescription>
                A clean snapshot of your iTolz access.
              </CardDescription>
            </CardHeader>
          </AnimateTitle>
          <CardContent className="grid gap-4 p-4 md:grid-cols-3 md:p-6">
            {stats.map((stat) => (
              <StaggerItem key={stat.title}>
                <div className="h-full rounded-3xl border bg-background p-4 ring-1 ring-foreground/5">
                  <stat.icon className="mb-4 size-6 text-primary" />
                  <div className="text-2xl font-semibold">{stat.value}</div>
                  <div className="mt-1 text-sm text-muted-foreground">{stat.title}</div>
                </div>
              </StaggerItem>
            ))}
          </CardContent>
        </Card>
      </Stagger>

      <Stagger>
        <Card>
          <CardHeader>
            <WalletCards className="mb-2 size-6 text-primary" />
            <CardTitle>Next steps</CardTitle>
          </CardHeader>
          <CardContent>
            <ul className="grid gap-3 md:grid-cols-3">
              {quickActions.map((action) => (
                <li
                  key={action}
                  className="rounded-3xl border bg-background p-4 text-sm leading-6 text-muted-foreground ring-1 ring-foreground/5"
                >
                  {action}
                </li>
              ))}
            </ul>
          </CardContent>
        </Card>
      </Stagger>

      <Footer />
    </main>
  );
}
