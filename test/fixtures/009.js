const data = [
  {input: [1], ans: true},
  {input: [12], ans: false},
  {input: [-12], ans: false},
  {input: [121], ans: true}
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}