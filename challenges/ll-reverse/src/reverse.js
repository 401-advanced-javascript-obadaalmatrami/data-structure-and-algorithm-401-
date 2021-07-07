'use strict';


class llReverse {
    constructor(value, next = null) {
        this.head = null;
        this.next = next;
        this.value = value;
    }

    reverse() {
        if (this.head && this.head.next) {
            this.head = this.llreverse(this.head, this.head.next);
        }
    }

    llreverse(previous, current) {
        let nhead;
        if (current.next) {
            nhead = this.llreverse(current, current.next);
        } else {
            nhead = current;
        }
        current.next = previous;
        previous.next = null;
        return nhead;
    }


    insert(value) {
        const node = new llReverse(value, this.head);
        this.head = node;
    }


    toString() {
        const arr = [];
        let current = this.head;
        while (current) {
            arr.push(current.value);
            current = current.next;
        }
        return `[${arr.join(',')}]`;
    }
}







module.exports = llReverse;