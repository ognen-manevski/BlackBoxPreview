## Development

When starting the dev server, use background mode:

```
astro dev --background
```

Manage the background server with `astro dev stop`, `astro dev status`, and `astro dev logs`.

## Documentation

Full documentation: https://docs.astro.build

Consult these guides before working on related tasks:

- [Adding pages, dynamic routes, or middleware](https://docs.astro.build/en/guides/routing/)
- [Working with Astro components](https://docs.astro.build/en/basics/astro-components/)
- [Using React, Vue, Svelte, or other framework components](https://docs.astro.build/en/guides/framework-components/)
- [Adding or managing content](https://docs.astro.build/en/guides/content-collections/)
- [Adding styles or using Tailwind](https://docs.astro.build/en/guides/styling/)
- [Supporting multiple languages](https://docs.astro.build/en/guides/internationalization/)


## Notes
- English + Macedonian languages support
- light + dark mode switcher (dark default)


## Project Rules

Use files in `/reference` to build the primary wireframe.

- website baseline, you can reuse content from here:
./reference/Figma/CODEX/docs/website-baseline (temp task: take the css from here)
./reference/Figma/CODEX/CODE/HOME ()

- current website content (screenshots + scraped text to be copied):
./reference/Figma/CODEX/docs/old-website-content
-- task for later: revise or improve the copy



## Main Goal

Fast, simple, mostly static Astro website.

Priorities:

1. Page speed
2. Clean HTML/CSS
3. Reusable components
4. Minimal JavaScript
5. Easy future edits

## Base Rules

* Use plain HTML and CSS first.
* Use Astro components by default.
* Use JavaScript only when required.
* Avoid GSAP unless CSS/HTML cannot solve it.
* Avoid client-side hydration unless interactivity needs it.
* Prefer semantic HTML.
* Use ARIA only when native HTML is not enough.
* Keep markup readable and minimal.
* Do not over-engineer.
* If content/assets are missing, add a clear `TODO` comment.
* Do not invent final content, image paths, or alt text.
* Screenshots may be provided for section generation.

## Component Structure

Use reusable atomic structure:

```text
atoms/
molecules/
sections/
layouts/
```

Guidelines:

* Reuse existing components before creating new ones.
* Keep components small and focused.
* Avoid duplicate markup.
* Avoid duplicate styles.
* Check existing tokens, utilities, and components first.

## CSS Rules

CSS structure:

```text
src/styles/reset.css
src/styles/tokens.css
src/styles/global.css
src/styles/utilities.css
```

Other CSS can live inside Astro components only when needed.

Rules:

* Import CSS globally from the main layout.
* Reuse CSS as much as possible.
* Use preset typography classes for section text (`section-headline`, `section-copy`, `section-label`) instead of section-specific heading/paragraph styles unless explicitly requested.
* Use CSS custom properties from `tokens.css`.
* Add more grey shades from dark to white.
* Dark mode is primary.
* Light mode should be supported.
* Prefer modern CSS over JS.
* Use responsive fluid CSS where practical.
* Use `rem` for font sizes, spacing, layout gaps, radius.
* Use `em` when sizing should depend on the current element.
* Use `px` only for small fixed values like borders.
* Keep `html { font-size: 100%; }`.

### Responsive CSS

- Keep responsive rules with the component they modify.
- Do not create a separate "responsive" section at the bottom of the file.
- Use mobile-first CSS.
- Keep media queries and animations close to the related selector.
- One component = one place for its styles. Avoid scattering styles across multiple files.


## Typography

- Display: Inter
- Body: Roboto
- UI: Roboto
- Mono: Roboto Mono

## Media

* User will provide images/videos in `/assets`.
* If media is missing, leave it unlinked with a `TODO`.
* Add descriptive `alt` text.
* If unsure about `alt`, add `TODO: add accurate alt text`.
* Use lazy loading for below-fold images.
* Optimize images/videos manually when possible.
* Avoid large media where smaller formats work.

## SEO / Head Template

Add required `<head>` metadata with `TODO` comments where final data is missing.

Include:

* `title`
* `description`
* `canonical`
* `robots`
* Open Graph tags
* Twitter card tags
* favicon/icons
* sitemap reference
* theme color
* social preview image
* structured data later

## Accessibility

* Use semantic HTML first.
* All interactive elements must be keyboard accessible.
* Images need useful descriptions or empty alt if decorative.
* Maintain visible focus states.
* Keep heading order logical.
* Avoid clickable `div`s.
* Respect reduced motion.
* Add accessibility settings later if needed.
* WCAG AA minimum.

## Build Approach

* Focus on markup and CSS first.
* Build from screenshots or written section descriptions.
* Keep layout close to the provided references.
* Use placeholder comments where details are missing.
* Keep code clean, minimal, and easy to refactor.
* Keep code clean, minimal, and easy to refactor.

## Agent Workflow Preferences

* For small/iterative UI edits, do not run `npm run build` after every minor change.
* Run build checks only when requested by the user, before handoff of a larger batch, or when changes are likely to affect routing/build output.
* Keep progress replies short during iterative edits; avoid repeating full change summaries after each minor tweak unless requested.
* Share a concise final summary after the requested batch is complete.

## SVGs

- UI icons should be inline Astro components.
- Use `currentColor` for all icon colors.
- Icons should inherit size and color from CSS.
- Reuse icon components whenever possible.
- Store reusable icons in `src/components/icons/`.
- Large illustrations, logos, and decorative SVGs should remain external assets.

## Design Principles

* Modern technology company
* Minimalistic
* Premium
* High contrast
* Black and white base with supporting 
* Do not use drop-shadows

## Reference Folder

`/reference` contains large working files.

- Ignore it unless explicitly instructed.
- Read only the requested file(s).
- Never scan or summarize the entire folder.

## Commands

Install:

```bash
npm install
```

Dev:

```bash
npm run dev
```

Build:

```bash
npm run build
```

Preview:

```bash
npm run preview
```

Add integration only if needed:

```bash
npx astro add react
npx astro add tailwind
```

Avoid adding libraries without clear need.
