/**
 * Convert a hex RGB color to linear RGB
 * @param hex The hex color
 * @returns The linear RGB color
 */
function hexToLinearRGB(hex: string): [number, number, number] {
  const r = parseInt(hex.slice(1, 3), 16) / 255;
  const g = parseInt(hex.slice(3, 5), 16) / 255;
  const b = parseInt(hex.slice(5, 7), 16) / 255;

  const linear = (c: number) =>
    c <= 0.03928 ? c / 12.92 : Math.pow((c + 0.055) / 1.055, 2.4);

  return [linear(r), linear(g), linear(b)];
}

/**
 * Calculate the relative luminance of a color
 * @param rgb The linear RGB color
 * @returns The relative luminance
 */
function relativeLuminance([r, g, b]: [number, number, number]): number {
  return 0.2126 * r + 0.7152 * g + 0.0722 * b;
}

/**
 * Calculate the contrast ratio between two colors
 * @param hex1 The first hex color
 * @param hex2 The second hex color
 * @returns The contrast ratio
 *
 * @description
 * A contrast ratio of 4.5 or higher is recommended for accessibility. WCAG 2.1 AA https://www.w3.org/WAI/WCAG22/quickref/?showtechniques=143#contrast-minimum
 *
 * @example
 * ```ts
 * contrastRatio("#FFFFFF", "#3366CC"); // ≈ 5.37
 * ```
 */
export function contrastRatio(hex1: string, hex2: string): number {
  const L1 = relativeLuminance(hexToLinearRGB(hex1));
  const L2 = relativeLuminance(hexToLinearRGB(hex2));
  const lighter = Math.max(L1, L2);
  const darker = Math.min(L1, L2);
  return (lighter + 0.05) / (darker + 0.05);
}

/**
 * Get the contrast color for a given hex color. This color is either black or white, depending on the luminance of the color in order to provide the best contrast
 * @param hex The hex color
 * @returns Black or white depending on which provides the best contrast with the provided color
 *
 * @description
 * If the luminance of the color is high, returns black, otherwise white.
 *
 * @example
 * ```ts
 * getContrastColor("#FFFFFF"); // "#000000"
 * getContrastColor("#3366CC"); // "#FFFFFF"
 * ```
 */
export function getContrastColor(hex: string): string {
  hex = hex.replace("#", "");

  // Parse R, G, B
  const r = parseInt(hex.substring(0, 2), 16);
  const g = parseInt(hex.substring(2, 4), 16);
  const b = parseInt(hex.substring(4, 6), 16);

  // Compute luminance (0-255 scale)
  const luminance = 0.299 * r + 0.587 * g + 0.114 * b;

  // If luminance is high, return black, otherwise white
  return luminance > 186 ? "#000000" : "#FFFFFF";
}
