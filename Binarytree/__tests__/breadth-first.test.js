'use strict';

const { BinaryTree } = require('../src/breadth-first.js');

describe('Binary tree', () => {

    it('it should successfully instantiate an empty tree', () => {
        const emptyTree = new BinaryTree();

        expect(emptyTree.root).toBe(null);
    });

    it('it should successfully instantiate a tree with a single root node', () => {
        const tree = new BinaryTree();

        tree.add(1);

        expect(tree.root.value).toBe(1);
    });

    it('it should successfully add a left child and right child to a single root node', () => {
        const tree = new BinaryTree();

        tree.add(5);
        tree.add(3);
        tree.add(7);

        expect(tree.root.value).toBe(5);
        expect(tree.root.left.value).toBe(3);
        expect(tree.root.right.value).toBe(7);
    });

    it('it should successfully return a collection from a preorder traversal', () => {
        const tree = new BinaryTree();

        tree.add(10);
        tree.add(4);
        tree.add(12);
        tree.add(1);
        tree.add(5);
        tree.add(11);

        expect(tree.preOrder(tree.root)).toEqual([10, 4, 1, 5, 12, 11]);
    });

    it('it should successfully return a collection from a inorder traversal', () => {
        const tree = new BinaryTree();

        tree.add(10);
        tree.add(4);
        tree.add(12);
        tree.add(1);
        tree.add(5);
        tree.add(11);

        expect(tree.inOrder(tree.root)).toEqual([1, 4, 5, 10, 11, 12]);
    });

    it('it should successfully return a collection from postorder traversal', () => {
        const tree = new BinaryTree();

        tree.add(10);
        tree.add(4);
        tree.add(12);
        tree.add(1);
        tree.add(5);
        tree.add(11);

        expect(tree.postOrder(tree.root)).toEqual([1, 5, 4, 11, 12, 10]);


    });

    it('it should successfully return a collection from breadth-first traversal', () => {

        const tree = new BinaryTree();

        tree.add(10);
        tree.add(4);
        tree.add(1);
        tree.add(12);
        tree.add(11);
        tree.add(5);

        expect(tree.breadthFirst(tree.root)).toEqual([10, 4, 12, 1, 5, 11]);
    });

});