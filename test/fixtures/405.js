// 405. Convert a Number to Hexadecimal

const data = [
  {
    input: [26],
    ans: '1a'
  },
  {
    input: [-1],
    ans: 'ffffffff'
  },
  {
    input: [0],
    ans: '0'
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
