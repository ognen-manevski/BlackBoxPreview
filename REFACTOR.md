# Astro Project Architecture and CSS Refactor

Refactor this Astro project before adding new features.

The project currently contains:

* duplicated and copied CSS
* unused styles
* inconsistent typography
* custom headline and paragraph sizes that bypass the design system
* repeated gradients, spacing values, widths, heights, and breakpoints
* similar UI elements implemented separately
* page content written directly inside components
* components that are too large or poorly organized
* inconsistent naming and folder structure
* styles that do not match the existing design tokens

## Primary goal

Reorganize the project into a maintainable, reusable, and scalable Astro architecture without unnecessarily changing the current visual design or functionality.

Do not redesign the website.

Preserve the current appearance unless a style clearly conflicts with the existing design system or is obviously incorrect.

---

## Before editing

First inspect the entire project and create a brief refactoring plan.

Identify:

1. duplicated components
2. repeated UI patterns
3. duplicated CSS declarations
4. unused CSS
5. hardcoded typography, gradients, spacing, colors, widths, heights, and breakpoints
6. content that should be moved into `/src/data`
7. components that should be split into smaller components
8. components that can be merged
9. inconsistent class naming
10. files that appear unused
11. page-specific styles that should become shared styles
12. shared styles that should remain local instead
13. existing design tokens that are not being reused

Do not immediately rewrite the entire project.

Refactor in controlled, reviewable steps.

---

## Refactoring priorities

Use this order:

1. design tokens
2. typography
3. repeated CSS
4. shared UI components
5. component organization
6. data extraction
7. translation readiness
8. unused code removal
9. final consistency review

---

## Design tokens

Use the existing global CSS variables as the source of truth.

Replace hardcoded values with existing tokens whenever an appropriate token already exists.

This includes:

* colors
* text colors
* background colors
* borders
* border radii
* shadows
* gradients
* font families
* font sizes
* font weights
* line heights
* letter spacing
* spacing
* container widths
* section spacing
* breakpoints
* transitions
* animation durations
* z-index values

Do not create a new token for every individual value.

Create a new token only when:

* the value is reused
* the value represents a meaningful design-system decision
* no appropriate existing token exists

Avoid component-specific variables in the global token file unless they are reused across multiple components.

Prefer semantic variables such as:

```css
--color-text-primary
--color-text-muted
--color-surface-primary
--color-border-subtle
--gradient-brand
--space-section
--container-width
--radius-card
```

Avoid vague or numbered variables without meaning.

---

## Typography

Remove arbitrary headline and paragraph sizes.

All standard text should use a small, intentional typography scale.

Create or reuse consistent styles for:

* display heading
* page heading
* section heading
* card heading
* body large
* body
* body small
* label
* caption

Use semantic utility classes or shared component styles where appropriate.

Examples:

```css
.text-display
.text-page-title
.text-section-title
.text-card-title
.text-body-lg
.text-body
.text-body-sm
.text-label
.text-caption
```

Do not introduce new font sizes inside individual components unless the design genuinely requires a unique treatment.

Use fluid sizing with `clamp()` only where it improves responsiveness and remains part of the design system.

Do not use viewport units for ordinary paragraph text.

Maintain accessible line heights and readable line lengths.

---

## CSS cleanup

Find repeated CSS and consolidate it.

Remove:

* unused selectors
* obsolete styles
* duplicated declarations
* overridden rules that no longer have an effect
* old experiments
* commented-out CSS that is no longer needed
* unnecessary specificity
* repeated media-query declarations
* repeated transition declarations
* repeated gradient definitions
* magic numbers that should use tokens

Do not remove styles based only on a text search if they may be applied dynamically.

Check:

* Astro conditional classes
* JavaScript-applied classes
* `data-*` selectors
* state classes
* generated content
* theme selectors
* CMS or form classes
* animation classes

Prefer deleting code only when its lack of use is reasonably verified.

---

## Responsive CSS

Keep responsive styles next to the component or element they modify.

Do not collect all media queries at the bottom of a large stylesheet.

Prefer:

```css
.component {
  /* base styles */

  @media (...) {
    /* responsive styles for this component */
  }
}
```

Follow the syntax already supported by the project.

Use shared breakpoint variables or custom media definitions when available.

Do not introduce slightly different breakpoints across components without a reason.

---

## Component architecture

Review repeated UI patterns and convert them into reusable Astro components.

Use an Atomic Design-inspired structure, but do not over-engineer it.

Suggested structure:

```text
src/
  components/
    atoms/
    molecules/
    organisms/
    sections/
    layout/
    icons/
```

