import { Bitcoin, ExternalLink } from "lucide-react";
import Image from "next/image";
import { redirect } from "next/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { CategorySelect } from "@/components/category-select";
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
  const searchParamsResolved = await searchParams;

  // searchParam이 없으면 기본 category로 리다이렉트
  if (!searchParamsResolved?.category) {
    redirect(`/${locale}/development/bitcoin?category=libraries-sdks`);
  }

  const { category } = searchParamsResolved;
  // Enable static rendering
  setRequestLocale(locale);
  const t = await getTranslations("developmentBitcoin");

  const bitcoinCategories: BitcoinCategories = [
    {
      label: t(categoryTitles["libraries-sdks"]),
      value: "libraries-sdks",
    },
    {
      label: t(categoryTitles["apis-payments"]),
      value: "apis-payments",
    },
    {
      label: t(categoryTitles["l2s-smart-contracts"]),
      value: "l2s-smart-contracts",
    },
    {
      label: t(categoryTitles["node-software"]),
      value: "node-software",
    },
    {
      label: t(categoryTitles["node-hardware"]),
      value: "node-hardware",
    },
    {
      label: t(categoryTitles["explorers-analytics"]),
      value: "explorers-analytics",
    },
    {
      label: t(categoryTitles["utilities"]),
      value: "utilities",
    },
    {
      label: t(categoryTitles["wallets"]),
      value: "wallets",
    },
    {
      label: t(categoryTitles["research"]),
      value: "research",
    },
  ];

  return (
    <div className="relative h-full">
      {/* Header */}
      <section className="border-border relative border-b px-4 py-6 lg:px-8 lg:pt-8 lg:pb-10">
        <NavLinks />
        <div className="hidden items-center gap-4 lg:flex">
          <Bitcoin className="text-primary h-12 w-12" />
          <div>
            <h1 className="from-primary to-primary bg-gradient-to-r via-yellow-400 bg-clip-text text-3xl font-bold text-transparent">
              {t("title")}
            </h1>
            <p className="text-muted-foreground mt-2">{t("description")}</p>
          </div>
        </div>
      </section>
      <div className="flex">
        <CategorySidebar
          title={t("categories.title")}
          field="bitcoin"
          categories={bitcoinCategories}
          selectedCategory={category}
          className="border-border sticky top-20 mt-8 hidden self-start border-r px-4 lg:block"
        />
        <section className="max-w-7xl flex-1 px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="my-6 flex items-center justify-between">
            <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">
              {t(categoryTitles[category])}
            </h2>
            <div className="lg:hidden">
              <CategorySelect
                field="bitcoin"
                categories={bitcoinCategories}
                placeholder={t("categories.title")}
              />
            </div>
          </div>
          <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2">
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
    <nav className="flex items-center justify-start gap-4 lg:justify-end">
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
  "libraries-sdks": "categories.librariesSdks",
  "apis-payments": "categories.apisPayments",
  "l2s-smart-contracts": "categories.l2sSmartContracts",
  "node-software": "categories.nodeSoftware",
  "node-hardware": "categories.nodeHardware",
  "explorers-analytics": "categories.explorersAnalytics",
  utilities: "categories.utilities",
  wallets: "categories.wallets",
  research: "categories.research",
};

type BitcoinCategories = {
  label: string;
  value: BitcoinCategory;
}[];
