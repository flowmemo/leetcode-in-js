/**
 * @param {string} s
 * @return {boolean}
 */
var isNumber = function (s) {
  s = s.trim()
  const len = s.length
  if (!len) return false
  let i = 0
  function readInt () {
    let count = 0
    while (/[0-9]/.test(s[i])) {
      i++
      count++
    }
    return count
  }

  if (s[i] === '-' || s[i] === '+') i++
  let intLength = readInt()
  if (s[i] === '.') {
    i++
    let decimal = readInt()
    if (!intLength && !decimal) return false
    if (s[i] && s[i].toLowerCase() === 'e') {
      i++
      if (s[i] === '-' || s[i] === '+') i++
      if (!readInt()) return false
    }
  }
  if (i === len) return true
  if (!intLength) return false
  if (s[i].toLowerCase() === 'e') {
    i++
    if (s[i] === '-' || s[i] === '+') i++
    if (!readInt()) return false
  }
  return i === len
}

let tc = [
  '1',
  ' 1 ',
  '0.1',
  'abc',
  '1 a',
  '2e10',
  '1.3e1',
  '1.1e1.1',
  '.1',
  '.',
  '-1',
  '-.1',
  '+1e-2',
  'e9',
  ' '
]

let ans = [
  true, true, true, false, false, true, true,
  false, true, false, true, true, true, false, false
]

for (let i = 0; i < tc.length; i++) {
  let a = ans[i]
  let r = isNumber(tc[i])
  console.log(a === r, a, r, tc[i])
}

