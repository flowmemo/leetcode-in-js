/*
9. Palindrome Number
Determine whether an integer is a palindrome. Do this without extra space.
*/

/**
 * @param {number} x
 * @return {boolean}
 */
var isPalindrome = function (x) {
  if (x < 0) return false
  let base1 = 1
  while (x / base1 >= 10) base1 *= 10
  let base2 = 1
  while (base1 >= base2) {
    let digi1 = Math.floor(x / base1) % 10
    let digi2 = Math.floor(x / base2) % 10
    if (digi1 !== digi2) return false
    base1 /= 10
    base2 *= 10
  }
  return true
}

let tc = [
  1, 12, 121
]

let ans = [true, false, true]

for (let i = 0; i < tc.length; ++i) {
  let r = isPalindrome(tc[i])
  let a = ans[i]
  console.log(a === r, a, r)
}
