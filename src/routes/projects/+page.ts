import { error } from "@sveltejs/kit";
import type { Project } from "$lib/types.js";

export async function load({ fetch }): Promise<{ projects: Project[] }> {
  try {
    const result = await fetch("/api/v1/projects");

    if (!result.ok) {
      throw new Error(`Failed to fetch projects, status: ${result.status}`);
    }

    const projects: Project[] = await result.json();

    return { projects };
  } catch (e) {
    throw error(500, `error ${e}`);
  }
}
