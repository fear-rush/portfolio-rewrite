<script lang="ts">
  export let title: string = "unintelligent.dev";
  export let description: string = "";
  export let type: string = "WebPage";
  export let keywords: string = "";
  export let url: string = "";
  export let image: string = "";
  export const datePublished: string | undefined = undefined;
</script>

<svelte:head>
  <title>{title}</title>

  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <meta name="robots" content="index, follow" />

  <meta property="og:type" content={type} />
  <meta property="og:url" content={url} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og_site_name" content={title} />
  <meta property="og:image" content={image} />

  <meta property="twitter:domain" content="unintelligent.dev" />
  <meta property="twitter:url" content={url} />
  <meta name="twitter:site" content="@muhfiras1" />
  <meta name="twitter:creator" content="@muhfiras1" />
  <meta name="twitter:domain" content="unintelligent.dev" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:image:src" content={image} />
  <meta name="twitter:widgets:new-embed-design" content="on" />
  <meta name="twitter:label1" content="Written by" />
  <meta name="twitter:data1" content="Muhammad Firas" />

  <script type="application/ld+json">
    {JSON.stringify({
      "@context": "https://schema.org",
      "@type": type,
      "headline": title,
      "author": {
        "@type": "Person",
        "name": "Muhammad Firas"
      },
      "datePublished": datePublished,
      "mainEntityOfPage": {
        "@type": "WebPage",
        "@id": url,
      },
      "image": image,
      "description": description
    })}
  </script>
</svelte:head>
