'use strict';

const binarySearch = require('../lib/array-binarySearch.js');


let arr = [4, 8, 15, 16, 23, 42]; /////// 15
let arr2 = [11, 22, 33, 44, 55, 66, 77]; /////////// 90

describe('validator binarysearch function ', () => {
    it('should give us a vaild search givin key', () => {
        expect(binarySearch(arr, 15)).toEqual(2);
    });

    it('when it  return -1  the key does not exist in the array ', () => {
        expect(binarySearch(arr2, 90)).toEqual(-1);
    });

});