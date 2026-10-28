
import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

export default function sitemap() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL ||
    "https://yogiblog.vercel.app";

  const contentDir = path.join(process.cwd(), "content");

  const blogUrls = fs.existsSync(contentDir)
    ? fs
        .readdirSync(contentDir)
        .filter((file) => file.endsWith(".md"))
        .map((file) => {
          const filepath = path.join(contentDir, file);
          const fileContent = fs.readFileSync(filepath, "utf-8");
          const { data } = matter(fileContent);

          const slug = data.slug || file.replace(/\.md$/, "");

          return {
            url: `${baseUrl}/blogpost/${slug}`,
            lastModified: fs.statSync(filepath).mtime,
          };
        })
    : [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...blogUrls,
  ];
}
