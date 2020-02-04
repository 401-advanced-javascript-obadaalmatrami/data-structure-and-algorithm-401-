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


function multiBracketValidation(string) {
    let stack = new Stack;
    let brackets = {
        '(': ')',
        '[': ']',
        '{': '}',
    };
    if (typeof string !== 'string') {
        return undefined;
    }

    for (let i = 0; i < string.length; i++) {
        let char = string.charAt(i);
        if (brackets[char]) {
            stack.push(brackets[char]);
        } else {
            let last = stack.pop();
            if (string[char] !== brackets[last]) {
                return false;
            }
        }
    }
    if (stack.isEmpty()) {
        return true;
    } else {
        return false;
    }
}


module.exports = multiBracketValidation;