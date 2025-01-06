import { toSnakeCase } from './082';

describe('toSnakeCase', () => {
    it('string', () => {
        const result = toSnakeCase('the-Stealth-warrior');
        expect(result).toBe('the_stealth_warrior'); // Исправлено
    });
});