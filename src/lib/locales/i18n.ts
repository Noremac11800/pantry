import { register, init, getLocaleFromNavigator } from "svelte-i18n";

register("ar", () => import("$lib/locales/ar.json"));
register("en", () => import("$lib/locales/en.json"));
register("de", () => import("$lib/locales/de.json"));

export async function setupI18n() {
  await init({
    fallbackLocale: "en",
    initialLocale: getLocaleFromNavigator(),
  });
}
