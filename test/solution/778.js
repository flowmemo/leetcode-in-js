// 778. Swim in Rising Water

const data = [
  {
    input: [[[0, 2], [1, 3]]],
    ans: 3
  },
  {
    input: [[[0, 1, 2, 3, 4], [24, 23, 22, 21, 5], [12, 13, 14, 15, 16], [11, 17, 18, 19, 20], [10, 9, 8, 7, 6]]],
    ans: 16
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
