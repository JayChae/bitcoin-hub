import { getTranslations } from "next-intl/server";

export default async function AboutPage() {
  const t = await getTranslations("about");
  return (
    <div>
      <h1 className="text-5xl font-bold mb-6">{t("title")}</h1>
      <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
        {t("description")}
      </p>
    </div>
  );
}
