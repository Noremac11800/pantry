/**
 * The theme manager manages the theme configuration of the application and provides convenience methods to manage the theme.
 */
export class ThemeManager {
  theme = $state("light");
  isDark = $state(false);

  /**
   * Toggles the theme between light and dark.
   */
  public toggleTheme() {
    document.documentElement.classList.toggle("dark");
    this.theme = this.theme === "light" ? "dark" : "light";
    this.isDark = this.theme === "dark";
  }
}
