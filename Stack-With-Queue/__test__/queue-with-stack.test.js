'use strict';

const QueueuseStack = require('../queue-with-stack');

let queue;


beforeEach(() => {
    queue = new QueueuseStack();
});


describe('Test queue-with-stack', () => {

    it('it should create an empty queue', () => {
        expect(queue).toBeTruthy();
    });

    it('it should return null when attemp to dequeue an empty queue', () => {

        expect(queue.dequeue()).toBeNull();

    });


    it('it should enqueue and dequeue  values with the queues', () => {

        queue.enqueue(15);
        queue.enqueue(25);
        queue.enqueue(30);
        expect(queue.dequeue()).toEqual(15);
        expect(queue.dequeue()).toEqual(25);
        expect(queue.dequeue()).toEqual(30);


    });


});