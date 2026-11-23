"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import ImgPrefixed from "./ImgPrefixed";
import BeforeAfterSlider from "./BeforeAfterSlider";

export type GearAndTowerTab = "overview" | "architecture" | "automation" | "governance";
type ActiveGearTab = "overview" | "automation" | "governance";

interface GearAndTowerClientProps {
  initialTab?: GearAndTowerTab;
}

function normalizeTab(tab?: GearAndTowerTab): ActiveGearTab {
  if (!tab || tab === "architecture" || tab === "overview") {
    return "overview";
  }
  return tab;
}

export default function GearAndTowerClient({
  initialTab = "overview",
}: GearAndTowerClientProps) {
  const [activeTab, setActiveTab] = useState<ActiveGearTab>(normalizeTab(initialTab));

  useEffect(() => {
    setActiveTab(normalizeTab(initialTab));
  }, [initialTab]);

  const handleTabChange = (tabId: ActiveGearTab) => {
    setActiveTab(tabId);
    if (typeof window !== "undefined") {
      window.history.pushState(null, "", `/projects/gearandtower/${tabId}/`);
    }
  };

  const tabs: { id: ActiveGearTab; label: string }[] = [
    { id: "overview", label: "기획서 (시스템 개편)" },
    { id: "automation", label: "기술서 (코드 · 데이터)" },
    { id: "governance", label: "개발일지 (밸런싱 · 출시)" },
  ];

  const planToc = [
    { id: "plan-compare", tag: "전후 화면 비교" },
    { id: "plan-hub", tag: "대기실 & 도감 신설" },
    { id: "plan-armory", tag: "무기고 & 훈련소" },
    { id: "plan-ingame", tag: "웨이브 보상 & 성좌" },
    { id: "plan-wave", tag: "웨이브 구조 & 도전 모드" },
  ];

  const techToc = [
    { id: "tech-split", tag: "대형 스크립트 분할" },
    { id: "tech-trigger", tag: "이벤트 분리 & 최적화" },
    { id: "tech-excel", tag: "엑셀 연동 & 다국어" },
  ];

  const devlogToc = [
    { id: "log-balance", tag: "밸런스 문제 해결" },
    { id: "log-workflow", tag: "개발 관리 규칙" },
    { id: "log-status", tag: "출시 준비 현황" },
  ];

  const moduleSplits = [
    {
      name: "CodexUI (도감 UI)",
      before: "3,614줄 (단일 파일)",
      after: "6개 파일 / 2,003줄",
      detail: "메인, 탭 제어, 장비 탭, 세트 탭, 몬스터 탭 및 도감 데이터 분리",
    },
    {
      name: "CastleTrainingDummyUI (훈련소)",
      before: "단일 대형 스크립트",
      after: "4개 파일 / 3,675줄",
      detail: "측정 로직, UI 레이아웃, 스탯 툴팁, 타워 드래그 처리 분리",
    },
    {
      name: "WaitingRoomDeckUI (무기고/덱)",
      before: "2,381줄 (단일 파일)",
      after: "4개 파일 / 1,693줄",
      detail: "메인, 탭, 패널, 슬롯 분리 및 장비 강화 패널 UI 별도 신설",
    },
    {
      name: "AbyssStarChartUI (심연의 성좌)",
      before: "1,591줄 (단일 파일)",
      after: "2개 파일 / 2,158줄",
      detail: "성좌 화면 렌더링 및 노드 표시와 드래그·줌·입력 제어 분리",
    },
    {
      name: "TowerWeapon (타워 공격)",
      before: "573줄 (단일 파일)",
      after: "3개 파일 + 계산기",
      detail: "본체, 전투 판정, 업그레이드 및 독립 피해량 계산기(DamageCalculator) 분리",
    },
    {
      name: "WeightedRandomReward (웨이브 보상)",
      before: "456줄 (단일 파일)",
      after: "3개 파일 + 생성기",
      detail: "메인 제어, 카드 UI 생성, 보상 적용 및 보상 풀 생성기(RewardFactory) 분리",
    },
    {
      name: "WaveSystem & GameManager",
      before: "핵심 루프 과밀 (1,102줄)",
      after: "전담 모듈 5종 분리",
      detail: "WaveSystem, 적 스폰 팩토리, 클리어 보상, GameManager, 도전 모드 컨트롤러 분리",
    },
  ];

  const excelSheets = [
    { sheet: "Localization (다국어 텍스트)", rows: "629행 / 633키", target: "한국어·영어 실시간 전환 JSON 테이블" },
    { sheet: "Equipments (장비 데이터)", rows: "122행", target: "장비 능력치, 등급, 아이콘, 다국어 설명 데이터" },
    { sheet: "EquipmentSets (세트 효과)", rows: "8행", target: "동등 티어 8종 장비 세트 시너지 데이터" },
    { sheet: "AbyssNodes (성좌 노드)", rows: "30행", target: "심연의 성좌 4계열 노드 효과 및 비용 데이터" },
    { sheet: "EnemyScaling (웨이브 성장)", rows: "26행", target: "웨이브별 체력·방어력 배율 및 도전 모드 계단식 곡선" },
    { sheet: "Enemies (몬스터 20종)", rows: "20행", target: "테마 몬스터 및 보스 종족값(bstBudget) 데이터" },
    { sheet: "Upgrades (공방 강화)", rows: "13행", target: "전투 중 물리·마법 업그레이드 수치 데이터" },
    { sheet: "StoryDialogue (스토리 대사)", rows: "8행", target: "대사 테이블 (출시 우선순위 조정으로 미배치)" },
    { sheet: "Towers (타워 6종)", rows: "6행", target: "타워 기본 능력치 및 창술사 비용(180TC) 데이터" },
    { sheet: "DropRates (상점 뽑기 확률)", rows: "4행", target: "장비 등급별 뽑기 확률 데이터" },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 space-y-12 text-gray-800 antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* 상단 메타 헤더 (RogueTower와 통일) */}
      <section className="grid gap-8 md:grid-cols-2 items-stretch">
        <div className="rounded-xl overflow-hidden shadow-sm flex items-center justify-center bg-gray-50 border border-gray-200">
          <ImgPrefixed
            src="/images/gearandtower/title.png"
            alt="Gear and Tower 메인 로고"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold underline decoration-blue-500 underline-offset-8">
              Gear &amp; Tower{" "}
              <span className="text-xl font-normal text-gray-400">(구 RogueTower)</span>
            </h1>
            <p className="text-sm sm:text-[15px] text-gray-600 mt-3 font-medium">
              RPG 성장 요소를 대폭 강화한 2D 픽셀 아트 로그라이트 타워 디펜스 (스팀 출시 리뉴얼)
            </p>

            <dl className="grid grid-cols-[120px_1fr] gap-x-4 gap-y-5 text-gray-800 mt-7 text-sm sm:text-[15px]">
              <dt className="font-semibold text-gray-600">ROLE</dt>
              <dd>기획, 개발, 디자인</dd>

              <dt className="font-semibold text-gray-600">DURATION</dt>
              <dd>2026.11 ~</dd>

              <dt className="font-semibold text-gray-600">TEAM</dt>
              <dd>1인 개발</dd>

              <dt className="font-semibold text-gray-600">PLATFORM</dt>
              <dd>PC (Windows · Steam 출시 준비)</dd>
            </dl>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <Link
              href="/projects/roguetower"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold
                         bg-blue-100 text-blue-800 hover:bg-blue-200 transition"
            >
              개편 전 원형: RogueTower v0.2.4 보기 -&gt;
            </Link>
            <a
              href="https://github.com/WooGeun-Nam/RogueTower-Code"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold
                         bg-gray-200 text-gray-900 hover:bg-gray-300 transition"
            >
              v0.2.4 GitHub Source
            </a>
          </div>
        </div>
      </section>

      {/* 3등분 탭 바 */}
      <nav className="w-full border-b border-gray-200">
        <div className="grid grid-cols-3 w-full text-center">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                type="button"
                onClick={() => handleTabChange(tab.id)}
                className={`py-3.5 text-xs sm:text-base font-bold transition-all cursor-pointer ${
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
      {/* TAB 1: 기획서 (시스템 개편)                                            */}
      {/* =================================================================== */}
      {activeTab === "overview" && (
        <article className="space-y-16">
          {/* 기획 핵심 요약 박스 */}
          <section className="p-6 rounded-2xl bg-blue-50/40 border border-blue-200/80 space-y-4">
            <div className="flex items-center justify-between border-b border-blue-200/70 pb-3">
              <h3 className="font-bold text-blue-950 text-base sm:text-lg">기획 핵심 요약</h3>
              <span className="text-xs font-semibold text-blue-700 bg-white px-2.5 py-1 rounded-full border border-blue-200">
                시스템 기획 &amp; UX 리뉴얼
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-blue-200/80 space-y-1.5">
                <span className="text-sm sm:text-base font-bold text-blue-900 block">대기실 개편 &amp; 신규 시스템</span>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  이동형 출격 대기실과 몬스터 도감, 훈련소, 단계별 튜토리얼 신설
                </p>
              </div>
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-blue-200/80 space-y-1.5">
                <span className="text-sm sm:text-base font-bold text-blue-900 block">장비 · 성좌 이원화 성장</span>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  장비 수집·강화(장기 성장)와 4갈래 성좌 개방(빌드 성장) 결합
                </p>
              </div>
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-blue-200/80 space-y-1.5">
                <span className="text-sm sm:text-base font-bold text-blue-900 block">무기고 &amp; 훈련소 연계</span>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  확장성을 고려한 선택형 타워 덱 편성과 훈련소 실시간 화력 검증
                </p>
              </div>
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-blue-200/80 space-y-1.5">
                <span className="text-sm sm:text-base font-bold text-blue-900 block">웨이브 보상 &amp; 도전 모드</span>
                <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
                  전술 카드·리롤 도입 및 단계별 난이도와 계단식 도전 모드 재설계
                </p>
              </div>
            </div>
          </section>

          {/* 미니 목차 */}
          <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-gray-200/70 text-xs sm:text-[13px]">
            <span className="font-bold text-gray-400 mr-1 text-[11px] uppercase tracking-wider">목차</span>
            {planToc.map((item, idx) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 hover:bg-blue-50 hover:text-blue-600 text-gray-700 transition font-medium"
              >
                <span className="text-[10px] font-bold text-blue-500">0{idx + 1}</span>
                <span>{item.tag}</span>
              </a>
            ))}
          </div>

          {/* 01. 리뉴얼 전후 화면 비교 */}
          <section id="plan-compare" className="scroll-mt-14 space-y-4">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600">01 · 전후 화면 비교</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                리뉴얼 전후 화면 비교 (v0.2.4 -&gt; v0.3.0)
              </h2>
            </header>
            <div className="p-5 rounded-2xl bg-blue-50/30 border border-blue-200/70 text-sm text-gray-700 leading-relaxed space-y-1.5">
              <div className="font-bold text-blue-950 text-base">
                리뉴얼 기획 배경: 타워 디펜스 중심에서 RPG 성장·수집 요소의 심화로
              </div>
              <p>
                초기 베타(RogueTower v0.2.4)에서는 1인 개발 환경에서 핵심 전투를 빠르게 구현하고 검증하기 위해 타워 디펜스 시스템에 집중했습니다. 이번 리뉴얼에서는 AI 협업과 데이터 자동화를 통해 충분한 개발 속도를 확보하면서, 기존에 타협했던 <strong>RPG적 성장과 수집 요소</strong>(상호작용형 대기실 거점, 장비 강화와 세트 파밍, 4갈래 성좌 특성 트리, 몬스터 도감, 훈련소 화력 검증)를 본격적으로 확장했습니다.
              </p>
            </div>
            <BeforeAfterSlider />
          </section>

          <hr className="border-gray-200/80" />

          {/* 02. 대기실 개편 및 신규 시스템 확장 */}
          <section id="plan-hub" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600">02 · 대기실 &amp; 도감 신설</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                대기실 개편 및 신규 시스템 확장 (몬스터 도감 · 튜토리얼)
              </h2>
            </header>

            <div className="space-y-4">
              <div className="w-full rounded-2xl border border-gray-200 bg-white p-5 grid md:grid-cols-[360px_1fr] gap-5 items-center shadow-sm">
                <div className="aspect-video rounded-xl overflow-hidden bg-slate-950 border border-gray-200">
                  <ImgPrefixed
                    src="/images/gearandtower/lobby-right.png"
                    alt="상호작용형 대기실과 단계별 튜토리얼"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <span className="inline-block text-[11px] font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded">
                    출격 대기실
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">
                    상호작용형 대기실과 단계별 튜토리얼
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    단일 팝업에 장비와 시작 버튼만 있던 구버전 대기실을 개편해, 캐릭터가 직접 이동하며 무기고, 훈련소, 상점, 도감, 성좌의 제단, 성문을 이용하는 거점 공간으로 구성했습니다. 단일 재화였던 경제 구조도 뽑기 중심의 심연의 주화와 강화 중심의 심연의 가루로 분리하고, 처음 접하는 유저가 자연스럽게 적응할 수 있도록 전투 및 대기실 안내 튜토리얼을 추가했습니다.
                  </p>
                </div>
              </div>

              <div className="w-full rounded-2xl border border-gray-200 bg-white p-5 grid md:grid-cols-[360px_1fr] gap-5 items-center shadow-sm">
                <div className="aspect-video rounded-xl overflow-hidden bg-slate-950 border border-gray-200">
                  <ImgPrefixed
                    src="/images/gearandtower/codex-monster.png"
                    alt="몬스터 도감 및 세트 도감 추가"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <span className="inline-block text-[11px] font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded">
                    신규 도감 시스템
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">
                    몬스터 도감 및 세트 도감 추가
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    v0.2.4에서는 보유 장비 목록만 단순 확인할 수 있었으나, 세트 효과를 모아 보는 세트 도감과 누적 처치 수에 따라 몬스터의 외형, 특성, 방어 비율이 단계별로 해금되는 몬스터 도감을 새로 추가해 수집과 공략 정보 확인의 재미를 더했습니다.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-gray-200/80" />

          {/* 03. 무기고 시스템 및 훈련소 연계 */}
          <section id="plan-armory" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600">03 · 무기고 &amp; 훈련소</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                무기고 시스템 (장비 강화 · 타워 덱 편성) 및 훈련소 연계
              </h2>
            </header>

            <div className="space-y-4">
              <div className="w-full rounded-2xl border border-gray-200 bg-white p-5 grid md:grid-cols-[360px_1fr] gap-5 items-center shadow-sm">
                <div className="aspect-video rounded-xl overflow-hidden bg-slate-950 border border-gray-200">
                  <ImgPrefixed
                    src="/images/gearandtower/armory-equip.png"
                    alt="장비 성장 축: 동등 티어 세트 개편 및 장비 강화"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <span className="inline-block text-[11px] font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded">
                    장비 성장 축
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">
                    장비 성장 축: 동등 티어 세트 개편 및 장비 강화
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    이원화 성장의 첫 번째 축인 장비 시스템에서 특정 최상위 세트가 강제되지 않도록 세트 간 위상을 동등하게 재설비하고 장착 UI를 개선했습니다. 또한 파밍 이후에도 지속적인 성장 목표를 가질 수 있도록 재화를 소모해 장비를 강화하는 시스템을 새로 도입했습니다.
                  </p>
                </div>
              </div>

              <div className="w-full rounded-2xl border border-gray-200 bg-white p-5 grid md:grid-cols-[360px_1fr] gap-5 items-center shadow-sm">
                <div className="aspect-video rounded-xl overflow-hidden bg-slate-950 border border-gray-200">
                  <ImgPrefixed
                    src="/images/gearandtower/armory-deck.png"
                    alt="확장성과 빌드 압축을 고려한 타워 덱 편성"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <span className="inline-block text-[11px] font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded">
                    덱 편성 시스템
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">
                    확장성과 빌드 압축을 고려한 타워 덱 편성
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    무기고 내 두 번째 기능으로 출격 타워를 직접 고르는 타워 편성 시스템을 구축했습니다. 기존 6종 고정 슬롯 구조를 탈피해 향후 신규 타워가 추가되더라도 유연하게 수용할 수 있는 확장성을 확보했으며, 플레이어가 출격 타워 수를 직접 조절해 인게임 보상 풀을 원하는 타워 위주로 압축할 수 있도록 설계했습니다.
                  </p>
                </div>
              </div>

              <div className="w-full rounded-2xl border border-gray-200 bg-white p-5 grid md:grid-cols-[360px_1fr] gap-5 items-center shadow-sm">
                <div className="aspect-video rounded-xl overflow-hidden bg-slate-950 border border-gray-200">
                  <ImgPrefixed
                    src="/images/gearandtower/training.png"
                    alt="신규 시스템: 세팅한 성장을 즉시 검증하는 훈련소"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <span className="inline-block text-[11px] font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded">
                    신규 시스템 · 훈련소
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">
                    신규 시스템: 세팅한 성장을 즉시 검증하는 훈련소
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    무기고에서 맞춘 장비 강화 수치와 편성한 타워 덱이 실제 전투에서 어느 정도의 효율을 내는지 출격 전에 바로 시험해 볼 수 있도록 훈련소를 새로 추가했습니다. 도감에서 해금한 몬스터를 허수아비 대상으로 지정하고 웨이브와 업그레이드 단계를 조절하며 타워별 실시간 DPS 점유율과 디버프 효율을 확인할 수 있습니다.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-gray-200/80" />

          {/* 04. 인게임 빌드 성장: 웨이브 보상 개편과 심연의 성좌 */}
          <section id="plan-ingame" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600">04 · 웨이브 보상 &amp; 성좌</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                인게임 빌드 성장: 웨이브 보상 개편과 심연의 성좌
              </h2>
            </header>

            <div className="space-y-4">
              <div className="w-full rounded-2xl border border-gray-200 bg-white p-5 grid md:grid-cols-[360px_1fr] gap-5 items-center shadow-sm">
                <div className="aspect-video rounded-xl overflow-hidden bg-slate-950 border border-gray-200">
                  <ImgPrefixed
                    src="/images/gearandtower/reward.png"
                    alt="웨이브 보상 개편 및 전술 카드 도입"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <span className="inline-block text-[11px] font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded">
                    단기 빌드 보상
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">
                    웨이브 보상 개편 및 전술 카드 도입
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    웨이브 클리어 시 단순 능력치 상승 위주였던 구버전 보상 구조에 전투 규칙과 버프를 변화시키는 전술 카드와 전설 보상을 추가해 매 판 단기 빌드의 변수를 넓혔습니다. 또한 다시 뽑기(리롤)와 전장 확인(접기) 버튼을 도입해 현재 타워 배치 상황을 직접 확인하며 보상을 선택할 수 있도록 개선했습니다.
                  </p>
                </div>
              </div>

              <div className="w-full rounded-2xl border border-gray-200 bg-white p-5 grid md:grid-cols-[360px_1fr] gap-5 items-center shadow-sm">
                <div className="aspect-video rounded-xl overflow-hidden bg-slate-950 border border-gray-200">
                  <ImgPrefixed
                    src="/images/gearandtower/constellation.png"
                    alt="심연의 성좌: 4가지 방향성의 플레이어 선택 성장"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <span className="inline-block text-[11px] font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded">
                    성좌 성장 축
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">
                    심연의 성좌: 4가지 방향성의 플레이어 선택 성장
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    장비 성장이 기초 체급을 높여 준다면, 심연의 성좌는 중앙 코어를 기점으로 4가지 방향성으로 뻗어 나가는 노드를 개방하며 플레이어가 원하는 전투 스타일을 선택하는 두 번째 핵심 성장 축입니다. 대기실의 영구 해금과 인게임 판당 투자를 연계하고, 전체 화면 드래그 이동과 줌 범위 제한을 적용해 조작 편의성을 높였습니다.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-gray-200/80" />

          {/* 05. 웨이브 진행 구조와 단계별 난이도 · 도전 모드 */}
          <section id="plan-wave" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600">05 · 웨이브 구조 &amp; 도전 모드</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                웨이브 진행 구조와 단계별 난이도 · 도전 모드
              </h2>
            </header>

            <div className="space-y-4">
              <div className="w-full rounded-2xl border border-gray-200 bg-white p-5 grid md:grid-cols-[360px_1fr] gap-5 items-center shadow-sm">
                <div className="aspect-video rounded-xl overflow-hidden bg-slate-950 border border-gray-200">
                  <ImgPrefixed
                    src="/images/gearandtower/ingame.png"
                    alt="테마별 보스 중심의 웨이브 구조와 전투 HUD 개편"
                    className="w-full h-full object-contain"
                  />
                </div>
                <div className="space-y-2">
                  <span className="inline-block text-[11px] font-bold text-blue-600 bg-blue-50 px-2.5 py-0.5 rounded">
                    전투 · 웨이브 구조
                  </span>
                  <h3 className="text-lg font-bold text-gray-900">
                    테마별 보스 중심의 웨이브 구조와 전투 HUD 개편
                  </h3>
                  <p className="text-sm text-gray-600 leading-relaxed">
                    중간 네임드와 초원, 설원, 사막, 마그마 테마별 고유 스킬을 가진 결전 보스로 이어지는 20웨이브 구조를 확립해 구간별 공략 목표를 명확히 했습니다. 일반, 네임드, 보스 몬스터의 기초 체급을 정규화하고, 1080p 해상도 리뉴얼과 함께 상단 대형 보스 체력 및 실드 바와 좌측 전술 버프 HUD를 추가해 전투 시인성을 높였습니다.
                  </p>
                </div>
              </div>

              <div className="w-full rounded-2xl border border-gray-200 bg-gray-50 p-6 space-y-2 shadow-sm">
                <span className="inline-block text-[11px] font-bold text-blue-600 bg-white border border-blue-200 px-2.5 py-0.5 rounded">
                  난이도 · 엔드 콘텐츠
                </span>
                <h3 className="text-lg font-bold text-gray-900">
                  단계별 난이도 재설계 및 도전 모드
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  0부터 100까지의 숫자 슬라이더로 되어 있던 기존 난이도를 입문, 보통, 어려움, 지옥 단계로 개편하고, 단계마다 몬스터 체력과 방어력 배율을 분리해 물리·마법 타워 간 균형을 맞췄습니다. 또한 기존 무한 모드를 도전 모드로 개편해 보스 구간마다 난이도가 계단식으로 상승하도록 설계하여, 성장시킨 장비와 성좌 빌드의 한계를 시험할 수 있는 엔드 콘텐츠로 구성했습니다.
                </p>
              </div>
            </div>
          </section>

          {/* 하단 탭 전환 배너 */}
          <div className="p-6 bg-gradient-to-r from-blue-50/70 to-indigo-50/40 border border-blue-200/80 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                코드 아키텍처와 엑셀 · 다국어 자동화 구조가 궁금하신가요?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                대형 스크립트 분할, 전투 이벤트 구조, 엑셀 데이터 동기화 및 한국어·영어 지원 구조를 확인할 수 있습니다.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                handleTabChange("automation");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-xl transition shrink-0 shadow-sm cursor-pointer"
            >
              기술서 (코드 · 데이터)로 이동 -&gt;
            </button>
          </div>
        </article>
      )}

      {/* =================================================================== */}
      {/* TAB 2: 기술서 (코드 · 데이터)                                          */}
      {/* =================================================================== */}
      {activeTab === "automation" && (
        <article className="space-y-16">
          {/* 기술 핵심 요약 */}
          <section className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-4">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <h3 className="font-bold text-gray-900 text-base sm:text-lg">기술 핵심 요약</h3>
              <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                클라이언트 구조 &amp; 데이터 파이프라인
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-gray-200 space-y-1.5">
                <span className="text-sm sm:text-base font-bold text-gray-900 block">대형 스크립트 역할 분할</span>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  인스펙터 참조(GUID)를 유지한 채 비대해진 UI·전투 코드를 역할별 분리
                </p>
              </div>
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-gray-200 space-y-1.5">
                <span className="text-sm sm:text-base font-bold text-gray-900 block">전투 이벤트 분리 구조</span>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  하드코딩 조건문을 제거하고 전투 이벤트와 효과 모듈을 독립 연결
                </p>
              </div>
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-gray-200 space-y-1.5">
                <span className="text-sm sm:text-base font-bold text-gray-900 block">연산 분리 &amp; 부하 감소</span>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  불변 발사체 구조체로 참조 오류를 막고 비활성 컴포넌트 연산 중단
                </p>
              </div>
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-gray-200 space-y-1.5">
                <span className="text-sm sm:text-base font-bold text-gray-900 block">엑셀 연동 &amp; 실시간 다국어</span>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  통합 엑셀 자동 동기화 및 한국어·영어 실시간 전환과 누락 점검
                </p>
              </div>
            </div>
          </section>

          {/* 미니 목차 */}
          <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-gray-200/70 text-xs sm:text-[13px]">
            <span className="font-bold text-gray-400 mr-1 text-[11px] uppercase tracking-wider">목차</span>
            {techToc.map((item, idx) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 hover:bg-blue-50 hover:text-blue-600 text-gray-700 transition font-medium"
              >
                <span className="text-[10px] font-bold text-blue-500">0{idx + 1}</span>
                <span>{item.tag}</span>
              </a>
            ))}
          </div>

          {/* 01. 대형 스크립트 분할 */}
          <section id="tech-split" className="scroll-mt-14 space-y-4">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600">01 · 대형 스크립트 분할</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                대형 스크립트 역할 분할 (partial class)
              </h2>
              <p className="text-sm text-gray-600">
                인스펙터 직렬화 참조(GUID)를 유지한 채 도감, 훈련소, 대기실, 성좌, 타워, 보상 등 비대해진 스크립트를 역할별 파일로 분리했습니다.
              </p>
            </header>

            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm divide-y divide-gray-200">
                <thead className="bg-gray-50 text-gray-700 font-semibold">
                  <tr>
                    <th className="py-3 px-4">대상 모듈</th>
                    <th className="py-3 px-4">개편 전 (v0.2.4)</th>
                    <th className="py-3 px-4">개편 후 (v0.3.0)</th>
                    <th className="py-3 px-4">세부 파일 구성</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {moduleSplits.map((row) => (
                    <tr key={row.name}>
                      <td className="py-3 px-4 font-bold text-gray-900">{row.name}</td>
                      <td className="py-3 px-4 text-gray-600">{row.before}</td>
                      <td className="py-3 px-4 font-semibold text-blue-700">{row.after}</td>
                      <td className="py-3 px-4 text-gray-600">{row.detail}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </section>

          <hr className="border-gray-200/80" />

          {/* 02. 이벤트 분리 & 최적화 (전체 가로폭 세로 배치) */}
          <section id="tech-trigger" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600">02 · 이벤트 분리 &amp; 최적화</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                전투 이벤트 분리 및 연산 최적화
              </h2>
            </header>

            <div className="space-y-4">
              <div className="w-full p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-2.5 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900">
                  전투 이벤트 분리 구조 (CombatTriggerManager)
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  전투 코드 곳곳에 흩어져 있던 조건문을 해체하고 <strong>CombatTriggerManager</strong>(16종 이벤트)와 <strong>TriggerEffectRegistry</strong>(성좌 및 전술 독립 효과 모듈 19종) 구조로 전환해, 기존 전투 코드를 수정하지 않고 신규 효과를 추가할 수 있도록 개선했습니다.
                </p>
              </div>

              <div className="w-full p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-2.5 shadow-sm">
                <h3 className="text-lg font-bold text-gray-900">
                  연산 분리 및 프레임 부하 감소
                </h3>
                <p className="text-sm text-gray-700 leading-relaxed">
                  발사 시점 스탯을 불변 구조체(<strong>AttackPayload</strong>)로 전달해 타워 파괴 후 참조 오류를 차단하고, 합연산 버킷과 독립 곱연산을 분리(<strong>DamageCalculator</strong>)했습니다. 또한 비활성 오라와 전술 버프 컴포넌트는 대기 상태에서 업데이트를 중단(<code className="font-mono text-xs">enabled = false</code>)해 불필요한 프레임 부하를 제거했습니다.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-gray-200/80" />

          {/* 03. 엑셀 연동 & 다국어 (전체 가로폭 세로 배치) */}
          <section id="tech-excel" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600">03 · 엑셀 연동 &amp; 다국어</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                엑셀 데이터 통합 관리 및 한국어 · 영어 지원
              </h2>
              <p className="text-sm text-gray-600">
                밸런스 수치와 장비, 몬스터, 성좌, 번역 데이터를 MasterGameData.xlsx에서 통합 관리하며, 저장 시 파이썬 스크립트와 에디터 감시기가 JSON 및 유니티 에셋에 자동 반영합니다.
              </p>
            </header>

            <div className="overflow-x-auto rounded-xl border border-gray-200 shadow-sm">
              <table className="w-full text-left text-xs sm:text-sm divide-y divide-gray-200">
                <thead className="bg-gray-50 text-gray-700 font-semibold">
                  <tr>
                    <th className="py-3 px-4">엑셀 시트명</th>
                    <th className="py-3 px-4 text-center">데이터 규모</th>
                    <th className="py-3 px-4">자동 반영 대상</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-100 bg-white">
                  {excelSheets.map((item) => (
                    <tr key={item.sheet}>
                      <td className="py-2.5 px-4 font-bold text-gray-900">{item.sheet}</td>
                      <td className="py-2.5 px-4 text-center text-blue-700 font-medium">{item.rows}</td>
                      <td className="py-2.5 px-4 text-xs text-gray-600">{item.target}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <div className="space-y-4">
              <div className="w-full p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2 shadow-sm">
                <div className="text-xs font-bold text-blue-600">LocalizationManager</div>
                <h3 className="text-base font-bold text-gray-900">실시간 언어 전환</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  통합 번역 테이블을 기반으로 게임 재시작 없이 한국어와 영어를 즉시 전환하며, 장비와 성좌, 세트 설명까지 전 항목을 대응했습니다.
                </p>
              </div>
              <div className="w-full p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2 shadow-sm">
                <div className="text-xs font-bold text-blue-600">UI · 폰트 규격</div>
                <h3 className="text-base font-bold text-gray-900">영문 레이아웃 및 픽셀 폰트 규격화</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  영문 전환 시 단어 길이 차이로 발생하는 넘침을 막기 위해 버튼과 툴팁 여백을 확보하고, 픽셀 폰트(Galmuri) 정수 크기 규칙을 통일했습니다.
                </p>
              </div>
              <div className="w-full p-5 rounded-2xl bg-gray-50 border border-gray-200 space-y-2 shadow-sm">
                <div className="text-xs font-bold text-blue-600">자동 점검 스크립트</div>
                <h3 className="text-base font-bold text-gray-900">미번역 텍스트 누락 점검</h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  씬과 프리팹 내 UI 텍스트 컴포넌트의 번역 키 연결 여부와 테이블 공백을 파이썬 스크립트로 자동 점검해 누락을 방지했습니다.
                </p>
              </div>
            </div>
          </section>

          {/* 하단 탭 전환 배너 */}
          <div className="p-6 bg-gradient-to-r from-blue-50/70 to-indigo-50/40 border border-blue-200/80 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h3 className="font-bold text-gray-900 text-sm sm:text-base">
                밸런싱 문제 해결 과정과 출시 준비 현황이 궁금하신가요?
              </h3>
              <p className="text-xs sm:text-sm text-gray-600 mt-1">
                테스트 기반 밸런스 조정 사례, 개발 관리 규칙 정립 및 스팀 출시 마무리 현황을 확인할 수 있습니다.
              </p>
            </div>
            <button
              type="button"
              onClick={() => {
                handleTabChange("governance");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-xl transition shrink-0 shadow-sm cursor-pointer"
            >
              개발일지 (밸런싱 · 출시)로 이동 -&gt;
            </button>
          </div>
        </article>
      )}

      {/* =================================================================== */}
      {/* TAB 3: 개발일지 (밸런싱 · 출시)                                        */}
      {/* =================================================================== */}
      {activeTab === "governance" && (
        <article className="space-y-16">
          {/* 요약 박스 */}
          <section className="p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-4">
            <div className="flex items-center justify-between border-b border-gray-200 pb-3">
              <h3 className="font-bold text-gray-900 text-base sm:text-lg">밸런싱 &amp; 개발 기록 요약</h3>
              <span className="text-xs font-semibold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-full border border-blue-200">
                문제 해결 &amp; 출시 준비
              </span>
            </div>
            <div className="grid sm:grid-cols-2 gap-4 pt-1">
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-gray-200 space-y-1.5">
                <span className="text-sm sm:text-base font-bold text-gray-900 block">주기형 CC 구조 개편</span>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  다수 타워 배치 시의 연속 기절 문제를 주기형 EMP 펄스로 해결
                </p>
              </div>
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-gray-200 space-y-1.5">
                <span className="text-sm sm:text-base font-bold text-gray-900 block">초반 난이도 다각도 조율</span>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  전설 보상 제한, 초반 자원, 보스 체력을 함께 조정해 스노우볼 완화
                </p>
              </div>
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-gray-200 space-y-1.5">
                <span className="text-sm sm:text-base font-bold text-gray-900 block">개발 안정성 규칙 정립</span>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  에디터 제어 도구(MCP)와 독립 모듈 분리로 참조 손상 및 충돌 방지
                </p>
              </div>
              <div className="p-4 sm:p-5 rounded-xl bg-white border border-gray-200 space-y-1.5">
                <span className="text-sm sm:text-base font-bold text-gray-900 block">스팀 출시 막바지 점검</span>
                <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                  에디터 클린 컴파일 완료 후 실 SDK 연동 및 정식 빌드 완주 QA 대기
                </p>
              </div>
            </div>
          </section>

          {/* 미니 목차 */}
          <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-gray-200/70 text-xs sm:text-[13px]">
            <span className="font-bold text-gray-400 mr-1 text-[11px] uppercase tracking-wider">목차</span>
            {devlogToc.map((item, idx) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 hover:bg-blue-50 hover:text-blue-600 text-gray-700 transition font-medium"
              >
                <span className="text-[10px] font-bold text-blue-500">0{idx + 1}</span>
                <span>{item.tag}</span>
              </a>
            ))}
          </div>

          {/* 01. 밸런스 문제 해결 (전체 가로폭 세로 배치) */}
          <section id="log-balance" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600">01 · 밸런스 문제 해결</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                테스트 기반 밸런스 조정 및 문제 해결
              </h2>
            </header>

            <div className="space-y-4">
              <div className="w-full p-6 rounded-2xl border border-gray-200 bg-white space-y-3 shadow-sm">
                <h3 className="text-base font-bold text-gray-900">
                  다수 타워 배치 시 연속 기절 문제 해결 (전술 EMP 개편)
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600 leading-relaxed">
                    <span className="font-bold text-rose-600 mr-2">[문제]</span>
                    타워가 많이 쌓일수록 타격 확률 기반 기절이 면역 해제 직후 다시 걸려 보스·네임드가 사실상 계속 멈추는 문제를 확인했습니다.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-bold text-blue-700 mr-2">[해결]</span>
                    타워 수와 무관하게 일정 주기(4.5초)마다 무작위 적 3기에게 작동하는 주기형 EMP 펄스로 개편하고, 보스 상태이상 면역 및 네임드 50% 저항 규칙을 통일했습니다.
                  </p>
                </div>
              </div>

              <div className="w-full p-6 rounded-2xl border border-gray-200 bg-white space-y-3 shadow-sm">
                <h3 className="text-base font-bold text-gray-900">
                  초반 난이도 불균형 다각도 조정
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600 leading-relaxed">
                    <span className="font-bold text-rose-600 mr-2">[문제]</span>
                    무장비 입문 테스트에서 특정 전설 보상과 초반 자원이 겹쳐 후반까지 과도하게 쉽게 풀리는 현상을 발견했습니다.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-bold text-blue-700 mr-2">[해결]</span>
                    단일 보상을 과도하게 하향하는 대신 전설 보상 게임당 1회 제한, 성좌 및 전술 수치 보정, 초반 웨이브 자원(100-&gt;80), 보스 체력 배율(3.5x-&gt;4.8x)을 나누어 단계적으로 조정했습니다.
                  </p>
                </div>
              </div>

              <div className="w-full p-6 rounded-2xl border border-gray-200 bg-white space-y-3 shadow-sm">
                <h3 className="text-base font-bold text-gray-900">
                  초반 몬스터 체력 곡선 및 훈련소 DPS 계산식 보정
                </h3>
                <div className="space-y-2 text-sm">
                  <p className="text-gray-600 leading-relaxed">
                    <span className="font-bold text-rose-600 mr-2">[문제]</span>
                    초반 웨이브 몬스터가 한 방에 처치되어 장비 성장 체감이 낮아지고, 훈련소 DPS 계산에서 창술사(4타겟)·궁수(광역)·마법사(공속 비례 틱) 특성이 빠져 있었습니다.
                  </p>
                  <p className="text-gray-700 leading-relaxed">
                    <span className="font-bold text-blue-700 mr-2">[해결]</span>
                    초반 비-원샷 체력 곡선과 도전 모드 20웨이브 단위 계단식 상승 곡선을 적용하고, 훈련소 계산식에 타워별 다중 타격과 틱레이트 공식을 반영했습니다.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <hr className="border-gray-200/80" />

          {/* 02. 개발 관리 규칙 (전체 가로폭 세로 배치) */}
          <section id="log-workflow" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600">02 · 개발 관리 규칙</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                개발 과정의 시행착오와 관리 규칙
              </h2>
            </header>

            <div className="space-y-4">
              <div className="w-full p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-2 shadow-sm">
                <h3 className="text-base font-bold text-gray-900">
                  유니티 씬 · 프리팹 참조 손상 방지
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  씬이나 프리팹 파일을 텍스트로 직접 수정할 때 내부 참조가 깨지는 문제를 방지하기 위해, 에디터 제어 도구(Unity MCP)와 GUID 보존형 partial class 분할만 사용하도록 규칙화했습니다.
                </p>
              </div>

              <div className="w-full p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-2 shadow-sm">
                <h3 className="text-base font-bold text-gray-900">
                  신규 UI · 기능의 독립 모듈 분리
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  유랑상인 등 신규 시스템을 기존 보상 스크립트에 덧붙이지 않고 독립된 UI 및 모듈로 분리하며, 프로젝트 마스터 문서를 기준으로 작업 맥락을 관리했습니다.
                </p>
              </div>

              <div className="w-full p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-2 shadow-sm">
                <h3 className="text-base font-bold text-gray-900">
                  작업 영역 분리 및 단계별 콘솔 검증
                </h3>
                <p className="text-sm text-gray-600 leading-relaxed">
                  대규모 수정 시 밸런스 데이터, 성좌·보상 로직, UI·튜토리얼처럼 수정 파일이 겹치지 않도록 작업을 나누어 진행하고 매 단계 유니티 콘솔 에러·경고 0건을 확인했습니다.
                </p>
              </div>
            </div>
          </section>

          <hr className="border-gray-200/80" />

          {/* 03. 출시 준비 현황 (전체 가로폭 세로 배치) */}
          <section id="log-status" className="scroll-mt-14 space-y-6">
            <header className="space-y-1">
              <span className="text-xs font-bold text-blue-600">03 · 출시 준비 현황</span>
              <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
                스팀 출시 준비 및 구현 현황
              </h2>
            </header>

            <div className="space-y-4 text-sm">
              <div className="w-full p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-2.5 shadow-sm">
                <div className="font-bold text-blue-700">[구현 및 에디터 검증 완료]</div>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-700 leading-relaxed">
                  <li>전투·성좌 3웨이브 튜토리얼 및 대기실 8단계 안내 투어 연결 완료</li>
                  <li>대장간 장비 강화, 확장성 기반 선택형 타워 덱, 동등 티어 세트 장비 완료</li>
                  <li>보스 대형 체력/실드/잔상 바, 전술 버프 HUD, 세트 도감 및 몬스터 도감 완료</li>
                  <li>훈련소 DPS 시뮬레이터, 한·영 실시간 전환, Beta_V0.3.0 표기 및 콘솔 0에러</li>
                </ul>
              </div>

              <div className="w-full p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-2.5 shadow-sm">
                <div className="font-bold text-amber-700">[기획 의도에 따른 보류]</div>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-700 leading-relaxed">
                  <li><strong>수동 장비 분해 UI:</strong> 중복 획득 시 심연의 가루 자동 환급으로 대체</li>
                  <li><strong>확정 장비 제작 UI:</strong> 파밍 재미 유지를 위해 내부 로직만 두고 미노출</li>
                  <li><strong>보스 대사 컷신:</strong> 출시 필수 요소가 아니므로 씬 미배치 유지</li>
                  <li><strong>신규 모험가 타워 5종:</strong> 출시 이후 확장 로드맵으로 분류</li>
                </ul>
              </div>

              <div className="w-full p-6 rounded-2xl bg-gray-50 border border-gray-200 space-y-2.5 shadow-sm">
                <div className="font-bold text-rose-700">[출시 전 마무리 항목]</div>
                <ul className="list-disc pl-5 space-y-1.5 text-gray-700 leading-relaxed">
                  <li><strong>Steamworks 실제 SDK 연동:</strong> 신분증 심사 완료 후 모의 모드 교체 예정</li>
                  <li><strong>실행 파일(.exe) 추출:</strong> 에디터 클린 컴파일 이후 정식 빌드 생성 예정</li>
                  <li><strong>완주 QA 점검:</strong> 추출된 빌드 기준 최종 난이도·보상 완주 테스트</li>
                </ul>
              </div>
            </div>
          </section>
        </article>
      )}
    </main>
  );
}
