const board = [
  ['A', 'B', 'C', 'E'],
  ['S', 'F', 'C', 'S'],
  ['A', 'D', 'E', 'E']
]
module.exports = [
  {
    input: [board, "ABCCED"],
    ans: true
  },
  {
    input: [board, "SEE"],
    ans: true
  },
  {
    input: [board, "ABCB"],
    ans: false
  }
]