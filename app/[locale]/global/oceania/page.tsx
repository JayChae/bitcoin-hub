import { Bitcoin } from "lucide-react";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { LocaleType } from "@/types";

type Props = {
  params: Promise<{ locale: LocaleType }>;
};

export async function generateMetadata({ params }: Props) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata.pages" });

  return {
    title: t("globalOceania.title"),
    description: t("globalOceania.description"),
  };
}

export default async function OceaniaPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("globalOceania");

  return (
    <div className="relative h-full">
      {/* Header */}
      <section className="border-border relative border-b px-4 py-6 lg:px-8 lg:pt-8 lg:pb-10">
        <div className="container mx-auto">
          <div className="flex items-center gap-4">
            <Bitcoin className="text-primary h-12 w-12" />
            <div>
              <h1 className="from-primary to-primary bg-gradient-to-r via-yellow-400 bg-clip-text text-3xl font-bold text-transparent">
                {t("title")}
              </h1>
              <p className="text-muted-foreground mt-2">{t("description")}</p>
            </div>
          </div>
        </div>
      </section>

      {/* Empty State */}
      <section className="px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-5xl">
          <div className="text-muted-foreground flex flex-col items-center justify-center py-16 text-center">
            <h3 className="mb-2 text-xl font-semibold">
              {t("emptyState.title")}
            </h3>
            <p>{t("emptyState.description")}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
