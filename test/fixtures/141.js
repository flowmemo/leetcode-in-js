// 141. Linked List Cycle
const buildFromArray = require('../LinkedList.js').buildFromArray
const Node = require('../../ListNode.js')

const data = []

const root1 = buildFromArray([1, 2, 3, 4])
data.push({input: [root1], ans: false})

const root2 = new Node(1)
root2.next = root2
data.push({input: [root2], ans: true})

const root3 = buildFromArray([1, 2, 3])
root3.next.next.next = root3.next
data.push({input: [root3], ans: true})

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}

