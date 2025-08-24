<script lang="ts">
  import { goto } from "$app/navigation";
  import { Button, Checkbox } from "flowbite-svelte";
  import * as Icons from "flowbite-svelte-icons";
  import { _ } from "svelte-i18n";
  import LanguageSwitcher from "./sandbox/components/LanguageSwitcher.svelte";
  import { appSession } from "$lib/app-session.svelte";
  import { openUrl } from "@tauri-apps/plugin-opener";
</script>

<main>
  <small>&copy; {new Date().getFullYear()} TauriFlow v0.1.0</small>
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

  <h1 class="self-center">Welcome to {$_("page.home.title")}</h1>

  <Button class="brand-solid-button" onclick={() => goto("/sandbox")}>
    {$_("page.home.sandbox")}
  </Button>

  <span>This is some text that needs to be translated</span>

  <div id="TODO" class="flex flex-col gap-2">
    <h1>TODO</h1>
    <ul class="text-[var(--text3)]">
      <li>
        <Checkbox>Translate all hard-coded text</Checkbox>
      </li>
      <li>
        <Checkbox>Implement Typography page</Checkbox>
      </li>
      <li>
        <Checkbox>Implement i18n page</Checkbox>
      </li>
      <li>
        <Checkbox>Implement Git versioning</Checkbox>
      </li>
      <li>
        <Checkbox>Fill out README</Checkbox>
      </li>
      <li>
        <Checkbox
          >Implement device safe areas (see theming page for example using
          Drawer)</Checkbox
        >
      </li>
    </ul>
  </div>

  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
    bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra
    justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus
    et magnis dis parturient montes, nascetur ridiculus mus.
  </p>
</main>
