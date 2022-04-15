import { isStrike } from '../isStrike';

describe('isStrike', () => {
    it('should return true if user rolled a strike', () => {
        expect(isStrike(10)).toEqual(true);
    });

    it('should return false if a strike is not rolled', () => {
        expect(isStrike(9)).toEqual(false);
    });
});
