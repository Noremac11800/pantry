<script lang="ts">
  import { Breadcrumb, BreadcrumbItem, Button } from "flowbite-svelte";
</script>

<Breadcrumb>
  <BreadcrumbItem home homeClass="text-lg" href="/">Home</BreadcrumbItem>
  <BreadcrumbItem linkClass="text-lg" href="/sandbox">Sandbox</BreadcrumbItem>
  <BreadcrumbItem spanClass="text-lg! text-[var(--text3)]! cursor-default!">
    Components
  </BreadcrumbItem>
</Breadcrumb>

<h1>Components</h1>
<Button class="brand-solid-button">Brand Solid Button</Button>
<Button class="brand-outline-button">Brand Outline Button</Button>
<Button class="brand-transparent-button">Brand Transparent Button</Button>
<Button class="neutral-solid-button">Neutral Solid Button</Button>
<Button class="neutral-outline-button">Neutral Outline Button</Button>
<Button class="neutral-transparent-button">Neutral Transparent Button</Button>
<Button class="status-danger-button">Status Danger Button</Button>
