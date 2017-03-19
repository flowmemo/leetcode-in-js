/*
203. Remove Linked List Elements
Remove all elements from a linked list of integers that have value val.

Example
Given: 1 --> 2 --> 6 --> 3 --> 4 --> 5 --> 6, val = 6
Return: 1 --> 2 --> 3 --> 4 --> 5

Credits:
Special thanks to @mithmatt for adding this problem and creating all test cases.
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
 * @param {number} val
 * @return {ListNode}
 */
var removeElements = function (head, val) {
  'use strict'
  const dummy = {}
  let pre = dummy
  pre.next = head
  while (head) {
    while (head && head.val !== val) {
      pre = head
      head = head.next
    }

    while (head && head.val === val) head = head.next
    pre.next = head
  }
  return dummy.next
}

module.exports = removeElements
