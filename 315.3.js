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

class BIT {
  constructor (nums) {
    const n = nums.length
    this.n = n
    const tree = Array(n + 1).fill(0)
    this.tree = tree
    for (let i = 0; i < n; ++i) this.update(i, nums[i])
  }

  update (i, val) {
    const tree = this.tree
    const n = this.n
    let j = i + 1
    while (j <= n) {
      tree[j] += val
      j += j & (-j)
    }
  }

  sumRange (i, j) {
    return this.sumBeforeIndex(j + 1) - this.sumBeforeIndex(i)
  }
  sumBeforeIndex (i) {
    const tree = this.tree
    let res = 0
    while (i) {
      res += tree[i]
      i -= i & (-i)
    }
    return res
  }
};

/**
 * @param {number[]} nums
 * @return {number[]}
 */
var countSmaller = function (nums) {
  const n = nums.length
  const ind = Array(n).fill().map((_, i) => i)
  ind.sort((a, b) => {
    if (nums[a] !== nums[b]) return nums[a] - nums[b]
    return a - b
  })
  const res = Array(n).fill(0)
  const st = new BIT(res)
  for (let i = 0; i < n; ++i) {
    const j = ind[i]
    st.update(j, 1)
    res[j] = st.sumRange(j + 1, n - 1)
  }
  return res
}

module.exports = countSmaller
