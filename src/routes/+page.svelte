<script lang="ts">
  import { goto } from "$app/navigation";
  import { Button, Tooltip } from "flowbite-svelte";
  import { scale } from "svelte/transition";
  import * as Icons from "flowbite-svelte-icons";
  import { onMount } from "svelte";
  import { warn, debug, trace, info, error } from "@tauri-apps/plugin-log";

  let isDark = $state(false);

  function toggleTheme() {
    isDark = !isDark;
    document.documentElement.classList.toggle("dark");
  }

  onMount(() => {
    trace("Trace");
    debug("Debug");
    info("Info", { file: "/routes/+page.svelte", line: 27 });
    warn("Warn", { file: "/routes/+page.svelte", line: 28 });
    error("Error", { file: "/routes/+page.svelte", line: 29 });
    error("Error");
  });
</script>

{#snippet colourCircle(color: string)}
  <div
    class="w-8 h-8 rounded-full border border-gray-200"
    style="background-color: var({color})"
  ></div>
  <Tooltip type="light" class="bg-gray-600" transition={scale}>
    <span class="font-mono text-white!">{color}</span>
  </Tooltip>
{/snippet}

<main>
  <Button class="brand-outline-button self-start" onclick={toggleTheme}>
    {#if isDark}
      <Icons.SunSolid />
    {/if}
    {#if !isDark}
      <Icons.MoonSolid />
    {/if}
  </Button>

  <Button class="brand-solid-button" onclick={() => goto("/sandbox")}>
    Go to Sandbox
  </Button>

  <h1>TauriFlow</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
    bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra
    justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus
    et magnis dis parturient montes, nascetur ridiculus mus.
  </p>

  <h1 class="mt-4">Flowbite theme colours</h1>
  <div class="flex flex-wrap gap-2">
    {@render colourCircle("--color-primary-50")}
    {@render colourCircle("--color-primary-100")}
    {@render colourCircle("--color-primary-200")}
    {@render colourCircle("--color-primary-300")}
    {@render colourCircle("--color-primary-400")}
    {@render colourCircle("--color-primary-500")}
    {@render colourCircle("--color-primary-600")}
    {@render colourCircle("--color-primary-700")}
    {@render colourCircle("--color-primary-800")}
    {@render colourCircle("--color-primary-900")}
    {@render colourCircle("--color-secondary-50")}
    {@render colourCircle("--color-secondary-100")}
    {@render colourCircle("--color-secondary-200")}
    {@render colourCircle("--color-secondary-300")}
    {@render colourCircle("--color-secondary-400")}
    {@render colourCircle("--color-secondary-500")}
    {@render colourCircle("--color-secondary-600")}
    {@render colourCircle("--color-secondary-700")}
    {@render colourCircle("--color-secondary-800")}
    {@render colourCircle("--color-secondary-900")}
  </div>

  <h1 class="mt-4">Default theme colours</h1>
  <div class="flex flex-wrap gap-2">
    {@render colourCircle("--brand1")}
    {@render colourCircle("--brand2")}
    {@render colourCircle("--brand3")}
    {@render colourCircle("--fg")}
    {@render colourCircle("--bg1")}
    {@render colourCircle("--bg2")}
    {@render colourCircle("--bg3")}
    {@render colourCircle("--border1")}
    {@render colourCircle("--border2")}
    {@render colourCircle("--border3")}
    {@render colourCircle("--text1")}
    {@render colourCircle("--text2")}
    {@render colourCircle("--text3")}
    {@render colourCircle("--text-inverse")}
    {@render colourCircle("--text-invariant")}
    {@render colourCircle("--status-success1")}
    {@render colourCircle("--status-success2")}
    {@render colourCircle("--status-success3")}
    {@render colourCircle("--status-warning1")}
    {@render colourCircle("--status-warning2")}
    {@render colourCircle("--status-warning3")}
    {@render colourCircle("--status-danger1")}
    {@render colourCircle("--status-danger2")}
    {@render colourCircle("--status-danger3")}
    {@render colourCircle("--status-info1")}
    {@render colourCircle("--status-info2")}
    {@render colourCircle("--status-info3")}
  </div>
</main>
