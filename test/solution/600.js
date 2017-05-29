// 600. Non-negative Integers without Consecutive Ones

const inputs = [1, 2, 3, 4, 5, 10, 1000, 10000]
const anses = [2, 3, 3, 4, 5, 8, 144, 843]
const data = []
for (let i = 0; i < inputs.length; ++i) {
  data.push({
    input: [inputs[i]],
    ans: anses[i]
  })
}

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
