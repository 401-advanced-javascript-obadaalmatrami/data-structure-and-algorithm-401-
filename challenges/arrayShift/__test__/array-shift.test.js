'use strict';


const arrayShift = require('../lib/array-shift.js');

describe('array shift module', () => {
    let arr1 = [2, 4, 6, 8];
    let arr2 = [4, 8, 15, 23, 42];
    let newItem = 5;

    describe(' shift the array ', () => {
        test('shift arr1', () => {
            expect(shiftArray(arr1, newItem)).toEqual([5, 2, 4, 6, 8]);
        });
        test('shift arr2', () => {
            expect(shiftArray(arr2, newItem)).toEqual([5, 4, 8, 15, 23, 42]);
        });
    });
});