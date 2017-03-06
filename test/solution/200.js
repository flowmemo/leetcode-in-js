// 200. Number of Islands

const data = [
  {
    input: [[
      '11110',
      '11010',
      '11000',
      '00000']],
    ans: 1
  },
  {
    input: [[
      '11000',
      '11000',
      '00100',
      '00011'
    ]],
    ans: 3
  }
]
const options = {
  inProcessor: input => {
    input[0] = input[0].map(line => line.slice())
    return input
  }
}

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker,
  options
}
