'use strict';

class Array {
    constructor() {
        this.length = 0;
        this.data = {};
    }

    reindex() {
        let data = Object.keys(this.data).sort().reduce((acc, val, idx) => {
            acc[idx] = this.data[val];
            return acc;
        }, {});

        this.length = Object.keys(data).length;
        this.data = data;
    }

    push(item) {
        if (arguments.length === 1) {
            this.data[this.length++] = item;
        }
        return this.length;
    }
    shift() {
        if (!this.data[0]) { return undefined; }
        let item = this.data[0];
        delete this.data[0];
        this.reindex();
        return item;
    }


}