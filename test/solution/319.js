// 319. Bulb Switcher

const data = [
  {
    input: [3],
    ans: 1
  }, {
    input: [256],
    ans: 16
  },
  {
    input: [255],
    ans: 15
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
