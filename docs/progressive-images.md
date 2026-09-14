# Progressive image loading

`src/components/atoms/ProgressiveImage.astro` renders its original image or Picture slot without a wrapper, followed by a temporary, aria-hidden, noninteractive span. Astro generates the proxy from local ImageMetadata using getImage(), WebP quality 30, and min(32, source.width); height follows the source aspect ratio. The proxy is a CSS background inside that temporary span, so existing img selectors and listeners cannot accidentally target it.

The existing media container receives data-progressive-host (isolation only), or data-progressive-host="relative" for previously static containers. The negative-z-index proxy paints behind the original image and above the container background, reserves no space, and clips its 2rem blur. Existing image attributes, CSS selectors, dimensions, full-resolution sources, responsive sources, loading priorities, and DOM parents remain unchanged. Explicit bounds reproduce the 60%-width article navigation images. Theme-specific proxies follow the footer's existing dark/light images. An unknown optional metadata source leaves the slot unchanged.

`src/scripts/progressive-images.ts` initializes once per proxy, handles load/cache/decode/error, and removes proxies after the 240ms opacity transition (350ms cleanup fallback). Reduced motion removes them immediately. It never calls decode() before a lazy image loads. Astro page-load and before-swap events initialize/clean up listeners. The current BaseLayout does not mount ClientRouter; actual client-side swaps cannot be tested on this configuration without adding navigation behavior outside this task.

## Files changed for this task

- Added the atom and shared script above.
- Applied the atom in components/blog/BlogCard.astro; components/molecules/CaseStudyCard.astro, IndustrySolutionCard.astro, Footer.astro; components/sections/DigitalSignageDisplayTypesSection.astro, ShelfLabelsHardwareDetailsSection.astro; layouts/BlogPostLayout.astro.
- Added source-metadata maps in i18n/pages/data/industrySolutions.ts and shelfLabelHardwareFeatures.ts, preserving their existing string image APIs.
- Paths above are relative to src. Existing unrelated working-tree changes were retained.

## Audit and intentional exclusions

| Implementation | Decision |
| --- | --- |
| Blog/news cards, article header and previous/next cards | Applied; preserved Astro Image output and view-transition styles. |
| CaseStudyCard Picture | Applied; source/picture/img hierarchy unchanged. |
| Display types, shelf-label hardware cards | Applied; existing aspect-ratio media containers reserve space. |
| IndustrySolutionCard | Applied when its source exists in the metadata map; unknown sources remain unchanged. |
| Footer maps | Applied with separate dark/light proxies; link and CTA unchanged. |
| HeroSection carousel | Skipped: runtime slide clones, theme opacity, and image-loading mutation require dedicated synchronization. |
| OurServicesSection | Skipped: responsive animated image bounds, per-card transforms, and theme opacity. |
| VideoStreamingHeroSection, DigitalSignageAnyScreenSection, ShelfLabelsScrollFeaturesSection | Skipped: layered/animated transparent image compositions. |
| DisclosureItem industry images | Skipped: direct grid children inside animated disclosures; adding siblings or containing blocks risks grid/animation behavior. |
| BlogPostLayout sidebar Pictures | Skipped: overlapping theme- and breakpoint-specific image composition. |
| Markdown images, including remark-inline-editorial-image.mjs | Skipped: Astro-generated Markdown output bypasses the component; floated inline editorial layout needs a separate renderer adaptation. |
| DigitalSignageRealtimeContentSection, VideoStreamingHotelSolutionsSection | Skipped: intrinsic-height native images lack reserved bounds before the source loads; adding dimensions/aspect-ratio would change existing markup/layout behavior. |
| ShelfLabelsHeroSection backgrounds | Skipped: already-blurred decorative backgrounds behind the video composition. |
| SectionGradientBackground, TechnologySection Pictures | Skipped: decorative background/mobile video-replacement artwork. |
| DigitalSignageDashboardSection teaser image | Skipped: custom animated video handoff; video and poster behavior left intact. |
| ClientLogoCell, TechnologyCard, ShelfLabelsProductOverviewSection texture swatches | Skipped: logos and tiny UI assets. |
| CSS backgrounds, all videos/posters, canvas/WebGL, SVGs, backup/old components | Unchanged. No new runtime image creation was added. |

## Verification

- Astro build: 58 pages, successful. The existing >500 kB chunk warning remains.
- Astro check: zero errors, zero warnings; existing hints remain.
- Compared all 1,380 original img/source/video elements against pre-edit build HTML: attributes identical, including classes, styles, dimensions, srcset/sizes, loading/decoding and priorities.
- 284 rendered proxy instances use 32 distinct generated WebP assets; each verified as 32 pixels wide with Sharp. Smaller sources are capped by the component.
- Browser geometry comparison with and without the enhancement at 1440px and 390px, dark and light themes, on home, digital signage, shelf labels, blog list, article, Macedonian blog list, and news list.
- Delayed full-image requests verified visible proxies, matching bounds, native offscreen lazy loading, and removal after successful loading. Repeated lifecycle initialization and actual full-page navigation checked.
- Local slow-loading screenshot: storage/progressive-qa/loading-desktop.png.
