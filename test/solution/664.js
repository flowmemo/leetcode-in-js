// 664. Strange Printer

const data = [
  {
    input: ['aaabbb'],
    ans: 2
  },
  {
    input: ['aba'],
    ans: 2
  },
  {
    input: ['abababac'],
    ans: 5
  },
  {
    input: ['baacdddaaddaaaaccbddbcabdaabdbbcdcbbbacbddcabcaaa'],
    ans: 19
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
