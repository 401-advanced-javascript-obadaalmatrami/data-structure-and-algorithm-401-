'use strict';


function fibonaccinumbers(fobnum) {
    if (fobnum === 0) {
        return console.log('there`s no fibonacci for zero', fobnum);
    } else if (fobnum === 1) {
        return [0, 1];
    } else {
        let sequence = fibonaccinumbers(fobnum - 1);
        sequence.push(sequence[sequence.length - 1] + sequence[sequence.length - 2]);
        return sequence;
    }
};


function sumMatrixrow(arr) {
    let myArray = [],
        summationrow = 0;
    for (let i = 0; i < arr.length; i++) {
        for (let j = 0; j < arr[i].length; j++) {
            summationrow += arr[i][j];
        }
        myArray.push(summationrow);
        summationrow = 0;
    }
    return myArray;
}
let s = [
    [1, 2, 3],
    [3, 5, 7],
    [1, 7, 10]
];

module.exports = { fibonaccinumbers, sumMatrixrow };