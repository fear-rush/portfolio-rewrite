// import adapter from '@sveltejs/adapter-static';
import adapter from "@sveltejs/adapter-cloudflare";
import rehypeUnwrapImages from "rehype-unwrap-images";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import { mdsvex } from "mdsvex";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import { createHighlighter } from "@bitmachina/highlighter";

const mdsvexOptions = {
  extensions: [".md"],
  highlight: {
    highlighter: await createHighlighter(
      {
        langs: ["css", "html", "typescript", "javascript", "markdown", "yaml"],
      },
      { theme: "tokyo-night" }
    ),
  },
  remarkPlugins: [[remarkToc, { tight: true, maxDepth: 3, ordered: true }]],
  rehypePlugins: [rehypeUnwrapImages, rehypeSlug],
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],
  kit: {
    adapter: adapter(),
  },

  extensions: [".svelte", ".svx", ".md"],
};

export default config;
