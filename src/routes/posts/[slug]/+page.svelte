<script lang="ts">
  import Seo from "$lib/components/SEO.svelte";
  import { page } from "$app/stores";
  import { formatDate } from "$lib/utils/dateformat";

  const { data } = $props();
</script>

<Seo
  title={data.meta.title}
  description={data.meta.description}
  type="article"
  keywords={data.meta.keywords.join(", ")}
  url={$page.url.toString()}
  image={data.meta.heroimage.url}
  datePublished={data.meta.date}
/>

<div class="prose prose-lg mx-auto px-4 sm:px-6 lg:px-8">
  <article class="max-w-none">
    <figure class="mb-8">
      {#if data.meta.heroimage}
        <img
          src={data.meta.heroimage.url}
          alt={data.meta.heroimage.alt}
          width="1200"
          height="675"
          class="responsive-img hero-img"
          loading="eager"
        />
      {/if}
      <figcaption class="text-sm text-gray-600 mt-2">
        {data.meta.heroimage.alt}
      </figcaption>
    </figure>

    <header class="mb-8">
      <h1 class="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight">
        {data.meta.title}
      </h1>

      <div class="mt-4 space-y-2">
        <div class="text-gray-600 text-sm md:text-base">
          Published on {formatDate(data.meta.date)}
        </div>

        <div class="flex flex-wrap gap-2 items-center">
          <span class="text-sm md:text-base">Tags:</span>
          {#each data.meta.categories as category}
            <span class="bg-third-green px-2 py-1 rounded-md text-sm">
              #{category}
            </span>
          {/each}
        </div>
      </div>
    </header>

    <div
      class="prose prose-lg prose-code:font-normal prose-strong:font-bold md:prose-xl"
    >
      {@render data.content()}
    </div>
  </article>
</div>
