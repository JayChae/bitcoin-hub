import {
  Book,
  BookOpen,
  FileQuestionMark,
  School,
  ShieldCheck,
} from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";
import { ReactNode } from "react";

import { ConsultingForm } from "@/components/consulting-form";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import IntroSection from "@/components/ui/intro-section";
import { Link } from "@/i18n/navigation";
import { cn } from "@/lib/utils";
import { LocaleType, LucideIcon } from "@/types";

type Props = {
  params: Promise<{ locale: LocaleType }>;
};

export default async function EducationPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <div>
      <IntroSection>
        <div className="space-y-6">
          <h1 className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-4xl font-bold text-transparent md:text-5xl">
            Education
          </h1>
          <p className="text-muted-foreground text-lg sm:text-xl">
            비트코인에 특화된 학습과 서비스를 제공합니다. 유료 교육의 경우 모든
            결제 금액의 일정 퍼센트는 후원금으로 이용됩니다. 후원금은 비트코인
            무료 교육과 산업 확산을 위해 사용합니다
          </p>
        </div>
      </IntroSection>
      <Section
        title={"오프라인 교육"}
        description="전문가와 오프라인에서 소통하며 비트코인을 배울 수 있습니다"
        className="from-secondary/10 bg-gradient-to-r to-transparent"
      >
        <OffLine levels={LEVELS} />
      </Section>

      <Section
        title={"온라인 교육"}
        description="다양한 비트코인 교육을 원하는 장소와 시간에 들을 수 있는 온라인 교육을 제공합니다"
        className="from-primary/10 bg-gradient-to-r to-transparent"
      >
        <OnlineEducation />
      </Section>

      <Section
        title={"비트코인 독서 모임"}
        description="비트코인과 관련된 서적 중 비트코인에 대해 올바르게 설명하는 서적들 위주로 함께 모여 이야기를 나누는 시간을 가집니다"
        className="from-secondary/10 bg-gradient-to-r to-transparent"
      >
        <BookClub />
      </Section>

      {/* Education Resources Section */}
      <DevSection
        title={"개발 교육"}
        resources={educationResources}
        buttonLink="education/development/guides-tutorials"
        buttonText={""}
        icon={BookOpen}
        className="bg-gradient-to-r from-teal-500/10 to-transparent"
      />

      <Section
        title={"1:1 컨설팅"}
        description="고액 자산가를 위한 1:1 컨설팅으로 고객님의 비싼 시간을 지켜줍니다"
        className="from-primary/10 bg-gradient-to-r to-transparent"
      >
        <OneOnOneConsulting />
      </Section>
    </div>
  );
}

type SectionProps = {
  title: string;
  description: string;
  className?: string;
  children?: ReactNode;
};

function Section({ title, description, className, children }: SectionProps) {
  return (
    <section className={cn("px-4 py-24 sm:px-6 lg:px-8", className)}>
      <div className="mx-auto flex max-w-5xl flex-col items-center justify-center gap-12">
        <div className="flex flex-col items-center justify-center gap-4">
          <h2 className="text-3xl font-bold">{title}</h2>
          <span>{description}</span>
        </div>
        {children}
      </div>
    </section>
  );
}