Use these categories pragmatically:

### Atoms

Small reusable UI primitives:

* Button
* Icon
* Badge
* Label
* Eyebrow
* Heading
* TextLink
* Logo
* Divider
* FormField

### Molecules

Small groups of atoms:

* IconText
* StatCard
* ServiceCard
* FeatureItem
* CTAGroup
* ContactField
* AccordionItem
* MediaCard

### Organisms

Larger reusable interface groups:

* Header
* Footer
* Navigation
* ContactForm
* CardGrid
* StatsGrid
* FAQ
* ServiceNavigation
* CTASection

### Sections

Page-level reusable sections:

* HeroSection
* BenefitsSection
* DemoSection
* DeviceSection
* ServicesSection
* ContactSection

Do not create a component for a wrapper that is used only once and has no meaningful logic or reusable styling.

Do not split components so aggressively that understanding the page becomes difficult.

A component should generally be extracted when at least one of these is true:

* it is reused
* it represents a distinct UI pattern
* it contains meaningful behavior
* it has a clear API
* it significantly simplifies a large parent component

---

## Component APIs

Use typed Astro props.

Define clear prop interfaces.

Example:

```astro
---
interface Props {
  title: string;
  description?: string;
  href?: string;
  icon?: string;
  variant?: "default" | "featured";
}

const {
  title,
  description,
  href,
  icon,
  variant = "default",
} = Astro.props;
---
```

Avoid passing a large number of loosely related boolean props.

Prefer variants when multiple visual states belong to the same component.

Avoid APIs such as:

```astro
<Component
  isLarge
  isDark
  hasBorder
  hasGradient
  useCompactSpacing
/>
```

Prefer:

```astro
<Component
  variant="featured"
  theme="dark"
  spacing="compact"
/>
```

Use slots when content structure needs flexibility.

Use props when the content has a predictable schema.

---

## Data extraction

Move repeatable content into `/src/data`.

Examples:

* services
* features
* statistics
* navigation links
* contact details
* social links
* FAQs
* testimonials
* device lists
* technology lists
* card content
* page metadata
* footer groups

Suggested structure:

```text
src/
  data/
    navigation.ts
    services.ts
    stats.ts
    contact.ts
    footer.ts
    faqs.ts
```

For page-specific content:

```text
src/
  data/
    pages/
      digital-signage.ts
      shelf-labels.ts
      video-streaming.ts
      software-development.ts
```

Use TypeScript types for data structures.

Example:

```ts
export interface ServiceCardData {
  id: string;
  title: string;
  description: string;
  href: string;
  icon: string;
}
```

Do not move one-off layout markup into data.

Data files should contain content and configuration, not HTML structure.

---

## Translation readiness

Organize textual content so translations can be added without rewriting components.

Do not hardcode repeatable content directly inside shared components.

Use stable keys or language-specific data objects.

A suitable structure may be:

```text
src/
  data/
    i18n/
      en/
        navigation.ts
        common.ts
        services.ts
      mk/
        navigation.ts
        common.ts
        services.ts
```

Or, if more appropriate for the current project:

```ts
export const content = {
  en: {
    title: "...",
    description: "...",
  },
  mk: {
    title: "...",
    description: "...",
  },
};
```

Choose one consistent translation structure.

Do not introduce a full internationalization library unless the project already uses one or it is clearly required.

Components should render provided content without needing language-specific layout duplication.

---

## Styling strategy

Keep component-specific styles scoped inside Astro components when they are used only by that component.

Place truly shared styles in appropriate global files.

Suggested structure:

```text
src/
  styles/
    tokens.css
    reset.css
    typography.css
    utilities.css
    global.css
```

Possible responsibilities:

### `tokens.css`

* colors
* typography tokens
* spacing
* radii
* shadows
* gradients
* breakpoints
* motion values

### `reset.css`

* box sizing
* default margins
* media defaults
* form inheritance

### `typography.css`

* global heading and body defaults
* semantic typography classes

### `utilities.css`

Only intentional, reusable utilities.

Do not recreate Tailwind manually with hundreds of one-purpose classes.

### `global.css`

* body
* page background
* global links
* container
* section defaults
* accessibility helpers

---

## Layout primitives

Create shared layout primitives only when they reduce repeated layout CSS.

Possible examples:

* `Container`
* `Section`
* `Stack`
* `Cluster`
* `Grid`
* `PageShell`

Do not force every layout through a primitive.

Use them for genuinely repeated patterns such as:

