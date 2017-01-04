const data = [
  {
    input: [0],
    ans: 0
  },
  {
    input: [1],
    ans: 1
  },
  {
    input: [12],
    ans: 21
  },
  {
    input: [-123],
    ans: -321
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
