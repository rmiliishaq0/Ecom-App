import { FileCheck, LockKeyhole, Mail, RefreshCw, ShieldAlert, WalletCards, Zap } from "lucide-react";
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

const serviceItems = [
  {
    title: "Subscription Plans",
    description:
      "We offer different subscription packs and durations, as shown on our website.",
    icon: WalletCards,
  },
  {
    title: "Free Tier",
    description:
      "We may offer a free, ad-supported service tier with temporary access to selected tools, such as limited 20-minute sessions.",
    icon: Zap,
  },
];

const accountItems = [
  "Provide accurate, current, and complete account information.",
  "Keep your password secure and accept responsibility for activity on your account.",
  "Notify us promptly if you discover unauthorized access or a security issue.",
];

// const extensionItems = [
//   "You may need to download and install the Itolz browser extension to use parts of the service.",
//   "The extension may interact with cookies and local storage where required to provide access to supported tools.",
//   "You grant the extension permission to perform the actions needed to deliver the service.",
//   "You must not reverse-engineer, decompile, modify, or misuse the extension.",
// ];
const extensionItems = [
  "Some features may require additional setup or supported browser tools.",
  "Technical session data may be temporarily stored to maintain service functionality and user preferences.",
  "You agree not to misuse, modify, disrupt, or interfere with the platform or related services.",
  "Unauthorized access attempts, abuse, or harmful activity are strictly prohibited.",
];

const disclaimerItems = [
  {
    title: "No Affiliation",
    description:
      "Itolz is an independent service and is not affiliated with, endorsed by, or sponsored by the providers of third-party tools.",
  },
  {
    title: "Third-Party Terms",
    description:
      "Accessing third-party tools through Itolz may be subject to the terms and policies of those third-party providers.",
  },
  {
    title: "Service Disruption",
    description:
      "Third-party providers may change their systems, limit access, or take actions that affect availability. We do not guarantee uninterrupted service.",
  },
  {
    title: "As-Is Service",
    description:
      'The service is provided on an "as is" and "as available" basis without guarantees that it will always be uninterrupted, secure, or error-free.',
  },
];

const prohibitedItems = [
  "Share your Itolz account credentials with others.",
  "Attempt to access private, master, or unauthorized account credentials.",
  "Use the service or third-party tools for illegal, abusive, harmful, or fraudulent activity.",
  "Interfere with, damage, or attempt to bypass the security of the service.",
];

