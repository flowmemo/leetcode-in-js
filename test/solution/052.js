const raw = [1, 0, 0, 2, 10, 4, 40, 92, 352, 724]
module.exports = [
]
for (let i = 0; i < raw.length; ++i) {
  module.exports.push({ input: [i + 1], ans: raw[i] })
}
