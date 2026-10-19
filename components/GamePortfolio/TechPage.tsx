"use client";

import ImgPrefixed from "./../ImgPrefixed";
import CodeSnippetToggle from "../CodeSnippetToggle";
import React, { useEffect } from "react";
import { RogueTowerTab } from "../GamePortfolio";

declare global {
  interface Window {
    Prism?: { highlightAll: () => void };
  }
}

type CodeAssets = Record<string, string>;

type Props = {
  codeAssets: CodeAssets;
  onTabChange: (tab: RogueTowerTab) => void;
};

const TechPage = ({ codeAssets, onTabChange }: Props) => {
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

  const techToc = [
    { num: "01", id: "tech-env", title: "개발 환경 및 설계 철학" },
    { num: "02", id: "tech-architecture", title: "모듈형 아키텍처 및 주요 성과" },
    { num: "03", id: "tech-details", title: "핵심 기술 구현 및 코드 스니펫" },
  ];

  return (
    <article className="space-y-10 text-gray-800 font-sans antialiased">
      {/* ===================================================================== */}
      {/* 상단 퀵 인덱스 바 */}
      {/* ===================================================================== */}
      <div className="p-4 rounded-xl bg-blue-50/40 border border-blue-100 text-xs sm:text-sm">
        <div className="flex items-center justify-between border-b border-blue-100 pb-2 mb-3">
          <span className="font-bold text-blue-900 text-xs uppercase tracking-wider">
            기술서 목차
          </span>
          <span className="text-xs text-blue-600 font-medium">클릭 시 해당 섹션으로 이동</span>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
          {techToc.map((item) => (
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
      {/* 01. 개발 환경 및 설계 철학 */}
      {/* ===================================================================== */}
      <section
        id="tech-env"
        className="scroll-mt-16 bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6"
      >
        <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
          <span className="px-2.5 py-1 text-xs font-bold bg-blue-500 text-white rounded">
            01
          </span>
          <h2 className="text-2xl font-bold text-gray-900">
            개발 환경 및 설계 철학
          </h2>
        </div>

        {/* 툴 아이콘 바 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3">
          {[
            { img: "/icon/unity.png", name: "Unity", desc: "게임 엔진 (C#)" },
            { img: "/icon/csharp.png", name: "C#", desc: "코어 클라이언트" },
            { img: "/icon/ase.png", name: "Aseprite", desc: "픽셀 아트 & 애니메이션" },
            { img: "/icon/PlayFab.jpg", name: "PlayFab", desc: "BaaS 리더보드 & 로그" },
          ].map((tool, i) => (
            <div key={i} className="p-3.5 rounded-xl bg-gray-50 border border-gray-200 flex items-center gap-3">
              <div className="w-10 h-10 rounded-lg overflow-hidden border border-gray-200 bg-white shrink-0">
                <ImgPrefixed src={tool.img} className="w-full h-full object-cover" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-xs sm:text-sm">{tool.name}</p>
                <p className="text-[11px] text-gray-500">{tool.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid sm:grid-cols-2 gap-6 pt-2 text-sm text-gray-700 leading-relaxed">
          <div className="p-5 rounded-xl bg-blue-50/40 border border-blue-100 space-y-2">
            <h3 className="font-bold text-blue-950 text-base">프로젝트 목표</h3>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              Unity와 C#에 대한 깊은 이해를 바탕으로 단순 구현을 넘어 <b>상용화 수준의 게임 개발 파이프라인 전체를 경험</b>하는 것을 목표로 했습니다. 
              PlayFab BaaS를 연동해 로그인, 랭킹, 전투 텔레메트리 로그, 원격 오류 수집 등 실시간 라이브 서비스에 필수적인 백엔드 기능을 통합 구축했습니다.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-2">
            <h3 className="font-bold text-gray-900 text-base">설계 철학 3대 원칙</h3>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              <b>`확장성`, `데이터 기반 디자인`, `코드 중복성 최소화`</b>를 원칙으로 타워, 적, 장비 등 핵심 요소를 모두 모듈화했습니다. 
              기반 클래스(<code className="font-mono text-blue-700 bg-blue-50 px-1 py-0.5 rounded text-xs">TowerWeapon</code>) 상속 구조로 중복을 없애고, 
              밸런스 데이터를 외부 Json 및 ScriptableObject로 관리하여 코드 수정 없는 즉각 패치를 실현했습니다.
            </p>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 02. 모듈형 아키텍처 및 주요 성과 */}
      {/* ===================================================================== */}
      <section
        id="tech-architecture"
        className="scroll-mt-16 bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-8 shadow-sm space-y-6"
      >
        <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
          <span className="px-2.5 py-1 text-xs font-bold bg-blue-500 text-white rounded">
            02
          </span>
          <h2 className="text-2xl font-bold text-gray-900">
            모듈형 아키텍처 및 주요 성과
          </h2>
        </div>

        <div className="grid sm:grid-cols-2 gap-6 text-sm text-gray-700">
          <div className="p-5 rounded-xl bg-gray-50 border border-gray-200 space-y-3">
            <h3 className="font-bold text-gray-900 text-base">기술 요약 (Architecture Summary)</h3>
            <p className="text-xs sm:text-sm text-gray-700 leading-relaxed">
              모듈형 구조와 이벤트 기반 설계를 통해 유지보수성과 확장성을 극대화했습니다. 
              타워와 스킬은 <b>State 패턴</b>으로 탐색과 공격 상태를 명확히 분리했고, 
              UI는 <b>UIEventManager 델리게이트</b>를 통해 게임 로직과 100% 디커플링했습니다. 
              또한 <code className="font-mono text-gray-800 bg-gray-200/70 px-1 py-0.5 rounded text-xs">Time.timeScale</code> 오염이나 
              오브젝트 풀링 메모리 누수를 방어 코드로 해결하여 프로그램 안정성을 확보했습니다.
            </p>
          </div>

          <div className="p-5 rounded-xl bg-blue-50/40 border border-blue-100 space-y-3">
            <h3 className="font-bold text-blue-950 text-base">주요 정량 성과</h3>
            <ul className="list-disc pl-4 space-y-1.5 text-xs sm:text-sm text-gray-700 leading-relaxed">
              <li><b>Zero-GC 오브젝트 풀링:</b> 100개 투사체 동시 발사 시에도 140~175 FPS 안정 유지</li>
              <li><b>절차적 맵 생성:</b> 난이도 정량 평가 수식 기반 매 런 새로운 전략 변수 제공</li>
              <li><b>PlayFab 텔레메트리:</b> 전투 세션 로그 분석으로 타워 픽률 편중(29% ➔ 20%) 개선</li>
              <li><b>이벤트 기반 UI:</b> Update 폴링을 제거하고 데이터 변경 시에만 반응형 갱신</li>
              <li>
                <button
                  onClick={() => {
                    onTabChange("devlog");
                    window.scrollTo({ top: 0, behavior: "smooth" });
                  }}
                  className="text-blue-600 font-bold hover:underline"
                >
                  개발일지 (Changelog)
                </button>
                를 통한 날짜별 이슈 추적 및 지속적인 품질 관리
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 03. 핵심 기술 구현 및 코드 스니펫 */}
      {/* ===================================================================== */}
      <section
        id="tech-details"
        className="scroll-mt-16 bg-white border border-gray-200/90 rounded-2xl p-6 sm:p-8 shadow-sm space-y-8"
      >
        <div className="flex items-center gap-3 border-b border-gray-200 pb-4">
          <span className="px-2.5 py-1 text-xs font-bold bg-blue-500 text-white rounded">
            03
          </span>
          <h2 className="text-2xl font-bold text-gray-900">
            핵심 기술 구현 및 코드 스니펫
          </h2>
        </div>

        <div className="space-y-8 text-sm sm:text-[15px] text-gray-800 leading-relaxed">
          {/* State 패턴 */}
          <div className="space-y-2">
            <h3 className="font-bold text-gray-900 text-base">
              1. 모듈형 타워 시스템 (State 패턴)
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              <code className="font-mono text-blue-700 bg-blue-50 px-1 py-0.5 rounded text-xs">IWeaponState</code> 인터페이스를 기반으로 
              타워의 탐색(<code className="font-mono text-gray-800 bg-gray-100 px-1 py-0.5 rounded text-xs">SearchTargetState</code>)과 
              공격(<code className="font-mono text-gray-800 bg-gray-100 px-1 py-0.5 rounded text-xs">TryAttackState</code>) 행동을 명확히 분리하여 확장성을 높였습니다.
            </p>
            <CodeSnippetToggle
              title="/Tower/WeaponStates/IWeaponState.cs - 타워 상태 인터페이스"
              code={IWeaponState}
            />
          </div>

          {/* 이벤트 기반 UI */}
          <div className="space-y-2">
            <h3 className="font-bold text-gray-900 text-base">
              2. 이벤트 기반 UI 업데이트 (UIEventManager)
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              중앙 싱글톤 <code className="font-mono text-blue-700 bg-blue-50 px-1 py-0.5 rounded text-xs">UIEventManager</code>를 통해 
              게임 로직과 UI를 완전 분리하고, 스탯 및 웨이브 데이터 변경 시 델리게이트 이벤트로 실시간 갱신합니다.
            </p>
            <CodeSnippetToggle
              title="/UI/UIEventManager.cs - 이벤트 중앙 관리"
              code={UIEventManager}
              ranges={[
                { start: 13, end: 20 },
                { start: 84, end: 102 },
              ]}
            />
          </div>

          {/* 오브젝트 풀링 */}
          <div className="space-y-2">
            <h3 className="font-bold text-gray-900 text-base">
              3. 오브젝트 풀링 및 성능 최적화
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              반복 생성되는 적, 발사체, 데미지 텍스트를 제네릭 풀링 클래스로 관리하여 런타임 GC Allocation을 최소화했습니다.
            </p>
            <CodeSnippetToggle
              title="/System/ObjectPool.cs"
              code={ObjectPool}
            />
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50 p-2">
                <ImgPrefixed src="/Desc/Pooling1.png" className="w-full object-cover rounded-lg" />
                <p className="text-center text-[11px] font-medium text-gray-600 mt-1">풀링 성능 테스트 1 (148.19 FPS)</p>
              </div>
              <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50 p-2">
                <ImgPrefixed src="/Desc/Pooling2.png" className="w-full object-cover rounded-lg" />
                <p className="text-center text-[11px] font-medium text-gray-600 mt-1">풀링 성능 테스트 2 (175.48 FPS)</p>
              </div>
            </div>
          </div>

          {/* 사운드 매니저 */}
          <div className="space-y-2">
            <h3 className="font-bold text-gray-900 text-base">
              4. 중앙 집중형 사운드 관리 (SoundManager)
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              BGM 크로스페이드 및 다중 SFX 인스턴스를 관리하며, 볼륨 정규화 및 독립 사운드 제어를 제공합니다.
            </p>
            <CodeSnippetToggle
              title="/System/SoundManager.cs - PlayBGM & PlaySFX"
              code={SoundManager}
              ranges={[
                { start: 70, end: 89 },
                { start: 132, end: 184 },
              ]}
            />
          </div>

          {/* 절차적 맵 생성 */}
          <div className="space-y-3">
            <h3 className="font-bold text-gray-900 text-base">
              5. 절차적 맵 생성 및 난이도 정량화 시스템
            </h3>
            <ul className="list-disc pl-4 space-y-1 text-xs sm:text-sm text-gray-700 leading-relaxed">
              <li><b>경로 생성:</b> <code className="font-mono text-gray-800 bg-gray-100 px-1 py-0.5 rounded text-xs">RandomPathGenerator.cs</code>로 항상 완주 가능한 유효 경로 생성</li>
              <li><b>난이도 계산:</b> <code className="font-mono text-gray-800 bg-gray-100 px-1 py-0.5 rounded text-xs">MapDifficulty.cs</code>로 경로 길이, 코너 수, 평행 간격을 0~100점으로 정량화</li>
              <li><b>타일셋 빌드:</b> <code className="font-mono text-gray-800 bg-gray-100 px-1 py-0.5 rounded text-xs">MapGenerator.cs</code>로 4종 테마 타일맵 동적 배치</li>
            </ul>
            <div className="space-y-2">
              <CodeSnippetToggle
                title="/Map/RandomPathGenerator.cs - 경로 생성"
                code={RandomPathGenerator}
                ranges={[{ start: 90, end: 166 }]}
              />
              <CodeSnippetToggle
                title="/Map/MapGenerator.cs - 맵 타일 빌드"
                code={MapGenerator}
                ranges={[{ start: 157, end: 227 }]}
              />
              <CodeSnippetToggle
                title="/Map/MapDifficulty.cs - 맵 난이도 점수 수식"
                code={MapDifficulty}
                ranges={[{ start: 6, end: 85 }]}
              />
            </div>
            <div className="grid grid-cols-3 gap-3 pt-2">
              {["/Desc/RandomMap1.png", "/Desc/RandomMap2.png", "/Desc/RandomMap3.png"].map((src, i) => (
                <div key={i} className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50 p-2">
                  <ImgPrefixed src={src} className="w-full object-cover rounded-lg" />
                </div>
              ))}
            </div>
          </div>

          {/* 가중치 보상 및 특수 스킬 */}
          <div className="space-y-3">
            <h3 className="font-bold text-gray-900 text-base">
              6. 웨이브 랜덤 보상 및 장비 특수 스킬 상속 아키텍처
            </h3>
            <div className="space-y-2">
              <CodeSnippetToggle
                title="/System/WeightedRandomReward.cs - 가중치 기반 랜덤 보상 추첨"
                code={WeightedRandomReward}
                ranges={[{ start: 211, end: 247 }]}
              />
              <CodeSnippetToggle
                title="/Data/Models/TowerArchetype.cs - 타워 & 스킬 데이터 통합"
                code={TowerArchetype}
                ranges={[{ start: 10, end: 46 }]}
              />
              <CodeSnippetToggle
                title="/Data/SpecialSkillBase.cs - 장비 특수 스킬 추상 클래스"
                code={SpecialSkillBase}
                ranges={[{ start: 1, end: 32 }]}
              />
            </div>
          </div>

          {/* 데이터 암호화 & 마이그레이션 */}
          <div className="space-y-2">
            <h3 className="font-bold text-gray-900 text-base">
              7. 세이브 데이터 암호화 및 하위 호환 마이그레이션
            </h3>
            <p className="text-xs sm:text-sm text-gray-600">
              <code className="font-mono text-gray-800 bg-gray-100 px-1 py-0.5 rounded text-xs">GameDataManager.cs</code>에서 
              XOR 암호화로 로컬 세이브 변조를 방지하고, 구버전 평문 세이브 로드 시 자동 암호화 버전으로 승격 저장합니다.
            </p>
            <CodeSnippetToggle
              title="/System/GameDataManager.cs - 암호화 및 마이그레이션"
              code={GameDataManager}
            />
          </div>

          {/* 툴팁 & PlayFab 데이터 수집 */}
          <div className="space-y-3">
            <h3 className="font-bold text-gray-900 text-base">
              8. 툴팁 시스템 및 PlayFab 텔레메트리 쿼리
            </h3>
            <div className="space-y-2">
              <CodeSnippetToggle
                title="/System/TooltipManager.cs - 실시간 툴팁 렌더링"
                code={TooltipManager}
                ranges={[{ start: 111, end: 179 }]}
              />
              <CodeSnippetToggle
                title="/UI/TooltipTrigger.cs - 툴팁 이벤트 트리거"
                code={TooltipTrigger}
              />
            </div>
            <div className="grid grid-cols-2 gap-3 pt-2">
              <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50 p-2">
                <ImgPrefixed src="/Desc/PlayFabCombatData.png" className="w-full object-cover rounded-lg" />
                <p className="text-center text-[11px] font-medium text-gray-600 mt-1">PlayFab 전투 세션 텔레메트리 로그</p>
              </div>
              <div className="rounded-xl overflow-hidden border border-gray-200 bg-gray-50 p-2">
                <ImgPrefixed src="/Desc/PlayFabError.png" className="w-full object-cover rounded-lg" />
                <p className="text-center text-[11px] font-medium text-gray-600 mt-1">PlayFab 클라이언트 예외 쿼리</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 하단 기획서 링크 배너 */}
      <div className="p-5 bg-blue-50/60 border border-blue-200 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <p className="text-xs sm:text-sm text-gray-800 font-medium">
          게임의 기획 의도와 정량적 밸런스 공식, 포스트모템 분석 내용은 기획서에서 확인하실 수 있습니다.
        </p>
        <button
          onClick={() => {
            onTabChange("plan");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-lg transition shrink-0 shadow-sm"
        >
          기획서 탭으로 전환 →
        </button>
      </div>
    </article>
  );
};

export default TechPage;
