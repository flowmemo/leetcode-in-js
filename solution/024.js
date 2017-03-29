/*
24. Swap Nodes in Pairs
Given a linked list, swap every two adjacent nodes and return its head.

For example,
Given 1->2->3->4, you should return the list as 2->1->4->3.

Your algorithm should use only constant space. You may not modify the values in the list, only nodes itself can be changed.
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
 * @return {ListNode}
 */
var swapPairs = function (head) {
  'use strict'
  const dummy = {next: head}
  let pre = dummy
  while (head && head.next) {
    const hnext = head.next
    pre.next = hnext
    const nhead = hnext.next
    hnext.next = head
    head.next = nhead
    pre = head
    head = nhead
  }

  return dummy.next
}

module.exports = swapPairs
