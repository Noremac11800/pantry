Here’s a battle-tested, exhaustive checklist of requirements and caveats when making an **i18n-conformant app**. Think of it as a “don’t forget anything” list:

---

## 🌍 **Languages & Locales**

- Support **language codes** (`en`, `fr`, `ar`) and **regional variants** (`en-US`, `fr-CA`).
- Fall back gracefully if a locale isn’t available (e.g., `fr-CA → fr`).
- Detect system/browser locale on first load.
- Allow users to manually override locale (and persist preference).

---

## 📝 **Text & Content**

- Never hardcode UI strings → all strings go in translation files.
- Avoid string concatenation → use placeholders and interpolation (`"Hello {name}"`).
- Support **pluralization rules** (zero, one, few, many, other).
- Handle **gendered/noun forms** where applicable.
- Plan for text expansion (translations may be **30–50% longer** than English).
- Support **rich text in translations** (bold, links, formatting).
- Keep date/time/number formatting **out of translations**, rely on libraries (`Intl`).

---

## 🧭 **Layout & Direction**

- Detect and support **RTL languages** (Arabic, Hebrew, Farsi).
- Ensure CSS respects `dir="rtl"` (mirrors padding, flex, icons, etc.).
- Flip icons that imply direction (→ back arrows, play icons, etc.).
- Ensure text alignment switches correctly (`text-align: start/end` instead of left/right).
- Account for mixed RTL + LTR text in the same string.

---

## 🕒 **Dates, Times & Numbers**

- Use `Intl.DateTimeFormat`, `Intl.NumberFormat`, `Intl.RelativeTimeFormat`.
- Handle **24h vs 12h** clock formats.
- Be aware of **different calendars** (Gregorian, Islamic, Buddhist, Hebrew).
- Time zones matter → convert consistently (UTC → user’s TZ).
- Numbers: **digit shaping** (Arabic numerals `١٢٣`, Devanagari `१२३`, etc.).
- Currency: formatting & placement differ (`$1,000` vs `1 000 €`).

---

## 🔤 **Character Sets & Encoding**

- Ensure **Unicode/UTF-8** everywhere.
- Support non-Latin scripts (Chinese, Japanese, Korean, etc.).
- Handle **input & search** in multiple scripts (case, accents, diacritics).
- Watch out for text sorting/collation (e.g., `ä` vs `a`).

---

## 📐 **UI/UX Considerations**

- Dynamic font loading (some scripts need different fonts).
- Font fallback chains for missing glyphs.
- Avoid images with text; if needed, localize per locale.
- Provide room in UI for text growth.
- Responsive design for different word lengths.
- Accessibility: screen readers + i18n strings tested.

---

## ⚙️ **Dev/Build Considerations**

- Translation files structured per locale (`en.json`, `fr.json`).
- CI/CD process for syncing with translators.
- Enforce linting/checks for missing translations.
- Handle lazy-loading translations (to avoid bloated bundles).
- Namespacing for large apps (split translations by feature).
- Versioning & migration of translation keys.

---

## 🧪 **Testing**

- Test with pseudo-localization (accented/elongated text: `Hëllöööö`).
- Test with extreme cases:

  - RTL switching
  - Long strings
  - Missing translations
  - Mixed scripts (English + Japanese)

- Automated tests for locale coverage.

---

## ⚠️ **Common Pitfalls**

- Concatenated strings that break grammar (`"5 files deleted"` vs `"{count} files deleted"`).
- Forgetting to mirror layouts in RTL.
- Hardcoding currency symbols or date formats.
- Using `left`/`right` CSS instead of `start`/`end`.
- Assuming English word order applies to all languages.
- Ignoring cultural sensitivity in images, icons, colors, metaphors.
- Forgetting to persist locale choice across sessions.

---

👉 In short: **think beyond translation** → true i18n is about **layout, formatting, accessibility, culture, and technical correctness**.

Would you like me to turn this into a **developer-facing checklist doc** (like a Markdown template) that you could drop straight into a repo for your team?
