import { getTranslations } from "next-intl/server";

export default async function ComingSoon() {
  const t = await getTranslations("comingSoon");

  return (
    <section className="flex items-center px-4 pt-24 sm:block sm:h-fit lg:px-8">
      <div className="mx-auto max-w-4xl text-center">
        <h1 className="from-primary to-secondary mb-6 bg-gradient-to-r bg-clip-text text-3xl font-bold text-transparent sm:text-4xl md:text-5xl">
          {t("title")}
        </h1>
        <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-lg sm:text-xl">
          🚧 {t("subtitle")} 🚧
        </p>
        <p className="text-muted-foreground mx-auto mb-8 max-w-2xl text-xs sm:text-sm">
          {t("description")}
        </p>
      </div>
    </section>
  );
}
