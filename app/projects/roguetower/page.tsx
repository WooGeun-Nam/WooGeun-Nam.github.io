import GamePortfolio, { RogueTowerTab } from "../../../components/GamePortfolio";
import ImgPrefixed from "../../../components/ImgPrefixed";

const SOURCES = [
  {
    key: "SoundManager",
    url: "https://raw.githubusercontent.com/WooGeun-Nam/RogueTower-Code/main/System/SoundManager.cs",
  },
  {
    key: "ExceptionReporter",
    url: "https://raw.githubusercontent.com/WooGeun-Nam/RogueTower-Code/main/Network/ExceptionReporter.cs",
  },
  {
    key: "LoadingSceneController",
    url: "https://raw.githubusercontent.com/WooGeun-Nam/RogueTower-Code/main/System/LoadingSceneController.cs",
  },
  {
    key: "ShopManager",
    url: "https://raw.githubusercontent.com/WooGeun-Nam/RogueTower-Code/main/UI/ShopManager.cs",
  },
  {
    key: "StatueOfDestructionGod",
    url: "https://raw.githubusercontent.com/WooGeun-Nam/RogueTower-Code/main/Data/SpecialSkills/Skill_StatueOfDestructionGod.cs",
  },
  {
    key: "GameManager",
    url: "https://raw.githubusercontent.com/WooGeun-Nam/RogueTower-Code/main/System/GameManager.cs",
  },
  {
    key: "GameDataManager",
    url: "https://raw.githubusercontent.com/WooGeun-Nam/RogueTower-Code/main/System/GameDataManager.cs",
  },
  {
    key: "UIManager",
    url: "https://raw.githubusercontent.com/WooGeun-Nam/RogueTower-Code/main/UI/UIManager.cs",
  },
  {
    key: "UIEventManager",
    url: "https://raw.githubusercontent.com/WooGeun-Nam/RogueTower-Code/main/UI/UIEventManager.cs",
  },
  {
    key: "TooltipManager",
    url: "https://raw.githubusercontent.com/WooGeun-Nam/RogueTower-Code/main/System/TooltipManager.cs",
  },
  {
    key: "TooltipTrigger",
    url: "https://raw.githubusercontent.com/WooGeun-Nam/RogueTower-Code/main/UI/TooltipTrigger.cs",
  },
  {
    key: "TowerArchetype",
    url: "https://raw.githubusercontent.com/WooGeun-Nam/RogueTower-Code/main/Data/Models/TowerArchetype.cs",
  },
  {
    key: "Enemy",
    url: "https://raw.githubusercontent.com/WooGeun-Nam/RogueTower-Code/main/Enemy/Enemy.cs",
  },
  {
    key: "IWeaponState",
    url: "https://raw.githubusercontent.com/WooGeun-Nam/RogueTower-Code/main/Tower/WeaponStates/IWeaponState.cs",
  },
  {
    key: "ObjectPool",
    url: "https://raw.githubusercontent.com/WooGeun-Nam/RogueTower-Code/main/System/ObjectPool.cs",
  },
  {
    key: "MapDifficulty",
    url: "https://raw.githubusercontent.com/WooGeun-Nam/RogueTower-Code/main/Map/MapDifficulty.cs",
  },
  {
    key: "RandomPathGenerator",
    url: "https://raw.githubusercontent.com/WooGeun-Nam/RogueTower-Code/main/Map/RandomPathGenerator.cs",
  },
  {
    key: "MapGenerator",
    url: "https://raw.githubusercontent.com/WooGeun-Nam/RogueTower-Code/main/Map/MapGenerator.cs",
  },
  {
    key: "WeightedRandomReward",
    url: "https://raw.githubusercontent.com/WooGeun-Nam/RogueTower-Code/main/System/WeightedRandomReward.cs",
  },
  {
    key: "SpecialSkillBase",
    url: "https://raw.githubusercontent.com/WooGeun-Nam/RogueTower-Code/main/Data/SpecialSkillBase.cs",
  },
] as const;

async function fetchRaw(url: string) {
  const res = await fetch(url, { cache: "force-cache" });
  if (!res.ok) throw new Error(`Failed to load ${url}: ${res.status}`);
  return res.text();
}

