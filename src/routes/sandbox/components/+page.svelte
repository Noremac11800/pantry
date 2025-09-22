<script lang="ts">
  import {
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Checkbox,
  } from "flowbite-svelte";
  import { t } from "svelte-i18n";

  let areButtonsDisabled = $state(false);
</script>

<Breadcrumb>
  <BreadcrumbItem home homeClass="text-lg" href="/"
    >{$t("page-title.home")}</BreadcrumbItem
  >
  <BreadcrumbItem linkClass="text-lg" href="/sandbox"
    >{$t("page-title.sandbox")}</BreadcrumbItem
  >
  <BreadcrumbItem spanClass="text-lg! text-[var(--text3)]! cursor-default!">
    {$t("page-title.components")}
  </BreadcrumbItem>
</Breadcrumb>

<h1>{$t("page-title.components")}</h1>
<div class="flex items-center gap-2">
  <Checkbox bind:checked={areButtonsDisabled} />
  <span>Disable buttons</span>
</div>
<Button class="brand-solid-button" disabled={areButtonsDisabled}
  >Brand Solid Button</Button
>
<Button class="brand-outline-button" disabled={areButtonsDisabled}
  >Brand Outline Button</Button
>
<Button class="brand-transparent-button" disabled={areButtonsDisabled}
  >Brand Transparent Button</Button
>
<Button class="neutral-solid-button" disabled={areButtonsDisabled}
  >Neutral Solid Button</Button
>
<Button class="neutral-outline-button" disabled={areButtonsDisabled}
  >Neutral Outline Button</Button
>
<Button class="neutral-transparent-button" disabled={areButtonsDisabled}
  >Neutral Transparent Button</Button
>
<Button class="status-danger-button" disabled={areButtonsDisabled}
  >Status Danger Button</Button
>
