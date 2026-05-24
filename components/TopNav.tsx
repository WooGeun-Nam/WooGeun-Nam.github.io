"use client";
import { useEffect, useState } from "react";
import Link from "next/link";

const SECTIONS = ["home", "projects", "resume"];

export default function TopNav() {
  const [active, setActive] = useState<string>("home");

  useEffect(() => {
    const observers: IntersectionObserver[] = [];
    SECTIONS.forEach((id) => {
      const el = document.getElementById(id);
      if (!el) return;
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((e) => {
            if (e.isIntersecting) setActive(id);
          });
        },
        { rootMargin: "-40% 0px -55% 0px", threshold: [0, 0.2, 0.6] },
      );
      io.observe(el);
      observers.push(io);
    });
    return () => observers.forEach((io) => io.disconnect());
  }, []);

  const link = (id: string, label: string) => (
    <a
      key={id}
      href={`#${id}`}
      className={`px-1 transition-colors ${
        active === id
          ? "text-blue-600 font-semibold"
          : "text-gray-600 hover:text-gray-900"
      }`}
    >
      {label}
    </a>
  );

  return (
    <header className="fixed top-0 inset-x-0 z-50 bg-white/80 backdrop-blur border-b">
      <nav className="mx-auto max-w-6xl px-4 h-14 flex items-center justify-between">
        <Link href="/portfolio" className="font-semibold">
          WooGeun Nam
        </Link>
        <div className="flex gap-5 text-sm">
          {link("home", "Home")}
          {link("projects", "Projects")}
          {link("resume", "Resume")}
          <a
            href="https://velog.io/@rolru7686"
            target="_blank"
            rel="noopener noreferrer"
            className="px-1 transition-colors text-gray-600 hover:text-gray-900"
          >
            Blog
          </a>
        </div>
      </nav>
    </header>
  );
}
