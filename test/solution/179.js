// 179. Largest Number

const data = [
  {
    input: [[3, 30, 34, 5, 9]],
    ans: '9534330'
  },
  {
    input: [[0, 0]],
    ans: '0'
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
