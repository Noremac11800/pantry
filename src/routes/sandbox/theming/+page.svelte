<script lang="ts">
  import { parse, formatHex } from "culori";
  import {
    Accordion,
    AccordionItem,
    Breadcrumb,
    BreadcrumbItem,
    TabItem,
    Tabs,
  } from "flowbite-svelte";
  import { Tooltip } from "flowbite-svelte";
  import { scale } from "svelte/transition";
  import { appSession } from "$lib/app-session.svelte";
  import { Button } from "flowbite-svelte";
  import * as Icons from "flowbite-svelte-icons";
  import ColorPickerInput from "../components/ColorPickerInput.svelte";
  import { onMount } from "svelte";

  const tabActiveClass =
    "w-full p-4 bg-[var(--bg2)] rounded-lg cursor-pointer text-[var(--brand1)] hover:bg-[var(--bg3)]";
  const tabInactiveClass =
    "w-full p-4 bg-[var(--bg1)] rounded-lg cursor-pointer text-[var(--text1)] hover:bg-[var(--bg2)]";

  let brand1 = $state("");
  let brand2 = $state("");
  let brand3 = $state("");
  let fg = $state("");
  let bg1 = $state("");
  let bg2 = $state("");
  let bg3 = $state("");
  let border1 = $state("");
  let border2 = $state("");
  let border3 = $state("");
  let text1 = $state("");
  let text2 = $state("");
  let text3 = $state("");
  let textInverse = $state("");
  let textInvariant = $state("");
  let statusSuccess1 = $state("");
  let statusSuccess2 = $state("");
  let statusSuccess3 = $state("");
  let statusWarning1 = $state("");
  let statusWarning2 = $state("");
  let statusWarning3 = $state("");
  let statusDanger1 = $state("");
  let statusDanger2 = $state("");
  let statusDanger3 = $state("");
  let statusInfo1 = $state("");
  let statusInfo2 = $state("");
  let statusInfo3 = $state("");

  function getNormalizedHexColor(color: string) {
    return formatHex(parse(color) ?? "") ?? "";
  }

  function getColor(cssVarKey: string) {
    return getComputedStyle(document.documentElement).getPropertyValue(
      cssVarKey
    );
  }

  function setColor(cssVarKey: string, color: string) {
    document.documentElement.style.setProperty(cssVarKey, color);
  }

  function resetColors() {
    document.documentElement.style.removeProperty("--brand1");
    document.documentElement.style.removeProperty("--brand2");
    document.documentElement.style.removeProperty("--brand3");
    document.documentElement.style.removeProperty("--fg");
    document.documentElement.style.removeProperty("--bg1");
    document.documentElement.style.removeProperty("--bg2");
    document.documentElement.style.removeProperty("--bg3");
    document.documentElement.style.removeProperty("--border1");
    document.documentElement.style.removeProperty("--border2");
    document.documentElement.style.removeProperty("--border3");
    document.documentElement.style.removeProperty("--text1");
    document.documentElement.style.removeProperty("--text2");
    document.documentElement.style.removeProperty("--text3");
    document.documentElement.style.removeProperty("--text-inverse");
    document.documentElement.style.removeProperty("--text-invariant");
    document.documentElement.style.removeProperty("--status-success1");
    document.documentElement.style.removeProperty("--status-success2");
    document.documentElement.style.removeProperty("--status-success3");
    document.documentElement.style.removeProperty("--status-warning1");
    document.documentElement.style.removeProperty("--status-warning2");
    document.documentElement.style.removeProperty("--status-warning3");
    document.documentElement.style.removeProperty("--status-danger1");
    document.documentElement.style.removeProperty("--status-danger2");
    document.documentElement.style.removeProperty("--status-danger3");
    document.documentElement.style.removeProperty("--status-info1");
    document.documentElement.style.removeProperty("--status-info2");
    document.documentElement.style.removeProperty("--status-info3");

    brand1 = getNormalizedHexColor(getColor("--brand1"));
    brand2 = getNormalizedHexColor(getColor("--brand2"));
    brand3 = getNormalizedHexColor(getColor("--brand3"));
    fg = getNormalizedHexColor(getColor("--fg"));
    bg1 = getNormalizedHexColor(getColor("--bg1"));
    bg2 = getNormalizedHexColor(getColor("--bg2"));
    bg3 = getNormalizedHexColor(getColor("--bg3"));
    border1 = getNormalizedHexColor(getColor("--border1"));
    border2 = getNormalizedHexColor(getColor("--border2"));
    border3 = getNormalizedHexColor(getColor("--border3"));
    text1 = getNormalizedHexColor(getColor("--text1"));
    text2 = getNormalizedHexColor(getColor("--text2"));
    text3 = getNormalizedHexColor(getColor("--text3"));
    textInverse = getNormalizedHexColor(getColor("--text-inverse"));
    textInvariant = getNormalizedHexColor(getColor("--text-invariant"));
    statusSuccess1 = getNormalizedHexColor(getColor("--status-success1"));
    statusSuccess2 = getNormalizedHexColor(getColor("--status-success2"));
    statusSuccess3 = getNormalizedHexColor(getColor("--status-success3"));
    statusWarning1 = getNormalizedHexColor(getColor("--status-warning1"));
    statusWarning2 = getNormalizedHexColor(getColor("--status-warning2"));
    statusWarning3 = getNormalizedHexColor(getColor("--status-warning3"));
    statusDanger1 = getNormalizedHexColor(getColor("--status-danger1"));
    statusDanger2 = getNormalizedHexColor(getColor("--status-danger2"));
    statusDanger3 = getNormalizedHexColor(getColor("--status-danger3"));
    statusInfo1 = getNormalizedHexColor(getColor("--status-info1"));
    statusInfo2 = getNormalizedHexColor(getColor("--status-info2"));
    statusInfo3 = getNormalizedHexColor(getColor("--status-info3"));
  }

  onMount(() => {
    resetColors();
  });
