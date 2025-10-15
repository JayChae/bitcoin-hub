import { getTranslations } from "next-intl/server";

export default async function AboutPage() {
  const t = await getTranslations("about");
  return (
    <div>
      <h1 className="mb-6 text-5xl font-bold">{t("title")}</h1>
      <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xl">
        {t("description")}
      </p>
    </div>
  );
}
