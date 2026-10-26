
import fs from "fs";
import path from "path";
import grayMatter from "gray-matter";
import BlogSearch from "@/components/BlogSearch";

export default function BlogSearchPage() {
  const contentDir = path.join(process.cwd(), "content");

  const files = fs.readdirSync(contentDir).filter((file) =>
    file.endsWith(".md")
  );

  const blogs = files.map((file) => {
    const filePath = path.join(contentDir, file);
    const fileContent = fs.readFileSync(filePath, "utf8");
    const { data } = grayMatter(fileContent);

    return {
      slug: data.slug || file.replace(/\.md$/, ""),
      title: data.title || "",
      description: data.description || "",
      image: data.image || "",
      author: data.author || "",
      date: data.date ? String(data.date) : "",
      category: data.category || "",
    };
  });

  return (
    <main className="min-h-screen px-4 py-10">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-center text-3xl font-bold text-purple-600 sm:text-4xl">
          Search Blogs
        </h1>

        <p className="mt-3 text-center text-muted-foreground">
          Find articles by title, description, or category.
        </p>

        <div className="mt-8">
          <BlogSearch blogs={blogs} />
        </div>
      </div>
    </main>
  );
}
