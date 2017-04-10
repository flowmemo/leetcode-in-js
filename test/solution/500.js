// 500. Keyboard Row

const data = [
  {
    input: [['Hello', 'Alaska', 'Dad', 'Peace']],
    ans: ['Alaska', 'Dad']
  },
  {
    input: [['Aasdfghjkl', 'Qwertyuiop', 'zZxcvbnm']],
    ans: ['Aasdfghjkl', 'Qwertyuiop', 'zZxcvbnm']
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
