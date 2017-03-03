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
  },
  {
    input: [2, [3, 2, 6, 5, 0, 3]],
    ans: 7
  },
  {
    input: [2,
      [3, 3, 5, 0, 0, 3, 1, 4]],
    ans: 6
  },
  {
    input: [1, [2, 1, 2, 0, 1]],
    ans: 1
  },
  {
    input: [2, [2, 1, 2, 0, 1]],
    ans: 2
  }, {
    input: [1, [1]],
    ans: 0
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
