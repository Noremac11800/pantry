<script lang="ts">
  import { Breadcrumb, BreadcrumbItem, Button } from "flowbite-svelte";
</script>

<main>
  <Breadcrumb>
    <BreadcrumbItem href="/">Home</BreadcrumbItem>
    <BreadcrumbItem href="/sandbox">Sandbox</BreadcrumbItem>
  </Breadcrumb>

  <h1>Components</h1>
  <Button class="brand-solid-button gap-2">Brand Solid Button</Button>
  <Button class="brand-outline-button gap-2">Brand Outline Button</Button>
  <Button class="brand-transparent-button gap-2">
    Brand Transparent Button
  </Button>
  <Button class="neutral-solid-button gap-2">Neutral Solid Button</Button>
  <Button class="neutral-outline-button gap-2">Neutral Outline Button</Button>
  <Button class="neutral-transparent-button gap-2">
    Neutral Transparent Button
  </Button>
</main>
