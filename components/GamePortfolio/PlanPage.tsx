"use client";

import ImgPrefixed from "./../ImgPrefixed";
import AudioPrefixed from "./../AudioPrefixed";
import React from "react";
import { RogueTowerTab } from "../GamePortfolio";

type CodeAssets = Record<string, string>;

type Props = {
  codeAssets: CodeAssets;
  onTabChange: (tab: RogueTowerTab) => void;
};

const PlanPage = ({ onTabChange }: Props) => {
  const tocItems = [
    { id: "section-overview", tag: "개요 & 코어루프", title: "게임 개요 및 코어 루프" },
    { id: "section-systems", tag: "타워 & 밸런스", title: "타워 시스템 및 난이도 정량화" },
    { id: "section-infinity", tag: "무한 모드", title: "무한모드 엔드 콘텐츠" },
    { id: "section-postmortem", tag: "데이터 밸런싱", title: "PlayFab 데이터 기반 밸런싱" },
    { id: "section-art-audio", tag: "아트 & 사운드", title: "픽셀 아트 및 게임 사운드" },
  ];

  return (
    <article className="space-y-16 text-gray-800 font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* 기획 부문 핵심 요약 카드 */}
      <section className="p-6 rounded-2xl bg-blue-50/40 border border-blue-200/80 space-y-3">
        <div className="flex items-center justify-between border-b border-blue-200/70 pb-2.5">
          <h3 className="font-bold text-blue-950 text-base">기획 핵심 요약</h3>
          <span className="text-xs font-semibold text-blue-700 bg-white px-2.5 py-1 rounded-full border border-blue-200">
            시스템 기획 &amp; 밸런스 설계
          </span>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-3 pt-1 text-xs">
          <div className="p-3 rounded-xl bg-white border border-blue-150">
            <span className="font-bold text-blue-900 block mb-1">코어 루프 기획</span>
            단기 랜덤 보상(웨이브 특성)과 장기 가중치 장비 파밍을 결합해 빌드 고착화 완화
          </div>
          <div className="p-3 rounded-xl bg-white border border-blue-150">
            <span className="font-bold text-blue-900 block mb-1">타워 상성 분리</span>
            단일 타워 편중을 방지하기 위해 6종 타워 역할군(단일·다중, 물리·마법) 분리
          </div>
          <div className="p-3 rounded-xl bg-white border border-blue-150">
            <span className="font-bold text-blue-900 block mb-1">난이도 정량화</span>
            지형 3요소(50/8/5) 가중치 수식으로 유불리를 보정하고 0~100 드랍 확률 설계
          </div>
          <div className="p-3 rounded-xl bg-white border border-blue-150">
            <span className="font-bold text-blue-900 block mb-1">데이터 기반 밸런싱</span>
            PlayFab 플레이 로그 분석으로 편중 타워(궁수 29% ➔ 20%) 선택 비율 조정
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 1. 미니 인덱스 바 */}
      {/* ===================================================================== */}
      <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-gray-200/70 text-xs sm:text-[13px]">
        <span className="font-bold text-gray-400 mr-1 text-[11px] uppercase tracking-wider">목차</span>
        {tocItems.map((item, idx) => (
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

      {/* ===================================================================== */}
      {/* 01. 게임 개요 및 코어 루프 */}
      {/* ===================================================================== */}
      <section id="section-overview" className="scroll-mt-14 space-y-6">
        <header className="space-y-1">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            01 · 게임 개요 및 코어 루프
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            게임 개요 및 4단계 순환 코어 루프
          </h2>
        </header>

        <div className="text-base sm:text-[17px] text-gray-700 leading-relaxed">
          <p>
            타워 디펜스 장르에서 발생하기 쉬운 <strong>&apos;특정 타워 빌드 고착화&apos;</strong>를 완화하기 위해 기획한 2D 로그라이트 타워 디펜스입니다.
            매 판 지형이 바뀌는 <strong>절차적 맵</strong> 위에서 <strong className="text-blue-700">웨이브별 무작위 보상</strong>(단기 성장)과 
            <strong className="text-blue-700"> 가중치 기반 장비 파밍</strong>(장기 성장)을 결합하여 반복 플레이의 재미를 높였습니다.
          </p>
        </div>

        {/* 4단계 순환 코어 루프 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 pt-2">
          {[
            {
              phase: "01",
              name: "웨이브 방어",
              sub: "전략적 배치 & 스킬",
              desc: "매 판 생성되는 무작위 지형을 분석하여 타워를 배치하고 SP 액티브 스킬로 위기 상황에 대응합니다.",
            },
            {
              phase: "02",
              name: "랜덤 보상 선택",
              sub: "단기 빌드 구성",
              desc: "웨이브 클리어마다 주어지는 3종 무작위 보상 중 1개를 선택해 해당 판의 타워 시너지를 구성합니다.",
            },
            {
              phase: "03",
              name: "장비 파밍 & 도감",
              sub: "장기 스탯 성장",
              desc: "최종 보스 처치 후 획득한 장비를 도감에 등록하고, RCoin을 소모해 상점에서 상위 장비를 획득·장착합니다.",
            },
            {
              phase: "04",
              name: "상위 난이도 도전",
              sub: "엔드 콘텐츠 & 랭킹",
              desc: "0~100단계 난이도를 순차적으로 공략해 상위 장비를 해금하고, 무한모드에서 랭킹을 경쟁합니다.",
            },
          ].map((loop, i) => (
            <div key={i} className="p-5 rounded-2xl bg-gray-50/70 border border-gray-200 flex flex-col justify-between">
              <div>
                <span className="text-xs font-extrabold text-blue-600 tracking-wider">{loop.phase} 단계</span>
                <h3 className="text-base font-bold text-gray-900 mt-1">{loop.name}</h3>
                <span className="text-[11px] font-medium text-gray-500 block">{loop.sub}</span>
                <p className="text-xs sm:text-[13px] text-gray-600 mt-2.5 leading-relaxed">{loop.desc}</p>
              </div>
            </div>
          ))}
        </div>

        {/* 대기실 흐름 & 인게임 흐름 */}
        <div className="grid md:grid-cols-2 gap-6 pt-2">
          <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-200 space-y-3">
            <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">아웃게임 루프</span>
            <h4 className="font-bold text-gray-900 text-base">대기실 흐름 (사전 전략 준비)</h4>
            <ol className="list-decimal pl-4 space-y-2 text-xs sm:text-sm text-gray-600 leading-relaxed">
              <li>획득한 장비를 도감에서 확인하고 캐릭터에 슬롯별 장착</li>
              <li>보유한 RCoin을 활용하여 상점에서 신규 장비 뽑기</li>
              <li>목표 보상 확률에 맞춰 도전할 난이도(0~100) 설정 후 출격</li>
            </ol>
          </div>

          <div className="p-6 rounded-2xl bg-blue-50/40 border border-blue-200/80 space-y-3">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">인게임 루프</span>
            <h4 className="font-bold text-blue-950 text-base">인게임 흐름 (웨이브 전투 및 성장)</h4>
            <ol className="list-decimal pl-4 space-y-2 text-xs sm:text-sm text-gray-700 leading-relaxed">
              <li>첫 웨이브 특성을 선택하여 해당 판의 주력 타워 및 빌드 방향 결정</li>
              <li><b>[타워 배치 → 적 처치 → 골드 획득 → 강화]</b> 실시간 전투 진행</li>
              <li>10W 최종 보스 처치 시 난이도 비례 장비 보상을 획득하고 대기실로 복귀</li>
            </ol>
          </div>
        </div>

        {/* 인게임 프리뷰 이미지 쇼케이스 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-5 pt-2">
          <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white p-3 shadow-sm">
            <ImgPrefixed
              src="/Desc/Lobby.png"
              className="w-full object-cover rounded-xl border border-gray-150"
            />
            <p className="text-center text-xs text-gray-500 mt-2.5 font-medium">
              게임 로비 및 장비 세팅 화면
            </p>
          </div>
          <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white p-3 shadow-sm">
            <ImgPrefixed
              src="/Desc/IngameUI.png"
              className="w-full object-cover rounded-xl border border-gray-150"
            />
            <p className="text-center text-xs text-gray-500 mt-2.5 font-medium">
              인게임 전투 및 타워 배치 인터페이스
            </p>
          </div>
        </div>
      </section>

      <hr className="border-gray-200/80" />

      {/* ===================================================================== */}
      {/* 02. 핵심 시스템 및 밸런스 설계 */}
      {/* ===================================================================== */}
      <section id="section-systems" className="scroll-mt-14 space-y-6">
        <header className="space-y-1">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            02 · 핵심 시스템 및 밸런스 설계
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            타워 시스템 및 밸런스 설계
          </h2>
        </header>

        {/* 2-1. 타워 시스템 */}
        <div className="space-y-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200 pb-3">
            <h3 className="text-lg font-bold text-gray-900">
              6종 타워 역할군 분리 (단일·다중, 물리·마법)
            </h3>
            <span className="text-xs text-gray-500 font-medium">
              단일 타워 도배를 방지하기 위한 속성·사거리 상성 구조
            </span>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
            {[
              {
                name: "기본 타워",
                cost: "50TC · 복합형",
                desc: "물리·마법 업그레이드를 모두 받는 초반 기본 단일 공격 타워",
                role: "초반 단일 공격",
              },
              {
                name: "검사 타워",
                cost: "70TC · 물리형",
                desc: "빠른 공격 속도와 높은 근거리 단일 물리 피해 특화",
                role: "근거리 단일 딜러",
              },
              {
                name: "창술사 타워",
                cost: "200TC · 물리형",
                desc: "중거리에서 최대 4개 대상을 동시에 타격하는 다중 공격 딜러",
                role: "중거리 다중 공격(4타겟)",
              },
              {
                name: "궁수 타워",
                cost: "130TC · 물리형",
                desc: "넓은 사거리 기반으로 경로 곳곳의 적을 분산 타격하는 원거리 딜러",
                role: "원거리 다중 딜러",
              },
              {
                name: "레이저 타워",
                cost: "120TC · 마법형",
                desc: "보스 및 고방어력 적을 상대하는 지속 단일 마법 딜러",
                role: "단일 지속 마법 딜러",
              },
              {
                name: "사제 타워",
                cost: "100TC · 마법형",
                desc: "피격 대상의 방어력을 낮춰 아군 타워들의 화력을 높이는 서포터",
                role: "방어력 감소 서포터",
              },
            ].map((tower, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl border border-gray-200/90 bg-white shadow-sm flex flex-col justify-between hover:border-blue-300 transition"
              >
                <div>
                  <div className="flex items-center justify-between mb-2">
                    <span className="text-[11px] font-bold text-blue-600 bg-blue-50 px-2 py-0.5 rounded">
                      {tower.role}
                    </span>
                    <span className="text-xs font-semibold text-gray-500">{tower.cost}</span>
                  </div>
                  <h4 className="font-bold text-gray-900 text-base">{tower.name}</h4>
                  <p className="text-xs sm:text-[13px] text-gray-600 mt-2 leading-relaxed">{tower.desc}</p>
                </div>
              </div>
            ))}
          </div>

          <div className="rounded-2xl overflow-hidden border border-gray-200 bg-gray-50 p-3">
            <ImgPrefixed
              src="/Desc/TowerButton.png"
              className="w-full object-cover rounded-xl"
            />
          </div>
        </div>

        {/* 2-2. 스킬 & 웨이브 시스템 */}
        <div className="grid md:grid-cols-2 gap-6 pt-4">
          <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-200 space-y-4">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">자원 분리 설계</span>
            <h3 className="font-bold text-gray-900 text-base">스킬 시스템 (독립 SP 자원 운용)</h3>
            <div className="space-y-2.5 text-xs sm:text-sm text-gray-600 leading-relaxed">
              <p>
                <strong className="text-gray-900">골드와 분리된 SP:</strong> 타워 건설 재화와 스킬 자원을 분리하여 유저가 위기 상황에서 유연하게 전술적 개입을 할 수 있도록 설계했습니다.
              </p>
              <p>
                <strong className="text-gray-900">상한 200 SP:</strong> 웨이브 클리어 시 기본 20 SP가 확정 충전되며, 모든 액티브 스킬은 20 SP를 소모합니다.
              </p>
              <p>
                <strong className="text-gray-900">웨이브당 1회 제한:</strong> 스킬 난사를 방지하고 필요한 시점에 발동하도록 스킬별 웨이브당 1회 사용 제한을 두었습니다.
              </p>
            </div>
            <div className="rounded-xl overflow-hidden border border-gray-200 bg-white p-2 mt-2">
              <ImgPrefixed
                src="/Desc/SkillButton.png"
                className="w-full object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-200 space-y-4">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">웨이브 구성</span>
            <h3 className="font-bold text-gray-900 text-base">웨이브 구성 (10 웨이브 구조)</h3>
            <div className="space-y-3">
              <div className="p-4 rounded-xl bg-white border border-gray-200">
                <span className="text-xs font-bold text-blue-600">일반 웨이브 (1~5, 7~9W)</span>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  웨이브당 30마리 적이 지속 유입되며, 다중 공격 딜러 배치와 초반 기본 자원 파밍을 유도합니다.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-gray-200">
                <span className="text-xs font-bold text-purple-600">네임드 웨이브 (6W)</span>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  고체력 정예 몬스터가 출현하여, 광역 공격 위주 빌드가 단일 딜러(검사·레이저)를 함께 갖추도록 유도합니다.
                </p>
              </div>
              <div className="p-4 rounded-xl bg-white border border-gray-200">
                <span className="text-xs font-bold text-red-600">보스 웨이브 (10W)</span>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">
                  최종 보스가 등장하며, 처치 시 선택한 난이도 구간에 따라 가중치 장비 보상을 드랍합니다.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* 2-3. 무작위 맵 생성 및 난이도 정량화 공식 */}
        <div className="space-y-4 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200 pb-3">
            <h3 className="text-lg font-bold text-gray-900">
              지형 유불리를 보정하는 맵 난이도 정량화 공식
            </h3>
            <span className="text-xs text-gray-500 font-medium">지형 난이도 점수 산출</span>
          </div>

          <div className="p-6 rounded-2xl bg-gray-900 text-white space-y-4 shadow-sm">
            <div className="flex items-center justify-between border-b border-gray-800 pb-3 text-xs text-gray-400">
              <span>맵 난이도 산출 공식</span>
              <span>가중치 연산</span>
            </div>
            <div className="font-mono text-sm sm:text-base text-emerald-400 text-center py-2">
              Score = (50 / 경로길이) × 40 + (8 / 코너횟수) × 30 + (5 / 평행간격) × 30
            </div>
            <div className="grid sm:grid-cols-3 gap-3 pt-2 text-xs text-gray-300">
              <div className="p-3 bg-gray-800/80 rounded-xl border border-gray-700">
                <strong className="text-white block mb-1">① 경로 길이 (가중치 40%)</strong>
                기준값 50타일. 경로가 짧을수록 적 노출 시간이 감소하므로 난이도 점수 상승
              </div>
              <div className="p-3 bg-gray-800/80 rounded-xl border border-gray-700">
                <strong className="text-white block mb-1">② 코너 횟수 (가중치 30%)</strong>
                기준값 8회. 꺾이는 구간이 적을수록 타워 공격 각도가 좁아져 난이도 상승
              </div>
              <div className="p-3 bg-gray-800/80 rounded-xl border border-gray-700">
                <strong className="text-white block mb-1">③ 평행 간격 (가중치 30%)</strong>
                기준값 5타일. 단일 타워가 2개 라인을 동시에 사정권에 두기 어려울수록 난이도 상승
              </div>
            </div>
          </div>
        </div>

        {/* 2-4. 난이도 비례 장비 드랍 테이블 */}
        <div className="space-y-4 pt-4">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 border-b border-gray-200 pb-3">
            <h3 className="text-lg font-bold text-gray-900">
              난이도별 장비 드랍 확률 테이블 (EquipmentDropProbability.json)
            </h3>
            <span className="text-xs text-gray-500 font-medium">단계적 상위 등급 해금 시스템</span>
          </div>

          <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm divide-y divide-gray-200">
              <thead className="bg-gray-50 text-gray-700 font-semibold">
                <tr>
                  <th className="py-3 px-4">난이도 구간</th>
                  <th className="py-3 px-4 text-center text-gray-600">일반</th>
                  <th className="py-3 px-4 text-center text-emerald-600">고급</th>
                  <th className="py-3 px-4 text-center text-blue-600">희귀</th>
                  <th className="py-3 px-4 text-center text-purple-600">서사</th>
                  <th className="py-3 px-4 text-center text-amber-600">전설</th>
                  <th className="py-3 px-4">구간별 설계 의도</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                <tr className="hover:bg-gray-50/50 transition">
                  <td className="py-3 px-4 font-bold text-gray-900">난이도 0</td>
                  <td className="py-3 px-4 text-center text-gray-600">70%</td>
                  <td className="py-3 px-4 text-center text-emerald-700 font-medium">25%</td>
                  <td className="py-3 px-4 text-center text-blue-700 font-medium">5%</td>
                  <td className="py-3 px-4 text-center text-gray-300">0%</td>
                  <td className="py-3 px-4 text-center text-gray-300">0%</td>
                  <td className="py-3 px-4 text-gray-500 text-xs">초반 기초 장비 세팅 구간</td>
                </tr>
                <tr className="hover:bg-purple-50/30 transition bg-purple-50/20">
                  <td className="py-3 px-4 font-bold text-gray-900">난이도 20</td>
                  <td className="py-3 px-4 text-center text-gray-600">50%</td>
                  <td className="py-3 px-4 text-center text-emerald-700 font-medium">32%</td>
                  <td className="py-3 px-4 text-center text-blue-700 font-medium">15%</td>
                  <td className="py-3 px-4 text-center font-bold text-purple-700">3% (최초 해금)</td>
                  <td className="py-3 px-4 text-center text-gray-300">0%</td>
                  <td className="py-3 px-4 text-purple-900 text-xs font-medium">1차 목표: 서사 등급 드랍 풀 개방</td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition">
                  <td className="py-3 px-4 font-bold text-gray-900">난이도 40</td>
                  <td className="py-3 px-4 text-center text-gray-600">35%</td>
                  <td className="py-3 px-4 text-center text-emerald-700 font-medium">35%</td>
                  <td className="py-3 px-4 text-center text-blue-700 font-medium">22%</td>
                  <td className="py-3 px-4 text-center font-semibold text-purple-700">8%</td>
                  <td className="py-3 px-4 text-center text-gray-300">0%</td>
                  <td className="py-3 px-4 text-gray-500 text-xs">중반 성장: 고급·희귀 장비 비중 확대</td>
                </tr>
                <tr className="hover:bg-amber-50/30 transition bg-amber-50/20">
                  <td className="py-3 px-4 font-bold text-gray-900">난이도 60</td>
                  <td className="py-3 px-4 text-center text-gray-600">20%</td>
                  <td className="py-3 px-4 text-center text-emerald-700 font-medium">30%</td>
                  <td className="py-3 px-4 text-center text-blue-700 font-medium">30%</td>
                  <td className="py-3 px-4 text-center font-semibold text-purple-700">15%</td>
                  <td className="py-3 px-4 text-center font-bold text-amber-600">5% (최초 해금)</td>
                  <td className="py-3 px-4 text-amber-900 text-xs font-medium">2차 목표: 전설 등급 드랍 풀 개방</td>
                </tr>
                <tr className="hover:bg-gray-50/50 transition">
                  <td className="py-3 px-4 font-bold text-gray-900">난이도 80</td>
                  <td className="py-3 px-4 text-center text-gray-600">10%</td>
                  <td className="py-3 px-4 text-center text-emerald-700 font-medium">20%</td>
                  <td className="py-3 px-4 text-center text-blue-700 font-medium">35%</td>
                  <td className="py-3 px-4 text-center font-semibold text-purple-700">25%</td>
                  <td className="py-3 px-4 text-center font-semibold text-amber-600">10%</td>
                  <td className="py-3 px-4 text-gray-500 text-xs">후반 안정화: 희귀 이상 확률 70% 보장</td>
                </tr>
                <tr className="hover:bg-amber-100/40 transition bg-amber-50/30">
                  <td className="py-3 px-4 font-bold text-gray-900">난이도 100</td>
                  <td className="py-3 px-4 text-center text-red-600 font-bold">0% (일반 제외)</td>
                  <td className="py-3 px-4 text-center text-emerald-700 font-medium">15%</td>
                  <td className="py-3 px-4 text-center text-blue-700 font-medium">35%</td>
                  <td className="py-3 px-4 text-center text-purple-700 font-bold">30%</td>
                  <td className="py-3 px-4 text-center text-amber-600 font-bold">20%</td>
                  <td className="py-3 px-4 text-amber-950 font-bold text-xs">최종 엔드 파밍: 일반 등급 제외 &amp; 무한모드 해금</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid sm:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-600 pt-2">
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
              <span className="font-bold text-gray-900 block mb-1">등급별 스탯 분배 기준</span>
              일반(5pt) ➔ 고급(15pt) ➔ 희귀(30pt) ➔ 서사(60pt+특수옵션) ➔ 전설(120pt+고유스킬)
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200">
              <span className="font-bold text-gray-900 block mb-1">스탯 가중치 설계</span>
              공격력(1.0 기본), 공격속도(0.8 오버킬 보정), 사거리(1.2 고효율 고비용) 공식 적용
            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-200/80" />

      {/* ===================================================================== */}
      {/* 03. 무한모드 엔드 콘텐츠 */}
      {/* ===================================================================== */}
      <section id="section-infinity" className="scroll-mt-14 space-y-6">
        <header className="space-y-1">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            03 · 무한모드 엔드 콘텐츠
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            무한모드 엔드 콘텐츠 및 글로벌 리더보드
          </h2>
        </header>

        <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed">
          장비 세팅을 마친 숙련 유저가 최종 화력을 시험하고 다른 유저와 점수를 겨루는 순환형 엔드 콘텐츠입니다. 
          일반 모드 100 난이도를 클리어하면 해금됩니다.
        </p>

        <div className="grid md:grid-cols-3 gap-4 pt-2">
          <div className="p-5 rounded-2xl bg-gray-50/80 border border-gray-200">
            <span className="text-xs font-bold text-blue-600">규칙 01</span>
            <h4 className="font-bold text-gray-900 text-sm mt-1">2분 제한 &amp; 경로 순환</h4>
            <p className="text-xs text-gray-600 mt-2 leading-relaxed">
              최종 웨이브 없이 웨이브당 2분 제한으로 진행되며, 적이 종점에 도달하면 출발점으로 되돌아가 경로를 계속 순환합니다.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-gray-50/80 border border-gray-200">
            <span className="text-xs font-bold text-blue-600">규칙 02</span>
            <h4 className="font-bold text-gray-900 text-sm mt-1">잔여 적 비례 HP 차감</h4>
            <p className="text-xs text-gray-600 mt-2 leading-relaxed">
              2분 제한 시간 종료 시 맵에 남은 적 1마리당 기지 HP가 1씩 차감되며, 0에 도달하면 최종 점수를 산출합니다.
            </p>
          </div>
          <div className="p-5 rounded-2xl bg-gray-50/80 border border-gray-200">
            <span className="text-xs font-bold text-blue-600">규칙 03</span>
            <h4 className="font-bold text-gray-900 text-sm mt-1">실시간 데미지 미터기</h4>
            <p className="text-xs text-gray-600 mt-2 leading-relaxed">
              전투 중 6종 타워의 누적 피해량과 초당 피해량(DPS) 비중을 실시간 그래프로 제공하여 빌드 효율을 확인할 수 있습니다.
            </p>
          </div>
        </div>

        {/* 무한모드 프리뷰 4분할 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 pt-2">
          {[
            { img: "/Desc/InfinityMode.png", label: "무한모드 활성화 UI" },
            { img: "/Desc/DamageMeter.png", label: "실시간 데미지 분석기" },
            { img: "/Desc/IngameReaderBoard.png", label: "인게임 글로벌 순위표" },
            { img: "/Desc/PlayFabReaderBoard.png", label: "PlayFab 리더보드 데이터" },
          ].map((item, idx) => (
            <div key={idx} className="rounded-2xl overflow-hidden border border-gray-200 bg-white p-2.5 shadow-sm">
              <ImgPrefixed src={item.img} className="w-full object-cover rounded-xl border border-gray-150" />
              <p className="text-center text-xs font-medium text-gray-600 mt-2">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      <hr className="border-gray-200/80" />

      {/* ===================================================================== */}
      {/* 04. 데이터 기반 밸런스 개선 */}
      {/* ===================================================================== */}
      <section id="section-postmortem" className="scroll-mt-14 space-y-6">
        <header className="space-y-1">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            04 · 데이터 기반 밸런스 개선
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            PlayFab 플레이 로그 기반 밸런스 패치
          </h2>
        </header>

        <div className="grid md:grid-cols-3 gap-5 pt-2">
          <div className="p-5 rounded-2xl bg-rose-50/60 border border-rose-200 space-y-2">
            <span className="text-xs font-bold text-rose-700 uppercase">1. 문제 진단</span>
            <h4 className="font-bold text-gray-900 text-sm">궁수 타워 편중 (29%)</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              원거리 다중 타겟인 궁수 타워와 장비의 사거리 옵션이 높은 효율을 보여 선택률 29%로 편중되고, 중거리 딜러인 창술사(8%)는 선택률이 낮음을 확인했습니다.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-amber-50/60 border border-amber-200 space-y-2">
            <span className="text-xs font-bold text-amber-700 uppercase">2. 밸런스 패치</span>
            <h4 className="font-bold text-gray-900 text-sm">Beta_v0.2.1 수치 조정</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              장비 스탯 분배표의 사거리 옵션 가중치를 50% 축소하고 궁수 기본 사거리를 하향 조정했습니다. 동시에 창술사의 기본 공격력과 관통 효율을 상향했습니다.
            </p>
          </div>

          <div className="p-5 rounded-2xl bg-emerald-50/60 border border-emerald-200 space-y-2">
            <span className="text-xs font-bold text-emerald-700 uppercase">3. 결과 확인</span>
            <h4 className="font-bold text-gray-900 text-sm">타워 선택 비율 균형 회복</h4>
            <p className="text-xs text-gray-600 leading-relaxed">
              궁수 타워의 선택 비율이 20%로 완화되고 창술사 선택률이 15%로 상승하여, 6개 타워가 12~20% 범위의 고른 선택 분포를 기록했습니다.
            </p>
          </div>
        </div>

        {/* 밸런스 패치 비교 테이블 */}
        <div className="space-y-3 pt-2">
          <h3 className="text-base font-bold text-gray-900">
            Beta_v0.2.1 패치 전후 타워 선택 비율 비교
          </h3>
          <div className="overflow-x-auto border border-gray-200 rounded-xl shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm divide-y divide-gray-200">
              <thead className="bg-gray-50 text-gray-700 font-semibold">
                <tr>
                  <th className="py-3 px-4">타워 명칭</th>
                  <th className="py-3 px-4">역할군</th>
                  <th className="py-3 px-4 text-center">패치 전</th>
                  <th className="py-3 px-4 text-center">패치 후 (v0.2.1)</th>
                  <th className="py-3 px-4 text-center">변동폭</th>
                  <th className="py-3 px-4">분석 요약</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                <tr className="hover:bg-blue-50/20 transition">
                  <td className="py-3 px-4 font-bold text-gray-900">기본 타워</td>
                  <td className="py-3 px-4 text-gray-600">초반 보조 / 복합형</td>
                  <td className="py-3 px-4 text-center text-gray-600">11%</td>
                  <td className="py-3 px-4 text-center font-bold text-gray-800">12%</td>
                  <td className="py-3 px-4 text-center text-gray-500">+1%p</td>
                  <td className="py-3 px-4 text-gray-600 text-xs">초반 빌드업 타워 역할 안정 유지</td>
                </tr>
                <tr className="hover:bg-blue-50/20 transition">
                  <td className="py-3 px-4 font-bold text-gray-900">검사 타워</td>
                  <td className="py-3 px-4 text-gray-600">근거리 단일 물리 딜러</td>
                  <td className="py-3 px-4 text-center text-gray-600">17%</td>
                  <td className="py-3 px-4 text-center font-bold text-gray-800">16%</td>
                  <td className="py-3 px-4 text-center text-gray-500">-1%p</td>
                  <td className="py-3 px-4 text-gray-600 text-xs">코너 구간 주력 단일 딜러 유지</td>
                </tr>
                <tr className="hover:bg-blue-50/20 transition bg-blue-50/40">
                  <td className="py-3 px-4 font-bold text-blue-950">창술사 타워</td>
                  <td className="py-3 px-4 text-blue-800">중거리 4타겟 관통 딜러</td>
                  <td className="py-3 px-4 text-center text-rose-600 font-bold">8% (최저)</td>
                  <td className="py-3 px-4 text-center font-bold text-blue-700">15%</td>
                  <td className="py-3 px-4 text-center font-bold text-blue-700">+7%p</td>
                  <td className="py-3 px-4 text-blue-900 text-xs font-medium">상향 패치로 중·후반 다중 공격 딜러 채택률 회복</td>
                </tr>
                <tr className="hover:bg-blue-50/20 transition bg-blue-50/40">
                  <td className="py-3 px-4 font-bold text-blue-950">궁수 타워</td>
                  <td className="py-3 px-4 text-blue-800">원거리 다중 물리 딜러</td>
                  <td className="py-3 px-4 text-center text-rose-600 font-bold">29% (편중)</td>
                  <td className="py-3 px-4 text-center font-bold text-blue-700">20%</td>
                  <td className="py-3 px-4 text-center font-bold text-blue-700">-9%p</td>
                  <td className="py-3 px-4 text-blue-900 text-xs font-medium">사거리 효율 조정으로 특정 타워 편중 완화</td>
                </tr>
                <tr className="hover:bg-blue-50/20 transition">
                  <td className="py-3 px-4 font-bold text-gray-900">레이저 타워</td>
                  <td className="py-3 px-4 text-gray-600">단일 고화력 마법 딜러</td>
                  <td className="py-3 px-4 text-center text-gray-600">17%</td>
                  <td className="py-3 px-4 text-center font-bold text-gray-800">18%</td>
                  <td className="py-3 px-4 text-center text-gray-500">+1%p</td>
                  <td className="py-3 px-4 text-gray-600 text-xs">보스 특화 지속 마법 딜러 유지</td>
                </tr>
                <tr className="hover:bg-blue-50/20 transition">
                  <td className="py-3 px-4 font-bold text-gray-900">사제 타워</td>
                  <td className="py-3 px-4 text-gray-600">방어력 감소 디버퍼</td>
                  <td className="py-3 px-4 text-center text-gray-600">18%</td>
                  <td className="py-3 px-4 text-center font-bold text-gray-800">19%</td>
                  <td className="py-3 px-4 text-center text-gray-500">+1%p</td>
                  <td className="py-3 px-4 text-gray-600 text-xs">고난이도 필수 시너지 서포터 유지</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      <hr className="border-gray-200/80" />

      {/* ===================================================================== */}
      {/* 05. 픽셀 아트 및 게임 사운드 */}
      {/* ===================================================================== */}
      <section id="section-art-audio" className="scroll-mt-14 space-y-6">
        <header className="space-y-1">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-wider">
            05 · 픽셀 아트 및 게임 사운드
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            1인 제작 픽셀 아트 및 오리지널 BGM
          </h2>
        </header>

        <div className="space-y-6">
          {/* 캐릭터 스프라이트 */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-gray-900 text-sm">타워 및 캐릭터 픽셀 스프라이트</h4>
            <div className="p-5 bg-gray-50 rounded-2xl border border-gray-200 grid grid-cols-4 sm:grid-cols-8 gap-3">
              {[
                "/character/CharacterBase01.png",
                "/character/WarriorTower01.png",
                "/character/SpearTower01.png",
                "/character/ArcherTower01.png",
                "/character/LaserTower01.png",
                "/character/BuffTower01.png",
                "/character/WarriorTower02.png",
                "/character/WarriorTower03.png",
              ].map((src, i) => (
                <div key={i} className="p-2 bg-white rounded-xl border border-gray-150 flex items-center justify-center">
                  <ImgPrefixed src={src} className="w-full object-cover [image-rendering:pixelated]" />
                </div>
              ))}
            </div>
          </div>

          {/* 타일셋 4종 */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-gray-900 text-sm">4대 테마 타일셋 (초원, 설원, 사막, 마그마)</h4>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
              {[
                { src: "UI/Tileset.png", label: "초원 테마" },
                { src: "UI/Tileset_Snow.png", label: "설원 테마" },
                { src: "UI/Tileset_Desert.png", label: "사막 테마" },
                { src: "UI/Tileset_Magma.png", label: "마그마 테마" },
              ].map((item, i) => (
                <div key={i} className="p-3 bg-white rounded-2xl border border-gray-200 shadow-sm">
                  <ImgPrefixed src={item.src} className="w-full object-cover rounded-xl [image-rendering:pixelated]" />
                  <p className="text-center text-xs font-semibold text-gray-700 mt-2">{item.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 오리지널 BGM 트랙 */}
          <div className="space-y-2.5">
            <h4 className="font-bold text-gray-900 text-sm">직접 작곡한 오리지널 BGM 트랙 (6종)</h4>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {[
                { title: "타이틀 테마", src: "/audio/SFX_BGM_MainTitle.mp3" },
                { title: "초원 맵 BGM", src: "/audio/BGM_Game_Default.wav" },
                { title: "설원 맵 BGM", src: "/audio/BGM_Game_Snow.wav" },
                { title: "사막 맵 BGM", src: "/audio/BGM_Game_Desert.mp3" },
                { title: "마그마 맵 BGM", src: "/audio/BGM_Game_Magma.mp3" },
                { title: "스테이지 클리어 BGM", src: "/audio/BGM_ClearScene.mp3" },
              ].map((track, i) => (
                <div key={i} className="p-4 bg-white rounded-2xl border border-gray-200 space-y-2 shadow-sm">
                  <span className="font-bold text-gray-900 text-sm">{track.title}</span>
                  <AudioPrefixed src={track.src} controls className="w-full h-8" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 하단 기술서 전환 배너 */}
      <div className="p-6 bg-gradient-to-r from-blue-50/70 to-indigo-50/40 border border-blue-200/80 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-gray-900 text-sm sm:text-base">
            타워 무기 State 패턴과 절차적 맵 생성 코드가 궁금하신가요?
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            기술서 탭에서 구체적인 아키텍처 다이어그램과 C# 소스 코드를 확인하실 수 있습니다.
          </p>
        </div>
        <button
          onClick={() => {
            onTabChange("tech");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-xl transition shrink-0 shadow-sm"
        >
          기술서 탭으로 전환 →
        </button>
      </div>
    </article>
  );
};

export default PlanPage;
