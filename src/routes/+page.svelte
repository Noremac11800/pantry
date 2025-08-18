<script lang="ts">
  import { goto } from "$app/navigation";
  import { Button, Checkbox } from "flowbite-svelte";
  import * as Icons from "flowbite-svelte-icons";
  import { _ } from "svelte-i18n";
  import LanguageSwitcher from "./sandbox/components/LanguageSwitcher.svelte";
  import { appSession } from "$lib/app-session.svelte";
</script>

<main>
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

  <img src="app-icon.svg" alt="App Icon" class="w-48 h-48 self-center" />

  <h1 class="self-center">Welcome to {$_("page.home.title")}</h1>

  <Button class="brand-solid-button" onclick={() => goto("/sandbox")}>
    {$_("page.home.sandbox")}
  </Button>

  <span>This is some text that needs to be translated</span>

  <div id="TODO" class="flex flex-col gap-2">
    <h1>TODO</h1>
    <ul class="text-[var(--text3)]">
      <li>
        <Checkbox>Theme management</Checkbox>
      </li>
      <li>
        <Checkbox>Translate all hard-coded text</Checkbox>
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
