'use strict';
const arr = require('../lib/array-shift.js');

describe('List', () => {

    let testArray = ['1', '4', '6', '8', '10'];
    let loadArray = () => {
        let thisList = new List();
        for (let i = 0; i <= testArray.length - 1; i++) {
            thisList.push(testArray[i]);
        }
        return thisList;
    };

    it('push() keeps the list the same if no element is pushed', () => {
        let myarray = loadArray();
        expect(myarray.length).toEqual(4);
        myarray.push();
        expect(myarray.length).toEqual(5);
    });

    it('push() increments the .length property', () => {
        let myList = loadArray();
        expect(myList.length).toEqual(3);
    });

    it('push() adds an element to the list', () => {
        let myarray = loadArray();
        myarray.push('FOO');
        expect(myarray.data[myarray.length - 1]).toEqual('FOO');
    });


    it('shift() returns the first item', () => {
        let myarray = loadArray();
        expect(myarray.shift()).toEqual(testArray[0]);
    });

    it('shift() decrements .length property by 1', () => {
        let myarray = loadArray();
        myarray.shift();
        expect(myarray.length).toEqual(2);
    });
});