// Capitalize
export function capitalize(string) {
    if (!string) {
        return '';
    }
    return string[0].toUpperCase() + string.slice(1);
}

// Reverse string
export function reverseString(string) {
    return string.split('').reverse().join('');
}

// Calculator