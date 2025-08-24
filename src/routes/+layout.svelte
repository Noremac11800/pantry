<script lang="ts">
  let { children } = $props();
  import "../app.css";

  import { setupI18n, updateDisplayDirection } from "$lib/locales/i18n";
  import { onMount } from "svelte";
  import { waitLocale, locale } from "svelte-i18n";

  import { appSession } from "$lib/app-session.svelte";
  import { fly } from "svelte/transition";
  import { page } from "$app/stores";

  let isLocaleReady = $state(false);

  onMount(async () => {
    await setupI18n();
    waitLocale().then(() => {
      isLocaleReady = true;
    });

    // Update display direction when locale changes
    locale.subscribe((localeCode) => {
      updateDisplayDirection(localeCode ?? "en-AU");
    });
  });
</script>

{#if isLocaleReady && appSession.loaded}
  {#key $page.url.pathname}
    <main in:fly={{ duration: 1000 }}>
      <small>
        &copy; {new Date().getFullYear()} TauriFlow v{appSession.appVersion}
      </small>
      {@render children()}
    </main>
  {/key}
{/if}
