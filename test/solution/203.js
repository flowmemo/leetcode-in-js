// 203. Remove Linked List Elements
const { buildFromArray, convertToArray } = require('../../helper/LinkedList.js')

const data = [
  {
    input: [[1, 2, 6, 3, 4, 5, 6], 6],
    ans: [1, 2, 3, 4, 5]
  },
  {
    input: [[1, 1, 1], 1],
    ans: []
  }
]

const option = {
  inProcessor: input => {
    return [buildFromArray(input[0]), input[1]]
  },
  outProcessor: output => convertToArray(output)
}

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker,
  option
}
