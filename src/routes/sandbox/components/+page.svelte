<script lang="ts">
  import { Breadcrumb, BreadcrumbItem, Button } from "flowbite-svelte";
</script>

<main>
  <Breadcrumb>
    <BreadcrumbItem href="/">Home</BreadcrumbItem>
    <BreadcrumbItem href="/sandbox">Sandbox</BreadcrumbItem>
  </Breadcrumb>

  <h1>Components</h1>
  <Button class="brand-solid-button">Brand Solid Button</Button>
  <Button class="brand-outline-button">Brand Outline Button</Button>
  <Button class="brand-transparent-button">Brand Transparent Button</Button>
  <Button class="neutral-solid-button">Neutral Solid Button</Button>
  <Button class="neutral-outline-button">Neutral Outline Button</Button>
  <Button class="neutral-transparent-button">Neutral Transparent Button</Button>
  <Button class="status-danger-button">Status Danger Button</Button>
</main>
