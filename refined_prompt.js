/**
 * Converts a string to camelCase format.
 * 
 * This function takes a string with various separators (spaces, hyphens, underscores)
 * and converts it to camelCase, where the first word is lowercase and subsequent words
 * are capitalized without any separators.
 * 
 * @param {string} str - The input string to convert. Must contain only alphanumeric
 *                       characters, spaces, hyphens, or underscores.
 * @returns {string} The converted camelCase string.
 * @throws {Error} If input is null or undefined.
 * @throws {Error} If input is not a string.
 * @throws {Error} If input contains invalid characters (anything other than alphanumeric,
 *                 spaces, hyphens, or underscores).
 * @throws {Error} If input contains no valid words after trimming and splitting.
 * 
 * @example
 * toCamelCase('first name');        // 'firstName'
 * toCamelCase('user_id');           // 'userId'
 * toCamelCase('SCREEN_NAME');       // 'screenName'
 * toCamelCase('mobile-number');     // 'mobileNumber'
 */

/**
 * Converts a string to dot.case format.
 * 
 * This function takes a string with various separators (spaces, hyphens, underscores)
 * and converts it to dot.case, where all words are lowercase and separated by dots.
 * 
 * @param {string} str - The input string to convert. Must contain only alphanumeric
 *                       characters, spaces, hyphens, or underscores.
 * @returns {string} The converted dot.case string.
 * @throws {Error} If input is null or undefined.
 * @throws {Error} If input is not a string.
 * @throws {Error} If input contains invalid characters (anything other than alphanumeric,
 *                 spaces, hyphens, or underscores).
 * @throws {Error} If input contains no valid words after trimming and splitting.
 * 
 * @example
 * toDotCase('first name');        // 'first.name'
 * toDotCase('user_id');           // 'user.id'
 * toDotCase('SCREEN_NAME');       // 'screen.name'
 * toDotCase('mobile-number');     // 'mobile.number'
 */
function toCamelCase(str) {
    // Error handling for non-string inputs
    if (str === null || str === undefined) {
        throw new Error('Input cannot be null or undefined');
    }

    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }

    // Check if string contains only valid characters (alphanumeric, spaces, hyphens, underscores)
    if (!/^[a-zA-Z0-9\s\-_]+$/.test(str)) {
        throw new Error('Input contains invalid characters');
    }

    // Trim and split by spaces, hyphens, or underscores
    const words = str
        .trim()
        .split(/[\s\-_]+/)
        .filter(word => word.length > 0);

    if (words.length === 0) {
        throw new Error('Input must contain at least one word');
    }

    // Convert to camelCase
    return words
        .map((word, index) => {
            const lowercased = word.toLowerCase();
            // Capitalize first letter of all words except the first
            return index === 0
                ? lowercased
                : lowercased.charAt(0).toUpperCase() + lowercased.slice(1);
        })
        .join('');
}

// Example usage
console.log(toCamelCase('first name'));        // firstName
console.log(toCamelCase('user_id'));           // userId
console.log(toCamelCase('SCREEN_NAME'));       // screenName
console.log(toCamelCase('mobile-number'));     // mobileNumber

// Error cases
try {
    toCamelCase('82&*)73');
} catch (error) {
    console.error(error.message);                // Input contains invalid characters
}

try {
    toCamelCase(null);
} catch (error) {
    console.error(error.message);                // Input cannot be null or undefined
}

function toDotCase(str) {
    // Error handling for non-string inputs
    if (str === null || str === undefined) {
        throw new Error('Input cannot be null or undefined');
    }

    if (typeof str !== 'string') {
        throw new Error('Input must be a string');
    }

    // Check if string contains only valid characters (alphanumeric, spaces, hyphens, underscores)
    if (!/^[a-zA-Z0-9\s\-_]+$/.test(str)) {
        throw new Error('Input contains invalid characters');
    }

    // Trim and split by spaces, hyphens, or underscores
    const words = str
        .trim()
        .split(/[\s\-_]+/)
        .filter(word => word.length > 0);

    if (words.length === 0) {
        throw new Error('Input must contain at least one word');
    }

    // Convert to dot.case
    return words
        .map(word => word.toLowerCase())
        .join('.');
}

// Example usage
console.log(toDotCase('first name'));        // first.name
console.log(toDotCase('user_id'));           // user.id
console.log(toDotCase('SCREEN_NAME'));       // screen.name
console.log(toDotCase('mobile-number'));     // mobile.number

