<script lang="ts">
  import Header from "./header.svelte";
  import Footer from "./footer.svelte";
  import "../app.css";

  let { children } = $props();
</script>

<div class="min-h-screen flex flex-col">
  <div class="container mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-4 md:py-6 flex-grow">
    <Header />
    <main class="my-6 md:my-8">
      {@render children()}
    </main>
  </div>
  <Footer />
</div>
