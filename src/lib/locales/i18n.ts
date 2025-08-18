import { register, init, getLocaleFromNavigator } from "svelte-i18n";

export const rtlLocales = ["ar", "ar-SA", "fa-IR", "ur-PK"];

register("ar-SA", () => import("$lib/locales/ar-SA.json"));
register("ar", () => import("$lib/locales/ar.json"));
register("bn-BD", () => import("$lib/locales/bn-BD.json"));
register("de-DE", () => import("$lib/locales/de-DE.json"));
register("en-AU", () => import("$lib/locales/en-AU.json"));
register("en-US", () => import("$lib/locales/en-US.json"));
register("es-419", () => import("$lib/locales/es-419.json"));
register("es-ES", () => import("$lib/locales/es-ES.json"));
register("fa-IR", () => import("$lib/locales/fa-IR.json"));
register("fr-CA", () => import("$lib/locales/fr-CA.json"));
register("fr-FR", () => import("$lib/locales/fr-FR.json"));
register("hi-IN", () => import("$lib/locales/hi-IN.json"));
register("id-ID", () => import("$lib/locales/id-ID.json"));
register("it-IT", () => import("$lib/locales/it-IT.json"));
register("ja-JP", () => import("$lib/locales/ja-JP.json"));
register("ko-KR", () => import("$lib/locales/ko-KR.json"));
register("pl-PL", () => import("$lib/locales/pl-PL.json"));
register("pt-BR", () => import("$lib/locales/pt-BR.json"));
register("pt-PT", () => import("$lib/locales/pt-PT.json"));
register("ru-RU", () => import("$lib/locales/ru-RU.json"));
register("sw-KE", () => import("$lib/locales/sw-KE.json"));
register("th-TH", () => import("$lib/locales/th-TH.json"));
register("tr-TR", () => import("$lib/locales/tr-TR.json"));
register("uk-UA", () => import("$lib/locales/uk-UA.json"));
register("ur-PK", () => import("$lib/locales/ur-PK.json"));
register("vi-VN", () => import("$lib/locales/vi-VN.json"));
register("zh-CN", () => import("$lib/locales/zh-CN.json"));
register("zh-HK", () => import("$lib/locales/zh-HK.json"));
register("zh-TW", () => import("$lib/locales/zh-TW.json"));

/**
 * Initialize the i18n setup
 *
 * @description
 * This function initializes the i18n setup by registering all the locales and setting the fallback locale to "en-AU".
 * It attempts to set the initial locale to the locale code from the browser navigator. If the locale code is not registered, it falls back to "en-AU".
 */
export async function setupI18n() {
  await init({
    fallbackLocale: "en-AU",
    initialLocale: getLocaleFromNavigator(),
  });
}

/**
 * Update the display direction based on the locale code
 * @param localeCode The locale code
 *
 * @description
 * This function updates the display direction of the document based on the locale code.
 * It sets the direction to "rtl" if the locale code is in the rtlLocales array, otherwise it sets it to "ltr".
 * RTL language codes include: ar, ar-SA, fa-IR, ur-PK
 *
 * @example
 * ```ts
 * updateDisplayDirection("ar"); // document.documentElement.dir = "rtl"
 * updateDisplayDirection("en-AU"); // document.documentElement.dir = "ltr"
 * ```
 */
export function updateDisplayDirection(localeCode: string) {
  if (rtlLocales.includes(localeCode)) {
    document.documentElement.dir = "rtl";
  } else {
    document.documentElement.dir = "ltr";
  }
}
