<script lang="ts">
  let { children } = $props();
  import "../app.css";

  import { setupI18n, updateDisplayDirection } from "$lib/locales/i18n";
  import { onMount } from "svelte";
  import { waitLocale, locale } from "svelte-i18n";

  let isReady = $state(false);

  onMount(async () => {
    await setupI18n();
    waitLocale().then(() => {
      isReady = true;
    });

    // Update display direction when locale changes
    locale.subscribe((localeCode) => {
      updateDisplayDirection(localeCode ?? "en-AU");
    });
  });
</script>

{#if isReady}
  {@render children()}
{/if}
