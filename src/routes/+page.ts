import type { Post, Project } from "$lib/types";

export async function load({ fetch }) {
  const [postsResponse, projectsResponse] = await Promise.all([
    fetch("/api/v1/posts"),
    fetch("/api/v1/projects")
  ]);

  const [posts, projects]: [Post[], Project[]] = await Promise.all([
    postsResponse.json(),
    projectsResponse.json()
  ]);

  return { posts, projects };
}