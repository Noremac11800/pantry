<script lang="ts">
  import { appLogDir } from "@tauri-apps/api/path";
  import { info } from "@tauri-apps/plugin-log";
  import { onMount } from "svelte";
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
  import { readTextFile } from "@tauri-apps/plugin-fs";
  import { path } from "@tauri-apps/api";

  const logFileName = "app-logs.log";
  let logDir = $state<string>("");
  let logInfo = $state<string>("");

  onMount(async () => {
    logDir = await appLogDir();
    info(logDir);

    logInfo = await readTextFile(await path.join(logDir, logFileName));
  });
</script>

<main>
  <Breadcrumb>
    <BreadcrumbItem href="/">Home</BreadcrumbItem>
    <BreadcrumbItem href="/sandbox">Sandbox</BreadcrumbItem>
  </Breadcrumb>

  <h1>Debugging</h1>

  <h2>Logs</h2>
  <p>{logDir}</p>
  <div
    class="bg-[var(--bg1)] border border-[var(--border1)] p-4 rounded whitespace-pre-wrap max-h-[60vh] overflow-y-scroll"
  >
    {logInfo}
  </div>
</main>
