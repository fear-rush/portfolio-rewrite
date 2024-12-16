<script lang="ts">
  import Seo from "$lib/components/SEO.svelte";
  import { page } from "$app/stores";
  import { formatDate } from "$lib/utils/dateformat";

  const { data } = $props();
</script>

<!-- <svelte:head>
  <title>{data.meta.title}</title>
  <meta property="og:type" content="article" />
  <meta property="og:title" content={data.meta.title} />
  <meta name="description" content={data.meta.description} />
  <meta name="keywords" content="{data.meta.keywords.join(', ')}" />
  <meta name="robots" content="index, follow" />
</svelte:head> -->

<Seo 
  title={data.meta.title}
  description={data.meta.description}
  type="article"
  keywords={data.meta.keywords.join(', ')}
  url={$page.url.toString()}
  image={data.meta.heroimage.url}
  datePublished={data.meta.date}
/>

<div class="w-full bg-light-gray p-4">
  <figure class="w-full">
    <div class="aspect-auto w-full relative">
      <img
        src={data.meta.heroimage.url}
        alt={data.meta.heroimage.alt}
        class="absolute top-0 left-0 w-full h-full object-cover"
        loading="eager"
        width="800"
        height="400"
      />
    </div>
    <figcaption class="text-sm text-gray-600 mt-2">{data.meta.heroimage.alt}</figcaption>
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
  </hgroup>

  <article class="mt-10" aria-labelledby="project-content">
    <div class="prose max-w-none prose-img:mx-auto prose-img:block prose-img:w-3/4">
      <!-- Render markdown content -->
      {@render data.content()}
    </div>
  </article>
</div>
