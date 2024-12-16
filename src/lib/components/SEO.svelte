<script lang="ts">
  export let title: string = "unintelligent.dev";
  export let description: string = "";
  export let type: string = "WebPage";
  export let keywords: string = "";
  export let url: string = "";
  export let image: string = "";
  export const datePublished: string | undefined = undefined;

  const baseUrl = "https://e89a8345.portfolio-rewrite-2t4.pages.dev/";
  const absoluteUrl = url ? new URL(url, baseUrl).toString() : baseUrl;
  const absoluteImage = image ? new URL(image, baseUrl).toString() : "";
</script>

<svelte:head>
  <title>{title}</title>

  <meta name="description" content={description} />
  <meta name="keywords" content={keywords} />
  <meta name="robots" content="index, follow" />

  <!-- Open Graph -->
  <meta property="og:type" content={type} />
  <meta property="og:url" content={absoluteUrl} />
  <meta property="og:title" content={title} />
  <meta property="og:description" content={description} />
  <meta property="og:site_name" content={title} />
  <meta property="og:image" content={absoluteImage} />
  <meta property="og:image:width" content="1200" />
  <meta property="og:image:height" content="630" />

  <!-- Twitter -->
  <meta name="twitter:card" content="summary_large_image" />
  <meta name="twitter:site" content="@muhfiras1" />
  <meta name="twitter:creator" content="@muhfiras1" />
  <meta name="twitter:title" content={title} />
  <meta name="twitter:description" content={description} />
  <meta name="twitter:image" content={absoluteImage} />
  <meta name="twitter:domain" content="unintelligent.dev" />
  <meta name="twitter:url" content={absoluteUrl} />

  <!-- Schema.org -->
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
        "@id": absoluteUrl,
      },
      "image": absoluteImage,
      "description": description
    })}
  </script>
</svelte:head>