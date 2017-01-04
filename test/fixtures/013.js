const data = [
  {
    input: ['MMDLXVIII'],
    ans: 2568
  },
  {
    input: ['CXXV'],
    ans: 125
  },
  {
    input: ['DI'],
    ans: 501
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
