import { BookOpen, Code2, GraduationCap, Users } from "lucide-react";
import Image from "next/image";
import { getTranslations } from "next-intl/server";

export default async function AboutPage() {
  const t = await getTranslations("about");
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Vision Section */}
      <section className="mx-auto max-w-6xl px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <h2 className="text-primary mb-3 text-xs font-semibold sm:mb-4 sm:text-sm">
          {t("vision.title")}
        </h2>
        <p className="text-2xl leading-relaxed font-light whitespace-pre-line text-white sm:text-3xl md:text-4xl">
          {t("vision.description")}
        </p>
      </section>

      {/* Mission Section */}
      <section className="bg-zinc-950 px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-primary mb-6 text-xs font-semibold sm:mb-8 sm:text-sm">
            {t("mission.title")}
          </h2>
          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6">
            {(t.raw("mission.items") as string[]).map((item, index) => (
              <div
                key={index}
                className="rounded-lg border border-zinc-800 bg-zinc-900 p-5 sm:p-6"
              >
                <p className="text-base text-gray-300 sm:text-lg">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="px-4 py-12 sm:px-6 sm:py-16 md:py-20">
        <div className="mx-auto max-w-6xl">
          <h2 className="text-primary mb-6 text-xs font-semibold sm:mb-8 sm:text-sm">
            {t("whyUs.title")}
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {(t.raw("whyUs.items") as string[]).map((item, index) => (
              <div
                key={index}
                className="border-primary rounded-lg border-l-4 bg-zinc-900 py-4 pl-4 sm:pl-6"
              >
                <p className="text-sm text-gray-200 sm:text-lg md:text-xl">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Overview Section */}
      <section className="bg-zinc-950 px-4 py-12 sm:px-6 sm:py-16 md:py-20">
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
                <Image src="/images/specter.png" alt="Specter" fill />
              </div>
              <h3 className="text-lg font-semibold text-white sm:text-xl">
                {t("team.members.specter")}
              </h3>
            </div>
            <div className="text-center">
              <div className="relative mb-3 size-24 rounded-full sm:mb-4 sm:size-28 md:size-32">
                <Image src="/images/calvin.png" alt="Calvin" fill />
              </div>
              <h3 className="text-lg font-semibold text-white sm:text-xl">
                {t("team.members.calvin")}
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Section */}
      <section className="bg-zinc-950 px-4 py-12 sm:px-6 sm:py-16 md:py-20">
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
