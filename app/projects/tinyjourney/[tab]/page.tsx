import TinyJourneyClient from "../../../../components/TinyJourneyClient";

export function generateStaticParams() {
  return [
    { tab: "plan" },
    { tab: "tech" },
  ];
}

export default function TinyJourneyTabPage({ params }: { params: { tab: string } }) {
  const validTab = params.tab === "tech" ? "tech" : "plan";
  return <TinyJourneyClient initialTab={validTab} />;
}
