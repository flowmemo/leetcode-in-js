/*
117. Populating Next Right Pointers in Each Node II
Follow up for problem "Populating Next Right Pointers in Each Node".

What if the given tree could be any binary tree? Would your previous solution still work?

Note:

You may only use constant extra space.
For example,
Given the following binary tree,
         1
       /  \
      2    3
     / \    \
    4   5    7
After calling your function, the tree should look like:
         1 -> NULL
       /  \
      2 -> 3 -> NULL
     / \    \
    4-> 5 -> 7 -> NULL
*/

/**
 * Definition for binary tree with next pointer.
 * function TreeLinkNode(val) {
 *     this.val = val;
 *     this.left = this.right = this.next = null;
 * }
 */

/**
 * @param {TreeLinkNode} root
 * @return {void} Do not return anything, modify tree in-place instead.
 */
var connect = function (root) {
  // https://discuss.leetcode.com/post/2791
  let node = root
  while (node) {
    let nextstart = null
    let prev = null
    while (node) {
      if (node.left) {
        if (prev) {
          prev.next = node.left
          prev = prev.next
        } else {
          prev = node.left
          nextstart = prev
        }
      }
      if (node.right) {
        if (prev) {
          prev.next = node.right
          prev = prev.next
        } else {
          prev = node.right
          nextstart = prev
        }
      }
      node = node.next
    }

    node = nextstart
  }
}

module.exports = connect
