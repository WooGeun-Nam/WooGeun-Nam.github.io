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
    { id: "tech-env", tag: "환경 & 철학", title: "개발 환경 및 설계 철학" },
    { id: "tech-architecture", tag: "아키텍처 성과", title: "모듈형 구조 및 정량 성과" },
    { id: "tech-details", tag: "기술 구현 & 코드", title: "핵심 기술 구현 및 코드 스니펫" },
  ];

  return (
    <article className="space-y-16 text-gray-800 font-sans antialiased selection:bg-blue-100 selection:text-blue-900">
      {/* Tech Whitepaper 문서 메타 헤더 */}
      <div className="p-4 rounded-xl bg-gray-900 text-white flex flex-wrap items-center justify-between gap-3 text-xs shadow-sm font-mono">
        <div className="flex items-center gap-3">
          <span className="px-2 py-0.5 font-bold bg-blue-600 text-white rounded">SPEC: ENG-RT-01</span>
          <span className="text-gray-300">Engine: Unity (C#) · PC Windows</span>
        </div>
        <div className="flex items-center gap-2 text-gray-400">
          <span>Profiling: <strong className="text-emerald-400">Zero-GC / 175 FPS Defense</strong></span>
          <span>·</span>
          <span>Architecture: State Pattern / Event-Driven UI / PlayFab BaaS</span>
        </div>
      </div>

      {/* ===================================================================== */}
      {/* 1. 미니 인덱스 바 */}
      {/* ===================================================================== */}
      <div className="flex flex-wrap items-center gap-2 pb-2 border-b border-gray-200/70 text-xs sm:text-[13px]">
        <span className="font-bold text-gray-400 mr-1 text-[11px] uppercase tracking-wider">SECTION</span>
        {techToc.map((item, idx) => (
          <a
            key={item.id}
            href={`#${item.id}`}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-gray-100 hover:bg-blue-50 hover:text-blue-600 text-gray-700 transition font-medium"
          >
            <span className="text-[10px] font-bold text-blue-500">0{idx + 1}</span>
            <span>{item.tag}</span>
          </a>
        ))}
      </div>

      {/* ===================================================================== */}
      {/* 01. 개발 환경 및 설계 철학 */}
      {/* ===================================================================== */}
      <section id="tech-env" className="scroll-mt-14 space-y-6">
        <header className="space-y-1">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest font-mono">
            ENGINEERING SPEC 01 · TECH STACK &amp; PHILOSOPHY
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            개발 환경 및 3대 설계 원칙
          </h2>
        </header>

        {/* 툴 기술 스택 배너 */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4">
          {[
            { img: "/icon/unity.png", name: "Unity Engine", desc: "코어 물리 & 타일맵 파이프라인" },
            { img: "/icon/csharp.png", name: "C# (.NET)", desc: "State 패턴 & 제네릭 풀링" },
            { img: "/icon/ase.png", name: "Aseprite", desc: "1인 제작 픽셀 아트 & 시트" },
            { img: "/icon/PlayFab.jpg", name: "PlayFab BaaS", desc: "텔레메트리 쿼리 & 리더보드" },
          ].map((tool, i) => (
            <div key={i} className="p-4 rounded-2xl bg-gray-50/80 border border-gray-200 flex items-center gap-3 shadow-sm">
              <div className="w-11 h-11 rounded-xl overflow-hidden border border-gray-200 bg-white shrink-0 p-1 flex items-center justify-center">
                <ImgPrefixed src={tool.img} className="w-full h-full object-contain" />
              </div>
              <div>
                <p className="font-bold text-gray-900 text-xs sm:text-sm">{tool.name}</p>
                <p className="text-[11px] text-gray-500 mt-0.5">{tool.desc}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="grid md:grid-cols-2 gap-6 pt-2">
          <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-200 space-y-3">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Project Objective</span>
            <h3 className="font-bold text-gray-900 text-base">상용 게임 개발 사이클의 전방위 경험</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              Unity C# 기반의 순수 클라이언트 로직 구현에 머무르지 않고, 
              <strong> 상용화 수준의 게임 서비스 파이프라인 전체를 체계적으로 경험</strong>하는 것을 목표로 삼았습니다. 
              PlayFab BaaS를 직접 연동하여 유저 인증, 랭킹 리더보드, 전투 텔레메트리 세션 로그, 
              원격 클라이언트 예외 수집에 이르는 실시간 라이브 인프라를 구축했습니다.
            </p>
          </div>

          <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-200 space-y-3">
            <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Design Principles</span>
            <h3 className="font-bold text-gray-900 text-base">확장성 · 데이터 주도 · 중복 제거</h3>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              타워, 몬스터, 장비 등 핵심 시스템을 모두 모듈형 인터페이스로 추상화했습니다. 
              기반 클래스(<code className="font-mono text-blue-700 bg-white px-1.5 py-0.5 rounded border border-gray-200 text-xs font-semibold">TowerWeapon</code>)를 통해 코드 중복을 제거하고, 
              모든 스탯과 드랍 확률을 외부 JSON 및 ScriptableObject로 관리하여 클라이언트 재빌드 없는 무중단 밸런스 패치를 지원합니다.
            </p>
          </div>
        </div>
      </section>

      <hr className="border-gray-200/80" />

      {/* ===================================================================== */}
      {/* 02. 모듈형 아키텍처 및 주요 성과 */}
      {/* ===================================================================== */}
      <section id="tech-architecture" className="scroll-mt-14 space-y-6">
        <header className="space-y-2">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
            Architecture 02 · Engineering Metrics
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            모듈형 아키텍처 및 정량적 엔지니어링 성과
          </h2>
        </header>

        <div className="grid md:grid-cols-2 gap-6 items-stretch">
          <div className="p-6 rounded-2xl bg-gray-50/80 border border-gray-200 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold text-gray-500 uppercase tracking-wide">Core Structure</span>
              <h3 className="font-bold text-gray-900 text-base">디커플링 기반 모듈형 설계</h3>
              <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
                모듈형 구조와 이벤트 기반 설계를 통해 게임 로직과 UI 간의 결합도를 0%로 분리했습니다. 
                타워와 스킬은 <strong>State 패턴</strong>을 적용하여 탐색과 공격 주기를 독립적인 상태 객체로 캡슐화했고, 
                UI는 <strong>UIEventManager 델리게이트</strong>를 통해 데이터가 변경될 때만 수신하여 불필요한 Update 폴링 연산을 원천 제거했습니다.
              </p>
            </div>
            <div className="mt-4 pt-3 border-t border-gray-200 text-xs font-semibold text-blue-600">
              유지보수성 및 확장성 확보
            </div>
          </div>

          <div className="p-6 rounded-2xl bg-blue-50/40 border border-blue-200/80 flex flex-col justify-between">
            <div className="space-y-3">
              <span className="text-xs font-bold text-blue-600 uppercase tracking-wide">Quantified Results</span>
              <h3 className="font-bold text-blue-950 text-base">측정된 정량적 성과 지표</h3>
              <ul className="space-y-2 text-xs sm:text-sm text-gray-700 leading-relaxed">
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold shrink-0">1.</span>
                  <span><strong>Zero-GC 오브젝트 풀링:</strong> 100개 투사체 및 다수 몬스터 동시 교전 시 140~175 FPS 안정 유지</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold shrink-0">2.</span>
                  <span><strong>절차적 맵 생성 수식:</strong> 경로 길이·코너 수·평행 간격 3요소 기반 0~100점 정량 평가</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold shrink-0">3.</span>
                  <span><strong>PlayFab 텔레메트리 기반 밸런싱:</strong> 타워 과점 픽률 29% ➔ 20%로 정상화</span>
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-blue-500 font-bold shrink-0">4.</span>
                  <span><strong>이벤트 반응형 UI:</strong> Update 폴링 제거 및 데이터 변경 시점의 선별적 렌더링</span>
                </li>
              </ul>
            </div>
            <div className="mt-4 pt-3 border-t border-blue-200 text-xs font-semibold text-blue-700">
              <button
                onClick={() => {
                  onTabChange("devlog");
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className="hover:underline flex items-center gap-1"
              >
                전체 개발일지(Changelog) 타임라인 보러 가기 →
              </button>
            </div>
          </div>
        </div>
      </section>

      <hr className="border-gray-200/80" />

      {/* ===================================================================== */}
      {/* 03. 핵심 기술 구현 및 코드 스니펫 */}
      {/* ===================================================================== */}
      <section id="tech-details" className="scroll-mt-14 space-y-10">
        <header className="space-y-2">
          <span className="text-xs font-bold text-blue-600 uppercase tracking-widest">
            Architecture 03 · Deep Dive &amp; Codebases
          </span>
          <h2 className="text-2xl sm:text-3xl font-bold text-gray-900 tracking-tight">
            핵심 기술 구현 및 실제 소스 코드
          </h2>
        </header>

        <div className="space-y-10 text-sm sm:text-[15px] text-gray-800 leading-relaxed">
          {/* 1. State 패턴 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-xs font-bold bg-blue-100 text-blue-700">OOP 01</span>
              <h3 className="font-bold text-gray-900 text-base">
                모듈형 타워 무기 시스템 (State 패턴)
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              <code className="font-mono text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded text-xs font-semibold">IWeaponState</code> 인터페이스를 정의하여 
              타워의 탐색(<code className="font-mono text-gray-800">SearchTargetState</code>)과 
              공격(<code className="font-mono text-gray-800">TryAttackState</code>) 상태를 명확히 분리했습니다. 
              새로운 공격 방식의 무기를 추가할 때 기존 코드를 수정하지 않고 신규 State 클래스만 주입하면 되는 OCP(개방-폐쇄 원칙)를 준수합니다.
            </p>
            <CodeSnippetToggle
              title="/Tower/WeaponStates/IWeaponState.cs - 타워 상태 인터페이스"
              code={IWeaponState}
            />
          </div>

          {/* 2. 이벤트 기반 UI */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-xs font-bold bg-blue-100 text-blue-700">DECOUPLING 02</span>
              <h3 className="font-bold text-gray-900 text-base">
                이벤트 기반 UI 갱신 (UIEventManager)
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              중앙 싱글톤 <code className="font-mono text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded text-xs font-semibold">UIEventManager</code>의 
              Action 델리게이트를 통해 플레이어 체력, 골드, SP, 웨이브 번호 변경 이벤트를 발행합니다. 
              UI 스크립트는 해당 이벤트를 구독하여 변경 시점에만 텍스트와 슬라이더를 갱신함으로써 런타임 오버헤드를 원천 차단합니다.
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

          {/* 3. 오브젝트 풀링 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-xs font-bold bg-blue-100 text-blue-700">OPTIMIZATION 03</span>
              <h3 className="font-bold text-gray-900 text-base">
                제네릭 오브젝트 풀링 및 175 FPS 성능 최적화
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              반복적으로 생성·소멸되는 적, 투사체, 데미지 텍스트를 제네릭 풀링 클래스로 관리하여 런타임 GC Allocation을 제로화했습니다. 
              수백 개의 오브젝트가 동시 교전하는 극한 상황에서도 140~175 FPS의 안정적인 프레임을 유지합니다.
            </p>
            <CodeSnippetToggle
              title="/System/ObjectPool.cs - 제네릭 오브젝트 풀"
              code={ObjectPool}
            />
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white p-3 shadow-sm">
                <ImgPrefixed src="/Desc/Pooling1.png" className="w-full object-cover rounded-xl border border-gray-150" />
                <p className="text-center text-xs font-medium text-gray-600 mt-2">풀링 벤치마크 테스트 1 (148.19 FPS)</p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white p-3 shadow-sm">
                <ImgPrefixed src="/Desc/Pooling2.png" className="w-full object-cover rounded-xl border border-gray-150" />
                <p className="text-center text-xs font-medium text-gray-600 mt-2">풀링 벤치마크 테스트 2 (175.48 FPS)</p>
              </div>
            </div>
          </div>

          {/* 4. 사운드 매니저 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-xs font-bold bg-blue-100 text-blue-700">AUDIO 04</span>
              <h3 className="font-bold text-gray-900 text-base">
                크로스페이드 및 사운드 중앙 관리 (SoundManager)
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              코루틴 기반의 BGM 부드러운 페이드 인/아웃 전환 및 풀링된 SFX 오디오 소스를 통해 사운드 왜곡 없는 다중 효과음 재생을 구현했습니다.
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

          {/* 5. 절차적 맵 생성 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-xs font-bold bg-blue-100 text-blue-700">PROCEDURAL 05</span>
              <h3 className="font-bold text-gray-900 text-base">
                절차적 경로 생성 및 타일맵 동적 빌드
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              DFS 백트래킹과 장애물 검사를 결합하여 고립되지 않고 항상 출구에 도달 가능한 유효 경로를 생성하고, 
              경로 데이터를 기반으로 4대 테마 타일맵을 실시간으로 빌드합니다.
            </p>
            <div className="space-y-2">
              <CodeSnippetToggle
                title="/Map/RandomPathGenerator.cs - 유효 경로 생성"
                code={RandomPathGenerator}
                ranges={[{ start: 90, end: 166 }]}
              />
              <CodeSnippetToggle
                title="/Map/MapGenerator.cs - 맵 타일 동적 빌드"
                code={MapGenerator}
                ranges={[{ start: 157, end: 227 }]}
              />
              <CodeSnippetToggle
                title="/Map/MapDifficulty.cs - 난이도 점수 수식 연산"
                code={MapDifficulty}
                ranges={[{ start: 6, end: 85 }]}
              />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 pt-2">
              {["/Desc/RandomMap1.png", "/Desc/RandomMap2.png", "/Desc/RandomMap3.png"].map((src, i) => (
                <div key={i} className="rounded-2xl overflow-hidden border border-gray-200 bg-white p-2.5 shadow-sm">
                  <ImgPrefixed src={src} className="w-full object-cover rounded-xl border border-gray-150" />
                </div>
              ))}
            </div>
          </div>

          {/* 6. 가중치 보상 및 스킬 상속 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-xs font-bold bg-blue-100 text-blue-700">DATA &amp; OOP 06</span>
              <h3 className="font-bold text-gray-900 text-base">
                가중치 랜덤 보상 및 장비 특수 스킬 상속 체계
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              누적 확률 가중치 알고리즘으로 웨이브 보상을 선별 추첨하며, 
              장비의 특수 액티브 스킬은 <code className="font-mono text-gray-800">SpecialSkillBase</code> 추상 클래스를 상속받아 
              쿨타임 및 발동 트리거를 유연하게 확장할 수 있도록 설계했습니다.
            </p>
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

          {/* 7. 데이터 암호화 & 마이그레이션 */}
          <div className="space-y-3">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-xs font-bold bg-blue-100 text-blue-700">SECURITY 07</span>
              <h3 className="font-bold text-gray-900 text-base">
                로컬 세이브 암호화 및 하위 호환 마이그레이션
              </h3>
            </div>
            <p className="text-xs sm:text-sm text-gray-600 leading-relaxed">
              XOR 대칭 암호화 키를 적용하여 유저의 골드, 장비 세이브 데이터 무단 변조를 차단하고, 
              구버전의 평문 JSON 세이브를 감지하면 데이터 손실 없이 최신 암호화 포맷으로 승격 변환합니다.
            </p>
            <CodeSnippetToggle
              title="/System/GameDataManager.cs - 암호화 및 마이그레이션"
              code={GameDataManager}
            />
          </div>

          {/* 8. 툴팁 & PlayFab 데이터 수집 */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <span className="px-2 py-0.5 rounded text-xs font-bold bg-blue-100 text-blue-700">BAAS 08</span>
              <h3 className="font-bold text-gray-900 text-base">
                동적 툴팁 시스템 및 PlayFab 텔레메트리 연동
              </h3>
            </div>
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
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
              <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white p-3 shadow-sm">
                <ImgPrefixed src="/Desc/PlayFabCombatData.png" className="w-full object-cover rounded-xl border border-gray-150" />
                <p className="text-center text-xs font-medium text-gray-600 mt-2">PlayFab 전투 세션 텔레메트리 로그 수집</p>
              </div>
              <div className="rounded-2xl overflow-hidden border border-gray-200 bg-white p-3 shadow-sm">
                <ImgPrefixed src="/Desc/PlayFabError.png" className="w-full object-cover rounded-xl border border-gray-150" />
                <p className="text-center text-xs font-medium text-gray-600 mt-2">PlayFab 런타임 예외 모니터링 콘솔</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* 하단 기획서 링크 배너 */}
      <div className="p-6 bg-gradient-to-r from-blue-50/70 to-indigo-50/40 border border-blue-200/80 rounded-2xl flex flex-col sm:flex-row items-center justify-between gap-4">
        <div>
          <h3 className="font-bold text-gray-900 text-sm sm:text-base">
            게임 시스템 기획 의도와 밸런스 데이터가 궁금하신가요?
          </h3>
          <p className="text-xs sm:text-sm text-gray-600 mt-1">
            기획서 탭에서 난이도별 장비 드랍 수식과 포스트모템 분석 자료를 확인하실 수 있습니다.
          </p>
        </div>
        <button
          onClick={() => {
            onTabChange("plan");
            window.scrollTo({ top: 0, behavior: "smooth" });
          }}
          className="px-5 py-2.5 bg-blue-600 hover:bg-blue-700 text-white text-xs sm:text-sm font-semibold rounded-xl transition shrink-0 shadow-sm"
        >
          기획서 탭으로 전환 →
        </button>
      </div>
    </article>
  );
};

export default TechPage;
