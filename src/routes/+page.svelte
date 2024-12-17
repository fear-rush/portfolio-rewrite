<script lang="ts">
  import Seo from "$lib/components/SEO.svelte";
  import { base } from "$app/paths";
  import { page } from "$app/stores";
  import { formatDate } from "$lib/utils/dateformat";

  const { data } = $props();
</script>

<Seo 
  title="unintelligent.dev"
  description="Welcome to my corner of the internet—a space for my random projects, blog posts, thoughts, and whatever catches my interest. Figuring things out, learning about computers, and occasionally doing something cool."
  type="website"
  keywords="blog, posts, unintelligent.dev, Muhammad Firas, Firas"
  url={$page.url.toString()}
  image={`${base}/logo-placeholder.png`}
/>

<div class="w-full bg-light-gray p-4">
  <section aria-labelledby="intro-heading">
    <hgroup>
      <h1 id="intro-heading" class="text-lg font-bold">Hello World</h1>
      <p class="mt-4">
        Welcome to my corner of the internet. I'm not really sure what i'm doing with my life, but I figured I'd start by putting together this space. It's a mix of my random projects, some blog posts (if I ever get around to writing them, and maybe some random thoughts too), and whatever else catches my interest. I'm just here, quietly figuring things out, learning about computers, and occasionally doing something cool.
      </p>
    </hgroup>
  </section>

  <section class="mt-8" aria-labelledby="posts-heading">
    <h2 id="posts-heading" class="text-lg font-bold">Posts</h2>
    {#if data.posts && data.posts.length > 0}
      <ul aria-label="Blog posts list">
        {#each data.posts as post (post.slug)}
          <li class="mt-4">
            <a
              class="underline"
              href="/posts/{post.slug}"
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
