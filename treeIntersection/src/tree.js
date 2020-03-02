// eslint-disable-next-line strict
'use strict';

class Node {
  constructor(value) {
    this.value = value;
    this.right = null;
    this.left = null;
  }
}

class BinaryTree {
  constructor() {
    this.root = null;
    this.thebigestArray = [];
  }

  preOrder(node) {
    if (node) {
      this.thebigestArray.push(node.value);
      this.preOrder(node.left);
      this.preOrder(node.right);
    }
    return this.thebigestArray;
  }

  inOrder(node) {
    if (node) {
      this.inOrder(node.left);
      this.thebigestArray.push(node.value);
      this.inOrder(node.right);
    }
    return this.thebigestArray;
  }

  postOrder(node) {
    if (node) {
      this.postOrder(node.left);
      this.postOrder(node.right);
      this.thebigestArray.push(node.value);
    }
    return this.thebigestArray;
  }

  add(value) {
    let newNodee = new Node(value);
    if (this.root === null) {
      this.root = newNodee;
    } else {
      this.addNode(this.root, newNodee);
    }
  }

  addNode(node, newNode) {
    if (newNode.value < node.value) {
      if (node.left === null) {
        node.left = newNode;
      } else {
        this.addNode(node.left, newNode);
      }
    } else {
      if (node.right === null) {
        node.right = newNode;
      } else {
        this.addNode(node.right, newNode);
      }
    }
  }
}

module.exports = { BinaryTree };