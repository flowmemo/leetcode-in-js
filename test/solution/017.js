// 17. Letter Combinations of a Phone Number

const data = [
  {
    input: ['23'],
    ans: ['ad', 'ae', 'af', 'bd', 'be', 'bf', 'cd', 'ce', 'cf']
  }
]

for (const tc of data) tc.ans = new Set(tc.ans)

const option = {
  outProcessor: out => new Set(out)
}

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker,
  option
}
