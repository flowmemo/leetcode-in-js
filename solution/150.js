/*
150. Evaluate Reverse Polish Notation
Evaluate the value of an arithmetic expression in Reverse Polish Notation.

Valid operators are +, -, *, /. Each operand may be an integer or another expression.

Some examples:
  ["2", "1", "+", "3", "*"] -> ((2 + 1) * 3) -> 9
  ["4", "13", "5", "/", "+"] -> (4 + (13 / 5)) -> 6
*/

/**
 * @param {string[]} tokens
 * @return {number}
 */
var evalRPN = function (tokens) {
  const ops = '+-*/'
  const nums = []
  for (let token of tokens) {
    if (ops.includes(token)) {
      const n2 = nums.pop()
      const n1 = nums.pop()
      let r
      switch (token) {
        case '+':
          r = n1 + n2
          break
        case '-':
          r = n1 - n2
          break
        case '*':
          r = n1 * n2
          break
        case '/':
          r = n1 / n2 | 0
      }
      nums.push(r)
    } else nums.push(+token)
  }
  return nums.pop()
}

module.exports = evalRPN
