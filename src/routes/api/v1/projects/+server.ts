import { json, error } from "@sveltejs/kit";
import type { Project } from "$lib/types";

async function getProjects() {
  let projects: Project[] = [];

  const paths = import.meta.glob("/src/content/projects/*.md", { eager: true });
  for (const path in paths) {
    const file = paths[path];
    const slug = path.split("/").at(-1)?.replace(".md", "");

    if (file && typeof file === "object" && "metadata" in file && slug) {
      const metadata = file.metadata as Omit<Project, "slug">;
      const project = { ...metadata, slug } satisfies Project;
      projects.push(project);
    }
  }

  projects = projects.sort(
    (first, second) =>
      new Date(second.date).getTime() - new Date(first.date).getTime()
  );

  return projects;
}

export async function GET() {
  try {
    const projects = await getProjects();
    return json(projects);
  } catch (e) {
    error(500, `error ${e}`);
  }
}
