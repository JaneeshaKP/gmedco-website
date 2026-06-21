/**
 * Get the correct image path
 * @param imagePath - The image path starting with /images/
 * @returns The full image path
 */
export function getImagePath(imagePath: string): string {
  const cleanPath = imagePath.startsWith("/") ? imagePath.slice(1) : imagePath;
  return `/${cleanPath}`;
}
