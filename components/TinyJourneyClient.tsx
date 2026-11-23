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
    { id: "plan-01", tag: "개요 & 데모 영상", title: "프로젝트 개요 및 기본 시스템 데모" },
    { id: "plan-02", tag: "세계관 & 사망 규칙", title: "세계관 설정 및 사망·세대교체 규칙" },
    { id: "plan-03", tag: "가방 & 마이홈 하우징", title: "코어 루프와 격자 가방·마이홈 하우징" },
    { id: "plan-04", tag: "전투 & 타격 피드백", title: "파츠 분리형 캐릭터와 타격 피드백 설계" },
    { id: "plan-05", tag: "레벨 디자인", title: "절차적 전장 생성 및 지형 위계" },
    { id: "plan-06", tag: "몬스터 & 상성", title: "몬스터 메커니즘과 프로토타입 도감" },
  ];

  const techSections = [
    { id: "tech-01", tag: "데이터 파이프라인", title: "GameData.xlsx 자동 동기화 파이프라인" },
    { id: "tech-02", tag: "공격 모듈 & 물리", title: "IMonsterAttackModule 전략 패턴 및 무할당 물리" },
    { id: "tech-03", tag: "2.5D 소팅 & 렌더링", title: "하향 공격 소팅 보정(+1000) 및 전면 절벽 분리" },
    { id: "tech-04", tag: "네트워크 & 세션 관리", title: "Netcode 권한 분리 및 씬 전환 세션 정리" },
    { id: "tech-05", tag: "개발 프로세스 & 현황", title: "문서 기반 개발 프로세스 및 구현 현황" },
  ];

  const demoScreenshots = [
    {
      src: "/images/tinyjourney/inventory.png",
      tag: "마을 · 가방 UI",
      title: "탐험 가방 & 보호 가방",
      desc: "아이템 크기별 격자 배치와 드래그 중 R키 회전, 우클릭 빠른 이동을 지원합니다.",
    },
    {
      src: "/images/tinyjourney/housing.png",
      tag: "마이홈 · 가구 배치",
      title: "개인 숙소 내 가구 설치·해체",
      desc: "B키 배치 모드에서 가구를 설치하거나 회수하면 배치 점수와 기초 스탯이 즉시 반영됩니다.",
    },
    {
      src: "/images/tinyjourney/storage.png",
      tag: "마을 · 통합 창고",
      title: "일반·가구 창고 분리 보관",
      desc: "마을 창고 NPC를 통해 일반 전리품과 하우징 가구·촉매를 구분해 보관합니다.",
    },
    {
      src: "/images/tinyjourney/combat.png",
      tag: "던전 · 전투 액션",
      title: "360도 에임 & 부채꼴 타격",
      desc: "어깨 피벗 조준과 대시, 역경직, 넉백을 조합한 기본 근접 전투 동작을 확인했습니다.",
    },
    {
      src: "/images/tinyjourney/reward-list.png",
      tag: "던전 클리어",
      title: "탈출 게이트 앞 전리품 목록",
      desc: "성소 수호자를 처치해 탈출 게이트가 개방되면 획득한 전리품 목록을 확인할 수 있습니다.",
    },
    {
      src: "/images/tinyjourney/reward-loot.png",
      tag: "보상 적재 · 귀환",
      title: "전리품 드래그 획득 및 마을 복귀",
      desc: "보따리 전리품을 배낭에 드래그해 옮긴 뒤 마을로 귀환하는 기본 루프를 구현했습니다.",
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 space-y-12 text-gray-800 antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* 1. 상단 메타 헤더 (메인 썸네일 & RogueTower와 통일) */}
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
              2D 탑뷰 익스트랙션 액션 RPG (채집·제작·마이홈 하우징 기반 성장)
            </p>

            <dl className="grid grid-cols-[120px_1fr] gap-x-4 gap-y-5 text-gray-800 mt-7 text-sm sm:text-[15px]">
              <dt className="font-semibold text-gray-600">ROLE</dt>
              <dd>기획, 클라이언트 개발, 그래픽</dd>

              <dt className="font-semibold text-gray-600">DURATION</dt>
              <dd>2026.09 ~</dd>

              <dt className="font-semibold text-gray-600">TEAM</dt>
              <dd>1인 개발</dd>

              <dt className="font-semibold text-gray-600">PLATFORM</dt>
              <dd>PC (Windows · Steam 타깃)</dd>
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
          {/* 기획 부문 핵심 요약 카드 */}
          <section className="p-6 rounded-2xl bg-blue-50/40 border border-blue-200/80 space-y-4">
            <div className="flex items-center justify-between border-b border-blue-200/70 pb-3">
              <h3 className="font-bold text-blue-950 text-base sm:text-lg">기획 핵심 요약</h3>
              <span className="text-xs font-semibold text-blue-700 bg-white px-2.5 py-1 rounded-full border border-blue-200">
                게임 기획 &amp; 시스템 설계
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-blue-200/80 space-y-1.5">
                <span className="text-sm sm:text-base font-bold text-blue-900 block">캐릭터 컨셉과 근접 액션</span>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  소동물 캐릭터가 일상 도구를 무기로 휘두르는 360도 조준 근접 액션
                </p>
              </div>
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-blue-200/80 space-y-1.5">
                <span className="text-sm sm:text-base font-bold text-blue-900 block">사망 페널티와 세대교체</span>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  일반 배낭은 유실되나 보호 가방·가구·창고 자산은 다음 세대가 인계
                </p>
              </div>
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-blue-200/80 space-y-1.5">
                <span className="text-sm sm:text-base font-bold text-blue-900 block">격자 가방 &amp; 마이홈 하우징</span>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  배낭·보호 가방 공간 파밍과 방어구를 대체하는 숙소 가구 영구 성장
                </p>
              </div>
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-blue-200/80 space-y-1.5">
                <span className="text-sm sm:text-base font-bold text-blue-900 block">절차적 전장 &amp; 성소 결계</span>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  매번 달라지는 전장 구조와 성소 수호자 처치 후 탈출 게이트 개방
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

          {/* 01. 프로젝트 개요 및 기본 시스템 데모 */}
          <section id="plan-01" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600">
                01 · 프로젝트 개요 및 기본 시스템 데모
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                프로젝트 개요 및 기본 시스템 데모
              </h2>
            </header>

            <div className="text-base sm:text-[17px] text-gray-700 leading-relaxed font-normal">
              <p>
                <strong className="font-bold text-gray-900">TinyJourney</strong>는 작은 동물 캐릭터가 일상 사물(나뭇가지, 새총, 스푼 등)을 무기로 활용해 숲을 탐험하는 2D 탑뷰 익스트랙션 액션 RPG입니다.
              </p>
              <p className="mt-3 text-sm sm:text-base text-gray-600">
                단순 반복 사냥에서 벗어나 필드 파밍과 장비 성장, 그리고 거점(마이홈) 하우징을 통한 영구 성장이 하나의 루프로 순환하도록 핵심 기획 방향을 설정했습니다.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 pt-2">
              <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-200/90 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center font-bold text-sm mb-4 shadow-sm">
                    1
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">명확한 근접 타격 피드백</h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    무기군별 차등 역경직, 카메라 진동, 체급 비례 넉백을 결합해 작은 캐릭터와 큰 무기가 맞부딪히는 손맛을 전달합니다.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200/70 text-xs font-semibold text-blue-600">
                  타격 피드백과 공방 리듬
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-200/90 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-gray-800 text-white flex items-center justify-center font-bold text-sm mb-4 shadow-sm">
                    2
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">채집과 제작 중심의 장비 성장</h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    탐험 가방과 보호 가방의 제한된 공간을 계산해 전리품을 챙기고, 원소 상성과 무기로 다음 탐험을 준비합니다.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200/70 text-xs font-semibold text-gray-700">
                  익스트랙션 파밍 &amp; 속성 상성
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-200/90 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center font-bold text-sm mb-4 shadow-sm">
                    3
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">마이홈 하우징 기반의 영구 성장</h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    몸통 방어구 슬롯을 두지 않는 대신 개인 숙소에 가구를 배치해 기초 생존 및 전투 스탯을 영구적으로 누적합니다.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200/70 text-xs font-semibold text-blue-600">
                  마이홈 하우징과 세대 인계
                </div>
              </div>
            </div>

            {/* 기본 시스템 동작 데모 (영상 & 캡처 화면) */}
            <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-6 space-y-5 mt-4">
              <div className="space-y-1">
                <h3 className="text-lg font-bold text-gray-900">
                  기본 시스템 동작 데모 영상 및 인게임 화면
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  마을 인벤토리·스탯창 확인, 개인 숙소 가구 설치·해체, 던전 전투 클리어와 전리품 드래그 획득, 마을 복귀까지의 기본 시스템 동작을 구현한 초기 데모입니다.
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
                  <div className="text-gray-600 mt-0.5">인벤토리·스탯창 확인</div>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-gray-200">
                  <div className="font-bold text-blue-700">02. 숙소 하우징</div>
                  <div className="text-gray-600 mt-0.5">가구 설치·해체 시연</div>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-gray-200">
                  <div className="font-bold text-blue-700">03. 인던 클리어</div>
                  <div className="text-gray-600 mt-0.5">전투·탈출 포탈 개방</div>
                </div>
                <div className="p-2.5 rounded-lg bg-white border border-gray-200">
                  <div className="font-bold text-blue-700">04. 보상 · 귀환</div>
                  <div className="text-gray-600 mt-0.5">드래그 적재·마을 복귀</div>
                </div>
              </div>

              <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
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
                    <div className="p-3.5 space-y-1 flex-1">
                      <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                        {shot.tag}
                      </span>
                      <h4 className="text-sm font-bold text-gray-900 pt-1">{shot.title}</h4>
                      <p className="text-xs text-gray-600 leading-relaxed">{shot.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <hr className="border-gray-200/80" />

          {/* 02. 세계관 설정 및 사망·세대교체 규칙 */}
          <section id="plan-02" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600">
                02 · 세계관 설정 및 사망·세대교체 규칙
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                세계관 설정 및 사망·세대교체 규칙
              </h2>
            </header>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4 text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                <h3 className="text-lg font-bold text-gray-900">
                  배경 설정과 거점(마이홈) 인계 구조
                </h3>
                <p>
                  외곽 숲의 변이 현상을 조사하기 위해 마을에서 토벌사를 파견한다는 설정 아래, 마이홈은 이전 토벌사가 남긴 거점이며 마을 비석에 최초 실행 시각(<code className="font-mono text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded text-xs font-semibold">firstGameLaunchTime</code>)이 남습니다.
                </p>
                <p>
                  던전 귀환 시 배낭과 보호 가방의 가구·촉매 아이템은 가구 창고(<code className="font-mono text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded text-xs">furnitureStorageItems</code>)로 자동 입고됩니다.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-sm space-y-2">
                  <span className="text-xs font-bold text-gray-500">규칙 1 · 일반 배낭 유실</span>
                  <h4 className="text-base font-bold text-gray-900">전투 불능 시 미정산 전리품 유실 &amp; 차세대 토벌사 부임</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    체력 0 도달 시 일반 탐험 배낭 내 미정산 아이템은 유실되고 다음 세대 토벌사가 부임합니다. (기본 무기는 자동 지급되어 진행 불능을 방지합니다.)
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-blue-200 bg-blue-50/40 shadow-sm space-y-2">
                  <span className="text-xs font-bold text-blue-600">규칙 2 · 영구 보존 자산</span>
                  <h4 className="text-base font-bold text-blue-950">보호 가방, 마이홈 가구, 통합 창고, 마법 잉크 보존</h4>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    보호 가방에 옮긴 핵심 전리품, 마이홈에 배치된 가구와 누적 스탯, 마을 통합 창고, 모험 일지용 마법 잉크는 사망 후에도 온전히 유지됩니다.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-gray-200/80" />

          {/* 03. 코어 루프 & 격자 가방·마이홈 하우징 */}
          <section id="plan-03" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600">
                03 · 코어 루프와 격자 가방 · 마이홈 하우징
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                코어 루프와 격자 가방 · 마이홈 하우징 시스템
              </h2>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: "01", name: "마을·마이홈 정비", desc: "가구 배치로 기초 스탯을 확보하고 창고와 가방을 정비합니다." },
                { step: "02", name: "절차적 전장 토벌", desc: "던전에 진입해 성소 수호자를 처치하고 탈출 게이트를 개방합니다." },
                { step: "03", name: "격자 가방·보호 가방 파밍", desc: "탐험 배낭과 보호 가방에 전리품을 회전하며 배치합니다." },
                { step: "04", name: "귀환 & 영구 스펙업", desc: "가구 창고 자동 입고 및 숙소 가구 배치를 통해 영구 스탯을 올립니다." },
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
                <span className="text-xs font-bold text-blue-600">격자 인벤토리 (UI_Looting)</span>
                <h3 className="text-lg font-bold text-gray-900">탐험 배낭 + 단계별 확장 보호 가방</h3>
                <ul className="text-xs sm:text-sm text-gray-700 space-y-2 list-disc pl-4 leading-relaxed">
                  <li>
                    <strong>일반 탐험 가방:</strong> 기본 6x4(24칸)에서 모험 일지 확장 시 최대 8x6(48칸)까지 확장됩니다.
                  </li>
                  <li>
                    <strong>보호 가방(안전 파우치):</strong> 기본 2x1에서 단계에 따라 2x2, 2x3, 최대 3x3까지 성장합니다.
                  </li>
                  <li>
                    <strong>조작 방식:</strong> 드래그 앤 드롭, 드래그 중 R키 90도 회전, 우클릭 빠른 이동(배낭·보호 가방·창고)을 지원합니다.
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
                <span className="text-xs font-bold text-blue-600">동적 방 증축 &amp; 가구 스탯 (HousingManager)</span>
                <h3 className="text-lg font-bold text-gray-900">방 공간 증축 및 스탯 실시간 반영</h3>
                <ul className="text-xs sm:text-sm text-gray-700 space-y-2 list-disc pl-4 leading-relaxed">
                  <li>
                    <strong>방 크기 확장:</strong> 초기 6x6 방에서 건축가 NPC 증축 시 8x8로 바닥·벽 타일맵과 외벽 콜라이더가 동적 재구축됩니다.
                  </li>
                  <li>
                    <strong>배치 모드 &amp; 버프 합산:</strong> B키 배치 모드와 R키 회전으로 가구를 배치하면 <code className="font-mono text-xs">HousingBuffCalculator</code>가 스탯을 합산해 즉시 반영합니다.
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
                    <td className="py-3 px-4 text-gray-600">착용 장비에 따라 도트 외형이 가려지지 않도록 몸통 방어구를 제거하고 가구 배치를 통해 기초 스탯을 확보합니다.</td>
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

          {/* 04. 파츠 분리형 캐릭터와 타격 피드백 설계 */}
          <section id="plan-04" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600">
                04 · 파츠 분리형 캐릭터와 타격 피드백 설계
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                파츠 분리형 캐릭터와 타격 피드백 · 스태미나 규격
              </h2>
            </header>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4 text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                <p>
                  캐릭터를 <strong>머리+몸통</strong>과 <strong>팔</strong>로 분리해 기본 동작(Idle/Walk)만 도트 애니메이션으로 제작하고, 팔과 무기는 어깨 피벗을 기준으로 360도 조준 및 140도 부채꼴 타격 스윙을 코드로 제어합니다.
                </p>
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-2">
                  <h4 className="font-bold text-gray-900 text-sm">동적 Y-Sorting &amp; 공격 최우선 승격</h4>
                  <div className="text-xs font-medium text-blue-700 bg-white p-2.5 rounded-lg border border-gray-200">
                    기본 정렬 + 공격 중(isAttacking) 무기·앞팔·슬래시 +1000 오프셋
                  </div>
                  <p className="text-xs text-gray-600">
                    플레이어가 몬스터 위쪽에서 아래를 공격할 때도 무기와 검기가 몬스터 몸통 뒤로 숨지 않도록 공격 중 정렬 순서를 +1000 높입니다.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-blue-50/40 border border-blue-200/80 space-y-4">
                <h3 className="font-bold text-blue-950 text-base">
                  전투 타격 피드백 파라미터 (FeedbackManager &amp; PlayerStamina)
                </h3>
                <dl className="grid grid-cols-[120px_1fr] gap-x-3 gap-y-3 text-xs sm:text-sm">
                  <dt className="font-bold text-blue-900">차등 역경직</dt>
                  <dd className="text-gray-700">
                    무기군별 차등 적용(Blunt 0.045s / Slash 0.030s / Thrust 0.020s / Ranged 0.015s), 치명타 +0.025s, 최대 0.070s
                  </dd>

                  <dt className="font-bold text-blue-900">스태미나·대시</dt>
                  <dd className="text-gray-700">
                    기존 2.0s 고정 쿨타임 제거 -&gt; 최대 40, 대시 소모 20(연속 2회), 초당 회복 14, 모션 딜레이 0.22s, 무적 0.15s
                  </dd>

                  <dt className="font-bold text-blue-900">가변 넉백</dt>
                  <dd className="text-gray-700">
                    피해량 대비 적 최대체력 비율(<code className="font-mono text-xs">impactRatio</code>) 기반 가변 넉백으로 체급별 무게감 분리
                  </dd>

                  <dt className="font-bold text-blue-900">카메라·연출</dt>
                  <dd className="text-gray-700">
                    Cinemachine 6D Impulse 진동 + DOTween 피격 신축 변형 결합
                  </dd>
                </dl>
              </div>
            </div>
          </section>

          <hr className="border-gray-200/80" />

          {/* 05. 절차적 전장 생성 및 레벨 디자인 */}
          <section id="plan-05" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600">
                05 · 절차적 전장 생성 및 지형 위계
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                절차적 던전 생성 및 2.5D 지형 안전 규칙
              </h2>
            </header>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 rounded-2xl bg-gray-50/80 border border-gray-200 space-y-3">
                <span className="text-xs font-bold text-gray-500">전장 레이아웃 프로필</span>
                <h3 className="font-bold text-gray-900 text-base">토폴로지 무작위 생성</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-600 list-disc pl-4">
                  <li><strong>SquareCrossroads (80x80):</strong> 십자형 주 협곡 + 주변 고원 여백 충원</li>
                  <li><strong>VerticalAscent (60x96):</strong> 하단에서 상단 성소로 수직 돌파하는 등반형</li>
                  <li><strong>WideCanyon (108x56):</strong> 동서 대협곡과 대형 아레나 중심 전장</li>
                  <li><strong>CompactSkirmish (56x44):</strong> 짧은 동선과 높은 교전 밀도의 난전형</li>
                </ul>
              </div>

              <div className="p-5 rounded-2xl bg-gray-50/80 border border-gray-200 space-y-3">
                <span className="text-xs font-bold text-gray-500">타일맵 안전 규칙 &amp; 성소 진행</span>
                <h3 className="font-bold text-gray-900 text-base">2.5D 절벽 깨짐 방지 &amp; 성소 결계</h3>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-600 list-disc pl-4">
                  <li><strong>지형 깨짐 방지 보정:</strong> 2x2 짝수 양자화, 북측 능선-남측 턱 배타 규칙, 6x6 교차 박스, 대각 단차 보강, 1타일 선반 평탄화를 적용했습니다.</li>
                  <li><strong>3단 타일맵 &amp; 탈출 포탈:</strong> Floor, Wall, Wall_Front 레이어 분리로 남쪽 절벽 가림을 구현하고, 성소 수호자 전멸 시 탈출 게이트가 개방됩니다.</li>
                </ul>
              </div>
            </div>
          </section>

          <hr className="border-gray-200/80" />

          {/* 06. 몬스터 메커니즘 & 프로토타입 도감 */}
          <section id="plan-06" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600">
                06 · 몬스터 메커니즘과 프로토타입 도감
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                프로토타입 몬스터 4종 및 5원소 상성
              </h2>
            </header>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
              {[
                {
                  img: "/TinyJourney/slime_sprout.png",
                  name: "새싹 슬라임 (mon_slime_sprout)",
                  badge: "근접 접촉형",
                  element: "무속성",
                  desc: "플레이어를 지속 추적하며 밀착 접촉 시 피해와 넉백을 가하는 기본 몬스터입니다.",
                },
                {
                  img: "/TinyJourney/chestnut_hedgehog.png",
                  name: "밤송이 고슴도치 (mon_chestnut_hedgehog)",
                  badge: "돌진 공격형",
                  element: "대지 속성",
                  desc: "사거리 진입 시 전조 동작 후 고속 직선 돌진을 가하며, 벽 충돌 시 자가 기절(Groggy) 상태가 됩니다.",
                },
                {
                  img: "/TinyJourney/feral_squirrel.png",
                  name: "꽃꼬리 다람쥐 (mon_feral_squirrel)",
                  badge: "원거리 견제형",
                  element: "맹독 속성",
                  desc: "일정 적정 사거리를 유지하며 이동하다가 독 포자 투사체를 발사합니다.",
                },
                {
                  img: "/TinyJourney/rotwood.png",
                  name: "뒤틀린 거목 (boss_rotwood)",
                  badge: "보스 (누적 패턴)",
                  element: "대지 속성",
                  desc: "체력 구간에 따라 공격 패턴이 단계적으로 누적되는 보스 몬스터입니다.",
                },
                {
                  img: "/TinyJourney/weapon_twig.png",
                  name: "단단한 나뭇가지 (wpn_stick_club)",
                  badge: "기본 근접 무기",
                  element: "물리 (Blunt)",
                  desc: "초기 지급 및 사망 후 기본 복구 무기이며 360도 에임과 140도 부채꼴 타격 판정이 연동됩니다.",
                },
                {
                  img: "/TinyJourney/CatSide.png",
                  name: "토벌사 캐릭터",
                  badge: "파츠 분리형",
                  element: "플레이어",
                  desc: "머리+몸통과 팔을 분리해 공격 중 무기·팔 정렬 오더(+1000)를 동적 승격합니다.",
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
                <span className="font-semibold text-emerald-400">[수식] 비선형 방어력 감쇄 및 5원소 상성 데미지 공식</span>
                <span>ElementChart.csv</span>
              </div>
              <div className="font-mono text-xs sm:text-sm text-emerald-400 py-1 text-center">
                FinalDamage = RawDamage x [ 100 / (100 + Defense x (1 - Pen)) ] x ElementMult
              </div>
              <p className="text-xs text-gray-300 leading-relaxed">
                화(Fire) -&gt; 토(Earth) -&gt; 뇌(Lightning) -&gt; 독(Poison) -&gt; 수(Ice) -&gt; 화(Fire) 순환 상성으로 유리 1.5배, 불리 0.7배, 동일 속성 0.5배, 무속성 1.0배를 적용합니다.
              </p>
            </div>
          </section>

          {/* 하단 탭 전환 배너 */}
          <div className="p-6 bg-gradient-to-r from-blue-50/70 to-indigo-50/40 border border-blue-200/80 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                기술 구조 및 데이터 자동화 방식이 궁금하신가요?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                엑셀 데이터 연동, 전략 패턴 모듈 분리, 문서 기반 개발 프로세스는 기술서 탭에서 확인할 수 있습니다.
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
      {/* TAB 2: 기술서                                                       */}
      {/* =================================================================== */}
      {activeTab === "tech" && (
        <article className="space-y-16">
          {/* 기술 핵심 요약 */}
          <section className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-4">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <h3 className="font-bold text-gray-900 text-base sm:text-lg">기술 핵심 요약</h3>
              <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                클라이언트 아키텍처 &amp; 파이프라인
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-gray-200 space-y-1.5">
                <span className="text-sm sm:text-base font-bold text-gray-900 block">엑셀 데이터 자동 동기화</span>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  GameData.xlsx 저장 시 자동 변환 및 독립 CSV 기반 데이터 주도 설계
                </p>
              </div>
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-gray-200 space-y-1.5">
                <span className="text-sm sm:text-base font-bold text-gray-900 block">전략 패턴 AI &amp; 무할당 물리</span>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  몬스터 공격 행동 4종 모듈 분리 및 사전 할당 버퍼(NonAlloc) 판정
                </p>
              </div>
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-gray-200 space-y-1.5">
                <span className="text-sm sm:text-base font-bold text-gray-900 block">2.5D 정렬 &amp; 절벽 분리</span>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  하향 공격 시 무기 정렬 승격(+1000) 및 남쪽 절벽 3단 타일맵 분리
                </p>
              </div>
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-gray-200 space-y-1.5">
                <span className="text-sm sm:text-base font-bold text-gray-900 block">문서 기반 협업 &amp; 세션 정리</span>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  단계별 문서 루프 기반 구현 및 씬 전환 시 네트워크 세션 안전 종료
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

          {/* 01. 데이터 파이프라인 */}
          <section id="tech-01" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600">01 · 데이터 파이프라인</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                통합 엑셀 마스터 데이터 파이프라인 (GameData.xlsx)
              </h2>
            </header>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
                <h3 className="font-bold text-gray-900 text-base">
                  MasterDataPostprocessor.cs (0.6초 자동 동기화)
                </h3>
                <ul className="text-xs sm:text-sm text-gray-600 space-y-1.5 list-disc pl-4">
                  <li><strong>ItemMaster.csv (37행):</strong> General, Furniture, Weapon, Catalyst 통합 정의</li>
                  <li><strong>MonsterMaster.csv (4행):</strong> 슬라임, 고슴도치, 다람쥐, 뒤틀린 거목 스탯</li>
                  <li><strong>PropMaster / ElementChart / ItemEffects:</strong> 프랍, 원소 상성 매트릭스, 소모품 효과</li>
                  <li><strong>Localization / Definitions / StageTheme:</strong> 다국어 매핑, 전역 상수, 테마</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
                <h3 className="font-bold text-gray-900 text-base">
                  모험 일지 테이블 &amp; 상성 배열 조회
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  독립 CSV(<code className="font-mono text-blue-700 bg-blue-50 px-1 rounded">JournalTalentMaster.csv</code>) 27개 노드(전투, 탐험, 생활)를 <code className="font-mono text-xs">JournalTalentDatabase.cs</code>가 시작 시 딕셔너리로 적재하고, 5원소 상성은 매트릭스 배열 인덱싱으로 즉시 조회합니다.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-gray-200/80" />

          {/* 02. 공격 모듈 & 물리 제어 */}
          <section id="tech-02" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600">02 · 공격 모듈 &amp; 물리</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                IMonsterAttackModule 전략 패턴 및 무할당 물리 제어
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
                <h3 className="font-bold text-gray-900 text-base">사전 할당 버퍼 기반 타격 · 이동 판정</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  매 프레임 힙 할당을 막기 위해 <code className="font-mono text-xs">WeaponController</code>는 <code className="font-mono text-xs">hitEnemiesBuffer[32]</code>, <code className="font-mono text-xs">EnemyMotor2D</code>는 <code className="font-mono text-xs">queryBuffer[16]</code> 고정 버퍼와 NonAlloc 물리 API를 사용합니다.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-gray-200/80" />

          {/* 03. 2.5D 소팅 & 렌더링 */}
          <section id="tech-03" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600">03 · 2.5D 소팅 &amp; 렌더링</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                하향 공격 정렬 보정(+1000) 및 전면 절벽 분리
              </h2>
            </header>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <h3 className="font-bold text-gray-900 text-base">공격 중 무기·검기 정렬 승격</h3>
                <p>
                  플레이어가 몬스터보다 위쪽(Player.y &gt; Enemy.y)에 있을 때 무기와 검기가 적 몸통 뒤로 가려지는 문제를 막기 위해, 공격 중에는 무기·앞팔·슬래시 정렬 순서를 <strong>+1000</strong> 승격했습니다.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <h3 className="font-bold text-gray-900 text-base">남쪽 절벽 턱 3단 레이어 분리</h3>
                <p>
                  타일맵을 Floor(0), Wall(1), Wall_Front(SortingOrder 10005) 3단으로 나누어, 캐릭터가 남쪽 절벽 턱 뒤로 내려갈 때 하체가 자연스럽게 가려지도록 구현했습니다.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-gray-200/80" />

          {/* 04. 네트워크 & 세션 관리 */}
          <section id="tech-04" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600">04 · 네트워크 &amp; 세션 관리</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                Netcode 권한 분리 및 씬 전환 세션 정리
              </h2>
            </header>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <h3 className="font-bold text-gray-900 text-base">서버 권한 판정 &amp; 0ms 로컬 타격 피드백</h3>
                <p>
                  AI·피격 데미지·결계 판정은 Listen Server 권한으로 일관되게 처리하면서, 역경직·화면 흔들림 같은 손맛 연출은 로컬 클라이언트에서 지연 없이 즉시 실행합니다.
                </p>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                <h3 className="font-bold text-gray-900 text-base">CleanupNetworkSession() 세션 종료·파괴</h3>
                <p>
                  던전과 마을을 오갈 때 잔류 NetworkManager로 오브젝트 해시 충돌이 나지 않도록 씬 전환 직전 Shutdown 후 Destroy 순서를 강제했습니다.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-gray-200/80" />

          {/* 05. 문서 기반 개발 프로세스 & 구현 현황 */}
          <section id="tech-05" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600">05 · 개발 프로세스 &amp; 현황</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                문서 기반 개발 프로세스 및 프로토타입 구현 현황
              </h2>
            </header>

            <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-4">
              <div className="space-y-1">
                <h3 className="font-bold text-gray-900 text-base">
                  단계별 문서 협업 흐름 (기획.md -&gt; 프로그래밍_설계.md -&gt; 작업지시.md -&gt; IDE결과.md)
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  기능 단위마다 수정 파일, 좌표, 검증 체크리스트를 작업지시서에 명시하고, 작업 종료 후 빌드·콘솔 에러 0건 및 실기 결과를 IDE결과.md에 기록해 다음 세션에 인수인계했습니다.
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-4 text-xs sm:text-sm">
                <div className="p-4 rounded-xl bg-white border border-gray-200 space-y-1">
                  <div className="font-bold text-blue-700">절벽 · 하향 공격 가림 해결</div>
                  <p className="text-gray-600 leading-relaxed">
                    Wall_Front 타일 레이어 분리 및 공격 중 정렬 +1000 보정으로 남쪽 절벽과 하향 타격 시인성을 확보했습니다.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-gray-200 space-y-1">
                  <div className="font-bold text-blue-700">프리팹 직렬화 수치 덮어쓰기 차단</div>
                  <p className="text-gray-600 leading-relaxed">
                    코드 기본값(스태미나 40)을 인스펙터 옛 값(100)이 덮어쓰던 문제를 코드·프리팹 동시 점검으로 복원했습니다.
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-white border border-gray-200 space-y-1">
                  <div className="font-bold text-blue-700">UI 라벨 겹침 · 씬 전환 충돌 수정</div>
                  <p className="text-gray-600 leading-relaxed">
                    GridLayoutGroup 라벨 부모 분리 및 CleanupNetworkSession 순서 고정으로 씬 재진입 오류를 해결했습니다.
                  </p>
                </div>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6 text-xs sm:text-sm">
              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
                <h3 className="font-bold text-gray-900 text-base">
                  현재 구현 및 데모 확인 완료 항목
                </h3>
                <ul className="list-disc pl-4 space-y-1.5 text-gray-700 leading-relaxed">
                  <li><strong>절차적 던전 &amp; 성소:</strong> 전장 토폴로지 생성, 결계 봉쇄 및 수호자 처치 후 탈출 게이트 개방</li>
                  <li><strong>격자 인벤토리 &amp; 창고:</strong> 탐험 가방 + 보호 가방(드래그·R키 회전·우클릭 이동) 및 가구 자동 입고</li>
                  <li><strong>마이홈 하우징:</strong> B키 가구 설치·해체, 배치 점수 반영 및 방 크기 동적 확장</li>
                  <li><strong>마을 UI &amp; 시설:</strong> C키 스탯창, 모험 일지, 상점·대장간·목공·건축·게시판 모달 연결</li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
                <h3 className="font-bold text-gray-900 text-base">
                  차기 구현 예정 로드맵 (미연결·미구현 공개)
                </h3>
                <ul className="list-disc pl-4 space-y-1.5 text-gray-700 leading-relaxed">
                  <li><strong>마을 NPC 3종 전용 UI:</strong> 리더(팽), 학자(스텔라), 등록관(코코) 대사 이후 전용 심사·감정 모달 연결 예정</li>
                  <li><strong>인벤토리 내 무기 장착·모딩 호출:</strong> EquipWeapon·AttachModAction의 인벤토리 UI 호출 경로 연결 예정</li>
                  <li><strong>보스 아레나 랜덤 등장:</strong> BossPhaseModule과 테스트 디버거 기반의 보스전 랜덤 던전 편입 예정</li>
                  <li><strong>인프라 확장:</strong> 미니맵(방 데이터 기반 UI 구현), 사운드 믹서, 세이브 암호화 순차 적용 예정</li>
                </ul>
              </div>
            </div>
          </section>
        </article>
      )}
    </main>
  );
}
