'use strict';

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.counter = 0;
    }

    append(value) {

        if (this.head === null) {
            this.head = new Node(value);
        } else if (this.next !== null) {
            let currentNode = this.head;
            while (currentNode.next !== null) {
                currentNode = currentNode.next;
            }
            currentNode.next = new Node(value);
        }
        this.counter++;
    }

    insertBeforeindex(value, newValue) {
        var node = new Node(newValue);
        let currentNode = this.head;
        let previousNode = null;


        while (currentNode) {
            if (currentNode.value === value) {
                if (previousNode === null) {
                    this.head = node;
                } else {
                    previousNode.next = node;
                }
                node.next = currentNode;
                break;
            }
            previousNode = currentNode;
            currentNode = currentNode.next;
        }
        this.counter++;
    }

    insertAfterindex(value, newValue) {
        var insertedNode = new Node(newValue);
        let currentNode = this.head;

        while (currentNode) {
            if (currentNode.value === value) {
                insertedNode.next = currentNode.next;
                currentNode.next = insertedNode;
                break;
            }
            if (currentNode.next === null) {
                currentNode.next = insertedNode;
            }
            currentNode = currentNode.next;
        }
        this.counter++;
    }


    kthFromEnd(k) {
        let currentNode = this.head;
        let length = 0;

        while (currentNode) {
            length++;
            currentNode = currentNode.next;
        }

        let askedNode = length - 1 - k;
        if (askedNode < 0 || k < 0) {
            return 'exception'
        }

        currentNode = this.head;

        while (askedNode > 0) {

            askedNode--;
            currentNode = currentNode.next;

        }


        return currentNode.value;
    }
}



module.exports = LinkedList;