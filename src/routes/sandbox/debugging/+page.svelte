<script lang="ts">
  import { appLogDir } from "@tauri-apps/api/path";
  import { info, warn, error } from "@tauri-apps/plugin-log";
  import { onMount } from "svelte";
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
  import { readTextFile, writeTextFile } from "@tauri-apps/plugin-fs";
  import { path } from "@tauri-apps/api";
  import { revealItemInDir } from "@tauri-apps/plugin-opener";
  import { Button, Tooltip } from "flowbite-svelte";
  import * as Icons from "flowbite-svelte-icons";
  import { scale } from "svelte/transition";
  import { AppInfo } from "../../../lib/app-info";

  const logFileName = "app-logs.log";
  let logDir = $state<string>("");
  let logInfo = $state<string>("");
  let logPath = $state<string>("");

  function openLogDir() {
    revealItemInDir(logDir);
  }

  function clearLogs() {
    writeTextFile(logPath, "");
    logInfo = "";
  }

  onMount(async () => {
    info("Info", { file: "/routes/sandbox/debugging/+page.svelte", line: 28 });
    warn("Warn", { file: "/routes/sandbox/debugging/+page.svelte", line: 29 });
    error("Error", {
      file: "/routes/sandbox/debugging/+page.svelte",
      line: 30,
    });

    logDir = await appLogDir();

    logPath = await path.join(logDir, logFileName);
    logInfo = await readTextFile(logPath);
  });
</script>

<main>
  <Breadcrumb>
    <BreadcrumbItem href="/">Home</BreadcrumbItem>
    <BreadcrumbItem href="/sandbox">Sandbox</BreadcrumbItem>
  </Breadcrumb>

  <h1>Debugging</h1>

  <h2>Logs</h2>

  <div class="flex gap-2 items-center justify-between">
    {#if AppInfo.isDesktop()}
      <Button class="brand-solid-button" onclick={openLogDir}>
        <Icons.FolderOutline />
      </Button>
    {:else}
      <div></div>
    {/if}

    <Button class="status-danger-button" onclick={clearLogs}>
      <Icons.TrashBinOutline />
      Clear logs
    </Button>
  </div>
  <div
    class="bg-[var(--bg1)] border border-[var(--border1)] p-4 rounded whitespace-pre-wrap max-h-[60vh] overflow-y-scroll"
  >
    <span>{logInfo}</span>
  </div>

  <h2>Platform</h2>
  <p>{AppInfo.getPlatform()}</p>
</main>
