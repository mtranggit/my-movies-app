/**
 * Converts a given string to Title Case.
 * @param input - The string to convert.
 * @returns The Title Cased string.
 */
export function toTitleCase(input: string): string {
  return input
    .toLowerCase() // Convert the entire string to lowercase
    .split(" ") // Split the string into words
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Capitalize the first letter of each word
    .join(" "); // Join the words back into a single string
}
