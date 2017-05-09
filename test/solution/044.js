// 44. Wildcard Matching

const data = [
  {
    input: ['aa', 'a'],
    ans: false
  },
  {
    input: ['aa', 'aa'],
    ans: true
  },
  {
    input: ['aaa', 'aa'],
    ans: false
  },
  {
    input: ['aa', '*'],
    ans: true
  },
  {
    input: ['aa', 'a*'],
    ans: true
  },
  {
    input: ['ab', '?*'],
    ans: true
  },
  {
    input: ['aab', 'c*a*b'],
    ans: false
  },
  {
    input: ['', '?'],
    ans: false
  },
  {
    input: ['c', '*?*'],
    ans: true
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
