import { ThemeManager } from "./theme-manager.svelte";

/**
 * The app session manages the application session state and provides convenience methods to manage the session. This object is for all intents and purposes a singleton.
 */
export class AppSession {
  public themeManager: ThemeManager = $state(new ThemeManager());
}

/**
 * The app session instance is used to manage the application session state. This is a singleton.
 */
export const appSession = $state(new AppSession());
