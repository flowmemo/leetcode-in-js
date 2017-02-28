/*
2. Add Two Numbers
You are given two linked lists representing two non-negative numbers. The digits are stored in reverse order and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

Input: (2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 0 -> 8
*/
/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

const ListNode = require('../helper/ListNode.js')
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  let n1 = l1
  let n2 = l2
  const zero = new ListNode(0)
  const preHead = new ListNode(0)
  let pre = preHead
  let ad = 0
  while (n1 || n2) {
    let val1 = (n1 || zero).val
    let val2 = (n2 || zero).val
    let sum = val1 + val2 + ad
    if (sum >= 10) {
      sum = sum - 10
      ad = 1
    } else {
      ad = 0
    }
    pre.next = new ListNode(sum)
    pre = pre.next
    if (n1) n1 = n1.next
    if (n2) n2 = n2.next
  }
  if (ad) pre.next = new ListNode(ad)
  return preHead.next
}

module.exports = addTwoNumbers

