<script lang="ts">
  import {
    Breadcrumb,
    BreadcrumbItem,
    Button,
    Datepicker,
    Table,
    TableBody,
    TableBodyCell,
    TableBodyRow,
    TableHead,
    TableHeadCell,
    Timepicker,
  } from "flowbite-svelte";
  import { locale, t, time, date, number } from "svelte-i18n";
  import LanguageSwitcher from "../components/LanguageSwitcher.svelte";

  const tableClass = "border border-[var(--border1)]";
  const tableHeadClass = "bg-[var(--bg2)]";
  const tableBodyClass = "border border-[var(--border1)]";
  const tableBodyRowClass = "bg-[var(--bg1)]";

  let currentLocale = $derived.by(() => $locale ?? "en-AU");
  let selectedDate = $state<Date>(new Date());
  let selectedTime = $state<string>("12:00");
  let buttonPressedCount = $state<number>(0);

  function timeToDate(time: string): Date {
    const [hours, mins] = time.split(":").map(Number);
    return new Date(0, 0, 0, hours, mins);
  }
</script>

<Breadcrumb>
  <BreadcrumbItem home homeClass="text-lg" href="/"
    >{$t("pageTitle.home")}</BreadcrumbItem
  >
  <BreadcrumbItem linkClass="text-lg" href="/sandbox">Sandbox</BreadcrumbItem>
  <BreadcrumbItem spanClass="text-lg! text-[var(--text3)]! cursor-default!">
    Internationalization
  </BreadcrumbItem>
</Breadcrumb>

<h1>i18n: Internationalization</h1>

<LanguageSwitcher
  class="rounded-xl! self-center"
  buttonClass="brand-solid-button"
/>

