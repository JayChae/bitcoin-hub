import "./globals.css";

import { SpeedInsights } from "@vercel/speed-insights/next";
import localFont from "next/font/local";
import { notFound } from "next/navigation";
import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getTranslations, setRequestLocale } from "next-intl/server";

import Footer from "@/components/footer";
import { routing } from "@/i18n/routing";

import Header from "../../components/header";

export default async function Layout({
  children,
  params,
}: {
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  // Enable static rendering
  setRequestLocale(locale);

  return (
    <html lang={locale} className="size-full">
      <head>
        <link rel="preload" href="/images/icon.webp" as="image" />
      </head>
      <body
        className={`relative size-full antialiased ${pretendardFont.className} overflow-y-scroll`}
      >
        <NextIntlClientProvider locale={locale}>
          <Header locale={locale} />
          <main className="min-h-full min-w-full pt-16">{children}</main>
          <Footer />
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
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "Metadata" });

  return {
    title: t("title"),
    description: t("description"),
    icons: "/images/icon.webp",
  };
}

const pretendardFont = localFont({
  src: "../../public/fonts/PretendardVariable.woff2",
  display: "swap",
  weight: "45 920",
  preload: true,
});
