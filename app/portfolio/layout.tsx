// app/portfolio/layout.tsx
import type { Metadata } from "next";
import TopNav from "../../components/TopNav";

export const metadata: Metadata = {
  title: "WooGeun Nam",
  description: "웹 포트폴리오",
  icons: { icon: "/Icon.png" },
};

export default function PortfolioLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <TopNav />
      <main className="mx-auto w-full max-w-6xl pt-16">{children}</main>
      <footer className="py-6 pr-6 text-right text-sm text-gray-500">
        Copyright © 2026. WooGeun-Nam All rights reserved.
      </footer>
    </section>
  );
}
