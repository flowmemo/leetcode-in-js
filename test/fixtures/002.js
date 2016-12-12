const genLinkedList = require('../genLinkedList.js')

const tc = [
  {
    input: [[2, 4, 3], [5, 6, 4]],
    ans: [7, 0, 8]
  },
  {
    input: [[1], [1, 1]],
    ans: [2, 1]
  },
  {
    input: [[8], [9]],
    ans: [7, 1]
  }
]

for (let t of tc) {
  t.input[0] = genLinkedList(t.input[0])
  t.input[1] = genLinkedList(t.input[1])
  t.ans = genLinkedList(t.ans)
}

module.exports = tc


