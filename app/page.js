import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import HomeClient from "./HomeClient";

export default function Home() {
  const contentDir = path.join(process.cwd(), "content");

  const blogs = fs
    .readdirSync(contentDir)
    .filter((file) => file.endsWith(".md"))
   .map((file) => {
  const filePath = path.join(contentDir, file);
  const fileContent = fs.readFileSync(filePath, "utf-8");
  const { data } = matter(fileContent);

  const slug = data.slug || file.replace(/\.md$/, "");

  return {
    slug,
    title: data.title || slug,
    description: data.description || "",
    date: data.date ? String(data.date) : "",
    category: data.category || "Web Development",
  };
})
    .sort(
      (a, b) =>
        new Date(b.date || 0).getTime() -
        new Date(a.date || 0).getTime()
    );

  return <HomeClient blogs={blogs} />;
}
