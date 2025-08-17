<script lang="ts">
  let { children } = $props();
  import "../app.css";

  import { setupI18n } from "$lib/locales/i18n";
  import { onMount } from "svelte";
  import { waitLocale } from "svelte-i18n";

  let isReady = $state(false);

  onMount(async () => {
    await setupI18n();
    waitLocale().then(() => {
      isReady = true;
    });
  });
</script>

{#if isReady}
  {@render children()}
{/if}
