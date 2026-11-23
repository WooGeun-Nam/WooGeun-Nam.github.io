import GearAndTowerClient, { GearAndTowerTab } from "../../../../components/GearAndTowerClient";

export function generateStaticParams() {
  return [
    { tab: "overview" },
    { tab: "architecture" },
    { tab: "automation" },
    { tab: "governance" },
  ];
}

export default function GearAndTowerTabPage({ params }: { params: { tab: string } }) {
  const validTabs: GearAndTowerTab[] = ["overview", "architecture", "automation", "governance"];
  const tab = validTabs.includes(params.tab as GearAndTowerTab)
    ? (params.tab as GearAndTowerTab)
    : "overview";

  return <GearAndTowerClient initialTab={tab} />;
}
