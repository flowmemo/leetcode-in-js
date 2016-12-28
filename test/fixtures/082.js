const genLinkedList = require('../genLinkedList.js')

module.exports = [
  {
    input: [genLinkedList([1,2,3,3,4,4,5])],
    ans: genLinkedList([1,2,5])
  },
  {
    input: [genLinkedList([1,1,1,2,3])],
    ans: genLinkedList([2,3])
  },
  {
    input: [null],
    ans: null
  },
  {
    input: [genLinkedList([1,1])],
    ans: null
  }
]