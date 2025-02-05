import { config } from "$lib/config";
import type { Post, Project } from "$lib/types";

const website = config.url;

function sitemap(posts: Post[], projects: Project[]) {
  return `<?xml version="1.0" encoding="UTF-8" ?>
    <urlset
      xmlns="https://www.sitemaps.org/schemas/sitemap/0.9"
      xmlns:news="https://www.google.com/schemas/sitemap-news/0.9"
      xmlns:xhtml="https://www.w3.org/1999/xhtml"
      xmlns:mobile="https://www.google.com/schemas/sitemap-mobile/1.0"
      xmlns:image="https://www.google.com/schemas/sitemap-image/1.1"
      xmlns:video="https://www.google.com/schemas/sitemap-video/1.1"
    >
      <!-- Static Routes -->
      <url>
        <loc>${website}</loc>
        <changefreq>daily</changefreq>
        <priority>1.0</priority>
      </url>
      <url>
        <loc>${website}/about</loc>
        <changefreq>monthly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>${website}/posts</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>
      <url>
        <loc>${website}/projects</loc>
        <changefreq>weekly</changefreq>
        <priority>0.8</priority>
      </url>

      <!-- Dynamic Post Routes -->
      ${posts
        .map(
          (post) => `
        <url>
          <loc>${website}/posts/${post.slug}</loc>
          <lastmod>${new Date(post.date).toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.7</priority>
        </url>
      `
        )
        .join("")}

      <!-- Dynamic Project Routes -->
      ${projects
        .map(
          (project) => `
        <url>
          <loc>${website}/projects/${project.slug}</loc>
          <lastmod>${new Date(project.date).toISOString()}</lastmod>
          <changefreq>monthly</changefreq>
          <priority>0.7</priority>
        </url>
      `
        )
        .join("")}
    </urlset>`;
}

export async function GET({ fetch }) {
  try {
    const [postsRes, projectsRes] = await Promise.all([
      fetch("/api/v1/posts"),
      fetch("/api/v1/projects")
    ]);

    const [posts, projects] = await Promise.all([
      postsRes.json(),
      projectsRes.json()
    ]);

    return new Response(sitemap(posts, projects), {
      headers: {
        "Content-Type": "application/xml",
        "Cache-Control": "max-age=0, s-maxage=3600"
      }
    });
  } catch (e) {
    return new Response("Error generating sitemap", { status: 500 });
  }
}