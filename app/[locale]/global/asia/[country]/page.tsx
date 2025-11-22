import { ExternalLink } from "lucide-react";
import Image from "next/image";
import { getTranslations, setRequestLocale } from "next-intl/server";

import {
  Card,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { AsiaCountry, AsiaResources, LocaleType, OrganizationCategory } from "@/types";

import { CountrySelect } from "../../_components/country-select";
import { CountrySidebar } from "../../_components/country-sidebar";
import { categories } from "../../_constants";
import { asiaResources } from "../_resources";

type Props = {
  params: Promise<{ locale: LocaleType; country: AsiaCountry }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.pages" });

  return {
    title: t("globalAsia.title"),
    description: t("globalAsia.description"),
  };
}

export async function generateStaticParams() {
  const countries: AsiaCountry[] = [
    "japan",
    "korea",
    "taiwan",
    "indonesia",
    "india",
  ];
  return countries.map((country) => ({ country }));
}

export default async function AsiaCountryPage({ params }: Props) {
  const { locale, country } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("globalAsia");

  const asiaCountries: AsiaCountries = [
    { label: t("countries.japan"), value: "japan" },
    { label: t("countries.korea"), value: "korea" },
    { label: t("countries.taiwan"), value: "taiwan" },
    { label: t("countries.indonesia"), value: "indonesia" },
    { label: t("countries.india"), value: "india" },
  ];

  const countryData = asiaResources[locale][country];

  return (
    <div className="relative h-full">
      {/* Header */}
      <section className="border-border relative hidden border-b px-4 py-6 lg:block lg:px-8 lg:pt-8 lg:pb-10">
        <div className="container mx-auto">
          <div className="flex items-center gap-4">
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
        <CountrySidebar
          title={t("countriesTitle")}
          countries={asiaCountries}
          selectedCountry={country}
          className="border-border sticky top-20 mt-8 hidden self-start border-r px-4 lg:block"
        />
        <section className="max-w-7xl flex-1 px-4 sm:px-6 md:px-8 lg:px-10">
          <div className="my-8 flex items-center justify-between">
            <h2 className="text-xl font-bold sm:text-2xl lg:text-3xl">
              {t(`countries.${country}`)}
            </h2>
            <div className="lg:hidden">
              <CountrySelect
                countries={asiaCountries}
                placeholder={t("countriesTitle")}
              />
            </div>
          </div>
          <ResourceList
            countryData={countryData}
            categories={categories}
            t={t}
          />
        </section>
      </div>
    </div>
  );
}

type AsiaCountries = {
  label: string;
  value: AsiaCountry;
}[];

type ResourceListProps = {
  countryData: AsiaResources[AsiaCountry];
  categories: OrganizationCategory[];
  t: Awaited<ReturnType<typeof getTranslations<"globalAsia">>>;
};

function ResourceList({ countryData, categories, t }: ResourceListProps) {
  const hasResources = categories.some(
    (cat) => countryData[cat] && countryData[cat].length > 0,
  );

  if (!hasResources) {
    return (
      <div className="text-muted-foreground flex flex-col items-center justify-center py-16 text-center">
        <h3 className="mb-2 text-xl font-semibold">{t("emptyState.title")}</h3>
        <p>{t("emptyState.description")}</p>
      </div>
    );
  }

  return (
    <div className="mb-8 space-y-12">
      {categories.map((category) => {
        const resources = countryData[category];
        if (!resources || resources.length === 0) return null;

        return (
          <div key={category}>
            <h3 className="mb-6 text-lg font-semibold sm:text-xl">
              {t(`categories.${category}`)}
            </h3>
            <ul className="grid grid-cols-1 gap-8 sm:grid-cols-2">
              {resources.map((resource) => (
                <li key={resource.name} className="h-full">
                  <ResourceCard
                    href={resource.url}
                    logo={resource.logo}
                    name={resource.name}
                    description={resource.description}
                  />
                </li>
              ))}
            </ul>
          </div>
        );
      })}
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
            <div className="relative flex size-14 flex-shrink-0 items-center justify-center overflow-hidden rounded-lg sm:size-16 lg:size-20">
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
