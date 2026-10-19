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
    { id: "plan", label: "기획서 (Game Design Document)" },
    { id: "tech", label: "기술서 (Engineering & Architecture)" },
    { id: "deploy", label: "배포 (Deployment & Builds)" },
    { id: "devlog", label: "개발일지 (Changelog)" },
  ] as const;

  return (
    <div className="w-full space-y-8">
      {/* 탭 바: TinyJourney와 완벽히 통일된 모던 언더라인 탭 */}
      <nav className="border-b border-zinc-200">
        <div className="flex gap-6 sm:gap-8 overflow-x-auto scrollbar-none">
          {tabs.map((tab) => {
            const isActive = activeTab === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => handleTabChange(tab.id)}
                className={`pb-3 text-sm sm:text-base font-semibold transition-all relative shrink-0 ${
                  isActive
                    ? "text-zinc-950"
                    : "text-zinc-400 hover:text-zinc-700"
                }`}
              >
                {tab.label}
                {isActive && (
                  <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-zinc-950 rounded-full" />
                )}
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
