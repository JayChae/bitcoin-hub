import { ArrowRight, Bitcoin, BookOpen, MapPin, Zap } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { LocaleType } from "@/types";

type Props = {
  params: Promise<{ locale: LocaleType }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  // Enable static rendering
  setRequestLocale(locale);
  const t = await getTranslations("landing");
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="flex h-[calc(100dvh-4rem)] items-center px-4 sm:block sm:h-fit sm:py-48 lg:px-8">
        <div className="mx-auto mb-24 max-w-4xl text-center">
          <div className="mb-6 flex justify-center">
            <Bitcoin className="text-primary h-20 w-20 animate-pulse" />
          </div>
          <h1 className="from-primary to-secondary mb-6 bg-gradient-to-r bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
            {t("title")}
          </h1>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-base sm:text-xl">
            {t("description")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about" locale={locale}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                Learn More
              </Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Development Resources Section */}
      <Section
        title={t("development.title")}
        description={t("development.description")}
        className="from-secondary/10 bg-gradient-to-r to-transparent"
      >
        <ul className="flex flex-wrap justify-center gap-4">
          {DEV_RESOURCES.map((resource) => {
            const Icon = resource.icon;
            return (
              <li key={resource.id}>
                <Link href={resource.link} locale={locale}>
                  <Card className="hover:border-primary/50 h-full w-full max-w-2xs cursor-pointer gap-4 text-center transition-colors sm:gap-6">
                    <CardHeader>
                      <Icon className="text-primary mx-auto mb-2 size-10 sm:size-12 lg:size-14" />
                      <CardTitle>{t(resource.title)}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>
                        {t(resource.description)}
                      </CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              </li>
            );
          })}
        </ul>

        <div className="mt-12 flex justify-center">
          <ExploreAllButton href="/development" text={t("exploreAll")} />
        </div>
      </Section>

      {/* Global Centers & Organizations Section */}
      <Section
        title={t("global.title")}
        description={t("global.description")}
        className="bg-gradient-to-l from-yellow-500/10 to-transparent"
      >
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {CONTINENTS.map((continent) => {
            return (
              <li key={continent.id} className="w-full max-w-3xs">
                <Link
                  href={continent.link}
                  locale={locale}
                  className="group block"
                >
                  <Card className="hover:border-primary/50 relative overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${continent.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                    />
                    <CardHeader className="text-center">
                      <div className="bg-primary/5 group-hover:bg-primary/10 mx-auto rounded-full transition-colors">
                        <MapPin className="text-primary size-6 sm:size-8 lg:size-10" />
                      </div>
                      <CardTitle className="text-xl">
                        {t(continent.title)}
                      </CardTitle>
                    </CardHeader>
                  </Card>
                </Link>
              </li>
            );
          })}
        </ul>
        <div className="mt-12 flex justify-center">
          <ExploreAllButton href="/global" text={t("exploreAll")} />
        </div>
      </Section>

      {/* Internship Section */}
      <Section
        title={t("internship.title")}
        description={t("internship.description")}
        className=""
      >
        <div className="flex flex-wrap justify-center gap-4">
          <Link href="/internship">
            <Button
              size="lg"
              className="bg-primary hover:bg-primary/90 text-primary-foreground"
            >
              {t("internship.details")}
            </Button>
          </Link>
        </div>
      </Section>
    </div>
  );
}

type SectionProps = {
  children: ReactNode;
  className?: string;
  title: string;
  description: string;
};

function Section({ children, className, title, description }: SectionProps) {
  return (
    <section className={cn("px-4 py-32 sm:px-6 lg:px-8", className)}>
      <div className="mx-auto max-w-4xl">
        <div className="mb-12 text-center">
          <h2 className="mb-4 text-3xl font-bold">{title}</h2>
          <p className="text-muted-foreground mx-auto max-w-2xl">
            {description}
          </p>
        </div>
        {children}
      </div>
    </section>
  );
}

function ExploreAllButton({ href, text }: { href: string; text: string }) {
  return (
    <Link href={href} className="">
      <Button
        size="lg"
        variant="outline"
        className="border-primary text-primary hover:text-primary hover:bg-transparent hover:underline"
      >
        {text}
        <ArrowRight className="h-4 w-4" />
      </Button>
    </Link>
  );
}

const DEV_RESOURCES = [
  {
    id: "bitcoin",
    icon: Bitcoin,
    title: "development.resources.bitcoin.title",
    description: "development.resources.bitcoin.description",
    link: "/development/bitcoin",
  },
  {
    id: "lightning",
    icon: Zap,
    title: "development.resources.lightning.title",
    description: "development.resources.lightning.description",
    link: "/development/lightning-network",
  },
  {
    id: "education",
    icon: BookOpen,
    title: "development.resources.education.title",
    description: "development.resources.education.description",
    link: "/development/education",
  },
] as const;

const CONTINENTS = [
  {
    id: "asia",
    title: "global.continents.asia",
    color: "from-red-500/20 to-red-500/5",
    link: "/global/asia",
  },
  {
    id: "europe",
    title: "global.continents.europe",
    color: "from-blue-500/20 to-blue-500/5",
    link: "/global/europe",
  },
  {
    id: "africa",
    title: "global.continents.africa",
    color: "from-yellow-500/20 to-yellow-500/5",
    link: "/global/africa",
  },
  {
    id: "northAmerica",
    title: "global.continents.northAmerica",
    color: "from-green-500/20 to-green-500/5",
    link: "/global/north-america",
  },
  {
    id: "southAmerica",
    title: "global.continents.southAmerica",
    color: "from-purple-500/20 to-purple-500/5",
    link: "/global/south-america",
  },
  {
    id: "oceania",
    title: "global.continents.oceania",
    color: "from-teal-500/20 to-teal-500/5",
    link: "/global/oceania",
  },
] as const;
