'use strict';

class AnimalShelter {
    constructor() {
        this.dogStack = [];
        this.catStack = [];
    }

    enqueue(animal) {
        if (animal.type === 'cat') {
            this.catStack.unshift(animal);
        } else if (animal.type === 'dog') {
            this.dogStack.unshift(animal);
        } else {
            return null;
        }
    }

    dequeue(pref) {
        if (pref.type === 'cat') {
            this.catStack.pop();
            return this.catStack;
        } else if (pref.type === 'dog') {
            this.dogStack.pop();
            return this.dogStack;
        } else {
            return null;

        }
    }

}

module.exports = AnimalShelter;