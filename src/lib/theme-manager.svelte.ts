import { appSession } from "./app-session.svelte";

/**
 * The theme manager manages the theme configuration of the application and provides convenience methods to manage the theme.
 *
 * @property {string} theme - The current theme of the application.
 * @property {boolean} isDark - Whether the current theme is dark.
 */
export class ThemeManager {
  static defaultTheme: string = "light";
  theme: string = $state(ThemeManager.defaultTheme);
  isDark: boolean = $state(false);

  /**
   * Toggles the theme between light and dark.
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
