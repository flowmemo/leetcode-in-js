// 504. Base 7

const data = [
  {
    input: [100],
    ans: '202'
  },
  {
    input: [-7],
    ans: '-10'
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
