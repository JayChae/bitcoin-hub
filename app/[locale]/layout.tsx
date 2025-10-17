import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import type { Metadata } from "next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import { routing } from "@/i18n/routing";
import { LocaleType } from "@/types";

import Header from "../../components/header";

type Props = {
  children: React.ReactNode;
  params: Promise<{ locale: LocaleType }>;
};

export default async function Layout({ children, params }: Props) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale} className="size-full overflow-y-scroll">
      <body
        className={`relative size-full antialiased ${pretendardFont.className}`}
      >
        <NextIntlClientProvider locale={locale}>
          <Header />
          <main className="size-full pt-16">{children}</main>
        </NextIntlClientProvider>
        <SpeedInsights />
      </body>
    </html>
  );
}

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: LocaleType }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "landing.Metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const pretendardFont = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
});
