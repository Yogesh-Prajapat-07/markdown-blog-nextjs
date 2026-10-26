---
title: " Tailwind CSS Tutorial: Beginner to Advanced "
description: "A practical, beginner-friendly guide to Tailwind CSS covering utility classes, responsive design, layouts, states, customization, Tailwind CSS v4, accessibility, troubleshooting, projects, and interview questions."
slug: "tailwind-css-tutorial"
date: "2026-10-25"
author: "Yogesh"
image: "/images/tailwind-css.png"
category: "Web Development"
---

# Tailwind CSS Complete Guide: Beginner to Advanced

Tailwind CSS is a utility-first CSS framework. Instead of writing a separate CSS class for every component, you compose designs using small utility classes directly in your HTML, JSX, or component templates.

This guide moves from fundamentals to practical patterns. Examples use modern Tailwind CSS syntax where possible. Some setup and configuration details differ between Tailwind CSS v3 and v4, so check which version your project uses before applying installation instructions.

## Table of Contents

- [1. What Is Tailwind CSS?](#1-what-is-tailwind-css)
- [2. Why Use Tailwind CSS?](#2-why-use-tailwind-css)
- [3. How Utility Classes Work](#3-how-utility-classes-work)
- [4. Installation and Setup](#4-installation-and-setup)
- [5. Colors, Spacing, and Sizing](#5-colors-spacing-and-sizing)
- [6. Typography and Text Styling](#6-typography-and-text-styling)
- [7. Borders, Radius, Shadows, and Effects](#7-borders-radius-shadows-and-effects)
- [8. Flexbox Layout](#8-flexbox-layout)
- [9. CSS Grid Layout](#9-css-grid-layout)
- [10. Responsive Design](#10-responsive-design)
- [11. Hover, Focus, and Other States](#11-hover-focus-and-other-states)
- [12. Dark Mode](#12-dark-mode)
- [13. Positioning and Z-Index](#13-positioning-and-z-index)
- [14. Transitions and Animations](#14-transitions-and-animations)
- [15. Custom Styles and Theme Values](#15-custom-styles-and-theme-values)
- [16. Reusable Components in React and Next.js](#16-reusable-components-in-react-and-nextjs)
- [17. Forms and Accessibility](#17-forms-and-accessibility)
- [18. Common UI Patterns](#18-common-ui-patterns)
- [19. Tailwind CSS v3 vs v4](#19-tailwind-css-v3-vs-v4)
- [20. Best Practices](#20-best-practices)
- [21. Common Errors and Troubleshooting](#21-common-errors-and-troubleshooting)
- [22. Practice Projects](#22-practice-projects)
- [23. Interview Questions and Answers](#23-interview-questions-and-answers)
- [24. Quick Reference](#24-quick-reference)

## 1. What Is Tailwind CSS?

Tailwind CSS is a CSS framework built around small, composable utility classes. For example, `p-4` adds padding, `text-lg` changes font size, `font-semibold` changes font weight, and `rounded-lg` rounds corners.

```html
<div class="rounded-xl bg-white p-6 shadow-lg">
  <h2 class="text-xl font-bold text-slate-900">Welcome</h2>
  <p class="mt-2 text-slate-600">Build interfaces with utility classes.</p>
</div>
```

The classes are combined to create a complete design. Tailwind scans your source files for class names and generates the CSS needed for the detected utilities.

### Utility-first does not mean CSS disappears

You still use CSS concepts such as the box model, flexbox, grid, responsive breakpoints, pseudo-classes, and custom properties. Tailwind provides a consistent way to express many of these styles.

## 2. Why Use Tailwind CSS?

**Advantages**

- Build interfaces quickly without inventing class names for every small style.
- Keep component structure and styling close together.
- Use consistent spacing, colors, and typography across pages.
- Design responsively with breakpoint prefixes.
- Style interactive states such as hover, focus, disabled, and dark mode.
- Remove unused generated styles from production output through its source detection approach.

**Trade-offs**

- Long class strings can become difficult to scan.
- Teams need shared conventions to avoid inconsistent designs.
- Dynamically constructing class names can prevent the scanner from detecting the intended utilities.
- Tailwind does not replace accessible HTML, good component architecture, or understanding CSS.

Use Tailwind when utility-based styling fits your project and team. For a small static page, regular CSS may also be perfectly reasonable.

## 3. How Utility Classes Work

Most utilities represent one CSS declaration or a small, predictable group of declarations.

| Class | Typical effect |
|---|---|
| `p-4` | Padding on all sides |
| `mx-auto` | Automatic horizontal margins |
| `flex` | `display: flex` |
| `grid` | `display: grid` |
| `items-center` | Align items on the cross axis |
| `justify-between` | Distribute items with space between |
| `text-center` | Center-align text |
| `font-bold` | Bold font weight |
| `w-full` | Full available width |
| `max-w-xl` | Apply a maximum width |
| `hidden` | Hide the element with `display: none` |

Utilities can be combined:

```html
<button class="rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
  Save changes
</button>
```

### Reading a class list

Read classes in groups: layout, spacing, size, typography, color, border/effects, and states. This makes longer class strings easier to understand.

### Class order and conflicts

Do not assume the last class written in the HTML always wins. CSS cascade, generated stylesheet order, specificity, and important declarations determine the result. Avoid contradictory utilities such as `p-2 p-6`; keep only the intended style.

## 4. Installation and Setup

Choose the setup that matches your framework and Tailwind version. Always follow the current installation guide for your exact toolchain.

### Tailwind CSS v4 with a Vite app

Install the Vite integration:

```bash
npm install tailwindcss @tailwindcss/vite
```

Add the plugin to `vite.config.js`:

```js
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  plugins: [react(), tailwindcss()],
});
```

In your main CSS file, such as `src/index.css`:

```css
@import "tailwindcss";
```

Import that CSS file from your application entry point, for example `src/main.jsx`:

```jsx
import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

ReactDOM.createRoot(document.getElementById("root")).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
```

Start the development server:

```bash
npm run dev
```

### Tailwind CSS v4 with Next.js

Install the packages:

```bash
npm install tailwindcss @tailwindcss/postcss postcss
```

Configure `postcss.config.mjs`:

```js
const config = {
  plugins: {
    "@tailwindcss/postcss": {},
  },
};

export default config;
```

In the global stylesheet, commonly `app/globals.css`:

```css
@import "tailwindcss";
```

Import the stylesheet in the root layout:

```jsx
import "./globals.css";

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

Run:

```bash
npm run dev
```

### Tailwind CSS v3 note

Tailwind v3 uses a different setup, typically including a `tailwind.config.js` file with `content` paths and CSS directives such as:

```css
@tailwind base;
@tailwind components;
@tailwind utilities;
```

Do not mix v3 and v4 setup instructions. Check the installed version with:

```bash
npm ls tailwindcss
```

## 5. Colors, Spacing, and Sizing

### Spacing

Tailwind provides spacing utilities for padding and margin.

```html
<section class="p-6">
  <div class="mb-4">Space below this element</div>
  <div class="mt-8">Space above this element</div>
  <div class="px-4 py-2">Horizontal and vertical padding</div>
</section>
```

Common patterns:

- `p-4`: padding on every side.
- `px-4`: left and right padding.
- `py-4`: top and bottom padding.
- `mt-4`, `mb-4`, `ml-4`, `mr-4`: directional margins.
- `gap-4`: space between flex or grid children.
- `space-y-4`: vertical spacing between direct children; `gap` is often more flexible for layouts.

Spacing values come from the version's default theme or your custom theme. Arbitrary values are also available when needed, for example `mt-[18px]`.

### Width and height

```html
<div class="w-full max-w-3xl">Readable content width</div>
<div class="h-48">Fixed-height element</div>
<div class="min-h-screen">At least viewport height</div>
<div class="size-12">Equal width and height where supported</div>
```

Useful utilities include `w-full`, `w-fit`, `max-w-md`, `min-w-0`, `h-auto`, `min-h-screen`, and `max-h-96`.

### Background and text colors

```html
<div class="bg-slate-100 text-slate-900">Light surface</div>
<div class="bg-slate-900 text-white">Dark surface</div>
<p class="text-blue-700">Colored text</p>
```

Use a consistent palette instead of choosing unrelated shades for every component. Check contrast between text and background, particularly for small text.

## 6. Typography and Text Styling

Typography utilities control font size, weight, line height, letter spacing, alignment, and wrapping.

```html
<article class="max-w-prose">
  <p class="text-sm font-medium uppercase tracking-wide text-blue-700">
    Tutorial
  </p>
  <h1 class="mt-2 text-3xl font-bold leading-tight tracking-tight text-slate-900 md:text-5xl">
    Learn Tailwind CSS
  </h1>
  <p class="mt-4 text-base leading-7 text-slate-600">
    Create responsive interfaces with a consistent design system.
  </p>
</article>
```

Useful utilities:

- Size: `text-sm`, `text-base`, `text-xl`, `text-3xl`.
- Weight: `font-normal`, `font-medium`, `font-semibold`, `font-bold`.
- Line height: `leading-tight`, `leading-normal`, `leading-7`.
- Letter spacing: `tracking-tight`, `tracking-wide`.
- Alignment: `text-left`, `text-center`, `text-right`.
- Wrapping: `break-words`, `whitespace-nowrap`.
- Truncation: `truncate`, `line-clamp-2` where supported by your version/setup.

For long-form articles, prioritize comfortable line length and line height. Do not use very small text for essential information.

## 7. Borders, Radius, Shadows, and Effects

```html
<div class="rounded-2xl border border-slate-200 bg-white p-6 shadow-sm">
  <h2 class="text-lg font-semibold">Project card</h2>
  <p class="mt-2 text-slate-600">A subtle border and shadow create separation.</p>
</div>
```

Common utilities:

- Borders: `border`, `border-2`, `border-slate-200`.
- Radius: `rounded`, `rounded-md`, `rounded-xl`, `rounded-full`.
- Shadows: `shadow-sm`, `shadow-md`, `shadow-xl`.
- Opacity: `opacity-50`.
- Ring: `ring-1`, `ring-2`, `ring-blue-500`.
- Overflow: `overflow-hidden`, `overflow-auto`.

Use shadows and borders consistently. Too many heavy shadows can make a page feel cluttered.

## 8. Flexbox Layout

Flexbox is useful for arranging items in one dimension.

```html
<header class="flex items-center justify-between gap-4">
  <a class="font-bold" href="/">YogiBlog</a>
  <nav class="flex items-center gap-4">
    <a href="/blog">Blog</a>
    <a href="/about">About</a>
  </nav>
</header>
```

Important utilities:

- `flex`, `inline-flex`
- `flex-row`, `flex-col`
- `flex-wrap`, `flex-nowrap`
- `items-start`, `items-center`, `items-end`
- `justify-start`, `justify-center`, `justify-between`, `justify-end`
- `grow`, `shrink-0`, `basis-1/2`
- `gap-2`, `gap-4`, `gap-8`

Responsive example:

```html
<div class="flex flex-col gap-4 md:flex-row md:items-center">
  <img class="h-24 w-24 rounded-xl object-cover" src="/images/example.jpg" alt="Example project" />
  <div>
    <h2 class="text-xl font-bold">Project title</h2>
    <p class="mt-1 text-slate-600">Description of the project.</p>
  </div>
</div>
```

Use `min-w-0` on flex children when long text should be allowed to shrink rather than overflow.

## 9. CSS Grid Layout

Grid is useful for two-dimensional layouts, especially card collections and dashboards.

```html
<section class="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
  <article class="rounded-xl border p-5">Card one</article>
  <article class="rounded-xl border p-5">Card two</article>
  <article class="rounded-xl border p-5">Card three</article>
</section>
```

Useful utilities include `grid-cols-1`, `grid-cols-2`, `grid-cols-3`, `col-span-2`, `place-items-center`, and `gap-6`.

For a layout with a sidebar and content:

```html
<div class="grid grid-cols-1 gap-8 lg:grid-cols-[16rem_minmax(0,1fr)]">
  <aside>Sidebar</aside>
  <main class="min-w-0">Main content</main>
</div>
```

The arbitrary grid-template value gives the sidebar a fixed basis and lets the content occupy the remaining space. `minmax(0,1fr)` helps prevent long content from forcing the grid wider than its container.

## 10. Responsive Design

Tailwind uses a mobile-first responsive model. An unprefixed class applies by default; a breakpoint-prefixed class applies at that breakpoint and above.

```html
<h1 class="text-2xl md:text-4xl lg:text-5xl">Responsive heading</h1>
```

This means:

- Default: `text-2xl`.
- At `md` and wider: `text-4xl`.
- At `lg` and wider: `text-5xl`.

Common default breakpoint names in current versions include `sm`, `md`, `lg`, `xl`, and `2xl`. Exact values can be customized, so check your theme if the design depends on a specific pixel width.

### Responsive layout example

```html
<div class="mx-auto grid max-w-6xl grid-cols-1 gap-6 px-4 sm:px-6 md:grid-cols-2 lg:grid-cols-3">
  <article class="rounded-xl border p-5">Article one</article>
  <article class="rounded-xl border p-5">Article two</article>
  <article class="rounded-xl border p-5">Article three</article>
</div>
```

### Responsive visibility

```html
<div class="block md:hidden">Mobile-only content</div>
<div class="hidden md:block">Content visible at medium sizes and wider</div>
```

Design for content first, then add breakpoints where the layout needs them. Do not choose breakpoints solely based on specific device brands.

## 11. Hover, Focus, and Other States

State variants let you change styles when an element is hovered, focused, active, disabled, or selected.

```html
<button class="rounded-lg bg-blue-600 px-4 py-2 text-white transition hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600 disabled:cursor-not-allowed disabled:opacity-50">
  Submit
</button>
```

Common variants include:

- `hover:` — pointer hover.
- `focus:` — element has focus.
- `focus-visible:` — focus styles appropriate for keyboard navigation.
- `active:` — while being activated.
- `disabled:` — disabled form controls.
- `first:` and `last:` — position among siblings.
- `group-hover:` — respond to a hovered parent marked with `group`.
- `peer-checked:` — respond to a preceding peer input state where applicable.

### Group hover

```html
<a href="/blog" class="group block rounded-xl border p-5 hover:border-blue-300">
  <h2 class="font-semibold group-hover:text-blue-700">Read the guide</h2>
  <p class="mt-2 text-slate-600">Explore the full tutorial.</p>
</a>
```

Use visible focus styles. Removing the browser outline without providing an accessible replacement makes keyboard navigation harder.

## 12. Dark Mode

The `dark:` variant applies styles when the dark-mode condition is active. Depending on your Tailwind version and setup, dark mode may follow the system preference or a class/data attribute you control.

```html
<main class="min-h-screen bg-white text-slate-900 dark:bg-slate-950 dark:text-slate-100">
  <article class="rounded-xl border border-slate-200 bg-slate-50 p-6 dark:border-slate-800 dark:bg-slate-900">
    <h1 class="text-2xl font-bold">Dark mode ready</h1>
    <p class="mt-2 text-slate-600 dark:text-slate-300">Text remains readable in both themes.</p>
  </article>
</main>
```

### Tips for dark mode

- Define the background, text, border, input, and hover colors for both themes.
- Check charts, images, code blocks, and third-party components separately.
- Persist the user's preference if the application offers a theme switcher.
- Avoid a flash of the wrong theme during initial page load if your app supports saved preferences.

Tailwind supplies styling variants; the actual theme toggle behavior is application logic.

## 13. Positioning and Z-Index

Position utilities include `static`, `relative`, `absolute`, `fixed`, and `sticky`.

```html
<div class="relative rounded-xl border p-6">
  <span class="absolute right-3 top-3 rounded-full bg-emerald-100 px-2 py-1 text-xs text-emerald-800">
    New
  </span>
  <h2 class="font-semibold">Featured guide</h2>
</div>
```

A positioned parent commonly provides the reference box for an absolutely positioned child.

Sticky navigation example:

```html
<header class="sticky top-0 z-40 border-b border-slate-200 bg-white/90 backdrop-blur">
  <nav class="mx-auto max-w-6xl px-4 py-3">Navigation</nav>
</header>
```

`z-10`, `z-20`, and similar utilities set stacking order within the rules of CSS stacking contexts. A large `z-index` does not always put an element above everything: ancestor stacking contexts and positioning can affect the result.

## 14. Transitions and Animations

Transitions make changes feel smoother when used thoughtfully.

```html
<a href="/guides" class="inline-flex rounded-lg bg-indigo-600 px-4 py-2 text-white transition duration-200 ease-out hover:-translate-y-0.5 hover:bg-indigo-700">
  Explore guides
</a>
```

Common utilities include `transition`, `transition-colors`, `duration-200`, `ease-in-out`, `animate-spin`, `animate-pulse`, and `animate-bounce`.

### Respect reduced motion

```html
<div class="transition-transform motion-reduce:transition-none hover:scale-105">
  Interactive card
</div>
```

Use animation to communicate state or add subtle feedback, not to distract. Avoid motion that can trigger discomfort, and respect the user's reduced-motion preference.

## 15. Custom Styles and Theme Values

Use built-in utilities when they fit. For unique values, Tailwind supports arbitrary values such as:

```html
<div class="w-[min(100%,72rem)] bg-[#101827] p-[1.125rem]">
  Custom-sized container
</div>
```

Arbitrary values are useful for one-off needs, but repeatedly using many unrelated values can make a design inconsistent. Prefer reusable theme tokens for shared colors, spacing, fonts, and breakpoints.

### Theme customization in Tailwind CSS v4

Tailwind v4 supports theme variables in CSS:

```css
@import "tailwindcss";

@theme {
  --color-brand: #2563eb;
  --font-display: "Inter", sans-serif;
}
```

You can then use utilities generated from those theme values, such as `bg-brand` and `font-display`, when the token naming maps to those utility families.

### Tailwind CSS v3 configuration

In v3, customization is commonly done in `tailwind.config.js`:

```js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: "#2563eb",
      },
    },
  },
  plugins: [],
};
```

This is a v3-style example. Do not copy it as the default configuration for a v4-only setup.

### When to use regular CSS

Regular CSS remains useful for complex keyframes, third-party styles, selectors that are awkward to express as utilities, and reusable global rules. Tailwind and regular CSS can coexist.

## 16. Reusable Components in React and Next.js

Tailwind works well with component-based frameworks. Extract repeated UI into components instead of copying large blocks of markup.

### React button component

```jsx
export function Button({ children, variant = "primary", ...props }) {
  const base =
    "inline-flex items-center justify-center rounded-lg px-4 py-2 text-sm font-semibold transition focus-visible:outline-2 focus-visible:outline-offset-2 disabled:pointer-events-none disabled:opacity-50";

  const variants = {
    primary: "bg-blue-600 text-white hover:bg-blue-700 focus-visible:outline-blue-600",
    secondary: "border border-slate-300 bg-white text-slate-900 hover:bg-slate-50 focus-visible:outline-slate-500",
  };

  return (
    <button className={`${base} ${variants[variant] ?? variants.primary}`} {...props}>
      {children}
    </button>
  );
}
```

Example use:

```jsx
<Button onClick={() => console.log("Saved")}>Save</Button>
<Button variant="secondary" type="button">Cancel</Button>
```

In production, use a real event handler for the actual operation and ensure the component's props and variants match your design system.

### Avoid dynamically generated class names

This pattern can be problematic:

```jsx
// Risky: the scanner may not detect classes built from fragments.
<div className={`bg-${color}-600`}>Hello</div>
```

Prefer a complete, statically detectable mapping:

```jsx
const colorClasses = {
  blue: "bg-blue-600 hover:bg-blue-700",
  green: "bg-green-600 hover:bg-green-700",
  rose: "bg-rose-600 hover:bg-rose-700",
};

export function StatusBadge({ color = "blue", children }) {
  const classes = colorClasses[color] ?? colorClasses.blue;

  return (
    <span className={`rounded-full px-3 py-1 text-sm text-white ${classes}`}>
      {children}
    </span>
  );
}
```

### Next.js notes

- Import the global stylesheet from the appropriate root layout or app entry point.
- Tailwind classes can be used in Server and Client Components; styling alone does not require `"use client"`.
- Keep interactive state and browser-only logic in Client Components when required by Next.js.
- Ensure source files containing class names are included in Tailwind's source detection.
- Do not place secrets in client-side code just because you are styling a component.

## 17. Forms and Accessibility

Forms should have semantic labels, clear errors, keyboard support, and visible focus styles.

```html
<form class="mx-auto max-w-md space-y-5 rounded-xl border border-slate-200 p-6">
  <div>
    <label for="email" class="mb-2 block text-sm font-medium text-slate-900">
      Email address
    </label>
    <input
      id="email"
      name="email"
      type="email"
      autocomplete="email"
      required
      class="w-full rounded-lg border border-slate-300 px-3 py-2 text-slate-900 outline-none focus-visible:ring-2 focus-visible:ring-blue-600"
      placeholder="you@example.com"
    />
  </div>
  <button class="w-full rounded-lg bg-blue-600 px-4 py-2 font-semibold text-white hover:bg-blue-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600" type="submit">
    Continue
  </button>
</form>
```

Accessibility checklist:

- Every input has an associated label.
- Buttons have clear accessible names.
- Interactive controls work with a keyboard.
- Focus indicators remain visible.
- Color is not the only way to communicate errors or status.
- Text and controls have adequate contrast.
- Images have appropriate alternative text; decorative images use empty alt text.
- Validation messages are connected to their relevant fields when needed.

Tailwind can style accessible interfaces, but it cannot make semantically incorrect HTML accessible by itself.

## 18. Common UI Patterns

### Article card

```html
<article class="overflow-hidden rounded-2xl border border-slate-200 bg-white shadow-sm transition hover:-translate-y-1 hover:shadow-md">
  <img src="/images/article-cover.png" alt="Abstract article cover" class="aspect-video w-full object-cover" />
  <div class="p-5">
    <p class="text-sm font-medium text-blue-700">Web Development</p>
    <h2 class="mt-2 text-xl font-bold text-slate-900">Tailwind CSS Guide</h2>
    <p class="mt-2 line-clamp-3 text-slate-600">Learn utility classes and responsive layouts through practical examples.</p>
    <a href="/blogpost/tailwind-css-complete-guide" class="mt-4 inline-flex font-semibold text-blue-700 hover:text-blue-900">
      Read article <span aria-hidden="true">→</span>
    </a>
  </div>
</article>
```

### Centered hero section

```html
<section class="bg-slate-950 px-4 py-20 text-center text-white sm:py-28">
  <div class="mx-auto max-w-3xl">
    <p class="font-semibold text-blue-300">Learn by building</p>
    <h1 class="mt-4 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">
      Build better interfaces
    </h1>
    <p class="mx-auto mt-6 max-w-2xl text-lg leading-8 text-slate-300">
      Practical guides for modern web developers.
    </p>
    <a href="/blog" class="mt-8 inline-flex rounded-lg bg-white px-5 py-3 font-semibold text-slate-900 hover:bg-slate-200">
      Browse tutorials
    </a>
  </div>
</section>
```

### Responsive dashboard shell

```html
<div class="min-h-screen bg-slate-100 md:grid md:grid-cols-[16rem_minmax(0,1fr)]">
  <aside class="border-b bg-white p-5 md:border-b-0 md:border-r">
    <p class="font-bold">Dashboard</p>
    <nav class="mt-4 flex gap-3 md:flex-col">
      <a href="#" class="rounded-md px-3 py-2 hover:bg-slate-100">Overview</a>
      <a href="#" class="rounded-md px-3 py-2 hover:bg-slate-100">Projects</a>
      <a href="#" class="rounded-md px-3 py-2 hover:bg-slate-100">Settings</a>
    </nav>
  </aside>
  <main class="min-w-0 p-5 sm:p-8">
    <h1 class="text-2xl font-bold">Overview</h1>
    <div class="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      <section class="rounded-xl bg-white p-5 shadow-sm">Metric one</section>
      <section class="rounded-xl bg-white p-5 shadow-sm">Metric two</section>
      <section class="rounded-xl bg-white p-5 shadow-sm">Metric three</section>
    </div>
  </main>
</div>
```

### Article reading layout

```html
<div class="mx-auto grid max-w-7xl grid-cols-1 gap-10 px-4 py-10 lg:grid-cols-[minmax(0,1fr)_16rem]">
  <article class="min-w-0 max-w-3xl">
    <p class="text-sm font-semibold text-blue-700">WEB DEVELOPMENT</p>
    <h1 class="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Tailwind CSS Complete Guide</h1>
    <p class="mt-4 text-lg leading-8 text-slate-600">A practical guide from fundamentals to real projects.</p>
    <div class="prose mt-8 max-w-none">
      <p>Your Markdown renderer may provide its own prose styles; configure it to match your Tailwind version.</p>
    </div>
  </article>
  <aside class="h-fit rounded-xl border p-5">
    <h2 class="font-semibold">On this page</h2>
    <nav class="mt-3 space-y-2 text-sm text-slate-600">
      <a class="block hover:text-blue-700" href="#basics">Basics</a>
      <a class="block hover:text-blue-700" href="#responsive">Responsive design</a>
    </nav>
  </aside>
</div>
```

The `prose` class is provided by the Typography plugin in setups that install and configure it; it is not a guaranteed built-in utility in every Tailwind project. Without that plugin, style Markdown elements yourself.

## 19. Tailwind CSS v3 vs v4

Tailwind v3 and v4 differ in setup and configuration. Avoid combining snippets from different major versions.

| Area | Tailwind CSS v3 | Tailwind CSS v4 |
|---|---|---|
| Typical CSS entry | `@tailwind` directives | `@import "tailwindcss";` |
| Configuration | Commonly `tailwind.config.js` | CSS-first theme configuration is emphasized |
| PostCSS package | Commonly `tailwindcss` plugin | Use `@tailwindcss/postcss` when using PostCSS |
| Vite integration | Common PostCSS setup | Dedicated `@tailwindcss/vite` plugin available |
| Migration | Existing config-based projects | Review official upgrade guide and compatibility notes |

This is a high-level comparison, not a complete migration checklist. Check the official documentation for exact setup, browser requirements, plugins, and migration limitations.

## 20. Best Practices

1. **Use semantic HTML.** Choose `button`, `nav`, `main`, `article`, and `label` according to their purpose.
2. **Design mobile-first.** Start with the narrow layout and add breakpoints as needed.
3. **Create reusable components.** Extract repeated cards, buttons, navigation, and form fields.
4. **Keep class lists readable.** Group utilities consistently and remove contradictory styles.
5. **Use a design system.** Reuse colors, spacing, typography, radii, and shadows.
6. **Use static class maps.** Do not construct utility names from incomplete string fragments.
7. **Check accessibility.** Verify keyboard navigation, focus, labels, contrast, and reduced motion.
8. **Test real content.** Long titles, empty states, error messages, and translated text can change layouts.
9. **Check responsive states.** Test small screens, medium widths, and large screens.
10. **Keep versions consistent.** Use installation and configuration instructions for the version in your project.
11. **Avoid unnecessary arbitrary values.** Use them when they solve a real design requirement, not for every property.
12. **Review production output.** Check build errors, missing styles, console warnings, and performance.

## 21. Common Errors and Troubleshooting

### Styles are not appearing

Check that the global CSS file is imported, the development server restarted after configuration changes, and the relevant files are scanned by Tailwind. Confirm that the class name is valid for your installed version.

### `npx tailwindcss init -p` fails

That command belongs to common Tailwind v3 workflows and may not match Tailwind v4 setup. Check `npm ls tailwindcss` and follow the version-specific installation guide rather than repeatedly running the same command.

### Dynamic class names do not generate CSS

This may not be detected:

```jsx
<div className={`text-${size}-xl`}>Heading</div>
```

Use a mapping with complete class strings:

```jsx
const sizes = {
  small: "text-sm",
  medium: "text-base",
  large: "text-xl",
};

<div className={sizes[size] ?? sizes.medium}>Heading</div>
```

### PostCSS plugin error

Make sure the PostCSS plugin matches the installed major version. In Tailwind v4, the PostCSS integration uses `@tailwindcss/postcss`; v3 projects commonly use `tailwindcss` as the PostCSS plugin. Verify `postcss.config.*` exports the expected plugin configuration.

### A class works locally but is missing in production

Check source detection, build logs, class-name construction, and whether the component source is outside the scanned project paths. Ensure your production build uses the expected Tailwind version and CSS entry point.

### Flex or grid items overflow

Try `min-w-0` on a child that needs to shrink, `break-words` for long strings, and `overflow-hidden` only when clipping is actually desired. Inspect the element's intrinsic width and the parent layout.

### Dark mode does not switch

The `dark:` variant only styles the dark condition; your app still needs the appropriate system, class, or data-attribute behavior for its version and setup. Check the actual DOM and theme preference.

### Styles conflict

Search for duplicate or contradictory utilities, global CSS selectors, component-library styles, and unexpected cascade behavior. Do not rely on HTML class order alone to determine the winning declaration.

## 22. Practice Projects

### Project 1: Profile card

**Requirements:** avatar, name, short bio, social links, and a responsive card.

**Practice:** spacing, typography, colors, borders, shadows, hover states, and accessible links.

### Project 2: Responsive landing page

**Requirements:** navigation, hero section, features grid, testimonials, and footer.

**Practice:** Flexbox, Grid, responsive breakpoints, maximum widths, and consistent spacing.

### Project 3: Blog listing page

**Requirements:** article cards, category labels, search input, and responsive grid.

**Practice:** reusable React components, grid layouts, truncation, form styles, and empty states.

### Project 4: Admin dashboard

**Requirements:** sidebar, navigation, summary cards, data table, and mobile layout.

**Practice:** grid templates, sticky positioning, overflow handling, dark mode, and focus states.

### Project 5: Next.js documentation blog

**Requirements:** article page, table of contents, code blocks, related posts, and a responsive reading layout.

**Practice:** Next.js layouts, Markdown rendering, typography, accessible anchor links, and consistent UI components.

### Suggested completion plan

- Day 1: utility fundamentals, spacing, colors, typography.
- Day 2: Flexbox, Grid, responsive design.
- Day 3: hover/focus states, forms, accessibility, dark mode.
- Day 4: reusable React components and a landing page.
- Day 5: build a blog listing or dashboard.
- Day 6: integrate styling into a Next.js project.
- Day 7: test mobile layout, fix bugs, and publish the project.

Adjust this schedule to your available time; understanding and practicing the concepts matters more than finishing on a particular day.

## 23. Interview Questions and Answers

### 1. What is Tailwind CSS?

Tailwind CSS is a utility-first CSS framework that lets developers style interfaces by composing utility classes in markup or components.

### 2. What is utility-first CSS?

It is an approach where small classes represent individual styling decisions, such as padding, color, layout, or typography, and are combined to build a component.

### 3. How is Tailwind different from Bootstrap?

Tailwind primarily provides low-level utility classes for custom designs. Bootstrap provides a more predefined design system and ready-made components. Both can be useful depending on project needs.

### 4. What does mobile-first mean?

Unprefixed utilities apply to the default, narrow layout. Breakpoint-prefixed utilities apply at that breakpoint and above.

### 5. What does `md:flex` mean?

It applies `display: flex` at the medium breakpoint and larger, while smaller widths follow other matching utilities.

### 6. What is the difference between `p-4` and `px-4`?

`p-4` applies padding to all sides. `px-4` applies horizontal padding to the left and right.

### 7. What do `items-center` and `justify-center` do?

In a flex container, `items-center` aligns items on the cross axis, while `justify-center` centers them along the main axis. The exact direction depends on `flex-row` or `flex-col`.

### 8. How do you add hover styles?

Use a state variant such as `hover:bg-blue-700`.

### 9. What is the `dark:` variant?

It applies a style when the configured dark-mode condition is active.

### 10. Why might a dynamically generated class not work?

Tailwind's source scanner may not detect a class assembled from string fragments. A mapping of complete class strings is more reliable.

### 11. What are arbitrary values?

They allow one-off values, such as `w-[420px]` or `bg-[#112233]`, when a standard utility or theme token does not fit.

### 12. How do you make a responsive card grid?

Use utilities such as `grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6`.

### 13. How do you customize the theme?

In v4, CSS theme variables using `@theme` are central to customization. In v3, theme extensions are commonly defined in `tailwind.config.js`.

### 14. Can Tailwind be used with React and Next.js?

Yes. Import the global stylesheet through the framework's supported entry point and apply utility classes in JSX. Styling itself does not require a Client Component.

### 15. Does Tailwind replace CSS knowledge?

No. Understanding layout, the cascade, the box model, responsive behavior, and accessibility helps you use Tailwind effectively.

### 16. How do you make a button keyboard-accessible?

Use a semantic `<button>`, preserve visible focus styles, provide a meaningful label, and ensure its action can be triggered with the keyboard.

### 17. What is the difference between Flexbox and Grid?

Flexbox is primarily one-dimensional, arranging items along a row or column. Grid supports two-dimensional row-and-column layouts.

### 18. What should you check when Tailwind styles disappear in production?

Check source detection, class-name construction, global CSS imports, build output, and version-specific configuration.

### 19. What is the purpose of `min-w-0`?

It allows a flex or grid item to shrink below its automatic minimum content size, which can prevent long content from forcing overflow.

### 20. How should a team keep class lists maintainable?

Use consistent class ordering, shared design tokens, reusable components, complete static variants, and code review conventions.

## 24. Quick Reference

| Goal | Example |
|---|---|
| Padding | `p-4`, `px-6`, `py-3` |
| Margin | `mt-4`, `mx-auto` |
| Flexbox | `flex items-center justify-between` |
| Grid | `grid grid-cols-1 md:grid-cols-3 gap-6` |
| Responsive text | `text-2xl md:text-4xl` |
| Background | `bg-slate-900` |
| Text color | `text-slate-100` |
| Rounded corners | `rounded-xl` |
| Shadow | `shadow-md` |
| Hover | `hover:bg-blue-700` |
| Keyboard focus | `focus-visible:outline-2` |
| Dark mode | `dark:bg-slate-950` |
| Hidden on small screens | `hidden md:block` |
| Full width | `w-full` |
| Maximum width | `max-w-4xl` |
| Minimum viewport height | `min-h-screen` |
| Positioning | `relative`, `absolute`, `sticky` |
| Transition | `transition duration-200` |
| Reduced motion | `motion-reduce:transition-none` |

## Conclusion

Tailwind CSS helps you build consistent, responsive interfaces quickly, but strong results still depend on layout fundamentals, accessible markup, reusable components, and careful testing. Learn the core utilities first, build small projects, and then integrate Tailwind into React or Next.js applications.

For version-specific setup, customization, and migration details, consult the official Tailwind CSS documentation: https://tailwindcss.com/docs
