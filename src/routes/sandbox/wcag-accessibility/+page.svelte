<script lang="ts">
  import { contrastRatio, getContrastColor } from "$lib/color-helpers";
  import { info } from "@tauri-apps/plugin-log";
  import { openUrl } from "@tauri-apps/plugin-opener";
  import {
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Hr,
    Input,
    InputAddon,
    Label,
  } from "flowbite-svelte";
  import * as Icons from "flowbite-svelte-icons";
  import { onMount } from "svelte";
  import ColorPicker, {
    type RgbaColor,
    type HsvaColor,
  } from "svelte-awesome-color-picker";

  let isColorPicker1Open = $state(false);
  let isColorPicker2Open = $state(false);
  let rgb1: RgbaColor | null = $state(null);
  let hex1: string | null = $state("#FFFFFF");
  let hsv1: HsvaColor | null = $state(null);
  let rgb2: RgbaColor | null = $state(null);
  let hex2: string | null = $state("#FFFFFF");
  let hsv2: HsvaColor | null = $state(null);
  let contrastColor1 = $derived.by(() => getContrastColor(hex1 ?? "#FFFFFF"));
  let contrastColor2 = $derived.by(() => getContrastColor(hex2 ?? "#FFFFFF"));
  let contrastRatioValue = $derived.by(() =>
    contrastRatio(hex1 ?? "#FFFFFF", hex2 ?? "#FFFFFF")
  );

  function toggleShowColorPicker1() {
    isColorPicker1Open = !isColorPicker1Open;
  }

  function toggleShowColorPicker2() {
    isColorPicker2Open = !isColorPicker2Open;
  }

  onMount(() => {
    const root = document.documentElement;
    if (root.classList.contains("dark")) {
      hex1 = "#000000";
      hex2 = "#ffffff";
    } else {
      hex1 = "#ffffff";
      hex2 = "#000000";
    }
  });
</script>

<main>
  <Breadcrumb>
    <BreadcrumbItem href="/">Home</BreadcrumbItem>
    <BreadcrumbItem href="/sandbox">Sandbox</BreadcrumbItem>
  </Breadcrumb>

  <h1>WCAG Accessibility</h1>

  <div class="flex flex-col gap-2">
    <div class="flex flex-col gap-2 items-center justify-center">
      <div class="flex flex-col gap-2">
        <div
          class="p-4 border rounded"
          style="background-color: {hex2}; border-color: {contrastColor2};"
        >
          <span style="color: {hex1}">Example text</span>
        </div>
      </div>
      <span class="text-sm text-[var(--text3)]!">
        <!-- svelte-ignore a11y_click_events_have_key_events -->
        <!-- svelte-ignore a11y_no_static_element_interactions -->
        <!-- svelte-ignore a11y_missing_attribute -->
        <a
          onclick={() =>
            openUrl(
              "https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=143#contrast-minimum"
            )}
          class="underline"
        >
          WCAG 2.x AA
        </a>
        required contrast ratio: &gt;4.5
      </span>
      <span class="flex gap-2 items-center">
        {#if contrastRatioValue > 4.5}
          <Icons.CheckCircleOutline color="var(--status-success1)" />
        {:else}
          <Icons.CloseCircleOutline color="var(--status-danger1)" />
        {/if}
        Contrast ratio = {contrastRatioValue.toFixed(2)}
      </span>
    </div>
  </div>

  <div class="flex flex-col gap-4">
    <InputAddon class="flex gap-2">
      <Label>Text color</Label>
      <Input value={hex1 ?? ""} />
      <div class="translate-y-[40px] z-50">
        <ColorPicker
          bind:rgb={rgb1}
          bind:hex={hex1}
          bind:hsv={hsv1}
          isDialog={true}
          bind:isOpen={isColorPicker1Open}
          isAlpha
          label=""
          --input-size="0px"
          --cp-bg-color="var(--bg1)"
          --cp-border-color="var(--border1)"
          --cp-text-color="var(--text1)"
          --cp-input-color="var(--bg2)"
          --cp-button-hover-color="var(--bg3)"
          --slider-width="20px"
        />
      </div>
      <div
        class="rounded-full border"
        style="background-color: {hex1}; border-color: {contrastColor1};"
      >
        <Button
          class="neutral-solid-button rounded-full! p-2! bg-transparent!"
          style="color: {contrastColor1}"
          onclick={toggleShowColorPicker1}
        >
          <Icons.PaletteOutline />
        </Button>
      </div>
    </InputAddon>

    <div class="flex flex-col gap-2 pl-4">
      <div>
        <span>Hex: </span>
        <span>{hex1}</span>
      </div>
      <div class="flex flex-col">
        <span>RGB: </span>
        <div class="flex gap-2">
          <span>{rgb1?.r.toFixed(2)}</span>
          <span>{rgb1?.g.toFixed(2)}</span>
          <span>{rgb1?.b.toFixed(2)}</span>
        </div>
      </div>
      <div>
        <span>HSV: </span>
        <span>{hsv1?.h.toFixed(2)}</span>
        <span>{hsv1?.s.toFixed(2)}</span>
        <span>{hsv1?.v.toFixed(2)}</span>
      </div>
      <div>
        <span>Alpha: </span>
        <span>{rgb1?.a.toFixed(2)}</span>
      </div>
    </div>
  </div>

  <Hr />

  <div class="flex flex-col gap-4">
    <InputAddon class="flex gap-2">
      <Label>Background color</Label>
      <Input value={hex2 ?? ""} />
      <div class="translate-y-[40px] z-50">
        <ColorPicker
          bind:rgb={rgb2}
          bind:hex={hex2}
          bind:hsv={hsv2}
          isDialog={true}
          bind:isOpen={isColorPicker2Open}
          isAlpha
          label=""
          --input-size="0px"
          --cp-bg-color="var(--bg1)"
          --cp-border-color="var(--border1)"
          --cp-text-color="var(--text1)"
          --cp-input-color="var(--bg2)"
          --cp-button-hover-color="var(--bg3)"
          --slider-width="20px"
        />
      </div>
      <div
        class="rounded-full border"
        style="background-color: {hex2}; border-color: {contrastColor2};"
      >
        <Button
          class="neutral-solid-button rounded-full! p-2! bg-transparent!"
          style="color: {contrastColor2}"
          onclick={toggleShowColorPicker2}
        >
          <Icons.PaletteOutline />
        </Button>
      </div>
    </InputAddon>

    <div class="flex flex-col gap-2 pl-4">
      <div>
        <span>Hex: </span>
        <span>{hex2}</span>
      </div>
      <div class="flex flex-col">
        <span>RGB: </span>
        <div class="flex gap-2">
          <span>{rgb2?.r.toFixed(2)}</span>
          <span>{rgb2?.g.toFixed(2)}</span>
          <span>{rgb2?.b.toFixed(2)}</span>
        </div>
      </div>
      <div>
        <span>HSV: </span>
        <span>{hsv2?.h.toFixed(2)}</span>
        <span>{hsv2?.s.toFixed(2)}</span>
        <span>{hsv2?.v.toFixed(2)}</span>
      </div>
      <div>
        <span>Alpha: </span>
        <span>{rgb2?.a.toFixed(2)}</span>
      </div>
    </div>
  </div>
</main>
