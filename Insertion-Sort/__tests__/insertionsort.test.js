 
 
 
 const insertionSort = require('../insertion-sort.js');

describe('insertion sort', () => {
  it('should sorts the array given', () => {
    const arr = [11, 8, 1992];
      console.log("array before sort", arr);
    expect(insertionSort(arr)).toEqual([8, 11, 1992]);
    console.log("the sorts array", arr);
  });
});