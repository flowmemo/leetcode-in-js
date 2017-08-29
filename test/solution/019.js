// 19. Remove Nth Node From End of List

const { buildFromArray, convertToArray } = require('../../helper/LinkedList.js')

const data = [
  {
    input: [[1, 2, 3, 4, 5], 2],
    ans: [1, 2, 3, 5]
  },
  {
    input: [[1], 1],
    ans: []
  }
]

const option = {
  inProcessor: input => {
    input[0] = buildFromArray(input[0])
    return input
  },
  outProcessor: output => convertToArray(output)
}

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker,
  option
}
