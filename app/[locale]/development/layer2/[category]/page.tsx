import { Bitcoin, ExternalLink } from "lucide-react";
import Image from "next/image";
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
import { Layer2Category, LocaleType } from "@/types";

import { DevNav } from "../../_components/dev-nav";
import { layer2DevResources } from "../_resources";

type Props = {
  params: Promise<{ locale: LocaleType; category: Layer2Category }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.pages" });

  return {
    title: t("developmentLayer2.title"),
    description: t("developmentLayer2.description"),
  };
}

export default async function Layer2Page({ params }: Props) {
  const { locale, category } = await params;
  // Enable static rendering
  setRequestLocale(locale);
  const t = await getTranslations("developmentLayer2");

  const layer2Categories: Layer2Categories = [
    {
      label: t(categoryTitles["libraries-sdks"]),
      value: "libraries-sdks",
    },
    {
      label: t(categoryTitles["apis-payments"]),
      value: "apis-payments",
    },
    {
      label: t(categoryTitles["lsps-enterprise"]),
      value: "lsps-enterprise",
    },
    {
      label: t(categoryTitles["dashboards-monitoring"]),
      value: "dashboards-monitoring",
    },
    {
      label: t(categoryTitles["routing-liquidity"]),
      value: "routing-liquidity",
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
        <div className="container mx-auto">
          <DevNav activeLink="layer2" />
          <div className="hidden items-center gap-4 lg:flex">
            <Bitcoin className="text-primary h-12 w-12" />
            <div>
              <h1 className="from-primary to-primary bg-gradient-to-r via-yellow-400 bg-clip-text text-3xl font-bold text-transparent">
                {t("title")}
              </h1>
              <p className="text-muted-foreground mt-2">{t("description")}</p>
            </div>
          </div>
        </div>
      </section>
      <div className="flex">
        <CategorySidebar
          title={t("categories.title")}
          field="layer2"
          categories={layer2Categories}
          selectedCategory={category}
          className="border-border sticky top-20 mt-8 hidden self-start border-r px-4 lg:block"
        />
        <section className="max-w-7xl flex-1 px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="my-8 flex items-center justify-between">
            <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">
              {t(categoryTitles[category])}
            </h2>
            <div className="lg:hidden">
              <CategorySelect
                field="layer2"
                categories={layer2Categories}
                placeholder={t("categories.title")}
              />
            </div>
          </div>
          <ul className="mb-8 grid grid-cols-1 gap-8 sm:grid-cols-2">
            {layer2DevResources[locale][category]?.map((resource) => (
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
                className="object-contain"
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
              <CardDescription className="mt-2 line-clamp-3">
                {description}
              </CardDescription>
            </div>
          </div>
        </CardHeader>
      </Card>
    </Link>
  );
}

const categoryTitles: Record<Layer2Category, string> = {
  "libraries-sdks": "categories.librariesSdks",
  "lsps-enterprise": "categories.lspsEnterprise",
  "dashboards-monitoring": "categories.dashboardsMonitoring",
  "routing-liquidity": "categories.routingLiquidity",
  "apis-payments": "categories.apisPayments",
  research: "categories.research",
  wallets: "categories.wallets",
};

type Layer2Categories = {
  label: string;
  value: Layer2Category;
}[];
