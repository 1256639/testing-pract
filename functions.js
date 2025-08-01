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
export const calculator = {
    add: (a, b) => a + b,
    subtract: (a, b) => a - b,
    divide: (a, b) => a / b,
    multiply: (a, b) => a * b,
};