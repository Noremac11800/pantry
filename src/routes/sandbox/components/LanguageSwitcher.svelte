<script lang="ts">
  import { locale, t } from "svelte-i18n";
  import {
    Button,
    Dropdown,
    DropdownGroup,
    DropdownHeader,
    DropdownItem,
  } from "flowbite-svelte";
  import * as Icons from "flowbite-svelte-icons";

  let {
    class: className,
    buttonClass = "brand-outline-button",
    isOpen = $bindable(false),
  }: { class?: string; buttonClass?: string; isOpen?: boolean } = $props();

  function selectLanguage(langCode: string) {
    locale.set(langCode);
    isOpen = false;
  }
</script>

{#snippet languageDropdownItem(langCode: string)}
  <DropdownItem
    onclick={() => selectLanguage(langCode)}
    class="w-full m-0! p-0!"
  >
    <Button class="neutral-solid-button w-full justify-start font-normal!">
      {langCode}
      {#if langCode === $locale}
        <Icons.CheckOutline color="var(--brand1)" />
      {/if}
    </Button>
  </DropdownItem>
{/snippet}

<Button class="{buttonClass} {className}">
  <Icons.LanguageOutline />
  {$locale}
</Button>
<Dropdown
  class="bg-[var(--bg1)]! border border-[var(--border1)]"
  placement="bottom-start"
  bind:isOpen
>
  <DropdownHeader>
    <span class="font-semibold"
      >{$t("component.language-switcher.select-language")}</span
    >
  </DropdownHeader>
  <DropdownGroup class="overflow-y-auto max-h-[200px]">
    {@render languageDropdownItem("ar-SA")}
    {@render languageDropdownItem("ar")}
    {@render languageDropdownItem("bn-BD")}
    {@render languageDropdownItem("de-DE")}
    {@render languageDropdownItem("en-AU")}
    {@render languageDropdownItem("en-US")}
    {@render languageDropdownItem("es-ES")}
    {@render languageDropdownItem("fa-IR")}
    {@render languageDropdownItem("fr-CA")}
    {@render languageDropdownItem("fr-FR")}
    {@render languageDropdownItem("hi-IN")}
    {@render languageDropdownItem("id-ID")}
    {@render languageDropdownItem("it-IT")}
    {@render languageDropdownItem("ja-JP")}
    {@render languageDropdownItem("ko")}
    {@render languageDropdownItem("pl-PL")}
    {@render languageDropdownItem("pt-BR")}
    {@render languageDropdownItem("pt-PT")}
    {@render languageDropdownItem("ru-RU")}
    {@render languageDropdownItem("sw-KE")}
    {@render languageDropdownItem("th-TH")}
    {@render languageDropdownItem("tr-TR")}
    {@render languageDropdownItem("uk-UA")}
    {@render languageDropdownItem("ur-PK")}
    {@render languageDropdownItem("vi-VN")}
    {@render languageDropdownItem("zh-CN")}
    {@render languageDropdownItem("zh-HK")}
    {@render languageDropdownItem("zh-TW")}
  </DropdownGroup>

  <Button
    class="neutral-solid-button text-sm! font-normal! m-1"
    onclick={() => locale.set("en-AU")}
  >
    {$t("component.language-switcher.reset-to-default")}
    <Icons.RefreshOutline />
  </Button>
</Dropdown>
