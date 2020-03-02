'use strict';

const LinkedList = require('../llMerge/ll-merge.js');

let newLinkedlist = new LinkedList();
let list2, list4;
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
    it('tests merge linked wich take two linked lists ', () => {
        const list2 = new LinkedList();

        list2.append(1);
        list2.append(5)


        const list4 = new LinkedList();

        list4.append(4);
        list4.append(21);

        newLinkedlist.merge_List(list2, list4);
        expect(newLinkedlist.toString()).toMatch("1 --> 4 --> 5 --> 21 --> Null");
    });

});