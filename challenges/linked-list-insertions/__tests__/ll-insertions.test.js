'use strict';

const LinkedList = require('../ll-insertions/ll-insertions.js');

let newLinkedlist = new LinkedList();

describe('tests the  nodes we create', () => {

    beforeEach(() => {
        newLinkedlist = new LinkedList();
    });

    it('add a node to the end of the linked list', () => {
        newLinkedlist.append(1);
        expect(newLinkedlist.size).toEqual(1);
    });

    it('add multiple nodes to the end of linked list', () => {
        newLinkedlist.append(2);
        newLinkedlist.append(4);
        expect(newLinkedlist.size).toEqual(2);
    });

    it('insert node before the node in the middle of linked list', () => {
        newLinkedlist.append(2);
        newLinkedlist.append(4);
        newLinkedlist.insertBeforeindex(4, 3);
        expect(newLinkedlist.head.next.value).toEqual(3);
    });

    it('insert node before the first node of linked list', () => {
        newLinkedlist.append(2);
        newLinkedlist.append(4);
        newLinkedlist.insertBeforeindex(2, 0);
        expect(newLinkedlist.head.value).toEqual(0);
    });

    it('insert after  node in the middle ', () => {
        newLinkedlist.append(2);
        newLinkedlist.append(4);
        newLinkedlist.insertAfterindex(2, 3);
        expect(newLinkedlist.head.next.value).toEqual(3);
    });

    it('insert node after the last node ', () => {
        newLinkedlist.append(2);
        newLinkedlist.append(4);
        newLinkedlist.insertAfterindex(4, 7);
        expect(newLinkedlist.head.next.next.value).toEqual(7);
    });
});