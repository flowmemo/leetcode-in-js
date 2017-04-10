// 496. Next Greater Element I

const data = [
  {
    input: [[4, 1, 2], [1, 3, 4, 2]],
    ans: [-1, 3, -1]
  },
  {
    input: [[2, 4], [1, 2, 3, 4]],
    ans: [3, -1]
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
