/**
 * AppInfo
 *
 * The AppInfo class contains information about the app and device.
 */
export class AppInfo {
  /**
   * Get the platform OS name for the current device
   * @returns {string}
   */
  static getPlatform(): string {
    const ua = navigator.userAgent.toLowerCase();
    if (/android/.test(ua)) return "Android";
    if (/iphone|ipad|ipod/.test(ua)) return "iOS";
    if (/win/.test(ua)) return "Windows";
    if (/mac/.test(ua)) return "macOS";
    return "Unknown";
  }

  /**
   * Check if the app is running on a mobile device
   * @returns {boolean}
   */
  static isMobile(): boolean {
    return this.getPlatform() === "Android" || this.getPlatform() === "iOS";
  }

  /**
   * Check if the app is running on a desktop device
   * @returns {boolean}
   */
  static isDesktop(): boolean {
    return !this.isMobile();
  }
}
