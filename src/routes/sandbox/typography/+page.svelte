<script lang="ts">
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";

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
  <BreadcrumbItem home homeClass="text-lg" href="/">Home</BreadcrumbItem>
  <BreadcrumbItem linkClass="text-lg" href="/sandbox">Sandbox</BreadcrumbItem>
  <BreadcrumbItem spanClass="text-lg! text-[var(--text3)]! cursor-default!">
    Typography
  </BreadcrumbItem>
</Breadcrumb>

<h1>Typography</h1>
<div class="flex flex-col gap-1 items-center justify-center">
  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>
  <p>Paragraph</p>
  <span>Span</span>
  <small>Small</small>
</div>

<div class="flex flex-col gap-2 border border-[var(--border1)] p-4 rounded">
  <h1>Example</h1>
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
  <h2>Monospace</h2>
  <pre
    class="google-sans-mono bg-[var(--bg2)] border border-[var(--border2)] p-2 rounded">{code.trim()}</pre>
</div>
