import { Bitcoin } from "lucide-react";
import Link from "next/link";
import { getTranslations } from "next-intl/server";

import { Button } from "@/components/ui/button";

export default async function NotFoundPage() {
  const t = await getTranslations("notFound");
  return (
    <div className="mx-auto my-24 flex max-w-4xl flex-col items-center justify-center space-y-6 px-4 text-center">
      <Bitcoin className="text-primary animate-fast-pulse h-20 w-20" />
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
        {t("title")}
      </h1>
      <p className="text-muted-foreground text-lg">{t("description")}</p>
      <Link href="/">
        <Button>{t("goHome")}</Button>
      </Link>
    </div>
  );
}
