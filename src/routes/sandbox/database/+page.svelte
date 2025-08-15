<script lang="ts">
  import {
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Input,
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
  } from "flowbite-svelte";
  import * as Icons from "flowbite-svelte-icons";
  import Database from "@tauri-apps/plugin-sql";
  import { onMount } from "svelte";
  import type { User } from "./data_models";
  import { randomNames, randomEmails } from "./data_models";

  let db: Database | undefined;
  let selectResult: User[] | undefined;
  let name: string = "";
  let email: string = "";

  async function select() {
    selectResult = await db?.select<User[]>("SELECT * FROM users");
  }

  async function submit(randomUser: boolean = false) {
    const timeCreated = new Date().toISOString();
    const timeSinceLastUpdate = timeCreated;

    if (randomUser) {
      let randomIndex = Math.floor(Math.random() * randomNames.length);
      name = randomNames[randomIndex];
      email = randomEmails[randomIndex];
    }
    await db?.execute(
      `
        INSERT INTO users (name, email, timeCreated, timeSinceLastUpdate) VALUES (?, ?, ?, ?)
      `,
      [name, email, timeCreated, timeSinceLastUpdate]
    );
    select();
    name = "";
    email = "";
  }

  async function deleteUser(user: User) {
    await db?.execute(
      `
        DELETE FROM users WHERE id = ?
      `,
      [user.id]
    );
    select();
  }

  onMount(async () => {
    db = await Database.load("sqlite:test.db"); // stored in AppConfig dir
    await db.execute(`
        CREATE TABLE IF NOT EXISTS users (
          id INTEGER PRIMARY KEY,
          name TEXT,
          email TEXT,
          timeCreated TEXT,
          timeSinceLastUpdate TEXT
        )
      `);
    select();
  });
</script>

<main>
  <Breadcrumb>
    <BreadcrumbItem href="/">Home</BreadcrumbItem>
    <BreadcrumbItem href="/sandbox">Sandbox</BreadcrumbItem>
    <BreadcrumbItem href="/sandbox/database">Database</BreadcrumbItem>
  </Breadcrumb>

  <h1>Database</h1>
  <Button onclick={() => select()}>Refresh</Button>

  <form class="flex flex-col gap-2" onsubmit={(e) => submit()}>
    Name: <Input type="text" bind:value={name} />
    Email: <Input type="email" bind:value={email} />
    <Button type="submit">Insert new user</Button>
  </form>

  <Button onclick={() => submit(true)}>Insert random user</Button>

  <div class="border border-gray-400 rounded-lg overflow-hidden">
    <Table color="default" striped hoverable>
      <TableHead>
        <TableHeadCell></TableHeadCell>
        <TableHeadCell>ID</TableHeadCell>
        <TableHeadCell>Name</TableHeadCell>
        <TableHeadCell>Email</TableHeadCell>
        <TableHeadCell>Time Created</TableHeadCell>
        <TableHeadCell>Time Since Last Update</TableHeadCell>
      </TableHead>
      <TableBody>
        {#if selectResult}
          {#each selectResult as user (user.id)}
            <TableBodyRow>
              <TableBodyCell>
                <Button onclick={() => deleteUser(user)}>
                  <Icons.TrashBinOutline />
                </Button>
              </TableBodyCell>
              <TableBodyCell>{user.id}</TableBodyCell>
              <TableBodyCell>{user.name}</TableBodyCell>
              <TableBodyCell>{user.email}</TableBodyCell>
              <TableBodyCell>{user.timeCreated}</TableBodyCell>
              <TableBodyCell>{user.timeSinceLastUpdate}</TableBodyCell>
            </TableBodyRow>
          {/each}
        {/if}
      </TableBody>
    </Table>
  </div>
</main>
