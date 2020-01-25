'use strict';


const { fibonaccinumbers, sumMatrixrow } = require('../src/mock.js');
let arr = 8;
let arr2 = [
    [1, 2, 3],
    [3, 5, 7],
    [1, 7, 10]
];

describe('we solve a problem domain using fibonacci Sequence and sum of row in matrix ', () => {
    it('it should equal array of 8 fibonacci numbers ', () => {
        expect(fibonaccinumbers(arr)).toEqual([0, 1, 1, 2, 3, 5, 8, 13, 21]);
    });

    it('it should found the sum of arow matrix', () => {
        expect(sumMatrixrow(arr2)).toEqual([6, 15, 18]);
    });
});