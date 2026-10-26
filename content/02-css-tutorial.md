---
title: "CSS Tutorial: Beginner to Advanced"
description: "Learn CSS from beginner to advanced with selectors, the cascade, box model, layout, Flexbox, Grid, responsive design, animations, accessibility,  and interview questions."
slug: "css-tutorial"
date: "2026-10-23"
author: "Yogesh"
image: "/images/css.png"
category: "Web Development"
---

# CSS Tutorial: Beginner to Advanced

CSS (Cascading Style Sheets) controls how HTML content looks and how it is arranged on a page. This guide moves from the fundamentals to responsive layouts, animations, maintainable styling, and practical projects.

## Table of Contents

1. What CSS is
2. Ways to add CSS
3. Selectors
4. Cascade, specificity, and inheritance
5. Colors, units, and values
6. The box model
7. Display and visibility
8. Positioning and stacking
9. Typography and text
10. Backgrounds, borders, and shadows
11. Flexbox
12. CSS Grid
13. Responsive design
14. Pseudo-classes and pseudo-elements
15. CSS custom properties
16. Transforms, transitions, and animations
17. Forms and accessibility
18. Maintainable CSS and performance
19. Practice projects
20. Interview questions and answers

## 1. What Is CSS?

CSS stands for **Cascading Style Sheets**. HTML describes the structure and meaning of content; CSS describes its presentation.

CSS can control:
- Colors, fonts, spacing, and borders
- Layouts, alignment, and page structure
- Responsive behavior on phones, tablets, and desktops
- Hover and focus states, transitions, and animations

A CSS rule has a selector and a declaration block:

```css
h1 {
  color: #2563eb;
  font-size: 2rem;
}
```

- `h1` is the selector.
- `color` and `font-size` are properties.
- `#2563eb` and `2rem` are values.

## 2. Ways to Add CSS

### External stylesheet — recommended for most projects

HTML:

```html
<link rel="stylesheet" href="/css/style.css" />
```

CSS in `style.css`:

```css
body {
  font-family: Arial, sans-serif;
  color: #222;
}
```

External stylesheets are reusable and easier to maintain.

### Internal stylesheet

```html
<style>
  p {
    line-height: 1.6;
  }
</style>
```

Useful for small demonstrations, but avoid duplicating large styles across pages.

### Inline styles

```html
<p style="color: crimson;">Hello world</p>
```

Inline styles can be useful for quick experiments, but they are harder to maintain and override. Prefer classes for normal application styling.

## 3. CSS Selectors

Selectors choose which HTML elements a rule affects.

```css
/* Element selector */
p {
  color: #374151;
}

/* Class selector */
.card {
  padding: 1rem;
}

/* ID selector */
#main-title {
  color: navy;
}

/* Universal selector */
* {
  box-sizing: border-box;
}

/* Group selector */
h1,
h2,
h3 {
  line-height: 1.2;
}
```

### Combining selectors

```css
/* A paragraph inside a card */
.card p {
  margin-block: 0.5rem;
}

/* Only direct child paragraphs */
.card > p {
  color: #4b5563;
}

/* Adjacent sibling */
h2 + p {
  margin-top: 0;
}

/* General sibling */
h2 ~ p {
  max-width: 65ch;
}

/* Attribute selector */
input[type="email"] {
  width: 100%;
}
```

Use class selectors for reusable component styling. Avoid overly long selectors that depend on deep HTML structure.

## 4. Cascade, Specificity, and Inheritance

When multiple declarations target the same property, the browser resolves them through the cascade. Origin, importance, cascade layers, specificity, and source order can all matter.

A simplified specificity comparison is:

1. Inline style declarations (with important caveats)
2. ID selectors
3. Class, attribute, and pseudo-class selectors
4. Element and pseudo-element selectors

For example:

```css
p {
  color: black;
}

.notice {
  color: darkorange;
}

#warning {
  color: firebrick;
}
```

For an element matching all three selectors, `#warning` normally wins because its selector has greater specificity.

