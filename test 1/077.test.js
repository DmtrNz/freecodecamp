import { toSnakeCase } from './077';

describe('toSnakeCase', () => {
    it('string', () => {
        const result = toSnakeCase('the-Stealth-warrior');
        expect(result).toBe('the_stealth_warrior'); // Исправлено
    });
});