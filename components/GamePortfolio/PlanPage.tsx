"use client";

import ImgPrefixed from "./../ImgPrefixed";
import AudioPrefixed from "./../AudioPrefixed";
import CodeSnippetToggle from "../CodeSnippetToggle";
import React, { useEffect } from "react";

declare global {
  interface Window {
    Prism?: { highlightAll: () => void };
  }
}

type CodeAssets = Record<string, string>;

type Props = {
  codeAssets: CodeAssets;
  onTabChange: (tab: "deploy" | "plan" | "devlog") => void;
};

const PlanPage = ({ codeAssets, onTabChange }: Props) => {
  useEffect(() => {
    window.Prism?.highlightAll();
  }, [codeAssets]);

  const IWeaponState = codeAssets.IWeaponState ?? "";
  const UIEventManager = codeAssets.UIEventManager ?? "";
  const ObjectPool = codeAssets.ObjectPool ?? "";
  const SoundManager = codeAssets.SoundManager ?? "";
  const MapDifficulty = codeAssets.MapDifficulty ?? "";
  const RandomPathGenerator = codeAssets.RandomPathGenerator ?? "";
  const MapGenerator = codeAssets.MapGenerator ?? "";
  const TowerArchetype = codeAssets.TowerArchetype ?? "";
  const WeightedRandomReward = codeAssets.WeightedRandomReward ?? "";
  const SpecialSkillBase = codeAssets.SpecialSkillBase ?? "";
  const GameDataManager = codeAssets.GameDataManager ?? "";
  const TooltipManager = codeAssets.TooltipManager ?? "";
  const TooltipTrigger = codeAssets.TooltipTrigger ?? "";

  return (
    <div className="space-y-10">
      {/* 헤더 섹션 */}
      <title>RogueTower 게임기획서</title>
      <div className="text-center pt-4 pb-8 border-b border-gray-200">
        <span className="inline-block px-3 py-1 mb-3 text-xs font-semibold tracking-wider text-blue-700 uppercase bg-blue-50 border border-blue-200 rounded-full">
          Game Design &amp; System Architecture
        </span>
        <h1 className="text-4xl font-extrabold text-gray-900 mb-4">
          Roguelike Tower Defense
        </h1>
        <p className="text-sm text-gray-600 max-w-2xl mx-auto mb-5">
          전략적 타워 배치와 장비 파밍 성장을 결합하고, 절차적 맵 생성과 웨이브별 선택형 보상을 통해 매 플레이 새로운 전략 변수를 제공하는 로그라이크 타워 디펜스
        </p>
        <div className="flex flex-wrap justify-center gap-2 mb-6">
          <span className="px-3.5 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
            #로그라이크
          </span>
          <span className="px-3.5 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
            #타워 디펜스
          </span>
          <span className="px-3.5 py-1 bg-blue-100 text-blue-800 text-sm font-medium rounded-full">
            #전략 &amp; 파밍
          </span>
          <span className="px-3.5 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full">
            #절차적 레벨 디자인
          </span>
          <span className="px-3.5 py-1 bg-indigo-100 text-indigo-800 text-sm font-medium rounded-full">
            #데이터 기반 밸런싱
          </span>
        </div>

        {/* 섹션 퀵 네비게이션 */}
        <div className="flex flex-wrap justify-center gap-2 pt-2">
          <a
            href="#section-overview"
            className="px-3 py-1.5 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-blue-50 hover:text-blue-600 rounded-md transition"
          >
            01. 게임 개요 &amp; 코어 루프
          </a>
          <a
            href="#section-systems"
            className="px-3 py-1.5 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-blue-50 hover:text-blue-600 rounded-md transition"
          >
            02. 핵심 시스템 기획
          </a>
          <a
            href="#section-infinity"
            className="px-3 py-1.5 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-blue-50 hover:text-blue-600 rounded-md transition"
          >
            03. 무한모드 &amp; 순위표
          </a>
          <a
            href="#section-art-audio"
            className="px-3 py-1.5 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-blue-50 hover:text-blue-600 rounded-md transition"
          >
            04. 디자인 &amp; 사운드
          </a>
          <a
            href="#section-tech"
            className="px-3 py-1.5 text-xs font-semibold text-gray-700 bg-gray-100 hover:bg-blue-50 hover:text-blue-600 rounded-md transition"
          >
            05. 기술 설계 &amp; 데이터 검증
          </a>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* PART 1. 게임 기획 (게임 개요 ~ 게임 흐름 ~ 핵심 시스템 ~ 무한모드) */}
      {/* ===================================================================== */}

      {/* 게임 개요 */}
      <div
        id="section-overview"
        className="mb-8 bg-white rounded-xl border border-gray-200 shadow-sm p-6"
      >
        <div className="flex items-center gap-2 mb-5">
          <span className="px-2.5 py-0.5 text-xs font-bold bg-blue-600 text-white rounded">
            01
          </span>
          <h2 className="text-2xl font-bold text-gray-900">게임 개요</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6">
          <div className="p-5 bg-blue-50/50 border border-blue-100 rounded-lg">
            <h3 className="text-lg font-bold text-blue-900 mb-3">핵심 컨셉</h3>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-800">
              <li>로그라이크 요소와 타워 디펜스의 결합</li>
              <li>웨이브별 전략적 선택과 성장</li>
              <li>장비 파밍과 난이도 강화</li>
            </ul>
          </div>
          <div className="p-5 bg-indigo-50/50 border border-indigo-100 rounded-lg">
            <h3 className="text-lg font-bold text-indigo-900 mb-3">
              타겟 플레이어
            </h3>
            <ul className="list-disc pl-5 space-y-2 text-sm text-gray-800">
              <li>전략 게임을 선호하는 게이머</li>
              <li>로그라이크 장르 팬층</li>
              <li>낮은 난이도를 추구하는 유저</li>
            </ul>
          </div>
        </div>
      </div>

      {/* 게임 흐름 (Game Flow) */}
      <div className="mb-8 bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <div className="flex items-center gap-2 mb-5">
          <span className="px-2.5 py-0.5 text-xs font-bold bg-blue-600 text-white rounded">
            CORE LOOP
          </span>
          <h2 className="text-2xl font-bold text-gray-900">게임 흐름</h2>
        </div>
        <div className="grid md:grid-cols-2 gap-6 mb-6">
          {/* 대기실 흐름 */}
          <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg">
            <h3 className="font-bold mb-1 text-lg text-center text-gray-900">
              대기실 흐름
            </h3>
            <p className="text-xs text-center text-blue-600 font-medium mb-4">
              전략 준비 및 성장 단계
            </p>
            <ol className="list-decimal list-inside space-y-2.5 text-sm text-gray-800">
              <li className="p-2 bg-white rounded border border-gray-100">
                획득한 장비를 확인하고 캐릭터에 장착
              </li>
              <li className="p-2 bg-white rounded border border-gray-100">
                보유한 RCoin을 사용하여 상점에서 새로운 장비 뽑기
              </li>
              <li className="p-2 bg-white rounded border border-gray-100">
                도전할 난이도 선택
              </li>
              <li className="p-2 bg-white rounded border border-gray-100">
                준비 완료 후 게임 시작
              </li>
            </ol>
          </div>

          {/* 인게임 흐름 */}
          <div className="p-5 bg-blue-50/40 border border-blue-200 rounded-lg">
            <h3 className="font-bold mb-1 text-lg text-center text-gray-900">
              인게임 흐름
            </h3>
            <p className="text-xs text-center text-blue-600 font-medium mb-4">
              전투와 랜덤성을 통한 성장 경험
            </p>
            <ol className="list-decimal list-inside space-y-2.5 text-sm text-gray-800">
              <li className="p-2 bg-white rounded border border-blue-100">
                <b>첫 웨이브 특성</b> 선택 (플레이 컨셉 결정)
              </li>
              <li className="p-2 bg-white rounded border border-blue-100">
                <b>[</b> 타워 건설 → 적 처치 → 재화 획득 <b>]</b> 전투 루프 반복
              </li>
              <li className="p-2 bg-white rounded border border-blue-100">
                웨이브 클리어 시 제시되는 <b>랜덤 보상</b> 중 택 1 (전략 강화)
              </li>
              <li className="p-2 bg-white rounded border border-blue-100">
                최종 웨이브 클리어 또는 패배
              </li>
              <li className="p-2 bg-white rounded border border-blue-100">
                결과 확인 및 보상(장비) 획득 후 대기실 복귀
              </li>
            </ol>
          </div>
        </div>
        <div className="p-4 bg-gray-50 rounded-lg border border-gray-100 overflow-hidden grid grid-cols-2 gap-4">
          <div>
            <ImgPrefixed
              src="/Desc/Lobby.png"
              className="w-full object-cover rounded border border-gray-200"
            />
            <figcaption className="text-center text-sm font-medium text-gray-600 mt-2">
              게임 로비 화면
            </figcaption>
          </div>

          <div>
            <ImgPrefixed
              src="/Desc/IngameUI.png"
              className="w-full object-cover rounded border border-gray-200"
            />
            <figcaption className="text-center text-sm font-medium text-gray-600 mt-2">
              인게임 UI
            </figcaption>
          </div>
        </div>
      </div>

      {/* 핵심 시스템 */}
      <div
        id="section-systems"
        className="mb-8 bg-white rounded-xl border border-gray-200 shadow-sm p-6"
      >
        <div className="flex items-center gap-2 mb-6">
          <span className="px-2.5 py-0.5 text-xs font-bold bg-blue-600 text-white rounded">
            02
          </span>
          <h2 className="text-2xl font-bold text-gray-900">핵심 시스템</h2>
        </div>

        <div className="space-y-10">
          {/* 타워 시스템 */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 border-l-4 border-blue-600 pl-3 mb-4">
              타워 시스템
            </h3>
            <div className="space-y-6">
              <div>
                <h4 className="font-semibold text-sm text-gray-700 mb-3">
                  기본 설계 방향 (역할군 및 상성 분리)
                </h4>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-3.5 bg-blue-50/70 border border-blue-100 rounded-lg">
                    <p className="font-bold text-blue-900">보스 몬스터 특화형</p>
                    <p className="text-sm text-gray-700 mt-1">
                      단일 타겟, 높은 데미지
                    </p>
                  </div>
                  <div className="p-3.5 bg-blue-50/70 border border-blue-100 rounded-lg">
                    <p className="font-bold text-blue-900">일반 몬스터 특화형</p>
                    <p className="text-sm text-gray-700 mt-1">
                      다중 타겟, 낮은 데미지
                    </p>
                  </div>
                  <div className="p-3.5 bg-blue-50/70 border border-blue-100 rounded-lg">
                    <p className="font-bold text-blue-900">근거리형 타워</p>
                    <p className="text-sm text-gray-700 mt-1">
                      낮은 사거리, 높은 데미지
                    </p>
                  </div>
                  <div className="p-3.5 bg-blue-50/70 border border-blue-100 rounded-lg">
                    <p className="font-bold text-blue-900">원거리형 타워</p>
                    <p className="text-sm text-gray-700 mt-1">
                      높은 사거리, 낮은 데미지
                    </p>
                  </div>
                </div>
              </div>

              <div>
                <h4 className="font-semibold text-sm text-gray-700 mb-3">
                  타워 종류 및 코스트/속성 규칙
                </h4>
                <div className="space-y-4">
                  <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                    <ul className="list-disc pl-5 space-y-1.5 text-sm text-gray-800">
                      <li>
                        타워 생산 비용 : TC(TowerCost) 단위 / 인게임에서는
                        이미지로 표기
                      </li>
                      <li>타워 공격 타입 : 물리형, 마법형, 복합형</li>
                      <li>
                        타워의 업그레이드는 타워의 공격 타입에 따라 영향을 받음
                        (복합형은 두 종류의 업그레이드를 합계로 받음)
                      </li>
                    </ul>
                  </div>

                  <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                    {[
                      {
                        name: "기본 타워",
                        cost: "50TC / 복합형",
                        desc: "기본적인 단일 공격 타워",
                      },
                      {
                        name: "검사 타워",
                        cost: "70TC / 물리형",
                        desc: "높은 공격 속도와 단일 데미지",
                      },
                      {
                        name: "창술사 타워",
                        cost: "200TC / 물리형",
                        desc: "최대 4개 대상 동시 공격",
                      },
                      {
                        name: "궁수 타워",
                        cost: "130TC / 물리형",
                        desc: "넓은 범위의 다중 공격",
                      },
                      {
                        name: "레이저 타워",
                        cost: "120TC / 마법형",
                        desc: "높은 DPS의 단일 타겟 공격",
                      },
                      {
                        name: "사제 타워",
                        cost: "100TC / 마법형",
                        desc: "적 방어력 감소 효과",
                      },
                    ].map((tower, idx) => (
                      <div
                        key={idx}
                        className="p-4 bg-gray-50 border border-gray-200 rounded-lg"
                      >
                        <div className="flex items-center justify-between mb-1">
                          <h4 className="font-bold text-gray-900">
                            {tower.name}
                          </h4>
                          <span className="text-xs font-semibold px-2 py-0.5 bg-blue-100 text-blue-800 rounded">
                            {tower.cost}
                          </span>
                        </div>
                        <p className="text-sm text-gray-700 mt-1">
                          {tower.desc}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-4 p-4 bg-gray-50 border border-gray-100 rounded-lg overflow-hidden">
              <ImgPrefixed
                src="/Desc/TowerButton.png"
                className="w-full object-cover rounded"
              />
            </div>
          </div>

          {/* 스킬 시스템 */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 border-l-4 border-blue-600 pl-3 mb-4">
              스킬 시스템
            </h3>
            <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg mb-4">
              <ul className="list-disc pl-5 space-y-2 text-sm text-gray-800">
                <li>타워별 특수능력을 스킬패널에서 제공</li>
                <li>SP 초기값 : 0, 최대값 : 200</li>
                <li>웨이브 클리어 시 20 SP 자동 지급</li>
                <li>모든 스킬 20 SP 소모</li>
                <li>웨이브당 스킬별 1회 사용 제한</li>
              </ul>
            </div>
            <div className="p-4 bg-gray-50 border border-gray-100 rounded-lg overflow-hidden">
              <ImgPrefixed
                src="/Desc/SkillButton.png"
                className="w-full object-cover rounded"
              />
            </div>
          </div>

          {/* 웨이브 시스템 */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 border-l-4 border-blue-600 pl-3 mb-4">
              웨이브 시스템
            </h3>
            <div className="grid grid-cols-3 gap-4">
              {[
                {
                  type: "일반 웨이브",
                  desc: "30마리 몬스터 출현",
                },
                {
                  type: "네임드",
                  desc: "특정 웨이브 등장, 강화된 능력치",
                },
                {
                  type: "보스",
                  desc: "최종웨이브 클리어 목표",
                },
              ].map((wave, idx) => (
                <div
                  key={idx}
                  className="p-4 bg-gray-50 border border-gray-200 rounded-lg text-center"
                >
                  <h4 className="font-bold text-gray-900 mb-1">{wave.type}</h4>
                  <p className="text-sm text-gray-700">{wave.desc}</p>
                </div>
              ))}
            </div>
          </div>

          {/* 보상 시스템 */}
          <div>
            <h3 className="text-lg font-bold text-gray-900 border-l-4 border-blue-600 pl-3 mb-4">
              보상 시스템
            </h3>
            <div className="grid md:grid-cols-2 gap-4 mb-4">
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-1">기본 보상</h4>
                <p className="text-sm text-gray-700">
                  웨이브 클리어 시 20 SP
                </p>
              </div>

              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-1">
                  웨이브 처치 보상
                </h4>
                <p className="text-sm text-gray-700">
                  개별 적 1개체당 골드 보상, 웨이브 진행도에 따라 증가
                </p>
              </div>
            </div>

            <div className="space-y-4 mb-8">
              <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">첫 웨이브 특성</h4>
                <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1 mb-4">
                  <li>게임 시작 시 첫 웨이브에서 10가지 특성 중 2개 제시</li>
                  <li>1개 선택 시 게임 플레이 전반에 큰 영향</li>
                  <li>기존 웨이브 랜덤 보상과 연계</li>
                </ul>
                <div className="overflow-hidden rounded border border-gray-200">
                  <ImgPrefixed
                    src="/Desc/Perk.png"
                    className="w-full object-cover"
                  />
                </div>
              </div>

              <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">
                  선택형 추가 보상
                </h4>
                <p className="text-sm text-gray-800 mb-1">
                  매 웨이브 종료 시 2개의 보상 중 1개 선택 (2개의 보상은 중복
                  가능하며, 선택지와 수치 2중 랜덤을 통해 확정)
                </p>
                <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1 my-3">
                  <li>HP 회복 (최대 체력 상태에서는 등장 X)</li>
                  <li>SP 추가 20~60 포인트</li>
                  <li>골드 보상</li>
                  <li>랜덤 타워 자동 설치 (경로 주위 우선으로 설치)</li>
                  <li>무료 물리/마법 업그레이드</li>
                </ul>
                <div className="overflow-hidden rounded border border-gray-200">
                  <ImgPrefixed
                    src="/Desc/RandomReward.png"
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>

            {/* 난이도 & 장비 & 상점 시스템 */}
            <h3 className="text-lg font-bold text-gray-900 border-l-4 border-blue-600 pl-3 mb-4">
              난이도 &amp; 장비 · 상점 시스템
            </h3>
            <div className="space-y-4 mb-4">
              <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">난이도 시스템</h4>
                <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1">
                  <li>대기실에서 난이도 선택 가능</li>
                  <li>적 체력, 골드, 웨이브 배율에 직접 영향</li>
                  <li>난이도 곡선 설계로 고난이도 플레이 지원</li>
                  <li>난이도에 비례한 장비등급 확률 조정</li>
                </ul>
              </div>

              <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">장비 시스템</h4>
                <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1 mb-4">
                  <li>장비 획득 및 장착 시스템</li>
                  <li>도감을 통한 장비 수집의 재미 제공</li>
                  <li>장신구 장착 시 특수 스킬 발동</li>
                  <li>웨이브 보상 및 난이도와 연계된 파밍</li>
                  <li>장비 파밍을 통한 높은 난이도를 도전</li>
                  <li>
                    보스급 적 처치, 클리어 보상, 랜덤 보상 패널을 통한 획득처
                  </li>
                </ul>
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <ImgPrefixed
                      src="/Desc/WaitingRoom.png"
                      className="w-full object-cover rounded border border-gray-200"
                    />
                    <figcaption className="text-center text-sm font-medium text-gray-600 mt-2">
                      대기실 화면
                    </figcaption>
                  </div>
                  <div>
                    <ImgPrefixed
                      src="/Desc/Collect.png"
                      className="w-full object-cover rounded border border-gray-200"
                    />
                    <figcaption className="text-center text-sm font-medium text-gray-600 mt-2">
                      장비 도감
                    </figcaption>
                  </div>
                </div>
              </div>

              <div className="p-5 bg-gray-50 border border-gray-200 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">상점 시스템</h4>
                <ul className="list-disc pl-5 text-sm text-gray-800 space-y-1 mb-4">
                  <li>장비 수집의 완화제</li>
                  <li>슬롯머신 애니메이션을 통한 뽑기효과</li>
                  <li>중복 장비 획득시 재화로 전환 (등급별 상이)</li>
                  <li>중복획득의 불쾌감 감소 및 뽑기의 재미 요소</li>
                </ul>
                <div className="p-2 overflow-hidden grid grid-cols-2 gap-4">
                  <div>
                    <ImgPrefixed
                      src="/Desc/Store1.png"
                      className="w-full object-cover rounded border border-gray-200"
                    />
                    <figcaption className="text-center text-sm text-gray-600 mt-2">
                      상점 UI
                    </figcaption>
                  </div>
                  <div>
                    <ImgPrefixed
                      src="/Desc/Store3.png"
                      className="w-full object-cover rounded border border-gray-200"
                    />
                    <figcaption className="text-center text-sm text-gray-600 mt-2">
                      뽑기 애니메이션1
                    </figcaption>
                  </div>
                  <div>
                    <ImgPrefixed
                      src="/Desc/StoreAnimation.gif"
                      className="w-full object-cover rounded border border-gray-200"
                    />
                    <figcaption className="text-center text-sm text-gray-600 mt-2">
                      뽑기 애니메이션2
                    </figcaption>
                  </div>
                  <div>
                    <ImgPrefixed
                      src="/Desc/Store4.png"
                      className="w-full object-cover rounded border border-gray-200"
                    />
                    <figcaption className="text-center text-sm text-gray-600 mt-2">
                      최종 획득 결과
                    </figcaption>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 무한모드 시스템 */}
        <div
          id="section-infinity"
          className="mt-8 p-5 bg-indigo-50/40 border border-indigo-200 rounded-xl"
        >
          <div className="flex items-center gap-2 mb-4">
            <span className="px-2.5 py-0.5 text-xs font-bold bg-indigo-600 text-white rounded">
              03
            </span>
            <h3 className="text-xl font-bold text-gray-900">무한모드 시스템</h3>
          </div>
          <ul className="list-disc pl-5 space-y-2 text-sm text-gray-800 mb-4">
            <li>
              <b>개방 조건 :</b> 일반 모드 100 난이도 클리어 시 개방
            </li>
            <li>
              <b>규칙 :</b>
              <ul className="list-decimal pl-6 mt-1 space-y-1">
                <li>
                  최종 웨이브가 없으며, 웨이브마다 2분의 제한 시간이 주어집니다.
                </li>
                <li>
                  적이 최종 지점에 도달해도 죽지 않고 출발 지점으로 순환합니다.
                </li>
                <li>제한 시간 내에 모든 적을 처치하면 웨이브 클리어입니다.</li>
                <li>
                  시간 내에 적을 모두 처치하지 못하면 남은 적 하나당 HP가 1씩
                  감소합니다.
                </li>
                <li>HP가 0이 되면 게임이 종료되고 최종 점수가 정산됩니다.</li>
              </ul>
            </li>
            <li>
              <b>점수 및 순위표 :</b>
              <ul className="list-disc pl-6 mt-1 space-y-1">
                <li>
                  클리어 점수, 맵 난이도 배율, 남은 시간을 합산하여 최종 점수가
                  결정됩니다.
                </li>
                <li>
                  최종 점수를 기준으로 상위 10명의 순위표(리더보드)에 등록할 수
                  있습니다.
                </li>
              </ul>
            </li>
            <li>
              <b>특수 기능 :</b> 데미지 분석 기능을 통해 타워별 데미지 기여도를
              확인할 수 있습니다.
            </li>
          </ul>
          <div className="p-2 overflow-hidden grid grid-cols-2 gap-4">
            <div>
              <ImgPrefixed
                src="/Desc/InfinityMode.png"
                className="w-full object-cover rounded border border-indigo-100"
              />
              <figcaption className="text-center text-sm text-gray-600 mt-2">
                무한모드 활성화 UI
              </figcaption>
            </div>
            <div>
              <ImgPrefixed
                src="/Desc/DamageMeter.png"
                className="w-full object-cover rounded border border-indigo-100"
              />
              <figcaption className="text-center text-sm text-gray-600 mt-2">
                무한모드 데미지 분석 기능
              </figcaption>
            </div>
            <div>
              <ImgPrefixed
                src="/Desc/IngameReaderBoard.png"
                className="w-full object-cover rounded border border-indigo-100"
              />
              <figcaption className="text-center text-sm text-gray-600 mt-2">
                순위표
              </figcaption>
            </div>
            <div>
              <ImgPrefixed
                src="/Desc/PlayFabReaderBoard.png"
                className="w-full object-cover rounded border border-indigo-100"
              />
              <figcaption className="text-center text-sm text-gray-600 mt-2">
                PlayFab내 리더보드 데이터
              </figcaption>
            </div>
          </div>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* PART 2. 아트 & 사운드 디자인 (디자인 ~ 게임 음악) */}
      {/* ===================================================================== */}

      {/* 디자인 */}
      <div
        id="section-art-audio"
        className="mb-8 bg-white rounded-xl border border-gray-200 shadow-sm p-6"
      >
        <div className="flex items-center gap-2 mb-5">
          <span className="px-2.5 py-0.5 text-xs font-bold bg-blue-600 text-white rounded">
            04
          </span>
          <h2 className="text-2xl font-bold text-gray-900">디자인</h2>
        </div>
        <div className="space-y-6">
          <div>
            <div className="grid gap-4">
              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">캐릭터</h4>
                <ul className="list-disc pl-5 text-sm text-gray-800">
                  <li>타워 및 몬스터 캐릭터 픽셀 아트 제작</li>
                  <li>
                    <b>타워 애니메이션</b> : 모든 타워의 대기(Idle) 및
                    공격(Attack) 애니메이션을 구현
                  </li>
                </ul>

                <div className="p-4 mt-3 bg-white rounded-lg overflow-hidden shadow-sm grid grid-cols-8">
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

                <div className="p-4 mt-3 bg-white rounded-lg overflow-hidden shadow-sm grid grid-cols-3">
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

              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">아이콘</h4>
                <ul className="list-disc pl-5 text-sm text-gray-800">
                  <li>타워의 특수능력에 부합하는 스킬 아이콘 제작</li>
                  <li>
                    동적인 상황의 경우 필요에따라 애니메이션으로 제작하거나
                    Unity에서 구현
                  </li>
                </ul>

                <div className="p-4 mt-3 bg-white rounded-lg overflow-hidden shadow-sm grid grid-cols-8">
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

                <div className="p-4 mt-3 bg-white rounded-lg overflow-hidden shadow-sm">
                  <ImgPrefixed
                    src="/UI/SkillSpearLanding.png"
                    className="w-full object-cover"
                  />
                </div>
              </div>

              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">맵(타일셋)</h4>
                <ul className="list-disc pl-5 text-sm text-gray-800">
                  <li>타워디펜스에 최적화된 경로를 가진 타일셋 제작</li>
                  <li>웨이브 시작 및 종료지점 제작</li>
                  <li>시각적인 요소를 추가해줄 꾸밈타일 제작</li>
                </ul>

                <div className="p-4 mt-3 bg-white rounded-lg overflow-hidden shadow-sm grid grid-cols-4 gap-x-4">
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

              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">오브젝트</h4>
                <ul className="list-disc pl-5 text-sm text-gray-800">
                  <li>맵에 필요한 오브젝트</li>
                  <li>투사체와 같은 추가 디자인 요소</li>
                </ul>

                <div className="p-4 mt-3 bg-white rounded-lg overflow-hidden shadow-sm grid grid-cols-8">
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

              <div className="p-4 bg-gray-50 border border-gray-200 rounded-lg">
                <h4 className="font-bold text-gray-900 mb-2">장비</h4>
                <ul className="list-disc pl-5 text-sm text-gray-800">
                  <li>수집용 장비 이미지 (일부)</li>
                </ul>

                <div className="p-4 mt-3 bg-white rounded-lg overflow-hidden shadow-sm grid grid-cols-12">
                  {/* 장신구 */}
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
                  {/* 방어구 */}
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
                  {/* 신발 */}
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
                  {/* 장갑 */}
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
                  {/* 투구 */}
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
                  {/* 무기 */}
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
          </div>
        </div>
      </div>

      {/* 음악 */}
      <div className="mb-8 bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <h2 className="text-2xl font-bold text-gray-900 mb-4">게임 음악</h2>
        <ul className="list-disc pl-5 grid grid-cols-2 items-start gap-x-8 gap-y-5 text-sm">
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

      {/* ===================================================================== */}
      {/* PART 3. 구현 및 데이터 검증 (개발 도구 ~ 설계 철학 ~ 기술 요약 ~ 특징) */}
      {/* ===================================================================== */}

      <div
        id="section-tech"
        className="pt-8 border-t-2 border-dashed border-gray-300"
      >
        <div className="mb-6 flex items-center gap-2">
          <span className="px-2.5 py-0.5 text-xs font-bold bg-gray-800 text-white rounded">
            05
          </span>
          <h2 className="text-2xl font-bold text-gray-900">
            시스템 구현 및 데이터 검증 (Technical Implementation)
          </h2>
        </div>

        {/* 도구 */}
        <div className="mb-8 bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h3 className="text-xl font-bold mb-4">개발 도구</h3>

          <ul className="list-disc pl-5 text-sm mb-4">
            <li>엔진 : unity</li>
            <li>언어 : C#</li>
            <li>디자인 도구 : Aseprite</li>
            <li>백엔드 서비스 : PlayFab</li>
          </ul>

          <div className="grid grid-cols-4 gap-4 w-1/2">
            <div className="rounded-lg overflow-hidden">
              <ImgPrefixed
                src="/icon/unity.png"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <ImgPrefixed
                src="/icon/csharp.png"
                className="h-full w-full object-cover"
              />
            </div>
            <div className="rounded-lg overflow-hidden">
              <ImgPrefixed
                src="/icon/ase.png"
                className="h-full w-full object-cover"
              />
            </div>
            {/* PlayFab 아이콘을 위한 div */}
            <div className="rounded-lg overflow-hidden">
              <ImgPrefixed
                src="/icon/PlayFab.jpg"
                className="h-full w-full object-cover"
              />
            </div>
          </div>
        </div>

        {/* ★★★ 프로젝트 목표 및 설계 철학 ★★★ */}
        <div className="mb-8 bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h3 className="text-xl font-bold mb-4">프로젝트 목표 및 설계 철학</h3>
          <div className="space-y-3 text-sm text-gray-700 leading-relaxed">
            <p>
              이 프로젝트는 Unity와 C#에 대한 깊은 이해를 바탕으로, 단순한 기능
              구현을 넘어 <b>상용화 수준의 게임 개발 파이프라인 전체를 경험</b>
              하는 것을 목표로 했습니다. 특히 PlayFab과 같은 외부 BaaS(Backend
              as a Service)를 연동하여 로그인, 랭킹, 데이터 분석, 원격 오류 수집
              등 실시간 서비스에 필요한 핵심 백엔드 기능을 직접 구현하고자
              했습니다.
            </p>
            <p>
              설계 철학의 핵심은{" "}
              <b>`확장성`, `데이터 기반 디자인`, `코드 중복성 최소화`</b>
              입니다. `타워`, `적`, `장비` 등 핵심 요소를 모두 모듈화하고,
              <b>상속(Inheritance) 구조</b>를 적극적으로 활용했습니다. 예를
              들어, 모든 타워 무기의 공통 로직을 담은 `TowerWeapon`이라는 기반
              클래스를 설계하고, `WeaponArrow`, `WeaponDefault` 등이 이를
              상속받아 각 무기 고유의 공격 방식만 구현하도록 하여 코드의
              재사용성과 유지보수성을 높였습니다. 또한, 밸런스 데이터는
              `ScriptableObject`및 Json 파일로 관리하여 코드 수정 없이 유연한
              업데이트가 가능한 시스템을 구축했습니다.
            </p>
          </div>
        </div>

        {/* 기술 요약 */}
        <div className="mb-8 bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h3 className="text-xl font-bold mb-4">기술 요약</h3>
          <p className="text-sm text-gray-700 leading-relaxed">
            이번 프로젝트는 <b>모듈형 구조와 이벤트 기반 설계</b>를 통해
            유지보수성과 확장성을 극대화한 2D 로그라이크 타워 디펜스 게임입니다.
            타워와 스킬은 <b>State 패턴</b>을 적용하여 행동(탐색·공격)을 명확히
            분리하였고, 주요 UI는 <b>이벤트 기반 갱신</b>으로 처리되어 불필요한
            연산을 최소화했습니다.
          </p>
          <p className="text-sm text-gray-700 leading-relaxed mt-2">
            또한, <b>절차적 맵 생성 알고리즘</b>을 직접 설계하여 매번 새로운
            플레이 경험을 제공하며, <b>데이터 기반 설계</b>로 리플레이성과
            유지보수성을 높였습니다. 특히, `Time.timeScale` 오염으로 인한 게임
            멈춤 현상, 다중 오브젝트 환경에서의 사운드 병목 현상 등 복합적인
            버그들을 <b>정확한 원인 분석과 메모리 관리, 방어 코드 설계</b>를
            통해 해결하여 프로그램의 안정성을 크게 향상시켰습니다.
          </p>
        </div>

        {/* 주요 성과 */}
        <div className="mb-8 bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h3 className="text-xl font-bold mb-4">주요 성과</h3>
          <ul className="list-disc pl-5 space-y-2 text-sm">
            <li>
              오브젝트 풀링 적용 → 100개 투사체 타워 동시 발사에도 안정적인
              프레임 유지
            </li>
            <li>
              난이도/경로 절차적 맵 생성 시스템 구현으로 매 플레이마다 새로운
              전략 변수 제공
            </li>
            <li>
              모듈화된 Tower/Enemy/Skill 구조 설계로 신규 콘텐츠 추가 시 코드
              변경 최소화
            </li>
            <li>PlayFab 기반 글로벌 랭킹 연동 및 플레이어 데이터 수집·분석</li>
            <li>이벤트 기반 UI 구조 설계로 UI와 게임 로직 간 의존성 최소화</li>
            <li>
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault();
                  onTabChange("devlog"); // 'devlog' 탭으로 전환
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="text-blue-600 hover:underline"
              >
                개발일지
              </a>
              를 통해 주요 패치, 버그 수정, 개선사항을 기록하며 품질 관리
            </li>
          </ul>
        </div>

        {/* 기술적 특징 */}
        <div className="mb-8 bg-white rounded-xl border border-gray-200 shadow-sm p-6">
          <h3 className="text-xl font-bold mb-4">기술적 특징</h3>

          <div className="space-y-6">
            <ul className="list-disc pl-5 text-sm space-y-3">
              <li>
                <b>모듈형 타워 시스템 (State 패턴)</b> : `IWeaponState`
                인터페이스를 기반으로 타워의 행동(탐색, 공격)을 명확하게
                분리하여 확장성을 높였습니다.
                <div className="mt-3 space-y-4">
                  <CodeSnippetToggle
                    title="/Tower/WeaponStates/IWeaponState.cs - 타워 상태 인터페이스"
                    code={IWeaponState}
                  />
                </div>
              </li>
              <li>
                <b>이벤트 기반 UI 업데이트</b> : `UIEventManager`를 통해 게임
                데이터와 UI를 분리, 데이터 변경 시 UI가 실시간으로 반응하도록
                설계하여 유지보수성을 강화했습니다.
                <div className="mt-3 space-y-4">
                  <CodeSnippetToggle
                    title="/UI/UIEventManager.cs - 이벤트 중앙 관리"
                    code={UIEventManager}
                    ranges={[
                      { start: 13, end: 20 },
                      { start: 84, end: 102 },
                    ]}
                  />
                </div>
              </li>
              <li>
                <b>오브젝트 풀링</b> : 성능 최적화를 위해 적, 발사체 등 반복
                생성되는 오브젝트를 재활용하는 시스템을 구현했습니다.
                <div className="mt-3 space-y-4">
                  <CodeSnippetToggle
                    title="/System/ObjectPool.cs"
                    code={ObjectPool}
                  />
                </div>
                <div className="p-4 overflow-hidden grid grid-cols-2 gap-4">
                  <div>
                    <ImgPrefixed
                      src="/Desc/Pooling1.png"
                      className="w-full object-cover"
                    />
                    <figcaption className="text-center text-sm text-gray-600 mt-2">
                      풀링 성능 테스트 1 (148.19 FPS)
                    </figcaption>
                  </div>

                  <div>
                    <ImgPrefixed
                      src="/Desc/Pooling2.png"
                      className="w-full object-cover"
                    />
                    <figcaption className="text-center text-sm text-gray-600 mt-2">
                      풀링 성능 테스트 2 (175.48 FPS)
                    </figcaption>
                  </div>
                </div>
              </li>
              <li>
                <b>중앙 집중형 사운드 관리</b> : `SoundManager`를 통해 BGM,
                SFX를 관리하며, 여러 개의 지속 사운드를 독립적으로 제어하는
                기능을 구현했습니다.
                <div className="mt-3 space-y-4">
                  <CodeSnippetToggle
                    title="/System/SoundManager.cs - PlayBGM & PlaySFX"
                    code={SoundManager}
                    ranges={[
                      { start: 70, end: 89 },
                      { start: 132, end: 184 },
                    ]}
                  />
                </div>
              </li>
              <li>
                <b>애니메이션 재사용성</b> : `Animator Override Controller`를
                활용하여 모든 타워가 하나의 로직을 공유하되, 각 타워의
                애니메이션 클립만 교체하도록 설계하여 효율성을 높였습니다.
              </li>
              <li>
                <b>데이터 기반 설계</b> : `ScriptableObject`를 활용하여 타워
                밸런스를 코드 수정 없이 쉽게 조절할 수 있도록 설계했습니다.
              </li>
              <li>
                <b>절차적 맵 생성 및 난이도 정량화 시스템</b>
                <ul className="list-decimal pl-6 mt-1 space-y-1 text-xs">
                  <li>
                    <b>경로 생성 :</b> `RandomPathGenerator.cs`를 통해 매 게임
                    시작 시 새로운 적 이동 경로를 동적으로 생성하며, 생성된
                    경로의 유효성을 검사하여 항상 완주 가능한 맵을 보장합니다.
                  </li>
                  <li>
                    <b>난이도 계산 :</b> 생성된 맵의 경로 길이, 꺾이는 횟수,
                    경로 간 간격 등 세 가지 요소를 가중치에 따라 조합하여
                    난이도를 객관적인 수치로 평가하는 `MapDifficulty.cs`를
                    설계했습니다.
                  </li>
                  <li>
                    <b>시각화 :</b> 생성된 경로 데이터를 기반으로
                    `MapGenerator.cs`가 Unity의 `Tilemap`을 이용해 길, 코너, 성
                    등의 타일을 배치하고, 플레이어의 진행도에 따라 다양한 맵
                    테마가 무작위로 적용되도록 구현했습니다.
                  </li>
                </ul>
                <div className="mt-3 space-y-4">
                  <CodeSnippetToggle
                    title="/Map/RandomPathGenerator.cs - 경로 생성 일부"
                    code={RandomPathGenerator}
                    ranges={[{ start: 90, end: 166 }]}
                  />
                  <CodeSnippetToggle
                    title="/Map/MapGenerator.cs - 경로를 따라 맵 타일 전시"
                    code={MapGenerator}
                    ranges={[{ start: 157, end: 227 }]}
                  />
                  <CodeSnippetToggle
                    title="/Map/MapDifficulty.cs - 생성된 맵 난이도 계산"
                    code={MapDifficulty}
                    ranges={[{ start: 6, end: 85 }]}
                  />
                </div>
                <div className="p-4 overflow-hidden grid grid-cols-2 gap-4">
                  <div>
                    <ImgPrefixed
                      src="/Desc/RandomMap1.png"
                      className="w-full object-cover"
                    />
                  </div>
                  <div>
                    <ImgPrefixed
                      src="/Desc/RandomMap2.png"
                      className="w-full object-cover"
                    />
                  </div>
                  <div>
                    <ImgPrefixed
                      src="/Desc/RandomMap3.png"
                      className="w-full object-cover"
                    />
                  </div>
                </div>
              </li>
              <li>
                <b>이벤트 기반 UI 갱신</b> : 장비 장착, 보상 선택 등 주요
                이벤트를 이벤트 리스너 기반으로 처리하여, 불필요한 Update 호출을
                줄이고 퍼포먼스를 개선했습니다.
              </li>

              <li>
                <b>웨이브 랜덤 보상 / 첫 웨이브 특성 시스템</b> : 선택형 보상
                패널과 첫 웨이브 특성 선택 시스템을 통합하여, 게임 초반 전략성을
                강화하고 플레이 전체에 즉각 반영되도록 설계했습니다.
                <div className="mt-3 space-y-4">
                  <CodeSnippetToggle
                    title="/System/WeightedRandomReward.cs - 웨이브 랜덤 보상"
                    code={WeightedRandomReward}
                    ranges={[{ start: 211, end: 247 }]}
                  />
                </div>
              </li>

              <li>
                <b>타워 및 장비 스킬 고도화</b>
                <ul className="pl-6 mt-1 space-y-3">
                  <li>
                    - 타워 데이터와 스킬 데이터를 한쌍으로 TowerArchetype로 통합
                    <div className="mt-3 space-y-4">
                      <CodeSnippetToggle
                        title="/Data/Models/TowerArchetype.cs - 타워 & 스킬 데이터 통합관리"
                        code={TowerArchetype}
                        ranges={[{ start: 10, end: 46 }]}
                      />
                    </div>
                  </li>
                  <li>
                    - 장비 특수 스킬을 SpecialSkillBase를 기반으로 상속받아 기능
                    구현
                    <div className="mt-3 space-y-4">
                      <CodeSnippetToggle
                        title="/Data/SpecialSkillBase.cs - 장비 특수 스킬 추상 클래스"
                        code={SpecialSkillBase}
                        ranges={[{ start: 1, end: 32 }]}
                      />
                    </div>
                  </li>
                </ul>
              </li>

              <li>
                <b>맵/적 랜덤성 추가</b> : 맵과 적 스폰 정보를 데이터 랜덤성
                추가 설계로 리플레이성과 유지보수성을 크게 강화했습니다.
                <div className="mt-3 space-y-4">
                  <CodeSnippetToggle
                    title="/Map/MapGenerator.cs - 맵 타일셋 랜덤 생성"
                    code={MapGenerator}
                    ranges={[{ start: 76, end: 135 }]}
                  />
                </div>
              </li>

              <li>
                <b>사운드 및 해상도 대응</b> : 사운드 볼륨 정규화 및 1280~1600
                해상도 대응 UI를 구현하고, 사운드매니저를 통해 관리 편의성과
                확장성을 높였습니다.
              </li>
              <li>
                <b>데이터 관리 시스템 (암호화 및 마이그레이션)</b>
                <p className="pl-4 text-xs">
                  `GameDataManager.cs`를 통해 플레이어의 저장 데이터를 XOR
                  암호화하여 로컬 파일 변조를 방지했습니다. 또한, 과거
                  버전(암호화 미적용)의 세이브 파일을 불러올 경우, 자동으로 최신
                  암호화 버전으로 변환 후 저장하는 데이터 마이그레이션 기능을
                  구현하여 안정성을 높였습니다.
                </p>
                <div className="mt-3 space-y-4">
                  <CodeSnippetToggle
                    title="/System/GameDataManager.cs - 암호화 및 마이그레이션"
                    code={GameDataManager}
                  />
                </div>
              </li>
              <li>
                <b>툴팁 시스템 : 툴팁을 통한 유저 편의적인 UI 제공</b>
                <p className="pl-4 text-xs">
                  툴팁이 필요한 객체에 `TooltipTrigger.cs` 컴포넌트를 이용하여
                  정보제공
                </p>
                <div className="p-4 overflow-hidden grid grid-cols-2 gap-4">
                  <div>
                    <ImgPrefixed
                      src="/Desc/Tooltip1.png"
                      className="w-full object-cover"
                    />
                    <figcaption className="text-center text-sm text-gray-600 mt-2">
                      툴팁 예시1 (타워 정보)
                    </figcaption>
                  </div>

                  <div>
                    <ImgPrefixed
                      src="/Desc/Tooltip3.png"
                      className="w-full object-cover"
                    />
                    <figcaption className="text-center text-sm text-gray-600 mt-2">
                      툴팁 예시2 (특수 장비 인게임 정보 실시간 표기)
                    </figcaption>
                  </div>
                  <div>
                    <ImgPrefixed
                      src="/Desc/Tooltip2.png"
                      className="w-full object-cover"
                    />
                    <figcaption className="text-center text-sm text-gray-600 mt-2">
                      툴팁 예시3 (장비 옵션)
                    </figcaption>
                  </div>
                  <div>
                    <ImgPrefixed
                      src="/Desc/Tooltip4.png"
                      className="w-full object-cover"
                    />
                    <figcaption className="text-center text-sm text-gray-600 mt-2">
                      툴팁 예시4 (도감에서 장비 옵션)
                    </figcaption>
                  </div>
                </div>
              </li>
              <li>
                <b>툴팁 시스템 통합</b> : TooltipManager와 TooltipTrigger를
                기반으로 장비, 타워, 스킬에 마우스 오버 시 실시간 툴팁을
                표시하여 UI 일관성과 직관성을 강화했습니다.
                <div className="mt-3 space-y-4">
                  <CodeSnippetToggle
                    title="/System/TooltipManager.cs - 툴팁의 실질적인 표시를 담당"
                    code={TooltipManager}
                    ranges={[{ start: 111, end: 179 }]}
                  />
                  <CodeSnippetToggle
                    title="/UI/TooltipTrigger.cs - 객체의 컴포넌트로 추가하여 툴팁 정보를 저장 및 이벤트 감지"
                    code={TooltipTrigger}
                  />
                </div>
              </li>
              <li>
                <b>PlayFab을 통한 데이터 수집</b> : 전투 데이터 및 에러 데이터
                수집
                <div className="p-4 overflow-hidden grid grid-cols-2 gap-4">
                  <div>
                    <ImgPrefixed
                      src="/Desc/PlayFabCombatData.png"
                      className="w-full object-cover"
                    />
                    <figcaption className="text-center text-sm text-gray-600 mt-2">
                      PlayFab을 통한 전투 데이터 수집
                    </figcaption>
                  </div>

                  <div>
                    <ImgPrefixed
                      src="/Desc/PlayFabError.png"
                      className="w-full object-cover"
                    />
                    <figcaption className="text-center text-sm text-gray-600 mt-2">
                      PlayFab 을 통한 에러 데이터 수집 쿼리
                    </figcaption>
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlanPage;
