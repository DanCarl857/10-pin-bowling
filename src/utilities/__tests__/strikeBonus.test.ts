import { strikeBonus } from '../strikeBonus';

describe('strikeBonus', () => {
    it('should return 10 plus the first and second rolls', () => {
        expect(strikeBonus(10, 10)).toBe(30);
    });
});
