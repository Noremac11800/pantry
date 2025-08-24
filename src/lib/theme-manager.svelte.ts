import { appSession } from "./app-session.svelte";

/**
 * The theme manager manages the theme configuration of the application and provides convenience methods to manage the theme.
 *
 * @property {string} theme - The current theme of the application.
 * @property {boolean} isDark - Whether the current theme is dark.
 */
export class ThemeManager {
  /**
   * The default theme of the application.
   * @default "light"
   */
  static defaultTheme: string = "light";

  /**
   * The current theme of the application. This is equivalent to the value of the {@link defaultTheme} property.
   */
  theme: string = $state(ThemeManager.defaultTheme);

  /**
   * Whether the current theme is dark.
   * @default false
   */
  isDark: boolean = $state(false);

  /**
   * Toggles the theme between light and dark.
   *
   * @example
   * ```ts
   * // If current theme is light
   * themeManager.toggleTheme(); // Sets theme to dark
   *
   * // If current theme is dark
   * themeManager.toggleTheme(); // Sets theme to light
   * ```
   */
  public toggleTheme() {
    document.documentElement.classList.toggle("dark");
    this.theme = this.theme === "light" ? "dark" : "light";
    this.isDark = this.theme === "dark";
    appSession.appSettings.set("theme", this.theme);
  }

  /**
   * Sets the theme to the specified theme.
   * @param theme The theme to set.
   *
   * @example
   * ```ts
   * themeManager.setTheme("dark");
   * ```
   */
  public setTheme(theme: string) {
    if (theme === "dark") {
      document.documentElement.classList.add("dark");
    } else {
      document.documentElement.classList.remove("dark");
    }
    this.theme = theme;
    this.isDark = this.theme === "dark";
    appSession.appSettings.set("theme", this.theme);
  }
}
