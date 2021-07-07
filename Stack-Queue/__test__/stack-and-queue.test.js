'use strict';

const { Node, Stack, Queue } = require('../stack-and-queue.js');



describe(`Test the stack & queue`, () => {

    it('it should push into to the stack', () => {
        const sta = new Stack();
        sta.push(44);
        expect(sta.toArray()).toEqual([44]);
    });

    it('it should push multiy values into the stack', () => {
        const sta1 = new Stack();
        sta1.push(44);
        sta1.push(55);
        sta1.push(66);
        expect(sta1.toArray()).toEqual([66, 55, 44]);
    });

    it('it should successfully pop from the stack', () => {
        const stac2 = new Stack();
        stac2.push(44);
        stac2.push(55);
        stac2.push(66);
        const popped = stac2.pop();
        expect(stac2.toArray()).toEqual([55, 44]);
        expect(popped).toEqual(66);
    });

    it('it should empty the stack after pop', () => {
        const stac3 = new Stack();
        stac3.push(44);
        stac3.push(55);
        stac3.push(66);
        stac3.pop();
        stac3.pop();
        stac3.pop();
        expect(stac3.isEmpty()).toEqual(true);
    });

    it('peek the next item on the stack', () => {
        const stac4 = new Stack();
        stac4.push(44);
        stac4.push(55);
        stac4.push(66);
        expect(stac4.peek()).toEqual(66);
    });

    it('it should instantiate an empty stack', () => {
        const stac5 = new Stack();
        expect(stac5.isEmpty()).toBe(true);
    });

    it('enqueue into a queue', () => {
        const queu1 = new Queue();
        queu1.enqueue(44);
        expect(queu1.toArray()[0]).toEqual(44);
        expect(queu1.peek()).toEqual(44);
    });

    it('enqueue multiple values into a queue', () => {
        const queu2 = new Queue();
        queu2.enqueue(44);
        queu2.enqueue(55);
        queu2.enqueue(66);
        expect(queu2.toArray()).toEqual([66, 55, 44]);
        expect(queu2.peek()).toEqual(44);
    });

    it('dequeue out  queue the expected value', () => {
        const queu3 = new Queue();
        queu3.enqueue(44);
        queu3.enqueue(55);
        queu3.enqueue(66);
        let answer = queu3.dequeue();
        expect(queu3.toArray()).toEqual([66, 55]);
        expect(answer).toEqual(44);
    });

    it('seeing the expected value', () => {
        const queu4 = new Queue();
        queu4.enqueue(44);
        queu4.enqueue(55);
        queu4.enqueue(66);
        let answer = queu4.peek();
        expect(queu4.toArray()).toEqual([66, 55, 44]);
        expect(answer).toEqual(44);
    });

    it('empty a queue after multiy dequeues', () => {
        const queu5 = new Queue();
        queu5.enqueue(44);
        queu5.enqueue(55);
        queu5.enqueue(66);
        queu5.dequeue();
        queu5.dequeue();
        queu5.dequeue();
        expect(queu5.toArray()).toEqual([]);
        expect(queu5.isEmpty()).toEqual(true);
    });

    it('instantiate an empty queue', () => {
        const queu6 = new Queue();
        expect(queu6.isEmpty()).toEqual(true);
    });
});