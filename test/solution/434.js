// 434. Number of Segments in a String

const data = [
  {
    input: ['Hello, my name is John'],
    ans: 4
  },
  {
    input: [''],
    ans: 0
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
