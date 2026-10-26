---
title: "Next.js Tutorial "
description: "A practical Next.js guide covering App Router, routing, layouts, Server and Client Components, data fetching, forms, Route Handlers, caching, authentication concepts, SEO, deployment, troubleshooting, projects, and interview questions."
slug: "nextjs-tutorial"
date: "2026-10-25"
author: "Yogesh "
image: "/images/nextjs.png"
category: "Web Development"
---

# Next.js Complete Guide

Next.js is a React framework for building full-stack web applications. It provides routing, rendering strategies, server-side capabilities, metadata tools, and production build features around React.

This guide focuses on the **App Router**, the recommended approach for new Next.js applications. Next.js changes over time, and some APIs vary by version. Check your installed version and the official documentation before applying version-specific code. Examples below use modern App Router conventions.

## Table of Contents

- [1. What Is Next.js?](#1-what-is-nextjs)
- [2. Why Use Next.js?](#2-why-use-nextjs)
- [3. Prerequisites](#3-prerequisites)
- [4. Create a Next.js Project](#4-create-a-nextjs-project)
- [5. App Router Folder Structure](#5-app-router-folder-structure)
- [6. Pages, Layouts, and Templates](#6-pages-layouts-and-templates)
- [7. Navigation and Links](#7-navigation-and-links)
- [8. Dynamic Routes and Route Parameters](#8-dynamic-routes-and-route-parameters)
- [9. Server Components and Client Components](#9-server-components-and-client-components)
- [10. Data Fetching](#10-data-fetching)
- [11. Loading, Errors, and Not Found Pages](#11-loading-errors-and-not-found-pages)
- [12. Route Handlers and APIs](#12-route-handlers-and-apis)
- [13. Forms and Server Actions](#13-forms-and-server-actions)
- [14. Styling with Tailwind CSS](#14-styling-with-tailwind-css)
- [15. Images, Fonts, and Static Assets](#15-images-fonts-and-static-assets)
- [16. Metadata and SEO](#16-metadata-and-seo)
- [17. Caching and Revalidation](#17-caching-and-revalidation)
- [18. Environment Variables and Secrets](#18-environment-variables-and-secrets)
- [19. Authentication and Authorization](#19-authentication-and-authorization)
- [20. Database Integration](#20-database-integration)
- [21. Performance and Security](#21-performance-and-security)
- [22. Testing and Debugging](#22-testing-and-debugging)
- [23. Deployment](#23-deployment)
- [24. Common Errors and Solutions](#24-common-errors-and-solutions)
- [25. Practice Projects](#25-practice-projects)
- [26. Interview Questions and Answers](#26-interview-questions-and-answers)
- [27. Quick Reference](#27-quick-reference)

## 1. What Is Next.js?

Next.js is a framework built on React. React helps you create UI components; Next.js adds an application structure and tools for routing, server rendering, data access, metadata, and deployment.

A Next.js application can combine:

- **Frontend UI:** React components and layouts.
- **Routing:** file-system routes based on folders and files.
- **Server rendering:** render pages on the server when appropriate.
- **Client interactivity:** browser state, event handlers, and interactive widgets.
- **Backend functionality:** Route Handlers and server-only logic.
- **SEO support:** page metadata, canonical URLs, social previews, and sitemap routes.

Next.js does not force every page to use one rendering strategy. Choose based on the page's data, interactivity, freshness requirements, and caching behavior.

## 2. Why Use Next.js?

### Benefits

- File-system routing makes application structure easier to follow.
- Server Components can reduce the amount of JavaScript sent to the browser.
- Server-side code can access databases and private environment variables without exposing them to clients.
- Built-in metadata APIs help manage SEO and social previews.
- Loading and error conventions support route-level UI states.
- The framework integrates with deployment platforms such as Vercel and can also be self-hosted with appropriate configuration.

### Things to learn carefully

Next.js introduces concepts beyond basic React: server/client boundaries, caching, rendering, asynchronous route APIs, and deployment configuration. These concepts are powerful but can be confusing if you treat every component as a browser component.

## 3. Prerequisites

Before learning Next.js, be comfortable with:

- HTML and semantic markup.
- CSS and responsive layouts.
- JavaScript fundamentals, including promises, `async`/`await`, modules, arrays, and objects.
- React components, props, state, and hooks.
- Basic Git and npm usage.
- HTTP requests and JSON.

TypeScript is strongly useful for larger Next.js projects, but you can start with JavaScript and add TypeScript as your confidence grows.

## 4. Create a Next.js Project

Use the official project creation tool:

```bash
npx create-next-app@latest my-next-app
cd my-next-app
npm run dev
```

Open the local address shown by the terminal, commonly `http://localhost:3000`.

The setup prompts may ask whether you want TypeScript, ESLint, Tailwind CSS, a `src/` directory, App Router, or an import alias. Choose options that match your learning goals and the existing project. The generated defaults can change over time.

Common scripts in `package.json` include:

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "lint": "eslint"
  }
}
```

Your actual scripts depend on the Next.js version and the starter template. Do not overwrite an existing `package.json` blindly.

## 5. App Router Folder Structure

A simple project might look like this:

```text
my-next-app/
├── app/
│   ├── layout.jsx
│   ├── page.jsx
│   ├── globals.css
│   ├── about/
│   │   └── page.jsx
│   ├── blog/
│   │   ├── page.jsx
│   │   └── [slug]/
│   │       └── page.jsx
│   └── api/
│       └── health/
│           └── route.js
├── components/
│   ├── Header.jsx
│   └── BlogCard.jsx
├── lib/
│   └── db.js
├── public/
│   └── images/
├── .env.local
├── next.config.mjs
└── package.json
```

Key concepts:

- `app/page.jsx` is the home route `/`.
- `app/about/page.jsx` is `/about`.
- `app/blog/page.jsx` is `/blog`.
- `app/blog/[slug]/page.jsx` is a dynamic route such as `/blog/my-first-post`.
- `app/layout.jsx` provides a shared layout.
- `app/api/health/route.js` defines an API endpoint at `/api/health`.
- `public/` holds static assets served from the site root.
- `components/` and `lib/` are conventions, not special folders; organize them as your project needs.

A folder becomes a page route when it contains a `page` file. A `route` file defines an HTTP endpoint and cannot occupy the same route segment as a page file.

## 6. Pages, Layouts, and Templates

### A basic page

```jsx
export default function HomePage() {
  return (
    <main>
      <h1>Welcome to my website</h1>
      <p>Built with Next.js.</p>
    </main>
  );
}
```

### Root layout

The root layout is required in the App Router. It defines the document's `<html>` and `<body>` elements.

```jsx
import "./globals.css";

export const metadata = {
  title: {
    default: "YogiBlog",
    template: "%s | YogiBlog",
  },
  description: "Practical guides for developers.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
```

Metadata can be defined with a static `metadata` export or a `generateMetadata` function in supported route files. Do not export metadata from a Client Component.

### Nested layouts

A layout can wrap pages inside its route segment and preserve shared UI during navigation.

```jsx
export default function BlogLayout({ children }) {
  return (
    <section className="mx-auto max-w-6xl px-4 py-8">
      {children}
    </section>
  );
}
```

Save it as `app/blog/layout.jsx` to wrap the blog segment. Nested layouts are useful for section-specific navigation or consistent page structure.

### Layout vs template

Layouts are designed to preserve state and remain mounted across navigation within their segment. Templates create a new instance when their segment is navigated to, which can be useful when a remount is desired. Use a template only when its behavior is needed.

## 7. Navigation and Links

Use Next.js's `Link` component for internal navigation:

```jsx
import Link from "next/link";

export default function Navigation() {
  return (
    <nav aria-label="Main navigation">
      <Link href="/">Home</Link>
      <Link href="/blog">Blog</Link>
      <Link href="/about">About</Link>
    </nav>
  );
}
```

`Link` enables client-side navigation enhancements. Use ordinary anchor elements for external URLs or when their behavior is specifically needed.

For programmatic navigation in a Client Component, use the router hook from `next/navigation`:

```jsx
"use client";

import { useRouter } from "next/navigation";

export function ContinueButton() {
  const router = useRouter();

  return (
    <button type="button" onClick={() => router.push("/dashboard")}>
      Continue
    </button>
  );
}
```

Only use programmatic navigation for actual interactions; links are usually better for standard navigation because they provide expected browser behavior.

## 8. Dynamic Routes and Route Parameters

Square-bracket folders represent dynamic segments.

```text
app/
└── blog/
    └── [slug]/
        └── page.jsx
```

This route can handle URLs such as `/blog/nextjs-basics` and `/blog/tailwind-guide`.

In modern Next.js versions, route `params` may be asynchronous. Follow the API for your installed version. A modern pattern is:

```jsx
export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  return (
    <main>
      <h1>Article: {slug}</h1>
    </main>
  );
}
```

In versions where `params` is a plain object, the `await` is not required. Check the version's documentation rather than mixing examples from different releases.

### Validate slugs and handle missing content

If articles are stored as Markdown files, use the slug to find the exact file and return a 404 for unknown content.

```jsx
import { notFound } from "next/navigation";

const knownPosts = new Set(["nextjs-basics", "tailwind-guide"]);

export default async function BlogPostPage({ params }) {
  const { slug } = await params;

  if (!knownPosts.has(slug)) {
    notFound();
  }

  return <article><h1>{slug}</h1></article>;
}
```

This example illustrates route validation only. A real Markdown loader should safely resolve the filename, validate the slug, read and render the file, and avoid allowing arbitrary filesystem paths.

### Generate static params

For a known set of content slugs, `generateStaticParams` can tell Next.js which dynamic paths to build ahead of time:

```jsx
export async function generateStaticParams() {
  return [
    { slug: "nextjs-basics" },
    { slug: "tailwind-guide" },
  ];
}
```

Use the right rendering and build approach for your data source. A database-backed or frequently changing site may require a different strategy.

## 9. Server Components and Client Components

The App Router uses React Server Components by default. This is one of the most important Next.js concepts.

### Server Components

Server Components are rendered in the server environment. They are useful for:

- Reading data from a database or server-side API.
- Using server-only libraries and private environment variables.
- Rendering content without sending the component's JavaScript to the browser.
- Keeping secrets out of client bundles.

```jsx
export default async function ProductsPage() {
  const response = await fetch("https://example.com/api/products");

  if (!response.ok) {
    throw new Error("Could not load products");
  }

  const products = await response.json();

  return (
    <main>
      <h1>Products</h1>
      <ul>
        {products.map((product) => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    </main>
  );
}
```

Replace the example URL with a real API. If the API is private, validate its response and handle expected errors.

### Client Components

Client Components are needed for browser interactions such as state, event handlers, effects, and browser APIs. Put `"use client"` at the top of a file that defines the client boundary.

```jsx
"use client";

import { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);

  return (
    <button type="button" onClick={() => setCount((value) => value + 1)}>
      Count: {count}
    </button>
  );
}
```

### Key differences

| Feature | Server Component | Client Component |
|---|---|---|
| Default in App Router | Yes | No |
| Can use browser event handlers | No | Yes |
| Can use React state/effects | Not for client interactivity | Yes |
| Can safely use server-only data access | Yes, when properly isolated | No |
| JavaScript sent for component interactivity | Generally not sent as client component code | Client JavaScript is needed |
| Best use | Data access and content rendering | Interactive UI |

A Client Component can still be pre-rendered as HTML in supported scenarios. “Client Component” does not simply mean “never rendered on the server.”

### Keep the client boundary small

Do not add `"use client"` to an entire application just because one button needs interactivity. Keep most of the page on the server and extract interactive parts into smaller Client Components.

Props passed from Server Components to Client Components must be serializable according to React's rules. Do not pass database connections, secrets, or arbitrary server objects to the browser.

## 10. Data Fetching

In App Router Server Components, you can use `fetch` directly or query a database through a server-only module.

```jsx
async function getPosts() {
  const response = await fetch("https://example.com/api/posts");

  if (!response.ok) {
    throw new Error("Failed to fetch posts");
  }

  return response.json();
}

export default async function PostsPage() {
  const posts = await getPosts();

  return (
    <main>
      <h1>Posts</h1>
      {posts.map((post) => (
        <article key={post.id}>
          <h2>{post.title}</h2>
        </article>
      ))}
    </main>
  );
}
```

Always check response status and handle failures. A production application should validate external data and show a helpful loading or error state.

### Fetching on the client

Client-side fetching can be appropriate for data that changes frequently or is tied to user interactions. Use a library or a carefully managed effect to handle loading, errors, cancellation, and stale responses.

```jsx
"use client";

import { useEffect, useState } from "react";

export function StatusMessage() {
  const [status, setStatus] = useState("Loading...");

  useEffect(() => {
    const controller = new AbortController();

    async function loadStatus() {
      try {
        const response = await fetch("/api/health", {
          signal: controller.signal,
        });

        if (!response.ok) throw new Error("Request failed");

        const data = await response.json();
        setStatus(data.status ?? "Unknown");
      } catch (error) {
        if (error.name !== "AbortError") setStatus("Could not load status");
      }
    }

    loadStatus();
    return () => controller.abort();
  }, []);

  return <p>{status}</p>;
}
```

### Avoid unnecessary self-fetching

Inside a Server Component, calling your own public Route Handler just to retrieve data can add an extra HTTP hop. If possible, call the shared server-side data function directly. Keep authorization checks inside that function or at the correct server boundary.

## 11. Loading, Errors, and Not Found Pages

The App Router supports special files for common route states.

### Loading UI

Create `app/blog/loading.jsx`:

```jsx
export default function Loading() {
  return <p role="status">Loading articles...</p>;
}
```

A loading UI can provide immediate feedback while a route segment loads or streams.

### Error boundary

Create `app/blog/error.jsx`:

```jsx
"use client";

export default function BlogError({ error, reset }) {
  return (
    <section>
      <h2>Something went wrong</h2>
      <button type="button" onClick={() => reset()}>
        Try again
      </button>
    </section>
  );
}
```

Error boundaries in this convention must be Client Components. Log details on the server when appropriate, but do not expose sensitive stack traces or secrets to visitors.

### Not found

Create `app/not-found.jsx` for a global not-found page, or `not-found.jsx` inside a route segment for segment-specific handling.

```jsx
import Link from "next/link";

export default function NotFound() {
  return (
    <main>
      <h1>Page not found</h1>
      <p>The page may have moved or the URL may be incorrect.</p>
      <Link href="/">Return home</Link>
    </main>
  );
}
```

Call `notFound()` when a requested record or content file does not exist. This is preferable to rendering an empty article.

## 12. Route Handlers and APIs

Route Handlers define HTTP endpoints in `route.js` or `route.ts` files under the App Router. They support methods such as `GET`, `POST`, `PUT`, `PATCH`, and `DELETE`.

Example `app/api/health/route.js`:

```js
export async function GET() {
  return Response.json({
    status: "ok",
    timestamp: new Date().toISOString(),
  });
}
```

Test the endpoint at `/api/health`.

### POST example with validation

```js
export async function POST(request) {
  let body;

  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "Invalid JSON" }, { status: 400 });
  }

  if (typeof body.name !== "string" || body.name.trim().length === 0) {
    return Response.json({ error: "Name is required" }, { status: 400 });
  }

  return Response.json(
    { message: "Received", name: body.name.trim() },
    { status: 201 }
  );
}
```

This is a demonstration, not a complete production endpoint. Real write endpoints must authenticate and authorize the caller, validate all fields, apply rate limits where appropriate, and persist data safely.

### Route Handler vs Server Action

Use Route Handlers when you need an HTTP API, for example for a mobile client, webhook, or third-party integration. Server Actions are useful for mutations initiated by your own application UI. Neither automatically replaces authentication, authorization, validation, or CSRF-aware design.

## 13. Forms and Server Actions

Server Actions let you define server-side functions that can be invoked from supported React form or UI flows. They are useful for creating and updating records.

```jsx
// app/actions.js
"use server";

export async function submitContact(formData) {
  const name = String(formData.get("name") ?? "").trim();
  const email = String(formData.get("email") ?? "").trim();

  if (!name || !email) {
    return { error: "Name and email are required." };
  }

  // Validate the email, apply rate limiting, and save through a
  // trusted server-side service in a real application.
  return { success: true };
}
```

Example form:

```jsx
import { submitContact } from "./actions";

export default function ContactPage() {
  return (
    <form action={submitContact} className="space-y-4">
      <label className="block">
        Name
        <input className="mt-1 block w-full rounded border p-2" name="name" required />
      </label>
      <label className="block">
        Email
        <input className="mt-1 block w-full rounded border p-2" name="email" type="email" required />
      </label>
      <button className="rounded bg-blue-600 px-4 py-2 text-white" type="submit">
        Send
      </button>
    </form>
  );
}
```

This minimal example shows the shape of a form action; it does not display the returned state. For a real form, use the supported state pattern for your Next.js/React version to show validation messages and success feedback.

Treat every Server Action as a public-facing endpoint: verify the current user, check their permission to perform the requested action, validate all input on the server, and avoid trusting hidden form fields.

## 14. Styling with Tailwind CSS

Tailwind CSS works naturally with Next.js. If Tailwind was selected during project creation, the starter may already be configured.

Example responsive page:

```jsx
export default function FeaturesPage() {
  const features = [
    { title: "Fast workflow", text: "Build pages with reusable components." },
    { title: "Responsive UI", text: "Create layouts for different screen sizes." },
    { title: "SEO foundations", text: "Define metadata for important routes." },
  ];

  return (
    <main className="mx-auto max-w-6xl px-4 py-12">
      <h1 className="text-3xl font-bold tracking-tight sm:text-5xl">
        Build with Next.js
      </h1>
      <div className="mt-8 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <article key={feature.title} className="rounded-xl border p-5 shadow-sm">
            <h2 className="text-xl font-semibold">{feature.title}</h2>
            <p className="mt-2 text-slate-600">{feature.text}</p>
          </article>
        ))}
      </div>
    </main>
  );
}
```

Keep your Tailwind setup aligned with its major version. v3 and v4 use different configuration patterns. If styles do not appear, verify the global CSS import, installed version, source detection, and build output.

## 15. Images, Fonts, and Static Assets

### Public folder

Files in `public/` can be referenced from the root URL. For example, `public/images/logo.png` is available at `/images/logo.png`.

```jsx
<img src="/images/logo.png" alt="Site logo" />
```

For optimized responsive images, prefer Next.js's `Image` component when appropriate:

```jsx
import Image from "next/image";

export default function Logo() {
  return (
    <Image
      src="/images/logo.png"
      alt="Site logo"
      width={160}
      height={48}
      priority
    />
  );
}
```

Use `priority` only for important above-the-fold images such as a likely LCP image. Do not mark every image as priority. For remote images, configure permitted remote image patterns according to your Next.js version.

### Fonts

Next.js provides `next/font` to help self-host or optimize supported fonts.

```jsx
import { Inter } from "next/font/google";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
});

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
```

The example assumes the build environment can access the font source when building. For offline or restricted environments, consider locally available font files with the supported local-font API.

### Common asset mistakes

- Putting an image in `src/images/` but referencing it as `/images/name.png`.
- Using the wrong filename capitalization.
- Referencing an image that has not been committed or deployed.
- Forgetting to configure remote image hosts.
- Using a source path that is valid on a developer's machine but not in production.

## 16. Metadata and SEO

Next.js provides Metadata API support for titles, descriptions, icons, Open Graph information, and more.

### Static metadata

```jsx
export const metadata = {
  title: "Next.js Guide",
  description: "Learn Next.js routing, rendering, and data fetching.",
  openGraph: {
    title: "Next.js Guide",
    description: "A practical guide for web developers.",
    type: "article",
  },
};
```

### Dynamic metadata

```jsx
export async function generateMetadata({ params }) {
  const { slug } = await params;
  const post = await getPostBySlug(slug);

  if (!post) {
    return { title: "Article not found" };
  }

  return {
    title: post.title,
    description: post.description,
    alternates: {
      canonical: `https://example.com/blog/${slug}`,
    },
    openGraph: {
      title: post.title,
      description: post.description,
      type: "article",
    },
  };
}
```

`getPostBySlug` is an illustrative application function; implement it using your actual content source. Replace `https://example.com` with your production domain. In some versions, route parameters and metadata APIs differ, so consult current docs.

SEO checklist:

- Unique, accurate title and description for each indexable page.
- A canonical URL where appropriate.
- Open Graph image and social metadata.
- Descriptive headings and useful content.
- Accessible links and meaningful image alt text.
- Sitemap and robots rules that reflect the routes you want indexed.
- Avoid indexing private, duplicate, staging, or low-value routes.
- Validate structured data if you publish JSON-LD.

Metadata helps search engines understand pages but cannot guarantee rankings.

## 17. Caching and Revalidation

Caching behavior is version- and API-dependent. Do not assume that every `fetch` is cached or that every request is always fresh. Read the caching documentation for your installed Next.js version.

A time-based revalidation example in versions supporting the `next.revalidate` fetch option:

```js
const response = await fetch("https://example.com/api/posts", {
  next: { revalidate: 300 },
});
```

This requests revalidation on a five-minute interval for compatible caching behavior. Actual behavior depends on the route, request, cache configuration, and Next.js version.

### On-demand revalidation

After updating content, a server-side mutation can revalidate a path or tag using supported APIs such as `revalidatePath` or `revalidateTag`.

```js
"use server";

import { revalidatePath } from "next/cache";

export async function refreshBlogPage() {
  revalidatePath("/blog");
}
```

This example shows the API shape only. In a real mutation, authenticate and authorize the caller and revalidate the relevant path after a successful update. Avoid revalidating broad areas unnecessarily.

### Cache decision checklist

Ask:

- Is the data public or user-specific?
- How frequently does it change?
- Can stale content be shown briefly?
- Should updates invalidate a path or tag?
- Does the route use dynamic request data?
- Could caching accidentally expose one user's data to another?

Never share cached private data across users without a design that guarantees correct isolation.

## 18. Environment Variables and Secrets

Store server secrets in environment variables, usually in `.env.local` during local development.

```env
DATABASE_URL="your-database-connection-string"
AUTH_SECRET="use-a-long-random-secret"
```

Read them on the server:

```js
const databaseUrl = process.env.DATABASE_URL;

if (!databaseUrl) {
  throw new Error("DATABASE_URL is not configured");
}
```

Important rules:

- Do not commit real `.env.local` files to Git.
- Add the relevant environment file to `.gitignore`.
- Do not hardcode database passwords, API secrets, or signing keys.
- Variables prefixed with `NEXT_PUBLIC_` are intended to be exposed to client bundles; never use that prefix for secrets.
- Configure production environment variables in your hosting provider's settings.
- Restart the development server after changing environment configuration when required.
- Rotate any secret that has accidentally been exposed.

An environment variable is not secure merely because it is called a secret. Its safety depends on where it is read and whether it reaches the client.

## 19. Authentication and Authorization

Authentication answers **who is signed in?** Authorization answers **what is that person allowed to do?**

Typical authentication flow:

1. User submits credentials or uses a trusted identity provider.
2. The server verifies the identity.
3. A session or token is created securely.
4. The application checks the session on protected requests.
5. The server checks permissions before reading or changing protected records.

Use a maintained authentication library or identity provider appropriate to the project. Avoid inventing your own password hashing, session, or token protocol.

### Protect data on the server

```js
// Illustrative pseudocode: replace with your authentication implementation.
export async function requireUser() {
  const user = await getCurrentUser();

  if (!user) {
    throw new Error("Unauthorized");
  }

  return user;
}
```

The `getCurrentUser` function is not built into Next.js; it represents your auth provider's session lookup. Use appropriate redirects or HTTP error responses for your application.

Security rules:

- Verify authentication inside server-side data access and mutation functions.
- Check resource ownership or role permissions on every protected operation.
- Never rely only on hiding a button in the UI.
- Validate input on the server.
- Use secure cookie settings and an appropriate session strategy.
- Rate-limit sensitive endpoints and implement account recovery safely.
- Never return private fields from database records to the client.

## 20. Database Integration

Next.js can query a database from server-only code. Common choices include PostgreSQL, MySQL, SQLite, and MongoDB. Choose a driver or ORM that supports your runtime and deployment environment.

A conceptual module structure:

```text
lib/
├── db.js
├── posts.js
└── auth.js
```

Example pattern:

```js
// lib/posts.js
import "server-only";
import { db } from "./db";

export async function getPublishedPosts() {
  return db.post.findMany({
    where: { published: true },
    orderBy: { createdAt: "desc" },
    select: {
      id: true,
      slug: true,
      title: true,
      description: true,
    },
  });
}
```

This example assumes a database client with a Prisma-like API and a model named `post`; it is not a complete database setup. Create and export `db` in `lib/db.js`, configure the schema and environment variables, and follow the ORM's production connection guidance.

Database best practices:

- Keep database access in server-only modules.
- Use parameterized queries or ORM APIs that safely parameterize input.
- Validate inputs before querying.
- Apply access rules in data functions.
- Select only the fields the page needs.
- Add indexes based on query patterns.
- Handle connection limits and pooling for serverless deployment.
- Keep migrations under version control and back up important data.

## 21. Performance and Security

### Performance checklist

- Prefer Server Components for content and data access that does not require client interactivity.
- Keep Client Components small.
- Use `next/image` where it provides value.
- Load fonts thoughtfully.
- Avoid unnecessary client-side fetching and duplicate requests.
- Paginate large lists.
- Use caching and revalidation intentionally.
- Analyze bundle size and production build output.
- Measure real page performance instead of guessing.

### Security checklist

- Validate and normalize input on the server.
- Authenticate and authorize every sensitive operation.
- Keep secrets in server-only code.
- Use parameterized database queries.
- Restrict file uploads by type, size, and content; never trust filenames.
- Verify webhook signatures.
- Avoid rendering untrusted HTML without safe sanitization.
- Use appropriate security headers and HTTPS in production.
- Do not expose stack traces, secrets, or private database fields.
- Keep dependencies updated and review advisories.

Next.js gives you useful primitives, but application security remains the developer's responsibility.

## 22. Testing and Debugging

### Useful commands

```bash
npm run dev
npm run build
npm run start
npm ls next react react-dom
```

Use the scripts that actually exist in your `package.json`. Run a production build before deployment so build-time errors do not surprise you later.

### Test important paths

- Home page and navigation.
- Dynamic routes with valid and invalid slugs.
- Loading, empty, and error states.
- Form validation and authorization.
- Mobile and desktop layouts.
- Images and fonts on the deployed domain.
- Metadata and canonical URLs.
- API responses for valid, invalid, unauthenticated, and unauthorized requests.

### Debugging workflow

1. Read the first meaningful error in the terminal.
2. Check the file and line mentioned.
3. Confirm the import path and filename capitalization.
4. Check whether the component needs `"use client"`.
5. Confirm route file conventions and parameter APIs for your version.
6. Check environment variables without printing secret values.
7. Reproduce locally and test a production build.
8. Inspect deployment logs if local behavior differs from production.

Change one related thing at a time so you can identify which change fixed the issue.

## 23. Deployment

### Deploying to Vercel

A common workflow is:

1. Push the project to a Git repository.
2. Import the repository into Vercel.
3. Confirm the root directory and build settings.
4. Add required environment variables.
5. Deploy and inspect build logs.
6. Test authentication, database access, images, and dynamic routes on the deployed URL.
7. Configure a custom domain if desired.

Do not commit secrets to Git to make deployment work. Add them through the hosting platform's environment variable settings.

### Self-hosting on a VPS

Self-hosting may involve:

- Installing a compatible Node.js runtime.
- Installing dependencies and building the app.
- Running the production server with an appropriate process manager.
- Configuring a reverse proxy such as Nginx.
- Enabling HTTPS and firewall rules.
- Setting production environment variables securely.
- Monitoring logs, restarts, memory use, and backups.

A VPS setup is not identical to Vercel. Some features may require additional configuration depending on the runtime, filesystem, image optimization, and caching requirements. Test the actual deployment architecture before relying on it.

## 24. Common Errors and Solutions

### `window is not defined`

A component is accessing a browser API during server rendering. Move browser-only code into a Client Component and use it in an appropriate event handler or effect.

### `useState` or `useEffect` is not supported in Server Components

Add `"use client"` to the component file that needs client-side React hooks, or move the interactive portion into a separate Client Component.

### `params` API error

Your code may use an older route-parameter pattern. Check the installed Next.js version and whether `params` must be awaited in that version.

### Page returns 404 for a Markdown post

Verify that the file exists in the expected directory, the filename exactly matches the slug, the extension is correct, and the code is reading from the intended working directory. Check filename capitalization on case-sensitive deployment environments.

### Environment variable is undefined

Confirm the variable name, local `.env` filename, deployment settings, and whether the code runs on the server or client. Restart the server if necessary. Never expose a secret by renaming it with `NEXT_PUBLIC_`.

### Database connection fails in production

Check the connection string, database network access, allowed IP ranges, credentials, TLS requirements, connection pooling, and whether the hosting runtime supports the selected database driver.

### Image returns 404

Confirm the file is in `public/` at the expected path and that the path begins with `/`. Check exact capitalization and make sure the file was committed and deployed. For remote images, review the image host configuration.

### Build succeeds locally but fails in deployment

Check Node.js version compatibility, lockfile consistency, environment variables, file capitalization, build logs, and whether local-only files are missing from Git.

### Styles work locally but not in production

Check Tailwind's installed version, CSS imports, source detection, dynamic class names, and production build output.

### Route Handler returns the wrong response

Verify the exported HTTP method, route location, request body parsing, validation, response status, and whether a `page` and `route` file conflict in the same segment.

## 25. Practice Projects

### Project 1: Personal portfolio

**Features:** home page, about section, skills, project cards, contact form, responsive navigation.

**Learn:** layouts, components, Tailwind, metadata, image optimization, deployment.

### Project 2: Markdown blog

**Features:** article listing, dynamic slug routes, category filters, table of contents, related posts, reading time.

**Learn:** dynamic routes, content loading, metadata, not-found states, static params, SEO.

### Project 3: Task manager

**Features:** sign-in, task CRUD, filters, status, due dates, protected dashboard.

**Learn:** forms, database integration, authorization, server mutations, validation, loading and error states.

### Project 4: SaaS dashboard

**Features:** user workspace, settings, charts, team roles, subscription UI.

**Learn:** nested layouts, authentication, role checks, server/client boundaries, caching, and performance.

### Project 5: Documentation website

**Features:** searchable documentation, sidebar navigation, dynamic pages, code examples, dark mode.

**Learn:** dynamic routes, accessible navigation, reusable layouts, metadata, search, and content organization.

### Suggested 14-day learning plan

- Days 1–2: project setup, JSX refresh, pages, layouts, and navigation.
- Days 3–4: dynamic routes, route parameters, not-found and loading states.
- Days 5–6: Server Components, Client Components, and data fetching.
- Days 7–8: Route Handlers, forms, validation, and server mutations.
- Days 9–10: Tailwind styling, images, fonts, and metadata.
- Days 11–12: database, authentication, authorization, and environment variables.
- Day 13: error handling, testing, and performance.
- Day 14: production build, deployment, and project documentation.

Treat this as a flexible plan. Build small working examples before adding all features to one large application.

## 26. Interview Questions and Answers

### 1. What is Next.js?

Next.js is a React framework that adds file-system routing, rendering options, server-side functionality, metadata APIs, and production tooling.

### 2. What is the App Router?

The App Router is Next.js's route system based on the `app` directory, with support for layouts, nested routes, Server Components, loading states, and error boundaries.

### 3. What is the difference between React and Next.js?

React is a UI library. Next.js is a framework built on React that provides application routing, rendering and server capabilities, and production conventions.

### 4. What is a layout?

A layout is shared UI defined in a `layout` file that wraps pages in its route segment and can persist across navigation.

### 5. What is a dynamic route?

A route with a variable segment, such as `app/blog/[slug]/page.jsx`, can serve different content based on the URL parameter.

### 6. What are Server Components?

They are components rendered in the server environment and are useful for data access and content that does not require client-side interactivity.

### 7. What are Client Components?

Components marked with `"use client"` that can use client-side state, effects, event handlers, and browser APIs.

### 8. Does a Client Component always render only in the browser?

No. Client Components can be pre-rendered to HTML in supported Next.js rendering flows, but their interactive code is delivered to the browser.

### 9. When should you use `"use client"`?

When a component needs client-side hooks, event handlers, browser APIs, or other client-only capabilities. Keep this boundary as small as practical.

### 10. What is a Route Handler?

A Route Handler is an HTTP endpoint defined by a `route.js` or `route.ts` file in the App Router.

### 11. What is a Server Action?

A server-side function invoked through supported React/Next.js interaction patterns, often for form submissions or mutations. It still needs validation and authorization.

### 12. How do you handle a missing dynamic route record?

Check whether the record exists and call `notFound()` when it does not, so the user receives the correct not-found UI.

### 13. What is `generateMetadata`?

A function that can generate route metadata dynamically, for example from an article title and description.

### 14. How do you keep secrets safe?

Read secrets only in server-side code, store them in environment variables, avoid exposing them through `NEXT_PUBLIC_`, and never return them to the browser.

### 15. What is the purpose of `loading.jsx`?

It defines loading UI for a route segment, which can provide feedback while content loads or streams.

### 16. What is the purpose of `error.jsx`?

It defines a route-segment error boundary UI. In the App Router convention, the error file is a Client Component and can provide a retry action.

### 17. How do you optimize images?

Use `next/image` when appropriate, provide dimensions or a supported fill layout, use descriptive alt text, configure remote hosts, and prioritize only images that truly need it.

### 18. What is revalidation?

Revalidation is a mechanism to refresh cached data or rendered output based on time or an explicit invalidation signal, depending on the API and Next.js version.

### 19. How do you protect a dashboard?

Authenticate the user and authorize their role or resource ownership on the server for every protected data request and mutation. Hiding the dashboard link is not sufficient.

### 20. How do you deploy a Next.js app?

Commonly, push the repository to a supported host, configure build settings and environment variables, deploy, then test routes, data access, and runtime behavior. Self-hosting requires additional server operations.

### 21. What causes `window is not defined`?

Server-side code is trying to access a browser-only global. Move that code to a client-only context and use it at the correct lifecycle point.

### 22. What is the difference between `Link` and `router.push`?

`Link` is usually best for ordinary navigation. `router.push` performs navigation programmatically in a Client Component after an interaction or other client-side event.

### 23. Why should you avoid fetching your own API from a Server Component?

It can add an unnecessary HTTP request. When possible, call a shared server-side data function directly, with the same authorization and validation rules.

### 24. What is the `public` directory used for?

It stores static assets referenced from root-relative paths, such as `/images/logo.png`.

### 25. What should be checked before production deployment?

Run a production build, configure environment variables, verify authentication and authorization, test all routes and assets, inspect logs, and check responsive behavior and metadata.

## 27. Quick Reference

| Need | Next.js convention |
|---|---|
| Home page | `app/page.jsx` |
| Shared root layout | `app/layout.jsx` |
| About page | `app/about/page.jsx` |
| Dynamic article | `app/blog/[slug]/page.jsx` |
| API endpoint | `app/api/name/route.js` |
| Loading UI | `app/loading.jsx` or segment `loading.jsx` |
| Error boundary | `app/error.jsx` or segment `error.jsx` |
| Not-found page | `app/not-found.jsx` |
| Static metadata | `export const metadata = { ... }` |
| Dynamic metadata | `export async function generateMetadata(...)` |
| Client boundary | `"use client"` |
| Server Action | `"use server"` in a supported action module/function |
| Internal navigation | `next/link` |
| Programmatic navigation | `useRouter` from `next/navigation` in a Client Component |
| Static asset | `public/images/name.png` → `/images/name.png` |
| Static dynamic-route list | `generateStaticParams` |
| Revalidate a path | `revalidatePath` from `next/cache` |
| Local development | `npm run dev` |
| Production build | `npm run build` |
| Production server | `npm run start` if configured |

## Conclusion

Next.js becomes easier when you understand the App Router and keep server work separate from browser interactivity. Start with pages, layouts, and navigation; then learn dynamic routes, data fetching, and Server/Client Components. Add databases and authentication only after you understand the basics, and always test security and behavior in production-like conditions.

For the latest version-specific APIs, setup instructions, caching behavior, and migration notes, use the official documentation: https://nextjs.org/docs
