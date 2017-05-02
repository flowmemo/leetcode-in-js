// 10. Regular Expression Matching

const data = [
  {
    input: ['aa', 'a'],
    ans: false
  },
  {
    input: ['aa', 'a*'],
    ans: true
  },
  {
    input: ['ab', '.*'],
    ans: true
  },
  {
    input: ['aab', 'c*a*b'],
    ans: true
  },
  {
    input: ['a', 'ab*'],
    ans: true
  },
  {
    input: ['bbbba', '.*a*a'],
    ans: true
  },
  {
    input: ['a', 'd*'],
    ans: false
  },
  {
    input: ['a', '.*..a*'],
    ans: false
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
