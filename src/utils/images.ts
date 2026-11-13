import { getImage } from 'astro:assets';
import type { ImageMetadata } from 'astro';

const candidateWidths = [240, 320, 480, 640, 800, 960, 1200, 1600] as const;

export function getResponsiveImageWidths(src: ImageMetadata, maxWidth = 1600): number[] {
  const maximum = Math.min(src.width, maxWidth);
  return [...new Set([...candidateWidths.filter((width) => width < maximum), maximum])]
    .sort((a, b) => a - b);
}

export function getImageOutputWidth(src: ImageMetadata, maxWidth = 960): number {
  return Math.min(src.width, maxWidth);
}

export async function getResponsiveImageSrcSet(
  src: ImageMetadata,
  maxWidth = 1600,
): Promise<string> {
  const widths = getResponsiveImageWidths(src, maxWidth);
  const candidates = await Promise.all(
    widths.map(async (width) => ({
      src: (await getImage({ src, width, format: 'webp' })).src,
      width,
    })),
  );
  return candidates.map(({ src: imageSrc, width }) => `${imageSrc} ${width}w`).join(', ');
}

export async function getOptimizedImageUrl(src: ImageMetadata, maxWidth = 1600): Promise<string> {
  const image = await getImage({
    src,
    width: getImageOutputWidth(src, maxWidth),
    format: 'webp',
  });
  return image.src;
}
