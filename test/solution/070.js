// 70. Climbing Stairs

const phi = (1 + Math.sqrt(5)) / 2
function fibonacci (n) {
  'use strict'
  return 1E-5 + Math.pow(phi, n) / Math.sqrt(5) + 1 / 2 | 0
}

const data = []

for (let i = 1; i < 10; ++i) {
  data.push({
    input: [i],
    ans: fibonacci(i + 1)
  })
}

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
