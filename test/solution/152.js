// 152. Maximum Product Subarray

const data = [
  {
    input: [[2, 3, -2, 4]],
    ans: 6
  },
  {
    input: [[1, -2, 3]],
    ans: 3
  },
  {
    input: [[-1, -2, -3]],
    ans: 6
  },
  {
    input: [[-1, -2, -3, -4]],
    ans: 24
  }

]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
