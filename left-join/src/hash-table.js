

class Hashtable {
  constructor(size = 19) {
    this.myArr = new Array(size);
    this.size = size;
  }

  hash(key) {
    return key.toString()
      .length % this.size;
  }

  add(key, value) {
    const index = this.hash(key);
    if (!this.myArr[index]) {
      this.myArr[index] = [];
    }

    this.myArr[index].push(value);
  }

  get(key) {
    const index = this.hash(key);
    if (!this.myArr[index]) return null;

    for (let i = 0; i < this.size; i++) {
      if (this.myArr[i] === this.myArr[index]) {
        return this.myArr[i];

      }
    }
  }

  contains(key) {
    const index = this.hash(key);

    if (this.myArr[index]) {
      return true;
    }

    return null;
  }
}

module.exports = Hashtable;