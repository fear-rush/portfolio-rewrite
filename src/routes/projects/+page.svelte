<script lang="ts">
  import { formatDate } from "$lib/utils/dateformat";

  const { data } = $props();
</script>

<svelte:head>
  <title>/projects</title>
  <meta property="og:type" content="website" />
  <meta property="og:title" content="goofygoober.rocks" />
  <meta name="description" content="Projects Page" />
  <meta name="keywords" content="blog, posts, projects, goofygoober.rocks, Muhammad Firas, Firas" />
  <meta name="robots" content="index, follow" />
</svelte:head>

<div class="w-full bg-light-gray p-4">
  <h1 class="text-lg font-bold" id="projects-heading">Projects</h1>

  <ul aria-labelledby="projects-heading" class="mt-8">
    {#each data.projects as project (project.slug)}
      <li>
        <article
          class="mt-10"
          aria-labelledby={`project-${project.slug}-title`}
        >
          <header>
            <h2 id={`project-${project.id}-title`} class="text-md font-bold">
              {project.title}
            </h2>
            <p
              class="text-sm text-gray-500"
              aria-label={`Project date: ${project.date}`}
            >
              {formatDate(project.date)}
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
