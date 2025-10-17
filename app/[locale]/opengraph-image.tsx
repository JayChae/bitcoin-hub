import { ImageResponse } from "next/og";
import { getTranslations } from "next-intl/server";

import { LocaleType } from "@/types";

export default async function OpenGraphImage({
  params,
}: {
  params: Promise<{ locale: LocaleType }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "OpenGraphImage" });
  return new ImageResponse(<div style={{ fontSize: 128 }}>{t("title")}</div>);
}
