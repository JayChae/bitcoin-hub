import { Bitcoin, ExternalLink } from "lucide-react";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { CategorySidebar } from "@/components/category-sidebar";
import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { BitcoinCategory, LocaleType } from "@/types";

import { bitcoinDevResources } from "./resources";

type Props = {
  params: Promise<{ locale: LocaleType }>;
  searchParams: Promise<{ category: BitcoinCategory }>;
};
export default async function BitcoinPage({ params, searchParams }: Props) {
  const { locale } = await params;
  const { category } = (await searchParams) ?? { category: "libraries-sdks" };
  // Enable static rendering
  setRequestLocale(locale);
  const t = await getTranslations("development");
  return (
    <div className="relative">
      {/* Header */}
      <section className="border-border relative border-b px-4 pt-8 pb-10 sm:px-6 lg:px-8">
        <div className="container mx-auto">
          <NavLinks />
          <div className="flex items-center gap-4">
            <Bitcoin className="text-primary h-12 w-12" />
            <div>
              <h1 className="from-primary to-primary bg-gradient-to-r via-yellow-400 bg-clip-text text-4xl font-bold text-transparent">
                Bitcoin Development Resources
              </h1>
              <p className="text-muted-foreground mt-2">
                Comprehensive tools and libraries for Bitcoin development
              </p>
            </div>
          </div>
        </div>
      </section>
      <div className="flex">
        <CategorySidebar
          title="Categories"
          field="bitcoin"
          categories={bitcoinCategories}
          selectedCategory={category}
          className="sticky top-20 mt-8 self-start"
        />
        <section className="max-w-7xl flex-1 px-2 sm:px-4 md:px-6 lg:px-8">
          <h2 className="my-6 text-2xl font-bold">
            {categoryTitles[category]}
          </h2>
          <ul className="grid grid-cols-2 gap-4">
            {bitcoinDevResources[category].map((resource) => (
              <li key={resource.name} className="h-full">
                <ResourceCard
                  key={resource.url}
                  href={resource.url}
                  logo={resource.logo}
                  name={resource.name}
                  description={resource.description}
                />
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
}

function NavLinks() {
  const navLinks = [
    {
      href: "/development/bitcoin?category=libraries-sdks",
      label: "Bitcoin",
    },
    {
      href: "/development/lightning?category=libraries-sdks",
      label: "Lightning",
    },
    {
      href: "/development/education?category=guides-tutorials",
      label: "Education",
    },
  ];

  return (
    <nav className="flex items-center justify-end gap-4">
      {navLinks.map((link) => {
        const isActive = link.label === "Bitcoin";
        return (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "hover:text-primary flex size-fit items-center text-sm font-medium transition-colors",
              isActive ? "text-primary" : "text-muted-foreground",
            )}
          >
            {link.label}
          </Link>
        );
      })}
    </nav>
  );
}

type ResourceCardProps = {
  href: string;
  logo: string;
  name: string;
  description: string;
};
function ResourceCard({ href, logo, name, description }: ResourceCardProps) {
  return (
    <Link
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="group block h-full"
    >
      <Card className="bg-card border-border hover:border-primary/50 h-full transition-all group-hover:shadow-lg">
        <CardHeader>
          <div className="flex flex-col items-start gap-4 lg:flex-row">
            <div className="bg-muted relative flex size-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg sm:size-16 lg:size-20">
              <Image
                src={logo}
                alt={name}
                className="object-cover"
                fill={true}
              />
            </div>
            <div className="flex-1">
              <div className="flex items-center gap-2">
                <CardTitle className="group-hover:text-primary transition-colors">
                  {name}
                </CardTitle>
                <ExternalLink className="text-muted-foreground group-hover:text-primary h-4 w-4 transition-colors" />
              </div>
              <CardDescription className="mt-2">{description}</CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}

const categoryTitles: Record<BitcoinCategory, string> = {
  "libraries-sdks": "Libraries & SDKs",
  "apis-payments": "APIs & Payments",
  "l2s-smart-contracts": "L2s & Smart Contracts",
  "node-software": "Node Software",
  "node-hardware": "Node Hardware",
  "explorers-analytics": "Explorers & Analytics",
  utilities: "Utilities",
  wallets: "Wallets",
  research: "Research",
};

type BitcoinCategories = {
  label: string;
  value: BitcoinCategory;
}[];
const bitcoinCategories: BitcoinCategories = [
  {
    label: categoryTitles["libraries-sdks"],
    value: "libraries-sdks",
  },
  {
    label: categoryTitles["apis-payments"],
    value: "apis-payments",
  },
  {
    label: categoryTitles["l2s-smart-contracts"],
    value: "l2s-smart-contracts",
  },
  {
    label: categoryTitles["node-software"],
    value: "node-software",
  },
  {
    label: categoryTitles["node-hardware"],
    value: "node-hardware",
  },
  {
    label: categoryTitles["explorers-analytics"],
    value: "explorers-analytics",
  },
  {
    label: categoryTitles["utilities"],
    value: "utilities",
  },
  {
    label: categoryTitles["wallets"],
    value: "wallets",
  },
];
