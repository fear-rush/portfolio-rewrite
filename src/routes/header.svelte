<script>
  import { fade } from "svelte/transition";
  import { config } from "$lib/config";

  let menuOpen = false;

  function toggleMenu() {
    menuOpen = !menuOpen;
  }
</script>

<nav class="flex items-center justify-between py-4 text-primary-green relative">
  <a href="/" class="text-xl font-semibold"> [{config.title}] </a>

  <!-- Desktop Links -->
  <ul class="hidden md:flex space-x-4">
    <li><a href="/">/home</a></li>
    <li><a href="/about">/about</a></li>
    <li><a href="/posts">/posts</a></li>
    <li><a href="/projects">/projects</a></li>
  </ul>

  <!-- Hamburger Menu Toggle -->
  <button
    class="md:hidden flex flex-col justify-center items-center space-y-1"
    onclick={toggleMenu}
    aria-label="hamburger-menu"
  >
    <span
      class="w-6 h-0.5 bg-primary-green transition-transform duration-300 ease-in-out transform {menuOpen
        ? '-rotate-45 translate-y-1.5'
        : 'rotate-0 translate-y-0'}"
    ></span>
    <span
      class="w-6 h-0.5 bg-primary-green transition-all duration-300 ease-in-out {menuOpen
        ? 'opacity-0'
        : 'opacity-100'}"
    ></span>
    <span
      class="w-6 h-0.5 bg-primary-green transition-transform duration-300 ease-in-out transform {menuOpen
        ? 'rotate-45 -translate-y-1.5'
        : 'rotate-0 translate-y-0'}"
    ></span>
  </button>

  <!-- Mobile Links -->
  {#if menuOpen}
    <div
      class="md:hidden bg-white w-full absolute top-full left-0 z-50"
      in:fade
      out:fade
    >
      <ul class="flex flex-col text-right py-3 space-y-4 mr-4">
        <li><a href="/" onclick={toggleMenu}>/home</a></li>
        <li><a href="/about" onclick={toggleMenu}>/about</a></li>
        <li><a href="/posts" onclick={toggleMenu}>/posts</a></li>
        <li><a href="/projects" onclick={toggleMenu}>/projects</a></li>
      </ul>
    </div>
  {/if}
</nav>
