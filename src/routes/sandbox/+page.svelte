<script lang="ts">
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
  import * as Icons from "flowbite-svelte-icons";
  import type { Component } from "svelte";
  import { goto } from "$app/navigation";
</script>

{#snippet topic(
  title: string,
  route: string,
  icon: Component,
  description?: string
)}
  <!-- svelte-ignore a11y-click-events-have-key-events -->
  <!-- svelte-ignore a11y-no-static-element-interactions -->
  <!-- svelte-ignore a11y-no-noninteractive-tabindex -->
  <div
    role="button"
    onkeydown={(e) => {
      if (e.key === "Enter" || e.key === " ") {
        goto(route);
      }
    }}
    tabindex="0"
    onclick={() => goto(route)}
    class="flex flex-col gap-2 border border-[var(--border1)] p-2 rounded-md hover:bg-[var(--bg1)] active:bg-[var(--bg2)] hover:border-[var(--brand2)] active:border-[var(--brand3)] transition-colors duration-200 cursor-pointer"
  >
    <div class="flex gap-2 items-center">
      <svelte:component
        this={icon}
        size="xl"
        strokeWidth={1.5}
        color="var(--text1)"
      />
      <span class="text-xl!">{title}</span>
    </div>
    {#if description}
      <span class="text-sm text-[var(--text3)]!">{description}</span>
    {/if}
  </div>
{/snippet}

<Breadcrumb>
  <BreadcrumbItem home homeClass="text-lg" href="/">Home</BreadcrumbItem>
  <BreadcrumbItem spanClass="text-lg! text-[var(--text3)]! cursor-default!">
    Sandbox
  </BreadcrumbItem>
</Breadcrumb>

<h1>Sandbox</h1>
<div class="flex flex-col gap-4">
  {@render topic(
    "Components",
    "/sandbox/components",
    Icons.GridOutline,
    "A collection of components, styles, and classes implemented by default for convenience, based on Flowbite Svelte. Any components and styles can be easily extended or replaced"
  )}
  {@render topic(
    "Database",
    "/sandbox/database",
    Icons.DatabaseOutline,
    "Contains examples of using the Tauri 2.0 SQL plugin in order to interact with a local SQLite database"
  )}
  {@render topic(
    "Debugging",
    "/sandbox/debugging",
    Icons.BugOutline,
    "Contains debugging information and examples of using the Tauri 2.0 log plugin"
  )}
  {@render topic(
    "i18n: Internationalization",
    "/sandbox/internationalization",
    Icons.LanguageOutline,
    "Contains examples of the internationalization features available in the application"
  )}
  {@render topic(
    "Theming",
    "/sandbox/theming",
    Icons.PaletteOutline,
    "Demonstrates the app-level theming defaults and capabilities of the application"
  )}
  {@render topic(
    "Typography",
    "/sandbox/typography",
    Icons.FontFamilyOutline,
    "Demonstrates the different typography options available in the application"
  )}
  {@render topic(
    "WCAG 2.1 Accessibility",
    "/sandbox/wcag-accessibility",
    Icons.EyeOutline,
    "Demonstrates the WCAG accessibility features available in the application. Considerable emphasis is placed on WCAG 2.1 AA compliance, especially in the context of color contrast"
  )}
</div>
