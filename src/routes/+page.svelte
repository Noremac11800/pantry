<script lang="ts">
  import { goto } from "$app/navigation";
  import { Button, Checkbox } from "flowbite-svelte";
  import * as Icons from "flowbite-svelte-icons";
  import { t } from "svelte-i18n";
  import LanguageSwitcher from "./sandbox/components/LanguageSwitcher.svelte";
  import { appSession } from "$lib/app-session.svelte";
  import { openUrl } from "@tauri-apps/plugin-opener";
</script>

<div class="flex flex-col gap-8">
  <div class="flex justify-between items-center">
    <Button
      class="brand-outline-button rounded-full! p-4!"
      onclick={() => appSession.themeManager.toggleTheme()}
    >
      {#if appSession.themeManager.isDark}
        <Icons.MoonSolid />
      {/if}
      {#if !appSession.themeManager.isDark}
        <Icons.SunSolid />
      {/if}
    </Button>

    <LanguageSwitcher />
  </div>

  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y_no_noninteractive_element_interactions -->
  <img
    src="app-icon.svg"
    alt="App Icon"
    onclick={() => openUrl("https://github.com/Noremac11800/TauriFlow")}
    class="w-48 h-48 self-center hover:scale-105 transition-transform duration-200 cursor-pointer"
  />

  <h1 class="self-center">{$t("page.home.welcome")}</h1>

  <Button class="brand-solid-button" onclick={() => goto("/sandbox")}>
    {$t("page.home.sandbox")}
  </Button>
</div>
