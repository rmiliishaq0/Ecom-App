import { Cookie, Database, Eye, FileText, Lock, Mail, ShieldCheck, UserCheck } from "lucide-react";
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
import Link from "next/link";

const informationItems = [
  {
    title: "Personal Data",
    description:
      "Information such as your name, email address and account details.",
    icon: UserCheck,
  },
  // {
  //   title: "Technical Data",
  //   description:
  //     "Information automatically collected when you use our website, such as IP address, browser type, operating system, access times, and device information.",
  //   icon: Database,
  // },
  // {
  //   title: "Extension Usage Data",
  //   description:
  //     "Data about which tools you access through Itolz and the duration of your sessions. This helps us provide the service and manage free-tier limits.",
  //   icon: Eye,
  // },
  {
    title: "Cookies and Local Storage",
    description:
      "Our browser extension may temporarily store technical session data required to provide supported features and improve the user experience.",
    icon: Cookie,
  },
  {
    title: "Financial Data",
    description:
      "Payment information is handled by third-party payment providers. We store little to no complete financial information ourselves.",
    icon: Lock,
  },
];

const usageItems = [
  "Create and manage your account.",
  "Process payments and subscriptions.",
  "Provide access to free and paid tools.",
  "Deliver ads for free-tier users.",
  "Monitor usage and improve the service.",
  "Notify you about updates to our services or policies.",
  "Prevent fraud, abuse, and unauthorized activity.",
  "Respond to support requests.",
];

const sharingItems = [
  "With your consent.",
  "With service providers for payments, analytics, advertising, hosting, and support.",
  "When required for legal compliance, fraud prevention, safety, or protection of our rights.",
];

const rightsItems = [
  "Request access to the personal information we hold about you.",
  "Request correction of inaccurate personal information.",
  "Request deletion of your personal information, subject to legal limits.",
  "Opt out of marketing emails using the unsubscribe link in our messages.",
];

function TextList({ items }: { items: string[] }) {
  return (
    <ul className="space-y-3">
      {items.map((item) => (
        <li
          key={item}
          className="rounded-3xl border bg-background p-4 text-sm leading-6 text-muted-foreground ring-1 ring-foreground/5"
        >
          {item}
        </li>
      ))}
    </ul>
  );
}

