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
      href: "#gdd-overview",
      title: "게임 개요 및 코어 루프 (Game Overview & Core Loop)",
      desc: "프로젝트 명세, 기획 목표 3대 축, 인게임·아웃게임 순환 루프",
    },
    {
      num: "02",
      href: "#gdd-focus",
      title: "핵심 기획 주안점 및 밸런스 설계 (Key Design & Balancing)",
      desc: "로그라이트 변동성, 맵 난이도 정량화 공식, 드랍 확률 테이블, 가중치 스탯 예산",
    },
    {
      num: "03",
      href: "#gdd-systems",
      title: "세부 전투 및 콘텐츠 명세 (Combat & Content Specifications)",
      desc: "타워 4대 역할군·상성, SP 스킬 경제, 웨이브 구조, 도감·상점, 무한모드",
    },
    {
      num: "04",
      href: "#gdd-postmortem",
      title: "데이터 기반 포스트모템 (Data-Driven Postmortem)",
      desc: "PlayFab 전투 로그 분석, 사거리 메타 고착화 진단 및 Beta_v0.2.1 패치 전·후 지표",
    },
    {
      num: "05",
      href: "#gdd-art-audio",
      title: "아트 & 사운드 디렉션 (Art & Audio Direction)",
      desc: "픽셀 아트 캐릭터·애니메이션, 스킬 아이콘, 테마별 타일셋 4종, BGM 6종",
    },
  ];

  return (
    <div className="space-y-12 text-slate-800">
      <title>RogueTower 게임기획서 (GDD)</title>

      {/* ===================================================================== */}
      {/* 문서 헤더 & 목차 (Document Header & Table of Contents) */}
      {/* ===================================================================== */}
      <div className="border-b border-slate-200 pb-8">
        <div className="text-center max-w-3xl mx-auto mb-8">
          <p className="text-xs font-bold tracking-widest text-amber-700 uppercase mb-2">
            GAME DESIGN DOCUMENT (GDD)
          </p>
          <h1 className="text-3xl sm:text-4xl font-extrabold text-slate-900 mb-3">
            RogueTower 게임 기획서
          </h1>
          <p className="text-sm text-slate-600 leading-relaxed mb-5">
            정형화된 타워 디펜스의 빌드 고착화 문제를{" "}
            <b className="text-slate-900">인게임 무작위 보상(단기 변동성)</b>과{" "}
            <b className="text-slate-900">가중치 예산 기반 장비 파밍(장기 성장)</b>으로
            해결한 2D 로그라이트 타워 디펜스 기획 명세서입니다.
          </p>
          <div className="flex flex-wrap justify-center gap-2">
            {[
              "#로그라이트_타워디펜스",
              "#코어루프_설계",
              "#가중치_스탯예산",
              "#절차적_맵난이도_공식",
              "#PlayFab_데이터밸런싱",
            ].map((tag) => (
              <span
                key={tag}
                className="px-3 py-1 bg-slate-100 text-slate-700 border border-slate-200 text-xs font-semibold rounded-md"
              >
                {tag}
              </span>
            ))}
          </div>
        </div>

        {/* 목차 (Table of Contents) 박스 */}
        <div className="max-w-4xl mx-auto bg-slate-50 border border-slate-200 rounded-xl p-5 shadow-sm">
          <div className="flex items-center justify-between border-b border-slate-200 pb-3 mb-4">
            <div className="flex items-center gap-2">
              <span className="inline-flex items-center justify-center w-6 h-6 rounded bg-amber-600 text-white text-xs font-bold">
                📑
              </span>
              <h2 className="text-base font-bold text-slate-900">
                기획서 목차 (Table of Contents)
              </h2>
            </div>
            <span className="text-xs text-slate-500">
              항목을 클릭하면 해당 챕터로 이동합니다
            </span>
          </div>

          <div className="grid sm:grid-cols-2 gap-2.5">
            {tocItems.map((item) => (
              <a
                key={item.num}
                href={item.href}
                className="group flex items-start gap-3 p-3 bg-white hover:bg-amber-50/70 border border-slate-200 hover:border-amber-400 rounded-lg transition shadow-sm"
              >
                <span className="px-2 py-0.5 text-xs font-extrabold bg-slate-800 group-hover:bg-amber-600 text-white rounded transition shrink-0 mt-0.5">
                  CH.{item.num}
                </span>
                <div className="flex-1 min-w-0">
                  <div className="flex items-center justify-between gap-1">
                    <p className="text-sm font-bold text-slate-900 group-hover:text-amber-800 truncate">
                      {item.title}
                    </p>
                    <span className="text-xs text-slate-400 group-hover:text-amber-600 font-bold shrink-0">
                      ↓
                    </span>
                  </div>
                  <p className="text-xs text-slate-500 mt-0.5 line-clamp-1">
                    {item.desc}
                  </p>
                </div>
              </a>
            ))}
          </div>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* CHAPTER 01. 게임 개요 및 코어 루프 (Game Overview & Core Loop) */}
      {/* ===================================================================== */}
      <section
        id="gdd-overview"
        className="scroll-mt-20 bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8"
      >
        <div className="flex items-center gap-3 border-b border-slate-200 pb-4 mb-6">
          <span className="px-3 py-1 text-xs font-extrabold bg-slate-900 text-amber-400 rounded">
            CHAPTER 01
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900">
            게임 개요 및 코어 루프 (Game Overview &amp; Core Loop)
          </h2>
        </div>

        {/* 1.1 기본 명세 & 기획 목표 */}
        <div className="grid md:grid-cols-2 gap-6 mb-8">
          <div className="p-5 bg-slate-50 border border-slate-200 rounded-lg">
            <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-500"></span>
              1.1. 프로젝트 기본 명세
            </h3>
            <dl className="space-y-2 text-sm">
              <div className="flex">
                <dt className="w-28 font-semibold text-slate-600 shrink-0">
                  타이틀 / 장르
                </dt>
                <dd className="text-slate-900 font-medium">
                  RogueTower / 2D 로그라이트 타워 디펜스
                </dd>
              </div>
              <div className="flex">
                <dt className="w-28 font-semibold text-slate-600 shrink-0">
                  개발 인원 / 기간
                </dt>
                <dd className="text-slate-900">
                  1인 개발 (기획·밸런싱·프로그래밍·아트) / 2024.10 ~ 2025.08
                </dd>
              </div>
              <div className="flex">
                <dt className="w-28 font-semibold text-slate-600 shrink-0">
                  타겟 플레이어
                </dt>
                <dd className="text-slate-900">
                  매 판 달라지는 덱 빌딩의 재미와 RPG식 파밍 성장을 선호하는 전략 게이머
                </dd>
              </div>
            </dl>
          </div>

          <div className="p-5 bg-amber-50/50 border border-amber-200 rounded-lg">
            <h3 className="text-base font-bold text-slate-900 mb-3 flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-amber-600"></span>
              1.2. 3대 핵심 기획 목표 (Design Pillars)
            </h3>
            <ul className="space-y-2 text-sm text-slate-800">
              <li>
                <b className="text-amber-900">① 단기적 성장 (In-Game):</b>{" "}
                첫 웨이브 특성 및 매 웨이브 무작위 보상을 통한 판마다 새로운 빌드 구축
              </li>
              <li>
                <b className="text-amber-900">② 장기적 성장 (Out-Game):</b>{" "}
                100여 종의 장비 파밍과 도감·상점 시스템을 통한 영구 스탯 및 특수 스킬 해금
              </li>
              <li>
                <b className="text-amber-900">③ 정형화된 디펜스 메타 타파:</b>{" "}
                절차적 맵 생성과 역할군·속성 상성 결합으로 특정 타워 원툴 플레이 방지
              </li>
            </ul>
          </div>
        </div>

        {/* 1.3 코어 루프 다이어그램 */}
        <div className="mb-8">
          <h3 className="text-base font-bold text-slate-900 border-l-4 border-amber-500 pl-3 mb-4">
            1.3. 핵심 게임 루프 (Core Game Loop)
          </h3>
          <div className="p-5 bg-slate-900 text-white rounded-xl mb-6">
            <p className="text-xs text-amber-400 font-bold tracking-wider uppercase text-center mb-4">
              IN-GAME (단기 전략 변주) ↔ OUT-GAME (장기 장비 파밍) 선순환 구조
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3 text-center">
              <div className="p-4 bg-slate-800 border border-slate-700 rounded-lg">
                <span className="text-xs font-bold text-amber-400">STEP 01 · 전투</span>
                <p className="font-bold text-base mt-1">웨이브 방어</p>
                <p className="text-xs text-slate-300 mt-1">
                  무작위 생성 맵 분석 및 골드(TC)·SP 기반 타워 배치/스킬 운용
                </p>
              </div>
              <div className="p-4 bg-slate-800 border border-slate-700 rounded-lg">
                <span className="text-xs font-bold text-amber-400">STEP 02 · 전략</span>
                <p className="font-bold text-base mt-1">랜덤 보상 선택</p>
                <p className="text-xs text-slate-300 mt-1">
                  첫 웨이브 특성(10종) 및 매 웨이브 종료 시 3종 무작위 보상 중 택1
                </p>
              </div>
              <div className="p-4 bg-slate-800 border border-slate-700 rounded-lg">
                <span className="text-xs font-bold text-amber-400">STEP 03 · 성장</span>
                <p className="font-bold text-base mt-1">장비 파밍 &amp; 세팅</p>
                <p className="text-xs text-slate-300 mt-1">
                  보스/클리어 보상 장비 획득, 중복 장비 RCoin 환급 및 상점 뽑기
                </p>
              </div>
              <div className="p-4 bg-slate-800 border border-amber-500/60 rounded-lg">
                <span className="text-xs font-bold text-amber-400">STEP 04 · 목표</span>
                <p className="font-bold text-base mt-1">상위 난이도 도전</p>
                <p className="text-xs text-slate-300 mt-1">
                  상위 장비 드랍 풀이 열리는 고난이도(0~100) 및 무한모드 리더보드 경쟁
                </p>
              </div>
            </div>
          </div>

          {/* 대기실 흐름 vs 인게임 흐름 */}
          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-lg">
              <h4 className="font-bold mb-1 text-base text-center text-slate-900">
                아웃게임 (대기실 흐름)
              </h4>
              <p className="text-xs text-center text-amber-700 font-semibold mb-4">
                전투 준비 · 장비 세팅 · 난이도 설정 단계
              </p>
              <ol className="list-decimal list-inside space-y-2 text-sm text-slate-800">
                <li className="p-2.5 bg-white rounded border border-slate-200">
                  획득한 장비를 도감에서 확인하고 6부위(무기·방어구·장신구 등) 장착
                </li>
                <li className="p-2.5 bg-white rounded border border-slate-200">
                  중복 장비로 얻은 <b>RCoin</b>을 사용해 상점에서 미보유 장비 뽑기
                </li>
                <li className="p-2.5 bg-white rounded border border-slate-200">
                  목표 등급 드랍 확률과 적 스탯 배율을 고려해 <b>도전 난이도(0~100)</b> 선택
                </li>
                <li className="p-2.5 bg-white rounded border border-slate-200">
                  세팅 완료 후 스테이지 진입 (절차적 맵 생성 시작)
                </li>
              </ol>
            </div>

            <div className="p-5 bg-amber-50/40 border border-amber-200 rounded-lg">
              <h4 className="font-bold mb-1 text-base text-center text-slate-900">
                인게임 (스테이지 전투 흐름)
              </h4>
              <p className="text-xs text-center text-amber-700 font-semibold mb-4">
                실시간 전술 배치 및 로그라이트 빌드업 단계
              </p>
              <ol className="list-decimal list-inside space-y-2 text-sm text-slate-800">
                <li className="p-2.5 bg-white rounded border border-amber-200">
                  <b>첫 웨이브 특성(Perk)</b> 2종 중 1종을 선택해 이번 판의 핵심 컨셉 확정
                </li>
                <li className="p-2.5 bg-white rounded border border-amber-200">
                  <b>[타워 건설 → 적 처치(골드 획득) → 타워/속성 업그레이드]</b> 실시간 수행
                </li>
                <li className="p-2.5 bg-white rounded border border-amber-200">
                  매 웨이브 클리어 시 기본 20 SP 획득 + <b>선택형 랜덤 보상</b> 중 택 1
                </li>
                <li className="p-2.5 bg-white rounded border border-amber-200">
                  6웨이브(네임드) 및 10웨이브(최종 보스) 돌파 시 장비 드랍 획득 후 복귀
                </li>
              </ol>
            </div>
          </div>

          <div className="p-4 bg-slate-50 rounded-lg border border-slate-200 grid grid-cols-1 sm:grid-cols-2 gap-4">
            <div>
              <ImgPrefixed
                src="/Desc/Lobby.png"
                className="w-full object-cover rounded border border-slate-200"
              />
              <figcaption className="text-center text-xs font-semibold text-slate-600 mt-2">
                ▲ 게임 타이틀 및 로비 화면 (상점·순위표 연동)
              </figcaption>
            </div>
            <div>
              <ImgPrefixed
                src="/Desc/IngameUI.png"
                className="w-full object-cover rounded border border-slate-200"
              />
              <figcaption className="text-center text-xs font-semibold text-slate-600 mt-2">
                ▲ 인게임 전투 UI (타워/스킬 패널 및 웨이브 정보)
              </figcaption>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* CHAPTER 02. 핵심 기획 주안점 및 밸런스 설계 (Key Design & Balancing) */}
      {/* ===================================================================== */}
      <section
        id="gdd-focus"
        className="scroll-mt-20 bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8"
      >
        <div className="flex items-center gap-3 border-b border-slate-200 pb-4 mb-6">
          <span className="px-3 py-1 text-xs font-extrabold bg-slate-900 text-amber-400 rounded">
            CHAPTER 02
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900">
            핵심 기획 주안점 및 밸런스 설계 (Key Design &amp; Balancing)
          </h2>
        </div>

        <div className="space-y-12">
          {/* 2.1 기획 주안점 1: 인게임 로그라이트 요소를 통한 변동성 부여 */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 border-l-4 border-amber-500 pl-3 mb-4">
              2.1. [기획 주안점 1] 인게임 로그라이트 요소를 통한 빌드 변동성 부여
            </h3>

            {/* 배경 -> 의도 -> 기대효과 3단 카드 */}
            <div className="grid md:grid-cols-3 gap-4 mb-5">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="text-xs font-bold text-slate-500 uppercase">
                  01 · 기획 배경 (Problem)
                </span>
                <p className="text-sm font-bold text-slate-900 mt-1 mb-1">
                  고정된 타워 빌드의 지루함
                </p>
                <p className="text-xs text-slate-700 leading-relaxed">
                  전통적인 타워 디펜스는 최적의 타워 배치 공식(일명 ‘정답 빌드’)을 찾고 나면, 이후 반복 플레이에서 전략적 의사결정이 사라지고 지루함이 급증합니다.
                </p>
              </div>
              <div className="p-4 bg-amber-50/60 border border-amber-200 rounded-lg">
                <span className="text-xs font-bold text-amber-700 uppercase">
                  02 · 기획 의도 (Design Intent)
                </span>
                <p className="text-sm font-bold text-slate-900 mt-1 mb-1">
                  초반 방향성 + 웨이브별 변주 결합
                </p>
                <p className="text-xs text-slate-700 leading-relaxed">
                  1웨이브 시작 시 <b>‘첫 웨이브 특성(10종 중 2개 제시)’</b>으로 판의 규칙을 비틀고, 매 웨이브 종료 시 <b>‘선택형 랜덤 보상’</b>을 제시해 즉흥적인 전술 수정을 유도했습니다.
                </p>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="text-xs font-bold text-slate-500 uppercase">
                  03 · 기대 효과 (Expected Effect)
                </span>
                <p className="text-sm font-bold text-slate-900 mt-1 mb-1">
                  유동적 빌드 유도 및 리플레이 가치 창출
                </p>
                <p className="text-xs text-slate-700 leading-relaxed">
                  무료 물리/마법 업그레이드나 경로 주변 랜덤 타워 설치 보상에 따라 매 판 주력 타워가 달라지며 높은 리플레이 가치를 확보했습니다.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                <h4 className="font-bold text-sm text-slate-900 mb-2">
                  ■ 첫 웨이브 특성 시스템 (10종 중 2개 무작위 제시 ➔ 택 1)
                </h4>
                <ul className="list-disc pl-5 text-xs text-slate-700 space-y-1 mb-3">
                  <li>게임 시작 직후 플레이 스타일 전반을 좌우하는 강력한 패시브 부여</li>
                  <li>예: 희생 전략(스킬 제한 대신 타워 화력 극대화), 연쇄 폭발, 약자 멸시 등</li>
                </ul>
                <ImgPrefixed
                  src="/Desc/Perk.png"
                  className="w-full object-cover rounded border border-slate-200"
                />
              </div>

              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                <h4 className="font-bold text-sm text-slate-900 mb-2">
                  ■ 웨이브 종료 선택형 보상 (종류·수치 2중 가중치 랜덤)
                </h4>
                <ul className="list-disc pl-5 text-xs text-slate-700 space-y-1 mb-3">
                  <li>
                    <b>보상 풀:</b> HP 회복(최대 체력 시 등장 배제 예외처리), SP +20~60, 골드 지급, 경로 인접 랜덤 타워 즉시 설치, 물리/마법 무료 업그레이드
                  </li>
                  <li>현재 전황(체력 위기 vs 화력 부족)에 맞춘 리스크 관리 의사결정 요구</li>
                </ul>
                <ImgPrefixed
                  src="/Desc/RandomReward.png"
                  className="w-full object-cover rounded border border-slate-200"
                />
              </div>
            </div>
          </div>

          {/* 2.2 기획 주안점 2: 무작위 맵 생성에 따른 난이도 정량화 및 점수 보정 */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 border-l-4 border-amber-500 pl-3 mb-4">
              2.2. [기획 주안점 2] 무작위 맵 생성에 따른 난이도 정량화 및 점수 보정
            </h3>

            <div className="grid md:grid-cols-3 gap-4 mb-5">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="text-xs font-bold text-slate-500 uppercase">
                  01 · 기획 배경 (Problem)
                </span>
                <p className="text-sm font-bold text-slate-900 mt-1 mb-1">
                  무작위 지형에 따른 유불리 편차
                </p>
                <p className="text-xs text-slate-700 leading-relaxed">
                  절차적 맵 생성을 도입하면 경로가 짧고 일직선인 억까 맵과 경로가 길고 많이 꺾이는 유리한 맵이 발생해 랭킹 경쟁의 공정성이 훼손됩니다.
                </p>
              </div>
              <div className="p-4 bg-amber-50/60 border border-amber-200 rounded-lg">
                <span className="text-xs font-bold text-amber-700 uppercase">
                  02 · 기획 의도 (Design Intent)
                </span>
                <p className="text-sm font-bold text-slate-900 mt-1 mb-1">
                  3대 지형 요소 정량화 수식 설계
                </p>
                <p className="text-xs text-slate-700 leading-relaxed">
                  타워 딜링 기회에 직결되는 <b>경로 길이(40%), 코너 횟수(30%), 평행 경로 간격(30%)</b>을 기준값(Base) 대비 비율로 환산해 맵 난이도 점수를 산출했습니다.
                </p>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="text-xs font-bold text-slate-500 uppercase">
                  03 · 기대 효과 (Expected Effect)
                </span>
                <p className="text-sm font-bold text-slate-900 mt-1 mb-1">
                  하이 리스크 · 하이 리턴 전략 전환
                </p>
                <p className="text-xs text-slate-700 leading-relaxed">
                  불리한 지형일수록 높은 난이도 배율이 최종 점수에 곱연산되어, 어려운 맵을 리트라이하지 않고 도전하게 만드는 동기를 부여했습니다.
                </p>
              </div>
            </div>

            {/* 수식 및 파라미터 명세 박스 */}
            <div className="p-5 bg-slate-900 text-white rounded-xl mb-4">
              <p className="text-xs font-bold text-amber-400 uppercase tracking-wider mb-2">
                MAP DIFFICULTY QUANTIFICATION FORMULA (맵 난이도 산출 공식)
              </p>
              <div className="p-3.5 bg-slate-800 border border-slate-700 rounded-lg font-mono text-sm sm:text-base text-center text-amber-300 mb-4">
                Difficulty Score = (BaseLength / 경로 길이) × 40 + (BaseCorners / 코너 횟수) × 30 + (BaseSpacing / 평행 간격) × 30
              </div>
              <div className="grid sm:grid-cols-3 gap-3 text-xs">
                <div className="p-3 bg-slate-800/80 rounded border border-slate-700">
                  <p className="font-bold text-white">① 경로 길이 (가중치 40%)</p>
                  <p className="text-slate-300 mt-1">
                    <b>Base 기준값 = 50타일</b> · 경로가 짧을수록 적 노출 시간이 줄어들어 난이도 수치 상승
                  </p>
                </div>
                <div className="p-3 bg-slate-800/80 rounded border border-slate-700">
                  <p className="font-bold text-white">② 코너 횟수 (가중치 30%)</p>
                  <p className="text-slate-300 mt-1">
                    <b>Base 기준값 = 8회</b> · 꺾임이 적을수록 사거리 중첩 효율이 감소하여 난이도 수치 상승
                  </p>
                </div>
                <div className="p-3 bg-slate-800/80 rounded border border-slate-700">
                  <p className="font-bold text-white">③ 평행 경로 간격 (가중치 30%)</p>
                  <p className="text-slate-300 mt-1">
                    <b>Base 기준값 = 5타일</b> · 한 타워가 두 길을 동시에 타격하기 어려울수록 난이도 상승
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 2.3 기획 주안점 3: 난이도 비례 클리어 보상 확률 설계 */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 border-l-4 border-amber-500 pl-3 mb-4">
              2.3. [기획 주안점 3] 난이도 비례 장비 드랍 확률 설계 (EquipmentDropProbability.json)
            </h3>

            <div className="grid md:grid-cols-3 gap-4 mb-5">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="text-xs font-bold text-slate-500 uppercase">
                  01 · 기획 배경 (Problem)
                </span>
                <p className="text-sm font-bold text-slate-900 mt-1 mb-1">
                  하위 등급 누적으로 인한 파밍 피로도
                </p>
                <p className="text-xs text-slate-700 leading-relaxed">
                  고난이도를 클리어해도 하위(일반·고급) 장비가 계속 드랍되면 성장 체감이 정체되고 상위 난이도 도전 동기가 급격히 떨어집니다.
                </p>
              </div>
              <div className="p-4 bg-amber-50/60 border border-amber-200 rounded-lg">
                <span className="text-xs font-bold text-amber-700 uppercase">
                  02 · 기획 의도 (Design Intent)
                </span>
                <p className="text-sm font-bold text-slate-900 mt-1 mb-1">
                  임계점 해금 &amp; 하위 등급 배제 곡선
                </p>
                <p className="text-xs text-slate-700 leading-relaxed">
                  <b>난이도 20(서사 해금), 난이도 60(전설 해금)</b> 구간을 설정하고, 최고 난이도(100) 도달 시 <b>일반 등급 드랍률을 0%로 완전 배제</b>하는 교차 확률 곡선을 설계했습니다.
                </p>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="text-xs font-bold text-slate-500 uppercase">
                  03 · 기대 효과 (Expected Effect)
                </span>
                <p className="text-sm font-bold text-slate-900 mt-1 mb-1">
                  명확한 단계별 파밍 목표 제시
                </p>
                <p className="text-xs text-slate-700 leading-relaxed">
                  플레이어가 현재 스펙에서 목표로 해야 할 다음 난이도 이정표(20 → 60 → 100)가 명확해지고 고난이도 클리어의 보상 효능감이 극대화되었습니다.
                </p>
              </div>
            </div>

            {/* 난이도별 장비 드랍 확률 테이블 */}
            <div className="overflow-x-auto border border-slate-200 rounded-lg">
              <table className="w-full text-sm text-left border-collapse">
                <thead>
                  <tr className="bg-slate-800 text-white text-xs uppercase">
                    <th className="py-3 px-4 border-r border-slate-700">난이도 구간</th>
                    <th className="py-3 px-4 text-center">일반 (Common)</th>
                    <th className="py-3 px-4 text-center">고급 (Uncommon)</th>
                    <th className="py-3 px-4 text-center">희귀 (Rare)</th>
                    <th className="py-3 px-4 text-center bg-purple-900/50">서사 (Epic)</th>
                    <th className="py-3 px-4 text-center bg-amber-700/60">전설 (Legendary)</th>
                    <th className="py-3 px-4">기획 의도 및 해금 구간</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-slate-200 text-xs sm:text-sm">
                  <tr className="bg-white">
                    <td className="py-2.5 px-4 font-bold text-slate-900 border-r">난이도 0</td>
                    <td className="py-2.5 px-4 text-center font-semibold">70%</td>
                    <td className="py-2.5 px-4 text-center">25%</td>
                    <td className="py-2.5 px-4 text-center">5%</td>
                    <td className="py-2.5 px-4 text-center text-slate-400">0%</td>
                    <td className="py-2.5 px-4 text-center text-slate-400">0%</td>
                    <td className="py-2.5 px-4 text-xs text-slate-600">초반 기초 파밍 구간</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="py-2.5 px-4 font-bold text-slate-900 border-r">난이도 20</td>
                    <td className="py-2.5 px-4 text-center">50%</td>
                    <td className="py-2.5 px-4 text-center font-semibold">32%</td>
                    <td className="py-2.5 px-4 text-center">15%</td>
                    <td className="py-2.5 px-4 text-center font-bold text-purple-700 bg-purple-50">3% (해금)</td>
                    <td className="py-2.5 px-4 text-center text-slate-400">0%</td>
                    <td className="py-2.5 px-4 text-xs text-purple-800 font-medium">1차 돌파 목표: 서사 등급 드랍 풀 개방</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-2.5 px-4 font-bold text-slate-900 border-r">난이도 40</td>
                    <td className="py-2.5 px-4 text-center">35%</td>
                    <td className="py-2.5 px-4 text-center font-semibold">35%</td>
                    <td className="py-2.5 px-4 text-center">22%</td>
                    <td className="py-2.5 px-4 text-center text-purple-700 font-semibold">8%</td>
                    <td className="py-2.5 px-4 text-center text-slate-400">0%</td>
                    <td className="py-2.5 px-4 text-xs text-slate-600">중반 성장 구간: 고급·희귀 비중 역전</td>
                  </tr>
                  <tr className="bg-slate-50">
                    <td className="py-2.5 px-4 font-bold text-slate-900 border-r">난이도 60</td>
                    <td className="py-2.5 px-4 text-center">20%</td>
                    <td className="py-2.5 px-4 text-center">30%</td>
                    <td className="py-2.5 px-4 text-center font-semibold">30%</td>
                    <td className="py-2.5 px-4 text-center text-purple-700 font-semibold">15%</td>
                    <td className="py-2.5 px-4 text-center font-bold text-amber-700 bg-amber-50">5% (해금)</td>
                    <td className="py-2.5 px-4 text-xs text-amber-800 font-medium">2차 돌파 목표: 전설 등급 드랍 풀 개방</td>
                  </tr>
                  <tr className="bg-white">
                    <td className="py-2.5 px-4 font-bold text-slate-900 border-r">난이도 80</td>
                    <td className="py-2.5 px-4 text-center">10%</td>
                    <td className="py-2.5 px-4 text-center">20%</td>
                    <td className="py-2.5 px-4 text-center font-semibold">35%</td>
                    <td className="py-2.5 px-4 text-center text-purple-700 font-semibold">25%</td>
                    <td className="py-2.5 px-4 text-center text-amber-700 font-semibold">10%</td>
                    <td className="py-2.5 px-4 text-xs text-slate-600">후반 파밍 구간: 희귀 이상 확률 70% 보장</td>
                  </tr>
                  <tr className="bg-amber-50/40 font-semibold">
                    <td className="py-2.5 px-4 font-extrabold text-slate-900 border-r">난이도 100</td>
                    <td className="py-2.5 px-4 text-center text-red-600 font-bold">0% (배제)</td>
                    <td className="py-2.5 px-4 text-center">15%</td>
                    <td className="py-2.5 px-4 text-center">35%</td>
                    <td className="py-2.5 px-4 text-center text-purple-700 font-bold">30%</td>
                    <td className="py-2.5 px-4 text-center text-amber-700 font-extrabold bg-amber-100/70">20%</td>
                    <td className="py-2.5 px-4 text-xs text-slate-900 font-bold">최종 파밍 구간: 일반 장비 완전 배제 &amp; 무한모드 해금</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* 2.4 기획 주안점 4: 가중치 기반 스탯 예산 밸런싱 */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 border-l-4 border-amber-500 pl-3 mb-4">
              2.4. [기획 주안점 4] 가중치 기반 장비 스탯 예산(Stat Budget) 밸런싱
            </h3>

            <div className="grid md:grid-cols-3 gap-4 mb-5">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="text-xs font-bold text-slate-500 uppercase">
                  01 · 기획 배경 (Problem)
                </span>
                <p className="text-sm font-bold text-slate-900 mt-1 mb-1">
                  100여 종 장비의 스탯 인플레이션 위험
                </p>
                <p className="text-xs text-slate-700 leading-relaxed">
                  다수의 장비를 감각적으로 개별 설정하면 특정 스탯(특히 사거리·공속)이 전투 효율을 파괴하거나 동일 등급 내에서도 버려지는 장비가 발생합니다.
                </p>
              </div>
              <div className="p-4 bg-amber-50/60 border border-amber-200 rounded-lg">
                <span className="text-xs font-bold text-amber-700 uppercase">
                  02 · 기획 의도 (Design Intent)
                </span>
                <p className="text-sm font-bold text-slate-900 mt-1 mb-1">
                  등급별 총 예산 &amp; 스탯 가중치 공식화
                </p>
                <p className="text-xs text-slate-700 leading-relaxed">
                  등급별 총 스탯 예산을 계단식으로 정의(<b>일반 5pt ~ 전설 120pt</b>)하고, 전투 기여도에 따라 <b>공격력(1.0) · 공격속도(0.8) · 사거리(1.2)</b> 가중치를 부여해 분배했습니다.
                </p>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                <span className="text-xs font-bold text-slate-500 uppercase">
                  03 · 기대 효과 (Expected Effect)
                </span>
                <p className="text-sm font-bold text-slate-900 mt-1 mb-1">
                  등가 교환 밸런스 및 외부 JSON 패치
                </p>
                <p className="text-xs text-slate-700 leading-relaxed">
                  단일 특화 장비와 하이브리드 장비 간 가치 총량을 균등하게 유지했으며, 외부 JSON 테이블 분리로 코드 빌드 없이 즉각적인 밸런스 조정이 가능해졌습니다.
                </p>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-6">
              {/* 등급별 예산 스케일링 표 */}
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-800 text-white px-4 py-2.5 text-xs font-bold uppercase">
                  등급별 총 스탯 예산 (Total Stat Budget) 계단식 스케일링
                </div>
                <table className="w-full text-xs sm:text-sm text-left">
                  <thead className="bg-slate-100 text-slate-700 border-b border-slate-200">
                    <tr>
                      <th className="py-2 px-3">장비 등급</th>
                      <th className="py-2 px-3 text-center">할당 예산 (pt)</th>
                      <th className="py-2 px-3">단일 스탯 기준점 예시</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-slate-200">
                    <tr>
                      <td className="py-2 px-3 font-semibold">일반 (Common)</td>
                      <td className="py-2 px-3 text-center font-bold">약 5 pt</td>
                      <td className="py-2 px-3 text-slate-600">공격력 +5% 또는 공속 +6%</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-semibold text-emerald-700">고급 (Uncommon)</td>
                      <td className="py-2 px-3 text-center font-bold">약 15 pt</td>
                      <td className="py-2 px-3 text-slate-600">공격력 +15% 수준</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-semibold text-blue-700">희귀 (Rare)</td>
                      <td className="py-2 px-3 text-center font-bold">약 30 pt</td>
                      <td className="py-2 px-3 text-slate-600">공격력 +30% 수준</td>
                    </tr>
                    <tr>
                      <td className="py-2 px-3 font-semibold text-purple-700">서사 (Epic)</td>
                      <td className="py-2 px-3 text-center font-bold">약 60 pt</td>
                      <td className="py-2 px-3 text-slate-600">다중 스탯 복합 분배 + 특수 효과</td>
                    </tr>
                    <tr className="bg-amber-50/50">
                      <td className="py-2 px-3 font-bold text-amber-800">전설 (Legendary)</td>
                      <td className="py-2 px-3 text-center font-extrabold text-amber-800">약 120 pt</td>
                      <td className="py-2 px-3 text-slate-800 font-medium">최상위 스탯 분배 + 고유 액티브/패시브</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              {/* 스탯 가중치 환산 규칙 */}
              <div className="border border-slate-200 rounded-lg overflow-hidden">
                <div className="bg-slate-800 text-white px-4 py-2.5 text-xs font-bold uppercase">
                  스탯 종류별 가치 가중치 (Stat Weight Multiplier)
                </div>
                <div className="p-4 space-y-3 text-xs sm:text-sm bg-white">
                  <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded border border-slate-200">
                    <div>
                      <span className="font-bold text-slate-900">물리/마법 공격력 (ATK)</span>
                      <p className="text-xs text-slate-500">모든 타워의 기본 화력 기준점</p>
                    </div>
                    <span className="px-2.5 py-1 bg-slate-800 text-white font-mono font-bold rounded text-xs">
                      가중치 1.0 (기준)
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-slate-50 rounded border border-slate-200">
                    <div>
                      <span className="font-bold text-slate-900">공격 속도 (ASPD)</span>
                      <p className="text-xs text-slate-500">오버킬 손실을 감안하여 포인트당 수치 우대</p>
                    </div>
                    <span className="px-2.5 py-1 bg-slate-700 text-white font-mono font-bold rounded text-xs">
                      가중치 0.8
                    </span>
                  </div>
                  <div className="flex items-center justify-between p-2.5 bg-amber-50 rounded border border-amber-200">
                    <div>
                      <span className="font-bold text-amber-900">공격 사거리 (RANGE)</span>
                      <p className="text-xs text-amber-800">경로 중첩 타격 효율이 기하급수적이므로 높은 비용 책정</p>
                    </div>
                    <span className="px-2.5 py-1 bg-amber-600 text-white font-mono font-bold rounded text-xs">
                      가중치 1.2 (고비용)
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* CHAPTER 03. 세부 전투 및 콘텐츠 명세 (Combat & Content Specifications) */}
      {/* ===================================================================== */}
      <section
        id="gdd-systems"
        className="scroll-mt-20 bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8"
      >
        <div className="flex items-center gap-3 border-b border-slate-200 pb-4 mb-6">
          <span className="px-3 py-1 text-xs font-extrabold bg-slate-900 text-amber-400 rounded">
            CHAPTER 03
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900">
            세부 전투 및 콘텐츠 명세 (Combat &amp; Content Specifications)
          </h2>
        </div>

        <div className="space-y-10">
          {/* 3.1 타워 시스템 */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 border-l-4 border-amber-500 pl-3 mb-4">
              3.1. 타워 역할군 매트릭스 및 6종 상세 명세
            </h3>
            <p className="text-sm text-slate-700 mb-4">
              단일 타워 도배를 방지하기 위해 <b>타겟 수(단일 vs 다중)</b>와 <b>교전 사거리(근거리 고화력 vs 원거리 지속딜)</b>, 그리고 <b>공격 속성(물리·마법·복합)</b>을 교차 설계했습니다. 복합형 타워는 물리/마법 업그레이드 효율을 합산 적용받습니다.
            </p>

            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 mb-5">
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                <p className="font-bold text-sm text-slate-900">보스 특화형 (단일 딜러)</p>
                <p className="text-xs text-slate-600 mt-1">단일 타겟 · 높은 DPS (검사, 레이저)</p>
              </div>
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                <p className="font-bold text-sm text-slate-900">웨이브 처리형 (광역 딜러)</p>
                <p className="text-xs text-slate-600 mt-1">다중 타겟 · 범위 제압 (궁수, 창술사)</p>
              </div>
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                <p className="font-bold text-sm text-slate-900">올라운더 (보조 딜러)</p>
                <p className="text-xs text-slate-600 mt-1">저코스트 · 복합 속성 수혜 (기본 타워)</p>
              </div>
              <div className="p-3.5 bg-slate-50 border border-slate-200 rounded-lg">
                <p className="font-bold text-sm text-slate-900">시너지 지원형 (디버퍼)</p>
                <p className="text-xs text-slate-600 mt-1">적 방어력 삭감 · 고난이도 필수 (사제)</p>
              </div>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4 mb-4">
              {[
                {
                  name: "기본 타워",
                  cost: "50 TC",
                  type: "복합형",
                  desc: "초반 라인 안정화를 담당하며 물리·마법 업그레이드를 모두 합산 적용받는 성장형 기본 타워",
                },
                {
                  name: "검사 타워",
                  cost: "70 TC",
                  type: "물리형",
                  desc: "짧은 사거리 대신 빠른 공격 속도와 높은 단일 물리 피해량을 보유한 코너 배치 특화 딜러",
                },
                {
                  name: "창술사 타워",
                  cost: "200 TC",
                  type: "물리형",
                  desc: "중거리에서 최대 4개 대상을 동시에 타격하여 중·후반 밀집 웨이브를 돌파하는 정예 딜러",
                },
                {
                  name: "궁수 타워",
                  cost: "130 TC",
                  type: "물리형",
                  desc: "넓은 사거리와 다중 화살 발사로 일반 몬스터 웨이브 정리 능력이 뛰어난 원거리 광역 딜러",
                },
                {
                  name: "레이저 타워",
                  cost: "120 TC",
                  type: "마법형",
                  desc: "물리 방어력이 높은 네임드 및 보스 몬스터를 녹이는 고화력 단일 마법 DPS 딜러",
                },
                {
                  name: "사제 타워",
                  cost: "100 TC",
                  type: "마법형",
                  desc: "피격 대상의 방어력을 감소시켜 아군 딜러진의 전체 화력 효율을 증폭시키는 핵심 시너지 타워",
                },
              ].map((tower, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-white border border-slate-200 rounded-lg shadow-sm"
                >
                  <div className="flex items-center justify-between mb-2">
                    <h4 className="font-bold text-slate-900">{tower.name}</h4>
                    <div className="flex gap-1.5">
                      <span className="text-xs font-bold px-2 py-0.5 bg-amber-100 text-amber-900 rounded">
                        {tower.cost}
                      </span>
                      <span className="text-xs font-semibold px-2 py-0.5 bg-slate-100 text-slate-700 rounded">
                        {tower.type}
                      </span>
                    </div>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {tower.desc}
                  </p>
                </div>
              ))}
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
              <ImgPrefixed
                src="/Desc/TowerButton.png"
                className="w-full object-cover rounded"
              />
              <figcaption className="text-center text-xs text-slate-500 mt-2">
                ▲ 인게임 타워 건설 패널 (TC 코스트 표기)
              </figcaption>
            </div>
          </div>

          {/* 3.2 스킬 시스템 & 3.3 웨이브 시스템 */}
          <div className="grid md:grid-cols-2 gap-6">
            <div className="p-5 bg-slate-50 border border-slate-200 rounded-lg">
              <h3 className="text-base font-bold text-slate-900 border-l-4 border-amber-500 pl-3 mb-3">
                3.2. 스킬 및 SP 자원 경제
              </h3>
              <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-700 mb-4">
                <li>
                  <b>설계 의도:</b> 골드(타워 건설/업그레이드)와 분리된 독립 자원(SP)을 두어 위기 모면용 액티브 개입 수단 제공
                </li>
                <li>
                  <b>SP 상한 및 수급:</b> 초기값 0 / 최대 200 SP (웨이브 클리어 시 기본 20 SP 확정 지급 + 랜덤 보상으로 20~60 추가 수급)
                </li>
                <li>
                  <b>사용 제약:</b> 모든 스킬 20 SP 소모, <b>웨이브당 스킬별 1회 사용 제한</b>을 두어 스킬 난사를 막고 타이밍 판단 요구
                </li>
              </ul>
              <ImgPrefixed
                src="/Desc/SkillButton.png"
                className="w-full object-cover rounded border border-slate-200"
              />
            </div>

            <div className="p-5 bg-slate-50 border border-slate-200 rounded-lg">
              <h3 className="text-base font-bold text-slate-900 border-l-4 border-amber-500 pl-3 mb-3">
                3.3. 웨이브 템포 및 몬스터 구조
              </h3>
              <p className="text-xs sm:text-sm text-slate-700 mb-4 leading-relaxed">
                플레이어가 자신의 덱이 광역 처리와 단일 보스 딜링 중 어디에 취약한지 중간 점검할 수 있도록 10웨이브 단위 페이즈를 구성했습니다.
              </p>
              <div className="space-y-2.5">
                <div className="p-3 bg-white border border-slate-200 rounded">
                  <p className="font-bold text-sm text-slate-900">
                    ① 일반 웨이브 (Wave 1~5, 7~9)
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    웨이브당 30마리 몬스터 출현 · 광역 타워 효율 및 기본 라인 유지력 검증
                  </p>
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded">
                  <p className="font-bold text-sm text-amber-800">
                    ② 네임드 웨이브 (Wave 6 · 중간 점검)
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    강화된 능력치의 정예 몬스터 등장 · 보스전 진입 전 단일 화력 및 방어력 삭감 준비도 체크
                  </p>
                </div>
                <div className="p-3 bg-white border border-slate-200 rounded">
                  <p className="font-bold text-sm text-red-700">
                    ③ 보스 웨이브 (Wave 10 · 최종 관문)
                  </p>
                  <p className="text-xs text-slate-600 mt-0.5">
                    최종 클리어 목표 · 처치 시 선택 난이도 확률 테이블에 따른 장비 드랍 보상 정산
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 3.4 장비 도감 & RCoin 상점 (불쾌감 완화 장치) */}
          <div>
            <h3 className="text-lg font-bold text-slate-900 border-l-4 border-amber-500 pl-3 mb-4">
              3.4. 장비 도감 및 RCoin 상점 시스템 (파밍 편차 완화 설계)
            </h3>
            <p className="text-sm text-slate-700 mb-4">
              확률형 장비 파밍에서 필연적으로 발생하는 <b>‘중복 장비 획득의 불쾌감’</b>을 해소하기 위해, 중복 획득 시 등급에 비례한 <b>RCoin</b>으로 즉시 환급하고 상점 슬롯머신 뽑기로 재도전할 수 있는 보완 루프를 구축했습니다.
            </p>

            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <ImgPrefixed
                  src="/Desc/WaitingRoom.png"
                  className="w-full object-cover rounded border border-slate-200"
                />
                <figcaption className="text-center text-xs font-semibold text-slate-600 mt-2">
                  ▲ 대기실 장비 장착 및 난이도 설정 UI
                </figcaption>
              </div>
              <div className="p-3 bg-slate-50 border border-slate-200 rounded-lg">
                <ImgPrefixed
                  src="/Desc/Collect.png"
                  className="w-full object-cover rounded border border-slate-200"
                />
                <figcaption className="text-center text-xs font-semibold text-slate-600 mt-2">
                  ▲ 장비 도감 (수집 현황 및 부위별 스탯·특수 스킬 확인)
                </figcaption>
              </div>
            </div>

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>
                <ImgPrefixed
                  src="/Desc/Store1.png"
                  className="w-full object-cover rounded border border-slate-200"
                />
                <figcaption className="text-center text-xs text-slate-600 mt-1.5">
                  상점 UI
                </figcaption>
              </div>
              <div>
                <ImgPrefixed
                  src="/Desc/Store3.png"
                  className="w-full object-cover rounded border border-slate-200"
                />
                <figcaption className="text-center text-xs text-slate-600 mt-1.5">
                  뽑기 연출 1
                </figcaption>
              </div>
              <div>
                <ImgPrefixed
                  src="/Desc/StoreAnimation.gif"
                  className="w-full object-cover rounded border border-slate-200"
                />
                <figcaption className="text-center text-xs text-slate-600 mt-1.5">
                  슬롯머신 애니메이션
                </figcaption>
              </div>
              <div>
                <ImgPrefixed
                  src="/Desc/Store4.png"
                  className="w-full object-cover rounded border border-slate-200"
                />
                <figcaption className="text-center text-xs text-slate-600 mt-1.5">
                  최종 획득 결과
                </figcaption>
              </div>
            </div>
          </div>

          {/* 3.5 엔드 콘텐츠: 무한모드 및 리더보드 */}
          <div className="p-6 bg-slate-50 border border-slate-300 rounded-xl">
            <div className="flex items-center gap-2 mb-3">
              <span className="px-2.5 py-0.5 text-xs font-bold bg-amber-600 text-white rounded">
                END-CONTENT
              </span>
              <h3 className="text-lg font-bold text-slate-900">
                3.5. 엔드 콘텐츠: 무한모드 및 글로벌 리더보드
              </h3>
            </div>
            <p className="text-sm text-slate-700 mb-4">
              일반 모드 최고 난이도(100)를 클리어한 숙련 유저가 파밍한 최종 장비 세팅의 한계를 시험하고 타 유저와 경쟁할 수 있는 엔드 콘텐츠입니다.
            </p>
            <ul className="list-disc pl-5 space-y-1.5 text-xs sm:text-sm text-slate-800 mb-5">
              <li>
                <b>순환형 타임어택 규칙:</b> 최종 웨이브가 없으며 웨이브당 <b>2분 제한 시간</b> 부여. 적이 종점에 도달해도 즉시 패배하지 않고 시작 지점으로 순환합니다.
              </li>
              <li>
                <b>패배 및 체력 차감 조건:</b> 2분 제한 시간 종료 시 맵에 살아남은 적 1마리당 플레이어 HP가 1씩 감소하며, HP가 0이 되면 최종 점수를 정산합니다.
              </li>
              <li>
                <b>점수 정산 및 데미지 분석기:</b> 도달 웨이브 점수 × <b>맵 난이도 보정 배율</b> + 남은 시간 보너스를 합산하여 PlayFab 글로벌 리더보드(TOP 10)에 등록하며, 우측 상단 <b>실시간 데미지 미터기</b>로 타워별 딜 지분을 검증할 수 있습니다.
              </li>
            </ul>
            <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
              <div>
                <ImgPrefixed
                  src="/Desc/InfinityMode.png"
                  className="w-full object-cover rounded border border-slate-200"
                />
                <figcaption className="text-center text-xs text-slate-600 mt-1.5">
                  무한모드 활성화 UI
                </figcaption>
              </div>
              <div>
                <ImgPrefixed
                  src="/Desc/DamageMeter.png"
                  className="w-full object-cover rounded border border-slate-200"
                />
                <figcaption className="text-center text-xs text-slate-600 mt-1.5">
                  실시간 타워 데미지 분석기
                </figcaption>
              </div>
              <div>
                <ImgPrefixed
                  src="/Desc/IngameReaderBoard.png"
                  className="w-full object-cover rounded border border-slate-200"
                />
                <figcaption className="text-center text-xs text-slate-600 mt-1.5">
                  인게임 글로벌 순위표
                </figcaption>
              </div>
              <div>
                <ImgPrefixed
                  src="/Desc/PlayFabReaderBoard.png"
                  className="w-full object-cover rounded border border-slate-200"
                />
                <figcaption className="text-center text-xs text-slate-600 mt-1.5">
                  PlayFab 서버 리더보드 데이터
                </figcaption>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* CHAPTER 04. 데이터 기반 포스트모템 (Data-Driven Postmortem) */}
      {/* ===================================================================== */}
      <section
        id="gdd-postmortem"
        className="scroll-mt-20 bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8"
      >
        <div className="flex items-center gap-3 border-b border-slate-200 pb-4 mb-6">
          <span className="px-3 py-1 text-xs font-extrabold bg-amber-600 text-white rounded">
            CHAPTER 04
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900">
            데이터 기반 포스트모템 (PlayFab 로그 분석 및 밸런스 패치)
          </h2>
        </div>

        <p className="text-sm text-slate-700 leading-relaxed mb-6">
          베타 테스트 배포 이후 직관에 의존한 밸런싱을 지양하기 위해, <b>PlayFab API 기반 `session_summary` 전투 텔레메트리 로그</b>(클리어 웨이브, 장착 장비, 타워별 건설 빈도 및 누적 딜량)를 수집·쿼리하여 메타 고착화 문제를 진단하고 <b>`Beta_v0.2.1` 밸런스 패치</b>를 단행했습니다.
        </p>

        {/* 문제 진단 -> 패치 조치 -> 결과 요약 */}
        <div className="grid md:grid-cols-3 gap-4 mb-8">
          <div className="p-4 bg-red-50/60 border border-red-200 rounded-lg">
            <span className="text-xs font-bold text-red-700 uppercase">
              STEP 01 · 데이터 문제 진단
            </span>
            <p className="text-sm font-bold text-slate-900 mt-1 mb-1">
              궁수 타워(29%) 쏠림 &amp; 창술사(8%) 소외
            </p>
            <p className="text-xs text-slate-700 leading-relaxed">
              PlayFab 로그 분석 결과, 기본 사거리가 넓은 <b>‘궁수 타워’</b>에 장비의 <b>‘공격 사거리 증가’</b> 옵션을 중첩해 맵 전체를 타격하는 빌드가 과도한 시너지를 내며 세팅이 획일화되었고, 고코스트 중거리 광역 딜러인 <b>‘창술사 타워’는 선택률 8%</b>로 철저히 소외되었습니다.
            </p>
          </div>

          <div className="p-4 bg-amber-50/60 border border-amber-200 rounded-lg">
            <span className="text-xs font-bold text-amber-800 uppercase">
              STEP 02 · 밸런스 패치 (Beta_v0.2.1)
            </span>
            <p className="text-sm font-bold text-slate-900 mt-1 mb-1">
              사거리 시너지 억제 및 역할군 정상화
            </p>
            <ul className="list-disc pl-4 text-xs text-slate-700 space-y-1 leading-relaxed">
              <li>
                <b>전 장비 ‘공격 사거리’ 옵션 효율 50% 축소</b> (사거리 중첩을 통한 맵 전체 타격 방지)
              </li>
              <li>
                <b>궁수 타워</b> 기본 공격력·사거리 하향 조정
              </li>
              <li>
                <b>창술사 타워</b> 공격력 및 동시 타격 효율 상향 조정
              </li>
            </ul>
          </div>

          <div className="p-4 bg-emerald-50/60 border border-emerald-200 rounded-lg">
            <span className="text-xs font-bold text-emerald-800 uppercase">
              STEP 03 · 패치 후 검증 결과
            </span>
            <p className="text-sm font-bold text-slate-900 mt-1 mb-1">
              전 타워 선택률 12% ~ 20% 균형 달성
            </p>
            <p className="text-xs text-slate-700 leading-relaxed">
              패치 이후 궁수 타워의 독점 점유율이 <b>29% → 20%(-9%p)</b>로 완화되었고, 소외되던 창술사 타워 선택률이 <b>8% → 15%(+7%p)</b>로 약 2배 상승하며 6종 타워가 모두 전략적 가치를 갖는 메타로 개선되었습니다.
            </p>
          </div>
        </div>

        {/* 패치 전/후 타워 선택률 비교 테이블 */}
        <div className="border border-slate-200 rounded-xl overflow-hidden mb-4">
          <div className="bg-slate-900 text-white px-5 py-3 flex items-center justify-between">
            <span className="text-xs sm:text-sm font-bold">
              📊 PlayFab 전투 로그 기반 패치 전·후 타워 6종 선택률(Pick Rate) 비교
            </span>
            <span className="text-xs text-amber-400 font-mono">
              Source: PlayFab session_summary Telemetry
            </span>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full text-xs sm:text-sm text-left border-collapse">
              <thead>
                <tr className="bg-slate-100 text-slate-700 border-b border-slate-200">
                  <th className="py-2.5 px-4">타워 명칭</th>
                  <th className="py-2.5 px-4">역할군</th>
                  <th className="py-2.5 px-4 text-center">패치 전 (Before)</th>
                  <th className="py-2.5 px-4 text-center">패치 후 (After v0.2.1)</th>
                  <th className="py-2.5 px-4 text-center">변동폭</th>
                  <th className="py-2.5 px-4">지표 해석</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-200">
                <tr>
                  <td className="py-2.5 px-4 font-bold">기본 타워</td>
                  <td className="py-2.5 px-4 text-slate-600">초반 보조 / 복합형</td>
                  <td className="py-2.5 px-4 text-center">11%</td>
                  <td className="py-2.5 px-4 text-center font-semibold">12%</td>
                  <td className="py-2.5 px-4 text-center text-slate-600">+1%p</td>
                  <td className="py-2.5 px-4 text-xs text-slate-600">초반 빌드업 픽률 안정적 유지</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-bold">검사 타워</td>
                  <td className="py-2.5 px-4 text-slate-600">근거리 단일 물리 딜러</td>
                  <td className="py-2.5 px-4 text-center">17%</td>
                  <td className="py-2.5 px-4 text-center font-semibold">16%</td>
                  <td className="py-2.5 px-4 text-center text-slate-600">-1%p</td>
                  <td className="py-2.5 px-4 text-xs text-slate-600">코너 지형 주력 단일 딜러 역할 유지</td>
                </tr>
                <tr className="bg-emerald-50/50">
                  <td className="py-2.5 px-4 font-extrabold text-emerald-900">창술사 타워</td>
                  <td className="py-2.5 px-4 text-emerald-800 font-medium">중거리 4타겟 물리 딜러</td>
                  <td className="py-2.5 px-4 text-center text-red-600 font-bold">8% (최저)</td>
                  <td className="py-2.5 px-4 text-center text-emerald-700 font-extrabold">15%</td>
                  <td className="py-2.5 px-4 text-center font-bold text-emerald-700">+7%p ▲</td>
                  <td className="py-2.5 px-4 text-xs text-emerald-900 font-semibold">상향 패치 후 중·후반 광역 딜러로 채택률 정상화</td>
                </tr>
                <tr className="bg-amber-50/50">
                  <td className="py-2.5 px-4 font-extrabold text-amber-900">궁수 타워</td>
                  <td className="py-2.5 px-4 text-amber-800 font-medium">원거리 다중 물리 딜러</td>
                  <td className="py-2.5 px-4 text-center text-red-600 font-bold">29% (독점)</td>
                  <td className="py-2.5 px-4 text-center text-amber-900 font-extrabold">20%</td>
                  <td className="py-2.5 px-4 text-center font-bold text-amber-700">-9%p ▼</td>
                  <td className="py-2.5 px-4 text-xs text-amber-900 font-semibold">사거리 옵션 하향 및 스탯 조정으로 과도한 독점 해소</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-bold">레이저 타워</td>
                  <td className="py-2.5 px-4 text-slate-600">단일 고화력 마법 딜러</td>
                  <td className="py-2.5 px-4 text-center">17%</td>
                  <td className="py-2.5 px-4 text-center font-semibold">18%</td>
                  <td className="py-2.5 px-4 text-center text-slate-600">+1%p</td>
                  <td className="py-2.5 px-4 text-xs text-slate-600">보스/네임드 마법 딜러 포지션 공고화</td>
                </tr>
                <tr>
                  <td className="py-2.5 px-4 font-bold">사제 타워</td>
                  <td className="py-2.5 px-4 text-slate-600">방어력 감소 디버퍼</td>
                  <td className="py-2.5 px-4 text-center">18%</td>
                  <td className="py-2.5 px-4 text-center font-semibold">19%</td>
                  <td className="py-2.5 px-4 text-center text-slate-600">+1%p</td>
                  <td className="py-2.5 px-4 text-xs text-slate-600">고난이도 필수 시너지 버퍼 역할 유지</td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* CHAPTER 05. 아트 & 사운드 디렉션 (Art & Audio Direction) */}
      {/* ===================================================================== */}
      <section
        id="gdd-art-audio"
        className="scroll-mt-20 bg-white rounded-xl border border-slate-200 shadow-sm p-6 sm:p-8"
      >
        <div className="flex items-center gap-3 border-b border-slate-200 pb-4 mb-6">
          <span className="px-3 py-1 text-xs font-extrabold bg-slate-900 text-amber-400 rounded">
            CHAPTER 05
          </span>
          <h2 className="text-2xl font-extrabold text-slate-900">
            아트 &amp; 사운드 디렉션 (Art &amp; Audio Direction)
          </h2>
        </div>

        <div className="space-y-6">
          {/* 캐릭터 */}
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
            <h4 className="font-bold text-slate-900 mb-2">
              5.1. 캐릭터 픽셀 아트 및 공격 애니메이션
            </h4>
            <ul className="list-disc pl-5 text-sm text-slate-700 mb-3">
              <li>Aseprite를 활용한 타워 6종 및 몬스터 픽셀 아트 직접 제작</li>
              <li>
                <b>타워 애니메이션:</b> 모든 타워의 대기(Idle) 및 공격 속도와 동기화된 공격(Attack) 스프라이트 애니메이션 구현
              </li>
            </ul>

            <div className="p-4 bg-white rounded-lg overflow-hidden border border-slate-200 grid grid-cols-8">
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

            <div className="p-4 mt-3 bg-white rounded-lg overflow-hidden border border-slate-200 grid grid-cols-3">
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
          <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
            <h4 className="font-bold text-slate-900 mb-2">5.2. 스킬 아이콘 및 이펙트</h4>
            <ul className="list-disc pl-5 text-sm text-slate-700 mb-3">
              <li>타워별 액티브 특수능력의 직관적 인지를 돕는 스킬 아이콘 제작</li>
              <li>동적인 타격 상황은 스프라이트 시트 애니메이션 및 Unity 파티클로 구현</li>
            </ul>

            <div className="p-4 bg-white rounded-lg overflow-hidden border border-slate-200 grid grid-cols-8">
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

            <div className="p-4 mt-3 bg-white rounded-lg overflow-hidden border border-slate-200">
              <ImgPrefixed
                src="/UI/SkillSpearLanding.png"
                className="w-full object-cover"
              />
            </div>
          </div>

          {/* 맵 타일셋 & 오브젝트 */}
          <div className="grid md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
              <h4 className="font-bold text-slate-900 mb-2">
                5.3. 테마별 맵 타일셋 (4종)
              </h4>
              <ul className="list-disc pl-5 text-xs sm:text-sm text-slate-700 mb-3">
                <li>절차적 경로 생성에 대응하는 직선·코너·시작/종점 타일 규격화</li>
                <li>초원, 설원, 사막, 마그마 4종 테마 및 장식 오브젝트 구성</li>
              </ul>
              <div className="p-3 bg-white rounded-lg overflow-hidden border border-slate-200 grid grid-cols-4 gap-x-3">
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

            <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
              <h4 className="font-bold text-slate-900 mb-2">
                5.4. 투사체 및 수집용 장비 아이콘
              </h4>
              <p className="text-xs sm:text-sm text-slate-700 mb-3">
                타워 투사체(화살·투석) 및 부위별(장신구·방어구·신발·장갑·투구·무기) 파밍 장비 스프라이트
              </p>
              <div className="p-3 bg-white rounded-lg overflow-hidden border border-slate-200 grid grid-cols-8 mb-3">
                <ImgPrefixed
                  src="/UI/Arrow.png"
                  className="w-full object-cover"
                />
                <ImgPrefixed
                  src="/UI/Stone.png"
                  className="w-full object-cover"
                />
              </div>
              <div className="p-3 bg-white rounded-lg overflow-hidden border border-slate-200 grid grid-cols-12">
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

          {/* 5.5 게임 음악 */}
          <div className="p-5 bg-slate-50 border border-slate-200 rounded-lg">
            <h4 className="font-bold text-slate-900 mb-3">
              5.5. 테마별 배경음악 (BGM 6종)
            </h4>
            <ul className="list-disc pl-5 grid grid-cols-1 sm:grid-cols-2 items-start gap-x-8 gap-y-4 text-sm text-slate-800">
              <li>
                <b>타이틀 테마</b>
                <AudioPrefixed
                  className="mt-1.5"
                  src="/audio/SFX_BGM_MainTitle.mp3"
                  controls
                />
              </li>
              <li>
                <b>초원 맵 테마</b>
                <AudioPrefixed
                  className="mt-1.5"
                  src="/audio/BGM_Game_Default.wav"
                  controls
                />
              </li>
              <li>
                <b>설원(눈) 맵 테마</b>
                <AudioPrefixed
                  className="mt-1.5"
                  src="/audio/BGM_Game_Snow.wav"
                  controls
                />
              </li>
              <li>
                <b>사막 맵 테마</b>
                <AudioPrefixed
                  className="mt-1.5"
                  src="/audio/BGM_Game_Desert.mp3"
                  controls
                />
              </li>
              <li>
                <b>마그마 맵 테마</b>
                <AudioPrefixed
                  className="mt-1.5"
                  src="/audio/BGM_Game_Magma.mp3"
                  controls
                />
              </li>
              <li>
                <b>스테이지 클리어 테마</b>
                <AudioPrefixed
                  className="mt-1.5"
                  src="/audio/BGM_ClearScene.mp3"
                  controls
                />
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* 하단 탭 전환 안내 배너 */}
      <div className="p-5 bg-slate-900 text-white rounded-xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <p className="text-xs text-amber-400 font-bold uppercase">
            NEXT STEP · TECHNICAL IMPLEMENTATION
          </p>
          <p className="text-sm font-semibold mt-0.5">
            기획된 시스템을 실제로 구현한 C# 코드 아키텍처, State 패턴, 오브젝트 풀링 및 절차적 맵 알고리즘은 [기술서] 탭에서 확인하실 수 있습니다.
          </p>
        </div>
        <button
          onClick={() => {
            onTabChange("tech");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="px-4 py-2.5 bg-amber-500 hover:bg-amber-600 text-slate-950 font-bold text-xs sm:text-sm rounded-lg transition shrink-0"
        >
          기술서 탭으로 이동 →
        </button>
      </div>
    </div>
  );
};

export default PlanPage;
