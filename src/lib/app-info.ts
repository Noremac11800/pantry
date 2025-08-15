import * as os from "@tauri-apps/plugin-os";

/**
 * AppInfo
 *
 * The AppInfo class contains information about the app and device.
 */
export class AppInfo {
  static platform = os.platform();
  static version = os.version();
  static family = os.family();
  static arch = os.arch();
  static locale = os.locale();

  /**
   * Check if the app is running on a mobile device
   * @returns {boolean}
   */
  static isMobile(): boolean {
    return this.platform === "android" || this.platform === "ios";
  }

  /**
   * Check if the app is running on a desktop device
   * @returns {boolean}
   */
  static isDesktop(): boolean {
    return !this.isMobile();
  }
}
