import { password } from './091';

describe('correct input', () => {
    it('string', () => {
        const result = password("Abcd1234");
        expect(result).toBe(true); 
    });

    it('empty string', () => {
        const result = password("");
        expect(result).toBe(false);
    });

    it('string with special characters', () => {
        const result = password("Abcd1234!");
        expect(result).toBe(true);
    });

    it('string with only lowercase letters', () => {
        const result = password("abcd");
        expect(result).toBe(false);
    });

    it('string with only uppercase letters', () => {
        const result = password("ABCD");
        expect(result).toBe(false);
    });

    it('string with only numbers', () => {
        const result = password("1234");
        expect(result).toBe(false);
    });
})