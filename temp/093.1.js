/*
93. Restore IP Addresses
Given a string containing only digits, restore it by returning all possible valid IP address combinations.

For example:
Given "25525511135",

return ["255.255.11.135", "255.255.111.35"]. (Order does not matter)
*/

/**
 * @param {string} s
 * @return {string[]}
 */
var restoreIpAddresses = function (s) {
  const res = []
  const path = []
  dfs(0, 0, s, path, res)
  return res
}

function dfs (pos, count, s, path, res) {
  if (pos === s.length) {
    if (count === 4) {
      res.push(path.join('.'))
    }
    return
  }
  if (count >= 4) return

  const c1 = s.substr(pos, 1)
  path.push(c1)
  dfs(pos + 1, count + 1, s, path, res)
  path.pop()

  if (pos + 1 === s.length) return
  const c2 = s.substr(pos, 2)
  if (c2 >= '10') {
    path.push(c2)
    dfs(pos + 2, count + 1, s, path, res)
    path.pop()
  }

  if (pos + 2 === s.length) return
  const c3 = s.substr(pos, 3)
  if (c3 >= '100' && c3 <= '255') {
    path.push(c3)
    dfs(pos + 3, count + 1, s, path, res)
    path.pop()
  }
}
