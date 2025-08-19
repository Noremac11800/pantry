<script lang="ts">
  import { Input, InputAddon, Label } from "flowbite-svelte";
  import { Button } from "flowbite-svelte";
  import * as Icons from "flowbite-svelte-icons";
  import ColorPicker, {
    type HsvaColor,
    type RgbaColor,
  } from "svelte-awesome-color-picker";
  import { getContrastColor } from "$lib/color-helpers";

  let {
    label = "",
    rgb = $bindable(null),
    hex = $bindable(""),
    hsv = $bindable(null),
    isPickerOpen = $bindable(false),
    onColorChanged,
  }: {
    label?: string;
    rgb?: RgbaColor | null;
    hex?: string;
    hsv?: HsvaColor | null;
    isPickerOpen?: boolean;
    onColorChanged?: (hex: string) => void;
  } = $props();

  let contrastColor = $derived.by(() => getContrastColor(hex ?? "#FFFFFF"));

  function toggleShowColorPicker() {
    isPickerOpen = !isPickerOpen;
  }
</script>

<InputAddon class="flex gap-2 rounded-lg">
  <span class="whitespace-nowrap">{label}</span>
  <Input bind:value={hex} />
  <div class="translate-y-[40px] z-50">
    <ColorPicker
      position="responsive"
      onInput={(e) => onColorChanged?.(e.hex ?? "")}
      bind:rgb
      bind:hex
      bind:hsv
      isDialog={true}
      bind:isOpen={isPickerOpen}
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
    style="background-color: {hex}; border-color: {contrastColor};"
  >
    <Button
      class="neutral-solid-button rounded-full! p-2! bg-transparent!"
      style="color: {contrastColor}"
      onclick={toggleShowColorPicker}
    >
      <Icons.PaletteOutline />
    </Button>
  </div>
</InputAddon>
