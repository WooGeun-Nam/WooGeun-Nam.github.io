"use client";

/** 배포 환경 prefix 계산: Pages(프로덕션)에서는 레포명 고정, 그 외에는 런타임 정보 사용 */
const getPrefix = () => {
  if (process.env.NODE_ENV === "production") {
    return "/towerdefense-portfolio";
  }
  if (typeof window !== "undefined") {
    const d: any = (window as any).__NEXT_DATA__;
    if (d?.assetPrefix) return d.assetPrefix as string;
    if (d?.basePath) return d.basePath as string;
  }
  return "";
};

type Props = React.ImgHTMLAttributes<HTMLImageElement> & { src: string };

/** <img> 대체. 기존 사용법 그대로. 상대·절대경로 모두 prefix를 붙여 정규화. */
export default function ImgPrefixed({ src, ...rest }: Props) {
  if (!src) return <img {...rest} />;

  // prefix를 동기적으로 바로 계산 → 첫 렌더부터 정상 경로
  const prefix = getPrefix();

  // "./../", "./", "/" 등 제거해 일관된 경로로 통일
  const normalized = src.startsWith("http")
    ? src
    : `/${src.replace(/^(\.\/+|\.\.\/+)+/, "").replace(/^\/+/, "")}`;

  const finalSrc = normalized.startsWith("http")
    ? normalized
    : `${prefix}${normalized}`;

  return <img src={finalSrc} {...rest} />;
}
