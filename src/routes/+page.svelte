<script lang="ts">
  import { Button, Checkbox, Input } from "flowbite-svelte";
  import {
    Apple,
    Banana,
    Eye,
    History,
    Pencil,
    Plus,
    SquareX,
    Trash2,
  } from "@lucide/svelte";
  import * as Icons from "flowbite-svelte-icons";
  import ItemList from "./ItemList.svelte";
  import { appSession } from "$lib/app-session.svelte";

  let isAddingCategory = $state(false);
  let addCategoryInput: HTMLInputElement | undefined = $state(undefined);
  let itemHistory: string[] = $state(["Apple"]);
  let shoppingList: { category: string; items: string[] }[] = $state([
    {
      category: "Fruits",
      items: ["Apple", "Banana", "Orange"],
    },
    {
      category: "Vegetables",
      items: ["Carrot", "Potato", "Spinach", "Cabbage"],
    },
    {
      category: "Grains",
      items: ["Rice", "Wheat", "Barley"],
    },
    {
      category: "Proteins",
      items: ["Chicken", "Beef", "Fish"],
    },
    {
      category: "Dairy",
      items: ["Milk", "Cheese", "Eggs"],
    },
    {
      category: "Beverages",
      items: ["Water", "Coffee", "Tea"],
    },
  ]);
  let editingModeActive = $state(true);
  let deleteActive = $state(false);

  function addItemToCategory(category: string, item: string) {
    shoppingList = shoppingList.map((c) => {
      if (c.category === category) {
        c.items.push(item);
      }
      return c;
    });
    addItemToHistory(item);
  }

  function addItemToHistory(item: string) {
    itemHistory = [...itemHistory, item];
  }

  function deleteItemPressed(category: string, item: string) {
    shoppingList = shoppingList.map((c) => {
      if (c.category === category) {
        c.items = c.items.filter((i) => i !== item);
      }
      return c;
    });
  }

  function addCategoryPressed() {
    isAddingCategory = true;
    setTimeout(() => {
      addCategoryInput?.focus();
    }, 100);
  }

  function deleteCategoryPressed(category: string) {
    shoppingList = shoppingList.filter((c) => c.category !== category);
  }

  function clearListPressed() {
    shoppingList = [];
    deleteActive = false;
  }

  function handleInputKeydown(e: KeyboardEvent) {
    if (e.key === "Enter") {
      if (addCategoryInput?.value && addCategoryInput?.value.trim() !== "") {
        shoppingList = [
          ...shoppingList,
          { category: addCategoryInput?.value ?? "", items: [] },
        ];
        if (addCategoryInput) {
          addCategoryInput.value = "";
        }
      }
    }
    if (e.key === "Escape") {
      isAddingCategory = false;
    }
  }
</script>

{#snippet categoryView(category: string, items: string[])}
  <div class="flex flex-col gap-4 relative">
    {#if deleteActive}
      <Button
        class="status-danger-button absolute end-0 top-0  rounded-full! w-8! h-8! p-1! "
        onclick={() => deleteCategoryPressed(category)}
      >
        <Trash2 size="16" />
      </Button>
    {/if}
    {@render categoryHeader(category)}
    <ItemList
      {items}
      {deleteActive}
      onAddItem={(item) => addItemToCategory(category, item)}
      onDeleteItem={(item) => deleteItemPressed(category, item)}
    />
  </div>
{/snippet}

{#snippet categoryHeader(category: string)}
  <div>
    <h2>{category}</h2>
    <div class="h-[1px] bg-[var(--text3)]"></div>
  </div>
{/snippet}

<main>
  <Button
    class="brand-outline-button rounded-full! p-2! absolute start-8 top-8 w-10 h-10"
    onclick={() => appSession.themeManager.toggleTheme()}
  >
    {#if appSession.themeManager.isDark}
      <Icons.MoonSolid />
    {/if}
    {#if !appSession.themeManager.isDark}
      <Icons.SunSolid />
    {/if}
  </Button>

  <Button
    class="brand-outline-button rounded-full! p-2! absolute end-8 top-8 w-10 h-10"
    onclick={() => (editingModeActive = !editingModeActive)}
  >
    {#if editingModeActive}
      <Eye />
    {/if}
    {#if !editingModeActive}
      <Pencil />
    {/if}
  </Button>

  <h1 class="self-center mb-4 flex items-center gap-4">
    <Apple color="var(--status-danger1)" fill="var(--status-danger2)" />
    Pantry
    <Banana color="var(--status-warning1)" fill="var(--status-warning2)" />
  </h1>

  {#if editingModeActive}
    {#if shoppingList.length > 0}
      <div class="flex items-center justify-between">
        <div class="flex items-center gap-2">
          <Checkbox class="w-6! h-6!" bind:checked={deleteActive} />
          <p>Delete items</p>
        </div>
        {#if deleteActive}
          <Button class="status-danger-button h-6!" onclick={clearListPressed}>
            Clear entire list
            <SquareX />
          </Button>
        {/if}
      </div>
    {/if}

    {#if isAddingCategory}
      <Input
        id="add-category-input"
        onblur={() => {
          isAddingCategory = false;
        }}
        bind:elementRef={addCategoryInput}
        onkeydown={handleInputKeydown}
      />
    {:else}
      <Button
        id="add-category-button"
        class="brand-outline-button w-full h-8"
        onclick={addCategoryPressed}
      >
        <Plus />
        Add category
      </Button>
    {/if}

    {#if shoppingList.length == 0}
      <p class="text-center text-[var(--text3)] italic">
        Add items to your shopping list!
      </p>
    {/if}

    <div class="grid grid-cols-2 gap-4">
      {#each shoppingList as category}
        {@render categoryView(category.category, category.items)}
      {/each}
    </div>

    {#if itemHistory.length > 0}
      <Button
        class="brand-solid-button absolute end-8 bottom-12 rounded-full! w-14 h-14 shadow-[black]"
      >
        <History />
      </Button>
    {/if}
  {:else}
    <div
      class="grid grid-cols-2 gap-4 border border-[var(--border1)] p-2 rounded bg-[var(--bg1)]"
    >
      {#each shoppingList as category}
        <div>
          {@render categoryHeader(category.category)}
          {#each category.items as item}
            <p>{item}</p>
          {/each}
        </div>
      {/each}
    </div>
  {/if}
</main>
