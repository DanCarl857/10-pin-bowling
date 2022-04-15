import { fillRolls } from '../fillRolls';

describe('fillRoll', () => {
    it('should fill an array following an arithmetic progression up to the limit - 1', () => {
        expect(fillRolls(10)).toMatchObject([0, 1, 2, 3, 4, 5, 6, 7, 8, 9]);
    });
});
