/*
439. Ternary Expression Parser
Given a string representing arbitrarily nested ternary expressions, calculate the result of the expression. You can always assume that the given expression is valid and only consists of digits 0-9, ?, :, T and F (T and F represent True and False respectively).

Note:

The length of the given string is ≤ 10000.
Each number will contain only one digit.
The conditional expressions group right-to-left (as usual in most languages).
The condition will always be either T or F. That is, the condition will never be a digit.
The result of the expression will always evaluate to either a digit 0-9, T or F.
Example 1:

Input: "T?2:3"

Output: "2"

Explanation: If true, then result is 2; otherwise result is 3.
Example 2:

Input: "F?1:T?4:5"

Output: "4"

Explanation: The conditional expressions group right-to-left. Using parenthesis, it is read/evaluated as:

             "(F ? 1 : (T ? 4 : 5))"                   "(F ? 1 : (T ? 4 : 5))"
          -> "(F ? 1 : 4)"                 or       -> "(T ? 4 : 5)"
          -> "4"                                    -> "4"
Example 3:

Input: "T?T?F:5:3"

Output: "F"

Explanation: The conditional expressions group right-to-left. Using parenthesis, it is read/evaluated as:

             "(T ? (T ? F : 5) : 3)"                   "(T ? (T ? F : 5) : 3)"
          -> "(T ? F : 3)"                 or       -> "(T ? F : 5)"
          -> "F"                                    -> "F"
*/

/**
 * @param {string} expression
 * @return {string}
 */
var parseTernary = function (expression) {
  const len = expression.length
  let i = 0
  function parse () {
    if (i >= len) return
    if (expression[i + 1] !== '?') {
      let res = expression[i]
      i += 2
      return res
    }

    // expression[i + 1] === ':'
    if (expression[i] === 'T') {
      i += 2
      let res = parse()
      parse()
      return res
    } else {
      i += 2
      parse()
      return parse()
    }
  }

  return parse()
}

let tc = [
  'T',
  'F',
  'F?1:2',
  'T?2:3',
  'F?1:T?4:5',
  'T?T?F:5:3',
  'F?3:4',
  'F?T?1:2:F?3:4',
  'F?T:F?T?1:2:F?3:4'
]

let ans = [
  'T', 'F', '2', '2', '4', 'F', '4', '4', '4'
]

for (let i = 0; i < tc.length; ++i) {
  let a = ans[i]
  let r = parseTernary(tc[i])
  console.log(a === r, a, r)
}