### Inheritance

Some properties, such as `color` and `font-family`, are inherited by child elements. Others, such as `margin` and `border`, generally are not.

```css
body {
  color: #1f2937;
  font-family: system-ui, sans-serif;
}
```

### Avoid overusing `!important`

```css
/* Usually avoid this */
.button {
  color: white !important;
}
```

`!important` can make later changes difficult. Fix the selector or cascade structure when possible.

## 5. Colors, Units, and Values

### Color formats

```css
.example {
  color: red;
  background: #f3f4f6;
  border-color: rgb(37 99 235);
  box-shadow: 0 0 0 3px rgb(37 99 235 / 20%);
}
```

CSS supports named colors, hexadecimal, RGB/RGBA-style syntax, HSL/HSLA-style syntax, and modern color spaces.

### Common units

- `px`: CSS pixels; useful for fine details and borders.
- `%`: relative to a relevant containing dimension.
- `em`: relative to the current element's font size for many properties.
- `rem`: relative to the root element's font size.
- `vw` / `vh`: viewport width / height units.
- `dvh`: dynamic viewport height, useful for mobile browser UI changes.
- `fr`: a fraction of available space in CSS Grid.
- `ch`: approximately the width of the “0” glyph; useful for readable line lengths.

```css
.page-title {
  font-size: clamp(2rem, 5vw, 4rem);
}

.content {
  width: min(100% - 2rem, 70rem);
  margin-inline: auto;
}
```

`clamp(minimum, preferred, maximum)` allows a value to scale while staying within limits.

## 6. The CSS Box Model

Every element is laid out as a box made up of content, padding, border, and margin.

```css
.card {
  width: 300px;
  padding: 20px;
  border: 2px solid #d1d5db;
  margin: 16px;
}
```

With the default `content-box`, the declared width applies to the content alone. Padding and border add to the rendered width.

A common global reset is:

```css
*,
*::before,
*::after {
  box-sizing: border-box;
}
```

With `border-box`, the declared width includes content, padding, and border. This generally makes sizing easier to reason about.

Useful logical spacing properties include `margin-inline`, `padding-block`, and `border-block`. They adapt better to different writing directions than always using left/right or top/bottom properties.

## 7. Display and Visibility

### Common display values

```css
.block { display: block; }
.inline { display: inline; }
.inline-block { display: inline-block; }
.flex { display: flex; }
.grid { display: grid; }
.hidden { display: none; }
```

- `block`: starts on a new line and usually occupies the available inline space.
- `inline`: flows with text; width and height do not behave like normal block sizing.
- `inline-block`: flows inline while supporting box dimensions.
- `flex` and `grid`: create layout contexts for children.
- `none`: removes the element from layout and normally from the accessibility tree.

`visibility: hidden` hides an element but preserves its layout space. `opacity: 0` makes it transparent but does not by itself prevent interaction or keyboard focus.

## 8. Positioning and Stacking

```css
.relative {
  position: relative;
}

.badge {
  position: absolute;
  top: 0.5rem;
  right: 0.5rem;
}

.sticky-header {
  position: sticky;
  top: 0;
}

.dialog-backdrop {
  position: fixed;
  inset: 0;
}
```

- `static`: normal document flow; default.
- `relative`: remains in flow but can be visually offset; often establishes an anchor for absolutely positioned descendants.
- `absolute`: removed from normal flow and positioned relative to a containing block.
- `fixed`: positioned relative to the viewport in common cases.
- `sticky`: behaves like normal flow until a threshold is reached, then sticks within its scrolling context.

### `z-index`

`z-index` controls stacking within stacking contexts. A larger number does not always place an element above every other element because stacking contexts can isolate descendants. Properties such as transforms, opacity below `1`, and some positioning configurations can create stacking contexts.

## 9. Typography and Text

