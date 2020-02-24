"use strict";


const mergeSort = require('../src/Merge-sort.js');

describe('Merge sort', () => {
  it('sorts  given array ', () => {
    const arr = [8, 4, 23, 42, 16, 15];

    expect(mergeSort(arr)).toEqual([4, 8, 15, 16, 23, 42]);
  });
});