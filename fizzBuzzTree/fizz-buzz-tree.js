/* eslint-disable no-console */
/* eslint-disable indent */
'use strict';


const fizzBuzzTree = (tree) => {

    if (tree.value % 3 === 0 && tree.value % 5 === 0) {
        tree.value = 'FizzBuzz';
        // console.log('FizzBuzz', tree);

    } else if (tree.value % 3 === 0) {
        tree.value = 'Fizz';
        // console.log('Fizz', tree);

    } else if (tree.value % 5 === 0) {
        tree.value = 'Buzz';
        // console.log('Buzz', tree);

    }
    return tree.value;
};

// eslint-disable-next-line no-undef
module.exports = fizzBuzzTree;