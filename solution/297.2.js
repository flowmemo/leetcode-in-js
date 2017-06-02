/*
297. Serialize and Deserialize Binary Tree
Serialization is the process of converting a data structure or object into a sequence of bits so that it can be stored in a file or memory buffer, or transmitted across a network connection link to be reconstructed later in the same or another computer environment.

Design an algorithm to serialize and deserialize a binary tree. There is no restriction on how your serialization/deserialization algorithm should work. You just need to ensure that a binary tree can be serialized to a string and this string can be deserialized to the original tree structure.

For example, you may serialize the following tree

    1
   / \
  2   3
     / \
    4   5
as "[1,2,3,null,null,4,5]", just the same as how LeetCode OJ serializes a binary tree. You do not necessarily need to follow this format, so please be creative and come up with different approaches yourself.
Note: Do not use class member/global/static variables to store states. Your serialize and deserialize algorithms should be stateless.
*/

/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

/**
 * Encodes a tree to a single string.
 *
 * @param {TreeNode} root
 * @return {string}
 */
var serialize = function (root) {
  'use strict'
  const res = []
  if (!root) return JSON.stringify(res)
  const q = [root]
  while (q.length) {
    let node = q.shift()
    if (node) {
      res.push(node.val)
      q.push(node.left)
      q.push(node.right)
    } else {
      res.push(null)
    }
  }
  for (let i = res.length - 1; i >= 0; --i) {
    if (res[i] !== null) {
      res.length = i + 1
      break
    }
  }
  return JSON.stringify(res)
}

/**
 * Decodes your encoded data to tree.
 *
 * @param {string} data
 * @return {TreeNode}
 */
var deserialize = function (data) {
  'use strict'
  const arr = JSON.parse(data)
  const len = arr.length
  if (!len) return null
  let index = 0
  const root = new TreeNode(arr[index++])
  const q = [root]
  while (q.length) {
    let node = q.shift()
    if (index >= len || arr[index] === null) {
      node.left = null
    } else {
      node.left = new TreeNode(arr[index])
      q.push(node.left)
    }
    ++index
    if (index >= len || arr[index] == null) {
      node.right = null
    } else {
      node.right = new TreeNode(arr[index])
      q.push(node.right)
    }
    ++index
  }
  return root
}

/**
 * Your functions will be called as such:
 * deserialize(serialize(root));
 */

module.exports = {
  serialize,
  deserialize
}

function TreeNode (val) {
  this.val = val
  this.left = this.right = null
}
