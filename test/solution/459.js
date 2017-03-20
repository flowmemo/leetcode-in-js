// 459. Repeated Substring Pattern

const data = [
  {
    input: ['abab'],
    ans: true
  },
  {
    input: ['aba'
    ],
    ans: false
  },
  {
    input: ['abcabcabcabc'],
    ans: true
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
