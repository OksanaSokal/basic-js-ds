const { NotImplementedError } = require('../extensions/index.js');

const { Node } = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  root() {
    if (!this.ourRoot) {
      return null;
    } else {
      return this.ourRoot;
    }
    // remove line with error and write your code here
  }

  add(data) {
    this.ourRoot = addInto(this.ourRoot, data);

    function addInto(node, data) {
      if (!node) return new Node(data);
      if (node.data === data) return node;
      if (node.data > data) {
        node.left = addInto(node.left, data);
      } else {
        node.right = addInto(node.right, data);
      }
      return node;
    }
    // remove line with error and write your code here
  }

  has(data) {
    return doWeHave(this.ourRoot, data);

    function doWeHave(node, data) {
      if (!node) return false;

      if (node.data === data) return true;

      if (node.data > data) {
        return doWeHave(node.left, data);
      } else {
        return doWeHave(node.right, data);
      }
    }
    // remove line with error and write your code here
  }

  find(data) {
    return findNodeData(this.ourRoot, data);

    function findNodeData(node, data) {
      if (!node) return null;
      if (node.data === data) return node;

      if (node.data > data) {
        return findNodeData(node.left, data);
      } else {
        return findNodeData(node.right, data);
      }
    }
    // remove line with error and write your code here
  }

  remove(data) {
    this.ourRoot = removeNode(this.ourRoot, data);

    function removeNode(node, data) {
      if (!node) return null;
      if (node.data < data) {
        node.right = removeNode(node.right, data);
        return node;
      } else if (node.data > data) {
        node.left = removeNode(node.left, data);
        return node;
      } else {
        if (!node.left && !node.right) return null;

        if (!node.left) {
          node = node.right;
          return node;
        }
        if (!node.right) {
          node = node.left;
          return node;
        }

        let maxLeft = node.left;
        while (maxLeft.right) {
          maxLeft = maxLeft.right;
        }
        node.data = maxLeft.data;
        node.left = removeNode(node.left, maxLeft.data);

        return node;
      }
    }
    // remove line with error and write your code here
  }

  min() {
    let node = this.ourRoot;

    if (!node) return null;

    while (node.left) {
      node = node.left;
    }

    return node.data;
    // remove line with error and write your code here
  }

  max() {
    let node = this.ourRoot;

    if (!node) return null;

    while (node.right) {
      node = node.right;
    }

    return node.data;
    // remove line with error and write your code here
  }
}

module.exports = {
  BinarySearchTree,
};
