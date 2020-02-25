/* eslint-disable no-undef */
'use strict';

const quickSort = require('../src/Quick-sort.js');

describe('quick sort', () => {
  it('sorts array given', () => {
    const arr = [4, 3, 7, 1, 8, 5, 6, 9, 2];
    const right = (arr.length - 1);
    const left = 0;

    expect(quickSort(arr, left, right)).toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9]);
    console.log('my cool sorted array', arr);
});
});