<div class="flex flex-col gap-8">
  <div class="flex flex-col gap-4">
    <h3>Date and time</h3>

    <div class="flex gap-2">
      <Datepicker
        inputClass="flex items-center border border-[var(--border1)] h-12"
        locale={currentLocale}
        translationLocale={currentLocale}
        placeholder="Select date"
        bind:value={selectedDate}
      />
      <Timepicker
        selectClass="border border-[var(--border1)] h-12 color-[var(--text1)]! outline-none! active:outline-none! focus:outline-none!"
        inputClass="flex items-center border border-[var(--border1)] h-12 color-[var(--text1)]! outline-none! active:outline-none! focus:outline-none!"
        bind:value={selectedTime}
      />
    </div>

    <Table class={tableClass}>
      <TableHead class={tableHeadClass}>
        <TableHeadCell>Date format</TableHeadCell>
        <TableHeadCell>en-AU</TableHeadCell>
        <TableHeadCell>Current language ({$locale})</TableHeadCell>
      </TableHead>
      <TableBody class={tableBodyClass}>
        <TableBodyRow class={tableBodyRowClass}>
          <TableBodyCell>Date (short)</TableBodyCell>
          <TableBodyCell>
            {$date(selectedDate, { format: "short", locale: "en-AU" })}
          </TableBodyCell>
          <TableBodyCell>
            {$date(selectedDate, { format: "short" })}
          </TableBodyCell>
        </TableBodyRow>
        <TableBodyRow class={tableBodyRowClass}>
          <TableBodyCell>Date (medium)</TableBodyCell>
          <TableBodyCell>
            {$date(selectedDate, { format: "medium", locale: "en-AU" })}
          </TableBodyCell>
          <TableBodyCell>
            {$date(selectedDate, { format: "medium" })}
          </TableBodyCell>
        </TableBodyRow>
        <TableBodyRow class={tableBodyRowClass}>
          <TableBodyCell>Date (long)</TableBodyCell>
          <TableBodyCell>
            {$date(selectedDate, { format: "long", locale: "en-AU" })}
          </TableBodyCell>
          <TableBodyCell
            >{$date(selectedDate, { format: "long" })}</TableBodyCell
          >
        </TableBodyRow>
        <TableBodyRow class={tableBodyRowClass}>
          <TableBodyCell>Date (full)</TableBodyCell>
          <TableBodyCell>
            {$date(selectedDate, { format: "full", locale: "en-AU" })}
          </TableBodyCell>
          <TableBodyCell
            >{$date(selectedDate, { format: "full" })}</TableBodyCell
          >
        </TableBodyRow>
      </TableBody>
    </Table>

    <Table class={tableClass}>
      <TableHead class={tableHeadClass}>
        <TableHeadCell>Time format</TableHeadCell>
        <TableHeadCell>en-AU</TableHeadCell>
        <TableHeadCell>Current language ({$locale})</TableHeadCell>
      </TableHead>
      <TableBody class={tableBodyClass}>
        <TableBodyRow class={tableBodyRowClass}>
          <TableBodyCell>Time (short)</TableBodyCell>
          <TableBodyCell>
            {$time(timeToDate(selectedTime), {
              format: "short",
              locale: "en-AU",
            })}
          </TableBodyCell>
          <TableBodyCell
            >{$time(timeToDate(selectedTime), {
              format: "short",
            })}</TableBodyCell
          >
        </TableBodyRow>
        <TableBodyRow class={tableBodyRowClass}>
          <TableBodyCell>Time (medium)</TableBodyCell>
          <TableBodyCell>
            {$time(timeToDate(selectedTime), {
              format: "medium",
              locale: "en-AU",
            })}
          </TableBodyCell>
          <TableBodyCell
            >{$time(timeToDate(selectedTime), {
              format: "medium",
            })}</TableBodyCell
          >
        </TableBodyRow>
        <TableBodyRow class={tableBodyRowClass}>
          <TableBodyCell>Time (long)</TableBodyCell>
          <TableBodyCell>
            {$time(timeToDate(selectedTime), {
              format: "long",
              locale: "en-AU",
            })}
          </TableBodyCell>
          <TableBodyCell
            >{$time(timeToDate(selectedTime), {
              format: "long",
            })}</TableBodyCell
          >
        </TableBodyRow>
        <TableBodyRow class={tableBodyRowClass}>
          <TableBodyCell>Time (full)</TableBodyCell>
          <TableBodyCell>
            {$time(timeToDate(selectedTime), {
              format: "full",
              locale: "en-AU",
            })}
          </TableBodyCell>
          <TableBodyCell
            >{$time(timeToDate(selectedTime), {
              format: "full",
            })}</TableBodyCell
          >
        </TableBodyRow>
      </TableBody>
    </Table>
  </div>

  <div class="flex flex-col gap-2">
    <h3>Number and currency</h3>

    <Table class={tableClass}>
      <TableHead class={tableHeadClass}>
        <TableHeadCell></TableHeadCell>
        <TableHeadCell>Number and currency</TableHeadCell>
        <TableHeadCell>en-AU</TableHeadCell>
        <TableHeadCell>Current language ({$locale})</TableHeadCell>
      </TableHead>
      <TableBody class={tableBodyClass}>
        <TableBodyRow class={tableBodyRowClass}>
          <TableBodyCell class="text-center">
            <span class="text-[var(--text1)]! text-semibold!">Number</span>
          </TableBodyCell>
          <TableBodyCell>100000000</TableBodyCell>
          <TableBodyCell
            >{$number(100000000, { locale: "en-AU" })}</TableBodyCell
          >
          <TableBodyCell>{$number(100000000)}</TableBodyCell>
        </TableBodyRow>
        <TableBodyRow class={tableBodyRowClass}>
          <TableBodyCell class="text-center">
            <span class="text-[var(--text1)]! text-semibold!">Currency</span>
          </TableBodyCell>
          <TableBodyCell>100000000</TableBodyCell>
          <TableBodyCell
            >{$number(100000000, {
              style: "currency",
              currency: "AUD",
              locale: "en-AU",
            })}</TableBodyCell
          >
          <TableBodyCell
            >{$number(100000000, {
              style: "currency",
              currency: "AUD",
            })}</TableBodyCell
          >
        </TableBodyRow>
        <TableBodyRow class={tableBodyRowClass}>
          <TableBodyCell class="text-center">
            <span class="text-[var(--text1)]! text-semibold!">Percent</span>
          </TableBodyCell>
          <TableBodyCell>0.1</TableBodyCell>
          <TableBodyCell
            >{$number(0.1, {
              style: "percent",
              locale: "en-AU",
            })}</TableBodyCell
          >
          <TableBodyCell>{$number(0.1, { style: "percent" })}</TableBodyCell>
        </TableBodyRow>
        <TableBodyRow class={tableBodyRowClass}>
          <TableBodyCell class="text-center">
            <span class="text-[var(--text1)]! text-semibold!">Scientific</span>
          </TableBodyCell>
          <TableBodyCell>100000000</TableBodyCell>
          <TableBodyCell
            >{$number(100000000, {
              notation: "scientific",
              locale: "en-AU",
            })}</TableBodyCell
          >
          <TableBodyCell
            >{$number(100000000, { notation: "scientific" })}</TableBodyCell
          >
        </TableBodyRow>
        <TableBodyRow class={tableBodyRowClass}>
          <TableBodyCell class="text-center">
            <span class="text-[var(--text1)]! text-semibold!">Engineering</span>
          </TableBodyCell>
          <TableBodyCell>100000000</TableBodyCell>
          <TableBodyCell
            >{$number(100000000, {
              notation: "engineering",
              locale: "en-AU",
            })}</TableBodyCell
          >
          <TableBodyCell
            >{$number(100000000, { notation: "engineering" })}</TableBodyCell
          >
        </TableBodyRow>
        <TableBodyRow class={tableBodyRowClass}>
          <TableBodyCell class="text-center">
            <span class="text-[var(--text1)]! text-semibold!">CompactLong</span>
          </TableBodyCell>
          <TableBodyCell>100000000</TableBodyCell>
          <TableBodyCell
            >{$number(100000000, {
              notation: "compact",
              compactDisplay: "long",
              locale: "en-AU",
            })}</TableBodyCell
          >
          <TableBodyCell
            >{$number(100000000, {
              notation: "compact",
              compactDisplay: "long",
            })}</TableBodyCell
          >
        </TableBodyRow>
        <TableBodyRow class={tableBodyRowClass}>
          <TableBodyCell class="text-center">
            <span class="text-[var(--text1)]! text-semibold!">CompactShort</span
            >
          </TableBodyCell>
          <TableBodyCell>100000000</TableBodyCell>
          <TableBodyCell
            >{$number(100000000, {
              notation: "compact",
              compactDisplay: "short",
              locale: "en-AU",
            })}</TableBodyCell
          >
          <TableBodyCell
            >{$number(100000000, {
              notation: "compact",
              compactDisplay: "short",
            })}</TableBodyCell
          >
        </TableBodyRow>
      </TableBody>
    </Table>
  </div>

  <div class="flex flex-col gap-2">
    <h3>Dynamic translations with string interpolation</h3>
    <Button
      class="brand-solid-button self-center"
      onclick={() => buttonPressedCount++}
    >
      {$t("sandbox.i18n.button-pressed-count", {
        values: { count: buttonPressedCount },
      })}
    </Button>
  </div>
</div>
