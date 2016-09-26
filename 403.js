/*
403. Frog Jump
A frog is crossing a river. The river is divided into x units and at each unit there may or may not exist a stone. The frog can jump on a stone, but it must not jump into the water.

Given a list of stones' positions (in units) in sorted ascending order, determine if the frog is able to cross the river by landing on the last stone. Initially, the frog is on the first stone and assume the first jump must be 1 unit.

If the frog's last jump was k units, then its next jump must be either k - 1, k, or k + 1 units. Note that the frog can only jump in the forward direction.

Note:

The number of stones is ≥ 2 and is < 1,100.
Each stone's position will be a non-negative integer < 231.
The first stone's position is always 0.
Example 1:

[0,1,3,5,6,8,12,17]

There are a total of 8 stones.
The first stone at the 0th unit, second stone at the 1st unit,
third stone at the 3rd unit, and so on...
The last stone at the 17th unit.

Return true. The frog can jump to the last stone by jumping
1 unit to the 2nd stone, then 2 units to the 3rd stone, then
2 units to the 4th stone, then 3 units to the 6th stone,
4 units to the 7th stone, and 5 units to the 8th stone.
Example 2:

[0,1,2,3,4,8,9,11]

Return false. There is no way to jump to the last stone as
the gap between the 5th and 6th stone is too large.
*/

/**
 * @param {number[]} stones
 * @return {boolean}
 */
var canCross = function (stones) {
  const len = stones.length
  const map = new Map()
  for (let i = 0; i < len; i++) {
    map.set(stones[i], i)
  }
  const target = stones[len - 1]

  function dfs (curPos, curIndex, preK) {
    if (curPos === target) return true

    // early return if can't reach target
    const max = curPos + (preK + 1 + preK + len - curIndex - 1) *
      (len - curIndex - 1) / 2

    if (max < target) return false
    for (let i = preK + 1; i > 0 && i >= preK - 1; i--) {
      let nextPos = curPos + i
      if (map.has(nextPos)) {
        if (dfs(nextPos, map.get(nextPos), i)) return true
      }
    }

    return false
  }
  return dfs(0, 0, 0)
}

let tc = [
  [0, 1, 3, 5, 6, 8, 12, 17],
  [0, 1, 2, 3, 4, 8, 9, 11],
  [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 30],
  [0, 1, 3, 6, 11]
]

let ans = [
  true, false, false, false
]

for (let i = 0; i < tc.length; i++) {
  let a = ans[i]
  let r = canCross(tc[i])
  console.log(a === r, a, r)
}
