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
}

class QueueuseStack {

    constructor() {

        this.inStack = new Stack();
        this.outStack = new Stack();
    }




    enqueue(value) {

        this.inStack.push(value);

    }

    dequeue() {

        if (this.outStack.isEmpty()) {

            while (!this.inStack.isEmpty()) {

                this.outStack.push(this.inStack.pop());
            }
        }

        return this.outStack.pop();

    }

}


module.exports = QueueuseStack;