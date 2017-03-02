/**
 * @param {string} s
 * @return {string[]}
 */
var findRepeatedDnaSequences = function (s) {
  'use strict'
  const mmap = {
    A: 0,
    C: 1,
    G: 2,
    T: 3
  }
  const ret = []
  const mcount = Object.create(null)
  const n = s.length
  if (n <= 10) return ret
  let r = 0
  for (let i = 0; i < 10; ++i) {
    r *= 4
    r += mmap[s[i]]
  }
  mcount[r] = (mcount[r] || 0) + 1
  const mask = (1 << 20) - 1
  for (let i = 10; i < n; ++i) {
    r <<= 2
    r &= mask
    r += mmap[s[i]]
    mcount[r] = (mcount[r] || 0) + 1
  }

  for (let r in mcount) {
    if (mcount[r] > 1) ret.push(int2str(r))
  }
  return ret
}

function int2str (num) {
  'use strict'
  const dict = 'ACGT'
  const ret = Array(10)
  for (let i = 0; i < 10; ++i) {
    ret[9 - i] = dict[num % 4]
    num >>= 2
  }
  return ret.join('')
}

module.exports = findRepeatedDnaSequences
