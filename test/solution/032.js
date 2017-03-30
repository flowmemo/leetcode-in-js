// 32. Longest Valid Parentheses

const data = [
  {
    input: ['(()'],
    ans: 2
  },
  {
    input: [')()())'],
    ans: 4
  },
  {
    input: ['()(())'],
    ans: 6
  },
  {
    input: ['(()()'],
    ans: 4
  },
  {
    input: ['()(()'],
    ans: 2
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}

