import { Bitcoin, BookOpen, MapPin, Zap } from "lucide-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { IntlType, LocaleType } from "@/types";

type Props = {
  params: Promise<{ locale: LocaleType }>;
};

export default async function Home({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations("landing");
  return (
    <div className="relative">
      {/* Hero Section */}
      <section className="px-4 py-44 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl text-center">
          <div className="mb-6 flex justify-center">
            <Bitcoin className="text-primary animate-fast-pulse h-20 w-20" />
          </div>
          <h1 className="from-primary to-primary mb-6 bg-gradient-to-r via-yellow-400 bg-clip-text text-5xl font-bold text-transparent md:text-6xl">
            {t("title")}
          </h1>
          <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl">
            {t("description")}
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/about">
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
      <section className="bg-gradient-to-r from-red-400/7 to-transparent px-4 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">
              {t("development.title")}
            </h2>
            <p className="text-muted-foreground">
              {t("development.description")}
            </p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {devResources.map((resource) => {
              const Icon = resource.icon;
              const name = resource.name[locale];
              const description = resource.description[locale];
              return (
                <Link key={resource.link} href={resource.link}>
                  <Card className="hover:border-primary/50 cursor-pointer text-center transition-colors">
                    <CardHeader>
                      <Icon className="text-primary mx-auto mb-2 h-12 w-12" />
                      <CardTitle>{name}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription>{description}</CardDescription>
                    </CardContent>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>

      {/* Features Section */}
      {/* Global Centers & Organizations Section */}
      <section className="bg-gradient-to-l from-yellow-400/10 to-transparent px-4 py-32 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-3xl font-bold">{t("global.title")}</h2>
            <p className="text-muted-foreground">{t("global.description")}</p>
          </div>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {continents.map((continent: ContinentType) => {
              const name = continent.name[locale];
              return (
                <Link
                  href={continent.link}
                  key={continent.link}
                  className="group block"
                >
                  <Card className="hover:border-primary/50 relative overflow-hidden transition-all duration-300 hover:shadow-lg">
                    <div
                      className={`absolute inset-0 bg-gradient-to-br ${continent.color} opacity-0 transition-opacity duration-300 group-hover:opacity-100`}
                    />
                    <CardHeader className="text-center">
                      <div className="bg-primary/5 group-hover:bg-primary/10 mx-auto rounded-full transition-colors">
                        <MapPin className="text-primary h-8 w-8" />
                      </div>
                      <CardTitle className="text-xl"> {name}</CardTitle>
                    </CardHeader>
                  </Card>
                </Link>
              );
            })}
          </div>
        </div>
      </section>
    </div>
  );
}

type DevResourceType = {
  name: IntlType;
  description: IntlType;
  icon: React.ElementType;
  link: string;
};

type ContinentType = {
  name: IntlType;
  color: string;
  link: string;
};

const devResources: DevResourceType[] = [
  {
    name: { en: "Bitcoin", ko: "비트코인" },
    description: {
      en: "Master the fundamentals of Bitcoin, blockchain technology, and peer-to-peer transactions.",
      ko: "비트코인, 블록체인 기술, 그리고 P2P 거래의 기초를 배우세요.",
    },

    icon: Bitcoin,
    link: "/development/bitcoin",
  },
  {
    name: { en: "Lightning Network", ko: "라이트닝 네트워크" },
    description: {
      en: "Explore Layer 2 scaling solutions and instant, low-cost Bitcoin transactions.",
      ko: "레이어 2 확장 솔루션과 인스턴트, 저렴한 비트코인 거래를 탐색하세요.",
    },
    icon: Zap,
    link: "/development/lightning-network",
  },
  {
    name: { en: "Education", ko: "교육" },
    description: {
      en: "Access curated learning materials, documentation, and development tools.",
      ko: "학습 자료, 문서, 그리고 개발 도구에 접근하세요.",
    },
    icon: BookOpen,
    link: "/development/education",
  },
];

const continents: ContinentType[] = [
  {
    name: { en: "Asia", ko: "아시아" },
    color: "from-red-500/20 to-red-500/5",
    link: "/global/asia",
  },
  {
    name: { en: "Europe", ko: "유럽" },
    color: "from-blue-500/20 to-blue-500/5",
    link: "/global/europe",
  },
  {
    name: { en: "Africa", ko: "아프리카" },
    color: "from-yellow-500/20 to-yellow-500/5",
    link: "/global/africa",
  },
  {
    name: { en: "North America", ko: "북아메리카" },
    color: "from-green-500/20 to-green-500/5",
    link: "/global/north-america",
  },
  {
    name: { en: "South America", ko: "남아메리카" },
    color: "from-purple-500/20 to-purple-500/5",
    link: "/global/south-america",
  },
  {
    name: { en: "Oceania", ko: "오세아니아" },
    color: "from-teal-500/20 to-teal-500/5",
    link: "/global/oceania",
  },
];
