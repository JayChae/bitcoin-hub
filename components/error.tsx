"use client";

import { Bitcoin } from "lucide-react";
import Link from "next/link";
import { useTranslations } from "next-intl";

import { Button } from "./ui/button";

export default function Error({
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  const t = useTranslations("errorPage");

  return (
    <div className="mx-auto my-24 flex max-w-4xl flex-col items-center justify-center space-y-6 px-4 text-center">
      <Bitcoin className="text-primary animate-fast-pulse h-20 w-20" />
      <h1 className="text-2xl font-bold tracking-tight sm:text-3xl lg:text-4xl">
        {t("title")}
      </h1>
      <p className="text-muted-foreground text-lg">{t("description")}</p>
      <div className="flex flex-wrap justify-center gap-4">
        <Button onClick={reset}>{t("retry")}</Button>
        <Link href="/">
          <Button>{t("goHome")}</Button>
        </Link>
      </div>
    </div>
  );
}
