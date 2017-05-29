// 598. Range Addition II

const data = [
  {
    input: [3, 3, [[2, 2], [3, 3]]],
    ans: 4
  },
  {
    input: [3, 3, [[2, 1], [1, 2]]],
    ans: 1
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
