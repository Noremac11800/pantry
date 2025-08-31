<script lang="ts">
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
  import * as Icons from "flowbite-svelte-icons";
  import type { Component } from "svelte";
  import { goto } from "$app/navigation";
  import { t } from "svelte-i18n";
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
      <span class="text-xl!">{$t(title)}</span>
    </div>
    {#if description}
      <span class="text-sm text-[var(--text3)]!">{$t(description)}</span>
    {/if}
  </div>
{/snippet}

<Breadcrumb>
  <BreadcrumbItem home homeClass="text-lg" href="/"
    >{$t("page-title.home")}</BreadcrumbItem
  >
  <BreadcrumbItem spanClass="text-lg! text-[var(--text3)]! cursor-default!">
    {$t("page-title.sandbox")}
  </BreadcrumbItem>
</Breadcrumb>

<h1>{$t("page-title.sandbox")}</h1>
<div class="flex flex-col gap-4">
  {@render topic(
    "page-title.components",
    "/sandbox/components",
    Icons.GridOutline,
    "page.sandbox.components-description"
  )}
  {@render topic(
    "page-title.database",
    "/sandbox/database",
    Icons.DatabaseOutline,
    "page.sandbox.database-description"
  )}
  {@render topic(
    "page-title.debugging",
    "/sandbox/debugging",
    Icons.BugOutline,
    "page.sandbox.debugging-description"
  )}
  {@render topic(
    "page-title.internationalization",
    "/sandbox/internationalization",
    Icons.LanguageOutline,
    "page.sandbox.internationalization-description"
  )}
  {@render topic(
    "page-title.theming",
    "/sandbox/theming",
    Icons.PaletteOutline,
    "page.sandbox.theming-description"
  )}
  {@render topic(
    "page-title.typography",
    "/sandbox/typography",
    Icons.FontFamilyOutline,
    "page.sandbox.typography-description"
  )}
  {@render topic(
    "page-title.wcag-accessibility",
    "/sandbox/wcag-accessibility",
    Icons.EyeOutline,
    "page.sandbox.wcag-accessibility-description"
  )}
</div>
