const BinaryTree = require('../../helper/BinaryTree.js')

const data = [
  {
    input: [[4, 2, 1, 3], [1, 2, 3, 4]],
    ans: [4, 2, null, 1, 3]

  },
  {
    input: [[3, 1, 2, 4, 5], [1, 2, 3, 4, 5]],
    ans: [3, 1, 4, null, 2, null, 5]
  }
]

const options = {
  outProcessor: output => BinaryTree.convertToArray(output)
}

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker,
  options
}
