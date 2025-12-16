// Create a JavaScript function called toKebabCase that converts a string into kebab-case.

function toKebabCase(str) {
    // Step 1: Ensure all letters are converted to lowercase.
    str = str.toLowerCase();
    
    // Step 2: Replace spaces and underscores with hyphens.
    str = str.replace(/[\s_]+/g, '-');
    
    // Step 3: Handle edge cases like multiple spaces or special characters.
    str = str.replace(/[^a-z0-9-]+/g, ''); // Remove special characters
    str = str.replace(/--+/g, '-'); // Replace multiple hyphens with a single hyphen
    str = str.replace(/^-|-$/g, ''); // Remove leading and trailing hyphens

    return str;
}

// Example usage
console.log(toKebabCase("Hello World! This is a test_string.")); // Output: hello-world-this-is-a-test-string