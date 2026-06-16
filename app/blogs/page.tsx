import Link from "next/link";
import { ArrowRight, BookOpen, Lightbulb, ShieldCheck, Sparkles } from "lucide-react";
import AnimateTitle from "@/components/animate-title";
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

const posts = [
  {
    id: "choosing-tool-packs",
    title: "How to choose the right tool pack",
    description: "A practical way to match subscriptions with your real workflow.",
    icon: Lightbulb,
  },
  {
    id: "secure-shared-access",
    title: "Using premium tools more safely",
    description: "Simple habits that keep accounts, sessions, and access cleaner.",
    icon: ShieldCheck,
  },
  {
    id: "creator-workflow",
    title: "A lean creator workflow with iTolz",
    description: "How creators can combine AI, design, and productivity tools.",
    icon: BookOpen,
  },
];

export default function Blogs() {
  return (
    <main className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 lg:gap-8">
      <Stagger>
        <Card className="relative overflow-hidden">
          <CardContent className="relative z-10 flex flex-col items-center justify-center px-4 py-8 text-center md:px-6 md:py-12">
            <StaggerItem>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/70 px-4 py-1.5 text-sm text-primary shadow-sm">
                <Sparkles className="size-4" />
                iTolz blog
              </div>
            </StaggerItem>
            <StaggerItem>
              <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                Guides for smarter tool access.
              </h1>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                Notes on workflows, subscriptions, privacy, and getting more from your digital tools.
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
                Latest posts
              </CardTitle>
              <CardDescription>
                Short guides for creators, students, and teams.
              </CardDescription>
            </CardHeader>
          </AnimateTitle>
          <CardContent className="grid gap-4 p-4 md:grid-cols-3 md:p-6">
            {posts.map((post) => (
              <StaggerItem key={post.id}>
                <Link
                  href={`/blog/${post.id}`}
                  className="group block h-full rounded-3xl border bg-background p-4 ring-1 ring-foreground/5 transition hover:border-primary/40 hover:shadow-md"
                >
                  <post.icon className="mb-4 size-6 text-primary" />
                  <h2 className="font-semibold">{post.title}</h2>
                  <div className="mt-2 text-sm leading-6 text-muted-foreground">
                    {post.description}
                  </div>
                  <div className="mt-4 inline-flex items-center gap-2 text-sm font-semibold text-primary">
                    Read more
                    <ArrowRight className="size-4 transition group-hover:translate-x-1" />
                  </div>
                </Link>
              </StaggerItem>
            ))}
          </CardContent>
        </Card>
      </Stagger>

      <Footer />
    </main>
  );
}
