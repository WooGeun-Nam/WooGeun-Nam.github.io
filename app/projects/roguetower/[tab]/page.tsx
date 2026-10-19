import RogueTowerPage from "../page";
import { RogueTowerTab } from "../../../../components/GamePortfolio";

export function generateStaticParams() {
  return [
    { tab: "plan" },
    { tab: "tech" },
    { tab: "deploy" },
    { tab: "devlog" },
  ];
}

export default async function RogueTowerTabPage({ params }: { params: { tab: string } }) {
  const validTabs: RogueTowerTab[] = ["plan", "tech", "deploy", "devlog"];
  const tab = validTabs.includes(params.tab as RogueTowerTab)
    ? (params.tab as RogueTowerTab)
    : "plan";

  return <RogueTowerPage initialTab={tab} />;
}
