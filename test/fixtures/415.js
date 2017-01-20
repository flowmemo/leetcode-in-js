// 415. Add Strings

const data = [
  {
    input: ['0', '0'],
    ans: '0'
  },
  {
    input: ['99', '1'],
    ans: '100'
  },
  {
    input: ['1', '2'],
    ans: '3'
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