```css
.container
.section
.stack
.cluster
.auto-grid
```

Unify repeated container widths, horizontal page padding, and section spacing.

---

## Gradients and decorative styles

Find repeated gradients and move them into tokens or reusable classes.

Do not leave slightly different copies of the same gradient across components.

Separate:

* structural styles
* content styles
* decorative styles

Avoid adding decorative pseudo-elements independently to several components when the same reusable pattern can be used.

Preserve intentional page-specific artwork.

---

## Icons and SVG

Keep reusable SVG icons as Astro components.

Use inline SVG for icons that need:

* `currentColor`
* hover color changes
* animation
* inherited sizing

Use consistent icon props:

```astro
interface Props {
  size?: number | string;
  title?: string;
  class?: string;
}
```

Use `aria-hidden="true"` for decorative icons.

Provide accessible titles for meaningful icons.

Do not duplicate the same inline SVG across files.

---

## Forms

Unify repeated form elements.

Extract reusable components for:

* labels
* text inputs
* textareas
* selects
* error messages
* help text
* required indicators
* submit buttons

Preserve existing form names, IDs, validation behavior, and submission logic.

Do not break backend integrations while refactoring presentation code.

---

## Accessibility

While refactoring, preserve or improve:

* semantic heading order
* label/input associations
* button semantics
* link semantics
* keyboard navigation
* visible focus states
* accessible accordions
* meaningful alt text
* reduced-motion behavior
* sufficient color contrast

Use `<button>` for actions and `<a>` for navigation.

For disclosure or accordion content, prefer native `<details>` and `<summary>` where appropriate.

Do not replace semantic elements with generic `<div>` elements.

---

## Naming

Use consistent naming across files, components, props, classes, and data keys.

Component files:

```text
PascalCase.astro
```

Data and utility files:

```text
camelCase.ts
```

Use consistent BEM-style or component-scoped class naming.

Avoid generic classes such as:

```css
.box
.left
.blue
.item2
.wrapper-new
```

Prefer names that describe responsibility:

```css
.service-card
.service-card__title
.service-card__media
.service-card--featured
```

Do not add BEM nesting where scoped component classes already provide enough clarity.

---

## Large components

Review large Astro files.

Split a file when it contains several independent sections or repeated patterns.

Keep page files focused on:

* importing data
* importing sections
* defining page metadata
* assembling the page

A page should ideally read like:

```astro
<BaseLayout>
  <HeroSection {...hero} />
  <BenefitsSection items={benefits} />
  <StatsSection items={stats} />
  <DemoSection {...demo} />
</BaseLayout>
```

Do not place hundreds of lines of unrelated CSS and markup inside a page file when they belong to reusable sections.

---

## Avoid unnecessary complexity

Do not:

* install a new framework
* introduce React unless interaction genuinely requires it
* add a state-management library
* add Tailwind
* add a CSS-in-JS library
* add a component library
* rewrite working Astro components in another framework
* create abstractions used only once
* rename everything without a clear benefit
* move all styles into one global file
* move all content into one giant data file

Use Astro, TypeScript, semantic HTML, and CSS.

Prefer the simplest maintainable solution.

---

## Preserve behavior

Before changing a component, understand its current behavior.

Preserve:

* responsive behavior
* theme switching
* animations
* transitions
* video behavior
* forms
* links
* routes
* IDs
* anchor navigation
* `data-*` attributes
* JavaScript hooks
* SEO metadata
* structured data
* accessibility states

Do not modify public URLs or route names unless explicitly required.

---

## Verification

After each refactoring group:

1. confirm the project builds
2. check for TypeScript errors
3. check for broken imports
4. check for missing assets
5. check responsive layouts
6. check light and dark themes
7. check animations and interactive states
8. check forms
9. check navigation
10. compare the result visually with the original

Use the existing package manager and project scripts.

Do not change package versions unless necessary.

---

## Output expectations

Work incrementally.

For each refactoring step, explain briefly:

* what was changed
* why it was changed
* which files were affected
* whether any visual difference is expected

When uncertain whether two elements should share a component, preserve the current implementation and flag the opportunity instead of forcing an abstraction.

At the end, provide:

1. the final folder structure
2. a list of new shared components
3. a list of extracted data files
4. a list of removed unused files or styles
5. a list of newly created or updated design tokens
6. remaining inconsistencies that require manual design review
7. any visual changes that were intentionally made
8. any potentially risky areas that should be manually tested

## Important working rule

Do not perform one massive rewrite.

Start by auditing the project, then refactor one logical group at a time while keeping the project buildable throughout the process.
