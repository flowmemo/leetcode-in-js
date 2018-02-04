// 777. Swap Adjacent in LR String

const data = [
  {
    input: ['LXXRRLXXRL', 'LXRLXLLXRR'],
    ans: false
  },
  {
    input: ['RRL', 'LRR'],
    ans: false
  },
  {
    input: ['XXLXX', 'LXXXX'],
    ans: true
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
