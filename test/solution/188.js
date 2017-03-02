// 188. Best Time to Buy and Sell Stock IV

const data = [
  {
    input: [2, []],
    ans: 0
  },
  {
    input: [1, [1, 2]],
    ans: 1
  },
  {
    input: [2, [1, 2, 4]],
    ans: 3
  },
  {
    input: [2, [2, 1, 2, 0, 1]],
    ans: 2
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
