// 147. Insertion Sort List
const {buildFromArray, convertToArray} = require('../../helper/LinkedList.js')

const data = [
  {
    input: [[2, 4, 3, 5, 6, 4]],
    ans: [2, 3, 4, 4, 5, 6]
  },
  {
    input: [[1, 1, 1]],
    ans: [1, 1, 1]
  },
  {
    input: [[]],
    ans: []
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
