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
    { num: "01", id: "plan-01", title: "프로젝트 개요 & 디자인 필라" },
    { num: "02", id: "plan-02", title: "세계관 내러티브 & 상냥한 세대 계승" },
    { num: "03", id: "plan-03", title: "코어 루프 & N×N 하우징 스펙업" },
    { num: "04", id: "plan-04", title: "2.5D 레이맨 리깅 & 묵직한 액션 연출" },
    { num: "05", id: "plan-05", title: "절차적 전투 필드 & 유기적 지형 구조" },
    { num: "06", id: "plan-06", title: "몬스터 메커니즘 & 프로토타입 4종 도감" },
  ];

  const techSections = [
    { num: "01", id: "tech-01", title: "통합 엑셀 마스터 데이터 파이프라인" },
    { num: "02", id: "tech-02", title: "몬스터 전략 패턴 & 무할당 물리 아키텍처" },
    { num: "03", id: "tech-03", title: "2.5D 절벽 깊이감 & 하향 공격 소팅 보정" },
    { num: "04", id: "tech-04", title: "Netcode(NGO) 서버 권한 분리 & 오디오·세이브" },
    { num: "05", id: "tech-05", title: "실시간 구현 마일스톤 및 로드맵" },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 space-y-12 text-gray-800 font-sans antialiased">
      {/* ===================================================================== */}
      {/* 1. 상단: Others 프로젝트와 완벽히 일치하는 헤더 레이아웃 */}
      {/* ===================================================================== */}
      <section className="grid gap-8 md:grid-cols-2 items-stretch">
        <div className="rounded-xl overflow-hidden shadow-sm flex flex-col items-center justify-center p-8 bg-gray-50 border border-gray-200">
          <ImgPrefixed
            src="/TinyJourney/CatSide.png"
            alt="TinyJourney 토벌사 베이스 캐릭터"
            className="w-36 h-36 [image-rendering:pixelated] object-contain drop-shadow"
          />
          <p className="text-xs text-gray-500 mt-3 text-center font-medium">
            17-Part 파츠 분리형 베이스 캐릭터 (세대 계승 및 외형 교체 대응)
          </p>
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold underline decoration-blue-500 underline-offset-8">
              TinyJourney (가제)
            </h1>
            <p className="text-sm sm:text-[15px] text-gray-600 mt-3 font-medium">
              부제 : 털뭉치 토벌대의 본격 생계형 토벌 일지 (Tiny Paws, Heavy Hits)
            </p>

            <dl className="grid grid-cols-[120px_1fr] gap-x-4 gap-y-5 text-gray-800 mt-7 text-sm sm:text-[15px]">
              <dt className="font-semibold text-gray-600">ROLE</dt>
              <dd>기획, 클라이언트, 그래픽</dd>

              <dt className="font-semibold text-gray-600">DURATION</dt>
              <dd>2026.03 ~ 진행 중 (프로토타입 개발)</dd>

              <dt className="font-semibold text-gray-600">TEAM</dt>
              <dd>1인 개발</dd>

              <dt className="font-semibold text-gray-600">PLATFORM</dt>
              <dd>PC (Unity C# · 2D URP · Steam 타깃)</dd>
            </dl>
          </div>

          <div className="mt-6">
            <span className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full bg-blue-50 border border-blue-200 text-xs font-semibold text-blue-700">
              <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span>
              핵심 프로토타입 11개 스텝 구현 완료 · 시스템 고도화 진행 중
            </span>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 2. 탭 바: 가로 스크롤 없는 2등분 균등 배치 + 블루 키컬러 */}
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
        <article className="space-y-10">
          {/* 상단 퀵 인덱스 바 */}
          <div className="p-4 rounded-xl bg-blue-50/40 border border-blue-100 text-xs sm:text-sm">
            <div className="flex items-center justify-between border-b border-blue-100 pb-2 mb-3">
              <span className="font-bold text-blue-900 text-xs uppercase tracking-wider">
                기획서 목차
              </span>
              <span className="text-xs text-blue-600 font-medium">클릭 시 해당 섹션으로 이동</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {planSections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-white text-gray-700 hover:text-blue-600 transition"
                >
                  <span className="px-1.5 py-0.5 text-[11px] font-bold bg-blue-500 text-white rounded shrink-0">
                    {sec.num}
                  </span>
                  <span className="truncate font-medium">{sec.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* 01. 프로젝트 개요 & 디자인 필라 */}
          <section
            id="plan-01"
            className="scroll-mt-16 bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6"
          >
            <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
              <span className="px-2.5 py-1 text-xs font-bold bg-blue-500 text-white rounded">
                01
              </span>
              <h2 className="text-2xl font-bold text-gray-900">
                프로젝트 개요 &amp; 디자인 필라
              </h2>
            </div>

            <p className="text-gray-700 text-sm sm:text-[15px] leading-relaxed">
              *TinyJourney*는 찹쌀떡처럼 귀여운 털뭉치 소동물이 인간이 버리고 간 거대한 쓰레기(녹슨 스푼, 쇠포크 등)를 
              무거운 무기로 삼아 싸우는 <b>&apos;갭 모에(Gap Moe)&apos;</b>를 핵심 감성으로 삼습니다. 
              전통적인 RPG의 복잡하고 난잡한 방어구 체계를 걷어내고, 플레이어의 성장과 안식처를 하나로 결합한 직관적인 3대 설계를 지향합니다.
            </p>

            <div className="grid sm:grid-cols-3 gap-4 pt-2">
              <div className="p-5 rounded-xl bg-blue-50/40 border border-blue-100 space-y-2">
                <h3 className="font-bold text-blue-950 text-base">1. 한 방의 쾌감</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  자신의 몸체만 한 인간의 유물을 온몸으로 휘두르는 묵직한 풀 스윙, 
                  적중 순간의 역경직(HitStop)과 화면 진동으로 완성되는 강렬한 타격 피드백.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-2">
                <h3 className="font-bold text-gray-900 text-base">2. 내 손으로 벼린다</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  필드에서 수급한 몬스터 전리품과 고철을 모아 무기를 직접 제작·개조하고, 
                  스탯 숫자의 인플레이션 대신 명확한 체감 성능을 확장하는 파밍 구조.
                </p>
              </div>
              <div className="p-5 rounded-xl bg-blue-50/40 border border-blue-100 space-y-2">
                <h3 className="font-bold text-blue-950 text-base">3. 돌아올 곳이 있다</h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  치열한 토벌 후 마을 자취방으로 복귀. 인간의 쓰레기(병뚜껑, 골무 등)로 만든 가구를 
                  자취방에 배치하는 행위 자체가 곧 영구 방어구 스펙업이 되는 안식처 루프.
                </p>
              </div>
            </div>
          </section>

          {/* 02. 세계관 내러티브 & 상냥한 세대 계승 */}
          <section
            id="plan-02"
            className="scroll-mt-16 bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6"
          >
            <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
              <span className="px-2.5 py-1 text-xs font-bold bg-blue-500 text-white rounded">
                02
              </span>
              <h2 className="text-2xl font-bold text-gray-900">
                세계관 내러티브 &amp; 상냥한 세대 계승 (Gentle Succession)
              </h2>
            </div>

            <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-xl text-xs sm:text-sm text-gray-800 leading-relaxed">
              <b className="text-blue-700">기획 의도:</b> 로그라이트의 &apos;사망 시 전리품 유실 + 영구 메타 성장&apos; 규칙과 
              &apos;주인공 외형 변화&apos;를 단순 게임적 허용에 머무르게 하지 않고, 
              세계관 내러티브 및 환경 스토리텔링(Environmental Storytelling)과 유기적으로 일치시켰습니다.
            </div>

            <div className="space-y-4 text-sm sm:text-[15px] text-gray-700 leading-relaxed">
              <p>
                <b>각박한 소동물 사회와 생계형 토벌:</b> 거대한 인간 세상의 발밑 &apos;잔디벌 마을&apos;에서 
                소동물들은 도토리 나르기와 분리수거 같은 단순 노동에 시달려 왔습니다. 
                외곽 숲에서 발생한 변이 현상 &apos;야생화(Feral Surge)&apos;를 막기 위해 촌장이 거액의 포상금을 내걸자, 
                텅 빈 지갑과 냉장고를 본 주인공이 밥값을 벌기 위해 녹슨 나뭇가지 검을 쥐고 숲으로 향합니다.
              </p>

              <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-3">
                <h3 className="font-bold text-gray-900 text-base">
                  비극을 감춘 선대의 빈집과 0번째 묘비
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  촌장이 주인공에게 건넨 아늑한 가구 딸린 자취방은, 사실 숲에서 목숨을 잃고 돌아오지 못한 
                  <b>&apos;선대 토벌사&apos;의 빈집</b>입니다. 마을 언덕배기 묘지에는 플레이어가 게임을 처음 설치하고 실행한 시각
                  (<code className="font-mono text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded text-xs">firstGameLaunchTime</code>)이 
                  각인된 <b>0대 선대 토벌사의 비석</b>이 세워져 있어, 플레이어는 자신이 거저 얻은 집이 누군가의 유품이었음을 깨닫게 됩니다.
                </p>
              </div>

              <div className="grid sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
                  <h4 className="font-bold text-gray-900 text-sm mb-1">비잔혹·평화적 세대교체</h4>
                  <p className="text-xs text-gray-600 leading-relaxed">
                    체력이 0이 되어도 피가 튀는 잔혹한 연출 대신 따뜻한 세피아 톤 암전 후, 
                    마을 어귀 마차에서 새로운 외형(종족·색상 팔레트 스왑)의 차세대 토벌사가 이사 오는 컷신이 재생됩니다. 
                    (주인공 캐릭터를 17개 파츠 분리형 도트로 제작한 구조적 배경)
                  </p>
                </div>
                <div className="p-4 rounded-xl bg-blue-50/40 border border-blue-100">
                  <h4 className="font-bold text-blue-950 text-sm mb-1">하우징 자산의 100% 영구 계승</h4>
                  <p className="text-xs text-gray-700 leading-relaxed">
                    던전에 들고 간 미정산 가방 전리품은 유실되지만, 자취방에 배치한 모든 가구와 창고 자산은 영구 보존됩니다. 
                    새로 부임한 토벌사는 선대가 피땀 흘려 마련한 가구의 스탯 버프를 그대로 물려받아 모험을 이어갑니다.
                  </p>
                </div>
              </div>
            </div>
          </section>

          {/* 03. 코어 루프 & N×N 하우징 스펙업 */}
          <section
            id="plan-03"
            className="scroll-mt-16 bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6"
          >
            <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
              <span className="px-2.5 py-1 text-xs font-bold bg-blue-500 text-white rounded">
                03
              </span>
              <h2 className="text-2xl font-bold text-gray-900">
                코어 루프 &amp; N×N 하우징 스펙업 (방어구 100% 대체)
              </h2>
            </div>

            {/* 4단계 순환 루프 그리드 */}
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 py-2 text-center">
              {[
                { step: "STEP 1 · 정비", name: "자취방 정비", desc: "가구 배치로 기초 스탯 확보 및 무기 보험" },
                { step: "STEP 2 · 토벌", name: "절차적 숲 토벌", desc: "필드 방 클리어 및 몬스터 전멸 시 보따리 팝업" },
                { step: "STEP 3 · 루팅", name: "테트리스 루팅", desc: "10×10 가방에 블록 전리품 수동 회전(R) 패킹" },
                { step: "STEP 4 · 성장", name: "귀환 & 영구 스펙업", desc: "가구·무기 제작 후 오두막 확장 및 스탯 누적" },
              ].map((item, i) => (
                <div key={i} className="p-4 rounded-xl bg-blue-50/30 border border-blue-100">
                  <span className="text-xs font-bold text-blue-600">{item.step}</span>
                  <p className="font-bold text-gray-900 text-sm mt-1">{item.name}</p>
                  <p className="text-xs text-gray-600 mt-1 leading-relaxed">{item.desc}</p>
                </div>
              ))}
            </div>

            <div className="space-y-4 text-sm sm:text-[15px] text-gray-700 leading-relaxed">
              <h3 className="font-bold text-gray-900 text-base">
                몸통 방어구를 완전히 대체하는 N×N 하우징 시스템
              </h3>
              <p>
                *TinyJourney*에는 별도의 &apos;몸통 갑옷(Armor)&apos; 장비 슬롯이 존재하지 않습니다. 
                대신 유저의 오두막 내부 N×N 그리드에 가구를 빈칸 없이 테트리스처럼 배치함으로써 
                영구적인 기초 스탯(최대 HP, 방어력, 스태미나, 배낭 칸 수)을 확보합니다.
              </p>

              {/* 스펙 테이블 */}
              <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
                <table className="w-full text-left text-xs sm:text-sm divide-y divide-gray-200">
                  <thead className="bg-blue-50/70 text-blue-950 font-bold">
                    <tr>
                      <th className="py-2.5 px-4">가구 카테고리</th>
                      <th className="py-2.5 px-4">대표 가구 예시</th>
                      <th className="py-2.5 px-4">영구 스탯 효과 (HousingBuffCalculator)</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-100 bg-white">
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900">침구류</td>
                      <td className="py-3 px-4 text-gray-600">풀잎 침대, 이끼 이불</td>
                      <td className="py-3 px-4 text-gray-800">최대 HP +5% 상승 및 마을 복귀 시 체력 완전 회복</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="py-3 px-4 font-medium text-gray-900">운동 기구</td>
                      <td className="py-3 px-4 text-gray-600">돌 아령, 나무 달리기판</td>
                      <td className="py-3 px-4 text-gray-800">스태미나 상한 +10, 대시 쿨타임 -0.1초 단축</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-4 font-medium text-gray-900">수납장</td>
                      <td className="py-3 px-4 text-gray-600">도토리 장롱, 버섯 서랍장</td>
                      <td className="py-3 px-4 text-gray-800">토벌 출격용 임시 배낭 그리드 +2칸 확장</td>
                    </tr>
                    <tr className="bg-gray-50/50">
                      <td className="py-3 px-4 font-medium text-gray-900">조명 및 트로피</td>
                      <td className="py-3 px-4 text-gray-600">반딧불 병, 보스 박제</td>
                      <td className="py-3 px-4 text-gray-800">숲 시야 범위 +15%, 마을 상점 할인 및 호감도 보너스</td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </section>

          {/* 04. 2.5D 레이맨 리깅 & 묵직한 액션 연출 */}
          <section
            id="plan-04"
            className="scroll-mt-16 bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6"
          >
            <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
              <span className="px-2.5 py-1 text-xs font-bold bg-blue-500 text-white rounded">
                04
              </span>
              <h2 className="text-2xl font-bold text-gray-900">
                2.5D 레이맨 리깅 &amp; 묵직한 액션 연출
              </h2>
            </div>

            <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-xl text-xs sm:text-sm text-gray-800 leading-relaxed">
              <b className="text-blue-700">기획 의도:</b> 1인 개발 환경에서 무기 추가와 캐릭터 외형 교체마다 수십 장의 프레임 애니메이션을 그리는 리소스 병목을 원천 방지하기 위해, 
              <b>트랜스폼 연산 기반 2.5D 레이맨 리깅</b>과 절정의 타격 피드백 패키지를 구축했습니다.
            </div>

            <div className="grid sm:grid-cols-2 gap-6 text-sm text-gray-700">
              <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-3">
                <h3 className="font-bold text-gray-900 text-base">5단 레이어 &amp; 오버핸드 풀 스윙</h3>
                <ul className="list-disc pl-4 space-y-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  <li>
                    <b>5단 정렬 계층:</b> <code className="font-mono text-blue-700 bg-blue-50 px-1 py-0.5 rounded">BackArm(5) → Body(10) → Weapon(12) → FrontArm(15) → Slash(20)</code> 순으로 
                    정렬되어 앞손이 손잡이를 덮어 쥐는 완벽한 90도 L자 파지세 완성.
                  </li>
                  <li>
                    <b>어깨 회전축 360도 에임:</b> 목/어깨 높이(<code className="font-mono text-gray-800 bg-gray-200/70 px-1 py-0.5 rounded">Y: 0.28f</code>)를 중심으로 무기와 팔이 일체형으로 회전하여 탈구 방지.
                  </li>
                  <li>
                    <b>일관된 내리찍기 스윙:</b> 마우스 각도와 시선 반전 시에도 항상 머리 위(<code className="font-mono text-gray-800 bg-gray-200/70 px-1 py-0.5 rounded">-60°</code>)에서 
                    바닥(<code className="font-mono text-gray-800 bg-gray-200/70 px-1 py-0.5 rounded">+120°</code>)으로 풀 스윙하며, 등 뒤 뒷손이 반대 방향(<code className="font-mono text-gray-800 bg-gray-200/70 px-1 py-0.5 rounded">+25°</code>)으로 튀는 카운터 반동 연출.
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-blue-50/40 border border-blue-100 space-y-3">
                <h3 className="font-bold text-blue-950 text-base">타격 피지컬 &amp; 피드백 규격</h3>
                <ul className="list-disc pl-4 space-y-2 text-xs sm:text-sm text-gray-700 leading-relaxed">
                  <li>
                    <b>역경직 (HitStop):</b> 타격 순간 <code className="font-mono text-blue-700 bg-white px-1 py-0.5 rounded">Time.timeScale = 0.02f</code> 극단 정지(<code className="font-mono text-blue-700 bg-white px-1 py-0.5 rounded">0.09초</code>)로 뼈 때리는 타격감 제공.
                  </li>
                  <li>
                    <b>카메라 셰이크:</b> Cinemachine 3.x 6D Shake 기반 진폭 <code className="font-mono text-blue-700 bg-white px-1 py-0.5 rounded">4.5f</code>, 지속 시간 <code className="font-mono text-blue-700 bg-white px-1 py-0.5 rounded">0.18초</code> 충격파.
                  </li>
                  <li>
                    <b>피격 넉백 펄스:</b> 질량 100의 몬스터에 <code className="font-mono text-blue-700 bg-white px-1 py-0.5 rounded">8.5f</code> 임펄스와 <code className="font-mono text-blue-700 bg-white px-1 py-0.5 rounded">0.18초</code> 타이머를 부여해 시원하게 밀려나는 물리 연출.
                  </li>
                  <li>
                    <b>64×64 와이드 참격 VFX:</b> 스케일 <code className="font-mono text-blue-700 bg-white px-1 py-0.5 rounded">0.9 → 1.25</code> 펀치 확장 및 무기 속성별 컬러 틴트 동적 곱연산.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 05. 절차적 전투 필드 & 유기적 지형 구조 */}
          <section
            id="plan-05"
            className="scroll-mt-16 bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6"
          >
            <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
              <span className="px-2.5 py-1 text-xs font-bold bg-blue-500 text-white rounded">
                05
              </span>
              <h2 className="text-2xl font-bold text-gray-900">
                절차적 전투 필드 &amp; 유기적 지형 구조
              </h2>
            </div>

            <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed">
              폐쇄적이고 단조로운 단일 사각형 전장을 탈피하기 위해 <b>절차적 전투 필드(Procedural Combat Fields)</b> 생성 시스템을 구축했습니다. 
              초기 프로토타입은 <b>96×56 광활한 전장 규격(가상 카메라 직교 뷰 6.5)</b>을 기준으로 지형 무결성을 검증하고 있으며, 
              향후 테마에 맞춰 더욱 넓게 개방되거나 다채로운 통로와 언덕으로 연결되는 <b>유기적 복합 필드로 확장</b>될 예정입니다.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-3">
                <h3 className="font-bold text-gray-900 text-sm">Wall-First 3단계 순행 생성 파이프라인</h3>
                <ul className="list-disc pl-4 space-y-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  <li>
                    <b>1단계 (외벽 토폴로지):</b> 최소 3스텝 지그재그 규칙(<code className="font-mono text-gray-800 bg-gray-200/60 px-1 py-0.5 rounded">dy &gt;= 3</code>)으로 자연스러운 암벽 단차를 형성하고 외곽 경계 확정.
                  </li>
                  <li>
                    <b>2단계 (바닥 타일링 &amp; 암흑 보이드):</b> 외벽 내부 유효 보행 구역에만 바닥 타일을 배치하고, 외곽 너머는 칠흑의 공허(<code className="font-mono text-gray-800 bg-gray-200/60 px-1 py-0.5 rounded">#050508</code>)로 마감해 약 3,500타일 드로우콜 절감.
                  </li>
                  <li>
                    <b>3단계 (안전거리 스폰):</b> 플레이어 시작점으로부터 12타일 안전 반경 밖의 유효 바닥에서만 몬스터와 파괴 가능 프랍 분산 스폰.
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-blue-50/40 border border-blue-100 space-y-3">
                <h3 className="font-bold text-blue-950 text-sm">2.5D 절벽 깊이감 &amp; 전역 타일셋 표준 규격</h3>
                <ul className="list-disc pl-4 space-y-2 text-xs sm:text-sm text-gray-700 leading-relaxed">
                  <li>
                    <b>표준 그리드 규격:</b> Ground(가로 5 × 세로 4 = 20타일) 및 Wall(가로 5 × 세로 8 = 40타일)로 규격화.
                  </li>
                  <li>
                    <b>3단계 높이 연결:</b> <code className="font-mono text-blue-700 bg-white px-1 py-0.5 rounded">Ground Lower → Ground Upper (=Wall Lower) → Wall Upper</code>로 이어져 바닥과 절벽이 이음새 없이 자연스럽게 연결.
                  </li>
                  <li>
                    <b>남쪽 절벽 턱 하체 가림:</b> 남쪽 벽 뒤로 걸어갈 때 플레이어의 발끝과 하체가 절벽 턱 뒤로 가려지도록 전면 타일맵 계층(<code className="font-mono text-blue-700 bg-white px-1 py-0.5 rounded">Wall_Front_Tilemap</code>, SortingOrder: 10005) 분리.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 06. 몬스터 메커니즘 & 프로토타입 4종 도감 */}
          <section
            id="plan-06"
            className="scroll-mt-16 bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6"
          >
            <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
              <span className="px-2.5 py-1 text-xs font-bold bg-blue-500 text-white rounded">
                06
              </span>
              <h2 className="text-2xl font-bold text-gray-900">
                몬스터 메커니즘 &amp; 프로토타입 4종 도감
              </h2>
            </div>

            <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed">
              유저에게 불쾌감을 주는 곤충·벌레형을 일절 배제하고(No Bugs Rule), 숲속 소동물·자연물(씨앗, 밤송이) 기반의 코지 판타지 기조를 유지합니다. 
              현재는 <b>접촉 점프, 회전 돌진, 원거리 사격, 3단 광역</b>의 4가지 핵심 행동 양식을 검증하기 위해 
              <b>스테이지 1(얕은 숲)의 몬스터 4종</b>을 구축했으며, 향후 테마별 플레이 템포와 전투 밀도에 맞춰 유연하게 라인업을 확장할 수 있도록 설계했습니다.
            </p>

            {/* 도트 스프라이트 뷰포트 그리드 */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 pt-2">
              {[
                {
                  img: "/TinyJourney/slime_sprout.png",
                  name: "새싹 슬라임",
                  code: "mon_slime_sprout",
                  role: "Normal · Tracker (무속성)",
                  desc: "머리에 새싹이 돋은 젤리 슬라임. 별도 선딜 없이 폴짝폴짝 뛰어 플레이어를 지속 추적하며 몸통 박치기 공격을 수행합니다.",
                },
                {
                  img: "/TinyJourney/chestnut_hedgehog.png",
                  name: "밤송이 고슴도치",
                  code: "mon_chestnut_hedgehog",
                  role: "Normal · Charger (대지 속성)",
                  desc: "사거리 4.8m 진입 시 팽이처럼 제자리 와인드업 후, 몸을 둥글게 말고 3.5배속 볼링공 회전 돌진을 감행합니다. 벽 충돌 시 1초간 스스로 기절합니다.",
                },
                {
                  img: "/TinyJourney/feral_squirrel.png",
                  name: "꽃꼬리 다람쥐",
                  code: "mon_feral_squirrel",
                  role: "Named · Tracker & Shooter (맹독 속성)",
                  desc: "사거리 5.5m를 유지하며 카이팅하다가, 보라색 꽃꼬리에서 독기를 모아 모션 5프레임에 맞춰 전방으로 독 포자 투사체를 발사합니다.",
                },
                {
                  img: "/TinyJourney/rotwood.png",
                  name: "뒤틀린 수호 고목",
                  code: "boss_rotwood",
                  role: "Boss · Charger & Area (대지 속성)",
                  desc: "1구역 보스. ① 양손 대지 강타(충격파 AOE), ② 루비 촉매 연계 화염 대지 강타, ③ 전신 분노 광역 폭발의 3단 패턴을 체력 구간별로 구사합니다.",
                },
                {
                  img: "/TinyJourney/weapon_twig.png",
                  name: "단단한 나뭇가지 검",
                  code: "weapon_twig",
                  role: "1단계 보급 무기 · 참격(Slash)",
                  desc: "초반 기본 무기. 어깨 축 기반 360도 에임 회전 및 오버핸드 풀 스윙, 64×64 와이드 참격 이펙트와 연둣빛 컬러 틴트가 연동됩니다.",
                },
                {
                  img: "/TinyJourney/CatSide.png",
                  name: "토벌사 베이스 캐릭터",
                  code: "character_base",
                  role: "Player · 17-Part Rigging",
                  desc: "몸통 11장, 공용 팔 1장, 공용 다리 5장으로 분리 설계되어 세대 계승 연출 시 종족 및 색상 팔레트 스왑에 유연하게 대응합니다.",
                },
              ].map((item, idx) => (
                <div
                  key={idx}
                  className="rounded-xl border border-gray-200 bg-gray-50/70 hover:bg-blue-50/40 hover:border-blue-300 transition p-4 flex flex-col shadow-sm"
                >
                  <div className="h-28 rounded-lg bg-white border border-gray-200 flex items-center justify-center p-3 mb-3">
                    <ImgPrefixed
                      src={item.img}
                      alt={item.name}
                      className="max-h-20 max-w-20 [image-rendering:pixelated] object-contain drop-shadow-sm"
                    />
                  </div>
                  <div className="space-y-1 mb-2">
                    <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                      {item.role}
                    </span>
                    <h4 className="font-bold text-gray-900 text-sm pt-1">
                      {item.name}
                    </h4>
                  </div>
                  <p className="text-xs text-gray-600 leading-relaxed mt-auto">
                    {item.desc}
                  </p>
                </div>
              ))}
            </div>
          </section>

          {/* 하단 기술서 링크 배너 */}
          <div className="p-5 bg-blue-50/60 border border-blue-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <p className="text-xs sm:text-sm text-gray-800 font-medium">
              통합 엑셀(GameData.xlsx) 0.6초 자동 직렬화, 전략 패턴 몬스터 AI, NGO 서버 권한 아키텍처는 기술서에서 확인하실 수 있습니다.
            </p>
            <button
              onClick={() => {
                handleTabChange("tech");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-lg transition shrink-0 shadow-sm"
            >
              기술서 탭으로 전환 →
            </button>
          </div>
        </article>
      )}

      {/* ===================================================================== */}
      {/* TAB 2: 기술서 */}
      {/* ===================================================================== */}
      {activeTab === "tech" && (
        <article className="space-y-10">
          {/* 상단 퀵 인덱스 바 */}
          <div className="p-4 rounded-xl bg-blue-50/40 border border-blue-100 text-xs sm:text-sm">
            <div className="flex items-center justify-between border-b border-blue-100 pb-2 mb-3">
              <span className="font-bold text-blue-900 text-xs uppercase tracking-wider">
                기술서 목차
              </span>
              <span className="text-xs text-blue-600 font-medium">클릭 시 해당 섹션으로 이동</span>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
              {techSections.map((sec) => (
                <a
                  key={sec.id}
                  href={`#${sec.id}`}
                  className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-white text-gray-700 hover:text-blue-600 transition"
                >
                  <span className="px-1.5 py-0.5 text-[11px] font-bold bg-blue-500 text-white rounded shrink-0">
                    {sec.num}
                  </span>
                  <span className="truncate font-medium">{sec.title}</span>
                </a>
              ))}
            </div>
          </div>

          {/* 01. 통합 엑셀 마스터 데이터 파이프라인 */}
          <section
            id="tech-01"
            className="scroll-mt-16 bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6"
          >
            <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
              <span className="px-2.5 py-1 text-xs font-bold bg-blue-500 text-white rounded">
                01
              </span>
              <h2 className="text-2xl font-bold text-gray-900">
                통합 엑셀 마스터 데이터 파이프라인 (GameData.xlsx)
              </h2>
            </div>

            <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed">
              기획자가 코드를 직접 수정하지 않고도 아이템, 몬스터, 속성 상성, 다국어를 단일 엑셀 파일에서 직관적으로 튜닝할 수 있도록 
              <b>단일 진실 공급원(SSOT, Single Source of Truth)</b> 기반의 자동화 파이프라인을 구축했습니다.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 text-sm text-gray-700">
              <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-3">
                <h3 className="font-bold text-gray-900 text-base">0.6초 원스톱 자동 빌드 파이프라인</h3>
                <ul className="list-disc pl-4 space-y-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  <li>
                    <b>단일 엑셀 6개 시트 통합:</b> <code className="font-mono text-blue-700 bg-blue-50 px-1 py-0.5 rounded">GameData.xlsx</code> 내 
                    ItemMaster, ItemEffects, Definitions, MonsterMaster, ElementChart, Localization 시트를 원스톱 관리.
                  </li>
                  <li>
                    <b>백그라운드 에셋 자동 직렬화:</b> 엑셀 저장(<code className="font-mono text-gray-800 bg-gray-200/70 px-1 py-0.5 rounded">Ctrl+S</code>) 시 
                    Unity 백그라운드 포스트프로세서(<code className="font-mono text-gray-800 bg-gray-200/70 px-1 py-0.5 rounded">MasterDataPostprocessor.cs</code>)가 
                    0.6초 내에 일괄 CSV 추출 및 ScriptableObject 에셋을 자동 갱신.
                  </li>
                  <li>
                    <b>인라인 드랍 테이블 파싱:</b> 셀 하나에 <code className="font-mono text-gray-800 bg-gray-200/70 px-1 py-0.5 rounded">item_slime_gel:0.8:1-2;item_oak_wood:0.3:1-1</code> 형태로 
                    작성하면 전용 <code className="font-mono text-gray-800 bg-gray-200/70 px-1 py-0.5 rounded">LootTableSO</code>를 자동 빌드하여 바인딩.
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-blue-50/40 border border-blue-100 space-y-3">
                <h3 className="font-bold text-blue-950 text-base">5원소 대칭 상성 매트릭스 &amp; 데미지 공식</h3>
                <div className="p-3 rounded-lg bg-white border border-blue-200 font-mono text-xs text-blue-700 font-bold text-center shadow-sm">
                  FinalDamage = RawDamage × [ 100 / (100 + Defense × (1 - ArmorPen)) ] × ElementMultiplier
                </div>
                <ul className="list-disc pl-4 space-y-2 text-xs sm:text-sm text-gray-700 leading-relaxed">
                  <li>
                    <b>5원소 대칭 상성 환:</b> <code className="font-mono text-blue-700 bg-white px-1 py-0.5 rounded">Fire → Earth → Lightning → Poison → Ice → Fire</code> (유리 1.5x, 불리 0.7x, 동일 0.5x, 무속성 1.0x).
                  </li>
                  <li>
                    <b>런타임 O(1) 초고속 조회:</b> 상성 배율을 코드에 하드코딩하지 않고 엑셀 2D 바둑판 매트릭스에서 에셋으로 구워내어 런타임 $O(1)$ 인덱싱 조회.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 02. 몬스터 전략 패턴 & 무할당 물리 아키텍처 */}
          <section
            id="tech-02"
            className="scroll-mt-16 bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6"
          >
            <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
              <span className="px-2.5 py-1 text-xs font-bold bg-blue-500 text-white rounded">
                02
              </span>
              <h2 className="text-2xl font-bold text-gray-900">
                몬스터 전략 패턴 &amp; 무할당 물리 아키텍처
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 text-sm text-gray-700">
              <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-3">
                <h3 className="font-bold text-gray-900 text-sm">공격 모듈 전략 패턴 분리 (IMonsterAttackModule)</h3>
                <p className="text-xs text-gray-600 leading-relaxed">
                  <code className="font-mono text-blue-700 bg-blue-50 px-1 py-0.5 rounded">EnemyBase.cs</code>의 비대화를 방지하고 개방-폐쇄 원칙(OCP)을 준수하기 위해 공격 로직을 4종 전략 모듈로 분리했습니다.
                </p>
                <ul className="list-disc pl-4 space-y-1.5 text-xs text-gray-600 leading-relaxed">
                  <li><b>ContactAttackModule:</b> 슬라임의 지속 추적 및 접촉 몸통 박치기</li>
                  <li><b>ChargeAttackModule:</b> 고슴도치의 4.8m 와인드업 회전, 3.5배속 볼링공 돌진 및 벽 쿵 기절</li>
                  <li><b>RangedShooterModule:</b> 다람쥐의 5.5m 거리 유지 및 모션 동기화 독 포자 발사</li>
                  <li><b>BossPhaseModule:</b> 수호 고목의 체력 구간별 3대 광역 패턴 분기</li>
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-blue-50/40 border border-blue-100 space-y-3">
                <h3 className="font-bold text-blue-950 text-sm">무할당 조향 엔진 &amp; 바위형 물리 고정</h3>
                <p className="text-xs text-gray-700 leading-relaxed">
                  피격 넉백과 일반 이동의 물리 충돌을 명확히 분리하여 몬스터와 캐릭터의 조작감을 완성했습니다.
                </p>
                <ul className="list-disc pl-4 space-y-1.5 text-xs text-gray-700 leading-relaxed">
                  <li>
                    <b>EnemyMotor2D (8방향 레이캐스트):</b> GC 할당 없는 장애물 우회 조향 및 시야선(Line of Sight) 검사로 벽 너머 헛돌진 차단.
                  </li>
                  <li>
                    <b>고정 체급 바디 (<code className="font-mono text-blue-700 bg-white px-1 py-0.5 rounded">mass=100, Friction=0</code>):</b> 플레이어의 단순 WASD 이동으로 몬스터가 밀리지 않고 몸통 둘레를 부드럽게 미끄러지도록 고정.
                  </li>
                  <li>
                    <b>넉백 타이머 분리:</b> 오직 무기 타격 적중 시에만 <code className="font-mono text-blue-700 bg-white px-1 py-0.5 rounded">ApplyKnockback(8.5f, 0.18s)</code>과 보호 타이머로 호쾌하게 밀려나도록 분리.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 03. 2.5D 절벽 깊이감 & 하향 공격 소팅 보정 */}
          <section
            id="tech-03"
            className="scroll-mt-16 bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6"
          >
            <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
              <span className="px-2.5 py-1 text-xs font-bold bg-blue-500 text-white rounded">
                03
              </span>
              <h2 className="text-2xl font-bold text-gray-900">
                2.5D 절벽 깊이감 &amp; 하향 공격 소팅 보정
              </h2>
            </div>

            <div className="space-y-4 text-sm sm:text-[15px] text-gray-700 leading-relaxed">
              <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-2">
                <h3 className="font-bold text-gray-900 text-base">
                  공격 중 무기·슬래시 정렬 최상위 승격 (attackBoost = +1000)
                </h3>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  탑뷰 시점에서 플레이어가 몬스터보다 위쪽(<code className="font-mono text-blue-700 bg-blue-50 px-1 py-0.5 rounded">Player.y &gt; Enemy.y</code>)에 
                  위치하여 아래쪽 적을 내려칠 때, Y-Sorting 규칙으로 인해 휘두르는 무기나 참격 이펙트가 몬스터 몸통 뒤로 숨겨지는 시각적 결함을 발견했습니다. 
                  이를 해결하기 위해 공격 진행 중(<code className="font-mono text-blue-700 bg-blue-50 px-1 py-0.5 rounded">isAttacking == true</code>)에는 
                  무기, 앞팔, 슬래시 스프라이트 렌더러의 정렬 오더에 <code className="font-mono text-blue-700 bg-blue-50 px-1 py-0.5 rounded">+1000</code>을 동적 가산하여 
                  몬스터 앞쪽으로 호쾌하게 베고 지나가도록 시인성을 보정했습니다.
                </p>
              </div>

              <div className="p-5 rounded-xl bg-blue-50/40 border border-blue-100 space-y-2">
                <h3 className="font-bold text-blue-950 text-base">
                  남쪽 절벽 턱 전면 분리 렌더링 (Wall_Front_Tilemap)
                </h3>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  2.5D 탑뷰 환경에서 캐릭터가 남쪽 절벽 턱 뒤로 걸어 내려갈 때, 캐릭터의 전신이 절벽 위에 붕 떠 보이는 이질감을 해소하기 위해 
                  3단 타일맵 레이어링(<code className="font-mono text-blue-700 bg-white px-1 py-0.5 rounded">Floor</code>, <code className="font-mono text-blue-700 bg-white px-1 py-0.5 rounded">Wall</code>, <code className="font-mono text-blue-700 bg-white px-1 py-0.5 rounded">Wall_Front_Tilemap</code>)을 도입했습니다. 
                  남쪽 절벽 턱을 전면 타일맵(SortingOrder: 10005)으로 분리하여 캐릭터의 발끝과 하체만 자연스럽게 가려지도록 처리하고, 
                  <code className="font-mono text-blue-700 bg-white px-1 py-0.5 rounded">Custom Physics Shape</code> 보정을 통해 턱 뒤 접지선에서 물리 이동이 정확히 멈추도록 구현했습니다.
                </p>
              </div>
            </div>
          </section>

          {/* 04. Netcode(NGO) 서버 권한 분리 & 오디오·세이브 */}
          <section
            id="tech-04"
            className="scroll-mt-16 bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6"
          >
            <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
              <span className="px-2.5 py-1 text-xs font-bold bg-blue-500 text-white rounded">
                04
              </span>
              <h2 className="text-2xl font-bold text-gray-900">
                Netcode(NGO) 서버 권한 분리 &amp; 오디오·세이브 아키텍처
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 text-sm text-gray-700">
              <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-3">
                <h3 className="font-bold text-gray-900 text-base">Netcode P2P Host 환경 및 권한 분리</h3>
                <ul className="list-disc pl-4 space-y-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
                  <li>
                    <b>자동 Host 개설:</b> 싱글플레이 환경에서도 <code className="font-mono text-blue-700 bg-blue-50 px-1 py-0.5 rounded">GameBootstrap.cs</code>가 
                    자동으로 Listen Server(<code className="font-mono text-blue-700 bg-blue-50 px-1 py-0.5 rounded">StartHost()</code>)를 열어 향후 Steam P2P Co-op 전환 시 코드 재작성을 최소화.
                  </li>
                  <li>
                    <b>서버 권한(Server-Authoritative):</b> AI 길찾기, 데미지 연산(<code className="font-mono text-blue-700 bg-blue-50 px-1 py-0.5 rounded">IDamageable</code>), 
                    체력 동기화(<code className="font-mono text-blue-700 bg-blue-50 px-1 py-0.5 rounded">NetworkVariable</code>)는 100% 서버에서 통제.
                  </li>
                  <li>
                    <b>로컬 0ms 피드백:</b> 역경직, 화면 진동, 피격 플래시는 공격자 로컬 클라이언트에서 네트워크 지연 없이 즉각 실행.
                  </li>
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-blue-50/40 border border-blue-100 space-y-3">
                <h3 className="font-bold text-blue-950 text-base">초경량 미니맵, 오디오 버스 &amp; 세이브 무결성</h3>
                <ul className="list-disc pl-4 space-y-2 text-xs sm:text-sm text-gray-700 leading-relaxed">
                  <li>
                    <b>Zero-Camera 미니맵:</b> 추가 카메라 없이 그리드 데이터를 <code className="font-mono text-blue-700 bg-white px-1 py-0.5 rounded">Texture2D</code>로 직접 구워 UI RawImage에 바인딩(반경 9타일 안개 무할당 갱신).
                  </li>
                  <li>
                    <b>사운드 디커플링:</b> AudioMixer 4계층 버스 라우팅 및 <code className="font-mono text-blue-700 bg-white px-1 py-0.5 rounded">SoundEvents</code> 무의존성 이벤트 버스를 통해 사운드 매니저 부재 시에도 컴파일/런타임 에러 완전 차단.
                  </li>
                  <li>
                    <b>방 단위 자동 저장 및 강종 방지:</b> 다음 방 진입 시 자동 저장되며, 죽기 직전 Alt+F4 악용 시 해당 방 입구에서 몬스터가 리셋된 상태로 재시작되어 전리품 보존과 꼼수 차단의 절충안 구현.
                  </li>
                </ul>
              </div>
            </div>
          </section>

          {/* 05. 실시간 구현 마일스톤 및 로드맵 */}
          <section
            id="tech-05"
            className="scroll-mt-16 bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6"
          >
            <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
              <span className="px-2.5 py-1 text-xs font-bold bg-blue-500 text-white rounded">
                05
              </span>
              <h2 className="text-2xl font-bold text-gray-900">
                실시간 구현 마일스톤 및 로드맵
              </h2>
            </div>

            <div className="grid sm:grid-cols-2 gap-6 pt-2">
              <div className="p-5 rounded-xl bg-blue-50/40 border border-blue-200 space-y-3">
                <div className="flex items-center justify-between border-b border-blue-200 pb-2">
                  <h3 className="font-bold text-blue-950 text-sm">구현 완료 내역 (Step 1~11)</h3>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-emerald-100 text-emerald-800">100% COMPLETE</span>
                </div>
                <ul className="list-disc pl-4 space-y-1.5 text-xs text-gray-700 leading-relaxed">
                  <li>엑셀(GameData.xlsx) 6개 시트 및 MasterDataPostprocessor 0.6초 자동 빌드</li>
                  <li>하우징 스탯 계산기(HousingBuffCalculator) ↔ 전투 씬 JSON 영속성 연동</li>
                  <li>17개 스탯 와이드 테이블 동적 파싱 및 테트리스 블록 행렬 변환기</li>
                  <li>방 클리어 황금 보따리(LootBundle) 및 10×10 테트리스 루팅 UI(UI_Looting)</li>
                  <li>2.5D 레이맨 리깅 (5단 레이어, 오버핸드 풀 스윙, 뒷손 반동, attackBoost +1000)</li>
                  <li>절차적 전투 필드 생성기(DungeonRoomGenerator) 및 남쪽 절벽 턱 전면 분리</li>
                  <li>1구역 몬스터 4종 애니메이션, 전략 패턴(IMonsterAttackModule), 고정 물리(mass=100)</li>
                </ul>
              </div>

              <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-3">
                <div className="flex items-center justify-between border-b border-gray-200 pb-2">
                  <h3 className="font-bold text-gray-900 text-sm">차기 진행 로드맵 (Upcoming · P1~P7)</h3>
                  <span className="text-[11px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-800">IN PROGRESS</span>
                </div>
                <ul className="list-disc pl-4 space-y-1.5 text-xs text-gray-600 leading-relaxed">
                  <li><b>P1~P2 지형 고도화:</b> 외곽 암흑 보이드(#050508) 및 QOT 6구획 무작위 스탬핑·MST 협곡 굴착</li>
                  <li><b>P3 전투 UI &amp; 미니맵:</b> 피격 반응형 체력바(3초 페이드아웃), Zero-Camera 픽셀 미니맵</li>
                  <li><b>P4~P5 오디오 &amp; 라인업:</b> AudioMixer 4계층 버스 연동 및 1구역 엘리트 몬스터 추가</li>
                  <li><b>P6 마을 허브 &amp; 주민 구출:</b> 1구역 상인·목수 구출 튜토리얼 및 소일거리 방치형 파견</li>
                  <li><b>P7 세대교체 메타루프:</b> 0대 선대 비석 타임스탬프 및 사망 시 마차 이사 연출·묘비 기록소</li>
                </ul>
              </div>
            </div>
          </section>
        </article>
      )}
    </main>
  );
}
