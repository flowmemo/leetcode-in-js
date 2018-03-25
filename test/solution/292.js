// 805. Split Array With Same Average

const data = [
  {
    input: [1],
    ans: true
  },
  {
    input: [2],
    ans: true
  },
  {
    input: [3],
    ans: true
  },
  {
    input: [4],
    ans: false
  },
  {
    input: [10000],
    ans: false
  },
  {
    input: [10000 + 1],
    ans: true
  },
  {
    input: [10000 + 2],
    ans: true
  },
  {
    input: [10000 + 3],
    ans: true
  },
  {
    input: [10000 + 4],
    ans: false
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
