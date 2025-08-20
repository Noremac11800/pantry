<script lang="ts">
  import { Breadcrumb, BreadcrumbItem } from "flowbite-svelte";

  const code = `
for i in range(10):
    print(i)
`;
</script>

<main>
  <Breadcrumb>
    <BreadcrumbItem href="/">Home</BreadcrumbItem>
    <BreadcrumbItem href="/sandbox">Sandbox</BreadcrumbItem>
  </Breadcrumb>

  <h1>Typography</h1>

  <h1>Heading 1</h1>
  <h2>Heading 2</h2>
  <h3>Heading 3</h3>
  <h4>Heading 4</h4>
  <h5>Heading 5</h5>
  <h6>Heading 6</h6>
  <section>Section</section>
  <p>Paragraph</p>
  <span>Span</span>
  <ul>
    <li>Unordered List Item</li>
    <li>Unordered List Item</li>
    <li>Unordered List Item</li>
  </ul>
  <ol>
    <li>Ordered List Item</li>
    <li>Ordered List Item</li>
    <li>Ordered List Item</li>
  </ol>

  <pre class="google-sans-mono">{code}</pre>
</main>
