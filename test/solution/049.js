// 49. Group Anagrams

const data = [
  {
    input: [['eat', 'tea', 'tan', 'ate', 'nat', 'bat']],
    ans: [
      ['ate', 'eat', 'tea'],
      ['nat', 'tan'],
      ['bat']
    ]
  }
]
function sort2dArray (arr) {
  'use strict'
  for (let line of arr) {
    line.sort()
  }
  return arr.sort()
}

for (let { ans } of data) {
  sort2dArray(ans)
}
const option = {
  outProcessor: sort2dArray
}
module.exports = {
  data,
  checker: require('../checkers.js').normalChecker,
  option
}
