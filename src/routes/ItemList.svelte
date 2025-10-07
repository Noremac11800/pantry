<script lang="ts">
  import { Button, Input } from "flowbite-svelte";
  import { Plus, Trash2 } from "@lucide/svelte";

  let {
    items,
    deleteActive,
    onAddItem,
    onDeleteItem,
  }: {
    items: string[];
    deleteActive: boolean;
    onAddItem?: (item: string) => void;
    onDeleteItem?: (item: string) => void;
  } = $props();
  let isAddingItem = $state(false);
  let addItemInput: HTMLInputElement | undefined = $state(undefined);

  function addItemPressed() {
    isAddingItem = true;
    setTimeout(() => {
      addItemInput?.focus();
    }, 100);
  }

  function deleteItemPressed(item: string) {
    onDeleteItem?.(item);
  }

  function handleInputKeydown(e: KeyboardEvent) {
    if (e.key === "Enter") {
      if (addItemInput?.value && addItemInput?.value.trim() !== "") {
        onAddItem?.(addItemInput?.value);
        if (addItemInput) {
          addItemInput.value = "";
        }
      }
    }
    if (e.key === "Escape") {
      isAddingItem = false;
    }
  }
</script>

<div class="flex flex-col gap-2">
  <ul>
    {#each items as item}
      <li>
        <div class="flex justify-between">
          {item}
          {#if deleteActive}
            <Button
              class="status-danger-button rounded-full! w-6! h-6! p-1! "
              onclick={() => deleteItemPressed(item)}
            >
              <Trash2 size="16" />
            </Button>
          {/if}
        </div>
      </li>
    {/each}
  </ul>
  {#if isAddingItem}
    <Input
      id="add-item-input"
      bind:elementRef={addItemInput}
      class="w-full h-8"
      onblur={() => {
        isAddingItem = false;
      }}
      onkeydown={handleInputKeydown}
    />
  {:else}
    <Button
      id="add-item-button"
      class="brand-outline-button w-full h-8"
      onclick={() => {
        addItemPressed();
      }}
    >
      <Plus />
    </Button>
  {/if}
</div>
