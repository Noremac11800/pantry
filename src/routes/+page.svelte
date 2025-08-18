<script lang="ts">
  import { goto } from "$app/navigation";
  import { Button, Checkbox, Tooltip } from "flowbite-svelte";
  import { scale } from "svelte/transition";
  import * as Icons from "flowbite-svelte-icons";
  import { _ } from "svelte-i18n";
  import LanguageSwitcher from "./sandbox/components/LanguageSwitcher.svelte";

  let isDark = $state(false);
  let languageSwitcher: LanguageSwitcher;

  function toggleTheme() {
    isDark = !isDark;
    document.documentElement.classList.toggle("dark");
  }
</script>

<main>
  <div class="flex justify-between items-center">
    <Button
      class="brand-outline-button rounded-full! p-4!"
      onclick={toggleTheme}
    >
      {#if isDark}
        <Icons.MoonSolid />
      {/if}
      {#if !isDark}
        <Icons.SunSolid />
      {/if}
    </Button>

    <LanguageSwitcher bind:this={languageSwitcher} />
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
