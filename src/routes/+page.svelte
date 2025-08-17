<script lang="ts">
  import { goto } from "$app/navigation";
  import { Button, Checkbox, Tooltip } from "flowbite-svelte";
  import { scale } from "svelte/transition";
  import * as Icons from "flowbite-svelte-icons";

  let isDark = $state(false);

  function toggleTheme() {
    isDark = !isDark;
    document.documentElement.classList.toggle("dark");
  }
</script>

{#snippet colorCircle(color: string)}
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

  <div id="TODO" class="flex flex-col gap-2">
    <h1>TODO</h1>
    <ul class="text-[var(--text3)]">
      <li>
        <Checkbox>WCAG accessibility standards</Checkbox>
      </li>
      <li>
        <Checkbox>Internationalization</Checkbox>
      </li>
      <li>
        <Checkbox>Theme management</Checkbox>
      </li>
    </ul>
  </div>

  <h1>TauriFlow</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
    bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra
    justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus
    et magnis dis parturient montes, nascetur ridiculus mus.
  </p>

  <h1 class="mt-4">Flowbite theme colors</h1>
  <div class="flex flex-wrap gap-2">
    {@render colorCircle("--color-primary-50")}
    {@render colorCircle("--color-primary-100")}
    {@render colorCircle("--color-primary-200")}
    {@render colorCircle("--color-primary-300")}
    {@render colorCircle("--color-primary-400")}
    {@render colorCircle("--color-primary-500")}
    {@render colorCircle("--color-primary-600")}
    {@render colorCircle("--color-primary-700")}
    {@render colorCircle("--color-primary-800")}
    {@render colorCircle("--color-primary-900")}
    {@render colorCircle("--color-secondary-50")}
    {@render colorCircle("--color-secondary-100")}
    {@render colorCircle("--color-secondary-200")}
    {@render colorCircle("--color-secondary-300")}
    {@render colorCircle("--color-secondary-400")}
    {@render colorCircle("--color-secondary-500")}
    {@render colorCircle("--color-secondary-600")}
    {@render colorCircle("--color-secondary-700")}
    {@render colorCircle("--color-secondary-800")}
    {@render colorCircle("--color-secondary-900")}
  </div>

  <h1 class="mt-4">Default theme colors</h1>
  <div class="flex flex-wrap gap-2">
    {@render colorCircle("--brand1")}
    {@render colorCircle("--brand2")}
    {@render colorCircle("--brand3")}
    {@render colorCircle("--fg")}
    {@render colorCircle("--bg1")}
    {@render colorCircle("--bg2")}
    {@render colorCircle("--bg3")}
    {@render colorCircle("--border1")}
    {@render colorCircle("--border2")}
    {@render colorCircle("--border3")}
    {@render colorCircle("--text1")}
    {@render colorCircle("--text2")}
    {@render colorCircle("--text3")}
    {@render colorCircle("--text-inverse")}
    {@render colorCircle("--text-invariant")}
    {@render colorCircle("--status-success1")}
    {@render colorCircle("--status-success2")}
    {@render colorCircle("--status-success3")}
    {@render colorCircle("--status-warning1")}
    {@render colorCircle("--status-warning2")}
    {@render colorCircle("--status-warning3")}
    {@render colorCircle("--status-danger1")}
    {@render colorCircle("--status-danger2")}
    {@render colorCircle("--status-danger3")}
    {@render colorCircle("--status-info1")}
    {@render colorCircle("--status-info2")}
    {@render colorCircle("--status-info3")}
  </div>
</main>
