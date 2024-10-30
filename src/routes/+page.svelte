<script lang="ts">
  import { formatDate } from "$lib/utils/dateformat";

  const { data } = $props();
</script>

<div class="w-full bg-light-gray p-4">
  <!-- Main introduction section -->
  <section aria-labelledby="intro-heading">
    <hgroup>
      <h1 id="intro-heading" class="text-lg font-bold">Hello World</h1>
      <p class="mt-4">
        Welcome to my digital garden. This space showcases my projects, shares
        valuable insights from my blog (I hope), and spreads knowledge on topics
        that interest me.
      </p>
    </hgroup>
  </section>

  <!-- Blog posts section -->
  <section class="mt-8" aria-labelledby="posts-heading">
    <h2 id="posts-heading" class="text-lg font-bold">Posts</h2>
    {#if data.posts && data.posts.length > 0}
      <ul aria-label="Blog posts list">
        {#each data.posts as post (post.slug)}
          <li class="mt-4">
            <a
              class="underline"
              href="/blog/{post.slug}"
              aria-label="Read more about {post.title}"
            >
              {post.title}
            </a>
            <p class="text-sm text-gray-500" aria-label="Published on {formatDate(post.date)}">
              {formatDate(post.date)}
            </p>
          </li>
        {/each}
      </ul>
    {:else}
      <p>No posts available.</p>
    {/if}
  </section>

  <!-- Projects section -->
  <section class="mt-8" aria-labelledby="projects-heading">
    <h2 id="projects-heading" class="text-lg font-bold">Projects</h2>
    {#if data.projects && data.projects.length > 0}
      <ul aria-label="Projects list">
        {#each data.projects as project (project.slug)}
          <li class="mt-4">
            <a
              class="underline"
              href="/projects/{project.slug}"
              aria-label="Learn more about {project.title}"
            >
              {project.title}
            </a>
            <p class="text-sm text-gray-500">
              {project.description}
            </p>
          </li>
        {/each}
      </ul>
    {:else}
      <p>No projects available.</p>
    {/if}
  </section>
</div>
