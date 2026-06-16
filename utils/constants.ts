import { Zap,DollarSign, Grid, ToggleLeft, Users, Shield ,Star} from "lucide-react";
import type { Plan } from "./types";

import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook ,FaInstagram,FaTiktok } from "react-icons/fa";

export const features = [
  {
    title: "Instant Access",
    description: "Start using premium tools immediately after activation — no waiting, no setup.",
    icon: Zap
  },
  {
    title: "Save More on Every Tool",
    description: "Access premium tools at a fraction of the original price without compromising quality.",
    icon: DollarSign
  },
  {
    title: "All-in-One Platform",
    description: "Manage multiple tools and subscriptions from one simple, centralized dashboard.",
    icon: Grid
  },
  {
    title: "Flexible Access Options",
    description: "Choose between free limited access or upgrade for unlimited, ad-free experience.",
    icon: ToggleLeft
  },
  {
    title: "Built for Creators",
    description: "Perfect for freelancers, students, and entrepreneurs who rely on premium tools daily.",
    icon: Users
  },
  {
    title: "Secure & Reliable",
    description: "Stable access with continuous monitoring and fast support when you need it.",
    icon: Shield
  }
];

export const plans: Plan[] = [
  {
    id: 'starter',
    name: 'Starter AI',
    icon: Star,
    price: {
      monthly: 'Free forever',
      yearly: 'Free forever',
    },
    description:
      'Kickstart your AI journey with essential features for personal projects.',
    features: [
      '1,000 AI generations / month',
      'Basic AI model access',
      'Community support',
      'Standard processing speed',
      '500MB storage for models',
    ],
    cta: 'Start for Free',
  },
  {
    id: 'pro',
    name: 'Pro AI',
    icon: Zap,
    price: {
      monthly: 90,
      yearly: 75,
    },
    description: 'Unlock advanced AI capabilities for your growing applications.',
    features: [
      'Unlimited AI generations',
      'Premium AI model access',
      'Priority email support',
      'High-speed processing',
      '10GB storage for models',
    ],
    cta: 'Subscribe to Pro AI',
    popular: true,
  },
  {
    id: 'enterprise',
    name: 'Enterprise AI',
    icon: Shield,
    price: {
      monthly: 'Contact for pricing',
      yearly: 'Contact for pricing',
    },
    description: 'Tailored AI solutions for large-scale deployments and critical needs.',
    features: [
      'Customizable AI models',
      'Dedicated technical account manager',
      'On-premise deployment options',
      'Ultra-low latency processing',
      'Unlimited secure storage',
    ],
    cta: 'Request a Demo',
  },
];

export const AccordionData = [
  {
    value: "billing",
    trigger: "How does billing work?",
    content:
      "We offer monthly and annual subscription plans. Billing is charged at the beginning of each cycle, and you can cancel anytime. All plans include automatic backups, 24/7 support, and unlimited team members.",
  },
  {
    value: "security",
    trigger: "Is my data secure?",
    content:
      "Yes. We use end-to-end encryption, SOC 2 Type II compliance, and regular third-party security audits. All data is encrypted at rest and in transit using industry-standard protocols.",
  },
  {
    value: "integration",
    trigger: "What integrations do you support?",
    content:
      "We integrate with 500+ popular tools including Slack, Zapier, Salesforce, HubSpot, and more. You can also build custom integrations using our REST API and webhooks.",
  },
]

 export const footerLinks = [
    { name: "About", href: "/about" },
    { name: "Privacy Policy", href: "/privacy-policy" },
    { name: "Terms and Conditions", href: "/terms-and-conditions" },
    { name: "Contact", href: "/contact" },
  ];



export const socialIcons = [
    {
      name: "X",
      href: "#",
      icon:FaXTwitter
    },
    {
      name: "Facebook",
      href: "#",
      icon: FaFacebook
    },
    {
      name: "Instagram",
      href: "#",
      icon:FaInstagram
    },
    {
      name: "TikTok",
      href: "#",
      icon: FaTiktok
    },
  ];

  export const navLinks = [
        { href: "/", label: "Home" },
        { href: "/products", label: "Products" },
        { href: "/#features", label: "Features" },
        { href: "/#pricing", label: "Pricing" },
        { href: "/#faq", label: "FAQ" },
    ];
