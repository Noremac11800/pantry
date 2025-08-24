import * as os from "@tauri-apps/plugin-os";

/**
 * AppInfo
 *
 * The AppInfo class contains information about the app and device.
 */
export class AppInfo {
  /**
   * The platform the app is running on. Can be "android", "ios", "linux", "macos", "windows"
   * @example "macos"
   */
  static platform = os.platform();

  /**
   * The version of the device operating system
   * @example "15.6.0"
   */
  static version = os.version();

  /**
   * The family of the device's operating system. Can be "unix", "windows"
   * @example "unix"
   */
  static family = os.family();

  /**
   * The architecture of the device
   * @example "aarch64"
   */
  static arch = os.arch();

  /**
   * The locale of the device
   * @example "en-AU"
   */
  static locale = os.locale();

  /**
   * Check if the app is running on a mobile device. This is equivalent to checking if the {@link platform} is "android" or "ios"
   * @returns {boolean}
   */
  static isMobile(): boolean {
    return this.platform === "android" || this.platform === "ios";
  }

  /**
   * Check if the app is running on a desktop device. This is equivalent to checking if the result of {@link isMobile} is false
   * @returns {boolean}
   */
  static isDesktop(): boolean {
    return !this.isMobile();
  }
}
