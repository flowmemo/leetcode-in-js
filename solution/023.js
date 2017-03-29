/*
23. Merge k Sorted Lists
Merge k sorted linked lists and return it as one sorted list. Analyze and describe its complexity.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
const { MinPQ } = require('../helper/PriorityQueue')
/**
 * @param {ListNode[]} lists
 * @return {ListNode}
 */
var mergeKLists = function (lists) {
  'use strict'
  const pq = new MinPQ((a, b) => a.val - b.val)
  for (let node of lists) {
    if (node) pq.push(node)
  }

  const dummy = {next: null}
  let pre = dummy

  while (pq.size()) {
    let cur = pq.pop()
    if (cur.next) pq.push(cur.next)
    pre.next = cur
    pre = pre.next
  }

  return dummy.next
}

module.exports = mergeKLists