```css
body {
  font-family: system-ui, -apple-system, "Segoe UI", sans-serif;
  font-size: 1rem;
  line-height: 1.6;
}

h1 {
  font-size: clamp(2rem, 4vw, 3.5rem);
  line-height: 1.1;
  letter-spacing: -0.03em;
}

.article {
  max-width: 70ch;
  text-wrap: pretty;
}
```

Useful properties:
- `font-family`, `font-size`, `font-weight`
- `line-height`, `letter-spacing`, `word-spacing`
- `text-align`, `text-decoration`, `text-transform`
- `white-space`, `overflow-wrap`, `word-break`
- `text-overflow`

To truncate a single line:

```css
.single-line {
  overflow: hidden;
  white-space: nowrap;
  text-overflow: ellipsis;
}
```

For long words or URLs, `overflow-wrap: anywhere` can prevent them from overflowing a narrow container.

## 10. Backgrounds, Borders, and Shadows

```css
.hero {
  background-color: #eff6ff;
  background-image: linear-gradient(135deg, #eff6ff, #dbeafe);
  border: 1px solid #bfdbfe;
  border-radius: 1rem;
  box-shadow: 0 12px 30px rgb(15 23 42 / 10%);
}
```

Useful properties include `background-size`, `background-position`, `background-repeat`, `border-radius`, `outline`, and `box-shadow`.

Use `outline` or `box-shadow` carefully for focus indicators; never remove keyboard focus styling without providing a clear replacement.

## 11. Flexbox

Flexbox is designed primarily for arranging items along one dimension: a row or a column.

```html
<nav class="nav">
  <a href="/">Home</a>
  <a href="/blog">Blog</a>
  <a href="/about">About</a>
</nav>
```

```css
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 1rem;
  flex-wrap: wrap;
}
```

Important container properties:
- `flex-direction`: `row`, `row-reverse`, `column`, `column-reverse`
- `justify-content`: alignment along the main axis
- `align-items`: alignment along the cross axis
- `align-content`: spacing between multiple flex lines
- `flex-wrap`: whether items can wrap
- `gap`: space between items

Important item properties:
- `flex-grow`: ability to grow
- `flex-shrink`: ability to shrink
- `flex-basis`: initial main-size basis
- `align-self`: individual cross-axis alignment
- `order`: visual order (use carefully because it can differ from reading order)

```css
.layout {
  display: flex;
  gap: 1.5rem;
}

.sidebar {
  flex: 0 0 16rem;
}

.main {
  flex: 1;
  min-width: 0;
}
```

Use Flexbox for navigation bars, toolbars, button groups, and simple one-dimensional layouts.

## 12. CSS Grid

Grid is designed for two-dimensional layouts with rows and columns.

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(3, minmax(0, 1fr));
  gap: 1.5rem;
}
```

Responsive cards without a fixed number of columns:

```css
.card-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(min(100%, 16rem), 1fr));
  gap: 1rem;
}
```

Useful Grid concepts:
- `grid-template-columns` and `grid-template-rows`
- `gap`, `row-gap`, and `column-gap`
- `minmax()`, `repeat()`, `auto-fit`, and `auto-fill`
- `grid-column` and `grid-row`
- `grid-template-areas`

```css
.page {
  display: grid;
  grid-template-columns: 16rem minmax(0, 1fr);
  grid-template-areas: "sidebar content";
  gap: 2rem;
}

.sidebar { grid-area: sidebar; }
.content { grid-area: content; }

@media (max-width: 48rem) {
  .page {
    grid-template-columns: 1fr;
    grid-template-areas:
      "content"
      "sidebar";
  }
}
```

Choose Grid when both rows and columns matter; choose Flexbox when the layout is mainly along one axis. They can be combined.

## 13. Responsive Design

Responsive design lets a page adapt to available space and user needs.

### Add the viewport meta tag

```html
<meta name="viewport" content="width=device-width, initial-scale=1" />
```

### Start mobile-first

```css
.container {
  width: min(100% - 2rem, 72rem);
  margin-inline: auto;
}

.card-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 1rem;
}

