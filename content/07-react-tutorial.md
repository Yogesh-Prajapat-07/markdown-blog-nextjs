---
title: "React Tutorial"
description: "A complete React tutorial covering components, JSX, props, state, hooks, forms, routing, API requests, performance, testing, projects, and interview questions."
slug: "react-tutorial"
date: "2026-10-22"
author: "Yogesh"
image: "/images/react.png"
category: "Web Development"
---

# React Tutorial 

React is a JavaScript library for building user interfaces. It helps developers create reusable components and update the interface when application data changes. This guide moves from the basics to advanced patterns, with practical examples and project ideas.

Examples use modern React function components and hooks. Some examples assume a project created with a modern tool such as Vite. Install packages and check their current documentation when setting up a real project.

## Table of Contents

1. [What Is React?](#what-is-react)
2. [Prerequisites](#prerequisites)
3. [Creating a React Project](#creating-a-react-project)
4. [Understanding JSX](#understanding-jsx)
5. [Components](#components)
6. [Props](#props)
7. [Rendering Lists and Keys](#rendering-lists-and-keys)
8. [Conditional Rendering](#conditional-rendering)
9. [Events](#events)
10. [State with useState](#state-with-usestate)
11. [Working with Forms](#working-with-forms)
12. [Sharing State and Lifting State Up](#sharing-state-and-lifting-state-up)
13. [useEffect and Side Effects](#useeffect-and-side-effects)
14. [Fetching API Data](#fetching-api-data)
15. [Context API](#context-api)
16. [useReducer](#usereducer)
17. [Custom Hooks](#custom-hooks)
18. [Refs with useRef](#refs-with-useref)
19. [React Router](#react-router)
20. [Styling React Components](#styling-react-components)
21. [Component Composition](#component-composition)
22. [Performance Optimization](#performance-optimization)
23. [Error Boundaries and Suspense](#error-boundaries-and-suspense)
24. [Testing React Components](#testing-react-components)
25. [Accessibility and Security](#accessibility-and-security)
26. [React with TypeScript](#react-with-typescript)
27. [React and Next.js](#react-and-nextjs)
28. [Recommended Project Structure](#recommended-project-structure)
29. [Practice Projects](#practice-projects)
30. [Interview Questions and Answers](#interview-questions-and-answers)

## 1. What Is React?

React is a JavaScript library maintained by Meta and the open-source community. It is used to build user interfaces from small, reusable pieces called components.

### Why use React?

- Build reusable UI components.
- Describe UI declaratively based on data.
- Manage changing data with state.
- Organize complex interfaces into smaller parts.
- Use a large ecosystem of tools and libraries.

React is a library, not a complete application framework by itself. Routing, data fetching, and application architecture may require additional tools or a framework such as Next.js.

## 2. Prerequisites

Before learning React, become comfortable with:

- HTML elements and forms
- CSS, responsive layouts, and Flexbox/Grid
- JavaScript variables, functions, arrays, and objects
- Array methods such as `map()`, `filter()`, and `find()`
- ES modules (`import` and `export`)
- Promises, `async`/`await`, and `fetch()`
- Basic DOM concepts

You do not need to master every JavaScript feature before starting, but strong fundamentals make React easier to learn.

## 3. Creating a React Project

A common way to start a client-rendered React project is Vite.

```bash
npm create vite@latest my-react-app -- --template react
cd my-react-app
npm install
npm run dev
```

Follow the terminal output to open the local development URL. For a TypeScript template, use `--template react-ts`.

A basic project often contains:

```text
my-react-app/
├── public/
├── src/
│   ├── App.jsx
│   ├── main.jsx
│   └── index.css
├── index.html
└── package.json
```

`main.jsx` mounts the React application:

```jsx
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import App from "./App.jsx";
import "./index.css";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
```

The HTML file needs an element such as `<div id="root"></div>`. `StrictMode` helps reveal some problems during development; it does not affect the production build in the same way.

## 4. Understanding JSX

JSX is a syntax extension that lets you write markup-like expressions inside JavaScript. Build tools transform JSX into JavaScript instructions React can use.

```jsx
function App() {
  const name = "Yogi";

  return (
    <main>
      <h1>Hello, {name}!</h1>
      <p>Welcome to React.</p>
    </main>
  );
}

export default App;
```

### JSX rules

- Return one parent element, or use a fragment (`<>...</>`).
- Close tags, including self-closing tags such as `<img />`.
- Use `className` instead of HTML's `class`.
- Use camelCase for most DOM event and property names, such as `onClick`.
- Put JavaScript expressions inside curly braces.
- Use `htmlFor` instead of `for` on a label.
- A JSX expression can contain values and expressions, but not arbitrary statement blocks such as `if` directly inside the braces.

Example with a fragment:

```jsx
function Profile() {
  return (
    <>
      <h2>Profile</h2>
      <p>Frontend developer</p>
    </>
  );
}
```

## 5. Components

A component is a reusable piece of UI. React function components are JavaScript functions that return React elements.

```jsx
function Welcome() {
  return <h2>Welcome to YogiBlog!</h2>;
}

function App() {
  return (
    <main>
      <Welcome />
      <Welcome />
    </main>
  );
}

export default App;
```

Component names should begin with a capital letter. Keep components focused and give them clear responsibilities. A component can render other components to build a larger interface.

### Exporting components

Named export:

```jsx
export function Header() {
  return <header>YogiBlog</header>;
}
```

Import it using braces:

```jsx
import { Header } from "./Header.jsx";
```

Default export:

```jsx
export default function Footer() {
  return <footer>Copyright YogiBlog</footer>;
}
```

Import a default export without braces:

```jsx
import Footer from "./Footer.jsx";
```

## 6. Props

Props pass information from a parent component to a child. Treat props as read-only.

```jsx
function BlogCard({ title, description, author }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{description}</p>
      <small>By {author}</small>
    </article>
  );
}

function App() {
  return (
    <BlogCard
      title="React Basics"
      description="Learn reusable UI components."
      author="Yogi"
    />
  );
}
```

Props can contain strings, numbers, arrays, objects, functions, or React elements. A parent can pass a callback so a child can request an action without directly modifying the parent's state.

### The `children` prop

Content placed between a component's opening and closing tags is passed through `children`.

```jsx
function Card({ children }) {
  return <section className="card">{children}</section>;
}

function App() {
  return (
    <Card>
      <h2>Reusable Card</h2>
      <p>This content is passed as children.</p>
    </Card>
  );
}
```

## 7. Rendering Lists and Keys

Use JavaScript array methods to render collections.

```jsx
const technologies = ["React", "Next.js", "Node.js"];

function TechnologyList() {
  return (
    <ul>
      {technologies.map((technology) => (
        <li key={technology}>{technology}</li>
      ))}
    </ul>
  );
}
```

React uses keys to match list items between renders. Prefer stable, unique IDs from the data. Avoid array indexes as keys when items can be inserted, removed, or reordered.

```jsx
const posts = [
  { id: "post-1", title: "React Basics" },
  { id: "post-2", title: "Understanding Hooks" }
];

function PostList() {
  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}
```

## 8. Conditional Rendering

Render different UI based on conditions.

```jsx
function LoginStatus({ isLoggedIn }) {
  if (isLoggedIn) {
    return <p>Welcome back!</p>;
  }

  return <p>Please sign in.</p>;
}
```

You can also use a ternary expression:

```jsx
function Status({ loading }) {
  return <p>{loading ? "Loading..." : "Ready"}</p>;
}
```

Use `&&` for simple conditional content, but be careful when the left side can be the number `0`, because React may render that zero:

```jsx
{items.length > 0 && <p>You have items.</p>}
```

## 9. Events

React event handlers are passed as functions.

```jsx
function SaveButton() {
  function handleSave() {
    console.log("Saved");
  }

  return <button onClick={handleSave}>Save</button>;
}
```

Pass the function itself rather than calling it during render. Use an arrow function when you need to pass arguments:

```jsx
function DeleteButton({ postId, onDelete }) {
  return (
    <button onClick={() => onDelete(postId)}>
      Delete
    </button>
  );
}
```

For events such as form submission, use `event.preventDefault()` when you need to stop the browser's default navigation or submission behavior.

## 10. State with useState

State is data that React remembers between renders. When state changes, React schedules an update to render the component again.

```jsx
import { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  return (
    <section>
      <p>Count: {count}</p>
      <button onClick={() => setCount(count + 1)}>Increase</button>
      <button onClick={() => setCount(0)}>Reset</button>
    </section>
  );
}

export default Counter;
```

### Functional state updates

When the next value depends on the previous value, use a functional updater:

```jsx
setCount((previousCount) => previousCount + 1);
```

This is especially important when multiple updates are queued.

### Updating objects

Do not mutate an object in state directly. Create a new object:

```jsx
const [user, setUser] = useState({ name: "Yogi", city: "Ahmedabad" });

function updateCity() {
  setUser((previousUser) => ({
    ...previousUser,
    city: "Jaipur"
  }));
}
```

### Updating arrays

```jsx
const [tasks, setTasks] = useState(["Learn React"]);

function addTask() {
  setTasks((previousTasks) => [...previousTasks, "Build a project"]);
}
```

Use immutable update patterns so React can correctly observe state changes.

## 11. Working with Forms

Controlled inputs have their current values driven by React state.

```jsx
import { useState } from "react";

function ContactForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    console.log({ name, email });
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="name">Name</label>
      <input
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        required
      />

      <label htmlFor="email">Email</label>
      <input
        id="email"
        type="email"
        value={email}
        onChange={(event) => setEmail(event.target.value)}
        required
      />

      <button type="submit">Send</button>
    </form>
  );
}
```

Good form practices:

- Give each input an associated label.
- Validate user input.
- Show clear error and success messages.
- Disable duplicate submission when appropriate.
- Validate again on the server; browser validation is not a security boundary.
- Avoid logging sensitive form data in production.

For a small form, a few state variables may be enough. For complex forms, consider a form library after understanding React's basics.

## 12. Sharing State and Lifting State Up

If two components need the same data, place the state in their closest common parent and pass values and callbacks through props. This pattern is called lifting state up.

```jsx
import { useState } from "react";

function SearchInput({ query, onQueryChange }) {
  return (
    <input
      value={query}
      onChange={(event) => onQueryChange(event.target.value)}
      placeholder="Search posts..."
    />
  );
}

function SearchResults({ query }) {
  return <p>Searching for: {query || "everything"}</p>;
}

function App() {
  const [query, setQuery] = useState("");

  return (
    <main>
      <SearchInput query={query} onQueryChange={setQuery} />
      <SearchResults query={query} />
    </main>
  );
}
```

This keeps one source of truth for the shared value.

## 13. useEffect and Side Effects

`useEffect` synchronizes a component with external systems, such as subscriptions, timers, or browser APIs. It is not needed for every calculation or event handler.

```jsx
import { useEffect, useState } from "react";

function WindowWidth() {
  const [width, setWidth] = useState(0);

  useEffect(() => {
    function updateWidth() {
      setWidth(window.innerWidth);
    }

    updateWidth();
    window.addEventListener("resize", updateWidth);

    return () => {
      window.removeEventListener("resize", updateWidth);
    };
  }, []);

  return <p>Window width: {width}px</p>;
}
```

### Dependency arrays

- No dependency array: the effect runs after every committed render.
- `[]`: the effect runs on mount in the normal production lifecycle; development Strict Mode may run an additional setup/cleanup cycle to help reveal bugs.
- `[value]`: the effect re-runs when a dependency changes.

Include the reactive values used by the effect. Clean up subscriptions, timers, and other resources when appropriate.

Do not use an effect merely to derive one piece of state from another when you can calculate it during render:

```jsx
const fullName = `${firstName} ${lastName}`;
```

This is simpler than maintaining a separate state variable and synchronizing it with an effect.

## 14. Fetching API Data

API calls are a common use case for asynchronous code. Track loading, data, and error states so the interface communicates what is happening.

```jsx
import { useEffect, useState } from "react";

function Posts() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const controller = new AbortController();

    async function loadPosts() {
      try {
        const response = await fetch(
          "https://jsonplaceholder.typicode.com/posts?_limit=5",
          { signal: controller.signal }
        );

        if (!response.ok) {
          throw new Error(`Request failed: ${response.status}`);
        }

        const data = await response.json();
        setPosts(data);
      } catch (err) {
        if (err.name !== "AbortError") {
          setError(err.message || "Unable to load posts.");
        }
      } finally {
        if (!controller.signal.aborted) {
          setLoading(false);
        }
      }
    }

    loadPosts();

    return () => controller.abort();
  }, []);

  if (loading) return <p>Loading posts...</p>;
  if (error) return <p role="alert">Error: {error}</p>;

  return (
    <ul>
      {posts.map((post) => (
        <li key={post.id}>{post.title}</li>
      ))}
    </ul>
  );
}

export default Posts;
```

The example uses a public demonstration API. A production application needs appropriate server-side validation, authorization where required, and a clear plan for caching and request errors. For larger applications, consider a dedicated data-fetching or server-state library.

## 15. Context API

Context lets components read shared values without passing props through every intermediate component. It can help with themes, locale, or current-user information.

```jsx
import { createContext, useContext, useState } from "react";

const ThemeContext = createContext(null);

function ThemeButton() {
  const context = useContext(ThemeContext);

  return (
    <button onClick={() => context.setTheme(
      context.theme === "light" ? "dark" : "light"
    )}>
      Current theme: {context.theme}
    </button>
  );
}

function App() {
  const [theme, setTheme] = useState("light");

  return (
    <ThemeContext.Provider value={{ theme, setTheme }}>
      <main data-theme={theme}>
        <ThemeButton />
      </main>
    </ThemeContext.Provider>
  );
}
```

Context is not automatically a complete state-management solution. Keep context values focused, and avoid putting frequently changing unrelated state into one giant provider.

## 16. useReducer

`useReducer` is useful when state transitions are more involved or several actions update the same state.

```jsx
import { useReducer } from "react";

function reducer(state, action) {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };
    case "decrement":
      return { count: state.count - 1 };
    case "reset":
      return { count: 0 };
    default:
      throw new Error(`Unknown action: ${action.type}`);
  }
}

function Counter() {
  const [state, dispatch] = useReducer(reducer, { count: 0 });

  return (
    <section>
      <p>{state.count}</p>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
    </section>
  );
}
```

A reducer receives the current state and an action, then returns the next state. Keep reducers pure: they should not perform network requests or mutate external values.

## 17. Custom Hooks

A custom hook extracts reusable stateful logic. Its name should begin with `use`, and it can call other hooks.

```jsx
import { useState } from "react";

function useToggle(initialValue = false) {
  const [value, setValue] = useState(initialValue);

  function toggle() {
    setValue((previousValue) => !previousValue);
  }

  return [value, toggle];
}

function Details() {
  const [isOpen, toggleOpen] = useToggle();

  return (
    <section>
      <button onClick={toggleOpen}>
        {isOpen ? "Hide details" : "Show details"}
      </button>
      {isOpen && <p>These details are now visible.</p>}
    </section>
  );
}
```

Custom hooks share logic, not a single state instance. Each component that calls a hook normally gets its own hook state unless the hook interacts with a shared external store or context.

## 18. Refs with useRef

`useRef` stores a mutable value that persists between renders without causing a re-render when it changes. Refs are also used to access DOM elements.

```jsx
import { useRef } from "react";

function SearchBox() {
  const inputRef = useRef(null);

  function focusInput() {
    inputRef.current?.focus();
  }

  return (
    <div>
      <input ref={inputRef} placeholder="Search..." />
      <button onClick={focusInput}>Focus input</button>
    </div>
  );
}
```

Use state for values that affect rendered UI. Use refs for imperative DOM access, timer IDs, and other mutable values that do not need to trigger a render.

## 19. React Router

A client-side router maps URLs to views in a single-page React application. React itself does not include a general-purpose router; React Router is one common option.

Install it in a Vite project:

```bash
npm install react-router
```

A basic example using the current declarative API style:

```jsx
import { BrowserRouter, Link, Route, Routes } from "react-router";
import { createRoot } from "react-dom/client";

function Home() {
  return <h1>Home</h1>;
}

function About() {
  return <h1>About</h1>;
}

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to="/">Home</Link>
        <Link to="/about">About</Link>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </BrowserRouter>
  );
}

createRoot(document.getElementById("root")).render(<App />);
```

Routing packages can change APIs across major versions. Follow the documentation for the version installed in your project, and configure your hosting platform to serve the application entry point for client-side routes.

## 20. Styling React Components

React can work with ordinary CSS, CSS Modules, utility frameworks such as Tailwind CSS, or component libraries.

### CSS class

```jsx
function Welcome() {
  return <h1 className="welcome-title">Welcome to React</h1>;
}
```

```css
.welcome-title {
  color: #2563eb;
  font-size: 2rem;
}
```

### Inline styles

```jsx
function Badge() {
  return (
    <span style={{ backgroundColor: "navy", color: "white", padding: "4px 8px" }}>
      New
    </span>
  );
}
```

Inline style property names use camelCase, and numeric values for many CSS properties are treated as pixel values. Prefer CSS classes for complex styling, responsive design, hover states, and maintainability.

### Tailwind CSS

```jsx
function Card() {
  return (
    <article className="rounded-xl border p-6 shadow-sm">
      <h2 className="text-xl font-bold">React Tutorial</h2>
      <p className="mt-2 text-gray-600">Learn by building projects.</p>
    </article>
  );
}
```

Make sure Tailwind is installed and configured for the version your project uses.

## 21. Component Composition

Composition means building larger UI pieces by combining smaller components. It is often more flexible than creating deep inheritance hierarchies.

```jsx
function PageLayout({ header, children, footer }) {
  return (
    <>
      <header>{header}</header>
      <main>{children}</main>
      <footer>{footer}</footer>
    </>
  );
}

function App() {
  return (
    <PageLayout
      header={<h1>YogiBlog</h1>}
      footer={<p>Keep learning.</p>}
    >
      <article>
        <h2>React Components</h2>
        <p>Compose small components into a complete page.</p>
      </article>
    </PageLayout>
  );
}
```

Composition makes components reusable without forcing them to know every detail of their content.

## 22. Performance Optimization

Start by writing clear code and measuring actual performance. Not every component needs memoization.

### React.memo

`memo` can skip some re-renders when a component receives the same props, subject to its comparison behavior.

```jsx
import { memo } from "react";

const UserName = memo(function UserName({ name }) {
  console.log("Rendering UserName");
  return <p>{name}</p>;
});

export default UserName;
```

### useMemo

`useMemo` caches the result of a calculation between renders when dependencies have not changed.

```jsx
import { useMemo, useState } from "react";

function NumberList({ numbers }) {
  const [minimum, setMinimum] = useState(0);

  const filteredNumbers = useMemo(
    () => numbers.filter((number) => number >= minimum),
    [numbers, minimum]
  );

  return (
    <section>
      <label>
        Minimum:
        <input
          type="number"
          value={minimum}
          onChange={(event) => setMinimum(Number(event.target.value))}
        />
      </label>
      <p>{filteredNumbers.join(", ")}</p>
    </section>
  );
}
```

### useCallback

`useCallback` caches a function definition between renders when dependencies have not changed. It is most useful when function identity matters, for example when passing a callback to a memoized child.

Other performance techniques include code splitting, lazy loading, list virtualization for very large collections, and avoiding unnecessary state updates. Measure with React Developer Tools before adding complexity.

## 23. Error Boundaries and Suspense

### Error boundaries

An error boundary catches certain rendering errors in its descendant tree and can display a fallback UI. Error boundaries are commonly implemented with a class component or provided by a framework or library.

```jsx
import { Component } from "react";

class ErrorBoundary extends Component {
  constructor(props) {
    super(props);
    this.state = { hasError: false };
  }

  static getDerivedStateFromError() {
    return { hasError: true };
  }

  componentDidCatch(error, info) {
    console.error("UI error:", error, info.componentStack);
  }

  render() {
    if (this.state.hasError) {
      return <p role="alert">Something went wrong.</p>;
    }

    return this.props.children;
  }
}

export default ErrorBoundary;
```

Error boundaries do not catch every error, such as ordinary event-handler errors or every asynchronous failure. Handle those in the relevant code.

### Suspense and lazy loading

```jsx
import { lazy, Suspense } from "react";

const SettingsPage = lazy(() => import("./SettingsPage.jsx"));

function App() {
  return (
    <Suspense fallback={<p>Loading settings...</p>}>
      <SettingsPage />
    </Suspense>
  );
}
```

`lazy()` lets React load a component when it is first rendered. Suspense displays a fallback while a supported child suspends. Data-fetching Suspense behavior depends on the framework or library being used.

## 24. Testing React Components

Tests help verify that a component behaves as expected. Common tools include Vitest, React Testing Library, and a browser-based end-to-end testing tool.

Example using Vitest and React Testing Library:

```jsx
import { fireEvent, render, screen } from "@testing-library/react";
import { describe, expect, it } from "vitest";
import Counter from "./Counter.jsx";

describe("Counter", () => {
  it("increments when the button is clicked", () => {
    render(<Counter />);

    fireEvent.click(screen.getByRole("button", { name: /increase/i }));

    expect(screen.getByText(/count: 1/i)).toBeInTheDocument();
  });
});
```

This assumes `Counter` renders a button named “Increase” and text containing “Count: 1,” and that the testing packages and `jest-dom` matchers are installed and configured.

Good tests focus on behavior a user can observe: accessible labels, visible messages, and responses to interactions. Avoid depending too heavily on implementation details.

## 25. Accessibility and Security

### Accessibility

- Use semantic HTML such as `main`, `nav`, `button`, and `form`.
- Associate labels with inputs.
- Ensure all interactive controls work with a keyboard.
- Give meaningful images appropriate alternative text.
- Use headings in a logical order.
- Provide visible focus indicators.
- Use ARIA attributes only when native HTML does not already provide the required semantics.

### Security

- Treat all user input and external data as untrusted.
- Avoid rendering untrusted HTML with `dangerouslySetInnerHTML`.
- Validate and authorize sensitive operations on the server.
- Do not place private keys or server secrets in frontend environment variables or client bundles.
- Do not rely on hidden UI elements for authorization.
- Follow safe authentication, session, and dependency-management practices.

React escapes text inserted through normal JSX expressions, but that does not make every possible rendering pattern automatically safe.

## 26. React with TypeScript

TypeScript adds static types to JavaScript and can help catch mistakes before runtime.

A typed component:

```tsx
type BlogCardProps = {
  title: string;
  description: string;
  author?: string;
};

function BlogCard({ title, description, author = "Yogi" }: BlogCardProps) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{description}</p>
      <small>By {author}</small>
    </article>
  );
}

export default BlogCard;
```

For a state value:

```tsx
import { useState } from "react";

function Search() {
  const [query, setQuery] = useState<string>("");

  return (
    <input
      value={query}
      onChange={(event) => setQuery(event.target.value)}
      aria-label="Search"
    />
  );
}
```

TypeScript can infer many types, so explicit annotations are not always necessary. Learn basic types, unions, object types, generics, and event types as your React projects grow.

## 27. React and Next.js

Next.js is a React framework that adds routing and production-oriented features. It supports server rendering and static rendering options, along with server and client component patterns in the App Router.

Key concepts to learn after React fundamentals:

- File-based routing and layouts
- Server Components and Client Components
- Data fetching and caching
- Route handlers and server actions where appropriate
- Dynamic routes and metadata
- Forms and validation
- Authentication and authorization
- Deployment and environment variables

In the Next.js App Router, components are Server Components by default. Add `"use client"` at the top of a file when that component needs client-side interactivity such as state, effects, or browser event handlers. Do not mark every component as a Client Component automatically.

Example client component:

```jsx
"use client";

import { useState } from "react";

export default function LikeButton() {
  const [liked, setLiked] = useState(false);

  return (
    <button onClick={() => setLiked((previous) => !previous)}>
      {liked ? "Liked" : "Like"}
    </button>
  );
}
```

Use the current Next.js documentation for the version installed in your project, because APIs and defaults can change between versions.

## 28. Recommended Project Structure

There is no single required structure. For a small Vite project, one possible organization is:

```text
src/
├── components/
│   ├── Navbar.jsx
│   ├── BlogCard.jsx
│   └── Footer.jsx
├── pages/
│   ├── Home.jsx
│   └── About.jsx
├── hooks/
│   └── useToggle.js
├── services/
│   └── postsApi.js
├── assets/
├── App.jsx
├── main.jsx
└── index.css
```

Organize by feature as an application grows. Avoid creating folders and abstraction layers before the project needs them. Keep components, data access, and reusable logic easy to find.

## 29. Practice Projects

Build these in order. Each project should have a responsive interface, sensible loading/error states where relevant, and a clear README.

### Beginner

1. **Counter app:** increase, decrease, and reset state.
2. **Profile card:** pass information through props.
3. **Color switcher:** practice state and event handlers.
4. **Simple calculator:** handle input and basic operations.
5. **FAQ accordion:** show and hide answers.

### Intermediate

6. **To-do list:** add, edit, complete, and delete tasks.
7. **Weather dashboard:** fetch API data and show loading/error states.
8. **Searchable blog list:** use `filter()`, props, and list keys.
9. **Shopping cart:** update quantities and calculate totals.
10. **Expense tracker:** forms, lists, derived values, and local persistence.
11. **Movie search app:** fetch data and implement pagination.
12. **Authentication UI:** forms and protected-looking views, backed by a real secure authentication design when deployed.

### Advanced

13. **Admin dashboard:** tables, filters, charts, and responsive navigation.
14. **Task manager:** CRUD operations, API integration, and authorization.
15. **Markdown blog:** article cards, categories, dynamic routes, and metadata.
16. **E-commerce frontend:** product listings, cart, and checkout flow connected to a secure backend.
17. **Next.js full-stack app:** server/client components, database access, validation, and deployment.

Build at least three polished projects rather than many unfinished clones. Document your decisions and deploy the projects you are comfortable demonstrating.

## 30. Interview Questions and Answers

### 1. What is React?

React is a JavaScript library for building component-based user interfaces.

### 2. What is a component?

A component is a reusable UI unit, commonly written as a function that returns React elements.

### 3. What is JSX?

JSX is a syntax extension that lets developers describe UI with markup-like syntax inside JavaScript.

### 4. What are props?

Props are read-only inputs passed from a parent component to a child component.

### 5. What is state?

State is data managed by a component or hook that can change over time and trigger re-rendering.

### 6. What is the difference between props and state?

Props are passed into a component by its parent. State is managed by a component or hook and updated through its state mechanism.

### 7. What is `useState`?

`useState` is a hook that adds a state variable and its setter to a function component.

### 8. What is `useEffect`?

`useEffect` synchronizes a component with external systems, such as subscriptions, timers, or browser APIs.

### 9. Why are keys required when rendering lists?

Keys help React match list items between renders so it can update the correct elements.

### 10. Why should state not be mutated directly?

Direct mutation can make state changes difficult for React to detect and can cause unpredictable UI behavior. Create new objects or arrays when updating state.

### 11. What is a controlled component?

A controlled input receives its value from React state and updates that state through an event handler.

### 12. What is lifting state up?

Lifting state up means moving shared state to the closest common parent and passing it to child components through props.

### 13. What is Context API?

Context provides a way to share values with descendant components without manually passing props through every intermediate component.

### 14. What is `useReducer`?

`useReducer` manages state through a reducer function that calculates the next state from the current state and an action.

### 15. What is a custom hook?

A custom hook is a JavaScript function whose name starts with `use` and which can reuse hook-based logic across components.

### 16. What is `useRef`?

`useRef` stores a mutable value between renders without triggering a render when that value changes. It can also reference DOM elements.

### 17. What is the Virtual DOM?

“Virtual DOM” is a common term for React's in-memory representation of UI elements. React uses its rendering and reconciliation process to determine the changes needed for the host environment.

### 18. What is reconciliation?

Reconciliation is the process React uses to compare successive UI descriptions and determine how to update the rendered interface.

### 19. What is prop drilling?

Prop drilling is passing props through several intermediate components to reach a deeply nested component.

### 20. What is `React.memo`?

`memo` can let React skip re-rendering a component when its props have not changed according to the comparison being used. It is an optimization, not a correctness guarantee.

### 21. What is the difference between `useMemo` and `useCallback`?

`useMemo` caches a calculated value. `useCallback` caches a function definition. Use them when they solve a measured or meaningful performance problem.

### 22. What is an error boundary?

An error boundary catches certain errors during rendering in its descendant tree and displays fallback UI.

### 23. What is React Router?

React Router is a routing library that maps URL paths to UI in a React application.

### 24. What is lazy loading?

Lazy loading defers loading a component or resource until it is needed, which can reduce the initial bundle size.

### 25. What is Suspense?

Suspense displays a fallback while a supported child component is waiting for something, such as a lazy-loaded component.

### 26. What is the difference between React and Next.js?

React is a UI library. Next.js is a framework built around React that provides routing and additional rendering, data-fetching, and deployment-oriented capabilities.

### 27. What are Server Components and Client Components in Next.js?

Server Components render on the server and are suitable for server-side work that does not require client interactivity. Client Components support browser-side interactivity, state, effects, and event handlers.

### 28. How do you fetch API data in React?

You can use `fetch()` or a data-fetching library, then represent loading, success, and error states in the UI. The right approach depends on the application and framework.

### 29. How do you improve React performance?

Measure first. Potential improvements include reducing unnecessary renders, memoizing expensive calculations when useful, splitting code, virtualizing very large lists, and avoiding unnecessary state.

### 30. How do you secure a React application?

Validate and authorize sensitive operations on the server, avoid unsafe HTML injection, protect secrets, use secure authentication patterns, and treat all external data as untrusted.

### 31. Why is `key` not available as a normal prop?

React uses `key` internally to identify elements during reconciliation. If a component needs the same ID as data, pass it separately as another prop.

### 32. Why should hooks be called at the top level?

React relies on hooks being called in a consistent order on every render. Do not call hooks inside conditions, loops, or nested functions.

### 33. What does Strict Mode do?

Strict Mode enables additional development checks that help reveal some unsafe patterns and missing cleanup. Some effects may run an extra setup/cleanup cycle in development.

### 34. What is the difference between rendering and committing?

Rendering calculates what the UI should look like. Committing applies the necessary changes to the host environment, such as the DOM.

### 35. What is the best way to learn React?

Learn components, props, state, lists, forms, and hooks. Then build complete projects, practice debugging, learn routing and API integration, and explore Next.js when the fundamentals are comfortable.

## Conclusion

React becomes easier when you understand the ideas behind it: components describe the UI, props pass information, state represents changing data, and hooks let function components use React features.

Start with small components and simple projects. Then practice forms, API requests, shared state, routing, testing, accessibility, and performance. Once these concepts are comfortable, use React with Next.js to build and deploy full-stack applications.

The goal is not to memorize every hook. It is to understand when a tool is useful, keep code readable, and build projects that solve real problems.
