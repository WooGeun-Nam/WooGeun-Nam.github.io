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
    {
      num: "01",
      id: "section-overview",
      title: "게임 개요 및 코어 루프",
    },
    {
      num: "02",
      id: "section-systems",
      title: "핵심 시스템 및 밸런스 설계",
    },
    {
      num: "03",
      id: "section-infinity",
      title: "무한모드 엔드 콘텐츠",
    },
    {
      num: "04",
      id: "section-postmortem",
      title: "PlayFab 데이터 기반 포스트모템",
    },
    {
      num: "05",
      id: "section-art-audio",
      title: "픽셀 아트 및 게임 사운드",
    },
  ];

  return (
    <article className="space-y-10 text-gray-800 font-sans antialiased">
      {/* ===================================================================== */}
      {/* 상단 퀵 인덱스 바 (은은한 블루 웹 스타일) */}
      {/* ===================================================================== */}
      <div className="p-4 rounded-xl bg-blue-50/40 border border-blue-100 text-xs sm:text-sm">
        <div className="flex items-center justify-between border-b border-blue-100 pb-2 mb-3">
          <span className="font-bold text-blue-900 text-xs uppercase tracking-wider">
            기획서 목차
          </span>
          <span className="text-xs text-blue-600 font-medium">클릭 시 해당 섹션으로 이동</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2">
          {tocItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-white text-gray-700 hover:text-blue-600 transition"
            >
              <span className="px-1.5 py-0.5 text-[11px] font-bold bg-blue-500 text-white rounded shrink-0">
                {item.num}
              </span>
              <span className="truncate font-medium">{item.title}</span>
            </a>
          ))}
        </div>
      </div>

      {/* ===================================================================== */}
      {/* 01. 게임 개요 및 코어 루프 */}
      {/* ===================================================================== */}
      <section
        id="section-overview"
        className="scroll-mt-16 bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6"
      >
        <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
          <span className="px-2.5 py-1 text-xs font-bold bg-blue-500 text-white rounded">
            01
          </span>
          <h2 className="text-2xl font-bold text-gray-900">
            게임 개요 및 코어 루프
          </h2>
        </div>

        <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed">
          정형화된 타워 디펜스의 빌드 고착화 문제를 <b className="text-gray-900">인게임 무작위 보상(단기 변동성)</b>과{" "}
          <b className="text-gray-900">가중치 예산 기반 장비 파밍(장기 성장)</b>으로 해결한 2D/3D 로그라이트 타워 디펜스입니다.
        </p>

        <div className="grid md:grid-cols-2 gap-6 pt-2">
          <div className="p-5 rounded-xl bg-blue-50/40 border border-blue-100 space-y-2">
            <h3 className="font-bold text-blue-950 text-base">핵심 컨셉 및 기획 목표</h3>
            <ul className="list-disc pl-4 space-y-1.5 text-xs sm:text-sm text-gray-700 leading-relaxed">
              <li>
                <b>단기적 성장 (In-Game):</b> 첫 웨이브 특성 및 웨이브별 무작위 보상을 통한 판마다 새로운 전략 변수 창출
              </li>
              <li>
                <b>장기적 성장 (Out-Game):</b> 100여 종 장비 파밍과 도감·상점 시스템을 통한 영구 스탯 및 고유 스킬 해금
              </li>
              <li>
                <b>정형화된 메타 개선:</b> 절차적 맵 생성과 타워 상성 분리로 특정 타워 원툴 플레이 방지 및 리플레이 가치 확보
              </li>
            </ul>
          </div>

          <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-2">
            <h3 className="font-bold text-gray-900 text-base">타겟 플레이어</h3>
            <ul className="list-disc pl-4 space-y-1.5 text-xs sm:text-sm text-gray-700 leading-relaxed">
              <li>매 판 달라지는 덱 빌딩과 전략적 배치를 선호하는 게이머</li>
              <li>로그라이크 장르의 선택형 성장 재미를 선호하는 유저</li>
              <li>장비 수집과 상위 난이도 돌파(파밍)를 즐기는 유저</li>
            </ul>
          </div>
        </div>

        {/* 코어 루프 4단계 그리드 */}
        <div className="space-y-3 pt-2">
          <h3 className="font-bold text-gray-900 text-base">4단계 순환 코어 루프 (Core Loop)</h3>
          <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 text-center">
            {[
              {
                step: "STEP 1 · 전투",
                name: "웨이브 방어",
                desc: "무작위 맵 지형 분석 및 타워 배치·스킬 운용",
              },
              {
                step: "STEP 2 · 전략",
                name: "랜덤 보상 선택",
                desc: "첫 웨이브 특성 및 매 웨이브 종료 보상 택 1",
              },
              {
                step: "STEP 3 · 성장",
                name: "장비 파밍·세팅",
                desc: "클리어 장비 획득, 도감 수집 및 RCoin 상점 뽑기",
              },
              {
                step: "STEP 4 · 목표",
                name: "상위 난이도 도전",
                desc: "상위 등급 해금 구간(0~100) 및 무한모드 경쟁",
              },
            ].map((loop, i) => (
              <div key={i} className="p-4 rounded-xl bg-blue-50/30 border border-blue-100">
                <span className="text-xs font-bold text-blue-600">{loop.step}</span>
                <p className="font-bold text-gray-900 text-sm mt-1">{loop.name}</p>
                <p className="text-xs text-gray-600 mt-1 leading-relaxed">{loop.desc}</p>
              </div>
            ))}
          </div>
        </div>

        {/* 대기실 흐름 & 인게임 흐름 */}
        <div className="grid md:grid-cols-2 gap-6 pt-2">
          <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-3">
            <h4 className="font-bold text-gray-900 text-sm">대기실 흐름 (Out-Game: 전략 준비)</h4>
            <ol className="list-decimal pl-4 space-y-1.5 text-xs sm:text-sm text-gray-700 leading-relaxed">
              <li>획득한 장비를 도감에서 확인하고 캐릭터에 장착</li>
              <li>보유한 RCoin을 사용하여 상점에서 신규 장비 뽑기</li>
              <li>목표 보상 확률에 맞춰 도전할 난이도(0~100) 선택</li>
              <li>준비 완료 후 게임 시작</li>
            </ol>
          </div>

          <div className="p-5 rounded-xl bg-blue-50/30 border border-blue-100 space-y-3">
            <h4 className="font-bold text-blue-950 text-sm">인게임 흐름 (In-Game: 단기 빌드업)</h4>
            <ol className="list-decimal pl-4 space-y-1.5 text-xs sm:text-sm text-gray-700 leading-relaxed">
              <li><b>첫 웨이브 특성</b> 선택 (판의 플레이 컨셉 결정)</li>
              <li><b>[타워 건설 → 적 처치 → 재화 획득]</b> 전투 루프 반복</li>
              <li>웨이브 클리어 시 제시되는 <b>랜덤 보상</b> 중 택 1</li>
              <li>최종 웨이브(10W) 클리어 후 장비 보상 획득 및 대기실 복귀</li>
            </ol>
          </div>
        </div>

        {/* 인게임 프리뷰 이미지 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
          <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50 p-2">
            <ImgPrefixed
              src="/Desc/Lobby.png"
              className="w-full object-cover rounded-lg border border-gray-200"
            />
            <p className="text-center text-xs text-gray-600 mt-2 font-medium">
              게임 로비 화면
            </p>
          </div>
          <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50 p-2">
            <ImgPrefixed
              src="/Desc/IngameUI.png"
              className="w-full object-cover rounded-lg border border-gray-200"
            />
            <p className="text-center text-xs text-gray-600 mt-2 font-medium">
              인게임 전투 UI
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 02. 핵심 시스템 및 밸런스 설계 */}
      {/* ===================================================================== */}
      <section
        id="section-systems"
        className="scroll-mt-16 bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-8 shadow-sm space-y-8"
      >
        <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
          <span className="px-2.5 py-1 text-xs font-bold bg-blue-500 text-white rounded">
            02
          </span>
          <h2 className="text-2xl font-bold text-gray-900">
            핵심 시스템 및 밸런스 설계
          </h2>
        </div>

        {/* 2-1. 타워 시스템 */}
        <div className="space-y-4">
          <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-xl text-xs sm:text-sm text-gray-800 leading-relaxed">
            <b className="text-blue-700">기획 의도:</b> 단일 타워 도배를 방지하기 위해 타겟 수(단일/다중), 사거리(근거리/원거리), 공격 속성(물리/마법/복합)별 역할군과 상성을 분리했습니다.
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-3">
            {[
              {
                name: "기본 타워",
                cost: "50TC · 복합형",
                desc: "물리·마법 업그레이드를 모두 받는 초반 기본 단일 공격 타워",
              },
              {
                name: "검사 타워",
                cost: "70TC · 물리형",
                desc: "빠른 공격 속도와 강력한 근거리 단일 관통 데미지",
              },
              {
                name: "창술사 타워",
                cost: "200TC · 물리형",
                desc: "중거리에서 최대 4개 대상 동시 타격 가능한 광역 제압 딜러",
              },
              {
                name: "궁수 타워",
                cost: "130TC · 물리형",
                desc: "넓은 사거리 기반의 다중 타겟 공격 특화",
              },
              {
                name: "레이저 타워",
                cost: "120TC · 마법형",
                desc: "보스·중장갑 적을 제압하는 고DPS 단일 마법 공격",
              },
              {
                name: "사제 타워",
                cost: "100TC · 마법형",
                desc: "피격 대상의 방어력을 감소시키는 시너지 서포터",
              },
            ].map((tower, idx) => (
              <div
                key={idx}
                className="p-4 rounded-xl border border-gray-200 bg-gray-50/70 space-y-1.5"
              >
                <div className="flex items-center justify-between">
                  <h4 className="font-bold text-gray-900 text-sm">{tower.name}</h4>
                  <span className="text-[11px] font-semibold px-2 py-0.5 rounded bg-blue-100 text-blue-800">
                    {tower.cost}
                  </span>
                </div>
                <p className="text-xs text-gray-600 leading-relaxed">{tower.desc}</p>
              </div>
            ))}
          </div>

          <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50 p-2">
            <ImgPrefixed
              src="/Desc/TowerButton.png"
              className="w-full object-cover rounded-lg"
            />
          </div>
        </div>

        {/* 2-2. 스킬 & 웨이브 시스템 */}
        <div className="grid md:grid-cols-2 gap-6 pt-2">
          <div className="space-y-3">
            <h3 className="font-bold text-gray-900 text-base">스킬 시스템 (SP 자원 운용)</h3>
            <ul className="list-disc pl-4 space-y-1.5 text-xs sm:text-sm text-gray-700 leading-relaxed">
              <li>골드와 분리된 독립 자원(SP)으로 위기 대응용 액티브 개입 수단 제공</li>
              <li>SP 초기값 0 / 최대 보유 상한 200 (웨이브 클리어 시 기본 20 SP 확정 지급)</li>
              <li>모든 스킬 사용 시 20 SP 소모 및 <b>웨이브당 스킬별 1회 사용 제한</b></li>
            </ul>
            <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50 p-2">
              <ImgPrefixed
                src="/Desc/SkillButton.png"
                className="w-full object-cover rounded-lg"
              />
            </div>
          </div>

          <div className="space-y-3">
            <h3 className="font-bold text-gray-900 text-base">웨이브 구성 (10 웨이브 검증)</h3>
            <div className="space-y-2">
              <div className="p-3.5 rounded-lg bg-gray-50 border border-gray-200">
                <h5 className="font-bold text-gray-900 text-xs">일반 웨이브 (1~5, 7~9W)</h5>
                <p className="text-xs text-gray-600 mt-0.5">웨이브당 30마리 몬스터 출현 · 광역 딜링 및 기본 재화 수급</p>
              </div>
              <div className="p-3.5 rounded-lg bg-gray-50 border border-gray-200">
                <h5 className="font-bold text-gray-900 text-xs">네임드 웨이브 (6W)</h5>
                <p className="text-xs text-gray-600 mt-0.5">강화된 스탯의 정예 몬스터 등장 · 보스전 대비 단일 화력 중간 점검</p>
              </div>
              <div className="p-3.5 rounded-lg bg-gray-50 border border-gray-200">
                <h5 className="font-bold text-gray-900 text-xs">보스 웨이브 (10W)</h5>
                <p className="text-xs text-gray-600 mt-0.5">스테이지 최종 클리어 목표 · 처치 시 난이도 비례 장비 드랍 보상 획득</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2-3. 무작위 맵 생성 및 난이도 정량화 공식 */}
        <div className="space-y-4 pt-2">
          <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-xl text-xs sm:text-sm text-gray-800 leading-relaxed">
            <b className="text-blue-700">기획 의도:</b> 무작위 생성 맵의 지형 유불리로 인한 점수 불공정성을 해소하기 위해, 지형 3요소를 정량화하여 불리한 맵일수록 높은 점수 배율(High Risk, High Return)을 부여했습니다.
          </div>

          <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-3">
            <div className="p-3.5 bg-white border border-blue-200 rounded-lg text-center font-mono text-xs sm:text-sm font-bold text-blue-700 shadow-sm">
              맵 난이도 점수 = (Base 50 / 경로 길이) × 40 + (Base 8 / 코너 횟수) × 30 + (Base 5 / 평행 간격) × 30
            </div>
            <div className="grid sm:grid-cols-3 gap-3 text-xs text-gray-600">
              <div className="p-3 bg-white rounded border border-gray-200">
                <p className="font-bold text-gray-900">① 경로 길이 (40%)</p>
                <p className="mt-1">기준값 50타일 · 경로가 짧아 적 노출 시간이 줄어들수록 난이도 상승</p>
              </div>
              <div className="p-3 bg-white rounded border border-gray-200">
                <p className="font-bold text-gray-900">② 코너 횟수 (30%)</p>
                <p className="mt-1">기준값 8회 · 꺾이는 구간이 적어 프리딜 구간이 줄수록 난이도 상승</p>
              </div>
              <div className="p-3 bg-white rounded border border-gray-200">
                <p className="font-bold text-gray-900">③ 평행 간격 (30%)</p>
                <p className="mt-1">기준값 5타일 · 단일 타워가 두 경로를 동시 타격하기 어려울수록 상승</p>
              </div>
            </div>
          </div>
        </div>

        {/* 2-4. 난이도 비례 장비 드랍 확률 & 스탯 가중치 */}
        <div className="space-y-4 pt-2">
          <h3 className="font-bold text-gray-900 text-base">
            난이도 비례 장비 드랍 확률 테이블 (EquipmentDropProbability.json)
          </h3>

          <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
            <table className="w-full text-left text-xs sm:text-sm divide-y divide-gray-200">
              <thead className="bg-blue-50/70 text-blue-950 font-bold">
                <tr>
                  <th className="py-2.5 px-4">난이도 구간</th>
                  <th className="py-2.5 px-4 text-center">일반</th>
                  <th className="py-2.5 px-4 text-center">고급</th>
                  <th className="py-2.5 px-4 text-center">희귀</th>
                  <th className="py-2.5 px-4 text-center text-purple-700">서사</th>
                  <th className="py-2.5 px-4 text-center text-blue-700">전설</th>
                  <th className="py-2.5 px-4">구간별 설계 목표</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-gray-100 bg-white">
                <tr>
                  <td className="py-2.5 px-4 font-medium text-gray-900">난이도 0</td>
                  <td className="py-2.5 px-4 text-center text-gray-600">70%</td>
                  <td className="py-2.5 px-4 text-center text-gray-600">25%</td>
                  <td className="py-2.5 px-4 text-center text-gray-600">5%</td>
                  <td className="py-2.5 px-4 text-center text-gray-400">0%</td>
                  <td className="py-2.5 px-4 text-center text-gray-400">0%</td>
                  <td className="py-2.5 px-4 text-gray-600">초반 기초 장비 파밍 구간</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="py-2.5 px-4 font-medium text-gray-900">난이도 20</td>
                  <td className="py-2.5 px-4 text-center text-gray-600">50%</td>
                  <td className="py-2.5 px-4 text-center text-gray-600">32%</td>
                  <td className="py-2.5 px-4 text-center text-gray-600">15%</td>
                  <td className="py-2.5 px-4 text-center font-bold text-purple-700">3% (해금)</td>
                  <td className="py-2.5 px-4 text-center text-gray-400">0%</td>
                  <td className="py-2.5 px-4 text-gray-800 font-medium">1차 돌파 목표: 서사 등급 드랍 풀 개방</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-medium text-gray-900">난이도 40</td>
                  <td className="py-2.5 px-4 text-center text-gray-600">35%</td>
                  <td className="py-2.5 px-4 text-center text-gray-600">35%</td>
                  <td className="py-2.5 px-4 text-center text-gray-600">22%</td>
                  <td className="py-2.5 px-4 text-center font-semibold text-purple-700">8%</td>
                  <td className="py-2.5 px-4 text-center text-gray-400">0%</td>
                  <td className="py-2.5 px-4 text-gray-600">중반 성장 구간: 고급·희귀 비중 확대</td>
                </tr>
                <tr className="bg-gray-50/50">
                  <td className="py-2.5 px-4 font-medium text-gray-900">난이도 60</td>
                  <td className="py-2.5 px-4 text-center text-gray-600">20%</td>
                  <td className="py-2.5 px-4 text-center text-gray-600">30%</td>
                  <td className="py-2.5 px-4 text-center text-gray-600">30%</td>
                  <td className="py-2.5 px-4 text-center font-semibold text-purple-700">15%</td>
                  <td className="py-2.5 px-4 text-center font-bold text-blue-700">5% (해금)</td>
                  <td className="py-2.5 px-4 text-gray-800 font-medium">2차 돌파 목표: 전설 등급 드랍 풀 개방</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-medium text-gray-900">난이도 80</td>
                  <td className="py-2.5 px-4 text-center text-gray-600">10%</td>
                  <td className="py-2.5 px-4 text-center text-gray-600">20%</td>
                  <td className="py-2.5 px-4 text-center text-gray-600">35%</td>
                  <td className="py-2.5 px-4 text-center font-semibold text-purple-700">25%</td>
                  <td className="py-2.5 px-4 text-center font-semibold text-blue-700">10%</td>
                  <td className="py-2.5 px-4 text-gray-600">후반 파밍 구간: 희귀 이상 확률 70% 보장</td>
                </tr>
                <tr className="bg-blue-50/40 font-semibold">
                  <td className="py-2.5 px-4 font-bold text-gray-900">난이도 100</td>
                  <td className="py-2.5 px-4 text-center text-red-600 font-bold">0% (배제)</td>
                  <td className="py-2.5 px-4 text-center text-gray-800">15%</td>
                  <td className="py-2.5 px-4 text-center text-gray-800">35%</td>
                  <td className="py-2.5 px-4 text-center text-purple-700 font-bold">30%</td>
                  <td className="py-2.5 px-4 text-center text-blue-700 font-bold">20%</td>
                  <td className="py-2.5 px-4 text-gray-900 font-bold">최종 파밍: 일반 장비 완전 배제 &amp; 무한모드 개방</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="grid md:grid-cols-2 gap-4 text-xs sm:text-sm text-gray-600 pt-1">
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-1">
              <h5 className="font-bold text-gray-900 text-sm">등급별 총 스탯 예산 (Stat Budget)</h5>
              <p>일반(5pt) ➔ 고급(15pt) ➔ 희귀(30pt) ➔ 서사(60pt+특수옵션) ➔ 전설(120pt+고유스킬)</p>
            </div>
            <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 space-y-1">
              <h5 className="font-bold text-gray-900 text-sm">스탯 가치 가중치 설계</h5>
              <p>공격력(1.0 기본), 공격속도(0.8 오버킬 우대), 사거리(1.2 고효율 고비용) 공식 적용</p>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 03. 무한모드 엔드 콘텐츠 */}
      {/* ===================================================================== */}
      <section
        id="section-infinity"
        className="scroll-mt-16 bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6"
      >
        <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
          <span className="px-2.5 py-1 text-xs font-bold bg-blue-500 text-white rounded">
            03
          </span>
          <h2 className="text-2xl font-bold text-gray-900">
            무한모드 엔드 콘텐츠
          </h2>
        </div>

        <div className="p-4 bg-blue-50/50 border border-blue-100 rounded-xl text-xs sm:text-sm text-gray-800 leading-relaxed">
          <b className="text-blue-700">기획 의도:</b> 파밍을 마친 숙련 유저가 최종 장비 빌드의 한계를 시험하고 글로벌 리더보드로 경쟁하는 순환형 엔드 콘텐츠입니다.
        </div>

        <ul className="list-disc pl-4 space-y-2 text-xs sm:text-sm text-gray-700 leading-relaxed">
          <li><b>개방 조건:</b> 일반 모드 100 난이도 클리어 시 개방</li>
          <li><b>순환형 전투 규칙:</b> 최종 웨이브 없이 웨이브당 2분 제한 (적이 종점에 도달해도 죽지 않고 시작 위치로 순환)</li>
          <li><b>패배 조건:</b> 2분 종료 시 남은 적 1마리당 HP 1씩 감소, HP 0 도달 시 최종 점수 정산</li>
          <li><b>실시간 데미지 분석:</b> 인게임 미터기를 통해 타워별 누적 데미지 기여도 실시간 제공</li>
        </ul>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 pt-2">
          {[
            { img: "/Desc/InfinityMode.png", label: "무한모드 활성화 UI" },
            { img: "/Desc/DamageMeter.png", label: "실시간 데미지 분석기" },
            { img: "/Desc/IngameReaderBoard.png", label: "인게임 글로벌 순위표" },
            { img: "/Desc/PlayFabReaderBoard.png", label: "PlayFab 리더보드 데이터" },
          ].map((item, idx) => (
            <div key={idx} className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50 p-2">
              <ImgPrefixed src={item.img} className="w-full object-cover rounded-lg" />
              <p className="text-center text-[11px] font-medium text-gray-600 mt-1.5">{item.label}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 04. 데이터 기반 포스트모템 */}
      {/* ===================================================================== */}
      <section
        id="section-postmortem"
        className="scroll-mt-16 bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6"
      >
        <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
          <span className="px-2.5 py-1 text-xs font-bold bg-blue-500 text-white rounded">
            04
          </span>
          <h2 className="text-2xl font-bold text-gray-900">
            데이터 기반 포스트모템 (PlayFab 텔레메트리 로그 분석 및 밸런싱)
          </h2>
        </div>

        <ul className="list-disc pl-4 space-y-2 text-xs sm:text-sm text-gray-700 leading-relaxed">
          <li>
            <b>문제 진단 (PlayFab `session_summary` 로그):</b> 넓은 범위를 가진 <b>궁수 타워(픽률 29%)</b>와 장비의 <b>공격 사거리</b> 옵션이 과도한 시너지를 일으켜 세팅이 획일화되고, 고코스트 중거리 딜러인 <b>창술사 타워(픽률 8%)</b>가 소외되는 현상 확인.
          </li>
          <li>
            <b>정량적 밸런스 패치 (Beta_v0.2.1):</b> 전 장비 공격 사거리 옵션 효율 50% 축소, 궁수 기본 스탯 하향, 창술사 공격력 및 관통 효율 상향.
          </li>
          <li>
            <b>패치 결과:</b> 궁수 픽률 정상화(<b>29% ➔ 20%</b>) 및 창술사 픽률 회복(<b>8% ➔ 15%</b>)으로 6종 타워의 고른 선택 분포 달성.
          </li>
        </ul>

        {/* 밸런스 패치 전후 비교 테이블 */}
        <div className="border border-gray-200 rounded-xl overflow-hidden shadow-sm">
          <table className="w-full text-left text-xs sm:text-sm divide-y divide-gray-200">
            <thead className="bg-blue-50/70 text-blue-950 font-bold">
              <tr>
                <th className="py-2.5 px-4">타워 명칭</th>
                <th className="py-2.5 px-4">역할군</th>
                <th className="py-2.5 px-4 text-center">패치 전 선택률</th>
                <th className="py-2.5 px-4 text-center">패치 후 선택률 (v0.2.1)</th>
                <th className="py-2.5 px-4 text-center">변동폭</th>
                <th className="py-2.5 px-4">결과 요약</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-100 bg-white">
              <tr>
                <td className="py-2.5 px-4 font-medium text-gray-900">기본 타워</td>
                <td className="py-2.5 px-4 text-gray-600">초반 보조 / 복합형</td>
                <td className="py-2.5 px-4 text-center text-gray-600">11%</td>
                <td className="py-2.5 px-4 text-center font-semibold text-gray-800">12%</td>
                <td className="py-2.5 px-4 text-center text-gray-500">+1%p</td>
                <td className="py-2.5 px-4 text-gray-600">초반 빌드업 픽률 안정 유지</td>
              </tr>
              <tr className="bg-gray-50/50">
                <td className="py-2.5 px-4 font-medium text-gray-900">검사 타워</td>
                <td className="py-2.5 px-4 text-gray-600">근거리 단일 물리 딜러</td>
                <td className="py-2.5 px-4 text-center text-gray-600">17%</td>
                <td className="py-2.5 px-4 text-center font-semibold text-gray-800">16%</td>
                <td className="py-2.5 px-4 text-center text-gray-500">-1%p</td>
                <td className="py-2.5 px-4 text-gray-600">코너 구간 주력 단일 딜러 유지</td>
              </tr>
              <tr className="bg-blue-50/40">
                <td className="py-2.5 px-4 font-bold text-blue-950">창술사 타워</td>
                <td className="py-2.5 px-4 text-blue-800">중거리 4타겟 물리 딜러</td>
                <td className="py-2.5 px-4 text-center text-red-600 font-bold">8% (최저)</td>
                <td className="py-2.5 px-4 text-center font-bold text-blue-700">15%</td>
                <td className="py-2.5 px-4 text-center font-bold text-blue-700">+7%p</td>
                <td className="py-2.5 px-4 text-gray-900 font-medium">상향 패치 후 중·후반 광역 딜러 채택률 정상화</td>
              </tr>
              <tr className="bg-blue-50/40">
                <td className="py-2.5 px-4 font-bold text-blue-950">궁수 타워</td>
                <td className="py-2.5 px-4 text-blue-800">원거리 다중 물리 딜러</td>
                <td className="py-2.5 px-4 text-center text-red-600 font-bold">29% (과점)</td>
                <td className="py-2.5 px-4 text-center font-bold text-blue-700">20%</td>
                <td className="py-2.5 px-4 text-center font-bold text-blue-700">-9%p</td>
                <td className="py-2.5 px-4 text-gray-900 font-medium">사거리 옵션 하향 및 스탯 조정으로 과점 해소</td>
              </tr>
              <tr>
                <td className="py-2.5 px-4 font-medium text-gray-900">레이저 타워</td>
                <td className="py-2.5 px-4 text-gray-600">단일 고화력 마법 딜러</td>
                <td className="py-2.5 px-4 text-center text-gray-600">17%</td>
                <td className="py-2.5 px-4 text-center font-semibold text-gray-800">18%</td>
                <td className="py-2.5 px-4 text-center text-gray-500">+1%p</td>
                <td className="py-2.5 px-4 text-gray-600">보스·네임드 특화 마법 딜러 유지</td>
              </tr>
              <tr className="bg-gray-50/50">
                <td className="py-2.5 px-4 font-medium text-gray-900">사제 타워</td>
                <td className="py-2.5 px-4 text-gray-600">방어력 감소 디버퍼</td>
                <td className="py-2.5 px-4 text-center text-gray-600">18%</td>
                <td className="py-2.5 px-4 text-center font-semibold text-gray-800">19%</td>
                <td className="py-2.5 px-4 text-center text-gray-500">+1%p</td>
                <td className="py-2.5 px-4 text-gray-600">고난이도 필수 시너지 역할 유지</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 05. 픽셀 아트 및 게임 사운드 */}
      {/* ===================================================================== */}
      <section
        id="section-art-audio"
        className="scroll-mt-16 bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6"
      >
        <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
          <span className="px-2.5 py-1 text-xs font-bold bg-blue-500 text-white rounded">
            05
          </span>
          <h2 className="text-2xl font-bold text-gray-900">
            픽셀 아트 및 게임 사운드
          </h2>
        </div>

        <div className="space-y-6">
          {/* 캐릭터 스프라이트 */}
          <div className="space-y-3">
            <h4 className="font-bold text-gray-900 text-sm">타워 및 몬스터 픽셀 아트</h4>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 grid grid-cols-8 gap-2">
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
                <ImgPrefixed key={i} src={src} className="w-full object-cover [image-rendering:pixelated]" />
              ))}
            </div>
          </div>

          {/* 타일셋 4종 */}
          <div className="space-y-3">
            <h4 className="font-bold text-gray-900 text-sm">4개 테마 타일셋 (초원, 설원, 사막, 마그마)</h4>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 grid grid-cols-4 gap-4">
              {["UI/Tileset.png", "UI/Tileset_Snow.png", "UI/Tileset_Desert.png", "UI/Tileset_Magma.png"].map((src, i) => (
                <ImgPrefixed key={i} src={src} className="w-full object-cover rounded [image-rendering:pixelated]" />
              ))}
            </div>
          </div>

          {/* 게임 음악 */}
          <div className="space-y-3">
            <h4 className="font-bold text-gray-900 text-sm">직접 제작한 BGM 트랙 (6종)</h4>
            <div className="p-4 bg-gray-50 rounded-xl border border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-4 text-xs">
              {[
                { title: "타이틀 테마", src: "/audio/SFX_BGM_MainTitle.mp3" },
                { title: "초원 맵 BGM", src: "/audio/BGM_Game_Default.wav" },
                { title: "설원 맵 BGM", src: "/audio/BGM_Game_Snow.wav" },
                { title: "사막 맵 BGM", src: "/audio/BGM_Game_Desert.mp3" },
                { title: "마그마 맵 BGM", src: "/audio/BGM_Game_Magma.mp3" },
                { title: "스테이지 클리어 BGM", src: "/audio/BGM_ClearScene.mp3" },
              ].map((track, i) => (
                <div key={i} className="p-3 bg-white rounded-lg border border-gray-200 space-y-1.5 shadow-sm">
                  <span className="font-bold text-gray-900">{track.title}</span>
                  <AudioPrefixed src={track.src} controls className="w-full h-8" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 하단 기술서 링크 배너 */}
      <div className="p-5 bg-blue-50/60 border border-blue-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs sm:text-sm text-gray-800 font-medium">
          State 패턴 기반 타워 무기 시스템, 절차적 맵 생성 알고리즘, 오브젝트 풀링 아키텍처는 기술서에서 확인하실 수 있습니다.
        </p>
        <button
          onClick={() => {
            onTabChange("tech");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-lg transition shrink-0 shadow-sm"
        >
          기술서 탭으로 전환 →
        </button>
      </div>
    </article>
  );
};

export default PlanPage;
