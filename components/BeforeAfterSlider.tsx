"use client";

import React, { useState } from "react";
import ImgPrefixed from "./ImgPrefixed";

type ComparisonScene = {
  id: string;
  label: string;
  beforeTag: string;
  afterTag: string;
  beforeImageSrc: string;
  afterImageSrc: string;
  beforeSummary: string;
  afterSummary: string;
};

const SCENES: ComparisonScene[] = [
  {
    id: "title",
    label: "메인 타이틀",
    beforeTag: "개선 전 · RogueTower (v0.2.4)",
    afterTag: "개선 후 · Gear & Tower (v0.3.0)",
    beforeImageSrc: "/Desc/Lobby.png",
    afterImageSrc: "/images/gearandtower/title.png",
    beforeSummary:
      "초원 배경과 초기 로고, 상단 임시 버튼이 배치된 베타 타이틀 화면",
    afterSummary:
      "대기실 배경과 이어지는 성벽 야경 일러스트와 신규 로고로 타이틀 화면 리뉴얼",
  },
  {
    id: "lobby",
    label: "대기실 허브",
    beforeTag: "개선 전 · RogueTower (v0.2.4)",
    afterTag: "개선 후 · Gear & Tower (v0.3.0)",
    beforeImageSrc: "/Desc/WaitingRoom.png",
    afterImageSrc: "/images/gearandtower/lobby-left.png",
    beforeSummary:
      "장비창, 난이도 설정, 시작 버튼을 한 팝업에 정적으로 나열한 출격 준비 화면",
    afterSummary:
      "캐릭터가 대기실을 직접 이동하며 무기고, 훈련소, 상점, 도감, 특성 제단을 이용하는 거점 형태로 개편",
  },
  {
    id: "armory",
    label: "장비 · 무기고",
    beforeTag: "개선 전 · RogueTower (v0.2.4)",
    afterTag: "개선 후 · Gear & Tower (v0.3.0)",
    beforeImageSrc: "/Desc/WaitingRoom.png",
    afterImageSrc: "/images/gearandtower/armory-equip.png",
    beforeSummary:
      "장비창, 난이도 설정, 시작 버튼을 한 팝업에 정적으로 나열한 출격 준비 화면",
    afterSummary:
      "장비 장착과 스탯 확인 UI를 개선하고, 장비 강화와 타워 덱 편성 탭을 새로 추가",
  },
  {
    id: "ingame",
    label: "전투 화면",
    beforeTag: "개선 전 · RogueTower (v0.2.4)",
    afterTag: "개선 후 · Gear & Tower (v0.3.0)",
    beforeImageSrc: "/Desc/IngameUI.png",
    afterImageSrc: "/images/gearandtower/ingame.png",
    beforeSummary:
      "저해상도 타일맵과 단순한 좌하단 상태창, 고정된 타워 슬롯으로 구성된 전투 화면",
    afterSummary:
      "1080p 해상도 그래픽 리뉴얼, 상단 보스 체력바 추가 및 하단 타워 정보·덱 슬롯 UI 개편",
  },
  {
    id: "reward",
    label: "웨이브 보상",
    beforeTag: "개선 전 · RogueTower (v0.2.4)",
    afterTag: "개선 후 · Gear & Tower (v0.3.0)",
    beforeImageSrc: "/Desc/Perk.png",
    afterImageSrc: "/images/gearandtower/reward.png",
    beforeSummary:
      "텍스트 위주의 단색 보상 카드 구성으로 다시 뽑기나 전장 확인 기능이 없는 화면",
    afterSummary:
      "카드 프레임과 아이콘 시각화를 개선하고, 다시 뽑기(리롤) 및 접기(전장 확인) 버튼 추가",
  },
  {
    id: "codex",
    label: "도감 UI",
    beforeTag: "개선 전 · RogueTower (v0.2.4)",
    afterTag: "개선 후 · Gear & Tower (v0.3.0)",
    beforeImageSrc: "/Desc/Collect.png",
    afterImageSrc: "/images/gearandtower/codex-equip.png",
    beforeSummary:
      "단일 목록 창에 장비 아이콘과 이름만 단순 나열된 도감 화면",
    afterSummary:
      "장비, 세트, 몬스터 탭을 분리하고 처치 수에 따라 정보가 단계별로 해금되도록 개편",
  },
];

