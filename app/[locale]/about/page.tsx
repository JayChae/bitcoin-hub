import {
  Bitcoin,
  GraduationCap,
  Handshake,
  Lightbulb,
  Sparkles,
  Target,
  Users,
  Zap,
} from "lucide-react";
import { getTranslations } from "next-intl/server";

import Hero from "@/components/hero";
import { Badge } from "@/components/ui/badge";

export default async function AboutPage() {
  const t = await getTranslations("about");

  // Parse mission items
  const missionItems = [
    t("mission.items.0"),
    t("mission.items.1"),
    t("mission.items.2"),
    t("mission.items.3"),
  ];

  // Parse why us items
  const whyUsItems = [
    t("whyUs.items.0"),
    t("whyUs.items.1"),
    t("whyUs.items.2"),
  ];

  // Parse program items
  const programItems = [
    t("programs.items.0"),
    t("programs.items.1"),
    t("programs.items.2"),
    t("programs.items.3"),
  ];

  // Parse team members
  const teamMembers = [t("team.members.0"), t("team.members.1")];

  return (
    <div className="relative overflow-hidden">
      <Hero
        title={t("title")}
        description={t("description")}
        Icon={<Bitcoin className="text-primary size-10 sm:size-16" />}
      />

      {/* Vision Section - Large Statement */}
      <section className="relative px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-gradient-to-br from-orange-500/5 via-transparent to-purple-500/5" />
        <div className="mx-auto max-w-5xl">
          <div className="relative">
            {/* Large decorative element */}
            <div className="absolute -top-4 -left-4 size-24 rotate-12 border-4 border-orange-500/20 sm:-top-12 sm:-left-12 sm:size-32" />
            <div className="absolute -right-4 -bottom-4 size-24 -rotate-12 bg-orange-500/10 sm:-right-12 sm:-bottom-12 sm:size-32" />

            <div className="relative space-y-6 border-l-8 border-orange-500 bg-gradient-to-r from-orange-500/10 to-transparent p-8 sm:p-12 lg:p-16">
              <Badge className="bg-orange-500/20 text-orange-700 dark:text-orange-300">
                <Target className="mr-1 size-3" />
                {t("vision.title")}
              </Badge>
              <h2 className="text-3xl leading-tight font-black sm:text-4xl lg:text-6xl">
                {t("vision.content")}
              </h2>
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Brutalist Grid */}
      <section className="relative px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16 flex items-center gap-4">
            <div className="flex-shrink-0 border-4 border-blue-500 bg-blue-500 p-4">
              <Zap className="size-8 text-white sm:size-12" />
            </div>
            <h2 className="text-4xl font-black tracking-tight uppercase sm:text-5xl lg:text-7xl">
              {t("mission.title")}
            </h2>
          </div>

          <div className="border-foreground grid gap-0 border-4 md:grid-cols-2">
            {missionItems.map((item, index) => (
              <div
                key={index}
                className="group border-foreground relative border-r-4 border-b-4 p-8 transition-all hover:bg-blue-500 hover:text-white md:border-b-4 md:last:border-b-4 lg:p-12"
              >
                <div className="mb-4 text-6xl font-black text-blue-500 group-hover:text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <p className="text-lg font-bold sm:text-xl">{item}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section - Asymmetric Layout */}
      <section className="relative px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10">
          <div className="absolute top-0 right-0 h-full w-1/3 bg-gradient-to-l from-yellow-500/10 to-transparent" />
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="mb-16">
            <Badge className="mb-4 bg-yellow-500/20 text-yellow-700 dark:text-yellow-300">
              <Lightbulb className="mr-1 size-3" />
              {t("whyUs.title")}
            </Badge>
            <h2 className="text-5xl font-black sm:text-6xl lg:text-8xl">
              {t("whyUs.title")}
            </h2>
          </div>

          <div className="space-y-6">
            {whyUsItems.map((item, index) => (
              <div
                key={index}
                className="group relative overflow-hidden border-l-8 border-yellow-500 bg-gradient-to-r from-yellow-500/5 to-transparent p-8 transition-all hover:border-yellow-600 hover:from-yellow-500/10 lg:p-12"
              >
                <div className="absolute top-1/2 -right-4 -translate-y-1/2 text-9xl font-black text-yellow-500/5 transition-all group-hover:text-yellow-500/10">
                  {index + 1}
                </div>
                <div className="relative flex items-start gap-6">
                  <div className="flex-shrink-0 border-4 border-yellow-500 bg-yellow-500/10 p-3 transition-all group-hover:bg-yellow-500">
                    <Bitcoin className="size-6 text-yellow-600 transition-all group-hover:text-white sm:size-8" />
                  </div>
                  <p className="text-lg font-semibold sm:text-xl lg:text-2xl">
                    {item}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Overview - Modern Cards */}
      <section className="relative px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-transparent via-green-500/5 to-transparent" />

        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <div className="mb-6 inline-flex border-4 border-green-500 bg-green-500 p-6">
              <GraduationCap className="size-12 text-white sm:size-16" />
            </div>
            <h2 className="text-4xl font-black uppercase sm:text-5xl lg:text-7xl">
              {t("programs.title")}
            </h2>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programItems.map((item, index) => (
              <div
                key={index}
                className="group border-foreground bg-background relative overflow-hidden border-4 transition-all hover:-translate-y-2 hover:shadow-[8px_8px_0px_0px_rgba(0,0,0,1)] dark:hover:shadow-[8px_8px_0px_0px_rgba(255,255,255,1)]"
              >
                <div className="border-foreground absolute top-0 right-0 border-b-4 border-l-4 bg-green-500 px-4 py-2 text-xl font-black text-white">
                  {String(index + 1).padStart(2, "0")}
                </div>
                <div className="p-8 pt-16">
                  <GraduationCap className="mb-6 size-10 text-green-500" />
                  <h3 className="text-lg font-bold sm:text-xl">{item}</h3>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Bold Cards */}
      <section className="relative px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="mb-16">
            <Badge className="mb-4 bg-purple-500/20 text-purple-700 dark:text-purple-300">
              <Users className="mr-1 size-3" />
              {t("team.title")}
            </Badge>
            <h2 className="text-5xl font-black sm:text-6xl lg:text-8xl">
              {t("team.title")}
            </h2>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {teamMembers.map((member, index) => (
              <div
                key={index}
                className="group border-foreground relative overflow-hidden border-4 bg-gradient-to-br from-purple-500/10 to-transparent transition-all hover:-translate-y-2 hover:shadow-[12px_12px_0px_0px_rgba(168,85,247,0.4)]"
              >
                <div className="border-foreground absolute top-0 right-0 size-32 border-b-4 border-l-4 bg-purple-500/20" />
                <div className="relative p-8 sm:p-12">
                  <div className="mb-6 inline-flex border-4 border-purple-500 bg-purple-500 p-4">
                    <Users className="size-12 text-white" />
                  </div>
                  <h3 className="text-3xl font-black sm:text-4xl">{member}</h3>
                  <div className="mt-4 flex gap-2">
                    <div className="size-3 bg-purple-500" />
                    <div className="size-3 bg-purple-500" />
                    <div className="size-3 bg-purple-500" />
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsor & Partnership - Coming Soon */}
      <section className="relative px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Sponsor */}
            <div className="border-foreground relative overflow-hidden border-4 bg-gradient-to-br from-orange-500/5 to-transparent p-12">
              <div className="absolute -top-8 -right-8 size-32 rotate-12 bg-orange-500/10" />
              <Sparkles className="mb-6 size-12 text-orange-500" />
              <h3 className="mb-4 text-3xl font-black">{t("sponsor.title")}</h3>
              <p className="text-muted-foreground text-lg font-medium">
                {t("sponsor.description")}
              </p>
              <div className="mt-6 inline-flex border-4 border-orange-500 bg-orange-500 px-6 py-2 text-sm font-black text-white uppercase">
                Coming Soon
              </div>
            </div>

            {/* Partnership */}
            <div className="border-foreground relative overflow-hidden border-4 bg-gradient-to-br from-blue-500/5 to-transparent p-12">
              <div className="absolute -top-8 -right-8 size-32 -rotate-12 bg-blue-500/10" />
              <Handshake className="mb-6 size-12 text-blue-500" />
              <h3 className="mb-4 text-3xl font-black">
                {t("partnership.title")}
              </h3>
              <p className="text-muted-foreground text-lg font-medium">
                {t("partnership.description")}
              </p>
              <div className="mt-6 inline-flex border-4 border-blue-500 bg-blue-500 px-6 py-2 text-sm font-black text-white uppercase">
                Coming Soon
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
