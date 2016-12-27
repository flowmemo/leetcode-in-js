/*
76. Minimum Window Substring
Given a string S and a string T, find the minimum window in S which will contain all the characters in T in complexity O(n).

For example,
S = "ADOBECODEBANC"
T = "ABC"
Minimum window is "BANC".

Note:
If there is no such window in S that covers all characters in T, return the empty string "".

If there are multiple such windows, you are guaranteed that there will always be only one unique minimum window in S.
*/

/**
 * @param {string} s
 * @param {string} t
 * @return {string}
 */
var minWindow = function(s, t) {
    const ns = Array.prototype.map.call(s, (_, i, arr) => arr.charCodeAt(i))
    const nt = Array.prototype.map.call(t, (_, i, arr) => arr.charCodeAt(i))
    const cmap = Array(1024).fill(0)
    const ccount = Array(1024).fill(0)
    for(let n of nt) cmap[n]++
    let unmatched = t.length
    let start  = 0
    let i = 0
    let minl = -1
    let p = [0, 0]
    while(i < ns.length) {
      const c = ns[i]
      if (cmap[c]) {
        if (ccount[c] < cmap[c]) unmatched--;
        ccount[c]++;
        while (start < i) {
          const f = ns[start];
          if (cmap[f]) {
            if (ccount[f] > cmap[f]) {
              ccount[f]--;
            } else
              break;
          }
          start++;
        }
        if (!unmatched && (minl == -1 || i + 1 - start < minl)) {
            p = [start, i + 1];
            minl = i + 1 - start;
        }
      }
      ++i;
    }
    return s.slice(p[0], p[1])
};


module.exports = minWindow
