import { mdsvex } from "mdsvex";
import adapter from "@sveltejs/adapter-auto";
import { vitePreprocess } from "@sveltejs/vite-plugin-svelte";
import rehypeUnwrapImages from "rehype-unwrap-images";
import remarkToc from "remark-toc";
import rehypeSlug from "rehype-slug";
import { createHighlighter } from "@bitmachina/highlighter";


const mdsvexOptions = {
  extensions: [".md"],
  highlight: {
    highlighter: await createHighlighter(
      { langs: ["css", "html", "typescript", "javascript", "markdown"] },
      { theme: "tokyo-night" }
    ),
  },
  remarkPlugins: [[remarkToc, {tight: true, maxDepth: 3, ordered: true}]],
  rehypePlugins: [rehypeUnwrapImages, rehypeSlug],
};

/** @type {import('@sveltejs/kit').Config} */
const config = {
  // Consult https://svelte.dev/docs/kit/integrations
  // for more information about preprocessors
  preprocess: [vitePreprocess(), mdsvex(mdsvexOptions)],

  kit: {
    // adapter-auto only supports some environments, see https://svelte.dev/docs/kit/adapter-auto for a list.
    // If your environment is not supported, or you settled on a specific environment, switch out the adapter.
    // See https://svelte.dev/docs/kit/adapters for more information about adapters.
    adapter: adapter(),
  },

  extensions: [".svelte", ".svx", ".md"],
};

export default config;
