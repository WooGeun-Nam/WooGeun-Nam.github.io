"use client";

import ImgPrefixed from "./../ImgPrefixed";
import AudioPrefixed from "./../AudioPrefixed";
import React from "react";

type CodeAssets = Record<string, string>;

type Props = {
  codeAssets: CodeAssets;
  onTabChange: (tab: "deploy" | "plan" | "tech" | "devlog") => void;
};

const PlanPage = ({ onTabChange }: Props) => {
  const tocItems = [
    {
      num: "01",
      href: "#section-overview",
      title: "게임 개요 및 코어 루프",
      desc: "핵심 컨셉, 기획 목표, 인게임·아웃게임 순환 흐름",
    },
    {
      num: "02",
      href: "#section-systems",
      title: "핵심 시스템 및 밸런스 설계",
      desc: "타워·스킬·보상 시스템, 맵 난이도 공식, 드랍 확률 및 스탯 가중치 예산",
    },
    {
      num: "03",
      href: "#section-infinity",
      title: "무한모드 시스템",
      desc: "순환형 타임어택 규칙, 글로벌 리더보드, 실시간 데미지 분석기",
    },
    {
      num: "04",
      href: "#section-postmortem",
      title: "데이터 기반 포스트모템",
      desc: "PlayFab 전투 로그 분석 및 Beta_v0.2.1 패치 전·후 타워 선택률 비교",
    },
    {
      num: "05",
      href: "#section-art-audio",
      title: "디자인 및 게임 음악",
      desc: "픽셀 아트 캐릭터·애니메이션, 스킬 아이콘, 타일셋 4종, BGM 6종",
    },
  ];

  return (
    <div className="space-y-12 text-gray-800">
      <title>RogueTower 게임기획서</title>

      {/* ===================================================================== */}
      {/* 문서 헤더 & 목차 */}
      {/* ===================================================================== */}
      <div className="border-b border-gray-200 pb-8">
        <div className="text-center max-w-3xl mx-auto pt-2 mb-8">
          <h1 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
            RogueTower 게임 기획서
          </h1>
          <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed mb-6">
            정형화된 타워 디펜스의 빌드 고착화 문제를{" "}
            <b className="text-gray-900">인게임 무작위 보상(단기 변동성)</b>과
            <br />
            <b className="text-gray-900">가중치 예산 기반 장비 파밍(장기 성장)</b>으로
            해결한 2D 로그라이트 타워 디펜스 기획서입니다.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "#로그라이트",
              "#타워 디펜스",
              "#코어루프 설계",
              "#절차적 맵 난이도 공식",
              "#가중치 스탯 예산",
              "#데이터 기반 밸런싱",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3.5 py-1 bg-blue-50 text-blue-700 border border-blue-200 text-xs sm:text-sm font-medium rounded-full"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 목차 박스 */}
        <div className="max-w-4xl mx-auto bg-gray-50 border border-gray-200 rounded-xl p-5">
          <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-4">
            <h2 className="text-base font-bold text-gray-900 border-l-4 border-blue-500 pl-2.5">
              기획서 목차
            </h2>
            <span className="text-xs text-gray-500">
              클릭 시 해당 섹션으로 이동
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-3">
            {tocItems.map((item) => (
              <a
                key={item.num}
                href={item.href}
                className="group flex items-start gap-3 p-3.5 bg-white hover:bg-blue-50/60 border border-gray-200 hover:border-blue-400 rounded-lg transition"
              >
                <span className="px-2 py-0.5 text-xs font-bold bg-blue-500 text-white rounded shrink-0 mt-0.5">
                  {item.num}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <p className="text-sm sm:text-[15px] font-bold text-gray-900 group-hover:text-blue-600 truncate">
                      {item.title}
                    </p>
                    <span className="text-xs text-gray-400 group-hover:text-blue-600 font-bold shrink-0">
                      ↓
                    </span>
                  </div>
                  <p className="text-xs text-gray-500 mt-1 truncate">
                    {item.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* 01. 게임 개요 및 코어 루프 */}
      {/* ===================================================================== */}
      <section
        id="section-overview"
        className="scroll-mt-20 bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8"
      >
        <div className="flex items-center gap-2.5 border-b border-gray-200 pb-4 mb-6">
          <span className="px-2.5 py-1 text-xs font-bold bg-blue-500 text-white rounded">
            01
          </span>
          <h2 className="text-2xl font-bold text-gray-900">
            게임 개요 및 코어 루프
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-5 bg-blue-50/40 border border-blue-100 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              핵심 컨셉 및 기획 목표
            </h3>
            <ul className="list-disc pl-5 space-y-2.5 text-sm sm:text-[15px] text-gray-800 leading-relaxed">
              <li>
                <b>단기적 성장 (In-Game) :</b> 첫 웨이브 특성 및 웨이브별 무작위 보상을 통한 판마다 새로운 전략 변수 창출
              </li>
              <li>
                <b>장기적 성장 (Out-Game) :</b> 100여 종 장비 파밍과 도감·상점 시스템을 통한 영구 스탯 및 고유 스킬 해금
              </li>
              <li>
                <b>정형화된 메타 개선 :</b> 무작위 맵 생성과 타워 상성 분리로 특정 타워 원툴 플레이 방지 및 리플레이 가치 확보
              </li>
            </ul>
          </div>

          <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg">
            <h3 className="text-lg font-bold text-gray-900 mb-3">
              타겟 플레이어
            </h3>
            <ul className="list-disc pl-5 space-y-2.5 text-sm sm:text-[15px] text-gray-800 leading-relaxed">
              <li>매 판 달라지는 덱 빌딩과 전략적 배치를 선호하는 게이머</li>
              <li>로그라이크 장르의 선택형 성장 재미를 선호하는 유저</li>
              <li>장비 수집과 상위 난이도 돌파(파밍)를 즐기는 유저</li>
            </ul>
          </div>
        </div>

        {/* 코어 루프 4단계 요약 */}
        <div className="mb-8">
          <h3 className="text-lg font-bold text-gray-900 border-l-4 border-blue-500 pl-3 mb-4">
            코어 루프 (Core Loop)
          </h3>
          <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
            {[
              {
                step: "STEP 1 · 전투",
                title: "웨이브 방어",
                desc: "무작위 맵 지형 분석 및 타워 배치·스킬 운용",
              },
              {
                step: "STEP 2 · 전략",
                title: "랜덤 보상 선택",
                desc: "첫 웨이브 특성 및 매 웨이브 종료 보상 택 1",
              },
              {
                step: "STEP 3 · 성장",
                title: "장비 파밍·세팅",
                desc: "클리어 장비 획득, 도감 수집 및 RCoin 상점 뽑기",
              },
              {
                step: "STEP 4 · 목표",
                title: "상위 난이도 도전",
                desc: "상위 등급 해금 구간(0~100) 및 무한모드 경쟁",
              },
            ].map((loop, i) => (
              <div
                key={i}
                className="p-4 bg-blue-50/40 border border-blue-200 rounded-lg"
              >
                <span className="text-xs font-bold text-blue-600">
                  {loop.step}
                </span>
                <p className="font-bold text-base text-gray-900 mt-1">
                  {loop.title}
                </p>
                <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-relaxed">
                  {loop.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* 대기실 흐름 & 인게임 흐름 */}
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg">
            <h4 className="font-bold mb-1 text-base text-center text-gray-900">
              대기실 흐름 (Out-Game)
            </h4>
            <p className="text-xs text-center text-blue-600 font-semibold mb-4">
              전략 준비 및 장비 세팅 단계
            </p>
            <ol className="list-decimal list-inside space-y-2.5 text-sm sm:text-[15px] text-gray-800">
              <li className="p-2.5 bg-white rounded border border-gray-200">
                획득한 장비를 도감에서 확인하고 캐릭터에 장착
              </li>
              <li className="p-2.5 bg-white rounded border border-gray-200">
                보유한 RCoin을 사용하여 상점에서 신규 장비 뽑기
              </li>
              <li className="p-2.5 bg-white rounded border border-gray-200">
                목표 보상 확률에 맞춰 도전할 난이도(0~100) 선택
              </li>
              <li className="p-2.5 bg-white rounded border border-gray-200">
                준비 완료 후 게임 시작
              </li>
            </ol>
          </div>

          <div className="p-5 bg-blue-50/30 border border-blue-200 rounded-lg">
            <h4 className="font-bold mb-1 text-base text-center text-gray-900">
              인게임 흐름 (In-Game)
            </h4>
            <p className="text-xs text-center text-blue-600 font-semibold mb-4">
              전투와 랜덤성을 통한 단기 빌드업 단계
            </p>
            <ol className="list-decimal list-inside space-y-2.5 text-sm sm:text-[15px] text-gray-800">
              <li className="p-2.5 bg-white rounded border border-blue-100">
                <b>첫 웨이브 특성</b> 선택 (판의 플레이 컨셉 결정)
              </li>
              <li className="p-2.5 bg-white rounded border border-blue-100">
                <b>[타워 건설 → 적 처치 → 재화 획득]</b> 전투 루프 반복
              </li>
              <li className="p-2.5 bg-white rounded border border-blue-100">
                웨이브 클리어 시 제시되는 <b>랜덤 보상</b> 중 택 1
              </li>
              <li className="p-2.5 bg-white rounded border border-blue-100">
                최종 웨이브(10W) 클리어 후 장비 보상 획득 및 대기실 복귀
              </li>
            </ol>
          </div>
        </div>

        <div className="p-4 bg-gray-50 rounded-lg border border-gray-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <div>
            <ImgPrefixed
              src="/Desc/Lobby.png"
              className="w-full object-cover rounded border border-gray-200"
            />
            <figcaption className="text-center text-xs text-gray-600 mt-2">
              게임 로비 화면
            </figcaption>
          </div>
          <div>
            <ImgPrefixed
              src="/Desc/IngameUI.png"
              className="w-full object-cover rounded border border-gray-200"
            />
            <figcaption className="text-center text-xs text-gray-600 mt-2">
              인게임 전투 UI
            </figcaption>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 02. 핵심 시스템 및 밸런스 설계 */}
      {/* ===================================================================== */}
      <section
        id="section-systems"
        className="scroll-mt-20 bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8"
      >
        <div className="flex items-center gap-2.5 border-b border-gray-200 pb-4 mb-8">
          <span className="px-2.5 py-1 text-xs font-bold bg-blue-500 text-white rounded">
            02
          </span>
          <h2 className="text-2xl font-bold text-gray-900">
            핵심 시스템 및 밸런스 설계
          </h2>
        </div>

        <div className="space-y-12">
          {/* 2-1. 타워 시스템 */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 border-l-4 border-blue-500 pl-3 mb-3">
              타워 시스템
            </h3>
            <p className="text-sm sm:text-[15px] text-gray-700 bg-blue-50/50 border border-blue-100 rounded-lg px-4 py-2.5 mb-5 leading-relaxed">
              <b className="text-blue-700">기획 의도 :</b> 단일 타워 도배를 방지하기 위해 타겟 수(단일/다중), 사거리(근거리/원거리), 공격 속성(물리/마법/복합)별 역할군과 상성을 분리
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-lg">
                <p className="font-bold text-sm sm:text-base text-gray-900">
                  보스 몬스터 특화형
                </p>
                <p className="text-sm text-gray-600 mt-1">단일 타겟, 높은 데미지</p>
              </div>
              <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-lg">
                <p className="font-bold text-sm sm:text-base text-gray-900">
                  일반 몬스터 특화형
                </p>
                <p className="text-sm text-gray-600 mt-1">다중 타겟, 광역 제압</p>
              </div>
              <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-lg">
                <p className="font-bold text-sm sm:text-base text-gray-900">
                  근거리형 타워
                </p>
                <p className="text-sm text-gray-600 mt-1">낮은 사거리, 높은 화력</p>
              </div>
              <div className="p-3.5 bg-gray-50 border border-gray-200 rounded-lg">
                <p className="font-bold text-sm sm:text-base text-gray-900">
                  원거리 / 버퍼형
                </p>
                <p className="text-sm text-gray-600 mt-1">높은 사거리, 방어력 감소</p>
              </div>
            </div>

            <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg mb-5">
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-[15px] text-gray-800 leading-relaxed">
                <li>
                  <b>타워 생산 비용 :</b> TC(TowerCost) 단위 사용 (인게임 아이콘 표기)
                </li>
                <li>
                  <b>타워 공격 타입 :</b> 물리형, 마법형, 복합형 3분류
                </li>
                <li>
                  <b>업그레이드 규칙 :</b> 공격 타입에 맞는 업그레이드 수치를 적용받으며, 복합형(기본 타워)은 물리·마법 두 업그레이드를 합산 적용
                </li>
              </ul>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
              {[
                {
                  name: "기본 타워",
                  cost: "50TC / 복합형",
                  desc: "물리·마법 업그레이드를 모두 받는 단일 공격 타워",
                },
                {
                  name: "검사 타워",
                  cost: "70TC / 물리형",
                  desc: "높은 공격 속도와 강력한 근거리 단일 데미지",
                },
                {
                  name: "창술사 타워",
                  cost: "200TC / 물리형",
                  desc: "중거리에서 최대 4개 대상 동시 타격",
                },
                {
                  name: "궁수 타워",
                  cost: "130TC / 물리형",
                  desc: "넓은 사거리 기반의 다중 타겟 공격",
                },
                {
                  name: "레이저 타워",
                  cost: "120TC / 마법형",
                  desc: "보스·중장갑 적을 제압하는 고DPS 단일 마법 공격",
                },
                {
                  name: "사제 타워",
                  cost: "100TC / 마법형",
                  desc: "피격 대상의 방어력을 감소시키는 시너지 디버퍼",
                },
              ].map((tower, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-gray-50 border border-gray-200 rounded-lg"
                >
                  <div className="flex items-center justify-between mb-1.5">
                    <h4 className="font-bold text-base text-gray-900">
                      {tower.name}
                    </h4>
                    <span className="text-xs font-semibold px-2.5 py-0.5 bg-blue-100 text-blue-800 rounded">
                      {tower.cost}
                    </span>
                  </div>
                  <p className="text-sm text-gray-700 leading-relaxed">
                    {tower.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
              <ImgPrefixed
                src="/Desc/TowerButton.png"
                className="w-full object-cover rounded"
              />
            </div>
          </div>

          {/* 2-2. 스킬 시스템 & 웨이브 시스템 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div>
              <h3 className="text-lg font-bold text-gray-900 border-l-4 border-blue-500 pl-3 mb-3">
                스킬 시스템
              </h3>
              <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg mb-4">
                <ul className="list-disc pl-5 space-y-2.5 text-sm sm:text-[15px] text-gray-800 leading-relaxed">
                  <li>골드와 분리된 독립 자원(SP)으로 위기 대응용 액티브 개입 수단 제공</li>
                  <li>SP 초기값 0 / 최대 보유 상한 200</li>
                  <li>웨이브 클리어 시 기본 20 SP 확정 지급</li>
                  <li>모든 스킬 사용 시 20 SP 소모 및 <b>웨이브당 스킬별 1회 사용 제한</b></li>
                </ul>
              </div>
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <ImgPrefixed
                  src="/Desc/SkillButton.png"
                  className="w-full object-cover rounded"
                />
              </div>
            </div>

            <div>
              <h3 className="text-lg font-bold text-gray-900 border-l-4 border-blue-500 pl-3 mb-3">
                웨이브 시스템
              </h3>
              <p className="text-sm sm:text-[15px] text-gray-700 bg-blue-50/50 border border-blue-100 rounded-lg px-4 py-2.5 mb-4 leading-relaxed">
                <b className="text-blue-700">기획 의도 :</b> 광역 웨이브 처리력과 단일 보스 돌파력을 단계별로 검증하는 10웨이브 구성
              </p>
              <div className="space-y-3">
                <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <h4 className="font-bold text-base text-gray-900">
                    일반 웨이브 (1~5, 7~9 웨이브)
                  </h4>
                  <p className="text-sm text-gray-700 mt-1">
                    웨이브당 30마리 몬스터 출현 · 광역 딜링 및 기본 재화 수급 구간
                  </p>
                </div>
                <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <h4 className="font-bold text-base text-gray-900">
                    네임드 웨이브 (6 웨이브)
                  </h4>
                  <p className="text-sm text-gray-700 mt-1">
                    강화된 능력치의 정예 몬스터 등장 · 보스전 대비 단일 화력 중간 점검
                  </p>
                </div>
                <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                  <h4 className="font-bold text-base text-gray-900">
                    보스 웨이브 (10 웨이브)
                  </h4>
                  <p className="text-sm text-gray-700 mt-1">
                    스테이지 최종 클리어 목표 · 처치 시 난이도 비례 장비 드랍 보상 획득
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2-3. 인게임 로그라이트 보상 시스템 */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 border-l-4 border-blue-500 pl-3 mb-3">
              보상 시스템 (인게임 로그라이트 변동성 설계)
            </h3>
            <p className="text-sm sm:text-[15px] text-gray-700 bg-blue-50/50 border border-blue-100 rounded-lg px-4 py-2.5 mb-5 leading-relaxed">
              <b className="text-blue-700">기획 의도 :</b> 정형화된 타워 빌드의 반복 지루함을 해소하기 위해 초반 특성 선택과 웨이브별 무작위 보상으로 유동적인 빌드 전환 유도
            </p>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg">
                <h4 className="font-bold text-base text-gray-900 mb-2.5">
                  첫 웨이브 특성 (Perk)
                </h4>
                <ul className="list-disc pl-5 text-sm sm:text-[15px] text-gray-800 space-y-2 mb-4 leading-relaxed">
                  <li>게임 시작 시 10가지 특성 중 2개를 무작위 제시 (1개 선택)</li>
                  <li>플레이 전반의 규칙과 주력 빌드 방향성에 큰 영향</li>
                  <li>이후 등장하는 웨이브 랜덤 보상과 시너지 연계</li>
                </ul>
                <ImgPrefixed
                  src="/Desc/Perk.png"
                  className="w-full object-cover rounded border border-gray-200"
                />
              </div>

              <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg">
                <h4 className="font-bold text-base text-gray-900 mb-2.5">
                  웨이브 종료 선택형 보상
                </h4>
                <ul className="list-disc pl-5 text-sm sm:text-[15px] text-gray-800 space-y-2 mb-4 leading-relaxed">
                  <li>매 웨이브 종료 시 제시되는 보상 중 1개 선택 (종류·수치 2중 랜덤)</li>
                  <li>
                    <b>보상 구성 :</b> HP 회복(최대 체력 시 등장 배제), SP +20~60, 골드 보상, 경로 인접 랜덤 타워 즉시 설치, 물리/마법 무료 업그레이드
                  </li>
                </ul>
                <ImgPrefixed
                  src="/Desc/RandomReward.png"
                  className="w-full object-cover rounded border border-gray-200"
                />
              </div>
            </div>
          </div>

          {/* 2-4. 무작위 맵 생성 및 난이도 정량화 공식 */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 border-l-4 border-blue-500 pl-3 mb-3">
              절차적 맵 생성 및 난이도 정량화 공식
            </h3>
            <p className="text-sm sm:text-[15px] text-gray-700 bg-blue-50/50 border border-blue-100 rounded-lg px-4 py-2.5 mb-5 leading-relaxed">
              <b className="text-blue-700">기획 의도 :</b> 무작위 생성 맵의 지형 유불리로 인한 점수 불공정성을 해소하기 위해, 지형 3요소를 정량화하여 불리한 맵일수록 높은 점수 배율(High Risk, High Return)을 부여
            </p>

            <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg">
              <div className="p-4 bg-white border border-blue-200 rounded-lg text-center font-mono text-sm sm:text-base font-bold text-blue-700 mb-4">
                맵 난이도 점수 = (Base 50 / 경로 길이) × 40 + (Base 8 / 코너 횟수) × 30 + (Base 5 / 평행 간격) × 30
              </div>
              <div className="grid sm:grid-cols-3 gap-4 text-sm">
                <div className="p-3.5 bg-white border border-gray-200 rounded">
                  <p className="font-bold text-gray-900">① 경로 길이 (가중치 40%)</p>
                  <p className="text-gray-600 mt-1 leading-relaxed">
                    기준값(Base) 50타일 · 경로가 짧아 적 노출 시간이 짧을수록 난이도 점수 상승
                  </p>
                </div>
                <div className="p-3.5 bg-white border border-gray-200 rounded">
                  <p className="font-bold text-gray-900">② 코너 횟수 (가중치 30%)</p>
                  <p className="text-gray-600 mt-1 leading-relaxed">
                    기준값(Base) 8회 · 꺾이는 구간이 적어 타워 프리딜 구간이 줄어들수록 난이도 상승
                  </p>
                </div>
                <div className="p-3.5 bg-white border border-gray-200 rounded">
                  <p className="font-bold text-gray-900">③ 평행 경로 간격 (가중치 30%)</p>
                  <p className="text-gray-600 mt-1 leading-relaxed">
                    기준값(Base) 5타일 · 단일 타워가 두 경로를 동시에 타격하기 어려울수록 난이도 상승
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2-5. 난이도 비례 장비 드랍 확률 & 스탯 가중치 예산 */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 border-l-4 border-blue-500 pl-3 mb-3">
              난이도 비례 장비 드랍 확률 및 스탯 가중치 밸런싱
            </h3>
            <p className="text-sm sm:text-[15px] text-gray-700 bg-blue-50/50 border border-blue-100 rounded-lg px-4 py-2.5 mb-5 leading-relaxed">
              <b className="text-blue-700">기획 의도 :</b> 고난이도 돌파 시 하위 장비 누적으로 인한 파밍 피로도를 낮추고(난이도 100 일반 장비 0% 배제), 100여 종 장비의 스탯 인플레이션을 방지하기 위해 등급별 예산 및 가중치 공식 적용
            </p>

            {/* 드랍 확률 테이블 */}
            <div className="overflow-x-auto border border-gray-200 rounded-lg mb-6">
              <table className="w-full text-sm sm:text-[15px] text-left border-collapse">
                <thead>
                  <tr className="bg-gray-100 text-gray-800 border-b border-gray-200">
                    <th className="py-3 px-4 font-bold">난이도 구간</th>
                    <th className="py-3 px-4 text-center font-bold">일반</th>
                    <th className="py-3 px-4 text-center font-bold">고급</th>
                    <th className="py-3 px-4 text-center font-bold">희귀</th>
                    <th className="py-3 px-4 text-center font-bold text-purple-700">서사</th>
                    <th className="py-3 px-4 text-center font-bold text-blue-700">전설</th>
                    <th className="py-3 px-4 font-bold">구간별 설계 목표</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-gray-200">
                  <tr className="bg-white">
                    <td className="py-3 px-4 font-semibold">난이도 0</td>
                    <td className="py-3 px-4 text-center">70%</td>
                    <td className="py-3 px-4 text-center">25%</td>
                    <td className="py-3 px-4 text-center">5%</td>
                    <td className="py-3 px-4 text-center text-gray-400">0%</td>
                    <td className="py-3 px-4 text-center text-gray-400">0%</td>
                    <td className="py-3 px-4 text-gray-600">초반 기초 장비 파밍 구간</td>
                  </tr>
                  <tr className="bg-gray-50/70">
                    <td className="py-3 px-4 font-semibold">난이도 20</td>
                    <td className="py-3 px-4 text-center">50%</td>
                    <td className="py-3 px-4 text-center">32%</td>
                    <td className="py-3 px-4 text-center">15%</td>
                    <td className="py-3 px-4 text-center font-bold text-purple-700">3% (해금)</td>
                    <td className="py-3 px-4 text-center text-gray-400">0%</td>
                    <td className="py-3 px-4 text-gray-800 font-medium">1차 돌파 목표 : 서사 등급 드랍 풀 개방</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-4 font-semibold">난이도 40</td>
                    <td className="py-3 px-4 text-center">35%</td>
                    <td className="py-3 px-4 text-center">35%</td>
                    <td className="py-3 px-4 text-center">22%</td>
                    <td className="py-3 px-4 text-center font-semibold text-purple-700">8%</td>
                    <td className="py-3 px-4 text-center text-gray-400">0%</td>
                    <td className="py-3 px-4 text-gray-600">중반 성장 구간 : 고급·희귀 비중 확대</td>
                  </tr>
                  <tr className="bg-gray-50/70">
                    <td className="py-3 px-4 font-semibold">난이도 60</td>
                    <td className="py-3 px-4 text-center">20%</td>
                    <td className="py-3 px-4 text-center">30%</td>
                    <td className="py-3 px-4 text-center">30%</td>
                    <td className="py-3 px-4 text-center font-semibold text-purple-700">15%</td>
                    <td className="py-3 px-4 text-center font-bold text-blue-700">5% (해금)</td>
                    <td className="py-3 px-4 text-gray-800 font-medium">2차 돌파 목표 : 전설 등급 드랍 풀 개방</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-3 px-4 font-semibold">난이도 80</td>
                    <td className="py-3 px-4 text-center">10%</td>
                    <td className="py-3 px-4 text-center">20%</td>
                    <td className="py-3 px-4 text-center">35%</td>
                    <td className="py-3 px-4 text-center font-semibold text-purple-700">25%</td>
                    <td className="py-3 px-4 text-center font-semibold text-blue-700">10%</td>
                    <td className="py-3 px-4 text-gray-600">후반 파밍 구간 : 희귀 이상 확률 70% 보장</td>
                  </tr>
                  <tr className="bg-blue-50/40 font-semibold">
                    <td className="py-3 px-4 font-bold text-gray-900">난이도 100</td>
                    <td className="py-3 px-4 text-center text-red-600 font-bold">0% (배제)</td>
                    <td className="py-3 px-4 text-center">15%</td>
                    <td className="py-3 px-4 text-center">35%</td>
                    <td className="py-3 px-4 text-center text-purple-700 font-bold">30%</td>
                    <td className="py-3 px-4 text-center text-blue-700 font-bold">20%</td>
                    <td className="py-3 px-4 text-gray-900 font-bold">최종 파밍 구간 : 일반 장비 완전 배제 &amp; 무한모드 개방</td>
                  </tr>
                </tbody>
              </table>
            </div>

            {/* 등급별 스탯 예산 & 스탯 가중치 */}
            <div className="grid md:grid-cols-2 gap-6 mb-6">
              <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg">
                <h4 className="font-bold text-base text-gray-900 mb-3">
                  등급별 총 스탯 예산 (Stat Budget)
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-sm sm:text-[15px] text-gray-800 leading-relaxed">
                  <li>
                    <b>일반 (Common) :</b> 약 5 pt 할당
                  </li>
                  <li>
                    <b>고급 (Uncommon) :</b> 약 15 pt 할당
                  </li>
                  <li>
                    <b>희귀 (Rare) :</b> 약 30 pt 할당
                  </li>
                  <li>
                    <b>서사 (Epic) :</b> 약 60 pt 할당 + 특수 옵션
                  </li>
                  <li>
                    <b>전설 (Legendary) :</b> 약 120 pt 할당 + 장신구 고유 스킬 발동
                  </li>
                </ul>
              </div>

              <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg">
                <h4 className="font-bold text-base text-gray-900 mb-3">
                  스탯 종류별 가치 가중치 및 데이터 관리
                </h4>
                <ul className="list-disc pl-5 space-y-2 text-sm sm:text-[15px] text-gray-800 leading-relaxed">
                  <li>
                    <b>공격력 (가중치 1.0) :</b> 모든 화력 계산의 기본 기준점
                  </li>
                  <li>
                    <b>공격 속도 (가중치 0.8) :</b> 투사체 오버킬 손실을 감안하여 수치 우대
                  </li>
                  <li>
                    <b>공격 사거리 (가중치 1.2) :</b> 경로 중첩 타격 효율이 높으므로 고비용 책정
                  </li>
                  <li>
                    <b>외부 JSON 분리 :</b> 코드 수정 없이 장비 수치 및 드랍 확률 즉시 패치 가능
                  </li>
                </ul>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-4 mb-6">
              <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                <ImgPrefixed
                  src="/Desc/WaitingRoom.png"
                  className="w-full object-cover rounded border border-gray-200"
                />
                <figcaption className="text-center text-xs text-gray-600 mt-2">
                  대기실 장비 장착 및 난이도 선택 화면
                </figcaption>
              </div>
              <div className="p-3 bg-gray-50 border border-gray-200 rounded-lg">
                <ImgPrefixed
                  src="/Desc/Collect.png"
                  className="w-full object-cover rounded border border-gray-200"
                />
                <figcaption className="text-center text-xs text-gray-600 mt-2">
                  장비 도감 화면
                </figcaption>
              </div>
            </div>

            {/* 상점 시스템 */}
            <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg">
              <h4 className="font-bold text-base text-gray-900 mb-2.5">
                상점 시스템 (중복 파밍 불쾌감 완화 장치)
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-[15px] text-gray-800 mb-4 leading-relaxed">
                <li>중복 장비 획득 시 등급에 비례한 전용 재화(RCoin)로 자동 환급</li>
                <li>RCoin을 소모해 상점 슬롯머신 뽑기로 미보유 장비 수집 가능</li>
              </ul>
              <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
                <div>
                  <ImgPrefixed
                    src="/Desc/Store1.png"
                    className="w-full object-cover rounded border border-gray-200"
                  />
                  <figcaption className="text-center text-xs text-gray-600 mt-1.5">
                    상점 UI
                  </figcaption>
                </div>
                <div>
                  <ImgPrefixed
                    src="/Desc/Store3.png"
                    className="w-full object-cover rounded border border-gray-200"
                  />
                  <figcaption className="text-center text-xs text-gray-600 mt-1.5">
                    뽑기 애니메이션 1
                  </figcaption>
                </div>
                <div>
                  <ImgPrefixed
                    src="/Desc/StoreAnimation.gif"
                    className="w-full object-cover rounded border border-gray-200"
                  />
                  <figcaption className="text-center text-xs text-gray-600 mt-1.5">
                    뽑기 애니메이션 2
                  </figcaption>
                </div>
                <div>
                  <ImgPrefixed
                    src="/Desc/Store4.png"
                    className="w-full object-cover rounded border border-gray-200"
                  />
                  <figcaption className="text-center text-xs text-gray-600 mt-1.5">
                    최종 획득 결과
                  </figcaption>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 03. 무한모드 시스템 */}
      {/* ===================================================================== */}
      <section
        id="section-infinity"
        className="scroll-mt-20 bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8"
      >
        <div className="flex items-center gap-2.5 border-b border-gray-200 pb-4 mb-6">
          <span className="px-2.5 py-1 text-xs font-bold bg-blue-500 text-white rounded">
            03
          </span>
          <h2 className="text-2xl font-bold text-gray-900">무한모드 시스템</h2>
        </div>

        <p className="text-sm sm:text-[15px] text-gray-700 bg-blue-50/50 border border-blue-100 rounded-lg px-4 py-2.5 mb-5 leading-relaxed">
          <b className="text-blue-700">기획 의도 :</b> 파밍을 마친 숙련 유저가 최종 장비 빌드의 한계를 시험하고 글로벌 리더보드로 경쟁하는 엔드 콘텐츠
        </p>

        <ul className="list-disc pl-5 space-y-2.5 text-sm sm:text-[15px] text-gray-800 mb-6 leading-relaxed">
          <li>
            <b>개방 조건 :</b> 일반 모드 100 난이도 클리어 시 개방
          </li>
          <li>
            <b>순환형 전투 규칙 :</b> 최종 웨이브가 없으며 웨이브당 2분의 제한 시간 부여 (적이 종점에 도달해도 죽지 않고 시작 위치로 순환)
          </li>
          <li>
            <b>패배 조건 :</b> 제한 시간(2분) 종료 시점에 남은 적 1마리당 HP가 1씩 감소하며, HP 0 도달 시 최종 점수 정산
          </li>
          <li>
            <b>점수 정산 및 순위표 :</b> 클리어 웨이브 점수, 맵 난이도 보정 배율, 남은 시간을 합산하여 상위 10명 글로벌 리더보드 등록
          </li>
          <li>
            <b>실시간 데미지 분석 :</b> 우측 상단 미터기를 통해 타워별 누적 데미지 기여도를 실시간 확인 가능
          </li>
        </ul>

        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          <div>
            <ImgPrefixed
              src="/Desc/InfinityMode.png"
              className="w-full object-cover rounded border border-gray-200"
            />
            <figcaption className="text-center text-xs text-gray-600 mt-2">
              무한모드 활성화 UI
            </figcaption>
          </div>
          <div>
            <ImgPrefixed
              src="/Desc/DamageMeter.png"
              className="w-full object-cover rounded border border-gray-200"
            />
            <figcaption className="text-center text-xs text-gray-600 mt-2">
              실시간 데미지 분석 기능
            </figcaption>
          </div>
          <div>
            <ImgPrefixed
              src="/Desc/IngameReaderBoard.png"
              className="w-full object-cover rounded border border-gray-200"
            />
            <figcaption className="text-center text-xs text-gray-600 mt-2">
              인게임 글로벌 순위표
            </figcaption>
          </div>
          <div>
            <ImgPrefixed
              src="/Desc/PlayFabReaderBoard.png"
              className="w-full object-cover rounded border border-gray-200"
            />
            <figcaption className="text-center text-xs text-gray-600 mt-2">
              PlayFab 리더보드 데이터
            </figcaption>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 04. 데이터 기반 포스트모템 */}
      {/* ===================================================================== */}
      <section
        id="section-postmortem"
        className="scroll-mt-20 bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8"
      >
        <div className="flex items-center gap-2.5 border-b border-gray-200 pb-4 mb-6">
          <span className="px-2.5 py-1 text-xs font-bold bg-blue-500 text-white rounded">
            04
          </span>
          <h2 className="text-2xl font-bold text-gray-900">
            데이터 기반 포스트모템 (PlayFab 로그 분석 및 밸런스 패치)
          </h2>
        </div>

        <ul className="list-disc pl-5 space-y-2.5 text-sm sm:text-[15px] text-gray-800 mb-6 leading-relaxed">
          <li>
            <b>문제 진단 (PlayFab `session_summary` 로그 분석) :</b> 넓은 범위를 가진 <b>궁수 타워(선택률 29%)</b>와 장비의 <b>공격 사거리</b> 옵션이 과도한 시너지를 일으켜 세팅이 획일화되고, 고코스트 중거리 딜러인 <b>창술사 타워(선택률 8%)</b>가 소외되는 현상 확인
          </li>
          <li>
            <b>밸런스 패치 조치 (`Beta_v0.2.1`) :</b> 전 장비 공격 사거리 옵션 효율 50% 축소, 궁수 타워 기본 스탯 하향, 창술사 타워 공격력 및 타격 효율 상향
          </li>
          <li>
            <b>패치 결과 :</b> 궁수 타워 쏠림 현상 완화(<b>29% → 20%</b>) 및 창술사 타워 선택률 회복(<b>8% → 15%</b>)으로 6종 타워의 고른 선택 분포 달성
          </li>
        </ul>

        <div className="overflow-x-auto border border-gray-200 rounded-lg">
          <table className="w-full text-sm sm:text-[15px] text-left border-collapse">
            <thead>
              <tr className="bg-gray-100 text-gray-800 border-b border-gray-200">
                <th className="py-3 px-4 font-bold">타워 명칭</th>
                <th className="py-3 px-4 font-bold">역할군</th>
                <th className="py-3 px-4 text-center font-bold">패치 전 선택률</th>
                <th className="py-3 px-4 text-center font-bold">패치 후 선택률 (v0.2.1)</th>
                <th className="py-3 px-4 text-center font-bold">변동폭</th>
                <th className="py-3 px-4 font-bold">결과 요약</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-gray-200">
              <tr className="bg-white">
                <td className="py-3 px-4 font-semibold">기본 타워</td>
                <td className="py-3 px-4 text-gray-600">초반 보조 / 복합형</td>
                <td className="py-3 px-4 text-center">11%</td>
                <td className="py-3 px-4 text-center font-semibold">12%</td>
                <td className="py-3 px-4 text-center text-gray-600">+1%p</td>
                <td className="py-3 px-4 text-gray-600">초반 빌드업 픽률 안정 유지</td>
              </tr>
              <tr className="bg-gray-50/70">
                <td className="py-3 px-4 font-semibold">검사 타워</td>
                <td className="py-3 px-4 text-gray-600">근거리 단일 물리 딜러</td>
                <td className="py-3 px-4 text-center">17%</td>
                <td className="py-3 px-4 text-center font-semibold">16%</td>
                <td className="py-3 px-4 text-center text-gray-600">-1%p</td>
                <td className="py-3 px-4 text-gray-600">코너 구간 주력 단일 딜러 유지</td>
              </tr>
              <tr className="bg-blue-50/40">
                <td className="py-3 px-4 font-bold text-blue-900">창술사 타워</td>
                <td className="py-3 px-4 text-blue-800">중거리 4타겟 물리 딜러</td>
                <td className="py-3 px-4 text-center text-red-600 font-bold">8% (최저)</td>
                <td className="py-3 px-4 text-center text-blue-700 font-bold">15%</td>
                <td className="py-3 px-4 text-center font-bold text-blue-700">+7%p</td>
                <td className="py-3 px-4 text-gray-900 font-medium">상향 패치 후 중·후반 광역 딜러 채택률 정상화</td>
              </tr>
              <tr className="bg-blue-50/40">
                <td className="py-3 px-4 font-bold text-blue-900">궁수 타워</td>
                <td className="py-3 px-4 text-blue-800">원거리 다중 물리 딜러</td>
                <td className="py-3 px-4 text-center text-red-600 font-bold">29% (과점)</td>
                <td className="py-3 px-4 text-center text-blue-700 font-bold">20%</td>
                <td className="py-3 px-4 text-center font-bold text-blue-700">-9%p</td>
                <td className="py-3 px-4 text-gray-900 font-medium">사거리 옵션 하향 및 스탯 조정으로 과점 해소</td>
              </tr>
              <tr className="bg-white">
                <td className="py-3 px-4 font-semibold">레이저 타워</td>
                <td className="py-3 px-4 text-gray-600">단일 고화력 마법 딜러</td>
                <td className="py-3 px-4 text-center">17%</td>
                <td className="py-3 px-4 text-center font-semibold">18%</td>
                <td className="py-3 px-4 text-center text-gray-600">+1%p</td>
                <td className="py-3 px-4 text-gray-600">보스·네임드 특화 마법 딜러 유지</td>
              </tr>
              <tr className="bg-gray-50/70">
                <td className="py-3 px-4 font-semibold">사제 타워</td>
                <td className="py-3 px-4 text-gray-600">방어력 감소 디버퍼</td>
                <td className="py-3 px-4 text-center">18%</td>
                <td className="py-3 px-4 text-center font-semibold">19%</td>
                <td className="py-3 px-4 text-center text-gray-600">+1%p</td>
                <td className="py-3 px-4 text-gray-600">고난이도 필수 시너지 역할 유지</td>
              </tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 05. 디자인 및 게임 음악 */}
      {/* ===================================================================== */}
      <section
        id="section-art-audio"
        className="scroll-mt-20 bg-white rounded-xl border border-gray-200 shadow-sm p-6 sm:p-8"
      >
        <div className="flex items-center gap-2.5 border-b border-gray-200 pb-4 mb-6">
          <span className="px-2.5 py-1 text-xs font-bold bg-blue-500 text-white rounded">
            05
          </span>
          <h2 className="text-2xl font-bold text-gray-900">
            디자인 및 게임 음악
          </h2>
        </div>

        <div className="space-y-6">
          {/* 캐릭터 */}
          <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg">
            <h4 className="font-bold text-base text-gray-900 mb-2.5">캐릭터</h4>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-[15px] text-gray-800 mb-4 leading-relaxed">
              <li>타워 및 몬스터 캐릭터 픽셀 아트 직접 제작</li>
              <li>
                <b>타워 애니메이션 :</b> 모든 타워의 대기(Idle) 및 공격(Attack) 애니메이션 구현
              </li>
            </ul>

            <div className="p-4 bg-white rounded-lg overflow-hidden border border-gray-200 grid grid-cols-8">
              <ImgPrefixed
                src="/character/CharacterBase01.png"
                className="w-full object-cover"
              />
              <ImgPrefixed
                src="/character/WarriorTower01.png"
                className="w-full object-cover"
              />
              <ImgPrefixed
                src="/character/SpearTower01.png"
                className="w-full object-cover"
              />
              <ImgPrefixed
                src="/character/ArcherTower01.png"
                className="w-full object-cover"
              />
              <ImgPrefixed
                src="/character/LaserTower01.png"
                className="w-full object-cover"
              />
              <ImgPrefixed
                src="/character/BuffTower01.png"
                className="w-full object-cover"
              />
              <ImgPrefixed
                src="/character/WarriorTower02.png"
                className="w-full object-cover"
              />
              <ImgPrefixed
                src="/character/WarriorTower03.png"
                className="w-full object-cover"
              />
            </div>

            <div className="p-4 mt-3 bg-white rounded-lg overflow-hidden border border-gray-200 grid grid-cols-3">
              <ImgPrefixed
                src="/character/CharacterBaseAnim.png"
                className="w-full object-cover"
              />
              <ImgPrefixed
                src="/character/WarriorTowerAnim.png"
                className="w-full object-cover"
              />
              <ImgPrefixed
                src="/character/SpearTowerAnim.png"
                className="w-full object-cover"
              />
              <ImgPrefixed
                src="/character/ArcherTowerAnim.png"
                className="w-full object-cover"
              />
              <ImgPrefixed
                src="/character/BuffTowerAnim.png"
                className="w-full object-cover"
              />
              <ImgPrefixed
                src="/character/LaserTowerAnim.png"
                className="w-full object-cover"
              />
              <ImgPrefixed
                src="/character/AvatarOfVengeance.png"
                className="w-full object-cover"
              />
              <ImgPrefixed
                src="/character/CommanderFlag.png"
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* 아이콘 */}
          <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg">
            <h4 className="font-bold text-base text-gray-900 mb-2.5">아이콘</h4>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-[15px] text-gray-800 mb-4 leading-relaxed">
              <li>타워의 특수능력에 부합하는 스킬 아이콘 제작</li>
              <li>동적인 상황은 애니메이션 시트 또는 Unity 이펙트로 구현</li>
            </ul>

            <div className="p-4 bg-white rounded-lg overflow-hidden border border-gray-200 grid grid-cols-8">
              <ImgPrefixed
                src="/UI/SkillFist.png"
                className="w-full object-cover"
              />
              <ImgPrefixed
                src="/UI/SkillSlow.png"
                className="w-full object-cover"
              />
              <ImgPrefixed
                src="/UI/ArrowRain.png"
                className="w-full object-cover"
              />
              <ImgPrefixed
                src="/UI/SkillThunder.png"
                className="w-full object-cover"
              />
              <ImgPrefixed
                src="/UI/SkillDamageUp.png"
                className="w-full object-cover"
              />
            </div>

            <div className="p-4 mt-3 bg-white rounded-lg overflow-hidden border border-gray-200">
              <ImgPrefixed
                src="/UI/SkillSpearLanding.png"
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* 맵(타일셋) */}
          <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg">
            <h4 className="font-bold text-base text-gray-900 mb-2.5">
              맵 (타일셋)
            </h4>
            <ul className="list-disc pl-5 space-y-2 text-sm sm:text-[15px] text-gray-800 mb-4 leading-relaxed">
              <li>타워디펜스에 최적화된 경로를 가진 4종 테마 타일셋 제작</li>
              <li>웨이브 시작·종료 지점 및 시각적 꾸밈 타일 구성</li>
            </ul>

            <div className="p-4 bg-white rounded-lg overflow-hidden border border-gray-200 grid grid-cols-4 gap-x-4">
              <ImgPrefixed
                src="UI/Tileset.png"
                className="w-full object-cover"
              />
              <ImgPrefixed
                src="UI/Tileset_Snow.png"
                className="w-full object-cover"
              />
              <ImgPrefixed
                src="UI/Tileset_Desert.png"
                className="w-full object-cover"
              />
              <ImgPrefixed
                src="UI/Tileset_Magma.png"
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* 오브젝트 & 장비 */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg">
              <h4 className="font-bold text-base text-gray-900 mb-2.5">
                오브젝트
              </h4>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-[15px] text-gray-800 mb-4 leading-relaxed">
                <li>투사체 및 맵 장식 오브젝트 디자인</li>
              </ul>
              <div className="p-4 bg-white rounded-lg overflow-hidden border border-gray-200 grid grid-cols-8">
                <ImgPrefixed
                  src="/UI/Arrow.png"
                  className="w-full object-cover"
                />
                <ImgPrefixed
                  src="/UI/Stone.png"
                  className="w-full object-cover"
                />
              </div>
            </div>

            <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg">
              <h4 className="font-bold text-base text-gray-900 mb-2.5">장비</h4>
              <ul className="list-disc pl-5 space-y-2 text-sm sm:text-[15px] text-gray-800 mb-4 leading-relaxed">
                <li>6부위 수집용 장비 아이콘 (일부 발췌)</li>
              </ul>
              <div className="p-4 bg-white rounded-lg overflow-hidden border border-gray-200 grid grid-cols-12">
                <ImgPrefixed
                  src="/Equipment/accessory_avatar_of_vengeance.png"
                  className="w-full object-cover"
                />
                <ImgPrefixed
                  src="/Equipment/accessory_drum_of_battle.png"
                  className="w-full object-cover"
                />
                <ImgPrefixed
                  src="/Equipment/accessory_heart_of_life_reversal.png"
                  className="w-full object-cover"
                />
                <ImgPrefixed
                  src="/Equipment/accessory_vitality_doll.png"
                  className="w-full object-cover"
                />
                <ImgPrefixed
                  src="/Equipment/armor_berserker_cuirass.png"
                  className="w-full object-cover"
                />
                <ImgPrefixed
                  src="/Equipment/armor_immortal_cuirass.png"
                  className="w-full object-cover"
                />
                <ImgPrefixed
                  src="/Equipment/armor_shadow_lord_armor.png"
                  className="w-full object-cover"
                />
                <ImgPrefixed
                  src="/Equipment/armor_starlight_robe.png"
                  className="w-full object-cover"
                />
                <ImgPrefixed
                  src="/Equipment/boot_atlas_steps.png"
                  className="w-full object-cover"
                />
                <ImgPrefixed
                  src="/Equipment/boot_dragon_roar.png"
                  className="w-full object-cover"
                />
                <ImgPrefixed
                  src="/Equipment/boot_ghost_boots.png"
                  className="w-full object-cover"
                />
                <ImgPrefixed
                  src="/Equipment/boot_stormwing_boots.png"
                  className="w-full object-cover"
                />
                <ImgPrefixed
                  src="/Equipment/glove_meteor_gloves.png"
                  className="w-full object-cover"
                />
                <ImgPrefixed
                  src="/Equipment/glove_shadow_woven_gloves.png"
                  className="w-full object-cover"
                />
                <ImgPrefixed
                  src="/Equipment/glove_time_warp_gloves.png"
                  className="w-full object-cover"
                />
                <ImgPrefixed
                  src="/Equipment/glove_titan_gauntlets.png"
                  className="w-full object-cover"
                />
                <ImgPrefixed
                  src="/Equipment/helmet_ancient_dragon_skull.png"
                  className="w-full object-cover"
                />
                <ImgPrefixed
                  src="/Equipment/helmet_crown_of_dominion.png"
                  className="w-full object-cover"
                />
                <ImgPrefixed
                  src="/Equipment/helmet_shadow_tracker_helmet.png"
                  className="w-full object-cover"
                />
                <ImgPrefixed
                  src="/Equipment/helmet_silver_helmet.png"
                  className="w-full object-cover"
                />
                <ImgPrefixed
                  src="/Equipment/weapon_bloodlust.png"
                  className="w-full object-cover"
                />
                <ImgPrefixed
                  src="/Equipment/weapon_divine_punishment_bow.png"
                  className="w-full object-cover"
                />
                <ImgPrefixed
                  src="/Equipment/weapon_rune_blade.png"
                  className="w-full object-cover"
                />
                <ImgPrefixed
                  src="/Equipment/weapon_world_tree_staff.png"
                  className="w-full object-cover"
                />
              </div>
            </div>
          </div>

          {/* 게임 음악 */}
          <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg">
            <h4 className="font-bold text-base text-gray-900 mb-3">게임 음악</h4>
            <ul className="list-disc pl-5 grid grid-cols-1 sm:grid-cols-2 items-start gap-x-8 gap-y-5 text-sm sm:text-[15px] text-gray-800">
              <li>
                타이틀
                <AudioPrefixed
                  className="mt-2"
                  src="/audio/SFX_BGM_MainTitle.mp3"
                  controls
                />
              </li>
              <li>
                초원 맵
                <AudioPrefixed
                  className="mt-2"
                  src="/audio/BGM_Game_Default.wav"
                  controls
                />
              </li>
              <li>
                눈 맵
                <AudioPrefixed
                  className="mt-2"
                  src="/audio/BGM_Game_Snow.wav"
                  controls
                />
              </li>
              <li>
                사막 맵
                <AudioPrefixed
                  className="mt-2"
                  src="/audio/BGM_Game_Desert.mp3"
                  controls
                />
              </li>
              <li>
                마그마 맵
                <AudioPrefixed
                  className="mt-2"
                  src="/audio/BGM_Game_Magma.mp3"
                  controls
                />
              </li>
              <li>
                클리어
                <AudioPrefixed
                  className="mt-2"
                  src="/audio/BGM_ClearScene.mp3"
                  controls
                />
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 하단 기술서 탭 이동 배너 */}
      <div className="p-5 bg-blue-50/60 border border-blue-200 rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-sm sm:text-[15px] font-medium text-gray-800">
          기획된 시스템을 구현한 C# 코드 아키텍처, State 패턴, 오브젝트 풀링 및 절차적 맵 생성 알고리즘은{" "}
          <b className="text-blue-700">[기술서]</b> 탭에서 확인하실 수 있습니다.
        </p>
        <button
          onClick={() => {
            onTabChange("tech");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="px-4 py-2 bg-blue-500 hover:bg-blue-600 text-white font-semibold text-sm rounded-lg transition shrink-0"
        >
          기술서 탭 보기 →
        </button>
      </div>
    </div>
  );
};

export default PlanPage;
