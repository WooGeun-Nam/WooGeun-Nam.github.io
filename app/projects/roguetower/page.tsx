import GamePortfolio from "../../../components/GamePortfolio";
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
  // 정적 빌드가 가능하도록 기본 캐시(또는 force-cache)로 호출
  const res = await fetch(url, { cache: "force-cache" });
  if (!res.ok) throw new Error(`Failed to load ${url}: ${res.status}`);
  return res.text();
}

export default async function RogueTowerPage() {
  const entries = await Promise.all(
    SOURCES.map(async ({ key, url }) => {
      const full = await fetchRaw(url);
      return [key, full] as const;
    })
  );

  const codeAssets = Object.fromEntries(entries) as Record<string, string>;

  return (
    <main className="mx-auto max-w-6xl px-4 py-16 space-y-12">
      {/* 상단: 소개 이미지 / 기본 정보 */}
      <section className="grid gap-8 md:grid-cols-2 items-stretch">
        {/* 메인 미리보기 */}
        <div className="rounded-xl overflow-hidden shadow-sm">
          <ImgPrefixed
            src="/SiteLogo.png"
            alt="RogueTower 메인"
            className="w-full h-full object-cover"
          />
        </div>

        {/* 정보 + 버튼 */}
        <div className="flex flex-col justify-between">
          <div>
            <h1 className="text-4xl font-bold underline decoration-blue-500 underline-offset-8">
              RogueTower
            </h1>

            <dl className="grid grid-cols-[120px_1fr] gap-x-4 gap-y-6 text-gray-800 mt-8">
              <dt className="font-semibold text-gray-600">ROLE</dt>
              <dd>기획, 개발, 디자인</dd>

              <dt className="font-semibold text-gray-600">DURATION</dt>
              <dd>2024.10 ~ 2025.08</dd>

              <dt className="font-semibold text-gray-600">TEAM</dt>
              <dd>1인 개발</dd>

              <dt className="font-semibold text-gray-600">PLATFORM</dt>
              <dd>PC</dd>
            </dl>
          </div>

          <div className="mt-6 flex gap-4">
            <a
              href="https://github.com/WooGeun-Nam/RogueTower-Code"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full px-5 py-3 text-sm font-semibold
                   bg-gray-200 text-gray-900 hover:bg-gray-300 focus-visible:outline-none
                   focus-visible:ring-2 focus-visible:ring-blue-300"
            >
              GitHub Source
            </a>
          </div>
        </div>
      </section>

      {/* 하단 상세 섹션 */}
      <section className="pt-8">
        <GamePortfolio codeAssets={codeAssets} />
      </section>
    </main>
  );
}
