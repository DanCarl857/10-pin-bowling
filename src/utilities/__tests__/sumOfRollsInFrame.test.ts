import { sumOfRollsInFrame } from '../sumOfRollsInFrame';

describe('sumOfRollsInFrame', () => {
    it('should return the sum of rolls in a frame', () => {
        expect(sumOfRollsInFrame(4, 5)).toBe(9);
    });
});
