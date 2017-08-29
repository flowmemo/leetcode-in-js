// 22. Generate Parentheses

const data = [
  {
    input: [1],
    ans: ['()']
  },
  {
    input: [2],
    ans: ['(())', '()()']
  },
  {
    input: [3],
    ans: [
      '((()))',
      '(()())',
      '(())()',
      '()(())',
      '()()()'
    ]
  }
]

for (const { ans } of data) ans.sort()

const option = {
  outProcessor: output => output.sort()
}

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker,
  option
}
