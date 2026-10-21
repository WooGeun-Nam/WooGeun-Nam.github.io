"use client";

import React, { useState, useEffect } from "react";
import ImgPrefixed from "./ImgPrefixed";

interface TinyJourneyClientProps {
  initialTab?: "plan" | "tech";
}

export default function TinyJourneyClient({ initialTab = "plan" }: TinyJourneyClientProps) {
  const [activeTab, setActiveTab] = useState<"plan" | "tech">(initialTab);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  const handleTabChange = (tabId: "plan" | "tech") => {
    setActiveTab(tabId);
    if (typeof window !== "undefined") {
      const targetUrl = `/projects/tinyjourney/${tabId}/`;
      window.history.pushState(null, "", targetUrl);
    }
  };

  const tabs = [
    { id: "plan", label: "기획서" },
    { id: "tech", label: "기술서" },
  ] as const;

  const planSections = [
    { id: "plan-01", tag: "개요 & 기획 방향", title: "프로젝트 개요 및 핵심 기획 방향" },
    { id: "plan-02", tag: "세계관 & 사망 규칙", title: "세계관 설정 및 사망·세대교체 규칙" },
    { id: "plan-03", tag: "하우징 시스템", title: "마이홈 하우징 시스템 (몸통 방어구 대체)" },
    { id: "plan-04", tag: "전투 & 애니메이션", title: "파츠 분리형 캐릭터 애니메이션과 타격 피드백 설계" },
    { id: "plan-05", tag: "레벨 디자인", title: "절차적 전장 생성 및 지형 위계" },
    { id: "plan-06", tag: "몬스터 명세", title: "프로토타입 몬스터 4종 기획 도감" },
  ];

  const techSections = [
    { id: "tech-01", tag: "데이터 파이프라인", title: "GameData.xlsx 자동 직렬화 파이프라인" },
    { id: "tech-02", tag: "AI & 물리 모듈", title: "IMonsterAttackModule 전략 패턴 및 물리 제어" },
    { id: "tech-03", tag: "2.5D 소팅 & 렌더링", title: "하향 공격 소팅 보정(+1000) 및 전면 절벽 분리" },
    { id: "tech-04", tag: "네트워크 & 인프라", title: "Netcode NGO 권한 분리와 오디오·세이브 관리" },
    { id: "tech-05", tag: "프로토타입 로드맵", title: "프로토타입 구현 현황 및 개발 로드맵" },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 space-y-12 text-gray-800 font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* ===================================================================== */}
      {/* 1. 상단 메타 헤더 (RogueTower 및 Others 프로젝트와 100% 동일한 규격) */}
      {/* ===================================================================== */}
      <section className="grid gap-8 md:grid-cols-2 items-stretch">
        <div className="rounded-xl overflow-hidden shadow-sm flex items-center justify-center bg-gray-50 border border-gray-200 min-h-[220px]">
          <ImgPrefixed
            src="/TinyJourney/CatSide.png"
            alt="TinyJourney 썸네일"
            className="w-44 h-44 [image-rendering:pixelated] object-contain"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold underline decoration-blue-500 underline-offset-8">
              TinyJourney <span className="text-2xl font-normal text-gray-400">(가제)</span>
            </h1>
            <p className="text-sm sm:text-[15px] text-gray-600 mt-3 font-medium">
              2D 탑뷰 액션 RPG (채집·제작·마이홈 하우징 기반 성장)
            </p>

            <dl className="grid grid-cols-[120px_1fr] gap-x-4 gap-y-5 text-gray-800 mt-7 text-sm sm:text-[15px]">
              <dt className="font-semibold text-gray-600">ROLE</dt>
              <dd>기획, 클라이언트 개발, 그래픽</dd>

              <dt className="font-semibold text-gray-600">DURATION</dt>
              <dd>2026.10 ~ 진행 중</dd>

              <dt className="font-semibold text-gray-600">TEAM</dt>
              <dd>1인 개발</dd>

              <dt className="font-semibold text-gray-600">PLATFORM</dt>
              <dd>PC (Windows · Steam 타깃)</dd>
            </dl>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <span
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold
                         bg-blue-100 text-blue-800"
            >
              프로토타입 개발 중
            </span>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 2. 탭 바: 가로 스크롤 없는 2등분 균등 배치 */}
      {/* ===================================================================== */}
      <nav className="w-full border-b border-gray-200">
        <div className="grid grid-cols-2 w-full text-center">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`py-3.5 text-sm sm:text-base font-bold transition-all relative ${
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

      {/* ===================================================================== */}
      {/* TAB 1: 기획서 */}
      {/* ===================================================================== */}
      {activeTab === "plan" && (
        <article className="space-y-16">
          {/* 기획 부문 핵심 요약 카드 */}
          <section className="p-6 rounded-2xl bg-blue-50/40 border border-blue-200/80 space-y-3">
            <div className="flex items-center justify-between border-b border-blue-200/70 pb-2.5">
              <h3 className="font-bold text-blue-950 text-base">기획 핵심 요약</h3>
              <span className="text-xs font-semibold text-blue-700 bg-white px-2.5 py-1 rounded-full border border-blue-200">
                게임 기획 &amp; 시스템 설계
              </span>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 pt-1 text-xs">
              <div className="p-3 rounded-xl bg-white border border-blue-150">
                <span className="font-bold text-blue-900 block mb-1">캐릭터 컨셉과 전투 방향성</span>
                소동물 캐릭터가 자신의 몸체만 한 도구를 무기로 활용하는 탑뷰 근접 액션
              </div>
              <div className="p-3 rounded-xl bg-white border border-blue-150">
                <span className="font-bold text-blue-900 block mb-1">사망 페널티와 세대교체 규칙</span>
                전투 불능 시 가방 내 미정산 전리품은 유실되나, 차세대 캐릭터가 거점과 누적 스탯을 인계받는 구조
              </div>
              <div className="p-3 rounded-xl bg-white border border-blue-150">
                <span className="font-bold text-blue-900 block mb-1">마이홈 하우징 스펙업</span>
                몸통 방어구를 대체하는 마이홈 가구 배치 및 영구 기초 스탯 누적
              </div>
              <div className="p-3 rounded-xl bg-white border border-blue-150">
                <span className="font-bold text-blue-900 block mb-1">절차적 지형 위계</span>
                탐험 가치를 높이는 절차적 전장 구조와 안전거리 스폰 규칙
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

          {/* 01. 프로젝트 개요 & 핵심 기획 방향 */}
          <section id="plan-01" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                01 · 프로젝트 개요 및 핵심 기획 방향
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                프로젝트 개요 및 핵심 기획 방향
              </h2>
            </header>

            <div className="text-base sm:text-[17px] text-gray-700 leading-relaxed font-normal">
              <p>
                <strong className="font-bold text-gray-900">TinyJourney</strong>는 작은 동물 캐릭터가 일상 사물(나뭇가지, 스푼, 포크 등)을 무기로 활용해 숲을 탐험하는 2D 탑뷰 액션 RPG입니다.
              </p>
              <p className="mt-3 text-sm sm:text-base text-gray-600">
                단순 반복 사냥을 통한 스탯 성장에서 벗어나, 필드 채집과 장비 제작, 그리고 거점(마이홈) 하우징을 통한 영구 성장이 하나의 루프로 순환하도록 다음 세 가지 핵심 방향성을 설계했습니다.
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
                    캐릭터 크기에 대비되는 큰 무기 모션과 적중 순간의 0.09초 역경직(HitStop), 카메라 흔들림, 넉백을 결합해 근접 전투의 타격 피드백을 명확하게 전달합니다.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200/70 text-xs font-semibold text-blue-600">
                  타격 피드백과 조작감 전달
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-200/90 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-gray-800 text-white flex items-center justify-center font-bold text-sm mb-4 shadow-sm">
                    2
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">채집과 제작 중심의 장비 성장</h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    필드에서 획득한 몬스터 전리품과 자원을 조합해 무기와 도구를 제작합니다. 장비 등급 상승 시 단순 수치 증가뿐만 아니라 공격 범위와 판정 방식의 변화를 체감할 수 있도록 설계했습니다.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200/70 text-xs font-semibold text-gray-700">
                  체감형 제작 &amp; 속성 상성 매트릭스
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-200/90 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center font-bold text-sm mb-4 shadow-sm">
                    3
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">마이홈 하우징 기반의 영구 성장</h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    탐험 후 거점인 마이홈으로 귀환하여, 수집한 자원으로 가구를 제작하고 배치합니다. 방어구 장비 슬롯을 제거하는 대신 가구 배치를 통해 캐릭터의 기초 스탯이 영구적으로 상승하는 구조입니다.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200/70 text-xs font-semibold text-blue-600">
                  마이홈 하우징과 영구 스탯 누적
                </div>
              </div>
            </div>
          </section>

          <hr className="border-gray-200/80" />

          {/* 02. 세계관 설정 및 사망·세대교체 규칙 */}
          <section id="plan-02" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                02 · 세계관 설정 및 사망·세대교체 규칙
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                세계관 설정 및 사망·세대교체 규칙
              </h2>
            </header>

            <div className="bg-gradient-to-r from-blue-50/60 to-gray-50 border-l-4 border-blue-500 p-5 rounded-r-2xl">
              <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                반복 도전 과정에서 발생하는 <strong>&apos;전투 불능 시 아이템 유실&apos;</strong>과 <strong>&apos;캐릭터 교체&apos;</strong> 규칙에 
                세계관적 개연성을 부여하여 플레이 몰입감을 높였습니다.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4 text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                <h3 className="text-lg font-bold text-gray-900">
                  배경 설정과 거점(마이홈) 인계 구조
                </h3>
                <p>
                  외곽 숲의 야생화 변이 현상을 조사하기 위해 마을에서 토벌사를 파견한다는 기본 배경을 가지고 있습니다. 
                  플레이어에게 기본 거점으로 제공되는 마이홈은 이전 토벌사가 사용하던 집이라는 설정이며, 
                  마을 묘지에는 최초 게임 실행 시각(<code className="font-mono text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded text-xs font-semibold">firstGameLaunchTime</code>)이 
                  기록된 비석을 배치해 세계관 설정을 시각적으로 전달합니다.
                </p>
                <p>
                  이를 통해 플레이어가 거점에 남긴 가구와 시설이 다음 세대 캐릭터에게 그대로 인계되는 
                  시스템 규칙을 자연스럽게 납득할 수 있도록 설계했습니다.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-sm space-y-2">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">규칙 1 · 캐릭터 교체</span>
                  <h4 className="text-base font-bold text-gray-900">전투 불능 시 차세대 토벌사 부임</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    체력이 0이 되어 전투 불능 상태가 되면 암전 후 마을에서 새로운 외형(색상·종족 변주)의 차세대 토벌사가 부임하여 플레이를 이어갑니다.
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-blue-200 bg-blue-50/40 shadow-sm space-y-2">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">규칙 2 · 자산 보존과 유실</span>
                  <h4 className="text-base font-bold text-blue-950">미정산 전리품 유실 및 마이홈 스탯 인계</h4>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    탐험 중 사망할 경우 가방에 보유한 미정산 전리품은 유실되지만, 마이홈에 배치 완료된 가구와 누적 스탯은 그대로 유지되어 다음 토벌사에게 인계됩니다.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-gray-200/80" />

          {/* 03. 코어 루프 & 마이홈 하우징 시스템 */}
          <section id="plan-03" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                03 · 코어 루프와 마이홈 하우징 시스템
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                코어 루프와 마이홈 하우징 시스템 (몸통 방어구 대체)
              </h2>
            </header>

            {/* 프로세스 흐름도 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: "01", name: "마이홈 정비", desc: "가구 배치로 기초 스탯을 확보하고, 출격 전 장비를 점검합니다." },
                { step: "02", name: "절차적 전장 토벌", desc: "필드 방을 공략하고 몬스터 전리품과 자원을 획득합니다." },
                { step: "03", name: "인벤토리 파밍", desc: "제한된 배낭 그리드에 다양한 모양의 전리품 블록을 효율적으로 배치합니다." },
                { step: "04", name: "귀환 & 영구 스펙업", desc: "가구 제작 및 마이홈 배치를 통해 영구 기초 스탯을 누적합니다." },
              ].map((stage, idx) => (
                <div key={idx} className="relative p-5 rounded-2xl bg-gray-50/70 border border-gray-200 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-extrabold text-blue-600 tracking-wider">{stage.step} 단계</span>
                    <h3 className="text-base font-bold text-gray-900 mt-1">{stage.name}</h3>
                    <p className="text-xs sm:text-[13px] text-gray-600 mt-2 leading-relaxed">{stage.desc}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* 하우징 기반 영구 스탯 시스템 기획 방향성 */}
            <div className="space-y-4 pt-2">
              <div className="border-b border-gray-200 pb-3">
                <h3 className="text-lg font-bold text-gray-900">
                  하우징 기반 영구 스탯 시스템 기획 방향성
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 mt-1">
                  몸통 방어구를 분리하고, 마이홈 가구 배치를 핵심 영구 성장 축으로 설계한 의도
                </p>
              </div>

              <div className="grid md:grid-cols-3 gap-5">
                <div className="p-5 rounded-2xl bg-gray-50/80 border border-gray-200 space-y-2.5">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">01 · 방어구 대체</span>
                  <h4 className="text-base font-bold text-gray-900">캐릭터 외형과 스탯의 분리</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    착용 장비에 따라 캐릭터의 도트 외형이 가려지거나 어색해지는 문제를 방지하기 위해, 몸통 방어구를 배제하고 가구 배치를 통해 캐릭터의 방어력 및 생존 스탯을 보완하도록 기획했습니다.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-gray-50/80 border border-gray-200 space-y-2.5">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">02 · 영구 보존 자산</span>
                  <h4 className="text-base font-bold text-gray-900">사망 페널티를 완화하는 영구 버프</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    탐험 중 사망 시 가방의 미정산 전리품은 유실되지만, 마이홈에 이미 배치된 가구의 스탯 효과는 영구 보존됩니다. 이를 통해 반복 플레이와 세대교체 속에서도 지속적인 성취감을 제공합니다.
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-gray-50/80 border border-gray-200 space-y-2.5">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">03 · 공간 배치 퍼즐</span>
                  <h4 className="text-base font-bold text-gray-900">그리드 기반 배치 고민 유도</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    단순한 수치 합산에 그치지 않고, 마이홈의 8×8 그리드 제한 공간에 가구를 어떻게 효율적으로 채워 넣을지 고민하게 만드는 공간 배치의 재미를 결합했습니다.
                  </p>
                </div>
              </div>

              {/* 마이홈 하우징 시스템 3대 기획 설계 의도 명세표 */}
              <div className="space-y-3 pt-3">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200 pb-2">
                  <h4 className="font-bold text-gray-900 text-base">
                    [표 2-3] 마이홈 하우징 시스템 3대 기획 설계 의도 명세
                  </h4>
                  <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                    공간 점유 대비 스탯 최적화 설계
                  </span>
                </div>
                <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
                  <table className="w-full text-left text-xs sm:text-sm divide-y divide-gray-200">
                    <thead className="bg-gray-50 text-gray-700 font-semibold">
                      <tr>
                        <th className="py-3 px-4 text-center">구분</th>
                        <th className="py-3 px-4">항목 명칭</th>
                        <th className="py-3 px-4">세부 시스템 규칙 및 설계 의도</th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-100 bg-white">
                      <tr>
                        <td className="py-3 px-4 text-center font-bold text-gray-900">하우징 설계 01</td>
                        <td className="py-3 px-4 font-semibold text-blue-700">몸통 방어구 대체<br /><span className="text-xs text-gray-500 font-normal">(가구 배치 = 스탯 성장)</span></td>
                        <td className="py-3 px-4 text-gray-600">몸통 방어구 슬롯을 과감히 제거하고, 거점 가구 배치를 통해 방어력 및 생존 스탯을 보완하도록 기획했습니다.</td>
                      </tr>
                      <tr>
                        <td className="py-3 px-4 text-center font-bold text-gray-900">하우징 설계 02</td>
                        <td className="py-3 px-4 font-semibold text-emerald-700">영구 보존 자산<br /><span className="text-xs text-gray-500 font-normal">(사망 페널티 완화 버프)</span></td>
                        <td className="py-3 px-4 text-gray-600">사망 시 인벤토리 미정산품은 유실되지만 마이홈 가구의 누적 스탯은 영구 보존되어 세대교체 속에서도 지속적 성취감을 유지합니다.</td>
                      </tr>
                      <tr className="bg-blue-50/40">
                        <td className="py-3 px-4 text-center font-bold text-blue-950">하우징 설계 03</td>
                        <td className="py-3 px-4 font-semibold text-purple-700">공간 배치 퍼즐<br /><span className="text-xs text-gray-500 font-normal">(그리드 기반 배치 고민)</span></td>
                        <td className="py-3 px-4 text-gray-700 font-medium">거점 내 8×8 그리드 제한 공간에 1×1, 1×2, 2×2 등 가구 크기별 점유 형태를 고려해 방어력·체력 스탯 버프를 최적화하는 타일 배치 퍼즐의 재미를 결합했습니다.</td>
                      </tr>
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-gray-200/80" />

          {/* 04. 파츠 분리형 캐릭터 애니메이션과 타격 피드백 설계 */}
          <section id="plan-04" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                04 · 파츠 분리형 캐릭터 애니메이션과 타격 피드백 설계
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                파츠 분리형 캐릭터 애니메이션과 타격 피드백 설계
              </h2>
            </header>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4 text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                <p>
                  1인 개발 환경에서 무기 종류가 늘어날 때마다 공격 도트 애니메이션을 개별 제작하는 리소스 부담을 줄이기 위해, 
                  캐릭터를 <strong>&apos;머리+몸통&apos;과 &apos;팔&apos; 2개의 이미지로 분리</strong>하여 설계했습니다.
                </p>
                <p className="text-xs sm:text-sm text-gray-600">
                  스프라이트 애니메이션은 &apos;머리+몸통&apos;으로만 구성된 기본 동작(Idle, Walk)만 제작하고, 
                  &apos;팔&apos; 이미지는 유니티 엔진 내에서 트랜스폼으로 조작하여 무기 파지 및 공격 모션의 제작 비용을 낮추었습니다.
                </p>
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-2">
                  <h4 className="font-bold text-gray-900 text-sm">렌더링 정렬 계층 구조</h4>
                  <div className="font-mono text-xs text-blue-700 bg-white p-2.5 rounded-lg border border-gray-200">
                    BackArm (5) → Body (10) → Weapon (12) → FrontArm (15) → Slash (20)
                  </div>
                  <p className="text-xs text-gray-600 mt-2">
                    몸통과 무기, 팔, 참격 이펙트의 정렬 순서를 세분화하여, 
                    어깨 회전축(<code className="font-mono text-gray-700">Y: 0.28f</code>)을 중심으로 360도 조준 및 스윙 시 파지 형태가 자연스럽게 유지되도록 구성했습니다.
                  </p>
                </div>
              </div>

              {/* 물리 피지컬 파라미터 규격 */}
              <div className="p-6 rounded-2xl bg-blue-50/40 border border-blue-200/80 space-y-4">
                <h3 className="font-bold text-blue-950 text-base">
                  타격 피드백을 구성하는 4대 파라미터 규격
                </h3>
                <dl className="grid grid-cols-[110px_1fr] gap-x-3 gap-y-3 text-xs sm:text-sm">
                  <dt className="font-bold text-blue-900">역경직 (HitStop)</dt>
                  <dd className="text-gray-700">
                    적중 순간 <code className="font-mono text-blue-700 bg-white px-1 py-0.5 rounded">Time.timeScale = 0.02f</code> (0.09초 정지)로 명확한 적중 피드백 구현
                  </dd>

                  <dt className="font-bold text-blue-900">카메라 셰이크</dt>
                  <dd className="text-gray-700">
                    Cinemachine 6D Impulse (진폭 4.5f, 감쇠 시간 0.18초)로 화면 전체 충격파 전달
                  </dd>

                  <dt className="font-bold text-blue-900">피격 넉백</dt>
                  <dd className="text-gray-700">
                    체급 100 몬스터에 8.5f 임펄스를 가하고 0.18초 타이머 분리로 쾌적한 피격 판정
                  </dd>

                  <dt className="font-bold text-blue-900">참격 이펙트</dt>
                  <dd className="text-gray-700">
                    64×64 와이드 참격 VFX (0.9 → 1.25배 펀치 스케일) 및 무기 속성 컬러 동적 곱연산
                  </dd>
                </dl>
              </div>
            </div>
          </section>

          <hr className="border-gray-200/80" />

          {/* 05. 절차적 전장 생성 및 레벨 디자인 */}
          <section id="plan-05" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                05 · 절차적 전장 생성 및 레벨 디자인
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                절차적 전장 생성 및 레벨 디자인
              </h2>
            </header>

            <div className="text-sm sm:text-[15px] text-gray-700 leading-relaxed">
              <p>
                단조롭고 갇힌 느낌을 주는 단순 사각형 방 구조를 탈피하여, 유저가 탐험할 가치를 느낄 수 있는 유기적인 전장 구조를 목표로 합니다. 
                절차적 맵 생성 규칙을 통해 지형의 단차와 동선을 유연하게 형성하고, 향후 바이옴 테마에 맞춰 탐험의 재미를 제공할 수 있도록 맵 생성 방식을 지속적으로 연구 및 조정하고 있습니다.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-gray-50/80 border border-gray-200 space-y-3">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">지형 생성 규칙</span>
                <h3 className="font-bold text-gray-900 text-base">Wall-First 3단계 순행 생성 파이프라인</h3>
                <div className="space-y-2.5 text-xs sm:text-sm text-gray-600">
                  <div className="flex gap-2">
                    <span className="font-bold text-blue-600 shrink-0">1.</span>
                    <span><strong>외벽 토폴로지:</strong> 최소 3스텝 지그재그 규칙(dy &gt;= 3)으로 자연스러운 단차 형성 및 경계 확정</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-bold text-blue-600 shrink-0">2.</span>
                    <span><strong>보행 구역 타일링:</strong> 외벽 내부 보행 구역만 타일링하고 외곽은 보이드로 마감하여 렌더링 부하 최소화</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-bold text-blue-600 shrink-0">3.</span>
                    <span><strong>안전거리 스폰:</strong> 플레이어 시작점으로부터 안전 반경 밖 유효 바닥에서만 몬스터와 오브젝트 분산 배치</span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-gray-50/80 border border-gray-200 space-y-3">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">레벨 디자인 의도</span>
                <h3 className="font-bold text-gray-900 text-base">탐험 가치와 안전 동선 확보</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  방 진입 직후의 불합리한 기습 피격을 방지하기 위해 플레이어 시작 위치를 기준으로 안전 반경을 확보하며, 
                  지형의 굴곡과 단차를 통해 자연스러운 전투 구역과 회피 공간이 형성되도록 유도합니다.
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  반복적인 플레이에서도 예측하기 어려운 탐험의 긴장감을 유지하면서, 조작과 전략이 개입할 수 있는 필드 환경을 구축하는 것이 핵심 기획 목표입니다.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-gray-200/80" />

          {/* 06. 몬스터 메커니즘 & 프로토타입 4종 도감 */}
          <section id="plan-06" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                06 · 몬스터 메커니즘과 프로토타입 기획 도감
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                몬스터 메커니즘과 프로토타입 기획 도감
              </h2>
            </header>

            <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed">
              플레이어에게 혐오감을 주는 곤충·벌레형을 일절 배제하고(No Bugs Rule), 
              씨앗·밤송이·다람쥐 등 자연물 중심의 코지 판타지 기조를 유지합니다. 
              핵심 행동 패턴 4가지(접촉 추적, 회전 돌진, 원거리 사격, 다단 광역)를 검증하기 위해 구성된 1구역 라인업입니다.
            </p>

            {/* 정돈된 도감 그리드 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 pt-2">
              {[
                {
                  img: "/TinyJourney/slime_sprout.png",
                  name: "새싹 슬라임",
                  badge: "근접 추적형",
                  element: "무속성",
                  desc: "별도의 선딜레이 없이 플레이어를 지속 추적하며 접촉 시 근접 피해를 주는 기본 몬스터입니다.",
                },
                {
                  img: "/TinyJourney/chestnut_hedgehog.png",
                  name: "밤송이 고슴도치",
                  badge: "돌진 공격형",
                  element: "대지 속성",
                  desc: "사거리(4.8m) 진입 시 짧은 대기 동작 후 플레이어 방향으로 3.5배속 직선 돌진하며, 벽면 충돌 시 1초간 기절 상태가 됩니다.",
                },
                {
                  img: "/TinyJourney/feral_squirrel.png",
                  name: "꽃꼬리 다람쥐",
                  badge: "원거리 사격형",
                  element: "맹독 속성",
                  desc: "사거리(5.5m)를 유지하며 이동하다가, 공격 주기에 맞춰 전방으로 독 포자 투사체를 발사합니다.",
                },
                {
                  img: "/TinyJourney/rotwood.png",
                  name: "뒤틀린 수호 고목",
                  badge: "보스 (다단계 패턴)",
                  element: "대지 속성",
                  desc: "1구역 보스 몬스터로, 체력 구간에 따라 ① 양손 대지 강타(범위 공격), ② 화염 강타, ③ 주변 광역 폭발의 3단계 패턴을 구사합니다.",
                },
                {
                  img: "/TinyJourney/weapon_twig.png",
                  name: "단단한 나뭇가지 검",
                  badge: "기본 근접 무기",
                  element: "참격 (Slash)",
                  desc: "초반 기본 무기입니다. 조준 방향에 따른 360도 스윙 판정과 64×64 규격의 참격 이펙트가 연동됩니다.",
                },
                {
                  img: "/TinyJourney/CatSide.png",
                  name: "토벌사 베이스 캐릭터",
                  badge: "2분할 스프라이트",
                  element: "플레이어 캐릭터",
                  desc: "무기 파지와 공격 모션의 제작 비용을 낮추기 위해 '머리+몸통'과 '팔' 2개의 이미지로 분리했습니다. 스프라이트 애니메이션은 머리+몸통의 Idle·Walk만 제작하고, 팔 이미지는 유니티에서 직접 조작합니다.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-2xl border border-gray-200/90 bg-white p-5 flex flex-col justify-between shadow-sm hover:border-blue-300 transition duration-200"
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
                    <h3 className="font-bold text-gray-900 text-base mt-1">
                      {item.name}
                    </h3>
                  </div>
                  <p className="text-xs sm:text-[13px] text-gray-600 leading-relaxed mt-3 pt-3 border-t border-gray-100">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>

            {/* 몬스터 공격 FSM 4단계 시퀀스 다이어그램 */}
            <div className="space-y-3 pt-4">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200 pb-2">
                <h4 className="font-bold text-gray-900 text-base">
                  [도식 2-2] 몬스터 AI 4단계 상태 머신(FSM) 및 피격 인지 시퀀스
                </h4>
                <span className="text-xs font-medium text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded-full border border-blue-200">
                  전조·공격·후딜·그로기 4단계 상태 전이
                </span>
              </div>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                모든 몬스터는 4단계 상태 전이를 거치도록 규격화하여, 불합리한 피격을 방지하고 명확한 공략 및 반격 리듬을 학습하도록 유도했습니다.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-3 pt-1 text-center">
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <div className="text-xs font-extrabold text-blue-600 tracking-wider">1. 전조 (Windup)</div>
                  <h5 className="font-bold text-gray-900 text-sm mt-1">사거리 진입 인지</h5>
                  <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                    사거리 진입 시 0.4초간 준비 모션 (회피 타이밍 인지)
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 border border-rose-200 bg-rose-50/30">
                  <div className="text-xs font-extrabold text-rose-600 tracking-wider">2. 공격 (Action)</div>
                  <h5 className="font-bold text-gray-900 text-sm mt-1">돌진 또는 사격</h5>
                  <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                    3.5배속 직선 돌진 또는 전방 원거리 투사체 발사
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 border border-purple-200 bg-purple-50/30">
                  <div className="text-xs font-extrabold text-purple-600 tracking-wider">3. 후딜 (Recovery)</div>
                  <h5 className="font-bold text-gray-900 text-sm mt-1">공격 직후 딜레이</h5>
                  <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                    공격 후 딜레이 구간에서 플레이어 회피 및 카운터 판정
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-gray-50 border border-emerald-200 bg-emerald-50/30">
                  <div className="text-xs font-extrabold text-emerald-600 tracking-wider">4. 그로기 (Groggy)</div>
                  <h5 className="font-bold text-gray-900 text-sm mt-1">벽 충돌 기절</h5>
                  <p className="text-xs text-gray-600 mt-1.5 leading-relaxed">
                    벽면 충돌 시 1초간 기절 상태 유도 후 안전 반격 타이밍 확보
                  </p>
                </div>
              </div>
            </div>

            {/* 전투 데미지 연산 공식 및 5원소 상성 */}
            <div className="p-5 rounded-2xl bg-gray-900 text-white space-y-3 shadow-sm mt-4">
              <div className="flex items-center justify-between border-b border-gray-800 pb-2 text-xs text-gray-400">
                <span className="font-semibold text-emerald-400">[수식 2-1] 비선형 방어력 감쇄 및 5원소 상성 데미지 공식</span>
                <span>전투 메커니즘 규격</span>
              </div>
              <div className="font-mono text-xs sm:text-sm text-emerald-400 py-1 text-center">
                FinalDamage = RawDamage × [ 100 / (100 + Defense × (1 - Pen)) ] × ElementMult
              </div>
              <ul className="text-xs text-gray-300 space-y-1 list-disc pl-4 leading-relaxed">
                <li><strong>비선형 방어력 감쇄:</strong> 방어력(Defense)이 높아져도 데미지가 0으로 수렴하지 않으며, 방어 관통(Pen) 옵션의 효율이 일정하게 유지됩니다.</li>
                <li><strong>5원소 대칭 순환 상성:</strong> 화(Fire) ➔ 토(Earth) ➔ 뇌(Lightning) ➔ 독(Poison) ➔ 수(Ice) ➔ 화(Fire) 순환으로 상성 우위 시 1.5배 피해를 적용해 무기 교체(Swap) 파밍을 유도합니다.</li>
              </ul>
            </div>
          </section>

          {/* 하단 탭 전환 배너 */}
          <div className="p-6 bg-gradient-to-r from-blue-50/70 to-indigo-50/40 border border-blue-200/80 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                시스템 엔지니어링 및 코드 아키텍처가 궁금하신가요?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                통합 엑셀 파이프라인, 전략 패턴 모듈 분리, Netcode 서버 권한 구조는 기술서에서 확인하실 수 있습니다.
              </p>
            </div>
            <button
              onClick={() => {
                handleTabChange("tech");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-xl transition shrink-0 shadow-sm"
            >
              기술서 탭으로 이동 →
            </button>
          </div>
        </article>
      )}

      {/* ===================================================================== */}
      {/* TAB 2: 기술서 */}
      {/* ===================================================================== */}
      {activeTab === "tech" && (
        <article className="space-y-16">
          {/* 기술 부문 핵심 요약 카드 */}
          <section className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-3">
            <div className="flex items-center justify-between border-b border-gray-200 pb-2.5">
              <h3 className="font-bold text-gray-900 text-base">기술 핵심 요약</h3>
              <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                클라이언트 아키텍처 &amp; 최적화
              </span>
            </div>
            <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 pt-1 text-xs">
              <div className="p-3 rounded-xl bg-white border border-gray-200">
                <span className="font-bold text-gray-900 block mb-1">데이터 파이프라인</span>
                GameData.xlsx 6개 시트 0.6초 백그라운드 자동 직렬화 &amp; O(1) 상성 매트릭스
              </div>
              <div className="p-3 rounded-xl bg-white border border-gray-200">
                <span className="font-bold text-gray-900 block mb-1">전략 패턴 AI &amp; 물리</span>
                IMonsterAttackModule 전략 패턴 4종 분리 및 8방향 무할당 조향 레이캐스트
              </div>
              <div className="p-3 rounded-xl bg-white border border-gray-200">
                <span className="font-bold text-gray-900 block mb-1">2.5D 소팅 &amp; 렌더링</span>
                하향 공격 무기 정렬 승격(+1000) 및 남쪽 절벽 턱 3단 레이어 분리
              </div>
              <div className="p-3 rounded-xl bg-white border border-gray-200">
                <span className="font-bold text-gray-900 block mb-1">네트워크 &amp; 인프라</span>
                Netcode NGO 서버 권한 분리 및 0ms 로컬 예측, Zero-Camera 픽셀 미니맵
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

          {/* 01. 통합 엑셀 마스터 데이터 파이프라인 */}
          <section id="tech-01" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                01 · 통합 엑셀 마스터 데이터 파이프라인
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                통합 엑셀 마스터 데이터 파이프라인 (GameData.xlsx)
              </h2>
            </header>

            <div className="text-sm sm:text-[15px] text-gray-700 leading-relaxed">
              <p>
                개발자가 하드코딩하지 않고, 기획 데이터(아이템, 몬스터, 속성 상성, 다국어)를 단일 엑셀 파일에서 일관되게 제어할 수 있도록 
                <strong> 엑셀 기반 통합 데이터 관리</strong> 및 자동 동기화 파이프라인을 구축했습니다.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 pt-2">
              <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-200 space-y-4">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">데이터 자동화 구조</span>
                <h3 className="font-bold text-gray-900 text-base">
                  엑셀 저장 시 ScriptableObject 자동 갱신
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-gray-600">
                  <p>
                    <strong className="text-gray-900">단일 엑셀 6개 시트 통합:</strong> <code className="font-mono text-blue-700 bg-blue-50 px-1 py-0.5 rounded">GameData.xlsx</code> 내에 
                    ItemMaster, ItemEffects, Definitions, MonsterMaster, ElementChart, Localization 시트를 통합 관리합니다.
                  </p>
                  <p>
                    <strong className="text-gray-900">Ctrl+S 즉시 반영:</strong> 엑셀을 저장하는 즉시 
                    Unity 백그라운드 포스트프로세서(<code className="font-mono text-blue-700 bg-blue-50 px-1 py-0.5 rounded">MasterDataPostprocessor.cs</code>)가 동작하여 
                    0.6초 내에 일괄 CSV 파싱 및 ScriptableObject 에셋을 자동 갱신합니다.
                  </p>
                  <p>
                    <strong className="text-gray-900">인라인 드랍 테이블 파싱:</strong> 셀 하나에 <code className="font-mono text-gray-800 bg-white px-1 py-0.5 rounded border border-gray-200">item_slime_gel:0.8:1-2</code>와 같이 
                    간결히 작성하면 전용 <code className="font-mono text-gray-800">LootTableSO</code>를 자동으로 빌드해 바인딩합니다.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-200 space-y-4">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">상성 연산 구조</span>
                <h3 className="font-bold text-gray-900 text-base">
                  5원소 대칭 상성 매트릭스 &amp; 데미지 공식
                </h3>
                <div className="p-3.5 rounded-xl bg-gray-900 text-emerald-400 font-mono text-xs overflow-x-auto">
                  FinalDamage = RawDamage × [ 100 / (100 + Defense × (1 - Pen)) ] × ElementMult
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-gray-600">
                  <p>
                    <strong className="text-gray-900">5원소 순환 상성:</strong> <code className="font-mono text-blue-700 bg-blue-50 px-1 py-0.5 rounded">Fire → Earth → Lightning → Poison → Ice → Fire</code>
                    (유리 1.5x, 불리 0.7x, 동일 0.5x, 무속성 1.0x).
                  </p>
                  <p>
                    <strong className="text-gray-900">배열 인덱싱 기반 상성 조회:</strong> 상성 배율을 조건문으로 분기하지 않고, 
                    엑셀 매트릭스를 에셋으로 미리 변환해 런타임 $O(1)$ 인덱싱으로 조회합니다.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-gray-200/80" />

          {/* 02. 몬스터 전략 패턴 & 물리 제어 아키텍처 */}
          <section id="tech-02" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                02 · 몬스터 전략 패턴 및 물리 제어 아키텍처
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                몬스터 전략 패턴 &amp; 물리 제어 아키텍처
              </h2>
            </header>

            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-200 space-y-3">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">객체지향 설계</span>
                <h3 className="font-bold text-gray-900 text-base">
                  공격 모듈 전략 패턴 분리 (IMonsterAttackModule)
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  <code className="font-mono text-blue-700 bg-blue-50 px-1 py-0.5 rounded">EnemyBase.cs</code>가 거대해지는 것을 방지하고 
                  개방-폐쇄 원칙(OCP)을 준수하기 위해 공격 행동을 4종 전략 모듈로 분리했습니다.
                </p>
                <div className="grid grid-cols-1 gap-2 pt-2 text-xs">
                  <div className="p-2.5 rounded-lg bg-white border border-gray-200">
                    <strong className="text-gray-900">ContactAttackModule:</strong> 슬라임의 지속 추적 및 접촉 근접 공격
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-gray-200">
                    <strong className="text-gray-900">ChargeAttackModule:</strong> 고슴도치의 4.8m 대기 동작, 3.5배속 직선 돌진 및 벽 충돌 기절
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-gray-200">
                    <strong className="text-gray-900">RangedShooterModule:</strong> 다람쥐의 5.5m 거리 유지 및 모션 동기화 독 포자 발사
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-gray-200">
                    <strong className="text-gray-900">BossPhaseModule:</strong> 수호 고목의 체력 구간별 3단 광역 패턴 분기
                  </div>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-200 space-y-3">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">물리 튜닝</span>
                <h3 className="font-bold text-gray-900 text-base">
                  장애물 회피 이동 &amp; 물리 충돌·넉백 분리
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  <p>
                    <strong className="text-gray-900">EnemyMotor2D (8방향 레이캐스트):</strong> GC 할당이 없는 장애물 우회 조향 및 시야선(Line of Sight) 검사를 통해 벽 너머로의 헛돌진을 방지합니다.
                  </p>
                  <p>
                    <strong className="text-gray-900">물리 질량 고정 (mass=100, Friction=0):</strong> 플레이어의 단순 이동 충돌로 몬스터가 밀리지 않고 외곽을 따라 자연스럽게 이동하도록 설정했습니다.
                  </p>
                  <p>
                    <strong className="text-gray-900">넉백 타이머 분리:</strong> 무기 타격 적중 시에만 <code className="font-mono text-blue-700 bg-white px-1 py-0.5 rounded border border-gray-200">ApplyKnockback(8.5f, 0.18s)</code>과 전용 타이머를 통해 지정된 거리만큼 밀려나도록 분리했습니다.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-gray-200/80" />

          {/* 03. 2.5D 절벽 깊이감 & 하향 공격 소팅 보정 */}
          <section id="tech-03" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                03 · 2.5D 깊이감 표현과 하향 공격 소팅 보정
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                2.5D 깊이감 표현과 하향 공격 소팅 보정
              </h2>
            </header>

            <div className="grid md:grid-cols-2 gap-6 items-stretch">
              <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-200 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">문제 해결</span>
                  <h3 className="font-bold text-gray-900 text-base my-2">
                    공격 중 무기·슬래시 정렬 승격 (attackBoost = +1000)
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    탑뷰 시점에서 플레이어가 몬스터보다 위쪽(<code className="font-mono text-blue-700 bg-blue-50 px-1 py-0.5 rounded">Player.y &gt; Enemy.y</code>)에 위치할 때, 
                    일반 Y-Sorting 규칙으로 인해 아래쪽으로 휘두르는 무기나 참격 이펙트가 몬스터 몸통 뒤로 가려지는 시각적 문제가 발생했습니다.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-3">
                    이를 해결하기 위해 공격 진행 중(<code className="font-mono text-blue-700 bg-blue-50 px-1 py-0.5 rounded">isAttacking == true</code>)에는 
                    무기, 앞팔, 슬래시 스프라이트 렌더러의 정렬 오더에 <code className="font-mono text-blue-700 bg-white px-1 py-0.5 rounded border border-gray-200">+1000</code>을 동적으로 가산하여 
                    타격 모션이 몬스터 앞쪽에 가려지지 않고 명확히 표시되도록 시인성을 보정했습니다.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200 text-xs font-semibold text-blue-600">
                  타격 시인성 보정 완료
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-200 flex flex-col justify-between">
                <div>
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">차폐 레이어링</span>
                  <h3 className="font-bold text-gray-900 text-base my-2">
                    남쪽 절벽 턱 3단 레이어 분리 (Wall_Front_Tilemap)
                  </h3>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    캐릭터가 남쪽 절벽 턱 뒤로 걸어 내려갈 때 발끝이 허공에 뜨는 이질감을 해소하기 위해 
                    3단 타일맵 레이어링(<code className="font-mono text-blue-700 bg-blue-50 px-1 py-0.5 rounded">Floor</code>, <code className="font-mono text-blue-700 bg-blue-50 px-1 py-0.5 rounded">Wall</code>, <code className="font-mono text-blue-700 bg-blue-50 px-1 py-0.5 rounded">Wall_Front_Tilemap</code>)을 구축했습니다.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-3">
                    남쪽 절벽 턱을 전면 타일맵(SortingOrder: 10005)으로 분리하여 캐릭터의 발끝과 하체만 자연스럽게 가려지도록 처리하고, 
                    <code className="font-mono text-blue-700 bg-blue-50 px-1 py-0.5 rounded">Custom Physics Shape</code>를 통해 접지선에서 물리 이동이 정확히 멈추도록 구현했습니다. 
                    더불어 Cinemachine 가상 카메라의 직교 뷰(Orthographic Size: 6.5)를 2.5D 타일맵 규격에 정밀하게 튜닝하여 픽셀 왜곡 없는 안정적인 시야각과 깊이감을 완성했습니다.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200 text-xs font-semibold text-blue-600">
                  2.5D 지형 입체감 확보
                </div>
              </div>
            </div>
          </section>

          <hr className="border-gray-200/80" />

          {/* 04. Netcode(NGO) 서버 권한 분리 & 오디오·세이브 */}
          <section id="tech-04" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                04 · Netcode 권한 분리 및 시스템 인프라
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                Netcode 권한 분리 및 시스템 인프라
              </h2>
            </header>

            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-200 space-y-3">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">네트워크 동기화</span>
                <h3 className="font-bold text-gray-900 text-base">Netcode P2P Host 환경 및 권한 분리</h3>
                <div className="space-y-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  <p>
                    <strong className="text-gray-900">자동 Host 개설:</strong> 싱글플레이 환경에서도 <code className="font-mono text-blue-700 bg-blue-50 px-1 py-0.5 rounded">GameBootstrap.cs</code>가 
                    자동으로 Listen Server를 열어 향후 Steam P2P Co-op 전환 시 코드 재작성을 최소화합니다.
                  </p>
                  <p>
                    <strong className="text-gray-900">서버 권한 연산:</strong> AI 길찾기, 피격 데미지 연산, 체력 동기화는 100% 서버에서 통제하여 판정 무결성을 보장합니다.
                  </p>
                  <p>
                    <strong className="text-gray-900">로컬 0ms 피드백:</strong> 역경직, 화면 진동, 피격 플래시는 공격자의 로컬 클라이언트에서 네트워크 지연 없이 즉각 실행됩니다.
                  </p>
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-200 space-y-3">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">메모리 &amp; 세이브 관리</span>
                <h3 className="font-bold text-gray-900 text-base">텍스처 픽셀 미니맵과 세이브 관리</h3>
                <div className="space-y-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  <p>
                    <strong className="text-gray-900">텍스처 갱신 미니맵:</strong> 별도의 보조 카메라를 띄우지 않고, 
                    그리드 데이터를 <code className="font-mono text-blue-700 bg-blue-50 px-1 py-0.5 rounded">Texture2D</code> 픽셀에 직접 기록해 UI RawImage에 바인딩합니다. (반경 9타일 시야 갱신)
                  </p>
                  <p>
                    <strong className="text-gray-900">사운드 디커플링:</strong> AudioMixer 4계층 버스 라우팅 및 <code className="font-mono text-blue-700 bg-blue-50 px-1 py-0.5 rounded">SoundEvents</code> 이벤트 버스를 통해 
                    사운드 매니저 부재 시에도 컴파일/런타임 에러를 방지합니다.
                  </p>
                  <p>
                    <strong className="text-gray-900">방 단위 자동 저장 및 강제 종료 대응:</strong> 다음 방 진입 시 자동 저장되며, 
                    강제 종료 악용을 방지하기 위해 재시작 시 해당 방 입구에서 몬스터가 초기화된 상태로 시작됩니다.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-gray-200/80" />

          {/* 05. 프로토타입 구현 현황 및 개발 로드맵 */}
          <section id="tech-05" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                05 · 프로토타입 구현 현황 및 개발 로드맵
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                프로토타입 구현 현황 및 개발 로드맵
              </h2>
            </header>

            <div className="grid md:grid-cols-2 gap-6 pt-2">
              <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-200 space-y-4">
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <h3 className="font-bold text-gray-900 text-base">핵심 메커니즘 프로토타입 검증</h3>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-100 text-blue-800">
                    검증 진행 중
                  </span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span><strong>마스터데이터 파이프라인:</strong> GameData.xlsx 6개 시트 및 백그라운드 0.6초 자동 직렬화</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span><strong>파츠 분리형 캐릭터 애니메이션:</strong> 머리+몸통 및 팔 분리 제어 기반의 무기 모션 및 타격 판정 기초 구현</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span><strong>몬스터 공격 전략 패턴:</strong> IMonsterAttackModule 기반 행동 분리 및 무할당 조향 레이캐스트</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span><strong>2.5D 정렬 &amp; 차폐 렌더링:</strong> 공격 시 무기 정렬 승격(+1000) 및 남쪽 절벽 턱 전면 분리</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-600 font-bold">✓</span>
                    <span><strong>테트리스 루팅 UI:</strong> 10×10 배낭 그리드 회전 패킹 로직 프로토타이핑</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-200 space-y-4">
                <div className="flex items-center justify-between border-b border-gray-200 pb-3">
                  <h3 className="font-bold text-gray-900 text-base">차기 개발 로드맵 (Upcoming)</h3>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-gray-200 text-gray-800">
                    개발 예정
                  </span>
                </div>
                <ul className="space-y-2.5 text-xs sm:text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 font-bold">→</span>
                    <span><strong>마이홈 하우징 시스템:</strong> 마이홈 가구 배치 씬 및 영구 스탯 누적 시스템 구축</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 font-bold">→</span>
                    <span><strong>절차적 전장 고도화:</strong> 맵 생성 알고리즘 고도화 및 바이옴 테마별 전장 확장</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 font-bold">→</span>
                    <span><strong>전투 액션 피지컬:</strong> 무기 5단계 진화 트리 및 조작감·타격 피드백 세부 튜닝</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-gray-500 font-bold">→</span>
                    <span><strong>네트워크 인프라:</strong> Steam P2P Co-op 멀티플레이어(Netcode NGO) 확장 대비 인프라 고도화</span>
                  </li>
                </ul>
              </div>
            </div>
          </section>
        </article>
      )}
    </main>
  );
}
