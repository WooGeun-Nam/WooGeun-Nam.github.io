"use client";

import React, { useState, useEffect } from "react";
import PlanPage from "./GamePortfolio/PlanPage";
import TechPage from "./GamePortfolio/TechPage";
import DeployPage from "./GamePortfolio/DeployPage";
import DevLogPage from "./GamePortfolio/DevLogPage";

type CodeAssets = Record<string, string>;
export type RogueTowerTab = "plan" | "tech" | "deploy" | "devlog";

type Props = {
  codeAssets?: CodeAssets;
  initialTab?: RogueTowerTab;
};

const GamePortfolio = ({ codeAssets, initialTab = "plan" }: Props) => {
  const [activeTab, setActiveTab] = useState<RogueTowerTab>(initialTab);

  useEffect(() => {
    if (initialTab) {
      setActiveTab(initialTab);
    }
  }, [initialTab]);

  const handleTabChange = (tabId: RogueTowerTab) => {
    setActiveTab(tabId);
    if (typeof window !== "undefined") {
      const targetUrl = `/projects/roguetower/${tabId}/`;
      window.history.pushState(null, "", targetUrl);
    }
  };

  const tabs = [
    { id: "plan", label: "기획서" },
    { id: "tech", label: "기술서" },
    { id: "deploy", label: "배포" },
    { id: "devlog", label: "개발일지" },
  ] as const;

  return (
    <div className="w-full space-y-8">
      {/* 탭 네비게이션: 가로 스크롤 없이 4등분 균등 배치 + 블루 키컬러 */}
      <nav className="w-full border-b border-gray-200">
        <div className="grid grid-cols-4 w-full text-center">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`py-3.5 px-1 transition-all relative ${
                  isActive
                    ? "text-blue-600 border-b-2 border-blue-500 bg-blue-50/40"
                    : "text-gray-500 hover:text-gray-900 hover:bg-gray-50/60"
                }`}
              >
                <span className="text-sm sm:text-base font-bold block">{tab.label}</span>
                <span className="text-[10px] sm:text-[11px] text-gray-400 font-normal hidden sm:block truncate">
                  {tab.id === "plan" && "기획 명세서 (GDD)"}
                  {tab.id === "tech" && "엔지니어링 백서"}
                  {tab.id === "deploy" && "PC 클라이언트"}
                  {tab.id === "devlog" && "개발일지 아카이브"}
                </span>
              </button>
            );
          })}
        </div>
      </nav>

      {/* 탭 콘텐츠 영역 */}
      <div className="w-full">
        <div style={{ display: activeTab === "plan" ? "block" : "none" }}>
          <PlanPage
            codeAssets={codeAssets ?? {}}
            onTabChange={handleTabChange}
          />
        </div>
        <div style={{ display: activeTab === "tech" ? "block" : "none" }}>
          <TechPage
            codeAssets={codeAssets ?? {}}
            onTabChange={handleTabChange}
          />
        </div>
        <div style={{ display: activeTab === "deploy" ? "block" : "none" }}>
          <DeployPage onTabChange={handleTabChange} />
        </div>
        <div style={{ display: activeTab === "devlog" ? "block" : "none" }}>
          <DevLogPage codeAssets={codeAssets ?? {}} />
        </div>
      </div>
    </div>
  );
};

export default GamePortfolio;
