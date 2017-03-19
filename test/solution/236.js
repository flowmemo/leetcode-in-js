// 236. Lowest Common Ancestor of a Binary Tree
// TODO: add tests
const TreeNode = require('../../helper/TreeNode.js')

const nodes = []
for (let i = 0; i < 10; ++i) nodes.push(new TreeNode(i))
nodes[0].left = nodes[1]
nodes[0].right = nodes[2]
nodes[1].left = nodes[3]
nodes[1].right = nodes[4]
nodes[3].left = nodes[5]
const data = [
  {
    input: [nodes[0], nodes[5], nodes[4]],
    ans: nodes[1]
  }
]

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
