/* eslint-disable indent */
'use strict';

// eslint-disable-next-line no-undef
const BinaryTree = require('../Tree/tree.js');
// eslint-disable-next-line no-undef
const fizzBuzzTree = require('../fizz-buzz-tree.js');

// eslint-disable-next-line no-undef
describe('Fizz Buzz Tree', () => {
    // eslint-disable-next-line no-undef
    it('test the value of each node in the fizz buzz tree by 3, 5 or both, and change the value of each of nodes', () => {
        const tree = new BinaryTree();
        tree.add(5);
        tree.add(15);
        tree.add(3);

        console.log('FizzBuzz', tree);
        console.log('Fizz', tree);
        console.log('Buzz', tree);

        // eslint-disable-next-line no-undef
        expect(fizzBuzzTree(tree.root.left)).toBe('Fizz');
        // eslint-disable-next-line no-undef
        expect(fizzBuzzTree(tree.root.right)).toBe('FizzBuzz');
        // eslint-disable-next-line no-undef
        expect(fizzBuzzTree(tree.root)).toBe('Buzz');
    });
});