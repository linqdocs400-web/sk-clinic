import { IMAGE_DATA } from "../image-data";

interface OptimizedImageProps {
  baseName: keyof typeof IMAGE_DATA;
  alt: string;
  className?: string;
  style?: React.CSSProperties;
  sizes?: string;
  priority?: boolean;
}

export function OptimizedImage({
  baseName,
  alt,
  className,
  style,
  sizes = "100vw",
  priority = false,
}: OptimizedImageProps) {
  const widths = IMAGE_DATA[baseName] || [];

  if (widths.length === 0) {
    console.warn(`No image data found for ${baseName}`);
    return <img src={`/optimized/${baseName}-fallback.webp`} alt={alt} className={className} />;
  }

  const avifSrcSet = widths
    .map((w: number) => `/optimized/${baseName}-${w}w.avif ${w}w`)
    .join(", ");
  const webpSrcSet = widths
    .map((w: number) => `/optimized/${baseName}-${w}w.webp ${w}w`)
    .join(", ");
  const fallbackSrc = `/optimized/${baseName}-fallback.webp`;

  return (
    <picture>
      <source type="image/avif" srcSet={avifSrcSet} sizes={sizes} />
      <source type="image/webp" srcSet={webpSrcSet} sizes={sizes} />
      <img
        src={fallbackSrc}
        alt={alt}
        className={className}
        style={style}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        {...(priority ? ({ fetchPriority: "high" } as any) : {})}
      />
    </picture>
  );
}
