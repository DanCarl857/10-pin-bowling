import { isSpare } from '../isSpare';

describe('isSpare', () => {
    it('should return true if a spare is rolled', () => {
        expect(isSpare(8, 2)).toEqual(true);
    });

    it('should return false if user did not roll a spare', () => {
        expect(isSpare(7, 1)).toEqual(false);
    })
});
