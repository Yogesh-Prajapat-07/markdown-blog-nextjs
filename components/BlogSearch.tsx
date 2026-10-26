
"use client";

import { useMemo, useState } from "react";
import Link from "next/link";
import { buttonVariants } from "@/components/ui/button";
import { useRouter } from "next/navigation";

type Blog = {
  slug: string;
  title?: string;
  description?: string;
  image?: string;
  author?: string;
  date?: string;
  category?: string;
};

export default function BlogSearch({ blogs }: { blogs: Blog[] }) {
  const [search, setSearch] = useState("");
 const topics = [
  "Next.js",
  "React",
  "Tailwind CSS",
  "TypeScript",
   "JavaScript"
];
  const router = useRouter();

const suggestions = useMemo(() => {
  const query = search.trim().toLowerCase();

  if (!query) return [];

  return blogs
    .filter((blog) =>
      [blog.title, blog.description, blog.category, blog.author].some(
        (value) => String(value || "").toLowerCase().includes(query)
      )
    )
    .slice(0, 3);
}, [blogs, search]);

  const filteredBlogs = useMemo(() => {
    const query = search.trim().toLowerCase();

    if (!query) return [];

    return blogs.filter((blog) =>
      [
        blog.title,
        blog.description,
        blog.category,
        blog.author,
      ].some((value) =>
        String(value || "").toLowerCase().includes(query)
      )
    );
  }, [blogs, search]);

  const hasQuery = search.trim().length > 0;

  return (
    <>
      <div className="mx-auto mb-8 max-w-2xl">
        <input
          type="search"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          placeholder="Search blogs by title, topic..."
          aria-label="Search blogs"
          className="w-full rounded-lg border border-gray-300 bg-white px-4 py-3 outline-none transition focus:border-purple-500 focus:ring-2 focus:ring-purple-200 dark:border-gray-700 dark:bg-gray-900 dark:text-white dark:focus:ring-purple-900"
    
        />
     <div className="mt-5 flex flex-wrap justify-center gap-3">
  {topics.map((topic) => (
    <button
      key={topic}
      type="button"
      onClick={() => setSearch(topic)}
    

className="rounded-full border border-blue-300 bg-blue-200 px-4 py-2 text-sm font-semibold text-black transition-colors hover:bg-blue-400 dark:border-blue-600 dark:bg-blue-500 dark:text-white dark:hover:bg-blue-600"


    >
      {topic}
    </button>
  ))}
</div>

        {hasQuery && suggestions.length > 0 && (
          <div className="mt-2 overflow-hidden rounded-lg border bg-background shadow-md">
            {suggestions.map((blog) => (
              <button
                key={blog.slug}
                type="button"
                onClick={() => router.push(`/blogpost/${blog.slug}`)}
                className="block w-full border-b px-4 py-3 text-left last:border-b-0 hover:bg-purple-50 dark:hover:bg-gray-800"
              >
                <span className="block font-medium">
                  {blog.title}
                </span>

                {blog.category && (
                  <span className="mt-1 block text-sm text-muted-foreground">
                    {blog.category}
                  </span>
                )}
              </button>
            ))}
          </div>
        )}

        {hasQuery && (
          <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
            {filteredBlogs.length} blogs found
          </p>
        )}

      </div>

      {!hasQuery ? (
        <p className="py-8 text-center text-gray-500 dark:text-gray-400">
          Search by blog title, topic, category, or author.
        </p>
      ) : filteredBlogs.length > 0 ? (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {filteredBlogs.map((blog) => (
            <div
              key={blog.slug}
              className="flex flex-col overflow-hidden rounded-lg shadow-lg dark:border-2"
            >
              {blog.image && (
                <img
                  src={blog.image}
                  alt={blog.title || "Blog cover"}
                  className="h-56 w-full object-cover"
                />
              )}

              <div className="flex flex-1 flex-col p-5">
                <h2 className="line-clamp-2 text-xl font-bold leading-tight">
                  {blog.title}
                </h2>

                <p className="mt-3 line-clamp-3">
                  {blog.description}
                </p>

                <div className="mt-3 text-sm">
                  {blog.author && <span>By {blog.author}</span>}
                  {blog.author && blog.date && " on "}
                  {blog.date &&
                    !Number.isNaN(new Date(blog.date).getTime()) &&
                    new Date(blog.date).toLocaleDateString("en-IN")}
                </div>

                <div className="mt-auto pt-4">
                  <Link
                    href={`/blogpost/${blog.slug}`}
                    className={buttonVariants({ variant: "outline" })}
                  >
                    Click here
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      ) : (
        <div className="py-12 text-center">
          <h2 className="text-xl font-semibold">No blogs found</h2>

          <p className="mt-2 text-gray-500 dark:text-gray-400">
            Try another title or topic.
          </p>

          <button
            onClick={() => setSearch("")}
            className="mt-4 text-purple-600 hover:underline dark:text-purple-400"
          >
            Clear search
          </button>
        </div>
      )}
    </>
  );
}
