/*
114. Flatten Binary Tree to Linked List
Given a binary tree, flatten it to a linked list in-place.

For example,
Given

         1
        / \
       2   5
      / \   \
     3   4   6
The flattened tree should look like:
   1
    \
     2
      \
       3
        \
         4
          \
           5
            \
             6

Hints:
If you notice carefully in the flattened tree, each node's right child points to the next node of a pre-order traversal.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
/**
 * @param {TreeNode} root
 * @return {void} Do not return anything, modify root in-place instead.
 */
var flatten = function (root) {
  helper(root, null)
}

function helper (root, appendNode) {
  // bottom up
  if (!root) return null
  if (root.right) helper(root.right, appendNode)
  else root.right = appendNode
  if (root.left) {
    helper(root.left, root.right)
    root.right = root.left
    root.left = null
  }
}

module.exports = flatten
