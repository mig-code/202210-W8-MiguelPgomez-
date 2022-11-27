import { foo } from ".";

describe('Given arrayEvery function', () => {
    
    test('When called with an array of numbers, then it should return true', () => {
        const expected = 'foo';
        const r = foo;
        expect(r).toBe(expected);
    });

     
});
