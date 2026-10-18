"use client";

import ImgPrefixed from "./../ImgPrefixed";
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
  onTabChange: (tab: "deploy" | "plan" | "tech" | "devlog") => void;
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

  return (
    <div className="space-y-10 text-gray-800">
      {/* 헤더 섹션 */}
      <div className="border-b border-gray-200 pb-6">
        <h1 className="text-3xl font-extrabold text-gray-900">
          RogueTower 기술 설계서
        </h1>
        <p className="text-sm sm:text-[15px] text-gray-600 mt-2 leading-relaxed">
          클라이언트 아키텍처, 디자인 패턴 적용, 절차적 맵 생성 알고리즘 및 PlayFab 백엔드 연동 명세
        </p>
      </div>

      {/* 개발 도구 */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-3">
          개발 환경 및 도구
        </h3>

        <ul className="list-disc pl-5 text-sm sm:text-[15px] text-gray-800 mb-5 space-y-2 leading-relaxed">
          <li>
            <b>엔진 :</b> Unity
          </li>
          <li>
            <b>언어 :</b> C#
          </li>
          <li>
            <b>디자인 도구 :</b> Aseprite
          </li>
          <li>
            <b>백엔드 서비스 (BaaS) :</b> PlayFab (글로벌 리더보드, 전투 텔레메트리 로그, 원격 에러 수집)
          </li>
        </ul>

        <div className="grid grid-cols-4 gap-4 w-full sm:w-1/2">
          <div className="rounded-lg overflow-hidden border border-gray-100">
            <ImgPrefixed
              src="/icon/unity.png"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden border border-gray-100">
            <ImgPrefixed
              src="/icon/csharp.png"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden border border-gray-100">
            <ImgPrefixed
              src="/icon/ase.png"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="rounded-lg overflow-hidden border border-gray-100">
            <ImgPrefixed
              src="/icon/PlayFab.jpg"
              className="h-full w-full object-cover"
            />
          </div>
        </div>
      </div>

      {/* 프로젝트 목표 및 설계 철학 */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-3">
          프로젝트 목표 및 설계 철학
        </h3>
        <div className="space-y-3 text-sm sm:text-[15px] text-gray-700 leading-relaxed">
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
            `ScriptableObject` 및 Json 파일로 관리하여 코드 수정 없이 유연한
            업데이트가 가능한 시스템을 구축했습니다.
          </p>
        </div>
      </div>

      {/* 기술 요약 */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-3">
          기술 요약
        </h3>
        <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed">
          이번 프로젝트는 <b>모듈형 구조와 이벤트 기반 설계</b>를 통해
          유지보수성과 확장성을 극대화한 2D 로그라이크 타워 디펜스 게임입니다.
          타워와 스킬은 <b>State 패턴</b>을 적용하여 행동(탐색·공격)을 명확히
          분리하였고, 주요 UI는 <b>이벤트 기반 갱신</b>으로 처리되어 불필요한
          연산을 최소화했습니다.
        </p>
        <p className="text-sm sm:text-[15px] text-gray-700 leading-relaxed mt-3">
          또한, <b>절차적 맵 생성 알고리즘</b>을 직접 설계하여 매번 새로운
          플레이 경험을 제공하며, <b>데이터 기반 설계</b>로 리플레이성과
          유지보수성을 높였습니다. 특히, `Time.timeScale` 오염으로 인한 게임
          멈춤 현상, 다중 오브젝트 환경에서의 사운드 병목 현상 등 복합적인
          버그들을 <b>정확한 원인 분석과 메모리 관리, 방어 코드 설계</b>를
          통해 해결하여 프로그램의 안정성을 크게 향상시켰습니다.
        </p>
      </div>

      {/* 주요 성과 */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-3">
          주요 성과
        </h3>
        <ul className="list-disc pl-5 space-y-2.5 text-sm sm:text-[15px] text-gray-800 leading-relaxed">
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
                onTabChange("devlog");
                window.scrollTo({ top: 0, behavior: "smooth" });
              }}
              className="text-blue-600 font-semibold hover:underline"
            >
              개발일지
            </a>
            를 통해 주요 패치, 버그 수정, 개선사항을 기록하며 품질 관리
          </li>
        </ul>
      </div>

      {/* 기술적 특징 */}
      <div className="bg-white rounded-xl border border-gray-200 shadow-sm p-6">
        <h3 className="text-xl font-bold text-gray-900 mb-4 border-l-4 border-blue-500 pl-3">
          핵심 기술 구현 상세
        </h3>

        <div className="space-y-6">
          <ul className="list-disc pl-5 text-sm sm:text-[15px] text-gray-800 space-y-5 leading-relaxed">
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
                    className="w-full object-cover rounded border border-gray-200"
                  />
                  <figcaption className="text-center text-xs text-gray-600 mt-2">
                    풀링 성능 테스트 1 (148.19 FPS)
                  </figcaption>
                </div>

                <div>
                  <ImgPrefixed
                    src="/Desc/Pooling2.png"
                    className="w-full object-cover rounded border border-gray-200"
                  />
                  <figcaption className="text-center text-xs text-gray-600 mt-2">
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
              <ul className="list-decimal pl-6 mt-2 space-y-2 text-sm text-gray-700">
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
                    className="w-full object-cover rounded border border-gray-200"
                  />
                </div>
                <div>
                  <ImgPrefixed
                    src="/Desc/RandomMap2.png"
                    className="w-full object-cover rounded border border-gray-200"
                  />
                </div>
                <div>
                  <ImgPrefixed
                    src="/Desc/RandomMap3.png"
                    className="w-full object-cover rounded border border-gray-200"
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
              <ul className="pl-6 mt-2 space-y-3">
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
              <p className="pl-4 text-sm text-gray-700 mt-1 leading-relaxed">
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
              <p className="pl-4 text-sm text-gray-700 mt-1">
                툴팁이 필요한 객체에 `TooltipTrigger.cs` 컴포넌트를 이용하여
                정보제공
              </p>
              <div className="p-4 overflow-hidden grid grid-cols-2 gap-4">
                <div>
                  <ImgPrefixed
                    src="/Desc/Tooltip1.png"
                    className="w-full object-cover rounded border border-gray-200"
                  />
                  <figcaption className="text-center text-xs text-gray-600 mt-2">
                    툴팁 예시1 (타워 정보)
                  </figcaption>
                </div>

                <div>
                  <ImgPrefixed
                    src="/Desc/Tooltip3.png"
                    className="w-full object-cover rounded border border-gray-200"
                  />
                  <figcaption className="text-center text-xs text-gray-600 mt-2">
                    툴팁 예시2 (특수 장비 인게임 정보 실시간 표기)
                  </figcaption>
                </div>
                <div>
                  <ImgPrefixed
                    src="/Desc/Tooltip2.png"
                    className="w-full object-cover rounded border border-gray-200"
                  />
                  <figcaption className="text-center text-xs text-gray-600 mt-2">
                    툴팁 예시3 (장비 옵션)
                  </figcaption>
                </div>
                <div>
                  <ImgPrefixed
                    src="/Desc/Tooltip4.png"
                    className="w-full object-cover rounded border border-gray-200"
                  />
                  <figcaption className="text-center text-xs text-gray-600 mt-2">
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
                    className="w-full object-cover rounded border border-gray-200"
                  />
                  <figcaption className="text-center text-xs text-gray-600 mt-2">
                    PlayFab을 통한 전투 데이터 수집
                  </figcaption>
                </div>

                <div>
                  <ImgPrefixed
                    src="/Desc/PlayFabError.png"
                    className="w-full object-cover rounded border border-gray-200"
                  />
                  <figcaption className="text-center text-xs text-gray-600 mt-2">
                    PlayFab을 통한 에러 데이터 수집 쿼리
                  </figcaption>
                </div>
              </div>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default TechPage;
