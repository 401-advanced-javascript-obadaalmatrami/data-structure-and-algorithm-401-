'use strict';

const LinkedList = require('../src/reverse.js');

let linkedList;

beforeEach(() => {
    linkedList = new LinkedList();
});

describe('reverse the linked-list', () => {

    test('singly linked-list ', () => {
        linkedList.insert(4);
        linkedList.reverse();

        expect(linkedList.toString()).toEqual('[4]');

        linkedList.insert(3);
        linkedList.insert(2);
        linkedList.insert(1);
        linkedList.reverse();
        expect(linkedList.toString()).toEqual('[4,3,2,1]');

    });

    test('if the list is Empty', () => {
        linkedList.reverse();
        expect(linkedList.toString()).toEqual('[]');
    });


});