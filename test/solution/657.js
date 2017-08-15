// 657. Judge Route Circle

const data = [
  {
    input: ['UD'],
    ans: true
  },
  {
    input: ['UDLRLRUD'],
    ans: true
  },
  {
    input: ['LL'],
    ans: false
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
