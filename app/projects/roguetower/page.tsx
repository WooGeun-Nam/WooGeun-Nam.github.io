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
    <main className="mx-auto max-w-6xl px-4 py-16 space-y-12">
      {/* ===================================================================== */}
      {/* 상단: Others 프로젝트와 완벽히 통일된 헤더 (좌 이미지 / 우 메타 정보) */}
      {/* ===================================================================== */}
      <section className="grid gap-8 md:grid-cols-2 items-stretch">
        <div className="rounded-xl overflow-hidden shadow-sm flex items-center justify-center bg-gray-50 border border-gray-200">
          <ImgPrefixed
            src="/SiteLogo.png"
            alt="RogueTower 메인 로고"
            className="w-full h-full object-cover"
          />
        </div>

        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold underline decoration-blue-500 underline-offset-8">
              RogueTower
            </h1>
            <p className="text-sm sm:text-[15px] text-gray-600 mt-3 font-medium">
              절차적 맵 생성 및 데이터 드리븐 밸런싱의 2D/3D 타워 디펜스
            </p>

            <dl className="grid grid-cols-[120px_1fr] gap-x-4 gap-y-5 text-gray-800 mt-7 text-sm sm:text-[15px]">
              <dt className="font-semibold text-gray-600">ROLE</dt>
              <dd>기획, 개발, 디자인</dd>

              <dt className="font-semibold text-gray-600">DURATION</dt>
              <dd>2024.10 ~ 2025.08</dd>

              <dt className="font-semibold text-gray-600">TEAM</dt>
              <dd>1인 개발</dd>

              <dt className="font-semibold text-gray-600">PLATFORM</dt>
              <dd>PC (Windows · 개인 배포 및 베타 테스트 완료)</dd>
            </dl>
          </div>

          <div className="mt-6 flex flex-wrap gap-4">
            <a
              href="https://drive.google.com/file/d/1f3eNnKfts_eKnNyIHo1nAcWxsLohogxM/view?usp=sharing"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold
                         bg-blue-100 text-blue-800 hover:bg-blue-200 transition"
            >
              Demo Download
            </a>

            <a
              href="https://github.com/WooGeun-Nam/RogueTower-Code"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-2.5 text-sm font-semibold
                         bg-gray-200 text-gray-900 hover:bg-gray-300 transition"
            >
              GitHub Source
            </a>
          </div>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* ⚡ 채용담당자용 10초 핵심 성과 메트릭 바 (Top 4 Metrics) */}
      {/* ===================================================================== */}
      <section className="grid grid-cols-2 md:grid-cols-4 gap-3">
        <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-center">
          <span className="text-xl sm:text-2xl font-black text-blue-600 font-mono">175 FPS</span>
          <p className="text-xs font-bold text-gray-800 mt-1">Zero-GC 오브젝트 풀링</p>
          <p className="text-[11px] text-gray-500 mt-0.5">100개 투사체 동시 교전 방어</p>
        </div>
        <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-center">
          <span className="text-xl sm:text-2xl font-black text-gray-900 font-mono">29% ➔ 20%</span>
          <p className="text-xs font-bold text-gray-800 mt-1">PlayFab 픽률 편중 해소</p>
          <p className="text-[11px] text-gray-500 mt-0.5">사거리 가중치 50% 축소 패치</p>
        </div>
        <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-center">
          <span className="text-xl sm:text-2xl font-black text-blue-600 font-mono">0 ~ 100</span>
          <p className="text-xs font-bold text-gray-800 mt-1">지형 3요소 난이도 정량화</p>
          <p className="text-[11px] text-gray-500 mt-0.5">길이·코너·간격 가중치 수식</p>
        </div>
        <div className="p-4 rounded-xl bg-gray-50 border border-gray-200 text-center">
          <span className="text-xl sm:text-2xl font-black text-gray-900 font-mono">100여 종</span>
          <p className="text-xs font-bold text-gray-800 mt-1">장비 파밍 &amp; 도감 시스템</p>
          <p className="text-[11px] text-gray-500 mt-0.5">가중치 예산 기반 옵션 부여</p>
        </div>
      </section>

      {/* ===================================================================== */}
      {/* 하단 탭 콘텐츠: GamePortfolio */}
      {/* ===================================================================== */}
      <section>
        <GamePortfolio codeAssets={codeAssets} initialTab={initialTab} />
      </section>
    </main>
  );
}
