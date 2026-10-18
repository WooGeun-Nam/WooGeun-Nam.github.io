"use client";

import React, { useState } from "react";
import Link from "next/link";
import ImgPrefixed from "../../../components/ImgPrefixed";

export default function TinyJourneyPage() {
  const [activeTab, setActiveTab] = useState<"plan" | "tech">("plan");

  const tabs = [
    { id: "plan", label: "기획서" },
    { id: "tech", label: "기술서" },
  ] as const;

  const planTocItems = [
    {
      num: "01",
      href: "#section-plan-01",
      title: "게임 개요 및 코어 루프",
      desc: "핵심 콘셉트, 시놉시스, 4단계 순환 코어 루프 및 익스트랙션 텐션",
    },
    {
      num: "02",
      href: "#section-plan-02",
      title: "전투 시스템 및 6대 무기군 아키타입 설계",
      desc: "사거리·공격방식·특수 기믹 분리, 6종 무기군 파라미터 및 전술적 역할",
    },
    {
      num: "03",
      href: "#section-plan-03",
      title: "레벨 디자인 및 6개 스테이지 환경 기믹",
      desc: "2.5D 절벽 고도, Y-Sorting 공격 시인성 보정, 테마별 환경 위험 요소",
    },
    {
      num: "04",
      href: "#section-plan-04",
      title: "아이템·장비 파밍 및 연금술 경제 시스템",
      desc: "6부위 5단계 장비 체계, 몬스터 전리품 연금술 물약 제작 순환 루프",
    },
    {
      num: "05",
      href: "#section-plan-05",
      title: "스테이지 1 몬스터 도감 및 도트 아트 리소스",
      desc: "주인공 및 Stage 1 몬스터 4종, 초반 무기 픽셀 스프라이트 상세",
    },
  ];

  const techTocItems = [
    {
      num: "01",
      href: "#section-tech-01",
      title: "AI 에이전트 협업을 위한 3단계 문서 파이프라인",
      desc: "기획-설계-작업지시 분리를 통한 컨텍스트 유실 방지 및 원자적 구현 체계",
    },
    {
      num: "02",
      href: "#section-tech-02",
      title: "Excel 마스터 데이터 실시간 동기화 파이프라인",
      desc: "AssetPostprocessor 기반 ScriptableObject 자동 파싱 및 무코드 밸런싱 환경",
    },
    {
      num: "03",
      href: "#section-tech-03",
      title: "2.5D 절벽 타일셋 및 물리 콜라이더 자동 빌더",
      desc: "3계층 레이어 자동 분리, Custom Physics Shape 기반 낭떠러지 충돌체 생성",
    },
    {
      num: "04",
      href: "#section-tech-04",
      title: "코어 클라이언트 아키텍처 및 렌더링 최적화",
      desc: "ServiceLocator 의존성 주입, Zero-GC 풀링, Y-Sorting 동적 렌더 오더 제어",
    },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 space-y-12">
      {/* ===================================================================== */}
      {/* 상단: 대표 이미지 / 기본 프로젝트 정보 */}
      {/* ===================================================================== */}
      <section className="grid gap-8 md:grid-cols-2 items-stretch">
        {/* 메인 미리보기 도트 썸네일 */}
        <div className="bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center p-10 overflow-hidden shadow-sm">
          <ImgPrefixed
            src="/TinyJourney/CatSide.png"
            alt="TinyJourney 대표 캐릭터"
            className="w-48 h-48 [image-rendering:pixelated] object-contain transition-transform duration-300 hover:scale-105"
          />
        </div>

        {/* 메타 정보 */}
        <div className="flex flex-col justify-between">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <span className="px-2.5 py-0.5 text-xs font-semibold bg-blue-100 text-blue-700 rounded-full">
                개발 진행 중
              </span>
              <span className="px-2.5 py-0.5 text-xs font-semibold bg-gray-100 text-gray-700 rounded-full">
                2D Top-down Action RPG
              </span>
            </div>

            <h1 className="text-4xl font-bold underline decoration-blue-500 underline-offset-8">
              TinyJourney (가제)
            </h1>

            <dl className="grid grid-cols-[120px_1fr] gap-x-4 gap-y-6 text-gray-800 mt-8 text-sm sm:text-[15px]">
              <dt className="font-semibold text-gray-600">ROLE</dt>
              <dd>기획, 개발, 디자인</dd>

              <dt className="font-semibold text-gray-600">DURATION</dt>
              <dd>2026.03 ~ 진행 중</dd>

              <dt className="font-semibold text-gray-600">TEAM</dt>
              <dd>1인 개발</dd>

              <dt className="font-semibold text-gray-600">PLATFORM</dt>
              <dd>PC (Unity 6 · 2D URP)</dd>
            </dl>
          </div>

          <div className="mt-6 flex flex-wrap gap-3">
            <Link
              href="/portfolio#projects"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold
                   bg-gray-200 text-gray-900 hover:bg-gray-300 focus-visible:outline-none
                   focus-visible:ring-2 focus-visible:ring-blue-300 transition"
            >
              목록으로 돌아가기
            </Link>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 하단 상세 탭 섹션 (기획서 | 기술서) */}
      {/* ===================================================================== */}
      <section className="pt-8">
        <div className="w-full">
          {/* 탭 버튼 헤더 */}
          <div className="flex w-full">
            {tabs.map((tab, index) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`flex-1 py-3 font-semibold transition border border-b-0 text-base
                ${
                  activeTab === tab.id
                    ? "bg-white text-blue-600 border-gray-300 shadow-[inset_0_3px_0_0_#3b82f6]"
                    : "bg-gray-100 text-gray-600 border-gray-200 hover:bg-gray-200"
                }
                ${index === 0 ? "rounded-tl-lg" : ""}
                ${index === tabs.length - 1 ? "rounded-tr-lg" : ""}`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* 탭 본문 컨테이너 */}
          <div className="w-full bg-white border border-t-0 border-gray-300 rounded-b-lg shadow p-6 sm:p-8">
            {/* =============================================================== */}
            {/* [기획서] 탭 콘텐츠 */}
            {/* =============================================================== */}
            <div style={{ display: activeTab === "plan" ? "block" : "none" }}>
              <div className="space-y-12 text-gray-800">
                {/* 헤더 및 태그 */}
                <div className="border-b border-gray-200 pb-8">
                  <div className="text-center max-w-3xl mx-auto pt-2 mb-8">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                      TinyJourney 게임 기획서
                    </h2>
                    <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed mb-6">
                      6대 무기군 전투 메커니즘과 2.5D 절벽 고도 레벨 디자인,
                      <br />
                      연금술 경제 순환을 결합한 2D 탑다운 액션 RPG 기획 명세서입니다.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {[
                        "#탑다운 액션 RPG",
                        "#6대 무기군 아키타입",
                        "#2.5D 고도 레벨 디자인",
                        "#연금술 경제 시스템",
                        "#절차적 아레나",
                        "#1인 개발",
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

                  {/* 기획서 목차 박스 */}
                  <div className="max-w-4xl mx-auto bg-gray-50 border border-gray-200 rounded-xl p-5">
                    <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-4">
                      <h3 className="text-base font-bold text-gray-900 border-l-4 border-blue-500 pl-2.5">
                        기획서 목차
                      </h3>
                      <span className="text-xs text-gray-500">
                        클릭 시 해당 섹션으로 이동
                      </span>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {planTocItems.map((item) => (
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

                {/* 01. 게임 개요 및 코어 루프 */}
                <section id="section-plan-01" className="scroll-mt-24 space-y-4">
                  <div className="border-l-4 border-blue-500 pl-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      01. 게임 개요 및 코어 루프
                    </h3>
                  </div>

                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-4 text-sm sm:text-[15px] leading-relaxed">
                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">핵심 콘셉트</h4>
                      <p className="text-gray-700">
                        기억을 잃은 고양이 영웅이 6개의 테마 대륙을 돌파하며 잃어버린 힘의 파편을 되찾는 2D 탑다운 액션 RPG입니다.
                        인간의 시선이 닿지 않는 발밑 세계에서 버려진 도구(나뭇가지, 포크, 스푼)를 무기 삼아 괴물에 맞서는 묵직한 액션 감성을 지향합니다.
                      </p>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-2">4단계 순환 코어 루프</h4>
                      <div className="grid sm:grid-cols-4 gap-3 text-center">
                        <div className="bg-white border border-gray-200 rounded-lg p-3">
                          <span className="inline-block px-2 py-0.5 text-xs font-bold bg-blue-100 text-blue-700 rounded mb-1">
                            Step 1
                          </span>
                          <p className="font-bold text-gray-900 text-sm">[전투·탐험]</p>
                          <p className="text-xs text-gray-600 mt-1">
                            스테이지 돌파 &amp; 기믹 파훼
                          </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-3">
                          <span className="inline-block px-2 py-0.5 text-xs font-bold bg-blue-100 text-blue-700 rounded mb-1">
                            Step 2
                          </span>
                          <p className="font-bold text-gray-900 text-sm">[파밍]</p>
                          <p className="text-xs text-gray-600 mt-1">
                            부위별 장비·연금술 재료 수집
                          </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-3">
                          <span className="inline-block px-2 py-0.5 text-xs font-bold bg-blue-100 text-blue-700 rounded mb-1">
                            Step 3
                          </span>
                          <p className="font-bold text-gray-900 text-sm">[정비·성장]</p>
                          <p className="text-xs text-gray-600 mt-1">
                            상점 거래 &amp; 물약 조합
                          </p>
                        </div>
                        <div className="bg-white border border-gray-200 rounded-lg p-3">
                          <span className="inline-block px-2 py-0.5 text-xs font-bold bg-blue-100 text-blue-700 rounded mb-1">
                            Step 4
                          </span>
                          <p className="font-bold text-gray-900 text-sm">[도전]</p>
                          <p className="text-xs text-gray-600 mt-1">
                            보스 처치 &amp; 상위 대륙 해금
                          </p>
                        </div>
                      </div>
                    </div>

                    <div>
                      <h4 className="font-bold text-gray-900 mb-1">익스트랙션 기반 텐션</h4>
                      <p className="text-gray-700">
                        방 단위 클리어 후 [다음 방으로 강행]과 [마을로 즉시 귀환]의 선택지를 제시하여,
                        획득한 전리품과 목숨을 건 하이 리스크-하이 리턴의 긴장감을 설계했습니다.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 02. 전투 시스템 및 6대 무기군 아키타입 설계 */}
                <section id="section-plan-02" className="scroll-mt-24 space-y-4">
                  <div className="border-l-4 border-blue-500 pl-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      02. 전투 시스템 및 6대 무기군 아키타입 설계
                    </h3>
                  </div>

                  <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                    <b className="text-gray-900">기획 의도 :</b> 무기 교체만으로 완전히 다른 조작감과 전술적 포지셔닝을 제공하기 위해 사거리, 공격 방식, 특수 기믹을 6개 아키타입으로 분리했습니다.
                    플레이어가 마주하는 몬스터 군집 형태나 보스 패턴에 맞춰 최적의 무기를 스왑하도록 유도합니다.
                  </p>

                  <div className="overflow-x-auto border border-gray-200 rounded-xl">
                    <table className="w-full text-left border-collapse text-sm sm:text-[15px]">
                      <thead>
                        <tr className="bg-gray-100 text-gray-800 font-bold border-b border-gray-200">
                          <th className="py-3 px-4">무기군</th>
                          <th className="py-3 px-4">사거리 / 판정</th>
                          <th className="py-3 px-4">공격 방식 및 특징</th>
                          <th className="py-3 px-4">특수 기믹 및 전술적 역할</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 text-gray-700">
                        <tr className="hover:bg-blue-50/40">
                          <td className="py-3 px-4 font-bold text-gray-900">
                            한손검 (One-Handed Sword)
                          </td>
                          <td className="py-3 px-4">근거리 부채꼴 베기</td>
                          <td className="py-3 px-4">
                            빠른 공속과 짧은 후딜레이를 통한 히트 앤 런 표준 밸런스형
                          </td>
                          <td className="py-3 px-4">
                            안정적인 공수 전환, 가드 캔슬을 통한 빈틈 최소화
                          </td>
                        </tr>
                        <tr className="hover:bg-blue-50/40">
                          <td className="py-3 px-4 font-bold text-gray-900">
                            대검 (Greatsword)
                          </td>
                          <td className="py-3 px-4">중거리 광역 횡베기</td>
                          <td className="py-3 px-4">
                            공격 전/후 이동 속도 페널티, 묵직한 타격감과 광역 제압
                          </td>
                          <td className="py-3 px-4">
                            차징(Charging) 시 슈퍼아머(경직 면역) 및 2.5배 데미지·강한 넉백
                          </td>
                        </tr>
                        <tr className="hover:bg-blue-50/40">
                          <td className="py-3 px-4 font-bold text-gray-900">
                            단검 (Dagger)
                          </td>
                          <td className="py-3 px-4">초근거리 연속 찌르기</td>
                          <td className="py-3 px-4">
                            압도적인 공격 속도, 치명타 확률 +20% 기본 보정
                          </td>
                          <td className="py-3 px-4">
                            배후 공격(Backstab) 적중 시 1.5배 피해 및 순간 회피 연계
                          </td>
                        </tr>
                        <tr className="hover:bg-blue-50/40">
                          <td className="py-3 px-4 font-bold text-gray-900">
                            활 (Bow)
                          </td>
                          <td className="py-3 px-4">원거리 관통 화살</td>
                          <td className="py-3 px-4">
                            원거리 단일/직선 사격, 탄속 기반 정밀 조준 요구
                          </td>
                          <td className="py-3 px-4">
                            화살 수량(최대 10발, 2초당 1발 자동 장전) 자원 관리 및 풀차징 관통
                          </td>
                        </tr>
                        <tr className="hover:bg-blue-50/40">
                          <td className="py-3 px-4 font-bold text-gray-900">
                            지팡이 (Staff)
                          </td>
                          <td className="py-3 px-4">원거리 유도 마법탄</td>
                          <td className="py-3 px-4">
                            MP 소모 기반 타격, 폭발형 범위(AoE) 스플래시 데미지
                          </td>
                          <td className="py-3 px-4">
                            화상(지속 피해), 빙결(이동 둔화), 감전(체인 데미지) 등 원소 상태이상 부여
                          </td>
                        </tr>
                        <tr className="hover:bg-blue-50/40">
                          <td className="py-3 px-4 font-bold text-gray-900">
                            창 (Spear)
                          </td>
                          <td className="py-3 px-4">중장거리 직선 찌르기</td>
                          <td className="py-3 px-4">
                            좁고 긴 일직선 관통 판정을 활용한 거리 유지(Spacing) 특화
                          </td>
                          <td className="py-3 px-4">
                            창 끝점 타격(Sweet Spot) 시 1.3배 추가 피해 및 카운터 판정
                          </td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* 03. 레벨 디자인 및 6개 스테이지 환경 기믹 */}
                <section id="section-plan-03" className="scroll-mt-24 space-y-4">
                  <div className="border-l-4 border-blue-500 pl-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      03. 레벨 디자인 및 6개 스테이지 환경 기믹
                    </h3>
                  </div>

                  <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                    <b className="text-gray-900">기획 의도 :</b> 2D 탑다운 시점의 평면적인 전투를 극복하기 위해 2.5D 절벽 고도(Elevation)와 대륙별 환경 기믹을 결합했습니다.
                    지형의 높낮이에 따른 물리 충돌과 시야 제어를 활용해 전략적 깊이를 확보했습니다.
                  </p>

                  {/* 2.5D 고도 및 공격 시인성 보정 */}
                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-3">
                    <h4 className="font-bold text-gray-900 text-sm sm:text-[15px]">
                      2.5D 절벽 고도 및 공격 시인성 보정 규칙
                    </h4>
                    <ul className="list-disc list-inside space-y-2 text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                      <li>
                        <b>물리 충돌 및 Y-Sorting 계층 분리:</b> 1층 지면과 2층 절벽 상단을 각각 별도의 타일맵 레이어로 분리하고, 절벽 측면 수직 암벽에 벽 콜라이더(<code className="text-xs bg-gray-200 px-1 py-0.5 rounded">Wall_Collider</code>)를 배치하여 자연스러운 낙차감을 연출합니다.
                      </li>
                      <li>
                        <b>공격 시인성 보정:</b> 캐릭터가 무기를 휘두르는 동안 시각적으로 대형 몬스터나 장애물에 가려지지 않도록 공격 판정 진행 중 Y-Sorting 가중치(<code className="text-xs bg-gray-200 px-1 py-0.5 rounded">+0.5f</code>)를 동적으로 보정합니다.
                      </li>
                      <li>
                        <b>48×24 Expansive Arena:</b> 단일 화면의 답답함을 배제하고 시네머신 가상 카메라 스크롤을 활용하여 광활한 전장 속 모퉁이 은폐 및 거리 유도 전술을 유도합니다.
                      </li>
                    </ul>
                  </div>

                  {/* 6대 스테이지 테마 및 환경 기믹 표 */}
                  <div className="overflow-x-auto border border-gray-200 rounded-xl">
                    <table className="w-full text-left border-collapse text-sm sm:text-[15px]">
                      <thead>
                        <tr className="bg-gray-100 text-gray-800 font-bold border-b border-gray-200">
                          <th className="py-3 px-4">스테이지</th>
                          <th className="py-3 px-4">테마 명칭</th>
                          <th className="py-3 px-4">핵심 환경 기믹 &amp; 위험 요소</th>
                          <th className="py-3 px-4">등장 보스</th>
                        </tr>
                      </thead>
                      <tbody className="divide-y divide-gray-200 text-gray-700">
                        <tr className="hover:bg-blue-50/40">
                          <td className="py-3 px-4 font-bold text-gray-900">Stage 1</td>
                          <td className="py-3 px-4">속삭이는 숲</td>
                          <td className="py-3 px-4">
                            수풀 은신 기습, 밟으면 이동 속도가 저하되는 가시 덩굴 지대
                          </td>
                          <td className="py-3 px-4">썩은 나무 정령 (Rotwood)</td>
                        </tr>
                        <tr className="hover:bg-blue-50/40">
                          <td className="py-3 px-4 font-bold text-gray-900">Stage 2</td>
                          <td className="py-3 px-4">메마른 협곡</td>
                          <td className="py-3 px-4">
                            간헐적 모래폭풍(시야 축소 및 이동 저하), 절벽 낙석 지대
                          </td>
                          <td className="py-3 px-4">바위 골렘 (Rock Golem)</td>
                        </tr>
                        <tr className="hover:bg-blue-50/40">
                          <td className="py-3 px-4 font-bold text-gray-900">Stage 3</td>
                          <td className="py-3 px-4">버려진 고대 유적</td>
                          <td className="py-3 px-4">
                            바닥 함정 발판(화살·창 트랩) 및 고대 수호 석상 회전 레이저
                          </td>
                          <td className="py-3 px-4">유적 수호병기 (Ancient Guardian)</td>
                        </tr>
                        <tr className="hover:bg-blue-50/40">
                          <td className="py-3 px-4 font-bold text-gray-900">Stage 4</td>
                          <td className="py-3 px-4">얼어붙은 설원</td>
                          <td className="py-3 px-4">
                            빙판 관성 미끄러짐 및 동상 게이지 누적(모닥불 거점 활용)
                          </td>
                          <td className="py-3 px-4">서리 늑대 우두머리 (Frost Alpha)</td>
                        </tr>
                        <tr className="hover:bg-blue-50/40">
                          <td className="py-3 px-4 font-bold text-gray-900">Stage 5</td>
                          <td className="py-3 px-4">용암 화산 지대</td>
                          <td className="py-3 px-4">
                            주기적 분화 용암 타일 및 화염 간헐천 폭발 판정
                          </td>
                          <td className="py-3 px-4">화염 드래곤 하수인 (Ignis Drake)</td>
                        </tr>
                        <tr className="hover:bg-blue-50/40">
                          <td className="py-3 px-4 font-bold text-gray-900">Stage 6</td>
                          <td className="py-3 px-4">심연의 마왕성</td>
                          <td className="py-3 px-4">
                            어둠 침식(시야 극도 제한) 및 공간 왜곡 차원 포탈 기믹
                          </td>
                          <td className="py-3 px-4">심연의 군주 (Abyss Lord)</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </section>

                {/* 04. 아이템·장비 파밍 및 연금술 경제 시스템 */}
                <section id="section-plan-04" className="scroll-mt-24 space-y-4">
                  <div className="border-l-4 border-blue-500 pl-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      04. 아이템·장비 파밍 및 연금술 경제 시스템
                    </h3>
                  </div>

                  <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                    <b className="text-gray-900">기획 의도 :</b> 단순 수치 상승 장비 외에 몬스터 전리품을 활용한 소모품 제작(연금술)으로 파밍 재화의 지속 가능한 순환 구조를 구축했습니다.
                  </p>

                  <div className="grid sm:grid-cols-2 gap-4">
                    {/* 6부위 장비 & 5단계 등급 */}
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-3">
                      <h4 className="font-bold text-gray-900 text-sm sm:text-[15px]">
                        6부위 장비 슬롯 &amp; 5단계 등급 체계
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600">
                        <b>장비 슬롯 (6종):</b> 무기, 투구, 갑옷, 장갑, 신발, 장신구
                      </p>
                      <div className="space-y-1.5 text-xs sm:text-sm">
                        <div className="flex items-center gap-2">
                          <span className="w-16 px-1.5 py-0.5 text-center font-bold bg-gray-200 text-gray-700 rounded">
                            일반
                          </span>
                          <span className="text-gray-600">기본 능력치 보유 (Common, 흰색)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-16 px-1.5 py-0.5 text-center font-bold bg-green-100 text-green-800 rounded">
                            고급
                          </span>
                          <span className="text-gray-600">보조 스탯 1종 추가 (Uncommon, 초록)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-16 px-1.5 py-0.5 text-center font-bold bg-blue-100 text-blue-800 rounded">
                            희귀
                          </span>
                          <span className="text-gray-600">보조 스탯 2종 추가 (Rare, 파랑)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-16 px-1.5 py-0.5 text-center font-bold bg-purple-100 text-purple-800 rounded">
                            영웅
                          </span>
                          <span className="text-gray-600">스탯 가중치 극대화 (Epic, 보라)</span>
                        </div>
                        <div className="flex items-center gap-2">
                          <span className="w-16 px-1.5 py-0.5 text-center font-bold bg-amber-100 text-amber-800 rounded">
                            전설
                          </span>
                          <span className="text-gray-600">고유 패시브 효과 발동 (Legendary, 주황)</span>
                        </div>
                      </div>
                    </div>

                    {/* 연금술 물약 조합 */}
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-3">
                      <h4 className="font-bold text-gray-900 text-sm sm:text-[15px]">
                        연금술 물약 조합 시스템
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        던전에서 수집한 몬스터 전리품(슬라임 점액, 가시 조각, 도토리 등)을 정비 단계에서 조합하여 전투용 소비 아이템을 생산합니다.
                      </p>
                      <ul className="list-disc list-inside space-y-1.5 text-xs sm:text-sm text-gray-700">
                        <li>
                          <b>회복 물약:</b> 즉시 체력 회복 및 지속 재생 효과
                        </li>
                        <li>
                          <b>신속의 비약:</b> 일정 시간 이동 속도 +30% 및 대시 쿨타임 감소
                        </li>
                        <li>
                          <b>광폭화 영약:</b> 치명타 확률 대폭 증가 및 받는 피해 소폭 증가
                        </li>
                        <li>
                          <b>강철 피부 물약:</b> 적 타격 피격 시 경직 무시(슈퍼아머 부여)
                        </li>
                      </ul>
                    </div>
                  </div>
                </section>

                {/* 05. 스테이지 1 몬스터 도감 및 도트 아트 리소스 */}
                <section id="section-plan-05" className="scroll-mt-24 space-y-4">
                  <div className="border-l-4 border-blue-500 pl-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      05. 스테이지 1 몬스터 도감 및 도트 아트 리소스
                    </h3>
                  </div>

                  <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                    게임에 실제로 적용된 320×180 뷰포트 기준 픽셀 아트 에셋입니다.
                    각 몬스터의 외형적 특징과 공격 패턴이 직관적으로 매칭되도록 시각적 실루엣을 설계했습니다.
                  </p>

                  <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-4">
                    {/* 주인공 */}
                    <div className="border border-gray-200 rounded-xl p-4 bg-white flex flex-col items-center text-center">
                      <div className="h-28 w-28 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center p-2 mb-3">
                        <ImgPrefixed
                          src="/TinyJourney/CatSide.png"
                          alt="주인공 고양이"
                          className="h-24 w-24 object-contain [image-rendering:pixelated]"
                        />
                      </div>
                      <h4 className="font-bold text-gray-900 text-sm">주인공 (Cat Hero)</h4>
                      <p className="text-xs text-blue-600 font-medium mb-1">플레이어블 캐릭터</p>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        기억을 잃은 작은 털뭉치 용사. 민첩한 이동과 부채꼴 베기, 6대 무기군 전환 조작을 수행합니다.
                      </p>
                    </div>

                    {/* 나뭇가지 검 */}
                    <div className="border border-gray-200 rounded-xl p-4 bg-white flex flex-col items-center text-center">
                      <div className="h-28 w-28 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center p-2 mb-3">
                        <ImgPrefixed
                          src="/TinyJourney/weapon_twig.png"
                          alt="나뭇가지 검"
                          className="h-20 w-20 object-contain [image-rendering:pixelated]"
                        />
                      </div>
                      <h4 className="font-bold text-gray-900 text-sm">나뭇가지 검 (Twig Sword)</h4>
                      <p className="text-xs text-blue-600 font-medium mb-1">초반 한손검 무기</p>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        숲 외곽에서 획득하는 기본 무기. 빠른 공속과 낮은 스태미나 소모로 히트 앤 런 템포를 익힙니다.
                      </p>
                    </div>

                    {/* 새싹 슬라임 */}
                    <div className="border border-gray-200 rounded-xl p-4 bg-white flex flex-col items-center text-center">
                      <div className="h-28 w-28 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center p-2 mb-3">
                        <ImgPrefixed
                          src="/TinyJourney/slime_sprout.png"
                          alt="새싹 슬라임"
                          className="h-20 w-20 object-contain [image-rendering:pixelated]"
                        />
                      </div>
                      <h4 className="font-bold text-gray-900 text-sm">새싹 슬라임 (Slime Sprout)</h4>
                      <p className="text-xs text-emerald-600 font-medium mb-1">근접 돌진형 몬스터</p>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        지면을 통통 튀며 플레이어에게 점프 박치기를 시도합니다. 처치 시 슬라임 점액을 드랍합니다.
                      </p>
                    </div>

                    {/* 밤송이 고슴도치 */}
                    <div className="border border-gray-200 rounded-xl p-4 bg-white flex flex-col items-center text-center">
                      <div className="h-28 w-28 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center p-2 mb-3">
                        <ImgPrefixed
                          src="/TinyJourney/chestnut_hedgehog.png"
                          alt="밤송이 고슴도치"
                          className="h-20 w-20 object-contain [image-rendering:pixelated]"
                        />
                      </div>
                      <h4 className="font-bold text-gray-900 text-sm">밤송이 고슴도치</h4>
                      <p className="text-xs text-amber-600 font-medium mb-1">방어 태세 &amp; 가시 발사형</p>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        피격 시 껍질 속으로 몸을 웅크려 방어력을 높이고, 8방향으로 날카로운 가시를 방출합니다.
                      </p>
                    </div>

                    {/* 야생 다람쥐 */}
                    <div className="border border-gray-200 rounded-xl p-4 bg-white flex flex-col items-center text-center">
                      <div className="h-28 w-28 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center p-2 mb-3">
                        <ImgPrefixed
                          src="/TinyJourney/feral_squirrel.png"
                          alt="야생 다람쥐"
                          className="h-20 w-20 object-contain [image-rendering:pixelated]"
                        />
                      </div>
                      <h4 className="font-bold text-gray-900 text-sm">야생 다람쥐 (Feral Squirrel)</h4>
                      <p className="text-xs text-orange-600 font-medium mb-1">원거리 견제형 몬스터</p>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        플레이어와 일정한 안전 거리를 유지하며, 단단한 도토리를 원거리에서 투척합니다.
                      </p>
                    </div>

                    {/* 보스: 썩은 나무 정령 */}
                    <div className="border border-gray-200 rounded-xl p-4 bg-white flex flex-col items-center text-center">
                      <div className="h-28 w-28 bg-gray-50 border border-gray-100 rounded-lg flex items-center justify-center p-2 mb-3">
                        <ImgPrefixed
                          src="/TinyJourney/rotwood.png"
                          alt="썩은 나무 정령"
                          className="h-24 w-24 object-contain [image-rendering:pixelated]"
                        />
                      </div>
                      <h4 className="font-bold text-gray-900 text-sm">썩은 나무 정령 (Rotwood)</h4>
                      <p className="text-xs text-rose-600 font-medium mb-1">Stage 1 최종 보스</p>
                      <p className="text-xs text-gray-600 leading-relaxed">
                        지면에서 광역 가시 뿌리를 솟구치게 하고 새싹 슬라임을 소환하는 복합 광역 패턴을 구사합니다.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>

            {/* =============================================================== */}
            {/* [기술서] 탭 콘텐츠 */}
            {/* =============================================================== */}
            <div style={{ display: activeTab === "tech" ? "block" : "none" }}>
              <div className="space-y-12 text-gray-800">
                {/* 헤더 및 태그 */}
                <div className="border-b border-gray-200 pb-8">
                  <div className="text-center max-w-3xl mx-auto pt-2 mb-8">
                    <h2 className="text-3xl sm:text-4xl font-extrabold text-gray-900 mb-4">
                      TinyJourney 프로그래밍 기술서
                    </h2>
                    <p className="text-sm sm:text-[15px] text-gray-600 leading-relaxed mb-6">
                      AI 에이전트 협업 파이프라인과 Excel 마스터 데이터 실시간 동기화,
                      <br />
                      2.5D 에디터 자동화 빌더 및 코어 클라이언트 아키텍처를 정리한 기술 문서입니다.
                    </p>
                    <div className="flex flex-wrap justify-center gap-2">
                      {[
                        "#AI 문서 파이프라인",
                        "#MasterDataPostprocessor",
                        "#ThemeAndPropAutoBuilder",
                        "#ServiceLocator",
                        "#ObjectPoolManager",
                        "#Y-Sorting 동적 렌더링",
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

                  {/* 기술서 목차 박스 */}
                  <div className="max-w-4xl mx-auto bg-gray-50 border border-gray-200 rounded-xl p-5">
                    <div className="flex items-center justify-between border-b border-gray-200 pb-3 mb-4">
                      <h3 className="text-base font-bold text-gray-900 border-l-4 border-blue-500 pl-2.5">
                        기술서 목차
                      </h3>
                      <span className="text-xs text-gray-500">
                        클릭 시 해당 섹션으로 이동
                      </span>
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      {techTocItems.map((item) => (
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

                {/* 01. AI 에이전트 협업을 위한 3단계 문서 파이프라인 */}
                <section id="section-tech-01" className="scroll-mt-24 space-y-4">
                  <div className="border-l-4 border-blue-500 pl-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      01. AI 에이전트 협업을 위한 3단계 문서 파이프라인
                    </h3>
                  </div>

                  <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                    1인 개발 환경에서 AI 에이전트와의 협업 효율을 극대화하고, 기획 의도 왜곡 및 대형 모델의 컨텍스트 유실(Hallucination)을 방지하기 위해 
                    <b> 기획서 ➔ 프로그래밍 설계서 ➔ 원자적 작업 지시서</b>로 이어지는 3단계 문서 파이프라인을 구축했습니다.
                  </p>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 text-xs font-bold bg-blue-500 text-white rounded">
                          단계 1
                        </span>
                        <h4 className="font-bold text-gray-900 text-sm sm:text-[15px]">
                          기획.md
                        </h4>
                      </div>
                      <p className="text-xs font-semibold text-blue-600">
                        단일 진실 공급원 (SSOT)
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        게임 규칙, 세계관, 6대 무기군 메커니즘, 몬스터 스탯 파라미터 및 레벨 디자인 원칙을 엄격하게 수록합니다.
                      </p>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 text-xs font-bold bg-blue-500 text-white rounded">
                          단계 2
                        </span>
                        <h4 className="font-bold text-gray-900 text-sm sm:text-[15px]">
                          프로그래밍_설계.md
                        </h4>
                      </div>
                      <p className="text-xs font-semibold text-blue-600">
                        소프트웨어 아키텍처
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        인터페이스 추상화, 씬/프리팹 계층 구조, 네트워크 RPC 권한 분리 및 시스템 간 데이터 흐름 다이어그램을 정의합니다.
                      </p>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-2">
                      <div className="flex items-center gap-2">
                        <span className="px-2 py-0.5 text-xs font-bold bg-blue-500 text-white rounded">
                          단계 3
                        </span>
                        <h4 className="font-bold text-gray-900 text-sm sm:text-[15px]">
                          작업지시.md
                        </h4>
                      </div>
                      <p className="text-xs font-semibold text-blue-600">
                        원자적 태스크 (78단계)
                      </p>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        코드 작성 시 실수를 방지하도록 78단계의 원자적 태스크로 쪼개어, 각 스크립트별 제약 조건과 검증 규칙을 지시합니다.
                      </p>
                    </div>
                  </div>
                </section>

                {/* 02. Excel 마스터 데이터 실시간 동기화 파이프라인 */}
                <section id="section-tech-02" className="scroll-mt-24 space-y-4">
                  <div className="border-l-4 border-blue-500 pl-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      02. Excel 마스터 데이터 실시간 동기화 파이프라인 (MasterDataPostprocessor)
                    </h3>
                  </div>

                  <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                    기획자가 <code className="text-xs bg-gray-100 border px-1.5 py-0.5 rounded text-blue-600 font-mono">GameData.xlsx</code>를 수정하고 저장하면, Unity 에디터가 이를 즉각 감지하여 <code className="text-xs bg-gray-100 border px-1.5 py-0.5 rounded text-blue-600 font-mono">MasterDataSO</code> ScriptableObject 에셋으로 자동 파싱·직렬화하는 무코드(No-code) 밸런싱 파이프라인을 구축했습니다.
                  </p>

                  <div className="bg-gray-900 text-gray-100 rounded-xl p-5 overflow-x-auto leading-relaxed border border-gray-800">
                    <pre><code className="font-mono text-xs sm:text-sm text-gray-100">{`// MasterDataPostprocessor.cs 핵심 로직 요약
public class MasterDataPostprocessor : AssetPostprocessor
{
    private static void OnPostprocessAllAssets(string[] importedAssets, ...)
    {
        foreach (var assetPath in importedAssets)
        {
            if (assetPath.EndsWith("GameData.xlsx"))
            {
                // 1. ExcelDataReader로 몬스터·무기·아이템 시트 역직렬화
                var data = ExcelParser.ParseMasterData(assetPath);
                // 2. ScriptableObject에 데이터 주입 후 즉시 직렬화 저장
                MasterDataSO.Instance.Sync(data);
                EditorUtility.SetDirty(MasterDataSO.Instance);
                AssetDatabase.SaveAssets();
            }
        }
    }
}`}</code></pre>
                  </div>

                  <ul className="list-disc list-inside space-y-2 text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                    <li>
                      <b>무코드 실시간 밸런싱:</b> 코드 재컴파일이나 Unity 재실행 없이 엑셀 저장 즉시 인스펙터 및 게임 런타임에 몬스터 HP, 무기 공격력, 드랍률이 반영됩니다.
                    </li>
                    <li>
                      <b>런타임 오버헤드 0%:</b> 런타임에 엑셀이나 JSON을 파싱하지 않고 사전 직렬화된 ScriptableObject 바이너리를 직접 참조하므로 모바일/PC 로딩 지연이 발생하지 않습니다.
                    </li>
                  </ul>
                </section>

                {/* 03. 2.5D 절벽 타일셋 및 물리 콜라이더 자동 빌더 */}
                <section id="section-tech-03" className="scroll-mt-24 space-y-4">
                  <div className="border-l-4 border-blue-500 pl-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      03. 2.5D 절벽 타일셋 및 물리 콜라이더 자동 빌더 (ThemeAndPropAutoBuilder)
                    </h3>
                  </div>

                  <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed">
                    2D 탑다운 환경에서 입체적인 절벽 높낮이를 구현하려면 지면, 절벽 윗면, 수직 암벽의 타일 배치 및 충돌체 설정에 막대한 수작업이 소요됩니다.
                    이를 해결하기 위해 <code className="text-xs bg-gray-100 border px-1.5 py-0.5 rounded text-blue-600 font-mono">ThemeAndPropAutoBuilder</code> 에디터 자동화 툴을 자체 개발했습니다.
                  </p>

                  <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-3">
                    <h4 className="font-bold text-gray-900 text-sm sm:text-[15px]">
                      에디터 자동화 파이프라인 핵심 기능
                    </h4>
                    <div className="space-y-2.5 text-sm sm:text-[15px] text-gray-700">
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-blue-600 shrink-0">1.</span>
                        <p>
                          <b>타일시트 슬라이싱 및 3계층 분리:</b> 5×8 규격의 테마별 타일 텍스처를 분석하여 1층 지면(Ground), 2층 절벽 상단(Cliff Top), 수직 암벽(Cliff Wall)으로 자동 분류 및 타일 에셋을 생성합니다.
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-blue-600 shrink-0">2.</span>
                        <p>
                          <b>Custom Physics Shape 자동 생성:</b> 보행 불가 영역인 수직 암벽과 낭떠러지 가장자리에 맞춤형 물리 충돌체를 자동 연산하여 부착합니다.
                        </p>
                      </div>
                      <div className="flex items-start gap-2">
                        <span className="font-bold text-blue-600 shrink-0">3.</span>
                        <p>
                          <b>복합 충돌체 최적화:</b> <code className="text-xs bg-gray-200 px-1 py-0.5 rounded">CompositeCollider2D</code>와의 연동을 통해 개별 타일의 콜라이더 버텍스를 병합하여 물리 연산 비용을 대폭 절감했습니다.
                        </p>
                      </div>
                    </div>
                  </div>
                </section>

                {/* 04. 코어 클라이언트 아키텍처 및 렌더링 최적화 */}
                <section id="section-tech-04" className="scroll-mt-24 space-y-4">
                  <div className="border-l-4 border-blue-500 pl-3">
                    <h3 className="text-xl sm:text-2xl font-bold text-gray-900">
                      04. 코어 클라이언트 아키텍처 및 렌더링 최적화
                    </h3>
                  </div>

                  <div className="grid sm:grid-cols-3 gap-4">
                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-2">
                      <h4 className="font-bold text-gray-900 text-sm sm:text-[15px]">
                        ServiceLocator 기반 DI
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        전역 싱글톤의 강결합을 해소하기 위해 중앙 인터페이스 레지스트리를 구축했습니다. UIManager, AudioManager, PoolManager를 인터페이스로 주입받아 모듈 간 결합도를 최소화했습니다.
                      </p>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-2">
                      <h4 className="font-bold text-gray-900 text-sm sm:text-[15px]">
                        ObjectPoolManager (Zero-GC)
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        빈번하게 생성·소멸하는 투사체(화살, 마법탄), 데미지 플로팅 텍스트, 피격 파티클을 제네릭 큐 기반으로 재사용하여 런타임 가비지 컬렉션(GC Alloc) 스파이크를 원천 차단했습니다.
                      </p>
                    </div>

                    <div className="bg-gray-50 border border-gray-200 rounded-xl p-5 space-y-2">
                      <h4 className="font-bold text-gray-900 text-sm sm:text-[15px]">
                        동적 Y-Sorting 렌더 순서 제어
                      </h4>
                      <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                        모든 움직이는 오브젝트의 Y 좌표를 기반으로 실시간 정렬 순서를 갱신하며, 무기 휘두르기 시 공격 판정 시인성을 보장하기 위해 일시적 렌더 오더 가중치를 동적으로 부여합니다.
                      </p>
                    </div>
                  </div>
                </section>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
