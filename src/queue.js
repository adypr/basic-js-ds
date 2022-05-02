const { NotImplementedError } = require('../extensions/index.js');

 const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */

class Queue {
  constructor() {
  this.list = null;
  this.length = 0;
  }

  getUnderlyingList() {
    return this.list;
  }

  enqueue(value) {
    if (this.length === 0) this.list = new ListNode(value);
    else {
      let current = this.list;
      while(current.next) {
        current = current.next;
      }
      current.next = new ListNode(value)
    }
    this.length += 1;
  }

  dequeue() {
    if (this.list) {
      let res = this.list.value;
      this.list = this.list.next;
      return res;
    }
  }

  dequeueFromTail() {
    const remove = (list, count) => {
      if (count === this.length - 1) {
        let res = list.next.value;
        list.next = null;
        this.length -= 1;
        return res;
      }
      return remove(list.next, count += 1);
    }
    return remove(this.list, 1);
  }
}

module.exports = {
  Queue
};
