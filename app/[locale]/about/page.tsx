import { BookOpen, Code2, GraduationCap, Users } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

import IntroSection from "@/components/ui/intro-section";

export default async function AboutPage() {
  const t = await getTranslations("about");
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Intro Section */}
      <IntroSection>
        <div className="space-y-4 sm:space-y-6">
          <h1 className="text-4xl font-black tracking-tighter sm:text-5xl md:text-6xl lg:text-7xl">
            BIT
            <span className="from-primary to-secondary bg-gradient-to-r bg-clip-text text-transparent">
              OMUN
            </span>
          </h1>
          <p className="mx-auto max-w-2xl text-base leading-relaxed font-light text-gray-300 sm:text-lg md:text-xl">
            {t("intro")}
          </p>
        </div>
      </IntroSection>

      {/* Program Overview Section */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-primary mb-6 text-xs font-semibold sm:mb-8 sm:text-sm">
            {t("programs.title")}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-4">
            <div className="hover:border-primary/50 rounded-lg border border-zinc-800 bg-zinc-900 p-5 text-center transition-colors sm:p-6 lg:p-8">
              <div className="bg-primary/10 mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full sm:mb-4 sm:h-12 sm:w-12 lg:h-14 lg:w-14">
                <Code2 className="text-primary h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
              </div>
              <h3 className="text-sm font-semibold text-white sm:text-base lg:text-lg">
                {t("programs.internship")}
              </h3>
            </div>
            <div className="hover:border-primary/50 rounded-lg border border-zinc-800 bg-zinc-900 p-5 text-center transition-colors sm:p-6 lg:p-8">
              <div className="bg-primary/10 mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full sm:mb-4 sm:h-12 sm:w-12 lg:h-14 lg:w-14">
                <GraduationCap className="text-primary h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
              </div>
              <h3 className="mb-1 text-sm font-semibold text-white sm:mb-2 sm:text-base lg:text-lg">
                {t("programs.education")}
              </h3>
              <p className="text-xs text-gray-400 sm:text-sm">
                {t("programs.educationLevel")}
              </p>
            </div>
            <div className="hover:border-primary/50 rounded-lg border border-zinc-800 bg-zinc-900 p-5 text-center transition-colors sm:p-6 lg:p-8">
              <div className="bg-primary/10 mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full sm:mb-4 sm:h-12 sm:w-12 lg:h-14 lg:w-14">
                <BookOpen className="text-primary h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
              </div>
              <h3 className="text-sm font-semibold text-white sm:text-base lg:text-lg">
                {t("programs.reading")}
              </h3>
            </div>
            <div className="hover:border-primary/50 rounded-lg border border-zinc-800 bg-zinc-900 p-5 text-center transition-colors sm:p-6 lg:p-8">
              <div className="bg-primary/10 mx-auto mb-3 flex h-10 w-10 items-center justify-center rounded-full sm:mb-4 sm:h-12 sm:w-12 lg:h-14 lg:w-14">
                <Users className="text-primary h-5 w-5 sm:h-6 sm:w-6 lg:h-7 lg:w-7" />
              </div>
              <h3 className="text-sm font-semibold text-white sm:text-base lg:text-lg">
                {t("programs.conference")}
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-primary mb-6 text-xs font-semibold sm:mb-8 sm:text-sm">
            {t("team.title")}
          </h2>
          <div className="flex gap-6 md:gap-12">
            <div className="text-center">
              <div className="relative mb-3 size-24 rounded-full sm:mb-4 sm:size-28 md:size-32">
                <Image src="/images/specter.webp" alt="Specter" fill />
              </div>
              <h3 className="text-lg font-semibold text-white sm:text-xl">
                {t("team.members.specter")}
              </h3>
            </div>
            <div className="text-center">
              <div className="relative mb-3 size-24 rounded-full sm:mb-4 sm:size-28 md:size-32">
                <Image src="/images/calvin.webp" alt="Calvin" fill />
              </div>
              <h3 className="text-lg font-semibold text-white sm:text-xl">
                {t("team.members.calvin")}
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Section */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-primary mb-6 text-xs font-semibold sm:mb-8 sm:text-sm">
            {t("sponsor.title")}
          </h2>
          <div className="text-center text-gray-500">
            <p className="text-sm sm:text-base">{t("sponsor.comingSoon")}</p>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-primary mb-6 text-xs font-semibold sm:mb-8 sm:text-sm">
            {t("partnership.title")}
          </h2>
          <div className="text-center text-gray-500">
            <p className="text-sm sm:text-base">
              {t("partnership.comingSoon")}
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
