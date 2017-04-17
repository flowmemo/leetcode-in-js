// 526. Beautiful Arrangement

const anses = [1, 2, 3, 8, 10,
  36, 41, 132, 250, 700,
  750, 4010, 4237, 10680, 24679]
const data = [

]

for (let i = 0; i < anses.length; ++i) {
  data.push({
    input: [i + 1],
    ans: anses[i]
  })
}

module.exports = {
  data,
  checker: require('../checkers.js').normalChecker
}
