<script lang="ts">
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
  import { Tooltip } from "flowbite-svelte";
  import { scale } from "svelte/transition";
  import { appSession } from "$lib/app-session.svelte";
  import { Button } from "flowbite-svelte";
  import * as Icons from "flowbite-svelte-icons";
</script>

{#snippet colorCircle(color: string)}
  <div
    class="w-8 h-8 rounded-full border border-gray-200"
    style="background-color: var({color})"
  ></div>
  <Tooltip class="bg-[var(--bg1)]!" transition={scale}>
    <span class="font-mono text-[var(--text1)]!">{color}</span>
  </Tooltip>
{/snippet}

<main>
  <Breadcrumb>
    <BreadcrumbItem href="/">Home</BreadcrumbItem>
    <BreadcrumbItem href="/sandbox">Sandbox</BreadcrumbItem>
  </Breadcrumb>

  <h1>Theming</h1>

  <Button
    class="brand-outline-button rounded-full! p-4! self-center"
    onclick={() => appSession.themeManager.toggleTheme()}
  >
    {#if appSession.themeManager.isDark}
      <Icons.MoonSolid />
    {/if}
    {#if !appSession.themeManager.isDark}
      <Icons.SunSolid />
    {/if}
  </Button>

  <h1 class="mt-4">Flowbite default theme colors</h1>
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

  <h1 class="mt-4">Application theme colors</h1>
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
