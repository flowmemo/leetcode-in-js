// 160. Intersection of Two Linked Lists

const assert = require('assert')
const { buildFromArray, concatList } = require('../../helper/LinkedList.js')

const data = [
  {
    input: [[1, 2, 3], [3, 4, 5], [6, 7]]
  },
  {
    input: [[], [], [1]]
  },
  {
    input: [[1, 2], [3, 4], []]
  },
  {
    input: [[1, 2], [3], [4]]
  }
]

const checker = function (fsolve, data) {
  for (const {input} of data) {
    let root1 = buildFromArray(input[0])
    let root2 = buildFromArray(input[1])
    const root3 = buildFromArray(input[2])
    root1 = concatList(root1, root3)
    root2 = concatList(root2, root3)
    const intersection = fsolve(root1, root2)
    assert.deepStrictEqual(intersection, root3)
  }
}

module.exports = {
  data,
  checker
}
