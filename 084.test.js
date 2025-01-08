import { getUniqueNumbers } from './084';

describe('getUniqueNumbers', () => {
    it('should return an array of unique numbers', () => {
        const numbers = [1, 2, 2, 3, 4, 4, 5];
        const uniqueNumbers = getUniqueNumbers(numbers);
        expect(uniqueNumbers).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle an empty array', () => {
        const numbers = [];
        const uniqueNumbers = getUniqueNumbers(numbers);
        expect(uniqueNumbers).toEqual([]);
    });

    it('should handle an array with all unique numbers', () => {
        const numbers = [1, 2, 3, 4, 5];
        const uniqueNumbers = getUniqueNumbers(numbers);
        expect(uniqueNumbers).toEqual([1, 2, 3, 4, 5]);
    });

    it('should handle an array with all duplicate numbers', () => {
        const numbers = [1, 1, 1, 1, 1];
        const uniqueNumbers = getUniqueNumbers(numbers);
        expect(uniqueNumbers).toEqual([1]);
    });

    it('should handle an array with negative numbers', () => {
        const numbers = [-1, -2, -2, -3, -4, -4, -5];
        const uniqueNumbers = getUniqueNumbers(numbers);
        expect(uniqueNumbers).toEqual([-1, -2, -3, -4, -5]);
    });

    it('should handle an array with mixed positive and negative numbers', () => {
        const numbers = [1, -1, 2, -2, 3, -3, 4, -4, 5, -5];
        const uniqueNumbers = getUniqueNumbers(numbers);
        expect(uniqueNumbers).toEqual([1, -1, 2, -2, 3, -3, 4, -4, 5, -5]);
    });
});