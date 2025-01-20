import { sum } from './096';

describe('correct summ', () => {
    it('number', () => {
        const result = sum([1, 5.2, 4, 0, -1]);
        expect(result).toBe(9.2); 
    });
    it('number', () => {
        const result = sum([]);
        expect(result).toBe(0); 
    });
})