export default function BeforeAfterSlider() {
  const [activeSceneId, setActiveSceneId] = useState<string>("title");
  const [sliderPos, setSliderPos] = useState<number>(50);

  const scene = SCENES.find((s) => s.id === activeSceneId) ?? SCENES[0];

  return (
    <div className="rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:p-6 space-y-4">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
        <div>
          <h3 className="text-base font-bold text-gray-900">
            리뉴얼 전후 화면 비교 (v0.2.4 -&gt; v0.3.0)
          </h3>
          <p className="text-xs text-gray-600 mt-0.5">
            장면을 선택한 뒤 중앙 슬라이더를 좌우로 움직여 UI 변화를 비교할 수 있습니다.
          </p>
        </div>
        <div className="flex flex-wrap gap-1.5">
          {SCENES.map((item) => {
            const isActive = item.id === activeSceneId;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => setActiveSceneId(item.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition cursor-pointer ${
                  isActive
                    ? "bg-blue-600 text-white border-blue-600"
                    : "bg-white text-gray-700 border-gray-300 hover:border-blue-400"
                }`}
              >
                {item.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* 16:9 비교 뷰포트 */}
      <div className="relative w-full aspect-video rounded-xl overflow-hidden border border-gray-300 bg-slate-950 select-none">
        {/* RIGHT: After (v0.3.0) */}
        <div className="absolute inset-0 bg-slate-950">
          <ImgPrefixed
            src={scene.afterImageSrc}
            alt={scene.afterTag}
            className="w-full h-full object-contain"
          />
          <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md bg-blue-600/95 text-white text-[11px] font-bold shadow">
            {scene.afterTag}
          </span>
        </div>

        {/* LEFT: Before (v0.2.4) */}
        <div
          className="absolute inset-0 bg-slate-900"
          style={{ clipPath: `inset(0 ${100 - sliderPos}% 0 0)` }}
        >
          <ImgPrefixed
            src={scene.beforeImageSrc}
            alt={scene.beforeTag}
            className="w-full h-full object-contain"
          />
          <span className="absolute top-3 left-3 px-2.5 py-1 rounded-md bg-white/95 border border-gray-300 text-gray-800 text-[11px] font-bold shadow">
            {scene.beforeTag}
          </span>
        </div>

        {/* 중앙 분할선 및 핸들 */}
        <div
          className="absolute top-0 bottom-0 w-0.5 bg-blue-500 pointer-events-none z-10 shadow"
          style={{ left: `${sliderPos}%` }}
        >
          <div className="absolute top-1/2 -translate-y-1/2 -translate-x-1/2 w-8 h-8 rounded-full bg-blue-600 text-white border-2 border-white shadow-md flex items-center justify-center text-xs font-bold">
            &lt;&gt;
          </div>
        </div>

        <input
          type="range"
          min={0}
          max={100}
          value={sliderPos}
          onChange={(e) => setSliderPos(Number(e.target.value))}
          aria-label="리뉴얼 전후 화면 비교 슬라이더"
          className="absolute inset-0 w-full h-full z-20 opacity-0 cursor-ew-resize m-0"
        />
      </div>

      {/* 하단 2컬럼 요약 대비 */}
      <div className="grid sm:grid-cols-2 gap-3 text-xs rounded-xl bg-white border border-gray-200 p-3.5">
        <div className="space-y-1">
          <div className="font-bold text-gray-700">개선 전 (v0.2.4)</div>
          <p className="text-gray-600 leading-relaxed">{scene.beforeSummary}</p>
        </div>
        <div className="space-y-1 sm:border-l sm:border-gray-200 sm:pl-4">
          <div className="font-bold text-blue-700">개선 후 (v0.3.0)</div>
          <p className="text-gray-700 leading-relaxed">{scene.afterSummary}</p>
        </div>
      </div>
    </div>
  );
}
