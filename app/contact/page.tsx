import { Mail, MessageCircle, Send, Sparkles } from "lucide-react";
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

const contactOptions = [
  {
    title: "Support",
    description: "Questions about accounts, access, payments, or active subscriptions.",
    value: "support@itolz.com",
    href: "mailto:support@itolz.com",
    icon: Mail,
  },
  {
    title: "Partnerships",
    description: "Ideas for tool requests, bundles, creator offers, or business collaboration.",
    value: "partners@itolz.com",
    href: "mailto:partners@itolz.com",
    icon: MessageCircle,
  },
];

export default function Contact() {
  return (
    <main className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 lg:gap-8">
      <Stagger>
        <Card className="relative overflow-hidden">
          <CardContent className="relative z-10 flex flex-col items-center justify-center px-4 py-8 text-center md:px-6 md:py-12">
            <StaggerItem>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/70 px-4 py-1.5 text-sm text-primary shadow-sm">
                <Sparkles className="size-4" />
                Contact iTolz
              </div>
            </StaggerItem>
            <StaggerItem>
              <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                Need help with access?
              </h1>
            </StaggerItem>
            <StaggerItem>
              <div className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                Reach out for subscription help, tool questions, partnership ideas, or feedback.
              </div>
            </StaggerItem>
          </CardContent>
        </Card>
      </Stagger>

      <section className="grid gap-4 md:grid-cols-2 md:gap-6">
        {contactOptions.map((option) => (
          <Stagger key={option.title}>
            <Card className="h-full">
              <CardHeader>
                <option.icon className="mb-2 size-6 text-primary" />
                <CardTitle>{option.title}</CardTitle>
                <CardDescription>{option.description}</CardDescription>
              </CardHeader>
              <CardContent>
                <a
                  href={option.href}
                  className="inline-flex items-center gap-2 font-semibold text-primary underline-offset-4 hover:underline"
                >
                  {option.value}
                  <Send className="size-4" />
                </a>
              </CardContent>
            </Card>
          </Stagger>
        ))}
      </section>

      <Footer />
    </main>
  );
}
