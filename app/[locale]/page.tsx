import {
  ArrowRight,
  Bitcoin,
  BookOpen,
  BookText,
  Globe,
  MapPin,
  User,
  Zap,
} from "lucide-react";
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
      {/* <section className="flex h-[calc(100dvh-4rem)] items-center px-4 sm:block sm:h-fit sm:py-48 lg:px-8">
        <div className="mx-auto mb-16 max-w-4xl text-center sm:mb-0">
          <div className="mb-6 flex justify-center">
            <Bitcoin className="text-primary h-20 w-20 animate-pulse" />
          </div>
          <h1 className="from-primary to-secondary mb-6 bg-gradient-to-r bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
            {t("hero.title")}
          </h1>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-base sm:text-xl">
            {t("hero.description")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about" locale={locale}>
              <Button
                size="lg"
                className="bg-primary hover:bg-primary/90 text-primary-foreground"
              >
                {t("hero.button1")}
              </Button>
            </Link>

            <Link href="/development" className="">
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:text-primary hover:bg-transparent hover:underline"
              >
                {t("hero.button2")}
                <ArrowRight className="h-4 w-4" />
              </Button>
            </Link>
          </div>
        </div>
      </section> */}
      <Hero
        description={t("hero.description")}
        button1={t("hero.button1")}
        button2={t("hero.button2")}
      />

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

      {/* Education Resources Section */}
      <Section
        title={t("education.title")}
        description={t("education.description")}
        className="bg-gradient-to-l from-yellow-500/10 to-transparent"
      >
        <ul className="flex flex-wrap justify-center gap-4">
          {EDUCATION_RESOURCES.map((resource) => {
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
          <ExploreAllButton href="/education" text={t("exploreAll")} />
        </div>
      </Section>

      {/* Global Centers & Organizations Section */}
      <Section
        title={t("global.title")}
        description={t("global.description")}
        className="bg-gradient-to-r from-blue-500/10 to-transparent"
      >
        <ul className="grid grid-cols-2 gap-4 md:grid-cols-3">
          {CONTINENTS.map((continent) => {
            return (
              <li key={continent.id}>
                <Link
                  href={continent.link}
                  locale={locale}
                  className="group block h-full"
                >
                  <Card className="hover:border-primary/50 relative h-full w-full max-w-3xs overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${continent.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                    />
                    <CardHeader className="text-center">
                      <div className="bg-primary/5 group-hover:bg-primary/10 mx-auto rounded-full transition-colors">
                        <MapPin className="text-primary size-6 sm:size-8 lg:size-10" />
                      </div>
                      <CardTitle className="text-sm sm:text-lg md:text-xl">
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

type HeroProps = {
  description: string;
  button1: string;
  button2: string;
};

function Hero({ description, button1, button2 }: HeroProps) {
  return (
    <section className="relative flex min-h-[calc(100vh-4rem)] items-center justify-center overflow-hidden">
      <div className="container mx-auto h-full px-4 sm:px-6 lg:px-8">
        <div className="grid h-full items-center gap-8 py-12 lg:grid-cols-12">
          {/* Left - Main Content */}
          <div className="space-y-10 lg:col-span-7">
            <div className="flex flex-col items-center justify-center gap-6 lg:items-start">
              {/* Title and Mobile Visual Element */}
              <div className="flex items-center justify-center gap-4 lg:block">
                <h1 className="text-5xl leading-[0.9] font-black tracking-tighter sm:text-7xl lg:text-8xl xl:text-9xl">
                  BITCOIN
                  <br />
                  <span className="from-primary to-secondary bg-gradient-to-r bg-clip-text font-bold text-transparent">
                    EDUCATION
                  </span>
                  <br />
                  HUB
                </h1>

                {/* Mobile Visual Element */}
                <div className="relative flex-shrink-0 lg:hidden">
                  <div className="relative aspect-square w-30 md:w-36">
                    {/* Background Shapes */}
                    <div className="bg-primary/10 absolute inset-0 rotate-12" />
                    <div className="bg-secondary/10 absolute inset-0 translate-x-2 translate-y-2 -rotate-6" />

                    {/* Main Icon */}
                    <div className="bg-background border-foreground absolute inset-2 flex items-center justify-center border-2">
                      <Bitcoin className="text-primary h-12 w-12 md:h-16 md:w-16" />
                    </div>

                    {/* Floating Elements */}
                    <div className="bg-secondary border-foreground absolute -top-2 -right-2 rotate-12 border p-2">
                      <Zap className="text-background h-3 w-3 md:h-4 md:w-4" />
                    </div>
                    <div className="bg-primary border-foreground absolute -bottom-2 -left-2 -rotate-12 border p-2">
                      <Globe className="text-background h-3 w-3 md:h-4 md:w-4" />
                    </div>
                  </div>
                </div>
              </div>

              <p className="text-muted-foreground text-base leading-relaxed sm:text-lg md:text-xl">
                {description}
              </p>
            </div>

            <div className="flex flex-wrap justify-center gap-4 lg:justify-start">
              <Link href="/about">
                <Button
                  size="lg"
                  className="bg-primary hover:bg-primary/90 text-primary-foreground"
                >
                  {button1}
                </Button>
              </Link>
              {/* <Link href="/development">
                <Button
                  size="lg"
                  variant="outline"
                  className="hover:bg-foreground hover:text-background h-14 rounded-none border-2 px-8 text-base font-bold"
                >
                  {button2}
                </Button>
              </Link> */}

              <ExploreAllButton href="/development" text={button2} />
            </div>

            {/* Stats */}
            {/* <div className="grid max-w-xl grid-cols-3 gap-8 pt-8">
              <div>
                <div className="text-primary text-4xl font-black">130+</div>
                <div className="text-muted-foreground mt-1 text-sm font-medium">
                  글로벌 네트워크
                </div>
              </div>
              <div>
                <div className="text-secondary text-4xl font-black">50K+</div>
                <div className="text-muted-foreground mt-1 text-sm font-medium">
                  개발 자료
                </div>
              </div>
              <div>
                <div className="text-primary text-4xl font-black">6</div>
                <div className="text-muted-foreground mt-1 text-sm font-medium">
                  대륙
                </div>
              </div>
            </div> */}
          </div>

          {/* Right - Visual Element */}
          <div className="relative hidden lg:col-span-5 lg:block">
            <div className="relative mx-auto aspect-square max-w-md">
              {/* Background Shapes */}
              <div className="bg-primary/10 absolute inset-0 rotate-12" />
              <div className="bg-secondary/10 absolute inset-0 translate-x-4 translate-y-4 -rotate-6" />

              {/* Main Icon */}
              <div className="bg-background border-foreground absolute inset-8 flex items-center justify-center border-4">
                <Bitcoin className="text-primary h-32 w-32" />
              </div>

              {/* Floating Elements */}
              <div className="bg-secondary border-foreground absolute -top-4 -right-4 rotate-12 border-2 p-4">
                <Zap className="text-background h-8 w-8" />
              </div>
              <div className="bg-primary border-foreground absolute -bottom-4 -left-4 -rotate-12 border-2 p-4">
                <Globe className="text-background h-8 w-8" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
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
    link: "/development/bitcoin/libraries-sdks",
  },
  {
    id: "lightning",
    icon: Zap,
    title: "development.resources.lightning.title",
    description: "development.resources.lightning.description",
    link: "/development/lightning/libraries-sdks",
  },
  {
    id: "education",
    icon: BookOpen,
    title: "development.resources.education.title",
    description: "development.resources.education.description",
    link: "/development/education/guides-tutorials",
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

const EDUCATION_RESOURCES = [
  {
    id: "educators",
    icon: User,
    title: "education.resources.educators.title",
    description: "education.resources.educators.description",
    link: "/education/educators",
  },
  {
    id: "books",
    icon: BookOpen,
    title: "education.resources.books.title",
    description: "education.resources.books.description",
    link: "/education/books",
  },
  {
    id: "materials",
    icon: BookText,
    title: "education.resources.materials.title",
    description: "education.resources.materials.description",
    link: "/education/materials",
  },
] as const;
