<script lang="ts">
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";
  import { t } from "svelte-i18n";

  const code = `
iters = 10

def foo(bar: str) -> None:
  for _ in range(iters):
    print(bar)

if __name__ == "__main__":
  foo("Hello World")
`;
</script>

<Breadcrumb>
  <BreadcrumbItem home homeClass="text-lg" href="/"
    >{$t("page-title.home")}</BreadcrumbItem
  >
  <BreadcrumbItem linkClass="text-lg" href="/sandbox"
    >{$t("page-title.sandbox")}</BreadcrumbItem
  >
  <BreadcrumbItem spanClass="text-lg! text-[var(--text3)]! cursor-default!">
    {$t("page-title.typography")}
  </BreadcrumbItem>
</Breadcrumb>

<h1>{$t("page-title.typography")}</h1>
<div class="flex flex-col gap-1 items-center justify-center">
  <h1>{$t("page.sandbox.typography.heading-1")}</h1>
  <h2>{$t("page.sandbox.typography.heading-2")}</h2>
  <h3>{$t("page.sandbox.typography.heading-3")}</h3>
  <h4>{$t("page.sandbox.typography.heading-4")}</h4>
  <h5>{$t("page.sandbox.typography.heading-5")}</h5>
  <h6>{$t("page.sandbox.typography.heading-6")}</h6>
  <p>{$t("page.sandbox.typography.paragraph")}</p>
  <span>{$t("page.sandbox.typography.span")}</span>
  <small>{$t("page.sandbox.typography.small")}</small>
</div>

<div class="flex flex-col gap-2 border border-[var(--border1)] p-4 rounded">
  <h1>{$t("page.sandbox.typography.example")}</h1>
  <small class="border-l-1 border-[var(--border2)] p-2">
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
    bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra
    justo commodo. Proin sodales pulvinar tempor.
  </small>
  <p>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean euismod
    bibendum laoreet. Proin gravida dolor sit amet lacus accumsan et viverra
    justo commodo. Proin sodales pulvinar tempor. Cum sociis natoque penatibus
    et magnis dis parturient montes, nascetur ridiculus mus.
  </p>
  <br />
  <h2>{$t("page.sandbox.typography.monospace")}</h2>
  <pre
    class="google-sans-mono bg-[var(--bg2)] border border-[var(--border2)] p-2 rounded"
    dir="ltr">{code.trim()}</pre>
</div>
