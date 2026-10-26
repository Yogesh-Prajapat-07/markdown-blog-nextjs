import fs from "node:fs";
import path from "node:path";

export default function sitemap() {
  const baseUrl =
    process.env.NEXT_PUBLIC_SITE_URL || "http://localhost:3000";

  const contentDir = path.join(process.cwd(), "content");

  const blogUrls = fs.existsSync(contentDir)
    ? fs
        .readdirSync(contentDir)
        .filter((file) => file.endsWith(".md"))
        .map((file) => ({
          url: `${baseUrl}/blogpost/${file.replace(/\.md$/, "")}`,
          lastModified: fs.statSync(path.join(contentDir, file)).mtime,
        }))
    : [];

  return [
    {
      url: baseUrl,
      lastModified: new Date(),
    },
    ...blogUrls,
  ];
}