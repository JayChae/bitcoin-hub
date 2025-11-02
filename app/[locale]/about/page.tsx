import { BookOpen, Code2, GraduationCap,Users } from "lucide-react";
import { getTranslations } from "next-intl/server";

export default async function AboutPage() {
  const t = await getTranslations("about");
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Vision Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20 max-w-6xl mx-auto">
        <h2 className="text-xs sm:text-sm font-semibold text-primary mb-3 sm:mb-4">
          {t("vision.title")}
        </h2>
        <p className="text-2xl sm:text-3xl md:text-4xl font-light text-white leading-relaxed whitespace-pre-line">
          {t("vision.description")}
        </p>
      </section>

      {/* Mission Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs sm:text-sm font-semibold text-primary mb-6 sm:mb-8">
            {t("mission.title")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            {(t.raw("mission.items") as string[]).map((item, index) => (
              <div
                key={index}
                className="p-5 sm:p-6 bg-zinc-900 rounded-lg border border-zinc-800"
              >
                <p className="text-base sm:text-lg text-gray-300">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs sm:text-sm font-semibold text-primary mb-6 sm:mb-8">
            {t("whyUs.title")}
          </h2>
          <div className="space-y-4 sm:space-y-6">
            {(t.raw("whyUs.items") as string[]).map((item, index) => (
              <div
                key={index}
                className="border-l-4 border-primary pl-4 sm:pl-6 py-2 sm:py-3"
              >
                <p className="text-base sm:text-lg md:text-xl text-gray-200">
                  {item}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Overview Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs sm:text-sm font-semibold text-primary mb-6 sm:mb-8">
            {t("programs.title")}
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center p-5 sm:p-6 lg:p-8 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-primary/50 transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Code2 className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-primary" />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white">
                {t("programs.internship")}
              </h3>
            </div>
            <div className="text-center p-5 sm:p-6 lg:p-8 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-primary/50 transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-primary" />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1 sm:mb-2">
                {t("programs.education")}
              </h3>
              <p className="text-xs sm:text-sm text-gray-400">
                {t("programs.educationLevel")}
              </p>
            </div>
            <div className="text-center p-5 sm:p-6 lg:p-8 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-primary/50 transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-primary" />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white">
                {t("programs.reading")}
              </h3>
            </div>
            <div className="text-center p-5 sm:p-6 lg:p-8 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-primary/50 transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-primary" />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white">
                {t("programs.conference")}
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs sm:text-sm font-semibold text-primary mb-6 sm:mb-8">
            {t("team.title")}
          </h2>
          <div className="flex gap-6 md:gap-12">
            <div className="text-center">
              <div className="size-24 sm:size-28 md:size-32  bg-zinc-800 rounded-full mb-3 sm:mb-4"></div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                {t("team.members.specter")}
              </h3>
            </div>
            <div className="text-center">
              <div className="size-24 sm:size-28 md:size-32 bg-zinc-800 rounded-full mb-3 sm:mb-4"></div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                {t("team.members.calvin")}
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs sm:text-sm font-semibold text-primary mb-6 sm:mb-8">
            {t("sponsor.title")}
          </h2>
          <div className="text-center text-gray-500">
            <p className="text-sm sm:text-base">{t("sponsor.comingSoon")}</p>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs sm:text-sm font-semibold text-primary mb-6 sm:mb-8">
            {t("partnership.title")}
          </h2>
          <div className="text-center text-gray-500">
            <p className="text-sm sm:text-base">{t("partnership.comingSoon")}</p>
          </div>
        </div>
      </section>
    </div>
  );
}
