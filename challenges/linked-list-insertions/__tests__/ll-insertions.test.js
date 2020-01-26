'use strict';

const { LinkedList } = require('../ll-insertions/ll-insertions.js');

let linkedList;

beforeEach(() => linkedList = new LinkedList());

describe('linked-list', () => {
    it('can instantiate an empty linked-list', () => {
        expect(linkedList.hasOwnProperty('head')).toBeTruthy();
        expect(linkedList.head).toBeNull();
        expect(linkedList.toString()).toEqual('[]');
    });

    it('can insert a node to the  linked list', () => {
        const testValue = 67;
        linkedList.insert(testValue);

        expect(linkedList.head.value).toEqual(testValue);
        expect(linkedList.toString()).toEqual(`[${testValue}]`);
    });

    it('create a single linked list with three nodes', () => {
        const first = 67;
        const second = 92;
        const third = 97;

        linkedList.insert(first);
        linkedList.insert(second);
        linkedList.insert(third);

        expect(linkedList.head.value).toEqual(third);
        expect(linkedList.toString()).toEqual(`[${third}, ${second}, ${first}]`);
    });

    it('list includes() a given value after insertion', () => {
        const first = 67;
        const second = 92;

        linkedList.insert(first);
        expect(linkedList.includes(first)).toEqual(true);

        linkedList.insert(second);
        expect(linkedList.includes(first)).toEqual(true);
        expect(linkedList.includes(second)).toEqual(true);
    });

    it('list does not include non-inserted value', () => {
        const inserted = 67;
        const notInserted = 92;

        linkedList.insert(inserted);
        expect(linkedList.includes(notInserted)).toEqual(false);
    });
});