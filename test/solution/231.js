// 231. Power of Two

const data = [
  {
    input: [-1],
    ans: false
  },
  {
    input: [1],
    ans: true
  },
  {
    input: [6],
    ans: false
  },
  {
    input: [8],
    ans: true
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
