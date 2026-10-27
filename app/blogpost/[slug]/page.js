import fs from "fs"
import matter from "gray-matter"
import { notFound } from "next/navigation";
import rehypeDocument from 'rehype-document'
import rehypeFormat from 'rehype-format'
import rehypeStringify from 'rehype-stringify'
import remarkParse from 'remark-parse'
import remarkRehype from 'remark-rehype'
import {unified} from 'unified'
import rehypePrettyCode from "rehype-pretty-code";
import { transformerCopyButton } from '@rehype-pretty/transformers'
import OnThisPage from "@/components/OnThisPage";
import rehypeAutolinkHeadings from "rehype-autolink-headings";
import rehypeSlug from 'rehype-slug'
import path from "path";
import Link from "next/link";


const contentDir = path.join(process.cwd(), "content");

function findBlogBySlug(slug) {
  const files = fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".md"));

  for (const file of files) {
    const filepath = path.join(contentDir, file);
    const fileContent = fs.readFileSync(filepath, "utf-8");
    const { data } = matter(fileContent);

  const fileSlug = data.slug || file.replace(/\.md$/, "");

if (fileSlug === slug) {
  return { filepath, file };
}
  }

  return null;
}
export async function generateMetadata({ params }) {
  const { slug } = await params;

  if (
    typeof slug !== "string" ||
    !/^[a-zA-Z0-9_-]+$/.test(slug)
  ) {
    return {};
  }

  const blog = findBlogBySlug(slug);

if (!blog) {
  return {};
}

const fileContent = fs.readFileSync(blog.filepath, "utf-8");
const { data } = matter(fileContent);

  const title = data.title || slug.replace(/-/g, " ");
  const description =
    data.description ||
    `Read ${title} on YogiBlog.`;

  const url = `/blogpost/${slug}`;

  return {
    title,
    description,
    alternates: {
      canonical: url,
    },
    openGraph: {
      title,
      description,
      type: "article",
      url,
      siteName: "YogiBlog",
    },
    twitter: {
      card: "summary",
      title,
      description,
    },
  };
}
export default async function Page({ params }) {
  const { slug } = await params;




if (
  typeof slug !== "string" ||
  !/^[a-zA-Z0-9_-]+$/.test(slug)
) {
  notFound();
}

const blog = findBlogBySlug(slug);

if (!blog) {
  notFound();
}

const fileContent = fs.readFileSync(blog.filepath, "utf-8");
  const { data, content } = matter(fileContent)

  const processor = unified()
  .use(remarkParse)
  .use(remarkRehype)
  .use(rehypeDocument, { title: data.title })
  .use(rehypeFormat)
  .use(rehypeStringify)
  .use(rehypeSlug)
 .use(rehypeAutolinkHeadings)
  .use(rehypePrettyCode, {
     theme: "github-dark",
      transformers: [
      transformerCopyButton({
        visibility: 'always',
        feedbackDuration: 3_000,
      }),
    ],
    })
const htmlContent = (await processor.process(content)).toString()

const contentDir = path.join(process.cwd(), "content");

const relatedBlogs = fs
  .readdirSync(contentDir)
  .filter((file) => file.endsWith(".md") && file !== blog.file)
  .map((file) => {
    const relatedContent = fs.readFileSync(
      path.join(contentDir, file),
      "utf-8"
    );

    const { data: relatedData } = matter(relatedContent);

    return {
      slug: relatedData.slug || file.replace(/\.md$/, ""),
      title: relatedData.title || "",
      description: relatedData.description || "",
    };
  })
  .slice(0, 3);
 

    return (
        <div className="max-w-6xl mx-auto p-4">
            <h1 className="text-4xl font-bold mb-4">{data.title}</h1>

<p className="mb-4 border-l-4 border-gray-300 bg-gray-50 py-1 pl-4 text-lg italic text-gray-700 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-300">
  &quot;{data.description}&quot;
</p>
            <div className="flex gap-2">
            <p className="text-sm text-gray-500 mb-4 italic">
                By {data.author}
            </p>
            <p className="text-sm text-gray-500 mb-4">
                {data.date &&
  !Number.isNaN(new Date(data.date).getTime()) &&
  new Date(data.date).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  })}
            </p>
            </div>


            <div className="grid grid-cols-1 items-start gap-8 lg:grid-cols-[minmax(0,1fr)_280px] lg:gap-12">
  <article className="min-w-0">
    <div
      className="prose max-w-none break-words dark:prose-invert"
      dangerouslySetInnerHTML={{ __html: htmlContent }}
    />
  </article>

  <aside className="w-full min-w-0 rounded-xl border border-border bg-card p-4 lg:sticky lg:top-24">
    <OnThisPage htmlContent={htmlContent} />
  </aside>
</div>


<section className="mt-12 border-t border-border pt-8">
  <h2 className="mb-6 text-2xl font-bold">
    Related Blogs
  </h2>

  <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
    {relatedBlogs.map((blog) => (
      <article
        key={blog.slug}
        className="rounded-xl border border-border bg-card p-5 transition-shadow hover:shadow-lg"
      >
        <h3 className="mb-2 text-lg font-semibold">
          <Link
            href={`/blogpost/${blog.slug}`}
            className="hover:text-purple-600"
          >
            {blog.title}
          </Link>
        </h3>

        <p className="mb-4 text-sm text-muted-foreground">
          {blog.description}
        </p>

        <Link
          href={`/blogpost/${blog.slug}`}
        className="text-sm font-medium text-purple-600 hover:text-purple-700 hover:underline dark:text-purple-400 dark:hover:text-purple-300"
        >
          Learn More →
        </Link>
      </article>
    ))}
  </div>
</section>
        </div>
        
    );
}
