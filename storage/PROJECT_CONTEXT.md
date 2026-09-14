# BlackBox Website Project Context

Updated: 2026-08-16

## Project

- Astro static website for BlackBox Solutions.
- English and Macedonian locales.
- Dark and light themes; dark is the primary visual mode.
- Main priorities: fast static HTML, plain CSS, reusable Astro components, minimal JavaScript.
- Do not scan or use `reference/` unless a task explicitly asks for it.

## Current Design Direction

- Premium, minimal technology-company UI.
- High-contrast black/white base with blue brand accents.
- No drop shadows as a design default.
- Use existing tokens from `src/styles/tokens.css`.
- Shared buttons use `.btn` and `ArrowButton.astro`.
- CTA arrows share movement rules in `src/styles/utilities.css`.
- Buttons preserve fixed geometry, nowrap text, and fixed-size arrows.

## Shared Components

- `src/components/molecules/Navbar.astro`: responsive Navbar, desktop dropdown, mobile burger menu.
- `src/components/molecules/Footer.astro`: grid-based faux-table footer with collapsed 1px gap borders.
- `src/components/atoms/PrivacyConsent.astro`: checked-by-default consent checkbox; synchronizes form submit disabled states.
- `src/components/atoms/PrivacyNotice.astro`: localized form privacy consent wrapper.
- `src/components/atoms/SubscribeField.astro`: newsletter field with optional consent props.
- `src/components/atoms/FileUpload.astro`: shared attachment control used by Contact and both Demo forms.
- `src/components/atoms/Checkmark.astro`: shared checkmark visual with size/stroke/class/style overrides.
- Cookie system: `src/components/cookies/`, `src/scripts/cookie-consent.ts`, `src/config/cookies.ts`, `src/styles/cookies.css`.

## Completed UX Work

### Forms

- Contact, compact Demo, and full Demo forms have file upload controls.
- Consent is checked by default.
- Unchecking consent disables all submit buttons in that form and applies a visible disabled state.
- Newsletter forms use Privacy Policy consent and `Subscribe` copy.

### Footer

- Footer CTA and newsletter hierarchy is complete.
- Book a Demo is the primary CTA linking to `/book-a-free-demo/`.
- Subscribe is secondary.
- Legal ordering: Privacy Policy, Terms of Use, Cookie Policy, Cookie Preferences.
- Footer includes localized `All rights reserved.` text.
- Footer uses a grid-area layout and collapsed-border illusion: border-colored background, 1px gaps, 1px outer padding, cell surfaces above it.
- Responsive footer breakpoints currently include approximately `1150px`, `900px`, `586px`, `443px`, `260px`, and `180px` behavior.
- At ultra-narrow widths, footer cell horizontal padding is 5px, main footer container padding can reach 0, and aggressive wrapping protects against overflow.

### Cookie UX

- Cookie Preferences opens/closes as one panel via Manage Preferences or the close chevron.
- Details table is always visible in the open preferences state.
- Mobile locks page scroll while the preferences panel is open.
- Mobile preferences panel is the only scrollable surface.
- Mobile header/close control is sticky.
- Mobile action buttons use responsive grid areas and remain visible with safe bottom padding.
- Cookie switches have rounded tracks, hover indication, ON/OFF labels, and muted-but-blue Necessary state.
- Cookie table rows update active/inactive text tones.

### Navbar

- Burger breakpoint is approximately `980px`.
- Desktop controls remain outside the burger until approximately `580px`.
- At `580px` and below, language/theme and Book a Demo move inside the menu controls section.
- At very narrow widths the Demo CTA becomes a full-width second row.
- Mobile Services is a static SERVICES heading with links in a bordered card; desktop Services dropdown remains unchanged.
- Mobile menu has Services and Company grouped as two responsive columns, with Company title and an invisible matching card.
- Above approximately `400px`, the groups are intended to sit side by side; below it they stack.
- Menu controls/CTA remain a separate full-width section below the groups.
- Mobile menu uses a standard `.container` wrapper to limit width and avoid duplicate horizontal padding.
- Navbar logo is an exact raw SVG import from `src/assets/vectors/brand/logo-horizontal.svg`, with fixed `9rem x 2rem` dimensions; the CSS mask implementation was removed.
- Inter, Roboto, and Roboto Mono are self-hosted from `public/fonts`; only the main Roboto body font is preloaded in `BaseLayout.astro`.

## Responsive Caveats

- Always use the browser to test Navbar and Footer at the target widths because the integrated browser may report a CSS viewport different from the requested device width.
- Avoid duplicate selectors and breakpoint overrides; base grid-area assignments should remain centralized.
- When adding wrappers around Navbar content, desktop wrappers should usually use `display: contents` so desktop navigation remains unchanged.
- When mobile controls are moved inside the menu, watch CSS specificity: `.navbar__nav > ...` rules can override simpler class selectors.
- Preserve fixed button/icon geometry except at explicitly requested ultra-narrow breakpoints.

## Validation

- Preferred production check: `npm run build`.
- Run focused diagnostics with the editor error checker after edits.
- Browser checks should measure `document.documentElement.scrollWidth` against `clientWidth` for overflow-sensitive responsive work.
- The dev server may already be running at `http://localhost:4321/`; AGENTS.md specifies background-mode Astro commands.

## Native View Transitions

- Native cross-document View Transitions are enabled in `src/styles/global.css` with `@view-transition { navigation: auto; }`.
- `main#main-content` uses a fast blur/fade/very-subtle-scale transition; Navbar, Footer, and Cookie Consent are named static chrome surfaces.
- Navbar active links use the shared `active-nav-indicator` identity so the blue underline can move between current links; Services is covered for service routes.
- Editorial images use entry-based shared names in `src/components/blog/BlogCard.astro` and `src/layouts/BlogPostLayout.astro` for News/Blog card-to-detail morphing.
- Reduced-motion disables View Transition animations.

## Next Phase

- Continue global project changes from the native transition foundation above.
- Do not delete existing features while refactoring; ask before removing behavior or content.
