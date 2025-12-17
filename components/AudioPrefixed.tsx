"use client";

const getPrefix = () => {
  if (process.env.NODE_ENV === "production") return "/towerdefense-portfolio";
  if (typeof window !== "undefined") {
    const d: any = (window as any).__NEXT_DATA__;
    if (d?.assetPrefix) return d.assetPrefix as string;
    if (d?.basePath) return d.basePath as string;
  }
  return "";
};

const normalize = (src: string) =>
  src.startsWith("http")
    ? src
    : `/${src.replace(/^(\.\/+|\.\.\/+)+/, "").replace(/^\/+/, "")}`;

type Props = Omit<React.AudioHTMLAttributes<HTMLAudioElement>, "src"> & {
  src?: string;
};

export default function AudioPrefixed({ src, ...rest }: Props) {
  const prefix = getPrefix(); // ← 동기 계산
  const finalSrc = !src
    ? undefined
    : src.startsWith("http")
    ? src
    : `${prefix}${normalize(src)}`;

  return <audio src={finalSrc} preload="metadata" {...rest} />;
}
