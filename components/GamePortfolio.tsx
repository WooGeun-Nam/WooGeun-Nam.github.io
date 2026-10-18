"use client";

import React, { useState } from "react";
import PlanPage from "./GamePortfolio/PlanPage";
import TechPage from "./GamePortfolio/TechPage";
import DeployPage from "./GamePortfolio/DeployPage";
import DevLogPage from "./GamePortfolio/DevLogPage";

type CodeAssets = Record<string, string>;

type Props = {
  codeAssets?: CodeAssets;
};

const GamePortfolio = ({ codeAssets }: Props) => {
  const [activeTab, setActiveTab] = useState<
    "deploy" | "plan" | "tech" | "devlog"
  >("plan");

  const tabs = [
    { id: "plan", label: "기획서" },
    { id: "tech", label: "기술서" },
    { id: "deploy", label: "배포" },
    { id: "devlog", label: "개발일지" },
  ] as const;

  return (
    <div className="w-full py-8">
      {/* 탭 버튼 + 콘텐츠를 하나의 카드처럼 */}
      <div className="w-full">
        {/* 탭 버튼 */}
        <div className="flex w-full">
          {tabs.map((tab, index) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`flex-1 py-2.5 font-semibold transition border border-b-0
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

        <div className="w-full bg-white border border-t-0 border-gray-300 rounded-b-lg shadow p-6">
          <div style={{ display: activeTab === "deploy" ? "block" : "none" }}>
            <DeployPage onTabChange={setActiveTab} />
          </div>
          <div style={{ display: activeTab === "plan" ? "block" : "none" }}>
            <PlanPage
              codeAssets={codeAssets ?? {}}
              onTabChange={setActiveTab}
            />
          </div>
          <div style={{ display: activeTab === "tech" ? "block" : "none" }}>
            <TechPage
              codeAssets={codeAssets ?? {}}
              onTabChange={setActiveTab}
            />
          </div>
          <div style={{ display: activeTab === "devlog" ? "block" : "none" }}>
            <DevLogPage codeAssets={codeAssets ?? {}} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default GamePortfolio;
