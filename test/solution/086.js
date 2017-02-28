const genLinkedList = require('../genLinkedList.js')

module.exports = [
  {
    input: [genLinkedList([1, 4, 3, 2, 5, 2]), 3],
    ans: genLinkedList([1, 2, 2, 4, 3, 5])
  }
]
