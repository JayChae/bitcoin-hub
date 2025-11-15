import {
  ArrowRight,
  BanknoteArrowDown,
  Bitcoin,
  Building2,
  ChartNetwork,
  CodeXml,
  Layers2,
  LucideIcon,
  Pickaxe,
  Route,
  ToolCase,
  Zap,
} from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import IntroSection from "@/components/ui/intro-section";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { LocaleType } from "@/types";

type Props = {
  params: Promise<{ locale: LocaleType }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.pages" });

  return {
    title: t("development.title"),
    description: t("development.description"),
  };
}

export default async function DevelopmentPage({ params }: Props) {
  const { locale } = await params;
  // Enable static rendering
  setRequestLocale(locale);
  const t = await getTranslations("development");
  const developmentLinks: DevelopmentLink[] = [
    {
      href: "/development/layer1/libraries-sdks",
      label: t("developmentLinks.layer1"),
    },
    {
      href: "/development/layer2/libraries-sdks",
      label: t("developmentLinks.layer2"),
    },
    // {
    //   href: "/development/education/guides-tutorials",
    //   label: t("developmentLinks.education"),
    // },
  ];
  // Layer1 resources with translations
  const layer1Resources: Resource[] = [
    {
      title: t("resources.layer1.items.librariesSdks.title"),
      description: t("resources.layer1.items.librariesSdks.description"),
      icon: CodeXml,
      link: "/development/layer1/libraries-sdks",
    },
    {
      title: t("resources.layer1.items.apisPayments.title"),
      description: t("resources.layer1.items.apisPayments.description"),
      icon: BanknoteArrowDown,
      link: "/development/layer1/apis-payments",
    },
    {
      title: t("resources.layer1.items.utilities.title"),
      description: t("resources.layer1.items.utilities.description"),
      icon: Pickaxe,
      link: "/development/layer1/utilities",
    },
    {
      title: t("resources.layer1.items.layer2s.title"),
      description: t("resources.layer1.items.layer2s.description"),
      icon: Layers2,
      link: "/development/layer1/l2s-smart-contracts",
    },
  ];

  // Layer2 resources with translations
  const layer2Resources: Resource[] = [
    {
      title: t("resources.layer2.items.librariesSdks.title"),
      description: t("resources.layer2.items.librariesSdks.description"),
      icon: ToolCase,
      link: "/development/layer2/libraries-sdks",
    },
    {
      title: t("resources.layer2.items.lspsEnterprise.title"),
      description: t("resources.layer2.items.lspsEnterprise.description"),
      icon: Building2,
      link: "/development/layer2/lsps-enterprise",
    },
    {
      title: t("resources.layer2.items.dashboardsMonitoring.title"),
      description: t("resources.layer2.items.dashboardsMonitoring.description"),
      icon: ChartNetwork,
      link: "/development/layer2/dashboards-monitoring",
    },
    {
      title: t("resources.layer2.items.routingLiquidity.title"),
      description: t("resources.layer2.items.routingLiquidity.description"),
      icon: Route,
      link: "/development/layer2/routing-liquidity",
    },
  ];

  // Education resources with translations
  // const educationResources: Resource[] = [
  //   {
  //     title: t("resources.education.items.guidesTutorials.title"),
  //     description: t("resources.education.items.guidesTutorials.description"),
  //     icon: FileQuestionMark,
  //     link: "/development/education/guides-tutorials",
  //   },
  //   {
  //     title: t("resources.education.items.classesCourses.title"),
  //     description: t("resources.education.items.classesCourses.description"),
  //     icon: School,
  //     link: "/development/education/classes-courses",
  //   },
  //   {
  //     title: t("resources.education.items.certifications.title"),
  //     description: t("resources.education.items.certifications.description"),
  //     icon: ShieldCheck,
  //     link: "/development/education/certifications",
  //   },
  //   {
  //     title: t("resources.education.items.books.title"),
  //     description: t("resources.education.items.books.description"),
  //     icon: Book,
  //     link: "/development/education/books",
  //   },
  // ];

  return (
    <div className="relative">
      <IntroSection>
        <div className="space-y-6">
          <h1 className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            {t("title")}
          </h1>
          <p className="text-muted-foreground text-base sm:text-lg">
            {t("description")}
          </p>
          <DevelopmentLinks
            className="mt-12"
            developmentLinks={developmentLinks}
          />
        </div>
      </IntroSection>

      {/* Layer1 Resources Section */}
      <Section
        title={t("resources.layer1.sectionTitle")}
        resources={layer1Resources}
        buttonLink="/development/layer1/libraries-sdks"
        buttonText={t("resources.layer1.exploreAll")}
        icon={Bitcoin}
        className="from-secondary/10 bg-gradient-to-r to-transparent"
      />

      {/* Layer2 Resources Section */}
      <Section
        title={t("resources.layer2.sectionTitle")}
        resources={layer2Resources}
        buttonLink="/development/layer2/libraries-sdks"
        buttonText={t("resources.layer2.exploreAll")}
        icon={Zap}
        className="bg-gradient-to-l from-yellow-500/10 to-transparent"
      />

      {/* Education Resources Section */}
      {/* <Section
        title={t("resources.education.sectionTitle")}
        resources={educationResources}
        buttonLink="/development/education/guides-tutorials"
        buttonText={t("resources.education.exploreAll")}
        icon={BookOpen}
        className="bg-gradient-to-r from-teal-500/10 to-transparent"
      /> */}
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
                  <CardHeader className="flex flex-col items-center text-center">
                    <Icon className="text-primary mb-2 size-8 sm:size-10" />
                    <CardTitle className="text-sm sm:text-lg">
                      {resource.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
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
