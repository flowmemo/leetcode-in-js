/*
315. Count of Smaller Numbers After Self
Difficulty: Hard
You are given an integer array nums and you have to return a new counts array. The counts array has the property where counts[i] is the number of smaller elements to the right of nums[i].

Example:

Given nums = [5, 2, 6, 1]

To the right of 5 there are 2 smaller elements (2 and 1).
To the right of 2 there is only 1 smaller element (1).
To the right of 6 there is 1 smaller element (1).
To the right of 1 there is 0 smaller element.
Return the array [2, 1, 1, 0].
*/

// https://discuss.leetcode.com/post/33090
// BST solution

class TreeNode {
  constructor (val, count = 1, lcount = 0) {
    this.val = val
    this.count = count
    this.lcount = lcount // count of left subnode
    this.left = this.right = null
  }
  insert (v) {
    if (v < this.val) {
      this.lcount++
      if (this.left) return this.left.insert(v)
      else {
        this.left = new TreeNode(v)
        return 0
      }
    } else if (v > this.val) {
      if (this.right) return this.lcount + this.count + this.right.insert(v)
      else {
        this.right = new TreeNode(v)
        return this.count + this.lcount
      }
    } else {
      this.count++
      return this.lcount
    }
  }
}

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  'use strict'
  const len = nums.length
  const res = Array(len).fill(0)
  if (len <= 1) return res
  const root = new TreeNode(nums[len - 1])

  for (let i = len - 2; i >= 0; i--) {
    res[i] = root.insert(nums[i])
  }
  return res
}

module.exports = countSmaller
