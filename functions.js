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

// Caesar cipher
export function caesarCipher(str, shift) {
  return str.split('').map(char => {
    if (/[a-z]/.test(char)) {
      return String.fromCharCode(((char.charCodeAt(0) - 97 + shift + 26) % 26) + 97);
    } else if (/[A-Z]/.test(char)) {
      return String.fromCharCode(((char.charCodeAt(0) - 65 + shift + 26) % 26) + 65);
    } else {
      return char;
    }
  }).join('');
}