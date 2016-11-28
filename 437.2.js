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

/**
 * @param {TreeNode} root
 * @param {number} sum
 * @return {number}
 */
var pathSum = function (root, sum) {
  const map = Object.create(null)
  map[0] = 1
  return helper(root, map, 0, sum)
}

/** Time complexity: O(n) - linear
 * @param {TreeNode} root
 * @param {Object.<number, number>} map
 * @param {number} pathSum
 * @param {number} sum
 * @return {number}
 */
function helper (root, map, pathSum, sum) {
  if (!root) return 0
  let res = 0
  pathSum += root.val
  res += map[pathSum - sum] || 0
  map[pathSum] = (map[pathSum] || 0) + 1
  res += helper(root.left, map, pathSum, sum)
  res += helper(root.right, map, pathSum, sum)
  --map[pathSum]
  return res
};
