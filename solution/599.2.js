/*
599. Minimum Index Sum of Two Lists
Suppose Andy and Doris want to choose a restaurant for dinner, and they both have a list of favorite restaurants represented by strings.

You need to help them find out their common interest with the least list index sum. If there is a choice tie between answers, output all of them with no order requirement. You could assume there always exists an answer.

Example 1:
Input:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["Piatti", "The Grill at Torrey Pines", "Hungry Hunter Steakhouse", "Shogun"]
Output: ["Shogun"]
Explanation: The only restaurant they both like is "Shogun".
Example 2:
Input:
["Shogun", "Tapioca Express", "Burger King", "KFC"]
["KFC", "Shogun", "Burger King"]
Output: ["Shogun"]
Explanation: The restaurant they both like and have the least index sum is "Shogun" with index sum 1 (0+1).
Note:
The length of both lists will be in the range of [1, 1000].
The length of strings in both lists will be in the range of [1, 30].
The index is starting from 0 to the list length minus 1.
No duplicates in both lists.
*/

/**
 * @param {string[]} list1
 * @param {string[]} list2
 * @return {string[]}
 */
var findRestaurant = function (list1, list2) {
  'use strict'
  const n1 = list1.length
  const n2 = list2.length
  const rank1 = Array(n1)
  const rank2 = Array(n2)

  for (let i = 0; i < n1; ++i) rank1[i] = i
  for (let i = 0; i < n2; ++i) rank2[i] = i

  rank1.sort((a, b) => (list1[a] < list1[b]) ? -1 : 1)
  rank2.sort((a, b) => (list2[a] < list2[b]) ? -1 : 1)

  let i = 0
  let j = 0
  let md = n1 + n2
  let ret = []
  while (i < n1) {
    while (j < n2 && list1[rank1[i]] > list2[rank2[j]]) j++
    if (j === n2) break

    // now list1[rank1[i]] <= list2[rank2[j]
    if (list1[rank1[i]] === list2[rank2[j]]) {
      const nmd = rank1[i] + rank2[j]
      if (nmd < md) {
        md = nmd
        ret = [list1[rank1[i]]]
      } else if (nmd === md) {
        ret.push(list1[rank1[i]])
      }
      i++
      j++
    } else {
      i++
    }
  }

  return ret
}

module.exports = findRestaurant