export default function PrivacyPolicy() {
  return (
    <main className="flex flex-col gap-4 md:gap-6 lg:gap-8 md:pb-6 pb-4">
      <Stagger>
        <Card className="relative overflow-hidden md:mt-6 lg:mt-8 mt-4">

          <CardContent className="relative z-10 flex flex-col items-center justify-center px-4 py-8 text-center md:px-6 md:py-12">
            <StaggerItem>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/70 px-4 py-1.5 text-sm text-primary shadow-sm">
                <ShieldCheck className="size-4" />
                iTolz privacy
              </div>
            </StaggerItem>

            <StaggerItem>
              <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                Privacy Policy
              </h1>
            </StaggerItem>

            <StaggerItem>
              <div className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                Learn how iTolz collects, uses, protects, and manages information when you use our website, browser extension, AI tools, productivity services, streaming platforms, and digital software solutions.
              </div>
            </StaggerItem>

            <StaggerItem>
              <div className="mt-4 text-sm text-muted-foreground/80">Last Updated: June 18, 2025</div>
            </StaggerItem>
          </CardContent>
        </Card>
      </Stagger>

      <Stagger>
        <Card>
          <AnimateTitle>
            <CardHeader className="pt-4 text-center md:pt-6">
              <CardTitle className="text-xl font-semibold md:text-2xl">Introduction</CardTitle>
              <CardDescription>
                We aim to be transparent about how your information is handled.
              </CardDescription>
            </CardHeader>
          </AnimateTitle>

          <CardContent className="p-4 leading-7 text-muted-foreground md:p-6 text-center"> 
              Welcome to iTolz. We are committed to protecting your privacy and being transparent about how your information is handled.<br/>
              Our services may include access to popular digital platforms such as ChatGPT, Canva, Netflix, Spotify, Adobe Creative Cloud, and other productivity or creator-focused tools.
              By using our website, browser extension, or services, you agree to the practices described in this Privacy Policy. If you do not agree with this policy, please do not use our services.<br/>
          </CardContent>
        </Card>
      </Stagger>

      <Stagger>
        <Card>
          <AnimateTitle>
            <CardHeader className="pt-4 text-center md:pt-6">
              <CardTitle className="text-xl font-semibold md:text-2xl">Information we collect</CardTitle>
              <CardDescription>
                The main categories of information used to provide and improve the service.
              </CardDescription>
            </CardHeader>
          </AnimateTitle>

          <CardContent className="grid gap-4 p-4 md:grid-cols-2 md:p-6 lg:grid-cols-3">
            {informationItems.map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-3xl border bg-background p-4 ring-1 ring-foreground/5">
                  <item.icon className="mb-4 size-6 text-primary" />
                  <h3 className="font-semibold">{item.title}</h3>
                  <div className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</div>
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
              <Database className="mb-2 size-6 text-primary" />
              <CardTitle>How we use information</CardTitle>
            </CardHeader>
            <CardContent>
              <TextList items={usageItems} />
            </CardContent>
          </Card>
        </Stagger>

        <Stagger>
          <Card className="h-full">
            <CardHeader>
              <FileText className="mb-2 size-6 text-primary" />
              <CardTitle>Data sharing</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4">
              <div className="leading-7 text-muted-foreground">
                We do not sell or rent your personal information. We may share information only in limited situations.
              </div>
              <TextList items={sharingItems} />
            </CardContent>
          </Card>
        </Stagger>
      </section>

      <Stagger>
        <Card>
          <CardHeader className="pt-4 text-center md:pt-6">
            <CardTitle className="text-xl font-semibold md:text-2xl">Your rights and choices</CardTitle>
            <CardDescription>
              You can ask to access, correct, delete, or limit certain communications.
            </CardDescription>
          </CardHeader>

          <CardContent className="grid gap-4 p-4 md:grid-cols-2 md:p-6">
            {rightsItems.map((item) => (
              <StaggerItem key={item}>
                <div className="h-full rounded-3xl border bg-background p-4 text-sm leading-6 text-muted-foreground ring-1 ring-foreground/5">
                  {item}
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
              <ShieldCheck className="mb-2 size-6 text-primary" />
              <CardTitle>Data security</CardTitle>
            </CardHeader>
            <CardContent className="space-y-4 leading-7 text-muted-foreground">
              <div>
                We use administrative, technical, and physical safeguards to help protect your personal information.
              </div>
              <div>
                However, no method of transmission or storage is completely secure, and we cannot guarantee that information will never be accessed, disclosed, altered, or destroyed.
              </div>
            </CardContent>
          </Card>
        </Stagger>

        <Stagger>
          <Card className="h-full">
          <CardHeader>
            <Cookie className="mb-2 size-6 text-primary" />
            <CardTitle>Cookie policy</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4 leading-7 text-muted-foreground">
            <div>
                iTolz uses cookies and similar technologies to improve functionality, maintain security, remember preferences, and provide a smoother user experience.
              </div>

              <div>
                We do not use cookies or local storage to monitor personal browsing activity outside of supported iTolz services.
              </div>
          </CardContent>
        </Card>
        </Stagger>
      </section>

      <Stagger>
        <Card>
          <CardHeader>
            <Mail className="mb-2 size-6 text-primary" />
            <CardTitle>Policy updates and contact</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4 leading-7 text-muted-foreground">
            <div>
              We may update this Privacy Policy from time to time. When changes are made, we will update the &quot;Last Updated&quot; date on this page.
            </div>
            <div>
              If you have questions or comments about this Privacy Policy, contact us at{" "}
              <Link
                href="mailto:support@itolz.com"
                className="font-semibold text-primary underline-offset-4 hover:underline"
              >
                support@itolz.com
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
