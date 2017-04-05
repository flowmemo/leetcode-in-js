/*
445. Add Two Numbers II
You are given two non-empty linked lists representing two non-negative integers. The most significant digit comes first and each of their nodes contain a single digit. Add the two numbers and return it as a linked list.

You may assume the two numbers do not contain any leading zero, except the number 0 itself.

Follow up:
What if you cannot modify the input lists? In other words, reversing the lists is not allowed.

Example:

Input: (7 -> 2 -> 4 -> 3) + (5 -> 6 -> 4)
Output: 7 -> 8 -> 0 -> 7
*/

/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */
/**
 * @param {ListNode} l1
 * @param {ListNode} l2
 * @return {ListNode}
 */
var addTwoNumbers = function (l1, l2) {
  'use strict'
  const rl1 = reverseList(l1)
  const rl2 = reverseList(l2)
  return add(rl1, rl2)
}

function add (l1, l2) {
  'use strict'
  let curry = 0
  let pre = null
  while (l1 || l2 || curry) {
    let n1 = 0
    let n2 = 0
    if (l1) {
      n1 = l1.val
      l1 = l1.next
    }

    if (l2) {
      n2 = l2.val
      l2 = l2.next
    }

    let n = (n1 + n2 + curry)
    curry = n / 10 | 0
    n = n % 10
    let cnode = new ListNode(n)
    cnode.next = pre
    pre = cnode
  }

  return pre
}

function reverseList (root) {
  'use strict'
  let cur = root
  let pre = null
  while (cur) {
    const ncur = cur.next
    cur.next = pre
    pre = cur
    cur = ncur
  }
  return pre
}

module.exports = addTwoNumbers

function ListNode (val) {
  this.val = val
  this.next = null
}
