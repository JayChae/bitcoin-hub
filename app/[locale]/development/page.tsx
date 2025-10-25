import {
  ArrowRight,
  BanknoteArrowDown,
  Bitcoin,
  Book,
  BookOpen,
  Building2,
  ChartNetwork,
  Code,
  CodeXml,
  FileQuestionMark,
  Layers2,
  LucideIcon,
  Pickaxe,
  Route,
  School,
  ShieldCheck,
  ToolCase,
  Zap,
} from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import Hero from "@/components/hero";
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
export default async function DevelopmentPage({ params }: Props) {
  const { locale } = await params;
  // Enable static rendering
  setRequestLocale(locale);
  const t = await getTranslations("development");
  const developmentLinks: DevelopmentLink[] = [
    {
      href: "/development/bitcoin?category=libraries-sdks",
      label: t("developmentLinks.bitcoin"),
    },
    {
      href: "/development/lightning?category=libraries-sdks",
      label: t("developmentLinks.lightning"),
    },
    {
      href: "/development/education?category=guides-tutorials",
      label: t("developmentLinks.education"),
    },
  ];
  // Bitcoin resources with translations
  const bitcoinResources: Resource[] = [
    {
      title: t("resources.bitcoin.items.librariesSdks.title"),
      description: t("resources.bitcoin.items.librariesSdks.description"),
      icon: CodeXml,
      link: "/development/bitcoin/libraries-sdks",
    },
    {
      title: t("resources.bitcoin.items.apisPayments.title"),
      description: t("resources.bitcoin.items.apisPayments.description"),
      icon: BanknoteArrowDown,
      link: "/development/bitcoin/apis-payments",
    },
    {
      title: t("resources.bitcoin.items.utilities.title"),
      description: t("resources.bitcoin.items.utilities.description"),
      icon: Pickaxe,
      link: "/development/bitcoin/utilities",
    },
    {
      title: t("resources.bitcoin.items.layer2s.title"),
      description: t("resources.bitcoin.items.layer2s.description"),
      icon: Layers2,
      link: "/development/bitcoin/l2s-smart-contracts",
    },
  ];

  // Lightning resources with translations
  const lightningResources: Resource[] = [
    {
      title: t("resources.lightning.items.librariesSdks.title"),
      description: t("resources.lightning.items.librariesSdks.description"),
      icon: ToolCase,
      link: "/development/lightning/libraries-sdks",
    },
    {
      title: t("resources.lightning.items.lspsEnterprise.title"),
      description: t("resources.lightning.items.lspsEnterprise.description"),
      icon: Building2,
      link: "/development/lightning/lsps-enterprise",
    },
    {
      title: t("resources.lightning.items.dashboardsMonitoring.title"),
      description: t(
        "resources.lightning.items.dashboardsMonitoring.description",
      ),
      icon: ChartNetwork,
      link: "/development/lightning/dashboards-monitoring",
    },
    {
      title: t("resources.lightning.items.routingLiquidity.title"),
      description: t("resources.lightning.items.routingLiquidity.description"),
      icon: Route,
      link: "/development/lightning/routing-liquidity",
    },
  ];

  // Education resources with translations
  const educationResources: Resource[] = [
    {
      title: t("resources.education.items.guidesTutorials.title"),
      description: t("resources.education.items.guidesTutorials.description"),
      icon: FileQuestionMark,
      link: "/development/education/guides-tutorials",
    },
    {
      title: t("resources.education.items.classesCourses.title"),
      description: t("resources.education.items.classesCourses.description"),
      icon: School,
      link: "/development/education/classes-courses",
    },
    {
      title: t("resources.education.items.certifications.title"),
      description: t("resources.education.items.certifications.description"),
      icon: ShieldCheck,
      link: "/development/education/developer-certifications",
    },
    {
      title: t("resources.education.items.books.title"),
      description: t("resources.education.items.books.description"),
      icon: Book,
      link: "/development/education/developer-books",
    },
  ];

  return (
    <div className="relative">
      <Hero
        title={t("title")}
        description={t("description")}
        Icon={<Code className="text-primary size-10 sm:size-16" />}
      >
        <DevelopmentLinks
          className="mt-12"
          developmentLinks={developmentLinks}
        />
      </Hero>

      {/* Bitcoin Resources Section */}
      <Section
        title={t("resources.bitcoin.sectionTitle")}
        resources={bitcoinResources}
        buttonLink="/development/bitcoin"
        buttonText={t("resources.bitcoin.exploreAll")}
        icon={Bitcoin}
        className="from-secondary/10 bg-gradient-to-r to-transparent"
      />

      {/* Lightning Resources Section */}
      <Section
        title={t("resources.lightning.sectionTitle")}
        resources={lightningResources}
        buttonLink="/development/lightning"
        buttonText={t("resources.lightning.exploreAll")}
        icon={Zap}
        className="bg-gradient-to-l from-yellow-500/10 to-transparent"
      />

      {/* Education Resources Section */}
      <Section
        title={t("resources.education.sectionTitle")}
        resources={educationResources}
        buttonLink="/development/education"
        buttonText={t("resources.education.exploreAll")}
        icon={BookOpen}
        className="bg-gradient-to-r from-teal-500/10 to-transparent"
      />
    </div>
  );
}

type SectionProps = {
  title: string;
  resources: Resource[];
  buttonLink: string;
  buttonText: string;
  icon: LucideIcon;
  className?: string;
};
function Section({
  title,
  resources,
  buttonLink,
  buttonText,
  icon,
  className,
}: SectionProps) {
  const Icon = icon;
  return (
    <section className={cn("px-4 py-24 sm:px-6 lg:px-8", className)}>
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-12">
        <div className="flex w-full items-center justify-center gap-3">
          <Icon className="text-primary size-8" />
          <h2 className="text-3xl font-bold">{title}</h2>
        </div>

        <div className="mx-auto grid max-w-6xl grid-cols-2 gap-6">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <Link href={resource.link} key={resource.link}>
                <Card className="bg-card border-border hover:border-primary/50 h-full transition-colors">
                  <CardHeader>
                    <Icon className="text-primary mb-2 size-8 sm:size-10" />
                    <CardTitle className="text-sm sm:text-lg">
                      {resource.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="line-clamp-2 text-xs sm:text-sm">
                      {resource.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              </Link>
            );
          })}
        </div>
        <div className="flex justify-center">
          <Link href={buttonLink}>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:text-primary hover:bg-transparent hover:underline"
            >
              {buttonText}
              <ArrowRight className="ml-1 size-4" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}

type DevelopmentLinksProps = {
  className?: string;
  developmentLinks: DevelopmentLink[];
};
function DevelopmentLinks({
  className,
  developmentLinks,
}: DevelopmentLinksProps) {
  return (
    <ul className={cn("flex flex-wrap justify-center gap-4", className)}>
      {developmentLinks.map((developmentLink) => (
        <li key={developmentLink.href}>
          <Link href={developmentLink.href}>
            <Button
              size="lg"
              variant="outline"
              className="border-primary text-primary hover:text-primary hover:bg-transparent hover:underline"
            >
              {developmentLink.label}
              <ArrowRight className="ml-1 size-4" />
            </Button>
          </Link>
        </li>
      ))}
    </ul>
  );
}

type Resource = {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
};

type DevelopmentLink = {
  href: string;
  label: string;
};
