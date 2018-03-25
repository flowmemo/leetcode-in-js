// 805. Split Array With Same Average

const data = [
  {
    input: [[1, 2, 3, 4, 5, 6, 7, 8]],
    ans: true

  },
  {
    input: [[3, 1]],
    ans: false
  },
  {
    input: [[5, 3, 11, 19, 2]],
    ans: true
  },
  {
    input: [[18, 10, 5, 3]],
    ans: false
  },
  {
    input: [[904, 8738, 6439, 1889, 138, 5771, 8899, 5790, 662, 8402, 3074, 1844, 5926, 8720, 7159, 6793, 7402, 9466, 1282, 1748, 434, 842, 22]],
    ans: false
  },
  {
    input: [[3, 3, 0, 4, 4, 4]],
    ans: true
  },
  {
    // https://leetcode.com/problems/split-array-with-same-average/discuss/120683/C++-Easiest-One-using-Sort!/119627
    input: [[9990, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30, 30]],
    ans: false
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