@media (min-width: 40rem) {
  .card-grid {
    grid-template-columns: repeat(2, minmax(0, 1fr));
  }
}

@media (min-width: 64rem) {
  .card-grid {
    grid-template-columns: repeat(3, minmax(0, 1fr));
  }
}
```

Breakpoints should be chosen when the content needs them, not only to match a particular device model.

### Responsive images

```css
img,
picture,
video {
  max-width: 100%;
}

img {
  height: auto;
}
```

For a fixed image frame, `object-fit: cover` can crop the image while preserving its aspect ratio.

### Test responsiveness

- Check narrow and wide viewports.
- Test long headings, large text, and translated content.
- Ensure there is no unwanted horizontal scrolling.
- Test keyboard navigation and touch targets.
- Prefer flexible widths over fixed pixel widths for major containers.

## 14. Pseudo-Classes and Pseudo-Elements

Pseudo-classes select an element in a state or relationship:

```css
a:hover { text-decoration: underline; }
button:focus-visible { outline: 3px solid royalblue; }
input:disabled { opacity: 0.6; }
li:first-child { font-weight: 700; }
tr:nth-child(even) { background: #f9fafb; }
input:checked { accent-color: #2563eb; }
```

Pseudo-elements style a specific part or generated content:

```css
.required::after {
  content: " *";
  color: crimson;
}

blockquote::before {
  content: "“";
  font-size: 2rem;
}
```

Do not use generated content as the only place for essential information, and do not use `::before` or `::after` as substitutes for meaningful HTML content.

## 15. CSS Custom Properties

Custom properties (CSS variables) help share design values.

```css
:root {
  --color-primary: #2563eb;
  --color-text: #1f2937;
  --color-surface: #ffffff;
  --radius-card: 1rem;
  --space-card: 1.25rem;
}

.card {
  color: var(--color-text);
  background: var(--color-surface);
  border-radius: var(--radius-card);
  padding: var(--space-card);
}

.button {
  background: var(--color-primary);
}
```

Provide a fallback when useful:

```css
.title {
  color: var(--heading-color, #111827);
}
```

Variables can be overridden in a subtree or theme:

```css
[data-theme="dark"] {
  --color-text: #f9fafb;
  --color-surface: #111827;
}
```

## 16. Transforms, Transitions, and Animations

### Transform

```css
.card:hover {
  transform: translateY(-4px);
}
```

Common functions include `translate()`, `rotate()`, `scale()`, and `skew()`.

### Transition

```css
.button {
  background-color: #2563eb;
  transform: translateY(0);
  transition: background-color 180ms ease, transform 180ms ease;
}

.button:hover {
  background-color: #1d4ed8;
  transform: translateY(-2px);
}
```

Transitions animate changes between states. Prefer animating `transform` and `opacity` for many UI effects rather than repeatedly animating layout-heavy properties.

### Keyframe animation

```css
@keyframes fade-in {
  from {
    opacity: 0;
    transform: translateY(8px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.fade-in {
  animation: fade-in 400ms ease both;
}
```

Respect users who prefer reduced motion:

```css
@media (prefers-reduced-motion: reduce) {
  *,
  *::before,
  *::after {
    scroll-behavior: auto !important;
    animation-duration: 0.01ms !important;
    animation-iteration-count: 1 !important;
    transition-duration: 0.01ms !important;
  }
}
```

For production code, apply reduced-motion overrides thoughtfully so they do not accidentally interfere with essential UI behavior.

## 17. Forms and Accessibility

```css
input,
textarea,
select,
button {
  font: inherit;
}

.field {
  display: grid;
  gap: 0.4rem;
}

input,
textarea,
select {
  width: 100%;
  padding: 0.7rem 0.8rem;
  border: 1px solid #9ca3af;
  border-radius: 0.5rem;
}

:focus-visible {
  outline: 3px solid #2563eb;
  outline-offset: 2px;
}
```

Accessibility essentials:
- Use semantic HTML elements first.
- Associate each form control with a visible `<label>`.
- Make all interactive elements keyboard-operable.
- Keep focus indicators visible.
- Ensure text and controls have sufficient contrast.
- Do not communicate status using color alone.
- Use `:focus-visible` to provide clear keyboard focus styling.
- Check layouts at high zoom and with larger text.

CSS cannot make an inaccessible HTML structure fully accessible by itself.

## 18. Maintainable CSS and Performance

### Use meaningful class names

```css
.blog-card { /* component wrapper */ }
.blog-card__title { /* title inside the card */ }
.blog-card--featured { /* featured variant */ }
```

This BEM-style naming pattern is one option, not a requirement.

### Organize styles

A practical structure might be:

```text
styles/
  reset.css
  tokens.css
  global.css
  components/
    button.css
    card.css
    navbar.css
  pages/
    blog.css
```

For small projects, one stylesheet may be enough. Split files when it improves clarity.

### Good practices

- Reuse design tokens with custom properties.
- Keep selectors understandable.
- Remove unused rules.
- Avoid unnecessary `!important`.
- Avoid huge fixed widths that break on mobile.
- Use browser developer tools to inspect computed styles and layout.
- Test in more than one browser when practical.
- Prefer CSS layout systems over floats for modern page layouts.
- Use `content-visibility` only when you understand its rendering and accessibility implications.
- Avoid adding animations that distract users or cause discomfort.

## 19. Practice Projects

### Project 1: Profile Card

Requirements:
- Avatar, name, role, and short biography
- Rounded corners and subtle shadow
- Responsive width
- Visible keyboard focus for links and buttons

### Project 2: Responsive Navbar

Requirements:
- Logo and navigation links
- Flexible spacing with Flexbox
- A mobile layout that does not overflow
- Keyboard-friendly links and clear focus styles

### Project 3: Blog Card Grid

Requirements:
- Use CSS Grid for cards
- Responsive column count
- Consistent spacing and typography
- Images that preserve aspect ratio
- A hover effect that also respects reduced-motion preferences

### Project 4: Dashboard Layout

Requirements:
- Sidebar and main content area
- Grid for the overall page
- Flexbox for toolbars and small component rows
- A single-column layout on narrow screens

### Project 5: Landing Page

Requirements:
- Hero section with responsive typography
- Feature cards and call-to-action
- Reusable CSS variables for colors and spacing
- Accessible form controls and focus indicators
- Responsive layout tested at multiple widths

## 20. CSS Interview Questions and Answers

### Beginner

**1. What is CSS?**  
CSS is a stylesheet language used to control the presentation and layout of HTML documents.

**2. What are the three ways to add CSS?**  
External stylesheet, internal `<style>` block, and inline `style` attribute.

**3. What is a selector?**  
A selector identifies the HTML elements to which a CSS rule applies.

**4. What is the difference between class and ID selectors?**  
A class (`.card`) is reusable across elements; an ID (`#header`) is intended to identify one unique element in a document.

**5. What is the box model?**  
The box model consists of content, padding, border, and margin.

**6. What does `box-sizing: border-box` do?**  
It includes padding and border within the declared width and height.

**7. What is the difference between `display: none` and `visibility: hidden`?**  
`display: none` removes the element from layout; `visibility: hidden` preserves its layout space.

**8. What is inheritance?**  
Inheritance is when some CSS properties, such as `color`, pass from a parent to descendants unless overridden.

**9. What is specificity?**  
Specificity is one of the criteria the cascade uses to resolve competing declarations.

**10. What does `!important` do?**  
It gives a declaration increased priority within the cascade, but it should be used sparingly.

### Intermediate

**11. What is the difference between `px`, `em`, and `rem`?**  
`px` is a CSS pixel; `em` is relative to the relevant element's font size; `rem` is relative to the root element's font size.

**12. What is the difference between Flexbox and Grid?**  
Flexbox is primarily one-dimensional; Grid is designed for two-dimensional row-and-column layouts.

**13. What is the difference between relative and absolute positioning?**  
A relatively positioned element remains in normal flow; an absolutely positioned element is removed from normal flow and positioned against its containing block.

**14. What is `z-index`?**  
It controls stacking order within the relevant stacking context.

**15. What is a media query?**  
A media query applies styles conditionally, for example based on viewport width or user preferences.

**16. What is responsive design?**  
Responsive design adapts a layout to different viewport sizes and user needs.

**17. What is the difference between a pseudo-class and a pseudo-element?**  
A pseudo-class represents a state or relationship, such as `:hover`; a pseudo-element targets a part of an element or generated content, such as `::before`.

**18. What is `position: sticky`?**  
It allows an element to remain in normal flow and stick to a threshold while scrolling within its scrolling context.

**19. What is `minmax()` in Grid?**  
It defines a minimum and maximum size for a grid track.

**20. What does `flex: 1` commonly mean?**  
It commonly lets an item grow to use available space; the shorthand expands to flex-grow, flex-shrink, and flex-basis values, so inspect the exact computed values when precision matters.

### Advanced

**21. What is the cascade?**  
The cascade is the algorithm browsers use to resolve competing declarations using origin, importance, layers, specificity, and source order, among other factors.

**22. What is a stacking context?**  
It is a self-contained stacking region that determines how descendant elements are layered relative to each other.

**23. What are CSS custom properties?**  
They are reusable properties declared with names such as `--primary-color` and referenced with `var()`.

**24. What is mobile-first CSS?**  
It means writing baseline styles for smaller viewports and adding enhancements for larger viewports with media queries.

**25. Why use `min-width: 0` on a flex or grid child?**  
It can allow the child to shrink below its automatic minimum size so long content does not force overflow.

**26. What is the difference between `auto-fit` and `auto-fill` in Grid?**  
Both repeat tracks to fit available space; `auto-fit` collapses empty repeated tracks, while `auto-fill` preserves them.

**27. Why prefer animating `transform` and `opacity` for many effects?**  
They often avoid repeated layout recalculation and can be more efficient than animating properties that change layout, though actual performance depends on the browser and page.

**28. What is `clamp()`?**  
It returns a value constrained between a minimum, preferred value, and maximum.

**29. How do you support reduced motion?**  
Use the `prefers-reduced-motion: reduce` media query to reduce or remove nonessential motion.

**30. How can you debug a CSS issue?**  
Inspect the element in browser developer tools, review computed styles and the box model, identify overridden rules, and test layout at different viewport sizes.

**31. What is the difference between `opacity: 0` and `display: none`?**  
Opacity makes an element transparent but leaves it in layout and potentially interactive; `display: none` removes it from layout.

**32. What does `object-fit: cover` do?**  
It fills the replaced element's box while preserving aspect ratio, cropping excess content when necessary.

**33. What are logical properties?**  
Properties such as `margin-inline` and `padding-block` express spacing relative to writing direction rather than fixed physical sides.

**34. Why should you avoid relying on color alone?**  
Some users cannot distinguish certain colors, so status and meaning should also use text, icons, or other visual cues.

**35. What is the difference between `width: 100%` and `width: auto`?**  
`100%` requests the full containing block's available width under the relevant sizing rules; `auto` lets the layout algorithm determine the used width.

## Final Learning Roadmap

1. Learn selectors, colors, units, and the box model.
2. Practice spacing, typography, borders, and backgrounds.
3. Build layouts with Flexbox and Grid.
4. Add responsive breakpoints and test small screens.
5. Learn pseudo-classes, variables, and animation.
6. Build the five projects in this guide.
7. Recreate real website sections from screenshots for practice.
8. Inspect and debug your own pages using browser developer tools.
9. Learn a component styling approach used by your chosen framework.
10. Keep accessibility and maintainability in mind from the beginning.

CSS becomes easier through practice. Build small sections, test them at different widths, and combine layout techniques instead of memorizing every property.
