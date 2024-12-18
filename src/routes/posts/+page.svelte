<script lang="ts">
  import { formatDate } from "$lib/utils/dateformat";

  const { data } = $props();
</script>

<svelte:head>
  <title>/posts</title>
  <meta property="og:type" content="website" />
  <meta property="og:title" content="goofygoober.rocks" />
  <meta name="description" content="Posts Page" />
  <meta name="keywords" content="blog, posts, goofygoober.rocks, Muhammad Firas, Firas" />
  <meta name="robots" content="index, follow" />
</svelte:head>

<div class="w-full bg-light-gray p-4">
  <h1 class="text-lg font-bold" id="posts-heading">Posts</h1>

  <ul aria-labelledby="posts-heading" class="mt-8">
    {#each data.posts as post (post.slug)}
      <li>
        <article class="mt-10" aria-labelledby={`post-${post.slug}-title`}>
          <header>
            <h2 id={`post-${post.slug}-title`} class="text-md font-bold">
              {post.title}
            </h2>
            <p class="text-sm text-gray-500" aria-label={`Published on ${formatDate(post.date)}`}>
              {formatDate(post.date)}
            </p>
          </header>
          <p class="mt-2">{post.description}</p>
          <footer class="text-right mt-4">
            <a
              href={`/posts/${post.slug}`}
              class="inline-block border border-gray-400 rounded-md px-2 py-1"
              aria-label={`Read more about ${post.title}`}
            >
              Read more
            </a>
          </footer>
        </article>
      </li>
    {/each}
  </ul>
</div>
