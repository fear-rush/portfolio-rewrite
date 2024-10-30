<script lang="ts">
	import Header from './header.svelte';
  import Footer from './footer.svelte';
	import '../app.css';
	let { children } = $props();
</script>

<div class="container flex flex-col min-h-screen max-w-4xl mx-auto py-2 px-4">
	<Header />
	<main class="flex-grow">
		{@render children()}
	</main>
	<Footer />
</div>


