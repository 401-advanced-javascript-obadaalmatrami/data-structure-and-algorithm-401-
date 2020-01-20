'use strict';

const shiftArray = (arr, newItem) => {
    for (let i = 0; i <= arr.length - 1; i++) {
        arr[i + 1] = arr[i];
    }
    arr[0] = newItem;
    return arr;
};




module.export = shiftArray;