/*
401. Binary Watch
A binary watch has 4 LEDs on the top which represent the hours (0-11), and the 6 LEDs on the bottom represent the minutes (0-59).

Each LED represents a zero or one, with the least significant bit on the right.

https://upload.wikimedia.org/wikipedia/commons/8/8b/Binary_clock_samui_moon.jpg

For example, the above binary watch reads "3:25".

Given a non-negative integer n which represents the number of LEDs that are currently on, return all possible times the watch could represent.

Example:

Input: n = 1
Return: ["1:00", "2:00", "4:00", "8:00", "0:01", "0:02", "0:04", "0:08", "0:16", "0:32"]
Note:
The order of output does not matter.
The hour must not contain a leading zero, for example "01:00" is not valid, it should be "1:00".
The minute must be consist of two digits and may contain a leading zero, for example "10:2" is not valid, it should be "10:02".
*/

/**
 * @param {number} num
 * @return {string[]}
 */
var readBinaryWatch = function (num) {
  let table = getTable()
  const res = []
  for (let i = 0; i <= (11 << 6) + 59; i++) {
    let h = i >>> 6
    let m = i & 63
    if (m > 59) continue
    if (table[h] + table[m] === num) {
      res.push('' + h + ':' + getMinute(m))
    }
  }
  return res
}

function getMinute (n) {
  if (n < 10) return '0' + n
  else return String(n)
}

function getTable () {
  const res = Array(60)
  for (let i = 0; i <= 59; i++) {
    res[i] = countBit(i)
  }
  function countBit (n) {
    let r = 0
    while (n) {
      if (n & 1) {
        r++
      }
      n = n >> 1
    }
    return r
  }
  return res
}

let tc = [
  1
]

let ans = [
  ['1:00', '2:00', '4:00', '8:00', '0:01', '0:02', '0:04', '0:08', '0:16', '0:32']
]

for (let i = 0; i < tc.length; i++) {
  let a = ans[i].sort().join()
  let r = readBinaryWatch(tc[i]).sort().join()
  console.log(a === r)
}

