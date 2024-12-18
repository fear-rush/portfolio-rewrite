<script lang="ts">
  import { base } from "$app/paths";
  import { page } from "$app/stores";
</script>

<div class="flex justify-center items-center mt-24">
  <div class="text-center max-w-md">
    <h1>Error</h1>
    <p>{$page.status}</p>
    <p>{$page.error?.message}</p>
    <img 
      src="{base}/logo.webp" 
      alt="comfortablynumb.dev logo"
      width="200"
      height="100" 
    />
  </div>
</div>