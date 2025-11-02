export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Vision Section */}
      <section className="px-6 py-20 max-w-6xl mx-auto">
        <h2 className="text-sm font-semibold text-orange-500 mb-4">VISION</h2>
        <p className="text-3xl md:text-4xl font-light text-gray-900 leading-relaxed">
          올바른 비트코이너 양성을 통한
          <br />
          한국 비트코인 환경 발전
        </p>
      </section>

      {/* Mission Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-semibold text-orange-500 mb-8">
            MISSION
          </h2>
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-6 bg-white rounded-lg">
              <p className="text-lg text-gray-700">흩어져 있는 정보들의 집합체</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <p className="text-lg text-gray-700">전문적인 비트코인 교육</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <p className="text-lg text-gray-700">올바른 비트코인 교육</p>
            </div>
            <div className="p-6 bg-white rounded-lg">
              <p className="text-lg text-gray-700">
                비트코인 개발자와 교육자 양성
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Why Us Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-semibold text-orange-500 mb-8">WHY US</h2>
          <div className="space-y-6">
            <div className="border-l-4 border-orange-500 pl-6 py-3">
              <p className="text-xl text-gray-800">
                필요한 수준의 교육을 필요한만큼 선택하여 들을 수 있습니다.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-6 py-3">
              <p className="text-xl text-gray-800">
                비트코인 프로토콜 개발자가 직접 멘토링합니다.
              </p>
            </div>
            <div className="border-l-4 border-orange-500 pl-6 py-3">
              <p className="text-xl text-gray-800">
                다양한 비트코인 웹페이지 정보 제공을 통해 한국 커뮤니티에 넓은
                시야를 제공합니다.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Program Overview Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-semibold text-orange-500 mb-8">
            PROGRAM OVERVIEW
          </h2>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            <div className="text-center p-8 bg-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                개발자 인턴십
              </h3>
            </div>
            <div className="text-center p-8 bg-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                교육 프로그램
              </h3>
              <p className="text-sm text-gray-600">Level 1 - Level 4</p>
            </div>
            <div className="text-center p-8 bg-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                독서 모임
              </h3>
            </div>
            <div className="text-center p-8 bg-white rounded-lg hover:shadow-lg transition-shadow">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">
                비트코인 온니 컨퍼런스
              </h3>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-semibold text-orange-500 mb-8">TEAM</h2>
          <div className="grid md:grid-cols-2 gap-8 max-w-2xl">
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900">스펙터</h3>
            </div>
            <div className="text-center">
              <div className="w-32 h-32 bg-gray-200 rounded-full mx-auto mb-4"></div>
              <h3 className="text-xl font-semibold text-gray-900">캘빈</h3>
            </div>
          </div>
        </div>
      </section>

      {/* Sponsor Section */}
      <section className="px-6 py-20 bg-gray-50">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-semibold text-orange-500 mb-8">
            SPONSOR
          </h2>
          <div className="text-center text-gray-400">
            <p>Coming soon...</p>
          </div>
        </div>
      </section>

      {/* Partnership Section */}
      <section className="px-6 py-20">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-sm font-semibold text-orange-500 mb-8">
            PARTNERSHIP
          </h2>
          <div className="text-center text-gray-400">
            <p>Coming soon...</p>
          </div>
        </div>
      </section>
    </div>
  );
}
