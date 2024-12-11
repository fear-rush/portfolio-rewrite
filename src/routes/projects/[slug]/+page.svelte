<script lang="ts">
  import { formatDate } from "$lib/utils/dateformat";

  const { data } = $props();
</script>

<svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
  <meta name="description" content={data.meta.description || "Default description for the project."} />
  <meta name="keywords" content="svelte, project, {data.meta.keywords.join(', ')}" />
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

  <hgroup class="flex flex-col space-y-2 mt-6">
    <h1 class="text-3xl font-bold">{data.meta.title}</h1>
    <p class="text-sm">Date posted: {formatDate(data.meta.date)}</p>
    <p class="text-sm">Platform: {data.meta.platform}</p>
    <div class="flex flex-wrap space-x-2 items-center text-sm" aria-label="Tech stack">
      <span>Tech stack:</span>
      {#each data.meta.stack as stack}
        <span class="bg-third-green p-1 rounded">{stack}</span>
      {/each}
    </div>
    <p class="text-sm">GitHub: <a href={data.meta.github} class="text-blue-600 underline">{data.meta.github}</a></p>
  </hgroup>

  <article class="mt-10" aria-labelledby="project-content">
    <div class="prose max-w-none prose-img:mx-auto prose-img:block prose-img:w-3/4">
      <!-- Render markdown content -->
      {@render data.content()}
    </div>
  </article>
</div>
