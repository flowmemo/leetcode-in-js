/*
126. Word Ladder II
Given two words (beginWord and endWord), and a dictionary's word list, find all shortest transformation sequence(s) from beginWord to endWord, such that:

Only one letter can be changed at a time
Each intermediate word must exist in the word list
For example,

Given:
beginWord = "hit"
endWord = "cog"
wordList = ["hot","dot","dog","lot","log"]
Return
  [
    ["hit","hot","dot","dog","cog"],
    ["hit","hot","lot","log","cog"]
  ]
Note:
All words have the same length.
All words contain only lowercase alphabetic characters.
*/

/**
 * @param {string} beginWord
 * @param {string} endWord
 * @param {Set} wordList
 *   Note: wordList is a Set object, see:
 *   https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set
 * @return {string[][]}
 */
var findLadders = function (beginWord, endWord, wordList) {
  'use strict'
  function buildHalf (paths, curpath, str) {
    // build half path from center
    curpath.push(str)
    let parents = pre.get(str)
    if (!parents) {
      paths.push(curpath)
      return
    }
    for (let parent of parents) {
      buildHalf(paths, curpath.slice(), parent)
    }
  }
  wordList.delete(beginWord)
  wordList.delete(endWord)
  const base = 'a'.charCodeAt(0)
  const len = beginWord.length
  let d = diff(beginWord, endWord, len)
  if (!d) return [[beginWord]]
  if (d === 1) return [[beginWord, endWord]]
  const beginSet = new Set()
  const endSet = new Set()
  let qbegin = new Set([beginWord])
  let qend = new Set([endWord])
  const az = Array(26)
  for (let i = 0; i < 26; i++) {
    az[i] = String.fromCharCode(base + i)
  }
  beginSet.add(beginWord)
  endSet.add(endWord)
  const res = []
  const pre = new Map()
  while (qbegin.size && qend.size && !res.length) {
    let visited
    let counterpart
    let layerset
    let ref

    // only process smaller set
    if (beginSet.size <= endSet.size) {
      ;[visited, counterpart, layerset, ref] = [beginSet, qend, qbegin, 0]
    } else {
      ;[visited, counterpart, layerset, ref] = [endSet, qbegin, qend, 1]
    }

    let temp = new Set()
    for (let cur of layerset) {
      let a = Array.from(cur)
      for (let i = 0; i < len; i++) {
        for (let ch of az) {
          // build new word
          a[i] = ch
          let nstr = a.join('')

          if (!visited.has(nstr) && wordList.has(nstr)) {
            if (counterpart.has(nstr)) {
              // find one, build path from center
              let half1 = []
              let half2 = []
              buildHalf(half1, [], cur)
              buildHalf(half2, [], nstr)
              if (ref) {
                // cur is qend
                ;[half1, half2] = [half2, half1]
              }
              half1.forEach(item => item.reverse())

              // add to res[]
              for (let h1 of half1) {
                for (let h2 of half2) {
                  res.push(h1.concat(h2))
                }
              }
            } else {
              let parentOfnstr = pre.get(nstr)
              if (parentOfnstr) {
                parentOfnstr.push(cur)
              } else {
                pre.set(nstr, [cur])
              }
              // visited.add(nstr)
              temp.add(nstr)
            }
          }
        }
        a[i] = cur[i]
      }
    }
    // it's important to add str to vistied set after the whole layerset was processed
    for (let item of temp) {
      visited.add(item)
    }
    if (ref) qend = temp
    else qbegin = temp
  }
  return res
}

function diff (s1, s2, len) {
  'use strict'
  let res = 0
  for (let i = 0; i < len; i++) {
    if (s1[i] !== s2[i]) res++
  }
  return res
}

