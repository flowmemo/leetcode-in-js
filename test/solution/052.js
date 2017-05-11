// 52. N-Queens II

const data = []

const raw = [1, 0, 0, 2, 10, 4, 40, 92, 352, 724]

for (let i = 0; i < raw.length; ++i) {
  data.push({ input: [i + 1], ans: raw[i] })
}
module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
