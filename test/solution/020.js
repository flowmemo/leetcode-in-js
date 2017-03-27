// 20. Valid Parentheses

const data = [
  {
    input: ['()'],
    ans: true
  },
  {
    input: ['()[]{}'],
    ans: true
  },
  {
    input: ['(]'],
    ans: false
  },
  {
    input: ['([)]'],
    ans: false
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
