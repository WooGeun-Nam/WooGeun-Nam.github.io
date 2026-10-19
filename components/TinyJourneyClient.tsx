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
    { id: "plan-01", tag: "개요 & 필라", title: "프로젝트 개요 및 3대 디자인 필라" },
    { id: "plan-02", tag: "내러티브 룰북", title: "세계관 스토리텔링과 세대 계승 규칙" },
    { id: "plan-03", tag: "하우징 명세", title: "N×N 하우징 스펙트럼 (방어구 완전 대체)" },
    { id: "plan-04", tag: "액션 피드백", title: "2.5D 레이맨 리깅과 타격 피지컬 규격" },
    { id: "plan-05", tag: "레벨 디자인", title: "절차적 전장 생성 및 지형 위계" },
    { id: "plan-06", tag: "몬스터 명세", title: "프로토타입 몬스터 4종 기획 도감" },
  ];

  const techSections = [
    { id: "tech-01", tag: "데이터 파이프라인", title: "GameData.xlsx 0.6초 백그라운드 직렬화" },
    { id: "tech-02", tag: "AI & 물리 모듈", title: "IMonsterAttackModule 전략 패턴 및 무할당 물리" },
    { id: "tech-03", tag: "2.5D 소팅 & 렌더링", title: "하향 공격 소팅 보정(+1000) 및 전면 절벽 분리" },
    { id: "tech-04", tag: "네트워크 & 인프라", title: "Netcode NGO 권한 분리와 오디오·세이브 무결성" },
    { id: "tech-05", tag: "엔지니어링 마일스톤", title: "구현 현황 (Step 1~11) 및 차기 로드맵" },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-14 space-y-10 text-gray-800 font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* ===================================================================== */}
      {/* 1. 상단 메타 헤더 (사이트 기본 규격 및 Others 프로젝트와 100% 일치) */}
      {/* ===================================================================== */}
      <section className="grid gap-8 md:grid-cols-2 items-stretch">
        <div className="rounded-2xl overflow-hidden shadow-sm flex flex-col items-center justify-center p-8 bg-gradient-to-b from-gray-50 to-gray-100/70 border border-gray-200">
          <ImgPrefixed
            src="/TinyJourney/CatSide.png"
            alt="TinyJourney 토벌사 베이스 캐릭터"
            className="w-36 h-36 [image-rendering:pixelated] object-contain drop-shadow transition-transform duration-300 hover:scale-105"
          />
          <p className="text-xs text-gray-500 mt-4 text-center font-medium">
            17-Part 파츠 분리형 베이스 캐릭터 · 세대 계승 및 외형 교체 지원
          </p>
        </div>

        <div className="flex flex-col justify-between py-1">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-blue-100 text-blue-700 tracking-wide uppercase">
                Prototype Active
              </span>
              <span className="text-xs text-gray-400">·</span>
              <span className="text-xs text-gray-500 font-medium">Steam PC Targeted</span>
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-gray-900 underline decoration-blue-500 underline-offset-8">
              TinyJourney <span className="text-xl sm:text-2xl font-medium text-gray-400">(가제)</span>
            </h1>
            <p className="text-sm sm:text-[15px] text-gray-600 mt-3 font-medium">
              부제 : 털뭉치 토벌대의 본격 생계형 토벌 일지 <span className="text-gray-400">(Tiny Paws, Heavy Hits)</span>
            </p>

            <dl className="grid grid-cols-[120px_1fr] gap-x-4 gap-y-3 text-gray-800 mt-6 text-sm sm:text-[15px]">
              <dt className="font-semibold text-gray-500 text-xs tracking-wider uppercase pt-0.5">ROLE</dt>
              <dd className="font-medium text-gray-900">기획, 클라이언트 프로그래밍, 도트 그래픽 (1인 개발)</dd>

              <dt className="font-semibold text-gray-500 text-xs tracking-wider uppercase pt-0.5">DURATION</dt>
              <dd className="font-medium text-gray-900">2026.03 ~ 진행 중 (프로토타입 개발)</dd>

              <dt className="font-semibold text-gray-500 text-xs tracking-wider uppercase pt-0.5">PLATFORM</dt>
              <dd className="font-medium text-gray-900">PC (Unity 6 · 2D URP · C# · Steam 타깃)</dd>

              <dt className="font-semibold text-gray-500 text-xs tracking-wider uppercase pt-0.5">CORE TECH</dt>
              <dd className="font-medium text-gray-900">MasterData Pipeline, 2.5D Rigging, Netcode NGO, Strategy AI</dd>
            </dl>
          </div>

          <div className="pt-4 border-t border-gray-150">
            <span className="inline-flex items-center gap-2 text-xs font-semibold text-blue-800 bg-blue-50/80 px-3 py-1.5 rounded-lg border border-blue-200/70">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              핵심 프로토타입 11개 스텝 구현 완료 · 시스템 고도화 진행 중
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
                <span className="font-bold text-blue-900 block mb-1">코어 갭 모에 감성</span>
                찹쌀떡 소동물이 몸체만 한 인간의 유물을 온몸으로 휘두르는 묵직한 액션
              </div>
              <div className="p-3 rounded-xl bg-white border border-blue-150">
                <span className="font-bold text-blue-900 block mb-1">상냥한 세대 계승</span>
                0번째 선대 묘비와 선대의 빈집, 17-Part 파츠 분리형 비잔혹 세대교체
              </div>
              <div className="p-3 rounded-xl bg-white border border-blue-150">
                <span className="font-bold text-blue-900 block mb-1">N×N 하우징 스펙업</span>
                몸통 방어구를 100% 대체하는 오두막 가구 테트리스 배치 및 영구 스탯 누적
              </div>
              <div className="p-3 rounded-xl bg-white border border-blue-150">
                <span className="font-bold text-blue-900 block mb-1">절차적 지형 위계</span>
                Wall-First 3단계 파이프라인(지그재그 외벽, 보이드 마감, 안전거리 스폰)
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

          {/* 01. 프로젝트 개요 & 디자인 필라 */}
          <section id="plan-01" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                01 · 프로젝트 개요 및 3대 디자인 필라
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                프로젝트 개요 및 3대 핵심 디자인 필라
              </h2>
            </header>

            <div className="text-base sm:text-[17px] text-gray-700 leading-relaxed font-normal">
              <p>
                <strong className="font-bold text-gray-900">TinyJourney</strong>는 찹쌀떡처럼 무해해 보이는 털뭉치 소동물이, 
                인간이 버리고 간 거대한 쓰레기(녹슨 스푼, 쇠포크, 부러진 나뭇가지)를 온몸으로 휘두르는 
                <strong className="text-blue-700 font-semibold"> &apos;갭 모에(Gap Moe)&apos;</strong>를 핵심 감성으로 삼는 탑뷰 2D 액션 RPG입니다.
              </p>
              <p className="mt-3 text-sm sm:text-base text-gray-600">
                복잡하고 파편화된 전통 RPG의 수치 놀음을 걷어내고, 
                액션의 손맛과 공간의 안식처를 하나의 유기적인 순환선으로 엮기 위해 다음 3대 설계를 지향합니다.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-5 pt-2">
              <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-200/90 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-blue-500 text-white flex items-center justify-center font-bold text-sm mb-4 shadow-sm">
                    1
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">한 방의 쾌감</h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    자신의 몸체만 한 인간의 유물을 온몸으로 휘두르는 풀 스윙. 
                    적중 순간의 0.09초 역경직(HitStop)과 6D 화면 진동이 만드는 묵직한 타격 피드백.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200/70 text-xs font-semibold text-blue-600">
                  타격감 · 물리 피드백 극대화
                </div>
              </div>

              <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-200/90 flex flex-col justify-between">
                <div>
                  <div className="w-8 h-8 rounded-lg bg-gray-800 text-white flex items-center justify-center font-bold text-sm mb-4 shadow-sm">
                    2
                  </div>
                  <h3 className="text-lg font-bold text-gray-900">내 손으로 벼린다</h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    필드에서 주워 온 몬스터 전리품과 고철을 모아 무기를 직접 제작·개조. 
                    단순 스탯 뻥튀기 대신 타격 범위와 조작감의 명확한 확장을 체감하는 파밍 구조.
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
                  <h3 className="text-lg font-bold text-gray-900">돌아올 곳이 있다</h3>
                  <p className="text-sm text-gray-600 mt-2 leading-relaxed">
                    치열한 토벌 후 마을 자취방으로 복귀. 인간의 쓰레기(병뚜껑, 골무, 성냥갑)로 
                    만든 가구를 오두막에 배치하는 행위 자체가 영구 방어구 스펙업이 되는 안식처 루프.
                  </p>
                </div>
                <div className="mt-4 pt-3 border-t border-gray-200/70 text-xs font-semibold text-blue-600">
                  하우징이 곧 방어구 스펙업
                </div>
              </div>
            </div>
          </section>

          <hr className="border-gray-200/80" />

          {/* 02. 세계관 내러티브 & 상냥한 세대 계승 */}
          <section id="plan-02" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                02 · 세계관 환경 스토리텔링 및 상냥한 세대 계승
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                세계관 환경 스토리텔링 및 상냥한 세대 계승 규칙
              </h2>
            </header>

            <div className="bg-gradient-to-r from-blue-50/60 to-gray-50 border-l-4 border-blue-500 p-5 rounded-r-2xl">
              <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                로그라이트 장르의 <strong>&apos;사망 시 전리품 유실&apos;</strong>과 <strong>&apos;외형 변화&apos;</strong>를 
                시스템적 편의로 치부하지 않고, 게임 내 환경 스토리텔링(Environmental Storytelling)과 일치시켰습니다.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4 text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                <h3 className="text-lg font-bold text-gray-900">
                  생계형 토벌과 비극을 감춘 선대의 빈집
                </h3>
                <p>
                  거대한 인간 세상의 발밑 &apos;잔디벌 마을&apos;에서 소동물들은 도토리 나르기와 분리수거 같은 
                  고된 단순 노동에 시달려 왔습니다. 외곽 숲에서 발생한 변이 현상 &apos;야생화(Feral Surge)&apos;를 
                  막기 위해 촌장이 거액의 포상금을 내걸자, 텅 빈 냉장고를 본 주인공이 녹슨 나뭇가지를 쥐고 숲으로 향합니다.
                </p>
                <p>
                  촌장이 주인공에게 무상으로 내어준 아늑한 자취방은, 사실 숲에서 목숨을 잃고 돌아오지 못한 
                  <strong className="text-gray-900"> &apos;선대 토벌사&apos;의 빈집</strong>입니다. 
                  마을 언덕배기 묘지에는 플레이어가 게임을 처음 설치하고 실행한 시각
                  (<code className="font-mono text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded text-xs font-semibold">firstGameLaunchTime</code>)이 
                  각인된 <strong>0대 선대 토벌사의 비석</strong>이 묵묵히 자리를 지키고 있습니다.
                </p>
              </div>

              <div className="space-y-4">
                <div className="p-5 rounded-xl border border-gray-200 bg-white shadow-sm space-y-2">
                  <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">세대 계승 규칙 1</span>
                  <h4 className="text-base font-bold text-gray-900">비잔혹·평화적 세대교체</h4>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                    체력이 0이 되어도 피가 튀는 잔혹한 연출 대신 따뜻한 세피아 톤 암전 후, 
                    마을 어귀 마차에서 새로운 외형(종족·색상 팔레트 스왑)의 차세대 토벌사가 이사 오는 컷신이 재생됩니다. 
                    (주인공 캐릭터를 17개 파츠 분리형 도트로 제작한 설계 배경)
                  </p>
                </div>

                <div className="p-5 rounded-xl border border-blue-200 bg-blue-50/40 shadow-sm space-y-2">
                  <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">세대 계승 규칙 2</span>
                  <h4 className="text-base font-bold text-blue-950">하우징 자산의 100% 영구 보존</h4>
                  <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                    던전에 들고 간 미정산 가방 전리품은 유실되지만, 자취방에 배치한 모든 가구와 오두막 확장은 영구 보존됩니다. 
                    새로 부임한 토벌사는 선대가 피땀 흘려 마련한 가구의 스탯 버프를 그대로 물려받아 모험을 이어갑니다.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-gray-200/80" />

          {/* 03. 코어 루프 & N×N 하우징 스펙업 */}
          <section id="plan-03" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                03 · 코어 루프와 N×N 하우징 스펙업
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                코어 루프와 N×N 하우징 스펙트럼 (몸통 방어구 완전 대체)
              </h2>
            </header>

            {/* 프로세스 흐름도 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { step: "01", name: "자취방 정비", desc: "가구 배치로 기초 스탯을 확보하고, 출격 전 장비 보험을 세팅합니다." },
                { step: "02", name: "절차적 숲 토벌", desc: "필드 방을 전멸시키면 보스 및 몬스터 전리품 보따리가 즉시 드랍됩니다." },
                { step: "03", name: "테트리스 루팅", desc: "10×10 배낭에 다양한 모양의 고철·씨앗 블록을 R키로 회전 패킹합니다." },
                { step: "04", name: "귀환 & 영구 스펙업", desc: "가구 제작으로 오두막을 확장하고 영구 기초 스탯을 누적합니다." },
              ].map((stage, idx) => (
                <div key={idx} className="relative p-5 rounded-2xl bg-gray-50/70 border border-gray-200 flex flex-col justify-between">
                  <div>
                    <span className="text-xs font-extrabold text-blue-600 tracking-wider">PHASE {stage.step}</span>
                    <h3 className="text-base font-bold text-gray-900 mt-1">{stage.name}</h3>
                    <p className="text-xs sm:text-[13px] text-gray-600 mt-2 leading-relaxed">{stage.desc}</p>
                  </div>
                  <div className="mt-4 pt-2 text-[11px] font-semibold text-gray-400">
                    Step {idx + 1} of 4
                  </div>
                </div>
              ))}
            </div>

            <div className="space-y-4 pt-2">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200 pb-3">
                <h3 className="text-lg font-bold text-gray-900">
                  가구 분류별 영구 스탯 산출 공식 및 기획 의도
                </h3>
                <span className="text-xs text-gray-500 font-mono">
                  HousingBuffCalculator ↔ PlayerStats
                </span>
              </div>

              <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
                <table className="w-full text-left text-xs sm:text-sm divide-y divide-gray-200">
                  <thead className="bg-gray-50 text-gray-700 font-semibold">
                    <tr>
                      <th className="py-3 px-4">가구 분류</th>
                      <th className="py-3 px-4">대표 아이템 예시</th>
                      <th className="py-3 px-4">영구 스탯 효과</th>
                      <th className="py-3 px-4">기획 의도 및 밸런스 역할</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    <tr className="hover:bg-blue-50/30 transition">
                      <td className="py-3.5 px-4 font-bold text-gray-900">침구류</td>
                      <td className="py-3.5 px-4 text-gray-600">풀잎 침대, 이끼 이불</td>
                      <td className="py-3.5 px-4 font-semibold text-blue-700">최대 HP +5%, 마을 복귀 시 체력 완충</td>
                      <td className="py-3.5 px-4 text-gray-500 text-xs">생존 안정성 확보 및 복귀 시 회복 포션 비용 절감</td>
                    </tr>
                    <tr className="hover:bg-blue-50/30 transition bg-gray-50/30">
                      <td className="py-3.5 px-4 font-bold text-gray-900">운동 기구</td>
                      <td className="py-3.5 px-4 text-gray-600">돌 아령, 쳇바퀴 달리기판</td>
                      <td className="py-3.5 px-4 font-semibold text-blue-700">스태미나 상한 +10, 대시 쿨타임 -0.1s</td>
                      <td className="py-3.5 px-4 text-gray-500 text-xs">보스전 탄막 회피 빈도 및 조작 기동성 향상</td>
                    </tr>
                    <tr className="hover:bg-blue-50/30 transition">
                      <td className="py-3.5 px-4 font-bold text-gray-900">수납장</td>
                      <td className="py-3.5 px-4 text-gray-600">도토리 장롱, 버섯 서랍장</td>
                      <td className="py-3.5 px-4 font-semibold text-blue-700">임시 배낭 그리드 +2칸 확장</td>
                      <td className="py-3.5 px-4 text-gray-500 text-xs">1회 출격 시 고철·재료 파밍 효율 극대화</td>
                    </tr>
                    <tr className="hover:bg-blue-50/30 transition bg-gray-50/30">
                      <td className="py-3.5 px-4 font-bold text-gray-900">조명 및 트로피</td>
                      <td className="py-3.5 px-4 text-gray-600">반딧불 유리병, 보스 박제</td>
                      <td className="py-3.5 px-4 font-semibold text-blue-700">필드 시야 +15%, 상점 할인 보너스</td>
                      <td className="py-3.5 px-4 text-gray-500 text-xs">암흑 구역 탐색 안정성 및 상위 재화 절약</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          <hr className="border-gray-200/80" />

          {/* 04. 2.5D 레이맨 리깅 & 묵직한 액션 연출 */}
          <section id="plan-04" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                04 · 2.5D 레이맨 리깅과 타격 피지컬
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                2.5D 레이맨 리깅과 타격 피지컬 규격
              </h2>
            </header>

            <div className="grid md:grid-cols-2 gap-8 items-start">
              <div className="space-y-4 text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                <p>
                  1인 개발 환경에서 무기를 추가하거나 외형을 바꿀 때마다 수십 장의 도트 프레임을 새로 그리는 것은 
                  치명적인 리소스 병목을 유발합니다. 이를 해결하기 위해 
                  <strong>&apos;트랜스폼 연산 기반 2.5D 레이맨 리깅&apos;</strong>을 구축했습니다.
                </p>
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-2">
                  <h4 className="font-bold text-gray-900 text-sm">5단 정렬 계층 파이프라인</h4>
                  <div className="font-mono text-xs text-blue-700 bg-white p-2.5 rounded-lg border border-gray-200">
                    BackArm (5) → Body (10) → Weapon (12) → FrontArm (15) → Slash (20)
                  </div>
                  <p className="text-xs text-gray-600 mt-2">
                    앞손이 무기 손잡이를 덮어 쥐는 완벽한 90도 L자 파지세를 유지하며, 
                    어깨 회전축(<code className="font-mono text-gray-700">Y: 0.28f</code>)을 중심으로 무기와 팔이 일체형으로 360도 회전합니다.
                  </p>
                </div>
              </div>

              {/* 물리 피지컬 파라미터 규격 */}
              <div className="p-6 rounded-2xl bg-blue-50/40 border border-blue-200/80 space-y-4">
                <h3 className="font-bold text-blue-950 text-base">
                  절정의 타격감을 만드는 4대 피드백 파라미터 규격
                </h3>
                <dl className="grid grid-cols-[110px_1fr] gap-x-3 gap-y-3 text-xs sm:text-sm">
                  <dt className="font-bold text-blue-900">역경직 (HitStop)</dt>
                  <dd className="text-gray-700">
                    적중 순간 <code className="font-mono text-blue-700 bg-white px-1 py-0.5 rounded">Time.timeScale = 0.02f</code> (0.09초 정지)로 뼈 때리는 손맛 구현
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

          {/* 05. 절차적 전투 필드 & 유기적 지형 구조 */}
          <section id="plan-05" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                05 · 절차적 전장 생성 및 지형 위계
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                절차적 전장 생성 및 지형 위계
              </h2>
            </header>

            <div className="text-sm sm:text-[15px] text-gray-700 leading-relaxed">
              <p>
                단조롭고 갇힌 느낌을 주는 사각형 방 형태를 벗어나, 자연스러운 암벽과 언덕이 살아 숨 쉬는 전장을 목표로 합니다. 
                현재 프로토타입은 <strong>96×56 광활한 전장 규격(가상 카메라 직교 뷰 6.5)</strong>을 기준으로 지형 무결성을 철저히 검증하고 있으며, 
                향후 테마에 맞춰 더욱 넓게 개방되거나 유기적으로 연결되는 복합 필드로 확장될 예정입니다.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-2xl bg-gray-50/80 border border-gray-200 space-y-3">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">생성 파이프라인</span>
                <h3 className="font-bold text-gray-900 text-base">Wall-First 3단계 순행 생성 파이프라인</h3>
                <div className="space-y-2.5 text-xs sm:text-sm text-gray-600">
                  <div className="flex gap-2">
                    <span className="font-bold text-blue-600 shrink-0">1.</span>
                    <span><strong>외벽 토폴로지:</strong> 최소 3스텝 지그재그 규칙(dy &gt;= 3)으로 자연스러운 단차 형성 및 경계 확정</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-bold text-blue-600 shrink-0">2.</span>
                    <span><strong>바닥 타일링 &amp; 암흑 보이드:</strong> 외벽 내부 보행 구역만 타일링하고 외곽은 칠흑 공허(#050508)로 마감해 약 3,500타일 드로우콜 절감</span>
                  </div>
                  <div className="flex gap-2">
                    <span className="font-bold text-blue-600 shrink-0">3.</span>
                    <span><strong>안전거리 스폰:</strong> 플레이어 시작점으로부터 12타일 안전 반경 밖 유효 바닥에서만 몬스터와 오브젝트 분산 배치</span>
                  </div>
                </div>
              </div>

              <div className="p-5 rounded-2xl bg-gray-50/80 border border-gray-200 space-y-3">
                <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">입체 렌더링 솔루션</span>
                <h3 className="font-bold text-gray-900 text-base">2.5D 남쪽 절벽 턱 전면 분리 렌더링</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  탑뷰 2.5D 환경에서 남쪽 벽 뒤로 걸어갈 때 플레이어 전신이 벽 위에 붕 떠 보이는 이질감을 해결하기 위해, 
                  남쪽 절벽 턱을 전면 타일맵(<code className="font-mono text-blue-700 bg-white px-1.5 py-0.5 rounded border border-gray-200">Wall_Front_Tilemap</code>, SortingOrder: 10005)으로 분리했습니다.
                </p>
                <p className="text-xs text-gray-500 leading-relaxed">
                  플레이어의 발끝과 하체만 절벽 턱 뒤로 가려지며, Custom Physics Shape 콜라이더와 정확히 맞물려 자연스러운 공간 깊이감을 완성합니다.
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
                  badge: "Contact Tracker",
                  element: "무속성",
                  desc: "머리에 새싹이 돋은 젤리 슬라임. 별도 선딜레이 없이 폴짝폴짝 뛰며 플레이어를 끈질기게 추적하여 몸통 박치기 공격을 가합니다.",
                },
                {
                  img: "/TinyJourney/chestnut_hedgehog.png",
                  name: "밤송이 고슴도치",
                  badge: "Charge Attack",
                  element: "대지 속성",
                  desc: "사거리 4.8m 진입 시 팽이처럼 제자리 와인드업 후, 3.5배속 볼링공 회전 돌진을 감행합니다. 벽 충돌 시 1초간 스스로 스턴에 빠집니다.",
                },
                {
                  img: "/TinyJourney/feral_squirrel.png",
                  name: "꽃꼬리 다람쥐",
                  badge: "Ranged Shooter",
                  element: "맹독 속성",
                  desc: "사거리 5.5m를 유지하며 카이팅하다가, 보라색 꽃꼬리에서 독기를 모아 모션 타이밍에 맞춰 전방으로 독 포자 투사체를 발사합니다.",
                },
                {
                  img: "/TinyJourney/rotwood.png",
                  name: "뒤틀린 수호 고목",
                  badge: "Boss Multi-Phase",
                  element: "대지 속성",
                  desc: "1구역 보스. ① 양손 대지 강타(충격파 AOE), ② 루비 촉매 화염 강타, ③ 전신 분노 광역 폭발의 3단 패턴을 체력 구간별로 구사합니다.",
                },
                {
                  img: "/TinyJourney/weapon_twig.png",
                  name: "단단한 나뭇가지 검",
                  badge: "Starter Weapon",
                  element: "참격 (Slash)",
                  desc: "초반 기본 무기. 어깨 축 기반 360도 에임 회전 및 오버핸드 풀 스윙, 64×64 와이드 참격 이펙트와 연둣빛 컬러 틴트가 연동됩니다.",
                },
                {
                  img: "/TinyJourney/CatSide.png",
                  name: "토벌사 베이스 캐릭터",
                  badge: "17-Part Rigging",
                  element: "Player Base",
                  desc: "몸통 11장, 공용 팔 1장, 공용 다리 5장으로 분리 설계되어 세대 계승 연출 시 종족 및 색상 팔레트 스왑에 유연하게 대응합니다.",
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
                개발자가 하드코딩하지 않고, 기획 데이터(아이템, 몬스터, 속성 상성, 다국어)를 단일 엑셀 파일에서 직관적으로 제어할 수 있도록 
                <strong> 단일 진실 공급원(SSOT, Single Source of Truth)</strong> 기반의 자동화 파이프라인을 구축했습니다.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 pt-2">
              <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-200 space-y-4">
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wide font-mono">PIPELINE AUTOMATION</span>
                <h3 className="font-bold text-gray-900 text-base">
                  0.6초 원스톱 백그라운드 직렬화
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-gray-600">
                  <p>
                    <strong className="text-gray-900">단일 엑셀 6개 시트 통합:</strong> <code className="font-mono text-blue-700 bg-blue-50 px-1 py-0.5 rounded">GameData.xlsx</code> 내에 
                    ItemMaster, ItemEffects, Definitions, MonsterMaster, ElementChart, Localization 시트를 통합 관리합니다.
                  </p>
                  <p>
                    <strong className="text-gray-900">Ctrl+S 즉시 컴파일:</strong> 엑셀을 저장하는 즉시 
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
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wide font-mono">RUNTIME COMPLEXITY</span>
                <h3 className="font-bold text-gray-900 text-base">
                  5원소 대칭 상성 매트릭스 &amp; 데미지 공식
                </h3>
                <div className="p-3.5 rounded-xl bg-gray-900 text-emerald-400 font-mono text-xs overflow-x-auto">
                  FinalDamage = RawDamage × [ 100 / (100 + Defense × (1 - Pen)) ] × ElementMult
                </div>
                <div className="space-y-3 text-xs sm:text-sm text-gray-600">
                  <p>
                    <strong className="text-gray-900">5원소 대칭 환(Cycle):</strong> <code className="font-mono text-blue-700 bg-blue-50 px-1 py-0.5 rounded">Fire → Earth → Lightning → Poison → Ice → Fire</code>
                    (유리 1.5x, 불리 0.7x, 동일 0.5x, 무속성 1.0x).
                  </p>
                  <p>
                    <strong className="text-gray-900">런타임 O(1) 초고속 조회:</strong> 상성 배율을 조건문으로 분기하지 않고, 
                    엑셀 매트릭스를 에셋으로 미리 구워 런타임 $O(1)$ 인덱싱으로 즉각 처리합니다.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-gray-200/80" />

          {/* 02. 몬스터 전략 패턴 & 무할당 물리 아키텍처 */}
          <section id="tech-02" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                02 · 몬스터 전략 패턴 및 무할당 물리 아키텍처
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                몬스터 전략 패턴 &amp; 무할당 물리 아키텍처
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
                    <strong className="text-gray-900">ContactAttackModule:</strong> 슬라임의 지속 추적 및 접촉 몸통 박치기
                  </div>
                  <div className="p-2.5 rounded-lg bg-white border border-gray-200">
                    <strong className="text-gray-900">ChargeAttackModule:</strong> 고슴도치의 4.8m 와인드업, 3.5배속 볼링공 돌진 및 벽 쿵 기절
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
                  무할당 조향 엔진 &amp; 바위형 물리 고정
                </h3>
                <div className="space-y-3 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  <p>
                    <strong className="text-gray-900">EnemyMotor2D (8방향 레이캐스트):</strong> GC 할당이 없는 장애물 우회 조향 및 시야선(Line of Sight) 검사를 통해 벽 너머로의 헛돌진을 원천 차단합니다.
                  </p>
                  <p>
                    <strong className="text-gray-900">고정 체급 바디 (mass=100, Friction=0):</strong> 플레이어의 단순 이동으로 몬스터가 밀리지 않고 몸통 둘레를 부드럽게 미끄러지도록 고정했습니다.
                  </p>
                  <p>
                    <strong className="text-gray-900">넉백 타이머 분리:</strong> 오직 무기 타격 적중 시에만 <code className="font-mono text-blue-700 bg-white px-1 py-0.5 rounded border border-gray-200">ApplyKnockback(8.5f, 0.18s)</code>과 전용 보호 타이머를 통해 시원하게 밀려나도록 분리했습니다.
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
                    일반 Y-Sorting 규칙으로 인해 아래쪽으로 휘두르는 무기나 참격 이펙트가 몬스터 몸통 뒤로 가려지는 시각적 결함이 발생했습니다.
                  </p>
                  <p className="text-xs sm:text-sm text-gray-600 leading-relaxed mt-3">
                    이를 해결하기 위해 공격 진행 중(<code className="font-mono text-blue-700 bg-blue-50 px-1 py-0.5 rounded">isAttacking == true</code>)에는 
                    무기, 앞팔, 슬래시 스프라이트 렌더러의 정렬 오더에 <code className="font-mono text-blue-700 bg-white px-1 py-0.5 rounded border border-gray-200">+1000</code>을 동적으로 가산하여 
                    타격 모션이 항상 몬스터 앞쪽으로 호쾌하게 베고 지나가도록 시인성을 보정했습니다.
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
                <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">메모리 &amp; 무결성</span>
                <h3 className="font-bold text-gray-900 text-base">초경량 미니맵과 세이브 무결성</h3>
                <div className="space-y-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  <p>
                    <strong className="text-gray-900">Zero-Camera 미니맵:</strong> 별도의 보조 카메라를 띄우지 않고, 
                    그리드 데이터를 <code className="font-mono text-blue-700 bg-blue-50 px-1 py-0.5 rounded">Texture2D</code> 픽셀에 직접 구워 UI RawImage에 바인딩합니다. (반경 9타일 안개 무할당 갱신)
                  </p>
                  <p>
                    <strong className="text-gray-900">사운드 디커플링:</strong> AudioMixer 4계층 버스 라우팅 및 <code className="font-mono text-blue-700 bg-blue-50 px-1 py-0.5 rounded">SoundEvents</code> 이벤트 버스를 통해 
                    사운드 매니저 부재 시에도 컴파일/런타임 에러를 원천 차단합니다.
                  </p>
                  <p>
                    <strong className="text-gray-900">방 단위 자동 저장 및 강종 방지:</strong> 다음 방 진입 시 자동 저장되며, 
                    위기 상황 시 Alt+F4 악용을 막기 위해 재시작 시 해당 방 입구에서 몬스터가 리셋된 상태로 시작됩니다.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-gray-200/80" />

          {/* 05. 실시간 구현 마일스톤 및 로드맵 */}
          <section id="tech-05" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
                05 · 실시간 구현 마일스톤 및 로드맵
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                실시간 구현 마일스톤 및 기술 로드맵
              </h2>
            </header>

            <div className="grid md:grid-cols-2 gap-6 items-start">
              <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-200 space-y-3">
                <span className="text-xs font-bold text-blue-600 uppercase font-mono">NETWORKING SPEC</span>
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
                <span className="text-xs font-bold text-blue-600 uppercase font-mono">MEMORY &amp; INTEGRITY</span>
                <h3 className="font-bold text-gray-900 text-base">초경량 미니맵과 세이브 무결성</h3>
                <div className="space-y-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  <p>
                    <strong className="text-gray-900">Zero-Camera 미니맵:</strong> 별도의 보조 카메라를 띄우지 않고, 
                    그리드 데이터를 <code className="font-mono text-blue-700 bg-blue-50 px-1 py-0.5 rounded">Texture2D</code> 픽셀에 직접 구워 UI RawImage에 바인딩합니다. (반경 9타일 안개 무할당 갱신)
                  </p>
                  <p>
                    <strong className="text-gray-900">사운드 디커플링:</strong> AudioMixer 4계층 버스 라우팅 및 <code className="font-mono text-blue-700 bg-blue-50 px-1 py-0.5 rounded">SoundEvents</code> 이벤트 버스를 통해 
                    사운드 매니저 부재 시에도 컴파일/런타임 에러를 원천 차단합니다.
                  </p>
                  <p>
                    <strong className="text-gray-900">방 단위 자동 저장 및 강종 방지:</strong> 다음 방 진입 시 자동 저장되며, 
                    위기 상황 시 Alt+F4 악용을 막기 위해 재시작 시 해당 방 입구에서 몬스터가 리셋된 상태로 시작됩니다.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-gray-200/80" />

          {/* 05. 실시간 구현 마일스톤 및 로드맵 */}
          <section id="tech-05" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-widest font-mono">
                ENGINEERING SPEC 05 · MILESTONE CHANGELOG
              </span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                실시간 구현 마일스톤 및 기술 로드맵
              </h2>
            </header>

            <div className="grid md:grid-cols-2 gap-6 pt-2">
              <div className="p-6 rounded-2xl bg-emerald-50/50 border border-emerald-200/80 space-y-4">
                <div className="flex items-center justify-between border-b border-emerald-200/60 pb-3">
                  <h3 className="font-bold text-emerald-950 text-base">구현 완료 내역 (Step 1~11)</h3>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-emerald-200 text-emerald-800 font-mono">
                    100% COMPLETE
                  </span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>엑셀(GameData.xlsx) 6개 시트 및 MasterDataPostprocessor 0.6초 자동 빌드</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>하우징 스탯 계산기(HousingBuffCalculator) ↔ 전투 씬 JSON 영속성 연동</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>방 클리어 황금 보따리(LootBundle) 및 10×10 테트리스 루팅 UI(UI_Looting)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>2.5D 레이맨 리깅 (5단 레이어, 오버핸드 풀 스윙, 뒷손 반동, attackBoost +1000)</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>절차적 전투 필드 생성기(DungeonRoomGenerator) 및 남쪽 절벽 턱 전면 분리</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-emerald-600 font-bold">✓</span>
                    <span>1구역 몬스터 4종 애니메이션, 전략 패턴(IMonsterAttackModule), 고정 물리(mass=100)</span>
                  </li>
                </ul>
              </div>

              <div className="p-6 rounded-2xl bg-blue-50/40 border border-blue-200/80 space-y-4">
                <div className="flex items-center justify-between border-b border-blue-200/60 pb-3">
                  <h3 className="font-bold text-blue-950 text-base">차기 진행 로드맵 (Upcoming · P1~P7)</h3>
                  <span className="text-xs font-bold px-2.5 py-0.5 rounded-full bg-blue-200 text-blue-800 font-mono">
                    IN PROGRESS
                  </span>
                </div>
                <ul className="space-y-2 text-xs sm:text-sm text-gray-700">
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">→</span>
                    <span><strong>P1~P2 지형 고도화:</strong> 외곽 암흑 보이드(#050508) 및 QOT 6구획 무작위 스탬핑·MST 협곡 굴착</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">→</span>
                    <span><strong>P3 전투 UI &amp; 미니맵:</strong> 피격 반응형 체력바(3초 페이드아웃), Zero-Camera 픽셀 미니맵</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">→</span>
                    <span><strong>P4~P5 오디오 &amp; 몬스터 라인업:</strong> FMOD/AudioMixer 버스 연동 및 테마별 몬스터 행동 모듈 확장</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-blue-500 font-bold">→</span>
                    <span><strong>P6~P7 무기 티어 &amp; 하우징 씬:</strong> 무기 5단계 진화 트리 및 자취방 가구 배치 씬 구현</span>
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
