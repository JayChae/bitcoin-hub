import { BookOpen, Code2, GraduationCap,Users } from "lucide-react";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Vision Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20 max-w-6xl mx-auto">
        <h2 className="text-xs sm:text-sm font-semibold text-primary mb-3 sm:mb-4">
          VISION
        </h2>
        <p className="text-2xl sm:text-3xl md:text-4xl font-light text-white leading-relaxed">
          올바른 비트코이너 양성을 통한
          <br />
          한국 비트코인 환경 발전
        </p>
      </section>

      {/* Mission Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs sm:text-sm font-semibold text-primary mb-6 sm:mb-8">
            MISSION
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">
            <div className="p-5 sm:p-6 bg-zinc-900 rounded-lg border border-zinc-800">
              <p className="text-base sm:text-lg text-gray-300">
                흩어져 있는 정보들의 집합체
              </p>
            </div>
            <div className="p-5 sm:p-6 bg-zinc-900 rounded-lg border border-zinc-800">
              <p className="text-base sm:text-lg text-gray-300">
                전문적인 비트코인 교육
              </p>
            </div>
            <div className="p-5 sm:p-6 bg-zinc-900 rounded-lg border border-zinc-800">
              <p className="text-base sm:text-lg text-gray-300">
                올바른 비트코인 교육
              </p>
            </div>
            <div className="p-5 sm:p-6 bg-zinc-900 rounded-lg border border-zinc-800">
              <p className="text-base sm:text-lg text-gray-300">
                비트코인 개발자와 교육자 양성
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs sm:text-sm font-semibold text-primary mb-6 sm:mb-8">
            WHY US
          </h2>
          <div className="space-y-4 sm:space-y-6">
            <div className="border-l-4 border-primary pl-4 sm:pl-6 py-2 sm:py-3">
              <p className="text-base sm:text-lg md:text-xl text-gray-200">
                필요한 수준의 교육을 필요한만큼 선택하여 들을 수 있습니다.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4 sm:pl-6 py-2 sm:py-3">
              <p className="text-base sm:text-lg md:text-xl text-gray-200">
                비트코인 프로토콜 개발자가 직접 멘토링합니다.
              </p>
            </div>
            <div className="border-l-4 border-primary pl-4 sm:pl-6 py-2 sm:py-3">
              <p className="text-base sm:text-lg md:text-xl text-gray-200">
                다양한 비트코인 웹페이지 정보 제공을 통해 한국 커뮤니티에 넓은
                시야를 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs sm:text-sm font-semibold text-primary mb-6 sm:mb-8">
            PROGRAM OVERVIEW
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
            <div className="text-center p-5 sm:p-6 lg:p-8 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-primary/50 transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Code2 className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-primary" />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white">
                개발자 인턴십
              </h3>
            </div>
            <div className="text-center p-5 sm:p-6 lg:p-8 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-primary/50 transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-primary" />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white mb-1 sm:mb-2">
                교육 프로그램
              </h3>
              <p className="text-xs sm:text-sm text-gray-400">Level 1 - Level 4</p>
            </div>
            <div className="text-center p-5 sm:p-6 lg:p-8 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-primary/50 transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <BookOpen className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-primary" />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white">
                독서 모임
              </h3>
            </div>
            <div className="text-center p-5 sm:p-6 lg:p-8 bg-zinc-900 rounded-lg border border-zinc-800 hover:border-primary/50 transition-colors">
              <div className="w-10 h-10 sm:w-12 sm:h-12 lg:w-14 lg:h-14 bg-primary/10 rounded-full flex items-center justify-center mx-auto mb-3 sm:mb-4">
                <Users className="w-5 h-5 sm:w-6 sm:h-6 lg:w-7 lg:h-7 text-primary" />
              </div>
              <h3 className="text-sm sm:text-base lg:text-lg font-semibold text-white">
                비트코인 온니 컨퍼런스
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs sm:text-sm font-semibold text-primary mb-6 sm:mb-8">
            TEAM
          </h2>
          <div className="flex gap-6 md:gap-12">
            <div className="text-center">
              <div className="size-24 sm:size-28 md:size-32  bg-zinc-800 rounded-full mb-3 sm:mb-4"></div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                스펙터
              </h3>
            </div>
            <div className="text-center">
              <div className="size-24 sm:size-28 md:size-32 bg-zinc-800 rounded-full mb-3 sm:mb-4"></div>
              <h3 className="text-lg sm:text-xl font-semibold text-white">
                캘빈
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20 bg-zinc-950">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs sm:text-sm font-semibold text-primary mb-6 sm:mb-8">
            SPONSOR
          </h2>
          <div className="text-center text-gray-500">
            <p className="text-sm sm:text-base">Coming soon...</p>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="px-4 sm:px-6 py-12 sm:py-16 md:py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-xs sm:text-sm font-semibold text-primary mb-6 sm:mb-8">
            PARTNERSHIP
          </h2>
          <div className="text-center text-gray-500">
            <p className="text-sm sm:text-base">Coming soon...</p>
          </div>
        </div>
      </section>
    </div>
  );
}
