const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Given a singly linked list of integers l and an integer k,
 * remove all elements from list l that have a value equal to k.
 *
 * @param {List} l
 * @param {Number} k
 * @return {List}
 *
 * @example
 * For l = [3, 1, 2, 3, 4, 5] and k = 3,
 * the output should be [1, 2, 4, 5]
 *
 * Singly - linked lists are already defined using interface*/
 class ListNode {
   constructor(x) {
     this.value = x;
     this.next = null;
   }
 }

function listLength (list, length = 1) {
    if (!list) return 0;
    if (list.next === null) return length;
   return listLength(list.next, length += 1);
 }

function removeOnce(list, num) {
  if (!list) return;
  if (list.value === num) return list.next;
  if (list.next && list.next.value === num) {
  list.next = list.next.next;
  
  return list;
  }
  list.next = removeOnce(list.next, num);
  if (list.next === undefined) list.next = null;
  return list;
}

function removeKFromList(l, k ) {
  if (listLength(l) === listLength(removeOnce(l, k))) return l;
  return removeKFromList(removeOnce(l, k), k );
}

module.exports = {
  removeKFromList
};
