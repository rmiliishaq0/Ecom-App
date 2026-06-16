import Link from "next/link";
import { ArrowLeft, BookOpen, Sparkles } from "lucide-react";
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

const posts: Record<string, { title: string; description: string; sections: string[] }> = {
  "choosing-tool-packs": {
    title: "How to choose the right tool pack",
    description: "A practical way to match subscriptions with your real workflow.",
    sections: [
      "Start with the work you repeat every week. If a tool saves time on that work, it belongs near the top of your list.",
      "Avoid building a stack around curiosity alone. Choose packs that support projects, classes, client tasks, or business workflows.",
      "Review your subscriptions regularly so your access stays useful instead of becoming another monthly expense.",
    ],
  },
  "secure-shared-access": {
    title: "Using premium tools more safely",
    description: "Simple habits that keep accounts, sessions, and access cleaner.",
    sections: [
      "Use your own iTolz account credentials and keep them private.",
      "Close sessions when you finish sensitive work, especially when using shared or public devices.",
      "Report access issues quickly so support can help before they interrupt your workflow.",
    ],
  },
  "creator-workflow": {
    title: "A lean creator workflow with iTolz",
    description: "How creators can combine AI, design, and productivity tools.",
    sections: [
      "Use AI tools for drafts, outlines, and idea expansion before moving into design or editing.",
      "Keep one place for research, scripts, visuals, and final assets so projects stay easy to resume.",
      "Choose fewer tools with clearer roles instead of collecting every new app that looks interesting.",
    ],
  },
};

export default async function BlogPost({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const post = posts[id] ?? posts["choosing-tool-packs"];

  return (
    <main className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 lg:gap-8">
      <Stagger>
        <Card className="relative overflow-hidden">
          <CardContent className="relative z-10 flex flex-col items-center justify-center px-4 py-8 text-center md:px-6 md:py-12">
            <StaggerItem>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/70 px-4 py-1.5 text-sm text-primary shadow-sm">
                <BookOpen className="size-4" />
                iTolz blog
              </div>
            </StaggerItem>
            <StaggerItem>
              <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                {post.title}
              </h1>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                {post.description}
              </div>
            </StaggerItem>
          </CardContent>
        </Card>
      </Stagger>

      <Stagger>
        <Card>
          <CardHeader>
            <Sparkles className="mb-2 size-6 text-primary" />
            <CardTitle>Guide</CardTitle>
            <CardDescription>Useful notes you can apply right away.</CardDescription>
          </CardHeader>
          <CardContent className="space-y-4 leading-7 text-muted-foreground">
            {post.sections.map((section) => (
              <div key={section}>{section}</div>
            ))}
          </CardContent>
        </Card>
      </Stagger>

      <Link
        href="/blogs"
        className="inline-flex w-fit items-center gap-2 text-sm font-semibold text-primary underline-offset-4 hover:underline"
      >
        <ArrowLeft className="size-4" />
        Back to blogs
      </Link>

      <Footer />
    </main>
  );
}
