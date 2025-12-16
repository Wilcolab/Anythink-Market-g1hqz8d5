/**
 * String case conversion utility module providing functions to convert strings
 * between different naming conventions (camelCase, dot.case, etc.).
 * 
 * @module stringCaseConversion
 * @description Handles conversion of strings with multiple separator types
 * (spaces, hyphens, underscores) to standardized naming conventions with
 * comprehensive validation and edge-case handling.
 */

/**
 * Converts a string to camelCase format.
 * 
 * @function toCamelCase
 * @param {string} input - The input string to convert. Can contain spaces,
 *                         hyphens, or underscores as word separators.
 * @returns {string} The converted camelCase string. Returns an empty string
 *                   for null, undefined, or empty input.
 * @throws {TypeError} Throws TypeError if input is not a string type.
 * 
 * @description
 * - Accepts spaces, hyphens, and underscores as separators (multiple consecutive allowed)
 * - Trims leading and trailing separators before processing
 * - Ignores empty segments resulting from consecutive separators
 * - Lowercases the first token; subsequent tokens are capitalized
 * - Preserves interior digits in words
 * - Normalizes casing for consistent output
 * 
 * @example
 * toCamelCase("hello-world");        // returns "helloWorld"
 * toCamelCase("hello_world_foo");    // returns "helloWorldFoo"
 * toCamelCase("hello  world");       // returns "helloWorld"
 * toCamelCase("-hello--world-");     // returns "helloWorld"
 * toCamelCase("");                   // returns ""
 * toCamelCase(null);                 // returns ""
 * toCamelCase(123);                  // throws TypeError
 */

/**
 * Converts a string to dot.case format.
 * 
 * @function toDotCase
 * @param {string} input - The input string to convert. Can contain spaces,
 *                         hyphens, or underscores as word separators.
 * @returns {string} The converted dot.case string. Returns an empty string
 *                   for null, undefined, or empty input.
 * @throws {TypeError} Throws TypeError if input is not a string type.
 * 
 * @description
 * - Accepts spaces, hyphens, and underscores as separators (multiple consecutive allowed)
 * - Trims leading and trailing separators before processing
 * - Ignores empty segments resulting from consecutive separators
 * - Lowercases all word segments and joins them with dots
 * - Preserves interior digits in words
 * 
 * @example
 * toDotCase("hello-world");        // returns "hello.world"
 * toDotCase("hello_world_foo");    // returns "hello.world.foo"
 * toDotCase("hello  world");       // returns "hello.world"
 * toDotCase("-hello--world-");     // returns "hello.world"
 * toDotCase("");                   // returns ""
 * toDotCase(null);                 // returns ""
 * toDotCase(123);                  // throws TypeError
 *
 * Converts a string to camelCase with basic validation and edge-case handling.
 * - Accepts spaces, hyphens, and underscores as separators (multiple in a row allowed).
 * - Trims leading/trailing separators and ignores empty segments.
 * - Normalizes casing, preserves interior digits, and lowercases the first token.
 * - Returns an empty string for null/undefined/empty input.
 * - Throws TypeError for non-string values.
 */
function toCamelCase(input) {
    if (input == null || input === "") return "";
    if (typeof input !== "string") throw new TypeError("toCamelCase expected a string");

    const trimmed = input.trim();
    if (!trimmed) return "";

    const parts = trimmed.split(/[\s\-_]+/).filter(Boolean);
    if (parts.length === 0) return "";

    return parts
        .map((part, index) => {
            const lower = part.toLowerCase();
            return index === 0
                ? lower
                : lower.charAt(0).toUpperCase() + lower.slice(1);
        })
        .join("");
}

module.exports = toCamelCase;
/**
 * Converts a string to dot.case format with basic validation and edge-case handling.
 * - Accepts spaces, hyphens, and underscores as separators (multiple in a row allowed).
 * - Trims leading/trailing separators and ignores empty segments.
 * - Lowercases all parts and joins them with dots.
 * - Returns an empty string for null/undefined/empty input.
 * - Throws TypeError for non-string values.
 */
function toDotCase(input) {
    if (input == null || input === "") return "";
    if (typeof input !== "string") throw new TypeError("toDotCase expected a string");

    const trimmed = input.trim();
    if (!trimmed) return "";

    const parts = trimmed.split(/[\s\-_]+/).filter(Boolean);
    if (parts.length === 0) return "";

    return parts.map(part => part.toLowerCase()).join(".");
}

module.exports = { toCamelCase, toDotCase };