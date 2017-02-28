/*
282. Expression Add Operators
Given a string that contains only digits 0-9 and a target value, return all possibilities to add binary operators (not unary) +, -, or * between the digits so they evaluate to the target value.

Examples:
"123", 6 -> ["1+2+3", "1*2*3"]
"232", 8 -> ["2*3+2", "2+3*2"]
"105", 5 -> ["1*0+5","10-5"]
"00", 0 -> ["0+0", "0-0", "0*0"]
"3456237490", 9191 -> []
*/

/**
 * @param {string} num
 * @param {number} target
 * @return {string[]}
 */
var addOperators = function (num, target) {
  const len = num.length
  const res = []
  if (!len) return res
  function dfs (str, sum, pren, index) {
    if (index === len) {
      if (sum + pren === target) res.push(str)
      return
    }
    let i = index
    let cur = num.slice(index, i + 1)
    // add '+'
    dfs(str + '+' + cur, sum + pren, +cur, i + 1)
    // add '_'
    dfs(str + '-' + cur, sum + pren, -cur, i + 1)
    // add '*'
    dfs(str + '*' + cur, sum, pren * +cur, i + 1)

    if (num[index] !== '0') {
      for (let i = index + 1; i < len; i++) {
        let cur = num.slice(index, i + 1)
        // add '+'
        dfs(str + '+' + cur, sum + pren, +cur, i + 1)
        // add '_'
        dfs(str + '-' + cur, sum + pren, -cur, i + 1)
        // add '*'
        dfs(str + '*' + cur, sum, pren * +cur, i + 1)
      }
    }
  }

  dfs(num[0], 0, +num[0], 1)
  if (num[0] !== '0') {
    for (let i = 1; i < len; i++) {
      let cur = num.slice(0, i + 1)
      dfs(cur, 0, +cur, i + 1)
    }
  }
  return res
}

let tc = [
  ['', 5],
  ['12', 3],
  ['123', 6],
  ['232', 8],
  ['105', 5],
  ['00', 0],
  ['423', 83],
  ['3456237490', 9191],
  ['999999999', 80]
]

let ans = [
  [],
  ['1+2'],
  ['1+2+3', '1*2*3'],
  ['2+3*2', '2*3+2'],
  ['1*0+5', '10-5'],
  ['0+0', '0-0', '0*0'],
  [],
  [],
  []
]
for (let i = 0; i < tc.length; i++) {
  let a = ans[i].sort().join()
  let r = addOperators(...tc[i]).sort().join()
  console.log(a === r, a, r)
}
