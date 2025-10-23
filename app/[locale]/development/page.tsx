import { BookOpen, Code, ExternalLink, FileText } from "lucide-react";
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
import { LocaleType } from "@/types";

type Props = {
  params: Promise<{ locale: LocaleType }>;
};
export default async function DevelopmentPage({ params }: Props) {
  const { locale } = await params;
  // Enable static rendering
  setRequestLocale(locale);
  const t = await getTranslations("development");

  return (
    <div className="relative">
      <Hero
        title={t("title")}
        description={t("description")}
        Icon={<Code className="text-primary size-10 sm:size-16" />}
      />

      {bitcoinResources.map((resource, index) => (
        <ResourceCard key={index} resource={resource} />
      ))}
    </div>
  );
}

function ResourceCard({
  resource,
}: {
  resource: (typeof bitcoinResources)[0];
}) {
  const Icon = resource.icon;
  return (
    <Card className="bg-card border-border hover:border-primary/50 h-full transition-all hover:shadow-lg">
      <CardHeader>
        <div className="mb-2 flex items-start justify-between">
          <CardTitle className="text-lg">{resource.name}</CardTitle>
          <Icon className="text-primary h-5 w-5 flex-shrink-0" />
        </div>
      </CardHeader>
      <CardContent className="space-y-4">
        <CardDescription className="text-sm leading-relaxed">
          {resource.description}
        </CardDescription>
        <Button
          variant="outline"
          className="border-primary text-primary hover:bg-primary/10 w-full"
          asChild
        >
          <a href={resource.url} target="_blank" rel="noopener noreferrer">
            Visit Resource
            <ExternalLink className="ml-2 h-4 w-4" />
          </a>
        </Button>
      </CardContent>
    </Card>
  );
}

const bitcoinResources = [
  {
    name: "Bitcoin Core",
    description:
      "The reference implementation of the Bitcoin protocol. Essential for understanding how Bitcoin works at the code level.",
    url: "https://github.com/bitcoin/bitcoin",
    icon: Code,
  },
  {
    name: "Bitcoin.org",
    description:
      "Official Bitcoin documentation, guides, and resources for developers and users.",
    url: "https://bitcoin.org/en/developer-documentation",
    icon: FileText,
  },
  {
    name: "Mastering Bitcoin",
    description:
      "Andreas M. Antonopoulos's comprehensive guide to Bitcoin programming and protocol understanding.",
    url: "https://github.com/bitcoinbook/bitcoinbook",
    icon: BookOpen,
  },
  {
    name: "Bitcoin Optech",
    description:
      "Technical news and resources for Bitcoin developers, including workshops and documentation.",
    url: "https://bitcoinops.org",
    icon: Code,
  },
  {
    name: "BIP Repository",
    description:
      "Bitcoin Improvement Proposals - the formal process for proposing changes to Bitcoin.",
    url: "https://github.com/bitcoin/bips",
    icon: FileText,
  },
  {
    name: "Learn Me a Bitcoin",
    description:
      "Visual, beginner-friendly guide to how Bitcoin works under the hood.",
    url: "https://learnmeabitcoin.com",
    icon: BookOpen,
  },
];
