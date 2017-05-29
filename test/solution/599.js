// 599. Minimum Index Sum of Two Lists

const data = [
  {
    input: [['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
    ['Piatti', 'The Grill at Torrey Pines', 'Hungry Hunter Steakhouse', 'Shogun']],
    ans: ['Shogun']
  },
  {
    input: [['Shogun', 'Tapioca Express', 'Burger King', 'KFC'],
    ['KFC', 'Shogun', 'Burger King']],
    ans: ['Shogun']
  }
]

for (const {ans} of data) ans.sort()

const options = {
  outProcessor: output => output.sort()
}

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker,
  options
}
