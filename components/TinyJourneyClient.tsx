"use client";

import React, { useState, useEffect } from "react";
import ImgPrefixed from "./ImgPrefixed";

interface TinyJourneyClientProps {
  initialTab?: "plan" | "tech";
}

export default function TinyJourneyClient({
  initialTab = "plan",
}: TinyJourneyClientProps) {
  const [activeTab, setActiveTab] = useState<"plan" | "tech">(initialTab);

  const DEMO_VIDEO_EMBED_URL = "https://www.youtube.com/embed/cxKFzXZKWmQ";

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  const handleTabChange = (tabId: "plan" | "tech") => {
    setActiveTab(tabId);
    if (typeof window !== "undefined") {
      window.history.pushState(null, "", `/projects/tinyjourney/${tabId}/`);
    }
  };

  const tabs = [
    { id: "plan", label: "기획서" },
    { id: "tech", label: "기술서" },
  ] as const;

  const planSections = [
    { id: "plan-01", tag: "개요와 데모 영상" },
    { id: "plan-02", tag: "AI 4단계 문서 루프" },
    { id: "plan-03", tag: "세계관과 세대교체" },
    { id: "plan-04", tag: "가방과 하우징" },
    { id: "plan-05", tag: "전투와 타격감" },
    { id: "plan-06", tag: "절차적 전장 설계" },
    { id: "plan-07", tag: "몬스터와 상성" },
  ];

  const techSections = [
    { id: "tech-01", tag: "엑셀 데이터 연동" },
    { id: "tech-02", tag: "공격 분리와 성능 최적화" },
    { id: "tech-03", tag: "동적 하우징과 네트워크" },
  ];

  const demoScreenshots = [
    {
      src: "/images/tinyjourney/inventory.png",
      tag: "마을 / 가방 UI",
      title: "탐험 배낭과 보호 가방",
      desc: "아이템 크기별 격자 배치와 드래그 중 R키 회전, 우클릭 빠른 이동을 지원합니다.",
    },
    {
      src: "/images/tinyjourney/housing.png",
      tag: "마이홈 / 가구 배치",
      title: "개인 숙소 가구 설치",
      desc: "B키 배치 모드에서 가구를 설치하거나 회수하면 배치 점수와 기초 스탯이 즉시 반영됩니다.",
    },
    {
      src: "/images/tinyjourney/storage.png",
      tag: "마을 / 통합 창고",
      title: "일반과 가구 창고 분리",
      desc: "마을 창고 NPC를 통해 일반 전리품과 하우징 가구, 촉매를 구분해 보관합니다.",
    },
    {
      src: "/images/tinyjourney/combat.png",
      tag: "던전 / 전투 액션",
      title: "360도 조준과 근접 타격",
      desc: "어깨 피벗 조준과 대시, 역경직, 넉백을 조합한 기본 근접 전투 동작을 구현했습니다.",
    },
    {
      src: "/images/tinyjourney/reward-list.png",
      tag: "던전 클리어",
      title: "탈출 전 전리품 목록",
      desc: "성소 수호자를 처치해 탈출 게이트가 열리면 획득한 전리품 목록을 한눈에 확인합니다.",
    },
    {
      src: "/images/tinyjourney/reward-loot.png",
      tag: "보상 적재 / 귀환",
      title: "전리품 적재와 마을 복귀",
      desc: "전리품을 배낭으로 드래그해 옮긴 뒤 마을로 귀환하는 기본 탐험 루프를 구현했습니다.",
    },
  ];

  const docLoopSteps = [
    {
      step: "01",
      file: "기획.md",
      title: "기획서 작성",
      desc: "구현할 시스템의 플레이 규칙, 예외 조건, 수치 기준을 먼저 확정해 AI가 임의로 스펙을 변경하지 못하도록 기준선을 설정합니다.",
    },
    {
      step: "02",
      file: "프로그래밍_설계.md",
      title: "설계서 정의",
      desc: "기존 코드 구조를 분석해 클래스, 의존 관계, 객체지향 및 성능 최적화 지침을 문서로 고정하여 하드코딩과 스크립트 비대화를 사전에 차단합니다.",
    },
    {
      step: "03",
      file: "작업지시.md",
      title: "작업지시서 할당",
      desc: "한 번에 수정할 단일 파일 범위와 코딩 원칙을 명시하고, 수행할 작업을 번호 순서로 나누어 AI에게 단계별로 지시합니다.",
    },
    {
      step: "04",
      file: "IDE결과.md",
      title: "결과보고서 검증 및 환류",
      desc: "컴파일 오류 0건과 실기 동작 결과를 기록하고, 발견된 보완점을 다음 작업의 기획서와 설계서 갱신에 다시 반영합니다.",
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 space-y-12 text-gray-800 antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* 1. 상단 메타 헤더 */}
      <section className="grid gap-8 md:grid-cols-2 items-stretch">
        <div className="rounded-xl overflow-hidden shadow-sm flex items-center justify-center bg-gray-50 border border-gray-200">
          <ImgPrefixed
            src="/images/tinyjourney/combat.png"
            alt="TinyJourney 메인 전투 썸네일"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold underline decoration-blue-500 underline-offset-8">
              TinyJourney <span className="text-2xl font-normal text-gray-400">(가제)</span>
            </h1>
            <p className="text-sm sm:text-[15px] text-gray-600 mt-3 font-medium">
              2D 탑뷰 익스트랙션 액션 RPG (채집, 제작, 마이홈 하우징 성장)
            </p>

            <dl className="grid grid-cols-[120px_1fr] gap-x-4 gap-y-5 text-gray-800 mt-7 text-sm sm:text-[15px]">
              <dt className="font-semibold text-gray-600">ROLE</dt>
              <dd>기획, 클라이언트 개발, 그래픽</dd>

              <dt className="font-semibold text-gray-600">DURATION</dt>
              <dd>2026.09 ~</dd>

              <dt className="font-semibold text-gray-600">TEAM</dt>
              <dd>1인 개발</dd>

              <dt className="font-semibold text-gray-600">PLATFORM</dt>
              <dd>PC (Windows, Steam 목표)</dd>
            </dl>
          </div>
        </div>
      </section>

      {/* 2. 탭 바 */}
      <nav className="w-full border-b border-gray-200">
        <div className="grid grid-cols-2 w-full text-center">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabChange(tab.id)}
                className={`py-3.5 text-sm sm:text-base font-bold transition-all relative cursor-pointer ${
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-500 bg-blue-50/40"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-50/60"
                }`}
              >
                {tab.label}
              </button>
            );
          })}
        </div>
      </nav>

      {/* =================================================================== */}
      {/* TAB 1: 기획서                                                       */}
      {/* =================================================================== */}
      {activeTab === "plan" && (
        <article className="space-y-16">
          {/* 기획 부문 핵심 요약 카드 (우선순위 핵심 3축) */}
          <section className="p-6 rounded-2xl bg-blue-50/40 border border-blue-200/80 space-y-4">
            <div className="flex items-center justify-between border-b border-blue-200/70 pb-3">
              <h3 className="font-bold text-blue-950 text-base sm:text-lg">기획 핵심 요약</h3>
              <span className="text-xs font-semibold text-blue-700 bg-white px-2.5 py-1 rounded-full border border-blue-200">
                코어 루프 &amp; AI 통제 프로세스
              </span>
            </div>
            <div className="grid md:grid-cols-3 gap-4 pt-1">
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-blue-200/80 space-y-1.5">
                <span className="text-sm sm:text-base font-bold text-blue-900 block">4단계 AI 문서 통제</span>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  기획서, 설계서, 작업지시서, 결과보고서의 순환 루프로 AI 맥락 유실과 코드 변질 차단
                </p>
              </div>
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-blue-200/80 space-y-1.5">
                <span className="text-sm sm:text-base font-bold text-blue-900 block">익스트랙션과 세대교체</span>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  일반 배낭은 유실되나 보호 가방과 마을 창고 자산은 다음 세대에 인계
                </p>
              </div>
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-blue-200/80 space-y-1.5">
                <span className="text-sm sm:text-base font-bold text-blue-900 block">격자 가방과 하우징 성장</span>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  공간 활용 파밍과 방어구를 대체하는 숙소 가구 기반 영구 스탯 성장
                </p>
              </div>
            </div>
          </section>

          {/* 미니 목차 바 */}
          <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-gray-200/70 text-xs sm:text-[13px]">
            <span className="font-bold text-gray-400 mr-1 text-[11px] uppercase tracking-wider">목차</span>
            {planSections.map((sec, idx) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 hover:bg-blue-50 hover:text-blue-600 text-gray-700 transition font-medium"
              >
                <span className="text-[10px] font-bold text-blue-500">0{idx + 1}</span>
                <span>{sec.tag}</span>
              </a>
            ))}
          </div>

          {/* 01. 프로젝트 개요 및 데모 */}
          <section id="plan-01" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600">01 / 개요와 데모 영상</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                프로젝트 개요와 기본 시스템 데모
              </h2>
            </header>

            <div className="text-base sm:text-[17px] text-gray-700 leading-relaxed font-normal">
              <p>
                <strong className="font-bold text-gray-900">TinyJourney</strong>는 작은 동물 캐릭터가 일상 사물(나뭇가지, 새총, 스푼 등)을 무기로 활용해 숲을 탐험하는 2D 탑뷰 익스트랙션 액션 RPG입니다.
              </p>
              <p className="mt-3 text-sm sm:text-base text-gray-600">
                단순 반복 사냥에서 벗어나 필드 파밍과 장비 성장, 그리고 거점(마이홈) 하우징을 통한 영구 성장이 하나의 루프로 순환하도록 기획했습니다.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 pt-2">
              <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-200/90 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center font-bold text-sm mb-4 shadow-sm">
                    1
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">근접 타격 피드백</h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    무기군별 차등 역경직, 카메라 진동, 체급 비례 넉백을 결합해 작은 캐릭터와 큰 무기가 맞부딪히는 손맛을 전달합니다.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200/70 text-xs font-semibold text-blue-600">
                  타격감과 공방 리듬
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-200/90 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-gray-800 text-white flex items-center justify-center font-bold text-sm mb-4 shadow-sm">
                    2
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">격자 가방 파밍</h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    탐험 가방과 보호 가방의 제한된 공간을 계산해 전리품을 챙기고, 원소 상성과 무기로 다음 탐험을 준비합니다.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200/70 text-xs font-semibold text-gray-700">
                  공간 배치와 원소 상성
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-200/90 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center font-bold text-sm mb-4 shadow-sm">
                    3
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">마이홈 하우징 성장</h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    몸통 방어구 슬롯을 두지 않는 대신 개인 숙소에 가구를 배치해 기초 생존 및 전투 스탯을 영구적으로 누적합니다.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200/70 text-xs font-semibold text-blue-600">
                  거점 꾸미기와 세대 인계
                </div>
              </div>
            </div>

            {/* 기본 시스템 동작 데모 (영상 & 2열 캡처 화면) */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-6 space-y-5 mt-4">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-gray-900">
                  기본 시스템 데모 영상 및 화면
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  마을 인벤토리와 스탯창 확인, 개인 숙소 가구 설치와 해체, 던전 전투 클리어와 전리품 획득, 마을 복귀까지 기본 코어 루프 동작을 구현한 데모입니다.
                </p>
              </div>

              <div className="w-full aspect-video rounded-xl overflow-hidden shadow border border-gray-200 bg-black">
                <iframe
                  src={DEMO_VIDEO_EMBED_URL}
                  title="TinyJourney 기본 시스템 데모 영상"
                  loading="lazy"
                  referrerPolicy="strict-origin-when-cross-origin"
                  allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                  allowFullScreen
                  className="w-full h-full"
                />
              </div>

              <div className="grid grid-cols-2 sm:grid-cols-4 gap-2 text-xs">
                <div className="p-2.5 rounded-lg bg-white border border-gray-200">
                  <div className="font-bold text-blue-700">01. 마을 정비</div>
                  <div className="text-gray-600 mt-0.5">인벤토리와 스탯 확인</div>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-gray-200">
                  <div className="font-bold text-blue-700">02. 숙소 하우징</div>
                  <div className="text-gray-600 mt-0.5">가구 설치와 회수 시연</div>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-gray-200">
                  <div className="font-bold text-blue-700">03. 던전 클리어</div>
                  <div className="text-gray-600 mt-0.5">전투와 탈출 포탈 개방</div>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-gray-200">
                  <div className="font-bold text-blue-700">04. 보상과 귀환</div>
                  <div className="text-gray-600 mt-0.5">드래그 적재와 마을 복귀</div>
                </div>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 pt-2">
                {demoScreenshots.map((shot) => (
                  <div
                    key={shot.title}
                    className="rounded-xl border border-gray-200 bg-white overflow-hidden shadow-sm flex flex-col"
                  >
                    <div className="aspect-video bg-slate-950 border-b border-gray-200">
                      <ImgPrefixed
                        src={shot.src}
                        alt={shot.title}
                        className="w-full h-full object-contain"
                      />
                    </div>
                    <div className="p-4 space-y-1.5 flex-1">
                      <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded">
                        {shot.tag}
                      </span>
                      <h4 className="text-base font-bold text-gray-900 pt-1">{shot.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">{shot.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <hr className="border-gray-200/80" />

          {/* 02. AI 흐름 통제: 4단계 순환 문서 루프 */}
          <section id="plan-02" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600">02 / AI 협업 흐름 통제</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                AI 통제 방식: 4단계 문서 루프
              </h2>
              <p className="text-sm text-gray-600">
                세션이 바뀌거나 구현 범위가 커져도 AI가 기획 의도와 기존 구조를 벗어나지 않도록, 개발 전 과정을 4단계 순환 문서 흐름으로 통제했습니다.
              </p>
            </header>

            {/* 순환 워크플로우 다이어그램 */}
            <div className="rounded-2xl border border-blue-200/80 bg-blue-50/35 p-5 sm:p-6 space-y-5">
              <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-2.5">
                {docLoopSteps.map((node, idx) => (
                  <React.Fragment key={node.step}>
                    <div className="flex-1 rounded-xl bg-white border border-blue-200/80 px-4 py-3 text-center shadow-sm">
                      <div className="text-[11px] font-extrabold text-blue-600">{node.step} 단계</div>
                      <div className="text-sm font-bold text-gray-900 mt-0.5">{node.title}</div>
                      <code className="text-[11px] font-mono text-gray-500">{node.file}</code>
                    </div>
                    {idx < docLoopSteps.length - 1 && (
                      <div className="flex items-center justify-center text-blue-500 shrink-0 py-0.5 md:py-0">
                        <svg
                          className="w-5 h-5 rotate-90 md:rotate-0"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          aria-hidden="true"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M5 12h14m-5-5 5 5-5 5" />
                        </svg>
                      </div>
                    )}
                  </React.Fragment>
                ))}
              </div>

              {/* 4단계 -> 1단계 순환 환류 화살표 바 */}
              <div className="rounded-xl bg-white/90 border border-dashed border-blue-300 px-4 py-2.5 flex items-center justify-center gap-2.5 text-xs sm:text-sm font-semibold text-blue-900">
                <svg
                  className="w-4 h-4 text-blue-600 shrink-0"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.2"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    d="M3 12a9 9 0 0 1 15.36-6.36L21 8m0-5v5h-5M21 12a9 9 0 0 1-15.36 6.36L3 16m0 5v-5h5"
                  />
                </svg>
                <span>
                  4단계 결과보고서(IDE결과.md)의 실기 검증 결과를 확인한 뒤 다음 작업의 1단계 기획서와 설계서에 반영하여 반복 순환
                </span>
              </div>

              {/* 2열 가독성 확보 상세 카드 */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-1">
                {docLoopSteps.map((doc) => (
                  <div
                    key={doc.step}
                    className="p-5 rounded-xl bg-white border border-gray-200 shadow-sm space-y-2"
                  >
                    <div className="flex items-center justify-between border-b border-gray-100 pb-2">
                      <span className="text-sm font-bold text-gray-900">
                        {doc.step}. {doc.title}
                      </span>
                      <code className="text-[11px] font-mono text-blue-700 bg-blue-50 px-2 py-0.5 rounded">
                        {doc.file}
                      </code>
                    </div>
                    <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                      {doc.desc}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* 실제 통제 적용 사례 */}
            <div className="grid md:grid-cols-2 gap-4 text-xs sm:text-sm">
              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2 shadow-sm">
                <div className="font-bold text-blue-700">통제 사례 1: 설계 지침 기반 구조 통제와 전수 리팩토링</div>
                <p className="text-gray-600 leading-relaxed">
                  AI에게 기능 구현만 지시하면 동작은 하더라도 하드코딩이 남발되거나 단일 스크립트에 로직이 과도하게 누적되기 쉽습니다. 이를 방지하기 위해 프로그래밍 설계서(프로그래밍_설계.md)에 객체지향 원칙(단일 책임, 전략 패턴)과 성능 지침을 고정해 사전 통제하고, 기능이 누적된 뒤에는 해당 지침을 기준으로 전수 리팩토링 단계를 분리 실행해 스탯 캐싱과 고정 버퍼, UI 오브젝트 풀링 구조로 재정비했습니다.
                </p>
              </div>
              <div className="p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2 shadow-sm">
                <div className="font-bold text-blue-700">통제 사례 2: 에디터 도구 분리로 AI 반복 수정 최소화</div>
                <p className="text-gray-600 leading-relaxed">
                  캐릭터 팔 각도와 무기 파지 위치처럼 수치 지시만으로 맞추기 어려운 시각적 요소를 AI에게 반복 요청해 수정하면 불필요한 재호출과 컨텍스트 소모가 커집니다. AI에게는 에디터에서 맞춘 좌표를 데이터로 자동 저장하는 도구(Bake Current Positions) 구현만 맡기고, 세밀한 수치 조정은 개발자가 유니티 에디터에서 직접 수행하도록 역할을 분리해 반복 수정 루프를 줄였습니다.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-gray-200/80" />

          {/* 03. 세계관과 세대교체 규칙 */}
          <section id="plan-03" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600">03 / 세계관과 세대교체</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                세계관과 사망 시 자산 보존 규칙
              </h2>
            </header>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4 text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                <h3 className="text-lg font-bold text-gray-900">
                  세대교체 기반 거점 인계 구조
                </h3>
                <p>
                  숲의 변이 현상을 조사하기 위해 마을에서 토벌사를 파견한다는 설정 아래, 마이홈은 이전 토벌사가 남긴 거점이며 마을 비석에 최초 실행 시각이 기록됩니다.
                </p>
                <p>
                  던전 귀환 시 배낭과 보호 가방에 챙겨 온 가구와 촉매 아이템은 마을 가구 창고로 자동 입고됩니다.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-sm space-y-2">
                  <span className="text-xs font-bold text-gray-500">규칙 1: 일반 배낭 유실</span>
                  <h4 className="text-base font-bold text-gray-900">전투 불능 시 미정산 전리품 유실</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    체력 0 도달 시 일반 탐험 배낭 내 아이템은 유실되고 다음 세대 토벌사가 부임합니다. 기본 무기는 자동 지급되어 진행이 막히지 않습니다.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-blue-200 bg-blue-50/40 shadow-sm space-y-2">
                  <span className="text-xs font-bold text-blue-600">규칙 2: 영구 자산 보존</span>
                  <h4 className="text-base font-bold text-blue-950">보호 가방과 마이홈 가구 인계</h4>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    보호 가방에 옮긴 핵심 전리품, 마이홈에 배치된 가구와 누적 스탯, 마을 통합 창고, 모험 일지 재화는 사망 후에도 그대로 유지됩니다.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-gray-200/80" />

          {/* 04. 격자 가방과 마이홈 하우징 */}
          <section id="plan-04" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600">04 / 가방과 하우징</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                격자 가방과 마이홈 하우징
              </h2>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: "01", name: "마을과 숙소 정비", desc: "가구 배치로 기초 스탯을 확보하고 창고와 가방을 정비합니다." },
                { step: "02", name: "절차적 전장 토벌", desc: "던전에 진입해 성소 수호자를 처치하고 탈출 게이트를 개방합니다." },
                { step: "03", name: "격자 가방 파밍", desc: "탐험 배낭과 보호 가방에 전리품을 회전하며 배치합니다." },
                { step: "04", name: "귀환과 영구 성장", desc: "가구 창고 자동 입고 및 숙소 배치로 영구 스탯을 올립니다." },
              ].map((stage, idx) => (
                <div key={idx} className="p-5 rounded-2xl bg-gray-50/70 border border-gray-200 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-extrabold text-blue-600">{stage.step} 단계</span>
                    <h3 className="text-base font-bold text-gray-900 mt-1">{stage.name}</h3>
                    <p className="text-xs sm:text-[13px] text-gray-600 mt-2 leading-relaxed">{stage.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
                <span className="text-xs font-bold text-blue-600">격자 인벤토리</span>
                <h3 className="text-lg font-bold text-gray-900">탐험 배낭과 확장형 보호 가방</h3>
                <ul className="text-xs sm:text-sm text-gray-700 space-y-2 list-disc pl-4 leading-relaxed">
                  <li>
                    <strong>일반 탐험 가방:</strong> 기본 6x4(24칸)에서 성장 후 최대 8x6(48칸)까지 확장됩니다.
                  </li>
                  <li>
                    <strong>보호 가방(안전 파우치):</strong> 기본 2x1에서 단계에 따라 최대 3x3까지 성장합니다.
                  </li>
                  <li>
                    <strong>조작 방식:</strong> 드래그 앤 드롭, 드래그 중 R키 90도 회전, 우클릭 빠른 이동을 지원합니다.
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
                <span className="text-xs font-bold text-blue-600">동적 방 증축과 가구 스탯</span>
                <h3 className="text-lg font-bold text-gray-900">숙소 공간 확장과 스탯 반영</h3>
                <ul className="text-xs sm:text-sm text-gray-700 space-y-2 list-disc pl-4 leading-relaxed">
                  <li>
                    <strong>방 크기 확장:</strong> 초기 6x6 방에서 건축가 증축 시 8x8로 바닥과 벽 타일, 외벽 충돌 범위가 동적으로 재구축됩니다.
                  </li>
                  <li>
                    <strong>배치와 버프 합산:</strong> B키 배치 모드와 R키 회전으로 가구를 배치하면 능력치 합산이 즉시 반영됩니다.
                  </li>
                </ul>
              </div>
            </div>

            <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm divide-y divide-gray-200">
                <thead className="bg-gray-50 text-gray-700 font-semibold">
                  <tr>
                    <th className="py-3 px-4 text-center">구분</th>
                    <th className="py-3 px-4">설계 항목</th>
                    <th className="py-3 px-4">기획 의도</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  <tr>
                    <td className="py-3 px-4 text-center font-bold text-gray-900">설계 01</td>
                    <td className="py-3 px-4 font-semibold text-blue-700">몸통 방어구 대체</td>
                    <td className="text-gray-600 py-3 px-4">착용 장비에 따라 도트 외형이 가려지지 않도록 몸통 방어구를 제거하고 가구 배치를 통해 기초 스탯을 확보합니다.</td>
                  </tr>
                  <tr>
                    <td className="py-3 px-4 text-center font-bold text-gray-900">설계 02</td>
                    <td className="py-3 px-4 font-semibold text-emerald-700">사망 페널티 완충</td>
                    <td className="py-3 px-4 text-gray-600">탐험 실패 시 미정산 배낭 아이템은 잃더라도 배치된 가구 스탯은 유지되어 반복 도전에 성취감을 줍니다.</td>
                  </tr>
                  <tr className="bg-blue-50/40">
                    <td className="py-3 px-4 text-center font-bold text-blue-950">설계 03</td>
                    <td className="py-3 px-4 font-semibold text-purple-700">공간 배치 최적화</td>
                    <td className="py-3 px-4 text-gray-700">제한된 방 공간 안에 다양한 규격의 가구를 조합해 능력치 버프를 극대화하는 배치 재미를 결합했습니다.</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </section>

          <hr className="border-gray-200/80" />

          {/* 05. 전투와 타격 피드백 */}
          <section id="plan-05" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600">05 / 전투와 타격감</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                파츠 분리 캐릭터와 타격 피드백
              </h2>
            </header>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4 text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                <p>
                  캐릭터를 <strong>머리+몸통</strong>과 <strong>팔</strong>로 분리해 기본 동작(대기, 이동)만 도트 애니메이션으로 제작하고, 팔과 무기는 어깨 축을 기준으로 360도 조준 및 140도 부채꼴 타격 스윙을 코드로 제어합니다.
                </p>
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-2">
                  <h4 className="font-bold text-gray-900 text-sm">상태별 자연 파지 자세 분리</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    대기 및 이동 중에는 팔과 무기를 90도 직각으로 자연스럽게 들고 움직이다가, 좌클릭 공격 시에만 마우스 커서 방향으로 전방 스윙을 수행한 뒤 기본 자세로 복귀하도록 설계했습니다.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-blue-50/40 border border-blue-200/80 space-y-4">
                <h3 className="font-bold text-blue-950 text-base">
                  전투 타격 피드백 수치 규격
                </h3>
                <dl className="grid grid-cols-[120px_1fr] gap-x-3 gap-y-3 text-xs sm:text-sm">
                  <dt className="font-bold text-blue-900">차등 역경직</dt>
                  <dd className="text-gray-700">
                    무기군별 차등 적용(둔기 0.045s, 베기 0.030s, 찌르기 0.020s, 원거리 0.015s), 치명타 시 추가 정지
                  </dd>

                  <dt className="font-bold text-blue-900">스태미나와 대시</dt>
                  <dd className="text-gray-700">
                    기존 고정 쿨타임을 제거하고 스태미나 40(대시 20 소모, 초당 14 회복, 무적 0.15s) 기반 연속 회피로 전환
                  </dd>

                  <dt className="font-bold text-blue-900">가변 넉백</dt>
                  <dd className="text-gray-700">
                    피해량 대비 적 최대체력 비율에 따라 밀려나는 거리를 계산해 몬스터 체급별 무게감 분리
                  </dd>

                  <dt className="font-bold text-blue-900">화면 연출</dt>
                  <dd className="text-gray-700">
                    타격 방향 카메라 진동과 피격 시 신축 변형 연출 결합
                  </dd>
                </dl>
              </div>
            </div>
          </section>

          <hr className="border-gray-200/80" />

          {/* 06. 절차적 전장 설계 */}
          <section id="plan-06" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600">06 / 절차적 전장 설계</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                무작위 던전 생성과 2.5D 지형 규칙
              </h2>
            </header>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-gray-50/80 border border-gray-200 space-y-3">
                <span className="text-xs font-bold text-gray-500">전장 레이아웃 4종</span>
                <h3 className="font-bold text-gray-900 text-base">전투 동선별 무작위 지형 생성</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-600 list-disc pl-4">
                  <li><strong>십자 교차형 (80x80):</strong> 중앙 십자형 주 협곡과 외곽 고원이 어우러진 전장</li>
                  <li><strong>수직 등반형 (60x96):</strong> 하단에서 상단 성소까지 수직으로 돌파하는 전장</li>
                  <li><strong>동서 대협곡 (108x56):</strong> 넓은 횡방향 아레나 중심 전장</li>
                  <li><strong>근접 난전형 (56x44):</strong> 짧은 동선과 높은 교전 밀도의 전장</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-gray-50/80 border border-gray-200 space-y-3">
                <span className="text-xs font-bold text-gray-500">타일맵 규칙과 성소 진행</span>
                <h3 className="font-bold text-gray-900 text-base">지형 깨짐 방지와 탈출 루프</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-600 list-disc pl-4">
                  <li><strong>지형 깨짐 방지:</strong> 짝수 격자 정렬, 능선과 턱 충돌 방지, 대각 단차 보강 및 좁은 틈 평탄화를 적용했습니다.</li>
                  <li><strong>성소 결계와 탈출 게이트:</strong> 성소 구역 진입 시 결계가 닫히며, 수호자를 처치하면 탈출 게이트가 개방됩니다.</li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="border-gray-200/80" />

          {/* 07. 몬스터와 5원소 상성 */}
          <section id="plan-07" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600">07 / 몬스터와 상성</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                프로토타입 몬스터 4종과 5원소 상성
              </h2>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  img: "/TinyJourney/slime_sprout.png",
                  name: "새싹 슬라임",
                  badge: "근접 접촉형",
                  element: "무속성",
                  desc: "플레이어를 지속 추적하며 밀착 접촉 시 피해와 넉백을 가하는 기본 몬스터입니다.",
                },
                {
                  img: "/TinyJourney/chestnut_hedgehog.png",
                  name: "밤송이 고슴도치",
                  badge: "돌진 공격형",
                  element: "대지 속성",
                  desc: "사거리 진입 시 전조 동작 후 직선 돌진을 가하며, 벽에 부딪히면 일시적으로 기절합니다.",
                },
                {
                  img: "/TinyJourney/feral_squirrel.png",
                  name: "꽃꼬리 다람쥐",
                  badge: "원거리 견제형",
                  element: "맹독 속성",
                  desc: "일정 사거리를 유지하며 이동하다가 독 포자 투사체를 발사합니다.",
                },
                {
                  img: "/TinyJourney/rotwood.png",
                  name: "뒤틀린 거목",
                  badge: "보스 (누적 패턴)",
                  element: "대지 속성",
                  desc: "체력 구간에 따라 공격 패턴이 단계적으로 누적되는 보스 몬스터입니다.",
                },
                {
                  img: "/TinyJourney/weapon_twig.png",
                  name: "단단한 나뭇가지",
                  badge: "기본 근접 무기",
                  element: "물리 (둔기)",
                  desc: "초기 지급 및 사망 후 기본 복구 무기이며 360도 조준과 140도 부채꼴 타격이 연동됩니다.",
                },
                {
                  img: "/TinyJourney/CatSide.png",
                  name: "토벌사 캐릭터",
                  badge: "파츠 분리형",
                  element: "플레이어",
                  desc: "머리와 몸통, 팔을 분리해 어깨 피벗 기준 360도 조준과 부채꼴 타격 동작을 구현했습니다.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-gray-200/90 bg-white p-5 flex flex-col justify-between shadow-sm"
                >
                  <div>
                    <div className="h-28 rounded-xl bg-gray-50 flex items-center justify-center p-3 mb-3 border border-gray-150">
                      <ImgPrefixed
                        src={item.img}
                        alt={item.name}
                        className="max-h-20 max-w-20 [image-rendering:pixelated] object-contain drop-shadow"
                      />
                    </div>
                    <div className="flex items-center justify-between mb-1">
                      <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                        {item.badge}
                      </span>
                      <span className="text-xs text-gray-500 font-medium">{item.element}</span>
                    </div>
                    <h3 className="font-bold text-gray-900 text-base mt-1">{item.name}</h3>
                  </div>
                  <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed mt-3 pt-3 border-t border-gray-100">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-5 rounded-2xl bg-gray-900 text-white space-y-3 shadow-sm">
              <div className="flex items-center justify-between border-b border-gray-800 pb-2 text-xs text-gray-400">
                <span className="font-semibold text-emerald-400">[수식] 방어력 감쇄 및 5원소 상성 데미지 공식</span>
                <span>ElementChart.csv</span>
              </div>
              <div className="font-mono text-xs sm:text-sm text-emerald-400 py-1 text-center">
                FinalDamage = RawDamage x [ 100 / (100 + Defense x (1 - Pen)) ] x ElementMult
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                화 -&gt; 토 -&gt; 뇌 -&gt; 독 -&gt; 수 -&gt; 화 순환 상성으로 유리 속성 1.5배, 불리 속성 0.7배, 동일 속성 0.5배, 무속성 1.0배를 적용합니다.
              </p>
            </div>
          </section>

          {/* 하단 탭 전환 배너 */}
          <div className="p-6 bg-gradient-to-r from-blue-50/70 to-indigo-50/40 border border-blue-200/80 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                클라이언트 아키텍처와 데이터 연동 구조가 궁금하신가요?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                엑셀 자동 동기화, 공격 행동 분리 및 메모리 최적화, 동적 하우징과 네트워크 세션 구조를 확인할 수 있습니다.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                handleTabChange("tech");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-xl transition shrink-0 shadow-sm cursor-pointer"
            >
              기술서 탭으로 이동 -&gt;
            </button>
          </div>
        </article>
      )}

      {/* =================================================================== */}
      {/* TAB 2: 기술서 (순수 클라이언트 구조 및 데이터 파이프라인)              */}
      {/* =================================================================== */}
      {activeTab === "tech" && (
        <article className="space-y-16">
          {/* 기술 핵심 요약 (핵심 3축) */}
          <section className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-4">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <h3 className="font-bold text-gray-900 text-base sm:text-lg">기술 핵심 요약</h3>
              <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                클라이언트 구조 &amp; 데이터 파이프라인
              </span>
            </div>
            <div className="grid md:grid-cols-3 gap-4 pt-1">
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-gray-200 space-y-1.5">
                <span className="text-sm sm:text-base font-bold text-gray-900 block">엑셀 데이터 자동 동기화</span>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  GameData.xlsx 저장 시 0.6초 내 자동 반영 및 실행 파일 내장 폴백 데이터 탑재
                </p>
              </div>
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-gray-200 space-y-1.5">
                <span className="text-sm sm:text-base font-bold text-gray-900 block">공격 분리와 메모리 최적화</span>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  몬스터 공격 4종 모듈 분리, 고정 버퍼 재사용 및 UI 오브젝트 풀링으로 프레임 저하 방지
                </p>
              </div>
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-gray-200 space-y-1.5">
                <span className="text-sm sm:text-base font-bold text-gray-900 block">동적 하우징과 네트워크 제어</span>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  방 증축 시 타일맵 및 외벽 콜라이더 동적 재구축과 씬 이동 시 네트워크 세션 정리
                </p>
              </div>
            </div>
          </section>

          {/* 미니 목차 바 */}
          <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-gray-200/70 text-xs sm:text-[13px]">
            <span className="font-bold text-gray-400 mr-1 text-[11px] uppercase tracking-wider">목차</span>
            {techSections.map((sec, idx) => (
              <a
                key={sec.id}
                href={`#${sec.id}`}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 hover:bg-blue-50 hover:text-blue-600 text-gray-700 transition font-medium"
              >
                <span className="text-[10px] font-bold text-blue-500">0{idx + 1}</span>
                <span>{sec.tag}</span>
              </a>
            ))}
          </div>

          {/* 01. 엑셀 데이터 연동 */}
          <section id="tech-01" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600">01 / 엑셀 데이터 연동</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                마스터 엑셀 데이터 파이프라인
              </h2>
            </header>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
                <h3 className="font-bold text-gray-900 text-base">
                  GameData.xlsx 자동 동기화 (0.6초)
                </h3>
                <ul className="text-xs sm:text-sm text-gray-600 space-y-1.5 list-disc pl-4">
                  <li><strong>ItemMaster.csv (37행):</strong> 일반, 가구, 무기, 촉매 아이템 통합 정의</li>
                  <li><strong>MonsterMaster.csv (4행):</strong> 슬라임, 고슴도치, 다람쥐, 보스 스탯</li>
                  <li><strong>PropMaster / ElementChart / ItemEffects:</strong> 프랍, 원소 상성 매트릭스, 소모품 효과</li>
                  <li><strong>Localization / Definitions / StageTheme:</strong> 다국어 매핑, 전역 상수, 테마</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
                <h3 className="font-bold text-gray-900 text-base">
                  독립 실행 환경 폴백 및 사전 캐싱
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  전투, 탐험, 생활 성장 노드 27종은 시작 시 카테고리별 리스트로 사전 캐싱해 조회 비용을 없앴으며, 정식 빌드(.exe) 환경에서 외부 CSV 경로를 찾지 못할 때도 즉시 복구되는 내장 폴백 데이터를 탑재했습니다.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-gray-200/80" />

          {/* 02. 공격 분리와 성능 최적화 */}
          <section id="tech-02" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600">02 / 공격 분리와 성능 최적화</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                공격 모듈 분리와 메모리 최적화
              </h2>
            </header>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
                <h3 className="font-bold text-gray-900 text-base">공격 행동 모듈 4종 분리</h3>
                <ul className="text-xs sm:text-sm text-gray-600 space-y-1.5 list-disc pl-4">
                  <li><strong>ContactAttackModule:</strong> 근접 추적 및 접촉 판정</li>
                  <li><strong>ChargeAttackModule:</strong> 전조 후 직선 돌진 및 벽 충돌 기절</li>
                  <li><strong>RangedShooterModule:</strong> 적정 거리 유지 및 독 포자 투사체 발사</li>
                  <li><strong>BossPhaseModule:</strong> 체력 구간별 보스 패턴 누적 실행</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
                <h3 className="font-bold text-gray-900 text-base">객체 풀링 및 버퍼 재사용 최적화</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  매 프레임 스탯 순회와 가비지 컬렉션 부하를 줄이기 위해 특성 스탯 O(1) 캐싱, 무기 타격과 몬스터 탐지용 고정 배열 버퍼 재사용, 그리고 탭 전환 시 반복 생성 및 삭제되던 UI 오브젝트의 풀링을 적용해 불필요한 메모리 할당을 억제했습니다.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-gray-200/80" />

          {/* 03. 동적 하우징과 네트워크 */}
          <section id="tech-03" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600">03 / 동적 하우징과 네트워크</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                동적 거점 재구축과 네트워크 구조
              </h2>
            </header>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <h3 className="font-bold text-gray-900 text-base">동적 하우징 타일맵 및 외벽 재구축</h3>
                <p>
                  방 규격이 6x6에서 8x8로 증축될 때 바닥과 벽 타일맵, 외벽 콜라이더 4개를 즉시 재구성하며, 좌하단(0,0) 기준 좌표계를 유지해 기존에 설치한 가구와 배치 스탯을 안전하게 보존합니다.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <h3 className="font-bold text-gray-900 text-base">서버 판정 분리와 씬 전환 세션 정리</h3>
                <p>
                  전투와 피격 판정은 P2P Listen Server 권한으로 처리하면서 역경직과 화면 진동은 로컬에서 즉시 실행합니다. 던전과 마을 씬 이동 전에는 기존 NetworkManager 종료 후 파괴 순서를 강제해 오브젝트 해시 충돌을 차단했습니다.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
                <h3 className="font-bold text-gray-900 text-base">
                  현재 구현 및 데모 확인 항목
                </h3>
                <ul className="list-disc pl-4 space-y-1.5 text-gray-700 leading-relaxed">
                  <li><strong>절차적 던전과 성소:</strong> 전장 구조 생성, 결계 봉쇄 및 수호자 처치 후 탈출 게이트 개방</li>
                  <li><strong>격자 가방과 창고:</strong> 탐험 가방, 보호 가방(드래그, 회전, 빠른 이동) 및 가구 자동 입고</li>
                  <li><strong>마이홈 하우징:</strong> B키 가구 설치와 해체, 배치 점수 반영 및 방 크기 동적 확장</li>
                  <li><strong>마을 UI와 시설:</strong> C키 스탯창, 모험 일지, 상점, 대장간, 건축, 게시판 모달 연결</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
                <h3 className="font-bold text-gray-900 text-base">
                  차기 구현 예정 로드맵
                </h3>
                <ul className="list-disc pl-4 space-y-1.5 text-gray-700 leading-relaxed">
                  <li><strong>마을 NPC 3종 전용 UI:</strong> 대사 이후 전용 심사 및 감정 모달 연결 예정</li>
                  <li><strong>무기 장착과 모딩 UI:</strong> 인벤토리 내 무기 교체 및 개조 호출 경로 연결 예정</li>
                  <li><strong>보스 아레나 던전 편입:</strong> 뒤틀린 거목 보스전의 랜덤 던전 합류 예정</li>
                  <li><strong>인프라 확장:</strong> 미니맵, 사운드 믹서, 세이브 암호화 순차 적용 예정</li>
                </ul>
              </div>
            </div>
          </section>
        </article>
      )}
    </main>
  );
}
