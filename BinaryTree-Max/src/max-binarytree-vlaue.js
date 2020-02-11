/* eslint-disable no-unreachable */
/* eslint-disable no-redeclare */


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

  contains(value) {
    let has = false;
    if (this.value === value) {
      has = true;
    } else if (value.left !== null && value < this.value) {
      this.add(this.left);
    } else if (this.right !== null && value > this.value) {
      this.add(this.right);
    }
    this.add(this);
    return has;
  }


  breadthFirst(tree) {
    const queue = [];

    if (tree === null) {
      return;
    }

    queue.push(tree);

    while (queue.length > 0) {
      const currentNode = queue[0];

      if (currentNode.left !== null) {
        queue.push(currentNode.left);
      }
      if (currentNode.right !== null) {
        queue.push(currentNode.right);
      }
      this.thebigestArray.push(currentNode.value);
      queue.shift();
    }
    return this.thebigestArray;
  }

  maximumValue(tree) {
    let currentnode = tree.root;

    while(currentnode.right !== null) {
      currentnode = currentnode.right;
    }

    return currentnode.value;
  }

}

module.exports =  BinaryTree ;