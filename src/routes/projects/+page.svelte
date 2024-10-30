<script lang="ts">
  import { projects } from "$lib/data/projects";
</script>

<div class="w-full bg-light-gray p-4">
  <h1 class="text-lg font-bold" id="projects-heading">Projects</h1>

  <ul aria-labelledby="projects-heading" class="mt-8">
    {#each projects as project (project.id)}
      <li>
        <article class="mt-10" aria-labelledby={`project-${project.id}-title`}>
          <header>
            <h2 id={`project-${project.id}-title`} class="text-md font-bold">
              {project.title}
            </h2>
            <p class="text-sm text-gray-500" aria-label={`Project date: ${project.date}`}>
              {project.date}
            </p>
          </header>
          <p class="mt-2">
            {project.description}
          </p>
          <footer class="text-right mt-4">
            <a
              href={`/projects/${project.slug}`}
              class="inline-block border border-gray-400 rounded-md px-2 py-1"
              aria-label={`Read more about ${project.title}`}
            >
              Read more
            </a>
          </footer>
        </article>
      </li>
    {/each}
  </ul>
</div>
