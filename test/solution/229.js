// 229. Majority Element II

const data = [
  {
    input: [[0, 1]],
    ans: [0, 1]
  },
  {
    input: [[0, 1, 0]],
    ans: [0]
  },
  {
    input: [[1, 2, 3, 4]],
    ans: []
  }
]

const options = {
  outProcessor: output => output.sort()
}

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
