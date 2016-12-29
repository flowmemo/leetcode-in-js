const genLinkedList = require('../genLinkedList.js')

module.exports = [
  {
    input: [genLinkedList([1, 2, 3 ,4, 5]), 2, 4],
    ans: genLinkedList([1,4,3,2,5])
  }
]