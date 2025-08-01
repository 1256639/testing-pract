import { analyzeArray, caesarCipher, calculator, capitalize, reverseString } from './functions.js';

// Capitalize
describe('capitalize', () => {
    test('capitalizes the first character', () => {
        expect(capitalize('hello')).toBe('Hello');
    });
    test('does not change an already capitalized string', () => {
        expect(capitalize('Hello')).toBe('Hello');
    });
    test('return empty string if input is empty', () => {
        expect(capitalize('')).toBe('');
    });
});

// Reverse string
describe('reverseString', () => {
    test('reverses a string', () => {
        expect(reverseString('hello')).toBe('olleh');
    });
    test('reverse a single character', () => {
        expect(reverseString('a')).toBe('a');
    });
    test('reverses empty string', () => {
        expect(reverseString('')).toBe('');
    });
});

// Calculator
describe('calculator', () => {
    test('add', () => {
        expect(calculator.add(1, 2)).toBe(3);
    });
    test('subtract', () => {
        expect(calculator.subtract(5, 2)).toBe(3);
    });
    test('multiply', () => {
        expect(calculator.multiply(3, 4)).toBe(12);
    });
    test('divide', () => {
        expect(calculator.divide(8, 2)).toBe(4);
    });
});

// Caesar cipher
describe('caesarCipher', () => {
  test('shifts lowercase letters and wraps from z to a', () => {
    expect(caesarCipher('xyz', 3)).toBe('abc');
  });
  test('preserves case', () => {
    expect(caesarCipher('HeLLo', 3)).toBe('KhOOr');
  });
  test('keeps punctuation and spaces unchanged', () => {
    expect(caesarCipher('Hello, World!', 3)).toBe('Khoor, Zruog!');
  });
  test('works with negative shift', () => {
    expect(caesarCipher('abc', -3)).toBe('xyz');
  });
});

// Analyze array
describe('analyzeArray', () => {
    test('returns correct average, min, max and length', () => {
        expect(analyzeArray([1,8,3,4,2,6])).toEqual({
            average: 4,
            min: 1,
            max: 8,
            length: 6
        });
    });
});