function LevelCard({ level, description, targets }: Level) {
  return (
    <Dialog>
      <DialogTrigger asChild>
        <Card className="hover:border-primary/50 cursor-pointer transition-all hover:shadow-md">
          <CardHeader>
            <CardTitle className="text-primary text-center text-xl">
              {level}
            </CardTitle>
            <CardDescription className="text-center text-xs leading-relaxed lg:text-sm">
              {description}
            </CardDescription>
          </CardHeader>
        </Card>
      </DialogTrigger>
      <DialogContent className="max-h-[80vh] overflow-y-auto">
        <DialogHeader>
          <DialogTitle className="text-2xl">{level}</DialogTitle>
          <DialogDescription className="px-3 text-base leading-relaxed">
            {description}
          </DialogDescription>
        </DialogHeader>
        <div className="space-y-4">
          <div className="">
            <h3 className="mb-3 text-lg font-semibold">대상자</h3>
            <ul className="text-muted-foreground space-y-2 text-sm">
              {targets.map((target, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{target}</span>
                </li>
              ))}
            </ul>
          </div>
          <Button className="w-full" size="lg">
            신청하기
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}

type Level = {
  level: string;
  description: string;
  targets: string[];
};
type OffLineProps = {
  levels: Level[];
};

function OffLine({ levels }: OffLineProps) {
  return (
    <div className="grid w-full gap-6 md:grid-cols-3">
      {levels.map((levelData, index) => (
        <LevelCard key={index} {...levelData} />
      ))}
    </div>
  );
}

function OnlineEducation() {
  const targets = [
    "오프라인 교육이 불가한 사람",
    "인터넷 강의로 더 잘 배우는 사람",
    "원하는 시간대에 학습하고 싶은 사람",
    "공간의 제약을 받지 않고 학습하고 싶은 사람",
  ];

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader className="space-y-6">
        <div className="space-y-5">
          <div>
            <h3 className="mb-3 text-lg font-semibold">대상자</h3>
            <ul className="text-muted-foreground space-y-2 text-sm">
              {targets.map((target, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{target}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full text-center">
            <Button className="w-sm" size="lg" asChild>
              <a
                href="https://example.com/online-course"
                target="_blank"
                rel="noopener noreferrer"
              >
                신청하기
              </a>
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}

function BookClub() {
  const targets = [
    "혼자서는 책을 잘 안읽는 사람",
    "읽은 책의 내용을 다른 사람과 의견을 나누어보고 싶은 사람",
    "좋은 책을 읽어보고 싶은 사람",
  ];

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader className="space-y-6">
        <div className="space-y-5">
          <div>
            <h3 className="mb-3 text-lg font-semibold">대상자</h3>
            <ul className="text-muted-foreground space-y-2 text-sm">
              {targets.map((target, index) => (
                <li key={index} className="flex items-start gap-2">
                  <span className="text-primary mt-1">•</span>
                  <span>{target}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="w-full text-center">
            <Button className="w-sm" size="lg">
              신청하기
            </Button>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}

function OneOnOneConsulting() {
  const description = `시간이 곧 돈인 사업가분과 자산은 많으나 새로운 기술을 배우기에는 사정상 어려우신분에게 적합합니다. 모든 과정은 고객의 상황에 맞추어 진행하며 단발성이 아닌 사후 관리까지 도와드립니다.`;

  const recommendation = "해당 컨설팅은 10억 이상의 자산가에게 추천드립니다.";

  return (
    <Card className="w-full max-w-2xl">
      <CardHeader className="space-y-6">
        <div className="space-y-5">
          <div className="space-y-4">
            <p className="text-muted-foreground leading-relaxed">
              {description}
            </p>
            <p className="text-muted-foreground font-bold">{recommendation}</p>
          </div>
          <div className="w-full text-center">
            <Dialog>
              <DialogTrigger asChild>
                <Button className="w-sm" size="lg">
                  상담 신청
                </Button>
              </DialogTrigger>
              <DialogContent className="max-h-[80vh] overflow-y-auto sm:max-w-[500px]">
                <DialogHeader>
                  <DialogTitle className="text-2xl">
                    1:1 컨설팅 상담 신청
                  </DialogTitle>
                  <DialogDescription className="text-base leading-relaxed">
                    아래 정보를 입력해주시면 담당자가 확인 후 연락드리겠습니다.
                  </DialogDescription>
                </DialogHeader>
                <ConsultingForm />
              </DialogContent>
            </Dialog>
          </div>
        </div>
      </CardHeader>
    </Card>
  );
}

const LEVELS = [
  {
    level: "Level 1",
    description:
      "비트코인의 기본 개념과 작동 원리에 대해 배우며 다른 자산과의 차이점과 미래의 활용 방안에 대해 배웁니다",
    targets: [
      "비트코인이 어려운 분",
      "비트코인을 알아보고 싶으신 분",
      "돈에 대해 알아보고 싶으신 분",
      "물가 상승이 걱정되시는 분",
      "열심히는 사는데 갈 수록 살기가 힘들다고 느껴지시는 분",
      "노후 걱정을 안하고 싶으신 분",
      "경제에 대해 알아 볼 시간이 없으신 분",
    ],
  },
  {
    level: "Level 2",
    description:
      "셀프 커스터디를 시작하는 입문자를 위한 강의로 다양한 옵션들 중 셀프커스터디에 필요한 최소한의 기능을 이용하는 방법을 전문가에게 배웁니다",
    targets: [
      "비트코인을 안전하게 보관하고 싶으신 분",
      "비트코인을 내 명의로 보관하고 싶으신 분",
      "거래소가 비트코인을 보관하는 방식으로 보관하고 싶으신 분",
      "시간과 공간의 조건에서 자유롭게 비트코인을 이용하고 싶으신 분",
      "비트코인을 사용해보고 싶으신 분",
      "금융의 자유를 얻고 싶으신 분",
    ],
  },
  {
    level: "Level 3",
    description:
      "셀프커스터디를 넘어 비트코인 채굴과 풀노드 그리고 직접 사용하는 방법에 대해서 알아봅니다",
    targets: [
      "라이트닝, 채굴 그리고 풀노드가 뭔지 궁금한 분",
      "온체인 트랜잭션 10회 이상 완료",
      "라이트닝을 이용해보고 싶은 분",
      "채굴을 해보기로 결심했는데 기본 연결 방법과 운영 방법이 궁금한 분(홈마이닝)",
      "내 비트코인을 지키기 위해 풀노드를 돌리고 싶은 분",
      "비트코인 생태계를 위해 풀노드를 돌리고 싶은 분",
    ],
  },
];

// Education resources with translations
const educationResources: Resource[] = [
  {
    title: "Guides & Tutorials",
    description:
      "Written or video-based educational materials that provide step-by-step instructions on specific topics related to Bitcoin and/or Lightning Network development.",
    icon: FileQuestionMark,
    link: "/education/development/guides-tutorials",
  },
  {
    title: "Classes & Courses",
    description:
      "Formal educational programs, either online or in-person, that offer a structured curriculum covering various aspects of Bitcoin and/or Lightning Network development.",
    icon: School,
    link: "/education/development/classes-courses",
  },
  {
    title: "Developer Certifications",
    description:
      "Programs that evaluate the skills and knowledge of developers through examinations, resulting in a certification that validates proficiency in Bitcoin and/or Lightning Network development.",
    icon: ShieldCheck,
    link: "/education/development/certifications",
  },
  {
    title: "Developer Books",
    description:
      "Published books that offer in-depth information and insights into various areas of Bitcoin and/or Lightning Network development, often serving as comprehensive references.",
    icon: Book,
    link: "/education/development/books",
  },
];

type Resource = {
  title: string;
  description: string;
  icon: LucideIcon;
  link: string;
};

type DevSectionProps = {
  title: string;
  resources: Resource[];
  buttonLink: string;
  buttonText: string;
  icon: LucideIcon;
  className?: string;
};

function DevSection({
  title,
  resources,
  buttonLink,
  buttonText,
  icon,
  className,
}: DevSectionProps) {
  const Icon = icon;
  return (
    <section className={cn("px-4 py-24 sm:px-6 lg:px-8", className)}>
      <div className="mx-auto flex max-w-4xl flex-col items-center justify-center gap-12">
        <div className="flex w-full items-center justify-center gap-3">
          <Icon className="text-primary size-8" />
          <h2 className="text-3xl font-bold">{title}</h2>
        </div>

        <div className="mx-auto flex flex-wrap justify-center gap-6">
          {resources.map((resource) => {
            const Icon = resource.icon;
            return (
              <Link href={resource.link} key={resource.link}>
                <Card className="bg-card border-border hover:border-primary/50 h-full w-full max-w-sm transition-colors">
                  <CardHeader className="flex flex-col items-center text-center">
                    <Icon className="text-primary mb-2 size-8 sm:size-10" />
                    <CardTitle className="text-sm sm:text-lg">
                      {resource.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <CardDescription className="text-xs sm:text-sm">
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

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.pages" });

  return {
    title: t("education.title"),
    description: t("education.description"),
  };
}
