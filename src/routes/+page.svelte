<script lang="ts">
  import { Breadcrumb, BreadcrumbItem, Tooltip } from "flowbite-svelte";
  import { scale } from "svelte/transition";
</script>

{#snippet colourCircle(color: string)}
  <div
    class="w-8 h-8 rounded-full border border-gray-200"
    style="background-color: var({color})"
  ></div>
  <Tooltip type="light" class="bg-gray-600" transition={scale}>
    <span class="font-mono text-white!">{color}</span>
  </Tooltip>
{/snippet}

<main>
  <Breadcrumb>
    <BreadcrumbItem href="/">Home</BreadcrumbItem>
    <BreadcrumbItem href="/sandbox">Sandbox</BreadcrumbItem>
    <BreadcrumbItem href="/sandbox/database">Database</BreadcrumbItem>
  </Breadcrumb>

  <h1>TauriFlow</h1>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
    bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra
    justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus
    et magnis dis parturient montes, nascetur ridiculus mus.
  </p>

  <h1 class="mt-4">Flowbite theme colours</h1>
  <div class="flex flex-wrap gap-2">
    {@render colourCircle("--color-primary-50")}
    {@render colourCircle("--color-primary-100")}
    {@render colourCircle("--color-primary-200")}
    {@render colourCircle("--color-primary-300")}
    {@render colourCircle("--color-primary-400")}
    {@render colourCircle("--color-primary-500")}
    {@render colourCircle("--color-primary-600")}
    {@render colourCircle("--color-primary-700")}
    {@render colourCircle("--color-primary-800")}
    {@render colourCircle("--color-primary-900")}
    {@render colourCircle("--color-secondary-50")}
    {@render colourCircle("--color-secondary-100")}
    {@render colourCircle("--color-secondary-200")}
    {@render colourCircle("--color-secondary-300")}
    {@render colourCircle("--color-secondary-400")}
    {@render colourCircle("--color-secondary-500")}
    {@render colourCircle("--color-secondary-600")}
    {@render colourCircle("--color-secondary-700")}
    {@render colourCircle("--color-secondary-800")}
    {@render colourCircle("--color-secondary-900")}
  </div>

  <h1 class="mt-4">Default theme colours</h1>
</main>
