/*
437. Path Sum III
You are given a binary tree in which each node contains an integer value.

Find the number of paths that sum to a given value.

The path does not need to start or end at the root or a leaf, but it must go downwards (traveling only from parent nodes to child nodes).

The tree has no more than 1,000 nodes and the values are in the range -1,000,000 to 1,000,000.

Example:

root = [10,5,-3,3,2,null,11,3,-2,null,1], sum = 8

      10
     /  \
    5   -3
   / \    \
  3   2   11
 / \   \
3  -2   1

Return 3. The paths that sum to 8 are:

1.  5 -> 3
2.  5 -> 2 -> 1
3. -3 -> 11
*/
/**
 * Definition for a binary tree node.
 * function TreeNode(val) {
 *     this.val = val;
 *     this.left = this.right = null;
 * }
 */

function helper (root, target, midt) {
  let res = 0
  res += dfs(root, target)
  if (root.left) {
    res += helper(root.left, target)
  }
  if (root.right) {
    res += helper(root.right, target)
  }
  return res
}

function dfs (root, target) {
  let res = 0
  let val = root.val
  if (val === target) res++
  if (root.left) {
    res += dfs(root.left, target - val)
  }
  if (root.right) {
    res += dfs(root.right, target - val)
  }
  return res
}

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */

var pathSum = function (root, sum) {
  if (root === null) return 0
  let r = helper(root, sum, sum)
  return r
}

