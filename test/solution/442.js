// 442. Find All Duplicates in an Array

const data = [
  {
    input: [[4, 3, 2, 7, 8, 2, 3, 1]],
    ans: [2, 3]
  }
]

const option = {
  outProcessor: output => output.sort((a, b) => a - b)
}

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker,
  option
}
