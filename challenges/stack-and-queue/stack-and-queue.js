'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class Stack {
    constructor() {
        this.top = null;
    }

    push(value) {
        let nodenew = new Node(value);
        nodenew.next = this.top;
        this.top = nodenew;
    }

    pop() {
        if (this.top === null) {
            return null;
        }

        const nodetop = this.top;
        this.top = nodetop.next;
        return nodetop.value;
    }

    peek() {
        return this.top === null ? null : this.top.value;
    }

    isEmpty() {
        return this.top === null;
    }

    toArray() {
        const arr1 = [];
        let current = this.top;
        while (current) {
            arr1.push(current.value);
            current = current.next;
        }
        return arr1;
    }
}

class Queue {
    constructor() {
        this.front = null;
        this.back = null;
    }

    enqueue(value) {
        let nodenew = new Node(value);
        nodenew.next = this.back;
        this.back = nodenew;

        if (this.front === null) {
            this.front = nodenew;
        }
    }

    dequeue() {
        if (this.front === null) {
            return null;
        }
        const nodefront = this.front;


        if (this.back !== this.front) {
            let current = this.back;
            while (current.next !== this.front) {
                current = current.next;
            }
            this.front = current;
            this.front.next = null;
        } else {
            this.front = null;
            this.back = null;
        }
        return nodefront.value;
    }

    peek() {
        return this.front === null ? null : this.front.value;
    }

    isEmpty() {
        return this.front === null;
    }

    toArray() {
        const arr2 = [];
        let current = this.back;
        while (current) {
            arr2.push(current.value);
            current = current.next;
        }
        return arr2;
    }
}

module.exports = { Node, Stack, Queue };