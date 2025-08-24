import { LazyStore } from "@tauri-apps/plugin-store";
import { ThemeManager } from "./theme-manager.svelte";

/**
 * The app session manages the application session state and provides convenience methods to manage the session. This object is for all intents and purposes a singleton.
 */
export class AppSession {
  /**
   * The theme manager for the application.
   */
  public themeManager: ThemeManager = $state(new ThemeManager());

  /**
   * The app settings for the application.
   */
  public appSettings: LazyStore = $state(
    new LazyStore("appSettings.json", { autoSave: true })
  );

  /**
   * Whether the app session is loaded.
   * @default false
   */
  public loaded: boolean = $state(false);

  /**
   * The semantic version of the app retrieved directly from the `package.json` file.
   */
  public appVersion: string = __APP_VERSION__;

  /**
   * Initializes the app session.
   *
   * @remarks
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
