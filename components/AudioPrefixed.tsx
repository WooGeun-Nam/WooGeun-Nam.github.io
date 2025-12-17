"use client";

const getPrefix = () => {
  if (process.env.NODE_ENV === "production") return "/";
  if (typeof window !== "undefined") {
    const d: any = (window as any).__NEXT_DATA__;
    if (d?.assetPrefix) return d.assetPrefix as string;
    if (d?.basePath) return d.basePath as string;
  }
  return "";
};

// 파일 경로 정규화: "./", "../", leading "/" 제거
const normalize = (src: string) =>
  src.startsWith("http")
    ? src
    : src.replace(/^(\.\/+|\.\.\/+)+/, "").replace(/^\/+/, "");

type Props = Omit<React.AudioHTMLAttributes<HTMLAudioElement>, "src"> & {
  src?: string;
};

export default function AudioPrefixed({ src, ...rest }: Props) {
  const prefix = getPrefix();

  if (!src) {
    return <audio preload="metadata" {...rest} />;
  }

  const finalSrc = src.startsWith("http")
    ? src
    : `${prefix.replace(/\/+$/, "")}/${normalize(src).replace(/^\/+/, "")}`;

  return <audio src={finalSrc} preload="metadata" {...rest} />;
}
