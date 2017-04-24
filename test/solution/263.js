// 263. Ugly Number

const data = [
  {
    input: [15],
    ans: true
  },
  {
    input: [1],
    ans: true
  },
  {
    input: [-2],
    ans: false
  },
  {
    input: [14],
    ans: false }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
