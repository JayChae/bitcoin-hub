import { getTranslations, setRequestLocale } from "next-intl/server";

import Hero from "@/components/hero";
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
      <Hero title={t("title")} description={t("description")} />
    </div>
  );
}
