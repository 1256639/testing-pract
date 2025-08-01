import { capitalize, reverseString } from './functions.js';

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