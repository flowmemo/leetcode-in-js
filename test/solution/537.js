// 537. Complex Number Multiplication

const data = [
  {
    input: ['1+1i', '1+1i'],
    ans: '0+2i'
  },
  {
    input: ['1+-1i', '1+-1i'],
    ans: '0+-2i'
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
