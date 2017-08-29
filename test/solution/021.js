// 21. Merge Two Sorted Lists

const { buildFromArray, convertToArray } = require('../../helper/LinkedList.js')

const data = [
  {
    input: [[], []],
    ans: []
  },
  {
    input: [[1, 2, 4], [3]],
    ans: [1, 2, 3, 4]
  },
  {
    input: [[1, 2, 3], [4, 5, 6]],
    ans: [1, 2, 3, 4, 5, 6]
  }
]

const option = {
  inProcessor: input => input.map(buildFromArray),
  outProcessor: output => convertToArray(output)
}

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker,
  option
}
