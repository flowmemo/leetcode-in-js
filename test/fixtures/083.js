const genLinkedList = require('../genLinkedList.js')

module.exports = [
  {
    input: [genLinkedList([1,1,2])],
    ans: genLinkedList([1,2])
  },
  {
    input: [genLinkedList([1,1,2,3,3])],
    ans: genLinkedList([1,2,3])
  }
]