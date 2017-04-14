// 140. Word Break II

const data = [
  {
    input: ['catsanddog', ['cat', 'cats', 'and', 'sand', 'dog']],
    ans: ['cats and dog', 'cat sand dog']
  },
  {
    input: ['', []],
    ans: []
  },
  {
    input: ['a', ['a']],
    ans: ['a']
  },
  {
    input: ['ab', ['a']],
    ans: []
  },
  {
    input: [
      'aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaabaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa',
      ['a', 'aa', 'aaa', 'aaaa', 'aaaaa', 'aaaaaa', 'aaaaaaa', 'aaaaaaaa', 'aaaaaaaaa', 'aaaaaaaaaa']
    ],
    ans: []
  }
]

for (const { ans } of data) ans.sort()

const options = {
  outProcessor: output => output.sort()
}

const checker = require('../checkers.js').normalChecker

module.exports = {
  data,
  checker,
  options
}