</script>

{#snippet colorCircle(color: string)}
  <div
    class="w-8 h-8 rounded-full border border-[var(--border1)]"
    style="background-color: var({color})"
  ></div>
  <Tooltip class="bg-[var(--bg1)]!" transition={scale}>
    <span class="font-mono text-[var(--text1)]!">{color}</span>
  </Tooltip>
{/snippet}

<Breadcrumb>
  <BreadcrumbItem home homeClass="text-lg" href="/">Home</BreadcrumbItem>
  <BreadcrumbItem linkClass="text-lg" href="/sandbox">Sandbox</BreadcrumbItem>
  <BreadcrumbItem spanClass="text-lg! text-[var(--text3)]! cursor-default!">
    Theming
  </BreadcrumbItem>
</Breadcrumb>

<h1>Theming</h1>

<div class="flex justify-around items-center mt-4">
  <div class="flex flex-col gap-2">
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
    <span>Toggle theme</span>
  </div>
  <div class="flex flex-col gap-2">
    <Button
      class="brand-outline-button rounded-full! p-4! self-center"
      onclick={() => resetColors()}
    >
      <Icons.RefreshOutline />
    </Button>
    <span>Reset colors</span>
  </div>
</div>

<h2 class="mt-4">Application theme colors</h2>
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

<Accordion class="border-none! mt-4">
  <AccordionItem
    contentClass="border-[var(--border1)]!"
    inactiveClass="border-[var(--border1)]! rounded-lg!"
    activeClass="border-[var(--border1)]! rounded-lg rounded-b-none!"
    headerClass="cursor-pointer"
  >
    {#snippet header()}
      <h3>Flowbite default theme colors</h3>
    {/snippet}
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
  </AccordionItem>
</Accordion>

<h2 class="mt-4">Configure theme colors</h2>
<Tabs
  tabStyle="full"
  ulClass="h-8"
  contentClass="flex flex-col gap-2 p-4 bg-[var(--bg1)] border border-[var(--border1)]"
>
  <TabItem
    class="w-full"
    activeClass={tabActiveClass}
    inactiveClass={tabInactiveClass}
    title="Brand"
    open
  >
    <ColorPickerInput
      label="--brand1"
      bind:hex={brand1}
      onColorChanged={(hex) => setColor("--brand1", hex)}
    />
    <ColorPickerInput
      label="--brand2"
      bind:hex={brand2}
      onColorChanged={(hex) => setColor("--brand2", hex)}
    />
    <ColorPickerInput
      label="--brand3"
      bind:hex={brand3}
      onColorChanged={(hex) => setColor("--brand3", hex)}
    />
  </TabItem>
  <TabItem
    class="w-full"
    activeClass={tabActiveClass}
    inactiveClass={tabInactiveClass}
    title="Fg+bg+border"
  >
    <ColorPickerInput
      label="--fg"
      bind:hex={fg}
      onColorChanged={(hex) => setColor("--fg", hex)}
    />
    <ColorPickerInput
      label="--bg1"
      bind:hex={bg1}
      onColorChanged={(hex) => setColor("--bg1", hex)}
    />
    <ColorPickerInput
      label="--bg2"
      bind:hex={bg2}
      onColorChanged={(hex) => setColor("--bg2", hex)}
    />
    <ColorPickerInput
      label="--bg3"
      bind:hex={bg3}
      onColorChanged={(hex) => setColor("--bg3", hex)}
    />
    <ColorPickerInput
      label="--border1"
      bind:hex={border1}
      onColorChanged={(hex) => setColor("--border1", hex)}
    />
    <ColorPickerInput
      label="--border2"
      bind:hex={border2}
      onColorChanged={(hex) => setColor("--border2", hex)}
    />
    <ColorPickerInput
      label="--border3"
      bind:hex={border3}
      onColorChanged={(hex) => setColor("--border3", hex)}
    />
  </TabItem>
  <TabItem
    class="w-full"
    activeClass={tabActiveClass}
    inactiveClass={tabInactiveClass}
    title="Text"
  >
    <ColorPickerInput
      label="--text1"
      bind:hex={text1}
      onColorChanged={(hex) => setColor("--text1", hex)}
    />
    <ColorPickerInput
      label="--text2"
      bind:hex={text2}
      onColorChanged={(hex) => setColor("--text2", hex)}
    />
    <ColorPickerInput
      label="--text3"
      bind:hex={text3}
      onColorChanged={(hex) => setColor("--text3", hex)}
    />
    <ColorPickerInput
      label="--text-inverse"
      bind:hex={textInverse}
      onColorChanged={(hex) => setColor("--text-inverse", hex)}
    />
    <ColorPickerInput
      label="--text-invariant"
      bind:hex={textInvariant}
      onColorChanged={(hex) => setColor("--text-invariant", hex)}
    />
  </TabItem>
  <TabItem
    class="w-full"
    activeClass={tabActiveClass}
    inactiveClass={tabInactiveClass}
    title="Status"
  >
    <ColorPickerInput
      label="--status-success1"
      bind:hex={statusSuccess1}
      onColorChanged={(hex) => setColor("--status-success1", hex)}
    />
    <ColorPickerInput
      label="--status-success2"
      bind:hex={statusSuccess2}
      onColorChanged={(hex) => setColor("--status-success2", hex)}
    />
    <ColorPickerInput
      label="--status-success3"
      bind:hex={statusSuccess3}
      onColorChanged={(hex) => setColor("--status-success3", hex)}
    />
    <ColorPickerInput
      label="--status-warning1"
      bind:hex={statusWarning1}
      onColorChanged={(hex) => setColor("--status-warning1", hex)}
    />
    <ColorPickerInput
      label="--status-warning2"
      bind:hex={statusWarning2}
      onColorChanged={(hex) => setColor("--status-warning2", hex)}
    />
    <ColorPickerInput
      label="--status-warning3"
      bind:hex={statusWarning3}
      onColorChanged={(hex) => setColor("--status-warning3", hex)}
    />
    <ColorPickerInput
      label="--status-danger1"
      bind:hex={statusDanger1}
      onColorChanged={(hex) => setColor("--status-danger1", hex)}
    />
    <ColorPickerInput
      label="--status-danger2"
      bind:hex={statusDanger2}
      onColorChanged={(hex) => setColor("--status-danger2", hex)}
    />
    <ColorPickerInput
      label="--status-danger3"
      bind:hex={statusDanger3}
      onColorChanged={(hex) => setColor("--status-danger3", hex)}
    />
    <ColorPickerInput
      label="--status-info1"
      bind:hex={statusInfo1}
      onColorChanged={(hex) => setColor("--status-info1", hex)}
    />
    <ColorPickerInput
      label="--status-info2"
      bind:hex={statusInfo2}
      onColorChanged={(hex) => setColor("--status-info2", hex)}
    />
    <ColorPickerInput
      label="--status-info3"
      bind:hex={statusInfo3}
      onColorChanged={(hex) => setColor("--status-info3", hex)}
    />
  </TabItem>
</Tabs>

<h2 class="mt-4">Theme preview</h2>
<div id="theme-preview" class="flex flex-col gap-2">
  <div
    class="flex flex-col gap-2 bg-[var(--bg1)] p-4 border border-[var(--border1)] rounded"
  >
    <Button class="brand-solid-button self-center">Brand</Button>
    <div class="flex gap-4">
      <span class="text-[var(--text1)]!">primary text</span>
      <span class="text-[var(--text2)]!">secondary text</span>
      <span class="text-[var(--text3)]!">tertiary text</span>
    </div>
    <div class="flex gap-4">
      <span
        class="text-[var(--status-success1)]! bg-[var(--status-success3)] border-2 border-[var(--status-success2)] p-2 rounded"
        >success</span
      >
      <span
        class="text-[var(--status-warning1)]! bg-[var(--status-warning3)] border-2 border-[var(--status-warning2)] p-2 rounded"
        >warning</span
      >
      <span
        class="text-[var(--status-danger1)]! bg-[var(--status-danger3)] border-2 border-[var(--status-danger2)] p-2 rounded"
        >danger</span
      >
      <span
        class="text-[var(--status-info1)]! bg-[var(--status-info3)] border-2 border-[var(--status-info2)] p-2 rounded"
        >info</span
      >
    </div>
    <div
      class="flex flex-col gap-2 bg-[var(--bg2)] p-4 border border-[var(--border2)] rounded"
    >
      <div class="flex gap-4">
        <span class="text-[var(--text1)]!">primary text</span>
        <span class="text-[var(--text2)]!">secondary text</span>
        <span class="text-[var(--text3)]!">tertiary text</span>
      </div>

      <div
        class="flex flex-col gap-2 bg-[var(--bg3)] p-4 border border-[var(--border3)] rounded"
      >
        <div class="flex gap-4">
          <span class="text-[var(--text1)]!">primary text</span>
          <span class="text-[var(--text2)]!">secondary text</span>
          <span class="text-[var(--text3)]!">tertiary text</span>
        </div>
      </div>
    </div>
  </div>
</div>

<Accordion class="border-none! mt-4">
  <AccordionItem
    contentClass="border-[var(--border1)]!"
    inactiveClass="border-[var(--border1)]! rounded-lg!"
    activeClass="border-[var(--border1)]! rounded-lg rounded-b-none!"
    headerClass="cursor-pointer"
  >
    {#snippet header()}
      <h3>CSS variables</h3>
    {/snippet}
    <p class="text-[var(--text1)] font-mono">
      --brand1: {brand1} <br />
      --brand2: {brand2} <br />
      --brand3: {brand3} <br />
      --fg: {fg} <br />
      --bg1: {bg1} <br />
      --bg2: {bg2} <br />
      --bg3: {bg3} <br />
      --border1: {border1} <br />
      --border2: {border2} <br />
      --border3: {border3} <br />
      --text1: {text1} <br />
      --text2: {text2} <br />
      --text3: {text3} <br />
      --text-inverse: {textInverse} <br />
      --text-invariant: {textInvariant} <br />
      --status-success1: {statusSuccess1} <br />
      --status-success2: {statusSuccess2} <br />
      --status-success3: {statusSuccess3} <br />
      --status-warning1: {statusWarning1} <br />
      --status-warning2: {statusWarning2} <br />
      --status-warning3: {statusWarning3} <br />
      --status-danger1: {statusDanger1} <br />
      --status-danger2: {statusDanger2} <br />
      --status-danger3: {statusDanger3} <br />
      --status-info1: {statusInfo1} <br />
      --status-info2: {statusInfo2} <br />
      --status-info3: {statusInfo3}
    </p>
  </AccordionItem>
</Accordion>
