const {
  NotImplementedError
} = require('../extensions/index.js');

const {
  Node
} = require('../extensions/list-tree.js');

/**
 * Implement simple binary search tree according to task description
 * using Node from extensions
 */
class BinarySearchTree {
  constructor() {
    this.main = null;
  }

  root() {
    return this.main;
  }

  add(value) {
    this.main = addWithIn(this.main, value);

    function addWithIn(node, value) {
      if (!node) {
        return new Node(value);
      }

      if (node.data === value) {
        return node;
      }
      if (value < node.data) {
        node.left = addWithIn(node.left, value);
      } else {
        node.right = addWithIn(node.right, value);
      }
      return node;
    }
  }

  has(value) {
    return searchWithIn(this.main, value);

    function searchWithIn(node, value) {
      if (!node) {
        return false;
      }

      if (node.data === value) {
        return true;
      }

      if (value < node.data) {
       return searchWithIn(node.left, value);
      } else {
        return  searchWithIn(node.right, value);
      }
    }
  }

  find(value) {
    return searchWithIn(this.main, value);

    function searchWithIn(node, value) {
      if (!node) {
        return null;
      }

      if (node.data === value) {
        return node;
      }

      if (value < node.data) {
       return searchWithIn(node.left, value);
      } else {
        return  searchWithIn(node.right, value);
      }
    }
  }

  remove(value) {
    this.main = removeNode(this.main, value);

    function removeNode(node, value){
      if(!node){
        return null;
      }

      if(value < node.data){
        node.left = removeNode(node.left, value);
        return node;
      } else if(value > node.data){
        node.right = removeNode(node.right, value);
        return node;
      } else{
        if(!node.left && !node.right){
          return null;
        }
        if(!node.left){
          node = node.right;
          return node;
        }
        if(!node.right){
          node = node.left;
          return node;
        }

        let minFromRight = node.right;
        while(minFromRight.left){
          minFromRight = minFromRight.left;
        }
        node.data = minFromRight.data;

        node.right = removeNode(node.right, minFromRight.data);
        return node;
      }
    }
  }

  min() {
    if(!this.main){
      return null;
    }
    let node = this.main;
    while(node.left){
      node = node.left;
    }
    return node.data;
  }

  max()  {
    if(!this.main){
      return null;
    }
    let node = this.main;
    while(node.right){
      node = node.right;
    }
    return node.data;
  }
}

module.exports = {
  BinarySearchTree
};

