// 472. Concatenated Words

const data = [
  {
    input: [['cat', 'cats', 'catsdogcats', 'dog', 'dogcatsdog', 'hippopotamuses', 'rat', 'ratcatdogcat']],
    ans: ['catsdogcats', 'dogcatsdog', 'ratcatdogcat']
  },
  {
    input: [['']],
    ans: []
  }
]

for (const {ans} of data) ans.sort()

const options = {
  outProcessor: output => output.sort()
}

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker,
  options
}
