'use strict'
const phi = (1 + Math.sqrt(5)) / 2
function fibonacci (n) {
  return Math.pow(phi, n) / Math.sqrt(5) + 1 / 2 | 0
}

module.exports = []
for (let i = 1; i < 10; ++i) {
  module.exports.push({
    input: [i],
    ans: fibonacci(i + 1)
  })
}
