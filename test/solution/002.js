const LinkedList = require('../../helper/LinkedList.js')

const data = [
  {
    input: [[2, 4, 3], [5, 6, 4]],
    ans: [7, 0, 8]
  },
  {
    input: [[1], [1, 1]],
    ans: [2, 1]
  },
  {
    input: [[8], [9]],
    ans: [7, 1]
  }
]

const checker = require('../checkers.js').normalChecker
function inProcessor (input) {
  return input.map(LinkedList.buildFromArray)
}

function outProcessor (output) {
  return LinkedList.convertToArray(output)
}

const options = {
  inProcessor,
  outProcessor
}

module.exports = {
  data,
  checker,
  options
}
