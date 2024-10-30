<script lang="ts">
  import { formatDate } from "$lib/utils/dateformat";
  const { data } = $props();
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
  <meta name="description" content={data.meta.description} />
  <meta name="keywords" content="blog, posts, {data.meta.keywords.join(', ')}" />
  <meta name="robots" content="index, follow" />
</svelte:head>

<div class="w-full bg-light-gray p-4">
  <figure class="aspect-auto w-full">
    <img
      src={data.meta.heroimage.url}
      alt={data.meta.heroimage.alt}
      loading="lazy"
      class="object-cover"
    />
    <figcaption class="text-sm text-gray-600">{data.meta.heroimage.alt}</figcaption>
  </figure>

  <hgroup>
    <h1 class="text-2xl font-bold mt-6" id="post-title">{data.meta.title}</h1>
    <p class="text-sm" aria-label={`Published on ${formatDate(data.meta.date)}`}>
      Published on {formatDate(data.meta.date)}
    </p>
    <div class="flex space-x-2 mt-2" aria-label="Post categories">
      <span>Tags:</span>
      {#each data.meta.categories as category}
        <span class="ml-1 bg-third-green px-1 rounded">#{category}</span>
      {/each}
    </div>
  </hgroup>

  <article class="mt-10" aria-labelledby="post-title">
    <div class="prose max-w-none prose-gray">
      <!-- Render markdown content -->
      {@render data.content()}
    </div>
  </article>
</div>
