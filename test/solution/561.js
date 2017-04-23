// 561. Array Partition I

const data = [
  {
    input: [[1, 4, 3, 2]],
    ans: 4
  },
  {
    input: [[4, 5, -543, 543, 55, 1, 74, -8, 432]],
    ans: 80
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
