// 221. Maximal Square

const data = [
  {
    input: [['10100', '10111', '11111', '10010']],
    ans: 4
  }
]

for (const { input } of data) {
  input[0] = input[0].map(line => line.slice())
}
module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
