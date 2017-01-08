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
  let node = root
  while (node) {
      // find first non-null child
    let chd = null
    while (node) {
      if (node.left) {
        chd = node.left
        break
      }
      if (node.right) {
        chd = node.right
        node = node.next
        break
      }
      node = node.next
    }
    let nextnode = chd

    while (chd && node) {
      let next = null
        // find next node of chd
      if (node.left === chd) {
        if (node.right) {
          next = node.right
        }
        node = node.next
      }

      if (!next) {
        while (node) {
          if (node.left) {
            next = node.left
            break
          }
          if (node.right) {
            next = node.right
            node = node.next
            break
          }
          node = node.next
        }
      }
      chd.next = next
      chd = next
    }
    node = nextnode
  }
}

module.exports = connect
