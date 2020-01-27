'use strict';

const LinkedList = require('../ll-kth-from-end/ll-kth-from-end.js');

let newLinkedlist = new LinkedList();

describe('tests the  nodes we create', () => {

    beforeEach(() => {
        newLinkedlist = new LinkedList();
    });

    it('add a node to the end of the linked list', () => {
        newLinkedlist.append(1);
        expect(newLinkedlist.counter).toEqual(1);
    });

    it('add multiple nodes to the end of linked list', () => {
        newLinkedlist.append(2);
        newLinkedlist.append(4);
        expect(newLinkedlist.counter).toEqual(2);
    });

    // it('append node before the node in the middle of linked list', () => {
    //     newLinkedlist.append(2);
    //     newLinkedlist.append(4);
    //     newLinkedlist.appendBeforeindex(4, 3);
    //     expect(newLinkedlist.head.next.value).toEqual(3);
    // });

    // it('append node before the first node of linked list', () => {
    //     newLinkedlist.append(2);
    //     newLinkedlist.append(4);
    //     newLinkedlist.appendBeforeindex(2, 0);
    //     expect(newLinkedlist.head.value).toEqual(0);
    // });

    // it('append after  node in the middle ', () => {
    //     newLinkedlist.append(2);
    //     newLinkedlist.append(4);
    //     newLinkedlist.appendAfterindex(2, 3);
    //     expect(newLinkedlist.head.next.value).toEqual(3);
    // });

    // it('append node after the last node ', () => {
    //     newLinkedlist.append(2);
    //     newLinkedlist.append(4);
    //     newLinkedlist.appendAfterindex(4, 7);
    //     expect(newLinkedlist.head.next.next.value).toEqual(7);

    // });

    it('tests where k is greater than the length of linked list', () => {
        newLinkedlist.append(22);
        newLinkedlist.append(33);
        newLinkedlist.append(44);
        newLinkedlist.append(55);
        newLinkedlist.append(66);

        expect(newLinkedlist.kthFromEnd(10)).toMatch("exception");

    });

    it('tests where k is greater than the length of linked list', () => {
        newLinkedlist.append(22);
        newLinkedlist.append(33);
        newLinkedlist.append(44);
        newLinkedlist.append(55);
        newLinkedlist.append(66);

        expect(newLinkedlist.kthFromEnd(5)).toMatch("exception");


    });

    it('tests where k is not a positive integer  ', () => {
        newLinkedlist.append(222);
        newLinkedlist.append(333);
        newLinkedlist.append(444);
        newLinkedlist.append(555);
        newLinkedlist.append(666);

        expect(newLinkedlist.kthFromEnd(-1)).toMatch("exception");


    });

    it('tests where the linked list is of a size 1  ', () => {
        newLinkedlist.append(666);


        expect(newLinkedlist.kthFromEnd(1)).toMatch("exception");


    });


    it('tests where k is not at the end, but somewhere in the middle of the linked list ', () => {
        newLinkedlist.append(222);
        newLinkedlist.append(333);
        newLinkedlist.append(444);
        newLinkedlist.append(555);
        newLinkedlist.append(666);

        expect(newLinkedlist.kthFromEnd(2)).toEqual(444);


    });




});