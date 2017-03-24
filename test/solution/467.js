// 467. Unique Substrings in Wraparound String

const data = [
  {
    input: ['a'],
    ans: 1
  },
  {
    input: ['cac'],
    ans: 2
  },
  {
    input: ['zab'],
    ans: 6
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
