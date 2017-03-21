// 452. Minimum Number of Arrows to Burst Balloons

const data = [
  {
    input: [[[10, 16], [2, 8], [1, 6], [7, 12]]],
    ans: 2
  },
  {
    input: [[[3, 9], [7, 12], [3, 8], [6, 8], [9, 10], [2, 9], [0, 9], [3, 9], [0, 6], [2, 8]]],
    ans: 2
  },
  {
    input: [[[1, 2], [2, 3], [3, 4], [4, 5]]],
    ans: 2
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
