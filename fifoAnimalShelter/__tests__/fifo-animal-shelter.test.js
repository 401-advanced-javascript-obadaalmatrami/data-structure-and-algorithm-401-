'use strict';

const AnimalShelter = require('../fifo-animal-shelter.js');
let newanimal = new AnimalShelter();


let cat1 = { name: 'Abu Aseel', type: 'cat' };
let cat2 = { name: 'britishshorthair', type: 'cat' };
let dog1 = { name: 'pitpull', type: 'dog' };
let dog2 = { name: 'german', type: 'dog' };


describe('test the AnimalShelter ', () => {

    beforeEach(() => {
        newanimal = new AnimalShelter();
    });

    it('add a cat to the stack', () => {
        newanimal.enqueue(cat1);

        expect(newanimal.catStack[0].type).toEqual('cat');
        expect(newanimal.catStack[0].name).toEqual('Abu Aseel');
    });

    it('add a dog to the stack', () => {
        newanimal.enqueue(dog1);

        expect(newanimal.dogStack[0].type).toEqual('dog');
        expect(newanimal.dogStack[0].name).toEqual('pitpull');
    });

    it('remove a dog from the stack', () => {
        newanimal.enqueue(dog1);
        newanimal.enqueue(dog2);
        newanimal.dequeue({ type: 'dog' });

        expect(newanimal.dogStack[0].type).toEqual('dog');
        expect(newanimal.dogStack[0].name).toEqual('german');
    });

    it('remove a cat from the stack', () => {
        newanimal.enqueue(cat1);
        newanimal.enqueue(cat2);
        newanimal.dequeue({ type: 'cat' });

        expect(newanimal.catStack[0].type).toEqual('cat');
        expect(newanimal.catStack[0].name).toEqual('britishshorthair');
    });

    it('not dequeue anything if pref is not dog or cat', () => {
        newanimal.enqueue(cat1);
        newanimal.enqueue(cat2);
        newanimal.dequeue({ type: 'falcon' });

        expect(newanimal.catStack[0].type).toEqual('cat');
        expect(newanimal.catStack[0].name).toEqual('britishshorthair');
    });

});