/*
142. Linked List Cycle II
Given a linked list, return the node where the cycle begins. If there is no cycle, return null.

Note: Do not modify the linked list.

Follow up:
Can you solve it without using extra space?
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
var detectCycle = function (head) {
  let slow = head
  let fast = head
  while (slow && fast) {
    slow = slow.next
    fast = fast.next
    if (!fast) return null
    fast = fast.next
    if (slow === fast) break
  }

  if (!slow || !fast) return null
  let node = head
  while (node !== slow) {
    node = node.next
    slow = slow.next
  }
  return node
}

module.exports = detectCycle
