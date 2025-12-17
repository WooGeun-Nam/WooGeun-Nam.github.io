"use client";

/** 배포 환경 prefix 계산: Pages(프로덕션)에서는 루트("/") 고정 */
const getPrefix = () => {
  if (process.env.NODE_ENV === "production") {
    return "/";
  }
  if (typeof window !== "undefined") {
    const d: any = (window as any).__NEXT_DATA__;
    if (d?.assetPrefix) return d.assetPrefix as string;
    if (d?.basePath) return d.basePath as string;
  }
  return "";
};

type Props = React.ImgHTMLAttributes<HTMLImageElement> & { src: string };

/** <img> 대체. 상대·절대경로 모두 prefix를 붙여 정규화. */
export default function ImgPrefixed({ src, ...rest }: Props) {
  if (!src) return <img {...rest} />;

  const prefix = getPrefix();

  // "./../", "./", "/" 제거하여 일관된 경로 생성
  const normalized = src.startsWith("http")
    ? src
    : src.replace(/^(\.\/+|\.\.\/+)+/, "").replace(/^\/+/, "");

  // prefix와 normalized 를 안전하게 결합
  const finalSrc = src.startsWith("http")
    ? src
    : `${prefix.replace(/\/+$/, "")}/${normalized.replace(/^\/+/, "")}`;

  return <img src={finalSrc} {...rest} />;
}
