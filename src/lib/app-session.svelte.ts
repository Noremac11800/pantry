import { LazyStore } from "@tauri-apps/plugin-store";
import { ThemeManager } from "./theme-manager.svelte";

/**
 * The app session manages the application session state and provides convenience methods to manage the session. This object is for all intents and purposes a singleton.
 *
 * @property {ThemeManager} themeManager - The theme manager for the application.
 * @property {LazyStore} appSettings - The app settings for the application.
 * @property {boolean} loaded - Whether the app session is loaded.
 */
export class AppSession {
  public themeManager: ThemeManager = $state(new ThemeManager());
  public appSettings: LazyStore = $state(
    new LazyStore("appSettings.json", { autoSave: true })
  );
  public loaded: boolean = $state(false);

  /**
   * Initializes the app session.
   *
   * @description
   * Loads app settings asynchronously from a lazy store and sets the theme manager theme based on the loaded theme.
   */
  constructor() {
    this.initAsync();
  }

  private async initAsync() {
    await this.appSettings.init();
    this.themeManager.setTheme(
      (await this.appSettings.get<string>("theme")) ?? "light"
    );
    this.loaded = true;
  }
}

/**
 * The app session instance is used to manage the application session state. This is a singleton.
 */
export const appSession = $state(new AppSession());
