import { error } from "@sveltejs/kit";
import type { Post } from "$lib/types.js";

export async function load({ fetch }): Promise<{ posts: Post[] }> {
  try {
    const result = await fetch("/api/v1/posts");

    if (!result.ok) {
      throw new Error(`Failed to fetch posts, status: ${result.status}`);
    }

    const posts: Post[] = await result.json();

    return { posts };
  } catch (e) {
    throw error(500, `error ${e}`);
  }
}
