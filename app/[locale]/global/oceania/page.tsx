import { getTranslations } from "next-intl/server";

import ComingSoon from "@/components/coming-soon";

type Props = {
  params: Promise<{ locale: string }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.pages" });

  return {
    title: t("globalOceania.title"),
    description: t("globalOceania.description"),
  };
}

export default async function OceaniaPage() {
  return <ComingSoon />;
}