const paymentItems = [
  {
    title: "Payments",
    description:
      "You agree to pay all fees for subscriptions you purchase. Payments are handled through third-party payment processors.",
  },
  // {
  //   title: "Renewals",
  //   description:
  //     "Subscriptions may renew automatically unless canceled before the end of the current billing period.",
  //},
  {
    title: "Refunds",
    description:
      "Refunds are handled according to our refund policy and may be reviewed on a case-by-case basis.",
  },
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

export default function TermsAndConditions() {
  return (
    <main className="flex flex-col gap-4 py-4 md:gap-6 md:py-6 lg:gap-8">
      <Stagger>
        <Card className="relative overflow-hidden">

          <CardContent className="relative z-10 flex flex-col items-center justify-center px-4 py-8 text-center md:px-6 md:py-12">
            <StaggerItem>
              <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-background/70 px-4 py-1.5 text-sm text-primary shadow-sm">
                <FileCheck className="size-4" />
                iTolz terms
              </div>
            </StaggerItem>

            <StaggerItem>
              <h1 className="mt-4 max-w-3xl text-3xl font-bold leading-tight tracking-tight md:text-5xl">
                Terms and Conditions
              </h1>
            </StaggerItem>

            <StaggerItem>
              <div className="mt-4 max-w-2xl text-sm leading-7 text-muted-foreground md:text-base">
                The rules, responsibilities, and limitations that apply when you create an account, purchase a subscription, or use the iTolz website, browser extension, and services.
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
              <CardTitle className="text-xl font-semibold md:text-2xl">Agreement to terms</CardTitle>
              <CardDescription>
                By using iTolz, you accept these Terms and Conditions.
              </CardDescription>
            </CardHeader>
          </AnimateTitle>

          <CardContent className="space-y-4 p-4 leading-7 text-muted-foreground md:p-6 text-center">
              By creating an account, purchasing a subscription, or using iTolz, you agree to be bound by these Terms and Conditions.<br/>
              If you do not agree to these Terms, you may not use the service.
          </CardContent>
        </Card>
      </Stagger>

      <Stagger>
        <Card>
          <AnimateTitle>
            <CardHeader className="pt-4 text-center md:pt-6">
              <CardTitle className="text-xl font-semibold md:text-2xl">Description of service</CardTitle>
              <CardDescription>
                Affordable access to AI tools, productivity platforms, streaming services, creator software, and digital solutions.
              </CardDescription>
            </CardHeader>
          </AnimateTitle>

          <CardContent className="space-y-4 p-4 md:p-6">
            <div className="leading-7 text-muted-foreground">
              iTolz provides access to selected AI tools, productivity platforms, creator software, streaming services, and digital solutions through flexible subscription plans.
            </div>

            <div className="grid gap-4 md:grid-cols-2">
              {serviceItems.map((item) => (
                <StaggerItem key={item.title}>
                  <div className="h-full rounded-3xl border bg-background p-4 ring-1 ring-foreground/5">
                    <item.icon className="mb-4 size-6 text-primary" />
                    <h3 className="font-semibold">{item.title}</h3>
                    <div className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</div>
                  </div>
                </StaggerItem>
              ))}
            </div>
          </CardContent>
        </Card>
      </Stagger>

      <section className="grid gap-4 md:grid-cols-2 md:gap-6">
        <Stagger>
          <Card className="h-full">
            <CardHeader>
              <LockKeyhole className="mb-2 size-6 text-primary" />
              <CardTitle>User accounts</CardTitle>
            </CardHeader>
            <CardContent>
              <TextList items={accountItems} />
            </CardContent>
          </Card>
        </Stagger>

        <Stagger>
          <Card className="h-full">
            <CardHeader>
              <Zap className="mb-2 size-6 text-primary" />
              <CardTitle>Platform Access</CardTitle>
            </CardHeader>
            <CardContent>
              <TextList items={extensionItems} />
            </CardContent>
          </Card>
        </Stagger>
      </section>

      <Stagger>
        <Card>
          <CardHeader className="pt-4 text-center md:pt-6">
            <CardTitle className="text-xl font-semibold md:text-2xl">Important disclaimers</CardTitle>
            <CardDescription>
              Availability and third-party access can change outside of iTolz control.
            </CardDescription>
          </CardHeader>

          <CardContent className="grid gap-4 p-4 md:grid-cols-2 md:p-6">
            {disclaimerItems.map((item) => (
              <StaggerItem key={item.title}>
                <div className="h-full rounded-3xl border bg-background p-4 ring-1 ring-foreground/5">
                  <ShieldAlert className="mb-3 size-5 text-primary" />
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
              <ShieldAlert className="mb-2 size-6 text-primary" />
              <CardTitle>Prohibited activities</CardTitle>
            </CardHeader>
            <CardContent>
              <TextList items={prohibitedItems} />
            </CardContent>
          </Card>
        </Stagger>

        <Stagger>
          <Card className="h-full">
            <CardHeader>
              <WalletCards className="mb-2 size-6 text-primary" />
              <CardTitle>Payments, cancellations, and refunds</CardTitle>
            </CardHeader>
            <CardContent className="space-y-3">
              {paymentItems.map((item) => (
                <div key={item.title} className="rounded-3xl border bg-background p-4 ring-1 ring-foreground/5">
                  <h3 className="font-semibold">{item.title}</h3>
                  <div className="mt-2 text-sm leading-6 text-muted-foreground">{item.description}</div>
                </div>
              ))}
            </CardContent>
          </Card>
        </Stagger>
      </section>

      <section className="grid gap-4 md:grid-cols-2 md:gap-6">
        <Stagger>
          <Card className="h-full">
            <CardHeader>
              <RefreshCw className="mb-2 size-6 text-primary" />
              <CardTitle>Termination</CardTitle>
            </CardHeader>
            <CardContent className="leading-7 text-muted-foreground">
              <div>
                We may suspend or terminate your access to the service at any time, with or without notice, including if you violate these Terms. After termination, your right to use the service ends immediately.
              </div>
            </CardContent>
          </Card>
        </Stagger>

        <Stagger>
          <Card className="h-full">
            <CardHeader>
              <ShieldAlert className="mb-2 size-6 text-primary" />
              <CardTitle>Limitation of liability</CardTitle>
            </CardHeader>
            <CardContent className="leading-7 text-muted-foreground">
              <div>
                To the fullest extent permitted by law, iTolz will not be liable for indirect, incidental, special, consequential, or punitive damages, including loss of profits, data, access, or other intangible losses related to your use of the service.
              </div>
            </CardContent>
          </Card>
        </Stagger>
      </section>

      <Stagger>
        <Card>
          <CardHeader>
            <Mail className="mb-2 size-6 text-primary" />
            <CardTitle>Changes and contact</CardTitle>
          </CardHeader>

          <CardContent className="space-y-4 leading-7 text-muted-foreground">
            <div>
              We may modify these Terms at any time. Your continued use of the service after changes are posted means you accept the updated Terms.
            </div>
            <div>
              If you have questions about these Terms, contact us at{" "}
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
