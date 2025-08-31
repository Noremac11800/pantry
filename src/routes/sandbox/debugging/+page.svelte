<script lang="ts">
  import { appLogDir } from "@tauri-apps/api/path";
  import { info, warn, error } from "@tauri-apps/plugin-log";
  import { onMount } from "svelte";
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
  import { readTextFile, writeTextFile } from "@tauri-apps/plugin-fs";
  import { path } from "@tauri-apps/api";
  import { revealItemInDir } from "@tauri-apps/plugin-opener";
  import { Button } from "flowbite-svelte";
  import * as Icons from "flowbite-svelte-icons";
  import { AppInfo } from "../../../lib/app-info";
  import { t } from "svelte-i18n";

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

{#snippet systemInfo(title: string, info: any)}
  <div class="flex gap-2 items-center">
    <h3>{title}:</h3>
    {#await info then info}
      <p>{info}</p>
    {/await}
  </div>
{/snippet}

<Breadcrumb>
  <BreadcrumbItem home homeClass="text-lg" href="/"
    >{$t("page-title.home")}</BreadcrumbItem
  >
  <BreadcrumbItem linkClass="text-lg" href="/sandbox"
    >{$t("page-title.sandbox")}</BreadcrumbItem
  >
  <BreadcrumbItem spanClass="text-lg! text-[var(--text3)]! cursor-default!">
    {$t("page-title.debugging")}
  </BreadcrumbItem>
</Breadcrumb>

<h1>{$t("page-title.debugging")}</h1>

<h2>{$t("page.sandbox.debugging.logs")}</h2>

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
    {$t("page.sandbox.debugging.clear-logs")}
  </Button>
</div>
<div
  class="bg-[var(--bg1)] border border-[var(--border1)] p-4 rounded whitespace-pre-wrap max-h-[60vh] overflow-y-scroll"
>
  <span>{logInfo}</span>
</div>

<h2>
  {$t("page.sandbox.debugging.system-info")}
</h2>

{@render systemInfo("Platform", AppInfo.platform)}
{@render systemInfo("Version", AppInfo.version)}
{@render systemInfo("Family", AppInfo.family)}
{@render systemInfo("Arch", AppInfo.arch)}
{@render systemInfo("Locale", AppInfo.locale)}
