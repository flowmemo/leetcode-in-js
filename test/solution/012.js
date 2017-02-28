const data = [
  {
    input: [2568],
    ans: 'MMDLXVIII'
  },
  {
    input: [125],
    ans: 'CXXV'
  },
  {
    input: [501],
    ans: 'DI'
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
