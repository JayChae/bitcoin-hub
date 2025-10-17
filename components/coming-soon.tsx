import { getTranslations } from "next-intl/server";

export default async function ComingSoon() {
  const t = await getTranslations("comingSoon");

  return (
    <div className="flex min-h-[50vh] flex-col items-center justify-center space-y-4 p-4 text-center">
      <h1 className="text-4xl font-bold tracking-tight">{t("title")}</h1>
      <div className="h-1 w-20 rounded-full bg-gray-200" />
      <p className="text-lg text-gray-600">🚧 {t("description")} 🚧</p>
    </div>
  );
}
