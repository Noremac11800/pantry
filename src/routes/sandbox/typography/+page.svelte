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
  <BreadcrumbItem href="/">Home</BreadcrumbItem>
  <BreadcrumbItem href="/sandbox">Sandbox</BreadcrumbItem>
</Breadcrumb>

<div class="flex flex-col gap-1 items-center justify-center">
  <h1>Typography</h1>

  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>
  <p>Paragraph</p>
  <span>Span</span>
  <small>Small</small>
  <pre class="google-sans-mono">{code}</pre>
</div>
