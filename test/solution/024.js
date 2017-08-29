// 24. Swap Nodes in Pairs

const { buildFromArray, convertToArray } = require('../../helper/LinkedList.js')

const data = [
  {
    input: [[1, 2, 3, 4]],
    ans: [2, 1, 4, 3]
  },
  {
    input: [[1]],
    ans: [1]
  },
  {
    input: [[1, 2, 3]],
    ans: [2, 1, 3]
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
