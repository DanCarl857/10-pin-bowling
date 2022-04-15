import { spareBonus } from '../spareBonus';

describe('spareBonus', () => {
   it('should return a bonus given a roll score', () => {
       expect(spareBonus(9)).toBe(19);
   });
})