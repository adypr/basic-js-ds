const { NotImplementedError } = require('../extensions/index.js');

//const { Node } = require('../extensions/list-tree.js');

/**
* Implement simple binary search tree according to task description
* using Node from extensions
*/

class Node {
  constructor(value) {
      this.value = value;
      this.left = null;
      this.right = null;
      this.data = this.value;
  }
}

class BinarySearchTree {
  constructor() {
      this.mainRoot = null;
  }

  add(value) {
      const newNode = new Node(value);
      if (!this.mainRoot) {
          this.mainRoot = newNode;
          return;
      }

      let currentNode = this.mainRoot;

      while(currentNode) {
          if (newNode.value < currentNode.value) {
              if (!currentNode.left) {
                  currentNode.left = newNode;
                  return;
              }
              currentNode = currentNode.left;
          } else {
              if (!currentNode.right) {
                  currentNode.right = newNode;
                  return;
              }
              currentNode = currentNode.right;
          }
      }

  }

  root () {
    if (!this.mainRoot) return null;
      return this.mainRoot;
  }

  has(data) {
      let result = false;
      this.traversBFS((node) => {
          if (data === node.value) {
              result = true;
          }
      })
      return result;
  }

  find(data) {
      let result = null;
      this.traversBFS((node) => {
          if (data === node.value) {
              result = node;
          }
      })
      return result;
  }

  min() {
      let result = this.mainRoot.value;
      this.traversBFS((node) => {
          if (result > node.value) {
              result = node.value;
          }
      })
      return result;
  }

  max() {
      let result = this.mainRoot.value;
      this.traversBFS((node) => {
          if (result < node.value) {
              result = node.value;
          }
      })
      return result;
  }

  traversBFS(callback) {
      const queue = [this.mainRoot];
      while (queue.length) {
          const node = queue.shift()
          callback(node);

          if (node.left) {
              queue.push(node.left);
          }
          if (node.right) {
              queue.push(node.right);
          }
      }
  }

  remove(data) {
      if (this.mainRoot === null) return null;
      this.mainRoot = this._deleteNode(this.mainRoot, data);
  }

  _findMinNode(node) { 
    if(node.left === null)
        return node;
    else
        return this._findMinNode(node.left);
  }

  _deleteNode(node, key) {
    if (node === null) return null;
    else if (key < node.value) {
      node.left = this._deleteNode(node.left, key);
      return  node;
    }
    else if (key > node.value) {
      node.right = this._deleteNode(node.right, key);
      return node;
    }
    else {
      if (node.left === null && node.right === null ) {
        node = null ;
      return node;
      }
      if (node.left === null) {
        node = node.right;
        return node;
      }
      else if (node.right === null) {
        node = node.left;
        return node;
      }
      let res = this._findMinNode(node.right);
      node.value = res.value;

      node.right = this._deleteNode(node.right, res.value);
      return node;
    }
  }

  
}

module.exports = {
    BinarySearchTree
  };

