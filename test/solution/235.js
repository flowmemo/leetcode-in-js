// 235. Lowest Common Ancestor of a Binary Search Tree
// TODO: add more tests
const TreeNode = require('../../helper/TreeNode.js')

const nodes = []
for (let i = 0; i < 10; ++i) nodes.push(new TreeNode(i))
nodes[6].left = nodes[2]
nodes[6].right = nodes[8]
nodes[2].left = nodes[0]
nodes[2].right = nodes[4]
nodes[4].left = nodes[3]
nodes[4].right = nodes[5]
nodes[8].left = nodes[7]
nodes[8].right = nodes[9]

const data = [
  {
    input: [nodes[6], nodes[2], nodes[8]],
    ans: nodes[6]
  },
  {
    input: [nodes[6], nodes[2], nodes[4]],
    ans: nodes[2]
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
