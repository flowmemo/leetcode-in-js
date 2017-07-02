/*
86. Partition List
Given a linked list and a value x, partition it such that all nodes less than x come before nodes greater than or equal to x.

You should preserve the original relative order of the nodes in each of the two partitions.

For example,
Given 1->4->3->2->5->2 and x = 3,
return 1->2->2->4->3->5.
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} head
 * @param {number} x
 * @return {ListNode}
 */
var partition = function (head, x) {
  'use strict'
  const h1 = {}
  const h2 = {}
  let less = h1
  let other = h2
  while (head != null) {
    if (head.val < x) {
      less.next = head
      less = less.next
    } else {
      other.next = head
      other = other.next
    }
    head = head.next
  }
  other.next = null
  less.next = h2.next
  return h1.next
}

module.exports = partition
