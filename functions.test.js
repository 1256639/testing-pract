import { capitalize, reverseString } from './functions.js';

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