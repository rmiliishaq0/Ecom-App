import Link from "next/link";
import { BadgeCheck, Boxes, Sparkles, Users, Zap } from "lucide-react";
import AnimateTitle from "@/components/animate-title";
import Footer from "@/components/footer";
import { Stagger } from "@/components/stagger";
import { StaggerItem } from "@/components/stagger-item";
import {
  Card,
  CardDescription,
  CardContent,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";

const steps = [
  {
    title: "Choose Your Pack",
    description: "Select the plan that fits your tools, workflow, and budget.",
    icon: Boxes,
  },
  {
    title: "Install the Extension",
    description: "Set up our lightweight browser extension in just a few steps.",
    icon: Zap,
  },
  {
    title: "Start Using Your Tools",
    description:
      "Log in with your Itolz account and access your available tools from one place.",
    icon: BadgeCheck,
  },
];

const benefits = [
  {
    title: "Affordable Access",
    description: "Popular digital tools become easier to try, use, and keep in your daily workflow.",
  },
  {
    title: "Simple Packs",
    description: "Clear subscriptions built around real creator, student, and business needs.",
  },
  {
    title: "One Account",
    description: "Manage access from one place instead of juggling separate services.",
  },
  {
    title: "Try Before You Commit",
    description: "Free trial access helps users test the experience before choosing a plan.",
  },
  {
    title: "Community Shaped",
    description: "The library grows around what users actually ask for and use.",
  },
];

export default function About() {
  return (
    <main className="flex flex-col gap-4 md:gap-6 lg:gap-8 md:pb-6 pb-4">
      <Stagger>
        <Card className="relative overflow-hidden md:mt-6 lg:mt-8 mt-4">
          <CardContent className="relative z-10 flex flex-col items-center justify-center px-4 py-8 text-center md:px-6 md:py-12">
            <StaggerItem>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/70 px-4 py-1.5 text-sm text-primary shadow-sm">
                <Sparkles className="size-4" />
                About iTolz
              </div>
            </StaggerItem>

            <StaggerItem>
              <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                Powerful digital tools,
                <br />
                <span className="text-gradient opacity-90">made easier to reach.</span>
              </h1>
            </StaggerItem>

            <StaggerItem>
              <div className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                iTolz helps students, freelancers, entrepreneurs, and creators access useful online tools through simple, affordable packs designed for real work.
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
                Built for access, not friction
              </CardTitle>
              <CardDescription>
                Great tools should help people move faster, not make them calculate every subscription.
              </CardDescription>
            </CardHeader>
          </AnimateTitle>

          <CardContent className="grid gap-4 p-4 md:grid-cols-3 md:p-6">
            {steps.map((step) => (
              <StaggerItem key={step.title}>
                <div className="h-full rounded-3xl border bg-background p-4 ring-1 ring-foreground/5">
                  <step.icon className="mb-4 size-6 text-primary" />
                  <h3 className="font-semibold">{step.title}</h3>
                  <div className="mt-2 text-sm leading-6 text-muted-foreground">{step.description}</div>
                </div>
              </StaggerItem>
            ))}
          </CardContent>
        </Card>
      </Stagger>

      <section className="grid gap-4 md:grid-cols-2 md:gap-6">
        <Stagger>
          <Card className="h-full">
            <CardHeader>
              <Users className="mb-2 size-6 text-primary" />
              <CardTitle>Why iTolz exists</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4 leading-7 text-muted-foreground">
              <div>
                Many people only need access to specific tools for a project, course, client task, or short-term workflow. Paying full price for every service can quickly become too expensive.
              </div>

              <div>
                iTolz brings useful services together in a more flexible and budget-friendly way, so more people can keep creating without overpaying.
              </div>
            </CardContent>
          </Card>
        </Stagger>

        <Stagger>
          <Card className="h-full">
            <CardHeader>
              <BadgeCheck className="mb-2 size-6 text-primary" />
              <CardTitle>What we do</CardTitle>
            </CardHeader>

            <CardContent className="space-y-4 leading-7 text-muted-foreground">
              <div>
                iTolz offers curated subscription packs for popular online tools, including AI, creativity, productivity, and business services.
              </div>

              <div>
                Whether you are designing, writing, researching, marketing, or building a project, our packs are made to help you work smarter.
              </div>
            </CardContent>
          </Card>
        </Stagger>
      </section>

      <Stagger>
        <Card>
          <AnimateTitle>
            <CardHeader className="pt-4 text-center md:pt-6">
              <CardTitle className="text-xl font-semibold md:text-2xl">Why choose iTolz?</CardTitle>
              <CardDescription>
                A simpler way to discover, activate, and manage premium tool access.
              </CardDescription>
            </CardHeader>
          </AnimateTitle>

          <CardContent className="grid gap-4 p-4 md:grid-cols-2 md:p-6 lg:grid-cols-3">
            {benefits.map((benefit) => (
              <StaggerItem key={benefit.title}>
                <div className="h-full rounded-3xl border bg-background p-4 ring-1 ring-foreground/5">
                  <BadgeCheck className="mb-3 size-5 text-primary" />
                  <h3 className="font-semibold">{benefit.title}</h3>
                  <div className="mt-2 text-sm leading-6 text-muted-foreground">{benefit.description}</div>
                </div>
              </StaggerItem>
            ))}
          </CardContent>
        </Card>
      </Stagger>

      <Stagger>
        <Card>
        <CardHeader>
          <CardTitle>Our Mission</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 leading-7 text-muted-foreground">
          <div>
            In a world powered by digital creativity and productivity, great
            tools should not feel out of reach. Many people discover software
            that could improve their work, studies, or business, only to be
            blocked by expensive monthly subscriptions.
          </div>

          <div>
            iTolz was created from a simple idea: people should have easier,
            more affordable access to the digital tools they need to build,
            learn, create, and grow.
          </div>

          <div>
            We believe ambition and talent are everywhere. Our goal is to reduce
            cost barriers and help more people unlock their potential.
          </div>
        </CardContent>
      </Card>
      </Stagger>

      <Stagger>
        <Card>
        <CardHeader>
          <CardTitle>Our Vision</CardTitle>
        </CardHeader>

        <CardContent className="space-y-4 leading-7 text-muted-foreground">
          <div>
            We are building iTolz to become a trusted hub for affordable digital
            tools. Our vision is to keep expanding our library, improving the
            user experience, and helping more people create without letting
            budget limit ambition.
          </div>

          <div>
            Ready to explore your options?{" "}
            <Link
              href="/products"
              className="font-semibold text-primary underline-offset-4 hover:underline"
            >
              Browse our Products today
            </Link>
            .
          </div>
        </CardContent>
      </Card>
      </Stagger>

      <Footer />
    </main>
  );
}
