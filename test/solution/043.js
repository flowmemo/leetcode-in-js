// 43. Multiply Strings

const data = [
  {
    input: ['124', '345'],
    ans: '42780'
  },
  {
    input: ['0', '21'],
    ans: '0'
  },
  {
    input: ['43', '0'],
    ans: '0'
  },
  {
    input: ['999', '99'],
    ans: '98901'
  },
  {
    input: ['0', '0'],
    ans: '0'
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
