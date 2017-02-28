/*
450. Delete Node in a BST
Given a root node reference of a BST and a key, delete the node with the given key in the BST. Return the root node reference (possibly updated) of the BST.

Basically, the deletion can be divided into two stages:

Search for a node to remove.
If the node is found, delete the node.
Note: Time complexity should be O(height of tree).

Example:

root = [5,3,6,2,4,null,7]
key = 3

    5
   / \
  3   6
 / \   \
2   4   7

Given key to delete is 3. So we find the node with value 3 and delete it.

One valid answer is [5,4,6,2,null,null,7], shown in the following BST.

    5
   / \
  4   6
 /     \
2       7

Another valid answer is [5,2,6,null,4,null,7].

    5
   / \
  2   6
   \   \
    4   7
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */
let dir = 0
/**
 * @param {TreeNode} root
 * @param {number} key
 * @return {TreeNode}
 */
var deleteNode = function (root, key) {
  'use strict'
  if (!root) return null
  if (key < root.val) {
    root.left = deleteNode(root.left, key)
    return root
  } else if (key > root.val) {
    root.right = deleteNode(root.right, key)
    return root
  }

  // key == root.val
  if (!root.right) {
    return root.left
  } else if (!root.left) {
    return root.right
  } else {
    if (dir++ & 1) {
      const nroot = moveLeft(root.right)
      nroot.left = root.left
      return nroot
    } else {
      const nroot = moveRight(root.left)
      nroot.right = root.right
      return nroot
    }
  }
}

function moveLeft (root) {
  'use strict'
  if (!root.left) return root
  let cur = root
  let par = cur
  while (cur.left) {
    par = cur
    cur = cur.left
  }
  par.left = cur.right
  cur.right = root
  return cur
}

function moveRight (root) {
  'use strict'
  if (!root.right) return root
  let cur = root
  let par = cur
  while (cur.right) {
    par = cur
    cur = cur.right
  }
  par.right = cur.left
  cur.left = root
  return cur
}

module.exports = deleteNode
