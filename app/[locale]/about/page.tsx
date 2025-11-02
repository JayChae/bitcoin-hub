import {
  Bitcoin,
  Box,
  GraduationCap,
  Handshake,
  Hash,
  Link2,
  Network,
  Target,
  Users,
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

      {/* Vision Section - Genesis Block */}
      <section className="relative px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
        {/* Background Grid Pattern */}
        <div className="absolute inset-0 -z-10 opacity-20">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        <div className="mx-auto max-w-5xl">
          <div className="relative">
            {/* Block Header - Bitcoin Style */}
            <div className="bg-primary/10 border-primary mb-4 border-l-4 p-4 font-mono text-xs">
              <div className="flex flex-wrap items-center justify-between gap-2">
                <span className="text-muted-foreground">
                  Block Height: 0 (Genesis Block)
                </span>
                <span className="text-muted-foreground">
                  000000000019d6689c085ae165831e934ff763ae46a2a6c172b3f1b60a8ce26f
                </span>
              </div>
            </div>

            {/* Main Block - Bitcoin */}
            <div className="bg-card border-primary relative border-4 p-8 shadow-2xl sm:p-12 lg:p-16">
              {/* Corner Accents - Represent 4 Confirmations */}
              <div className="bg-primary absolute top-0 left-0 size-4" />
              <div className="bg-primary absolute top-0 right-0 size-4" />
              <div className="bg-primary absolute bottom-0 left-0 size-4" />
              <div className="bg-primary absolute right-0 bottom-0 size-4" />

              <Badge className="bg-primary/20 text-primary mb-6">
                <Target className="mr-1 size-3" />
                {t("vision.title")}
              </Badge>

              <h2 className="mb-8 text-3xl leading-tight font-black sm:text-4xl lg:text-6xl">
                {t("vision.content")}
              </h2>

              {/* Block Footer - Bitcoin Metadata */}
              <div className="border-primary/20 mt-8 space-y-2 border-t pt-4 font-mono text-xs opacity-60">
                <div className="flex items-center gap-2">
                  <Hash className="size-3" />
                  <span>
                    Merkle Root:
                    4a5e1e4baab89f3a32518a88c31bc87f618f76673e2cc77ab2127b7afdeda33b
                  </span>
                </div>
                <div className="flex items-center justify-between gap-4">
                  <span>Timestamp: 2009-01-03 18:15:05</span>
                  <span>Difficulty: 1.00</span>
                </div>
              </div>
            </div>

            {/* Chain Link to Next Section */}
            <div className="bg-primary/20 border-primary mx-auto mt-8 flex size-16 items-center justify-center border-4 border-dashed">
              <Link2 className="text-primary size-8" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section - Blockchain Chain */}
      <section className="relative px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="mb-16 flex items-center gap-4">
            <div className="border-primary bg-primary flex-shrink-0 border-4 p-4">
              <Box className="size-8 text-white sm:size-12" />
            </div>
            <h2 className="text-4xl font-black tracking-tight uppercase sm:text-5xl lg:text-7xl">
              {t("mission.title")}
            </h2>
          </div>

          {/* Blockchain Style - Connected Blocks */}
          <div className="space-y-8">
            {missionItems.map((item, index) => (
              <div key={index} className="relative">
                {/* Chain Link Connector */}
                {index > 0 && (
                  <div className="mx-auto mb-8 flex w-fit flex-col items-center">
                    <Link2 className="text-primary size-8 animate-pulse" />
                    <div className="bg-primary/20 my-2 h-8 w-1" />
                  </div>
                )}

                {/* Block */}
                <div className="bg-card group border-primary relative overflow-hidden border-4 transition-all hover:shadow-2xl">
                  {/* Block Header - Bitcoin */}
                  <div className="bg-primary/10 border-primary flex flex-wrap items-center justify-between gap-2 border-b-2 p-4 font-mono text-xs">
                    <div className="flex items-center gap-2">
                      <Box className="size-3" />
                      <span className="text-muted-foreground">
                        Block Height: {(index + 1) * 100000}
                      </span>
                    </div>
                    <div className="flex items-center gap-4">
                      <span className="text-muted-foreground">
                        Size: {210 + index * 50} KB
                      </span>
                      <span className="text-green-600 dark:text-green-400">
                        ✓ {6 + index} Confirmations
                      </span>
                    </div>
                  </div>

                  {/* Block Content */}
                  <div className="p-8 lg:p-12">
                    <div className="mb-4 flex items-center gap-4">
                      <div className="bg-primary/10 border-primary flex size-16 items-center justify-center border-2 font-mono text-2xl font-black">
                        {String(index + 1).padStart(2, "0")}
                      </div>
                      <div className="from-primary h-1 flex-1 bg-gradient-to-r to-transparent" />
                    </div>
                    <p className="text-lg font-semibold sm:text-xl">{item}</p>

                    {/* Bitcoin Stats */}
                    <div className="mt-6 grid grid-cols-2 gap-4 font-mono text-xs">
                      <div>
                        <span className="text-muted-foreground">
                          Transactions:{" "}
                        </span>
                        <span className="text-primary font-bold">
                          {(index + 1) * 500}
                        </span>
                      </div>
                      <div>
                        <span className="text-muted-foreground">Reward: </span>
                        <span className="text-primary font-bold">6.25 BTC</span>
                      </div>
                    </div>
                  </div>

                  {/* Block Footer - Previous Hash */}
                  <div className="bg-muted/50 border-primary border-t p-4 font-mono text-xs opacity-60">
                    <div className="flex flex-col gap-1">
                      <div className="flex items-center gap-2">
                        <span>Prev Block:</span>
                        <span className="text-primary truncate">
                          {index === 0
                            ? "0000000000000000000000000000000000000000000000000000000000000000"
                            : `00000000000000000${(index * 1234567).toString(16).padStart(47, "0")}`}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Us Section - Network Nodes */}
      <section className="relative px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
        {/* Network Background */}
        <div className="absolute inset-0 -z-10 opacity-20">
          <svg className="h-full w-full" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern
                id="network-pattern"
                x="0"
                y="0"
                width="100"
                height="100"
                patternUnits="userSpaceOnUse"
              >
                <circle cx="50" cy="50" r="2" fill="currentColor" />
                <line
                  x1="50"
                  y1="50"
                  x2="100"
                  y2="50"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
                <line
                  x1="50"
                  y1="50"
                  x2="50"
                  y2="100"
                  stroke="currentColor"
                  strokeWidth="0.5"
                />
              </pattern>
            </defs>
            <rect width="100%" height="100%" fill="url(#network-pattern)" />
          </svg>
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <Badge className="bg-primary/20 text-primary mb-4">
              <Network className="mr-1 size-3" />
              {t("whyUs.title")}
            </Badge>
            <h2 className="text-5xl font-black sm:text-6xl lg:text-7xl">
              {t("whyUs.title")}
            </h2>
          </div>

          {/* Network Nodes */}
          <div className="relative space-y-12">
            {whyUsItems.map((item, index) => (
              <div key={index} className="relative">
                {/* Connection Line */}
                {index < whyUsItems.length - 1 && (
                  <div className="bg-primary/30 absolute top-full left-1/2 z-0 h-12 w-1 -translate-x-1/2" />
                )}

                <div className="relative z-10 flex items-start gap-8">
                  {/* Node */}
                  <div className="relative flex-shrink-0">
                    <div className="bg-primary/10 border-primary relative flex size-20 items-center justify-center border-4 font-mono text-2xl font-black sm:size-24">
                      <div className="border-primary absolute inset-0 animate-ping border-4 opacity-20" />
                      {String(index + 1).padStart(2, "0")}
                    </div>
                    {/* Connecting Lines */}
                    <div className="bg-primary absolute top-1/2 left-full h-0.5 w-8 -translate-y-1/2" />
                  </div>

                  {/* Content Box - Bitcoin Transaction */}
                  <div className="bg-card border-primary group flex-1 border-2 p-6 transition-all hover:border-4 hover:shadow-xl lg:p-8">
                    {/* Transaction Header */}
                    <div className="border-primary/20 mb-4 flex items-center justify-between border-b border-dashed pb-2 font-mono text-xs">
                      <span className="text-muted-foreground">
                        TxID:{" "}
                        {((index + 1) * 999999).toString(16).padStart(16, "0")}
                        ...
                      </span>
                      <span className="text-green-600 dark:text-green-400">
                        ✓ {(index + 1) * 2} Confirmations
                      </span>
                    </div>

                    <div className="flex items-start gap-4">
                      <Bitcoin className="text-primary size-8 flex-shrink-0" />
                      <p className="text-lg leading-relaxed font-semibold sm:text-xl">
                        {item}
                      </p>
                    </div>

                    {/* Bitcoin Transaction Fee */}
                    <div className="mt-4 flex items-center justify-between font-mono text-xs">
                      <span className="opacity-60">
                        Fee: {(index + 1) * 1000} sats (
                        {((index + 1) * 1000) / 100000000} BTC)
                      </span>
                      <span className="text-primary">
                        {(index + 1) * 10} sat/vB
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Program Overview - Bitcoin Script (UTXO) */}
      <section className="relative px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <div className="border-primary bg-primary mb-6 inline-flex border-4 p-6">
              <GraduationCap className="size-12 text-white sm:size-16" />
            </div>
            <h2 className="text-4xl font-black uppercase sm:text-5xl lg:text-7xl">
              {t("programs.title")}
            </h2>
            <p className="text-muted-foreground mt-4 font-mono text-sm">
              {"// Bitcoin Script & UTXO Model"}
            </p>
          </div>

          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
            {programItems.map((item, index) => (
              <div
                key={index}
                className="bg-card border-primary group relative overflow-hidden border-2 transition-all hover:border-4 hover:shadow-xl"
              >
                {/* UTXO Badge */}
                <div className="bg-primary/10 border-primary flex items-center justify-between border-b p-3 font-mono text-xs">
                  <span className="text-muted-foreground">
                    UTXO: {(index + 1).toString().padStart(4, "0")}
                  </span>
                  <div className="bg-primary size-2 animate-pulse rounded-full" />
                </div>

                {/* Program Content */}
                <div className="p-6">
                  <div className="bg-primary/10 border-primary mb-4 inline-flex border-2 p-3">
                    <GraduationCap className="text-primary size-8" />
                  </div>
                  <h3 className="mb-4 text-lg font-bold sm:text-xl">{item}</h3>

                  {/* Bitcoin Script decoration */}
                  <div className="space-y-1 font-mono text-xs opacity-40">
                    <div className="from-primary h-1.5 w-3/4 bg-gradient-to-r to-transparent" />
                    <div className="from-primary h-1.5 w-full bg-gradient-to-r to-transparent" />
                    <div className="from-primary h-1.5 w-1/2 bg-gradient-to-r to-transparent" />
                  </div>
                </div>

                {/* Value Footer */}
                <div className="bg-muted/50 border-primary border-t px-4 py-2 font-mono text-xs">
                  <div className="flex items-center justify-between">
                    <span className="text-green-600 dark:text-green-400">
                      ✓ Spendable
                    </span>
                    <span className="text-primary">
                      {(index + 1) * 0.01} BTC
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section - Bitcoin Full Nodes */}
      <section className="relative px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="mb-16 text-center">
            <Badge className="bg-primary/20 text-primary mb-4">
              <Users className="mr-1 size-3" />
              {t("team.title")}
            </Badge>
            <h2 className="text-5xl font-black sm:text-6xl lg:text-7xl">
              {t("team.title")}
            </h2>
            <p className="text-muted-foreground mt-4 font-mono text-sm">
              {"// Bitcoin Full Nodes"}
            </p>
          </div>

          <div className="grid gap-8 sm:grid-cols-2">
            {teamMembers.map((member, index) => (
              <div key={index} className="relative">
                {/* Bitcoin Full Node */}
                <div className="bg-card border-primary group relative overflow-hidden border-4 transition-all hover:shadow-2xl">
                  {/* Node Status Header */}
                  <div className="bg-primary/10 border-primary flex items-center justify-between border-b-2 p-4">
                    <div className="flex items-center gap-2">
                      <div className="relative size-3 rounded-full bg-green-500">
                        <div className="absolute inset-0 animate-ping rounded-full bg-green-500" />
                      </div>
                      <span className="font-mono text-xs text-green-600 dark:text-green-400">
                        Full Node Running
                      </span>
                    </div>
                    <span className="text-muted-foreground font-mono text-xs">
                      Bitcoin Core v26.0
                    </span>
                  </div>

                  {/* Node Content */}
                  <div className="p-8 sm:p-12">
                    <div className="mb-6 flex items-center gap-4">
                      <div className="border-primary bg-primary relative flex size-20 items-center justify-center border-4">
                        <Users className="size-10 text-white" />
                        <div className="ring-card absolute -top-1 -right-1 size-4 rounded-full bg-green-500 ring-4" />
                      </div>
                      <div className="from-primary h-1 flex-1 bg-gradient-to-r to-transparent" />
                    </div>

                    <h3 className="mb-4 text-3xl font-black sm:text-4xl">
                      {member}
                    </h3>

                    {/* Bitcoin Node Stats */}
                    <div className="border-primary/20 mt-6 grid grid-cols-3 gap-4 border-t border-dashed pt-6 font-mono text-xs">
                      <div>
                        <div className="text-muted-foreground mb-1">Chain</div>
                        <div className="text-primary font-bold">100%</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground mb-1">Uptime</div>
                        <div className="text-primary font-bold">99.9%</div>
                      </div>
                      <div>
                        <div className="text-muted-foreground mb-1">Peers</div>
                        <div className="text-primary font-bold">
                          {(index + 1) * 50}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* Bitcoin Address Footer */}
                  <div className="bg-muted/50 border-primary border-t p-4 font-mono text-xs opacity-60">
                    <div className="flex items-center gap-2">
                      <Bitcoin className="size-3" />
                      <span className="truncate">
                        bc1q
                        {((index + 1) * 123456789)
                          .toString(16)
                          .padStart(38, "0")
                          .slice(0, 38)}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sponsor & Partnership - Unconfirmed Transactions */}
      <section className="relative px-4 py-20 sm:px-6 sm:py-32 lg:px-8">
        <div className="absolute inset-0 -z-10 opacity-10">
          <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]" />
        </div>

        <div className="mx-auto max-w-6xl">
          <div className="grid gap-8 lg:grid-cols-2">
            {/* Sponsor */}
            <div className="bg-card border-primary relative overflow-hidden border-4">
              {/* Unconfirmed Badge */}
              <div className="absolute top-4 right-4 rotate-12 border-2 border-orange-500 bg-orange-500/10 px-4 py-2">
                <span className="font-mono text-xs font-black text-orange-600 dark:text-orange-400">
                  MEMPOOL
                </span>
              </div>

              <div className="p-8 sm:p-12">
                {/* Icon with pulse effect */}
                <div className="relative mb-6 inline-flex">
                  <div className="border-primary bg-primary/10 border-4 p-4">
                    <Bitcoin className="text-primary size-12" />
                  </div>
                  <div className="ring-card absolute -top-1 -right-1 size-4 animate-pulse rounded-full bg-orange-500 ring-4" />
                </div>

                <h3 className="mb-4 text-3xl font-black">
                  {t("sponsor.title")}
                </h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  {t("sponsor.description")}
                </p>

                {/* Bitcoin Transaction Info */}
                <div className="border-primary/20 space-y-2 border-t pt-4 font-mono text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span className="text-orange-600 dark:text-orange-400">
                      ⏳ 0/6 Confirmations
                    </span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-muted-foreground">TxID:</span>
                    <span className="truncate">awaiting...</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fee Rate:</span>
                    <span className="text-primary">Coming Soon</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Partnership */}
            <div className="bg-card border-primary relative overflow-hidden border-4">
              {/* Unconfirmed Badge */}
              <div className="absolute top-4 right-4 -rotate-12 border-2 border-blue-500 bg-blue-500/10 px-4 py-2">
                <span className="font-mono text-xs font-black text-blue-600 dark:text-blue-400">
                  MEMPOOL
                </span>
              </div>

              <div className="p-8 sm:p-12">
                {/* Icon with pulse effect */}
                <div className="relative mb-6 inline-flex">
                  <div className="border-primary bg-primary/10 border-4 p-4">
                    <Handshake className="text-primary size-12" />
                  </div>
                  <div className="ring-card absolute -top-1 -right-1 size-4 animate-pulse rounded-full bg-blue-500 ring-4" />
                </div>

                <h3 className="mb-4 text-3xl font-black">
                  {t("partnership.title")}
                </h3>
                <p className="text-muted-foreground mb-6 text-lg">
                  {t("partnership.description")}
                </p>

                {/* Bitcoin Transaction Info */}
                <div className="border-primary/20 space-y-2 border-t pt-4 font-mono text-xs">
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Status:</span>
                    <span className="text-blue-600 dark:text-blue-400">
                      ⏳ 0/6 Confirmations
                    </span>
                  </div>
                  <div className="flex justify-between gap-2">
                    <span className="text-muted-foreground">TxID:</span>
                    <span className="truncate">awaiting...</span>
                  </div>
                  <div className="flex justify-between">
                    <span className="text-muted-foreground">Fee Rate:</span>
                    <span className="text-primary">Coming Soon</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