interface RogueTowerPageProps {
  initialTab?: RogueTowerTab;
}

export default async function RogueTowerPage({ initialTab = "plan" }: RogueTowerPageProps) {
  const entries = await Promise.all(
    SOURCES.map(async ({ key, url }) => {
      const full = await fetchRaw(url);
      return [key, full] as const;
    })
  );

  const codeAssets = Object.fromEntries(entries) as Record<string, string>;

  return (
    <main className="mx-auto max-w-5xl px-4 sm:px-6 py-12 space-y-12 text-zinc-900 font-sans antialiased">
      {/* ===================================================================== */}
      {/* 1. 상단 히어로: TinyJourney와 통일된 미니멀 테크 헤더 & 메타 스펙 */}
      {/* ===================================================================== */}
      <header className="space-y-8">
        <div className="flex flex-col md:flex-row items-center md:items-start gap-8">
          {/* 대표 썸네일 */}
          <div className="relative w-44 h-44 rounded-2xl bg-zinc-100 border border-zinc-200/80 overflow-hidden shrink-0 shadow-sm flex items-center justify-center">
            <ImgPrefixed
              src="/SiteLogo.png"
              alt="RogueTower 메인 로고"
              className="w-full h-full object-cover"
            />
          </div>

          {/* 타이틀 및 핵심 소개 */}
          <div className="flex-1 space-y-3 text-center md:text-left">
            <div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-mono text-zinc-700">
              <span className="w-2 h-2 rounded-full bg-blue-500"></span>
              SHIPPED · PC RELEASE (ITCH.IO)
            </div>
            <h1 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-950">
              RogueTower
            </h1>
            <p className="text-base sm:text-lg text-zinc-600 font-medium">
              절차적 맵 생성 및 데이터 드리븐 밸런싱의 3D 타워 디펜스
            </p>
            <p className="text-sm text-zinc-600 leading-relaxed max-w-2xl">
              매 판 무작위로 생성되는 9×16 타일맵 경로 위에서 6종의 타워와 장비를 조합해 20웨이브를 방어하는 전략 디펜스 게임입니다. 
              수식 기반 맵 난이도 평가 시스템과 PlayFab 텔레메트리 로그 지표 분석을 통해 픽률 편중 문제를 정량적으로 해결했습니다.
            </p>

            <div className="pt-2">
              <a
                href="https://github.com/WooGeun-Nam/RogueTower-Code"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-900 hover:bg-zinc-800 text-white text-xs sm:text-sm font-semibold transition"
              >
                GitHub Source Code →
              </a>
            </div>
          </div>
        </div>

        {/* 메타 스펙 바 (Linear 스타일 4열 그리드) */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-4 py-4 border-y border-zinc-200/80 text-xs sm:text-sm">
          <div>
            <dt className="text-zinc-400 font-mono text-[11px] uppercase tracking-wider">Role</dt>
            <dd className="font-semibold text-zinc-800 mt-0.5">기획 · 클라이언트 · 그래픽</dd>
          </div>
          <div>
            <dt className="text-zinc-400 font-mono text-[11px] uppercase tracking-wider">Timeline</dt>
            <dd className="font-semibold text-zinc-800 mt-0.5">2024.10 ~ 2025.08 (1인 개발)</dd>
          </div>
          <div>
            <dt className="text-zinc-400 font-mono text-[11px] uppercase tracking-wider">Genre</dt>
            <dd className="font-semibold text-zinc-800 mt-0.5">3D 타워 디펜스 · 로그라이크</dd>
          </div>
          <div>
            <dt className="text-zinc-400 font-mono text-[11px] uppercase tracking-wider">Platform</dt>
            <dd className="font-semibold text-zinc-800 mt-0.5">PC (Unity · Itch.io 배포)</dd>
          </div>
        </div>
      </header>

      {/* ===================================================================== */}
      {/* 2. 하단 탭 콘텐츠: GamePortfolio */}
      {/* ===================================================================== */}
      <section>
        <GamePortfolio codeAssets={codeAssets} initialTab={initialTab} />
      </section>
    </main>
  );
}
