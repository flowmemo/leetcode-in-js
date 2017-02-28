/*
327. Count of Range Sum
Given an integer array nums, return the number of range sums that lie in [lower, upper] inclusive.
Range sum S(i, j) is defined as the sum of the elements in nums between indices i and j (i ≤ j), inclusive.

Note:
A naive algorithm of O(n2) is trivial. You MUST do better than that.

Example:
Given nums = [-2, 5, -1], lower = -2, upper = 2,
Return 3.
The three ranges are : [0, 0], [2, 2], [0, 2] and their respective sums are: -2, -1, 2.
*/

class TreeNode {
  constructor (val) {
    this.val = val
    this.lnode = this.rnode = 0
    this.count = 1
    this.left = this.right = null
  }
}
class BST {
  constructor () {
    this.root = null
  }

  add (val) {
    if (!this.root) {
      this.root = new TreeNode(val)
      return
    }

    let node = this.root
    while (1) {
      if (val < node.val) {
        node.lnode++
        if (node.left) {
          node = node.left
        } else {
          node.left = new TreeNode(val)
          return
        }
      } else if (val > node.val) {
        node.rnode++
        if (node.right) {
          node = node.right
        } else {
          node.right = new TreeNode(val)
          return
        }
      } else {
        node.count++
        return
      }
    }
  }

  countRange (lower, upper) {
    return this._countRange(lower, upper, this.root)
  }
  _countRange (lower, upper, node) {
    while (node) {
      if (node.val > upper) {
        node = node.left
      } else if (node.val < lower) {
        node = node.right
      } else {
        break
      }
    }
    if (!node) return 0
    const head = node
    let res = node.count

    // count left subtree
    node = head.left
    while (node) {
      if (node.val >= lower) {
        res += node.count + node.rnode
        node = node.left
      } else {
        res += this._countRange(lower, upper, node.right)
        break
      }
    }

    // count right subtree
    node = head.right
    while (node) {
      if (node.val <= upper) {
        res += node.count + node.lnode
        node = node.right
      } else {
        res += this._countRange(lower, upper, node.left)
        break
      }
    }
    return res
  }
}

/**
 * @param {number[]} nums
 * @param {number} lower
 * @param {number} upper
 * @return {number}
 */
var countRangeSum = function (nums, lower, upper) {
  const len = nums.length
  const sum = Array(len)
  sum[0] = nums[0]
  // sum[i] = sum of [0, i]
  for (let i = 1; i < len; i++) {
    sum[i] = sum[i - 1] + nums[i]
  }
  const bst = new BST()
  bst.add(0)
  let res = 0
  for (let i = 0; i < len; i++) {
    // sum[i] - sum[j] <= upper --> sum[j] >= sum[i] - upper
    // sum[i] - sum[j] >= lower --> sum[j] <= sum[i] - lower
    // sum[j] is in [sum[i] - upper, sum[i] - lower]
    let diff = bst.countRange(sum[i] - upper, sum[i] - lower)
    res += diff
    bst.add(sum[i])
  }
  return res
}

let tc = [
  [[-2, 5, -1], -2, 2],
  [[], 0, 0],
  [[1, 4, -2, 3, -4, 3, 0, -4, 4], 3, 6]
]

let ans = [
  3, 0, 16
]

for (let i = 0; i < tc.length; i++) {
  let a = ans[i]
  let r = countRangeSum(...tc[i])
  console.log(a === r, a, r)
}

