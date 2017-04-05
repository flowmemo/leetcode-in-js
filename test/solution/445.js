// 445. Add Two Numbers II

const { buildFromArray, convertToArray } = require('../../helper/LinkedList')
const data = [
  {
    input: [[7, 2, 4, 3], [5, 6, 4]],
    ans: [7, 8, 0, 7]
  }
]

const options = {
  inProcessor: input => input.map(buildFromArray),
  outProcessor: output => convertToArray(output)
}
module.exports = {
  data,
  checker: require('../checkers.js').normalChecker,
  options
}