let tc = [
  ['a', 'a', []],
  ['a', 'b', []],
  ['hit', 'hog', ['hot']],
  ['hit', 'cog', ['hot', 'dot', 'dog', 'lot', 'log']],
  ['magic',
    'pearl',
    ['flail', 'halon', 'lexus', 'joint', 'pears', 'slabs', 'lorie', 'lapse', 'wroth', 'yalow', 'swear', 'cavil', 'piety', 'yogis', 'dhaka', 'laxer', 'tatum', 'provo', 'truss', 'tends', 'deana', 'dried', 'hutch', 'basho', 'flyby', 'miler', 'fries', 'floes', 'lingo', 'wider', 'scary', 'marks', 'perry', 'igloo', 'melts', 'lanny', 'satan', 'foamy', 'perks', 'denim', 'plugs', 'cloak', 'cyril', 'women', 'issue', 'rocky', 'marry', 'trash', 'merry', 'topic', 'hicks', 'dicky', 'prado', 'casio', 'lapel', 'diane', 'serer', 'paige', 'parry', 'elope', 'balds', 'dated', 'copra', 'earth', 'marty', 'slake', 'balms', 'daryl', 'loves', 'civet', 'sweat', 'daley', 'touch', 'maria', 'dacca', 'muggy', 'chore', 'felix', 'ogled', 'acids', 'terse', 'cults', 'darla', 'snubs', 'boats', 'recta', 'cohan', 'purse', 'joist', 'grosz', 'sheri', 'steam', 'manic', 'luisa', 'gluts', 'spits', 'boxer', 'abner', 'cooke', 'scowl', 'kenya', 'hasps', 'roger', 'edwin', 'black', 'terns', 'folks', 'demur', 'dingo', 'party', 'brian', 'numbs', 'forgo', 'gunny', 'waled', 'bucks', 'titan', 'ruffs', 'pizza', 'ravel', 'poole', 'suits', 'stoic', 'segre', 'white', 'lemur', 'belts', 'scums', 'parks', 'gusts', 'ozark', 'umped', 'heard', 'lorna', 'emile', 'orbit', 'onset', 'cruet', 'amiss', 'fumed', 'gelds', 'italy', 'rakes', 'loxed', 'kilts', 'mania', 'tombs', 'gaped', 'merge', 'molar', 'smith', 'tangs', 'misty', 'wefts', 'yawns', 'smile', 'scuff', 'width', 'paris', 'coded', 'sodom', 'shits', 'benny', 'pudgy', 'mayer', 'peary', 'curve', 'tulsa', 'ramos', 'thick', 'dogie', 'gourd', 'strop', 'ahmad', 'clove', 'tract', 'calyx', 'maris', 'wants', 'lipid', 'pearl', 'maybe', 'banjo', 'south', 'blend', 'diana', 'lanai', 'waged', 'shari', 'magic', 'duchy', 'decca', 'wried', 'maine', 'nutty', 'turns', 'satyr', 'holds', 'finks', 'twits', 'peaks', 'teems', 'peace', 'melon', 'czars', 'robby', 'tabby', 'shove', 'minty', 'marta', 'dregs', 'lacks', 'casts', 'aruba', 'stall', 'nurse', 'jewry', 'knuth']]
]

let ans = [
  [['a']],
  [['a', 'b']],
  [['hit', 'hot', 'hog']],
  [['hit', 'hot', 'dot', 'dog', 'cog'],
    ['hit', 'hot', 'lot', 'log', 'cog']],
  [['magic', 'manic', 'mania', 'maria', 'marta', 'marty', 'party', 'parry', 'perry', 'peary', 'pearl'], ['magic', 'manic', 'mania', 'maria', 'maris', 'paris', 'parks', 'perks', 'peaks', 'pears', 'pearl'], ['magic', 'manic', 'mania', 'maria', 'marta', 'marty', 'marry', 'merry', 'perry', 'peary', 'pearl'], ['magic', 'manic', 'mania', 'maria', 'marta', 'marty', 'marry', 'parry', 'perry', 'peary', 'pearl'], ['magic', 'manic', 'mania', 'maria', 'maris', 'marks', 'parks', 'perks', 'peaks', 'pears', 'pearl']]
]
tc.forEach(item => { item[2] = new Set(item[2]) })
for (let i = 0; i < tc.length; i++) {
  let a = ans[i].sort().join()
  let r = findLadders(...tc[i]).sort().join()
  console.log(a === r)
}

