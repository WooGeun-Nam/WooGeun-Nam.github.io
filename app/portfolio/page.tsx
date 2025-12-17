import Gallery from "../../components/Gallery";
import Link from "next/link";
import ImgPrefixed from "../../components/ImgPrefixed"; // 경로는 실제 위치에 맞게 조정

export default function PortfolioHome() {
  return (
    <main className="mx-auto max-w-6xl px-4">
      {/* Home */}
      <section
        id="home"
        className="min-h-[50vh] flex flex-col items-center justify-center text-center scroll-mt-20"
      >
        {/* 배경색 제거, 파란 밑줄 유지 */}
        <h1 className="relative inline-block text-6xl font-extrabold tracking-tight">
          <span>Game Client Programmer</span>
          <span className="block h-1 w-full bg-blue-500 mt-3 rounded"></span>
        </h1>
        <p className="mt-1 text-lg text-gray-800 mb-2">
          개인 프로젝트를 통해 기획과 프로그래밍을 함께 경험하며, 문제 해결
          역량을 키워왔습니다.
        </p>
        <p className="text-xs text-gray-600 mb-10">
          ※ 이 사이트는 Chrome 브라우저에서 가장 안정적으로 작동합니다.
        </p>

        {/* 갤러리 컴포넌트 */}
        <Gallery
          coverOnly
          title="Project Images"
          images={[
            { src: "/Desc/Lobby.png", alt: "RogueTower-Lobby" },
            { src: "/Desc/WaitingRoom.png", alt: "RogueTower-WaitingRoom" },
            { src: "/Desc/InfinityMode.png", alt: "RogueTower-InfinityMode" },
            { src: "/Desc/IngameUI.png", alt: "RogueTower-IngameUI" },
            { src: "/Desc/DamageMeter.png", alt: "RogueTower-DamageMeter" },
            { src: "/Desc/Perk.png", alt: "RogueTower-Perk" },
            { src: "/Desc/RandomReward.png", alt: "RogueTower-RandomReward" },
            {
              src: "/PortPolio/2DShooterCloneThum.png",
              alt: "2DShooterClone-Thumnail",
            },
            {
              src: "/PortPolio/ProjectileEnemy.png",
              alt: "2DShooterClone-Projectile",
            },
            { src: "/PortPolio/BotAI.png", alt: "2DShooterClone-BotAI" },
          ]}
        />
      </section>

      {/* Projects 섹션 */}
      <section id="projects" className="py-10 scroll-mt-18">
        {/* 풀블리드 배경 */}
        <div className="w-screen relative left-1/2 right-1/2 -ml-[50vw] -mr-[50vw] bg-white">
          {/* 실제 내용은 중앙 정렬된 컨테이너 안에 배치 */}
          <div className="mx-auto max-w-6xl px-6 py-12">
            <h2 className="text-center text-4xl sm:text-5xl font-extrabold mb-12">
              Projects
            </h2>

            {/* 게임 클라이언트 프로젝트 */}
            <h3 className="text-2xl font-bold mb-6">Game Client</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2">
              {/* RogueTower */}
              <Link
                href="/projects/roguetower"
                className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all
   hover:border-blue-500 hover:shadow-md
   focus:outline-none focus-visible:border-blue-600 focus-visible:ring-2 focus-visible:ring-blue-300
   active:border-blue-700"
                aria-label="RogueTower 상세 페이지로 이동"
              >
                <ImgPrefixed
                  src="/SiteLogo.png"
                  alt="RogueTower 썸네일"
                  className="aspect-video rounded-md mb-4 object-cover"
                />

                <h3 className="text-xl font-semibold text-center">
                  RogueTower
                </h3>
                <p className="mt-3 font-semibold text-sm text-gray-700 text-left">
                  로그라이크 타워 디펜스 ( Unity, C#, 1인개발 )
                </p>
                <p className="text-sm text-gray-700 text-left">
                  타워디펜스의 전략적 배치와 장비 파밍 기반 성장을 결합하고,
                  랜덤 맵과 웨이브별 보상을 통해 로그라이크적 변주와 전략성을
                  강화한 게임
                </p>
              </Link>

              {/* 2D Shooter Clone */}
              <Link
                href="/projects/2dshooterclone"
                className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all
                 hover:border-blue-500 hover:shadow-md
                 focus:outline-none focus-visible:border-blue-600 focus-visible:ring-2 focus-visible:ring-blue-300
                 active:border-blue-700"
                aria-label="2D Shooter Clone 상세 페이지로 이동"
              >
                <ImgPrefixed
                  src="/PortPolio/2DShooterCloneThum.png"
                  alt="2DShooterClone 썸네일"
                  className="aspect-video rounded-md mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-center">
                  2D Shooter Clone
                </h3>
                <p className="mt-3 font-semibold text-sm text-gray-700 text-left">
                  모바일 기반 2D 슈터 액션 ( Unity, C#, 1인개발 )
                </p>
                <p className="text-sm text-gray-700 text-left">
                  FSM 기반 상태 제어와 모바일 UI/UX 경험 설계를 중심으로 학습한
                  클론 프로젝트
                </p>
              </Link>

              {/* BassEngine */}
              <a
                href="https://github.com/WooGeun-Nam/BaseEngine"
                target="_blank"
                className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all
                 hover:border-blue-500 hover:shadow-md
                 focus:outline-none focus-visible:border-blue-600 focus-visible:ring-2 focus-visible:ring-blue-300
                 active:border-blue-700"
                aria-label="2D Shooter Clone 상세 페이지로 이동"
              >
                <ImgPrefixed
                  src="/icon/DirectX11.png"
                  alt="2DShooterClone 썸네일"
                  className="aspect-video rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold text-center">
                  BassEngine
                </h3>
                <p className="mt-3 font-semibold text-sm text-gray-700 text-left">
                  C++와 DirectX 11을 사용하여 제작된 2D 게임 엔진
                </p>
                <p className="text-sm text-gray-700 text-left">
                  물리 시스템, UI, 오디오, 애니메이션 등 게임 개발에 필요한
                  기능을 제공
                </p>
              </a>
            </div>

            {/* 기타 프로젝트 */}
            <h3 className="text-2xl font-bold mt-12 mb-6">Others</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* 음식 객체 인식 */}
              <Link
                href="/projects/detectfood"
                className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all
              hover:border-blue-500 hover:shadow-md
              focus:outline-none focus-visible:border-blue-600 focus-visible:ring-2 focus-visible:ring-blue-300
              active:border-blue-700"
                aria-label="음식 객체 인식 프로젝트 상세 페이지로 이동"
              >
                <ImgPrefixed
                  src="/Others/AI1.png"
                  className="aspect-video rounded-md mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-center">
                  음식 객체 인식
                </h3>
                <p className="mt-3 font-semibold text-sm text-gray-700 text-left">
                  Python, 팀 프로젝트 ( 학부 연구 )
                </p>
                <p className="text-sm text-gray-700 text-left">
                  머신러닝(CNN)을 통한 음식 객체 인식 모델 구현
                </p>
              </Link>

              {/* 스마트 IoT 센서 시스템 */}
              <Link
                href="/projects/iot-sensor"
                className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all
              hover:border-blue-500 hover:shadow-md
              focus:outline-none focus-visible:border-blue-600 focus-visible:ring-2 focus-visible:ring-blue-300
              active:border-blue-700"
                aria-label="스마트 IoT 센서 시스템 상세 페이지로 이동"
              >
                <ImgPrefixed
                  src="/Others/IOT1.png"
                  className="aspect-video rounded-md mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-center">
                  스마트 온습도 제어
                </h3>
                <p className="mt-3 font-semibold text-sm text-gray-700 text-left">
                  Python, 개인 프로젝트
                </p>
                <p className="text-sm text-gray-700 text-left">
                  온습도 센서를 활용한 IoT 모니터링 시스템 구현
                </p>
              </Link>

              {/* Portable Electronic Instrumental */}
              <Link
                href="/projects/pei"
                className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all
              hover:border-blue-500 hover:shadow-md
              focus:outline-none focus-visible:border-blue-600 focus-visible:ring-2 focus-visible:ring-blue-300
              active:border-blue-700"
                aria-label="EveryTimeClone 상세 페이지로 이동"
              >
                <ImgPrefixed
                  src="/Others/PEI1.png"
                  className="aspect-video rounded-md mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-center">PEI</h3>
                <p className="mt-3 font-semibold text-sm text-gray-700 text-left">
                  Python, 개인 프로젝트
                </p>
                <p className="text-sm text-gray-700 text-left">
                  Raspberry Pi를 활용한 휴대용 가상악기 제작
                </p>
              </Link>

              {/* 항공 예약 관리 시스템 */}
              <Link
                href="/projects/airreserve"
                className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all
              hover:border-blue-500 hover:shadow-md
              focus:outline-none focus-visible:border-blue-600 focus-visible:ring-2 focus-visible:ring-blue-300
              active:border-blue-700"
                aria-label="항공 예약 관리 시스템 상세 페이지로 이동"
              >
                <ImgPrefixed
                  src="/Others/AirReserve1.png"
                  className="aspect-video rounded-md mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-center">
                  항공 예약 관리 시스템
                </h3>
                <p className="mt-3 font-semibold text-sm text-gray-700 text-left">
                  Pro*C, 개인 프로젝트
                </p>
                <p className="text-sm text-gray-700 text-left">
                  DB 설계 및 DB 연동 예약 관리 로직 구현
                </p>
              </Link>

              {/* EveryTimeClone */}
              <Link
                href="/projects/everytimeclone"
                className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all
              hover:border-blue-500 hover:shadow-md
              focus:outline-none focus-visible:border-blue-600 focus-visible:ring-2 focus-visible:ring-blue-300
              active:border-blue-700"
                aria-label="EveryTimeClone 상세 페이지로 이동"
              >
                <ImgPrefixed
                  src="/Others/etc1.png"
                  className="aspect-video rounded-md mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-center">
                  EveryTimeClone
                </h3>
                <p className="mt-3 font-semibold text-sm text-gray-700 text-left">
                  Java, 팀 프로젝트
                </p>
                <p className="text-sm text-gray-700 text-left">
                  MySql 기반의 DB 서버 구축 및 관리
                </p>
              </Link>

              {/* 키오스크 프로그램 */}
              <Link
                href="/projects/kiosk"
                className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all
              hover:border-blue-500 hover:shadow-md
              focus:outline-none focus-visible:border-blue-600 focus-visible:ring-2 focus-visible:ring-blue-300
              active:border-blue-700"
                aria-label="키오스크 프로그램 상세 페이지로 이동"
              >
                <ImgPrefixed
                  src="/Others/Kiosk1.png"
                  className="aspect-video rounded-md mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-center">
                  키오스크 프로그램
                </h3>
                <p className="mt-3 font-semibold text-sm text-gray-700 text-left">
                  Linux, C, 개인 프로젝트
                </p>
                <p className="text-sm text-gray-700 text-left">
                  Linux 환경에서 코딩 및 컴파일 숙련
                </p>
              </Link>

              {/* 대학 정보 시스템 */}
              <Link
                href="/projects/uis"
                className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all
              hover:border-blue-500 hover:shadow-md
              focus:outline-none focus-visible:border-blue-600 focus-visible:ring-2 focus-visible:ring-blue-300
              active:border-blue-700"
                aria-label="대학 정보 시스템 상세 페이지로 이동"
              >
                <ImgPrefixed
                  src="/Others/UIS1.png"
                  className="aspect-video rounded-md mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-center">
                  대학 정보 시스템
                </h3>
                <p className="mt-3 font-semibold text-sm text-gray-700 text-left">
                  Java, 팀 프로젝트
                </p>
                <p className="text-sm text-gray-700 text-left">
                  학사 정보 관리 및 GUI 기반 CRUD 기능 구현
                </p>
              </Link>

              {/* 내 맘대로 연주 */}
              <Link
                href="/projects/mfc-music"
                className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all
              hover:border-blue-500 hover:shadow-md
              focus:outline-none focus-visible:border-blue-600 focus-visible:ring-2 focus-visible:ring-blue-300
              active:border-blue-700"
                aria-label="내 맘대로 연주 상세 페이지로 이동"
              >
                <ImgPrefixed
                  src="/Others/MFC1.png"
                  className="aspect-video rounded-md mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-center">
                  내 맘대로 연주
                </h3>
                <p className="mt-3 font-semibold text-sm text-gray-700 text-left">
                  C++, 팀 프로젝트
                </p>
                <p className="text-sm text-gray-700 text-left">
                  MFC 기반으로 입력 처리 및 음원 출력 기능 구현
                </p>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Resume */}
      <section id="resume" className="py-10 scroll-mt-20">
        <h2 className="text-center text-4xl sm:text-5xl font-extrabold mb-10">
          Resume
        </h2>

        {/* 블록 형태로 전체 감싸기 */}
        <div className="mx-auto max-w-6xl bg-white shadow-md rounded-lg p-8 space-y-10 text-left">
          {/* 자기소개 */}
          <section>
            <h3 className="text-2xl font-bold mb-4">자기소개</h3>
            <p className="text-sm text-gray-800">
              게임 플레이 경험을 정량화하고 안정적인 전투 루프를 설계하는 과정에
              흥미를 가지고 있습니다.
            </p>
            <p className="text-sm text-gray-800">
              Unity 기반 개인 프로젝트 RogueTower를 10개월간 개발하며 구조
              설계와 성능 최적화 경험을 쌓았고, 로그라이크·타워디펜스 요소를
              결합해 다양한 전략 변수를 구현했습니다.
            </p>
            <p className="text-sm text-gray-800">
              데이터 로깅과 오류 수집을 통해 밸런스 문제를 추적하고 개선했으며,
              UI와 전투 로직을 이벤트 기반으로 분리해 유지보수성과 확장성을
              확보했습니다.
            </p>
            <p className="text-sm text-gray-800">
              아트와 사운드까지 직접 다루며 여러 영역을 이해했고, 이를 통해
              완성도 높은 사용자 경험을 설계하는 방법을 배웠습니다.
            </p>
          </section>

          {/* 기술 키워드 */}
          <section>
            <h3 className="text-2xl font-bold mb-4">기술 키워드</h3>
            <div className="flex flex-wrap gap-2 text-sm">
              <span className="px-2 py-1 rounded bg-blue-100">C#</span>
              <span className="px-2 py-1 rounded bg-gray-100">C++</span>
              <span className="px-2 py-1 rounded bg-gray-100">Java</span>
              <span className="px-2 py-1 rounded bg-gray-100">Python</span>
              <span className="w-full"></span>
              <span className="px-2 py-1 rounded bg-blue-100">Unity</span>
              <span className="px-2 py-1 rounded bg-gray-100">Spring</span>
              <span className="px-2 py-1 rounded bg-gray-100">MySql</span>
              <span className="w-full"></span>
              <span className="px-2 py-1 rounded bg-gray-100">Git</span>
              <span className="px-2 py-1 rounded bg-gray-100">PlayFab</span>
              <span className="px-2 py-1 rounded bg-gray-100">Aseprite</span>
              <span className="px-2 py-1 rounded bg-gray-100">FLStudio</span>
            </div>
          </section>

          {/* 이력 요약 */}
          <section>
            <h3 className="text-2xl font-bold mb-4">이력 요약</h3>
            <div className="space-y-4 text-sm text-gray-800">
              <div>
                <p className="font-semibold">학력</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>동의대학교 컴퓨터소프트웨어학과 졸업 (2023.02)</li>
                </ul>
              </div>
              <div>
                <p className="font-semibold">수상</p>
                <ul className="list-disc pl-5 mt-2 space-y-1">
                  <li>우수 논문 발표상 – 한국멀티미디어학회 (2022.05)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 프로젝트 경험 */}
          <section>
            {/* 게임 클라이언트 프로젝트 */}
            <div className="mb-10">
              <h4 className="text-2xl font-semibold mb-4">
                게임 클라이언트 프로젝트
              </h4>

              {/* RogueTower */}
              <div className="mb-6">
                <h5 className="text-lg font-semibold">
                  RogueTower (로그라이크 타워 디펜스, Unity, 개인 프로젝트)
                </h5>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>개발 기간 : 2024.10 ~ 2025.08 (약 10개월)</li>
                  <li>기획부터 베타까지 1인 개발</li>
                  <li>
                    오브젝트 풀링, 절차적 맵/경로 생성, PlayFab 연동, 데이터
                    지향 설계
                  </li>
                </ul>
              </div>

              {/* 2DShooterClone */}
              <div className="mb-6">
                <h5 className="text-lg font-semibold">
                  2D Shooter Clone (2D 슈터 액션, Unity, 개인 프로젝트)
                </h5>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>개발 기간 : 2025.07 ~ 2025.08</li>
                  <li>모바일 UI/UX 학습을 목표로 전투 시스템을 분석·재현</li>
                  <li>
                    FSM 기반으로 플레이어·봇의 이동, 공격, 스킬 캐스팅 상태를
                    일관성 있게 관리
                  </li>
                </ul>
              </div>
            </div>

            {/* 기타 프로젝트 */}
            <div>
              <h4 className="text-2xl font-semibold mb-4">기타 프로젝트</h4>

              <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                <li>
                  음식 객체 인식 (학부 연구 프로젝트) : CNN 모델 적용, Python
                  기반 머신러닝
                </li>
                <li>
                  스마트 IoT 센서 시스템 (팀 프로젝트) : Raspberry Pi 기반
                  온습도 모니터링
                </li>
                <li>PEI : Raspberry Pi 를 활용한 휴대용 가상악기 제작</li>
                <li>
                  항공 예약 관리 시스템 : C, Pro*C, OracleSQL 기반 예약 관리
                  로직 및 DB 연동
                </li>
                <li>
                  EveryTimeClone (Java 팀 프로젝트) : MySql 기반의 DB 서버 구축
                  및 관리
                </li>
                <li>키오스크 프로그램 : Linux 환경에서 코딩 및 컴파일 숙련</li>
                <li>
                  대학 정보 시스템 (Java 팀 프로젝트) : 학사 정보 관리, Java
                  기반 GUI 및 CRUD 기능
                </li>
                <li>
                  내 맘대로 연주 (C++ 팀 프로젝트) : MFC 활용, 키보드 입력 처리
                  및 음원 출력
                </li>
              </ul>
            </div>
          </section>

          {/* Contact */}
          <section>
            <h3 className="text-2xl font-bold mb-4">Contact</h3>
            <p className="text-sm text-gray-800">Email : cowzza1@naver.com</p>
            <p className="text-sm text-gray-700">
              GitHub :
              <a
                href="https://github.com/WooGeun-Nam"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-blue-600 underline hover:text-blue-800"
              >
                https://github.com/WooGeun-Nam
              </a>
            </p>
            <p className="text-sm text-gray-700 mb-4">
              SoundCloud :
              <a
                href="https://soundcloud.com/gamto"
                target="_blank"
                rel="noopener noreferrer"
                className="ml-2 text-blue-600 underline hover:text-blue-800"
              >
                https://soundcloud.com/gamto
              </a>
            </p>
            <a href="https://myhits.vercel.app">
              <img
                src="https://myhits.vercel.app/api/hit/https%3A%2F%2Fwoogeun-nam.github.io%2Ftowerdefense-portfolio%2F?color=purple&label=Visitors&size=small"
                alt="Visitors"
                // style={{ display: "none" }}
              />
            </a>
          </section>
        </div>
      </section>
    </main>
  );
}
