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
          <span>Game Developer</span>
          <span className="block h-1 w-full bg-blue-500 mt-3 rounded"></span>
        </h1>
        <p className="mt-2 text-lg text-gray-800 mb-2">
          플레이어 경험을 수식과 데이터로 설계하고, 직접 구현·검증하며 게임의
          재미를 완성합니다.
        </p>
        <p className="text-xs text-gray-600 mb-10">
          ※ 이 사이트는 Chrome 브라우저에서 가장 안정적으로 작동합니다.
        </p>

        {/* 갤러리 컴포넌트 */}
        <Gallery
          coverOnly
          title="Project Images"
          images={[
            {
              src: "/images/gearandtower/title.png",
              alt: "Gear & Tower - 메인 타이틀",
            },
            {
              src: "/images/gearandtower/lobby-left.png",
              alt: "Gear & Tower - 대기실 허브",
            },
            {
              src: "/images/gearandtower/armory-equip.png",
              alt: "Gear & Tower - 무기고 장비 & 강화",
            },
            {
              src: "/images/gearandtower/training.png",
              alt: "Gear & Tower - 훈련소 피해량 측정",
            },
            {
              src: "/images/gearandtower/ingame.png",
              alt: "Gear & Tower - 1080p 인게임 전투",
            },
            {
              src: "/images/gearandtower/constellation.png",
              alt: "Gear & Tower - 심연의 성좌",
            },
            {
              src: "/images/tinyjourney/combat.png",
              alt: "TinyJourney - 던전 전투",
            },
            {
              src: "/images/tinyjourney/inventory.png",
              alt: "TinyJourney - 격자 가방",
            },
            {
              src: "/images/tinyjourney/housing.png",
              alt: "TinyJourney - 마이홈 가구 배치",
            },
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
            <h3 className="text-2xl font-bold mb-6">Game Projects</h3>
            <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {/* Gear & Tower (v0.3.0) */}
              <Link
                href="/projects/gearandtower"
                className="group block rounded-xl border-2 border-blue-200 bg-white p-6 shadow-sm transition-all
   hover:border-blue-500 hover:shadow-md
   focus:outline-none focus-visible:border-blue-600 focus-visible:ring-2 focus-visible:ring-blue-300
   active:border-blue-700"
                aria-label="Gear and Tower 상세 페이지로 이동"
              >
                <ImgPrefixed
                  src="/images/gearandtower/title.png"
                  alt="Gear and Tower 메인 타이틀 썸네일"
                  className="aspect-video rounded-md mb-4 object-cover"
                />

                <div className="flex items-center justify-center gap-2">
                  <span className="px-2 py-0.5 text-[11px] font-bold rounded bg-blue-600 text-white">
                    v0.3.0 개편
                  </span>
                  <h3 className="text-xl font-semibold text-center">
                    Gear &amp; Tower
                  </h3>
                </div>
                <p className="mt-3 font-semibold text-sm text-gray-700 text-left">
                  2D 로그라이트 타워 디펜스 ( Unity, C#, 1인 개발 )
                </p>
                <p className="text-sm text-gray-700 text-left mt-1">
                  빠른 개발을 위해 타워 디펜스에 집중했던 베타를 리뉴얼해, AI 협업으로 확보한 개발 속도를 바탕으로 대기실 거점·장비 강화·성좌 트리 등 RPG 성장 요소를 대폭 강화했습니다.
                </p>
              </Link>

              {/* RogueTower (v0.2.4 Before Archive) */}
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
                  alt="RogueTower v0.2.4 썸네일"
                  className="aspect-video rounded-md mb-4 object-cover"
                />

                <div className="flex items-center justify-center gap-2">
                  <span className="px-2 py-0.5 text-[11px] font-semibold rounded bg-gray-100 text-gray-700 border border-gray-200">
                    v0.2.4 원형
                  </span>
                  <h3 className="text-xl font-semibold text-center">
                    RogueTower
                  </h3>
                </div>
                <p className="mt-3 font-semibold text-sm text-gray-700 text-left">
                  2D 로그라이트 타워 디펜스 베타 ( Unity, C#, 1인 개발 )
                </p>
                <p className="text-sm text-gray-700 text-left mt-1">
                  절차적 맵 생성과 지형 난이도 수식, PlayFab 플레이 로그 기반
                  밸런싱을 수행한 리뉴얼 전 베타 원형입니다.
                </p>
              </Link>

              {/* TinyJourney */}
              <Link
                href="/projects/tinyjourney"
                className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all
   hover:border-blue-500 hover:shadow-md
   focus:outline-none focus-visible:border-blue-600 focus-visible:ring-2 focus-visible:ring-blue-300
   active:border-blue-700"
                aria-label="TinyJourney 상세 페이지로 이동"
              >
                <ImgPrefixed
                  src="/images/tinyjourney/combat.png"
                  alt="TinyJourney 전투 화면 썸네일"
                  className="aspect-video rounded-md mb-4 object-cover"
                />

                <h3 className="text-xl font-semibold text-center">
                  TinyJourney (가제)
                </h3>
                <p className="mt-3 font-semibold text-sm text-gray-700 text-left">
                  2D 탑뷰 익스트랙션 액션 RPG ( Unity, C#, 1인 개발 )
                </p>
                <p className="text-sm text-gray-700 text-left mt-1">
                  채집과 격자 인벤토리 파밍, 방어구를 대체하는 마이홈 하우징
                  기반의 영구 성장을 결합한 액션 RPG입니다.
                </p>
              </Link>

              {/* BaseEngine */}
              <a
                href="https://github.com/WooGeun-Nam/BaseEngine"
                target="_blank"
                rel="noopener noreferrer"
                className="group block rounded-xl border border-gray-200 bg-white p-6 shadow-sm transition-all
                 hover:border-blue-500 hover:shadow-md
                 focus:outline-none focus-visible:border-blue-600 focus-visible:ring-2 focus-visible:ring-blue-300
                 active:border-blue-700"
                aria-label="BaseEngine 깃허브로 이동"
              >
                <ImgPrefixed
                  src="/icon/DirectX11.png"
                  alt="BaseEngine 썸네일"
                  className="aspect-video rounded-md mb-4 object-cover"
                />
                <h3 className="text-xl font-semibold text-center">
                  BaseEngine
                </h3>
                <p className="mt-3 font-semibold text-sm text-gray-700 text-left">
                  C++ / DirectX 11 기반 2D 게임 엔진 ( 1인 개발 )
                </p>
                <p className="text-sm text-gray-700 text-left mt-1">
                  DirectX 11 렌더링 파이프라인과 물리 충돌, 사운드, 런타임
                  스크립팅 및 에디터 도구를 직접 구현한 2D 엔진입니다.
                </p>
              </a>

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
                  모바일 2D 슈터 액션 ( Unity, C#, 1주 )
                </p>
                <p className="text-sm text-gray-700 text-left mt-1">
                  FSM 기반 캐릭터 상태 제어와 모바일 전투 UI/UX 설계를 학습하고
                  재현한 클론 프로젝트입니다.
                </p>
              </Link>
            </div>

            {/* 기타 프로젝트: 기본 접힘 상태 */}
            <details className="mt-14 rounded-xl border border-gray-200 bg-gray-50/70">
              <summary className="px-6 py-4 flex items-center justify-between cursor-pointer select-none list-none">
                <div>
                  <h3 className="text-xl font-bold text-gray-900">
                    Others (학부 · 산학 연구 프로젝트)
                  </h3>
                  <p className="text-xs text-gray-500 mt-0.5">
                    게임 프로젝트 중심 구성을 위해 기본 접힘 상태입니다.
                    클릭하여 펼쳐볼 수 있습니다.
                  </p>
                </div>
                <span className="text-xs font-semibold text-blue-600 shrink-0 ml-4">
                  펼치기 / 접기
                </span>
              </summary>

              <div className="px-6 pb-6 pt-2 border-t border-gray-200 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
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
                    Python, PyTorch, 산학 연계 팀 프로젝트 (3인)
                  </p>
                  <p className="text-sm text-gray-700 text-left">
                    2022.05 학회 우수 논문상 연계 기업 산학 연구 및 객체 인식
                    모델 구현
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
                  aria-label="PEI 상세 페이지로 이동"
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
            </details>
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
              게임 플레이 경험을 수식과 데이터로 설계하고, 확장 가능한
              클라이언트 구조로 직접 구현·검증하는 과정에 강점을 가지고
              있습니다.
            </p>
            <p className="text-sm text-gray-800 mt-1">
              1인 프로젝트 RogueTower를 베타 출시한 뒤 스팀 정식 출시 버전(Gear
              &amp; Tower v0.3.0)으로 전면 리뉴얼하며, 확장 가능한 전투 구조
              정리, 엑셀 데이터 통합 관리, 한국어·영어 다국어 지원을
              구현했습니다.
            </p>
            <p className="text-sm text-gray-800 mt-1">
              신작 TinyJourney에서는 문서 기반 설계·검증 흐름을 적용해 절차적
              던전과 격자 가방, 마이홈 하우징 기본 시스템을 구현했습니다.
            </p>
          </section>

          {/* 기술 키워드 */}
          <section>
            <h3 className="text-2xl font-bold mb-4">기술 키워드</h3>
            <div className="flex flex-wrap gap-2 text-sm font-medium">
              <span className="px-3 py-1 rounded bg-blue-100 text-blue-900">
                C#
              </span>
              <span className="px-3 py-1 rounded bg-blue-100 text-blue-900">
                Unity
              </span>
              <span className="px-3 py-1 rounded bg-gray-100 text-gray-800">
                C++ / DirectX 11
              </span>
              <span className="px-3 py-1 rounded bg-gray-100 text-gray-800">
                Python
              </span>
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
                  <li>우수 논문 발표상 - 한국멀티미디어학회 (2022.05)</li>
                </ul>
              </div>
            </div>
          </section>

          {/* 프로젝트 경험 */}
          <section>
            {/* 게임 클라이언트 프로젝트 */}
            <div className="mb-8">
              <h4 className="text-2xl font-semibold mb-4">
                게임 개발 프로젝트
              </h4>

              {/* Gear & Tower (v0.3.0) */}
              <div className="mb-6">
                <h5 className="text-lg font-semibold">
                  Gear &amp; Tower v0.3.0 (2D 로그라이트 타워 디펜스, Unity, 1인
                  개발)
                </h5>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mt-1">
                  <li>개발 기간 : 2026.11 ~</li>
                  <li>
                    대기실 거점, 장비·성좌 이원화 성장, 선택형 타워 덱, 훈련소
                    및 몬스터 도감 등 신규 시스템과 UI/UX 전면 리뉴얼
                  </li>
                  <li>
                    대형 스크립트 역할 분할 및 이벤트 기반 전투 구조 개편, 엑셀
                    데이터 자동 연동 및 한국어·영어 실시간 전환 구현
                  </li>
                </ul>
              </div>

              {/* RogueTower (v0.2.4) */}
              <div className="mb-6">
                <h5 className="text-lg font-semibold">
                  RogueTower v0.2.4 (로그라이크 타워 디펜스 베타 원형, Unity,
                  1인 개발)
                </h5>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mt-1">
                  <li>
                    개발 기간 : 2024.10 ~ 2025.08 (약 10개월, 기획부터 베타까지
                    1인 개발)
                  </li>
                  <li>
                    오브젝트 풀링, 절차적 맵/경로 생성, PlayFab 연동, 데이터
                    지향 설계
                  </li>
                  <li>
                    실전 전투 로그(PlayFab) 분석 기반 타워·난이도 밸런스 패치
                    수행 (궁수 29%→20%, 창술사 8%→15%)
                  </li>
                </ul>
              </div>

              {/* TinyJourney */}
              <div className="mb-6">
                <h5 className="text-lg font-semibold">
                  TinyJourney (2D 탑뷰 액션 RPG + 마이홈 하우징, Unity, 1인
                  개발)
                </h5>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mt-1">
                  <li>개발 기간 : 2026.09 ~</li>
                  <li>
                    격자 인벤토리(일반 배낭·보호 가방) 파밍, 방어구를 대체하는
                    마이홈 하우징 영구 성장 및 세대교체 규칙 설계
                  </li>
                  <li>
                    파츠 분리형 캐릭터 조준·타격, 절차적 전장 생성,
                    엑셀(GameData.xlsx) 데이터 자동 연동 및 기본 시스템 데모
                    구현
                  </li>
                </ul>
              </div>

              {/* BaseEngine */}
              <div className="mb-6">
                <h5 className="text-lg font-semibold">
                  BaseEngine (C++ / DirectX 11 기반 2D 게임 엔진, 1인 개발)
                </h5>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mt-1">
                  <li>개발 기간 : 2026.01 ~ 2026.04</li>
                  <li>
                    DirectXTK·DirectXTex·ImGui·nlohmann/json 등 기반
                    라이브러리를 활용해 렌더링 파이프라인, 외부 DeltaTime 주입
                    메인 루프, AABB 물리 충돌, 사운드(XAudio2) 및 런타임 C++
                    스크립팅·에디터 도구 직접 구현
                  </li>
                </ul>
              </div>

              {/* 2D Shooter Clone */}
              <div className="mb-6">
                <h5 className="text-lg font-semibold">
                  2D Shooter Clone (모바일 2D 슈터 액션, Unity, 1인 개발)
                </h5>
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1 mt-1">
                  <li>개발 기간 : 2025.07 ~ 2025.08</li>
                  <li>
                    FSM 기반 플레이어·봇 상태 제어 및 모바일 UI/UX 전투 시스템
                    분석·재현
                  </li>
                </ul>
              </div>
            </div>

            {/* 산학 연구 및 협업 (기본 접힘) */}
            <details className="rounded-lg border border-gray-200 bg-gray-50/70">
              <summary className="px-4 py-3 flex items-center justify-between cursor-pointer select-none list-none text-sm font-semibold text-gray-700">
                <span>
                  기타 산학 연구 및 협업 프로젝트 (1건 · 클릭해 펼치기)
                </span>
                <span className="text-xs text-blue-600">펼치기 / 접기</span>
              </summary>
              <div className="px-4 pb-4 pt-2 border-t border-gray-200">
                <ul className="list-disc list-inside text-sm text-gray-700 space-y-1">
                  <li>
                    음식 객체 인식 (2022.07 ~ 2022.12 · 기업 연계 산학 3인 팀
                    프로젝트) : PyTorch·Detectron2 기반 객체 인식 모델 구현 및
                    식판 좌표 정규화 (2022.05 학회 우수 논문 발표상 연계)
                  </li>
                </ul>
              </div>
            </details>
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
            <p className="text-sm text-gray-700">
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
          </section>
        </div>
      </section>
    </main>
  );
}
