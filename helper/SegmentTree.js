// Segment Tree - Sum

class SegmentTree {
  constructor (arr) {
    const n = this.n = arr.length
    this.tree = Array(n * 2).fill(0)
    for (let i = 0; i < n; ++i) {
      this.addAtIndex(i, arr[i])
    }
  }

  addAtIndex (i, val) {
    const n = this.n
    const tree = this.tree
    i += n
    while (i) {
      tree[i] += val
      i >>= 1
    }
  }

  sumRange (startOffset, endOffset) {
    const n = this.n
    const tree = this.tree
    let sum = 0
    let l = startOffset + n
    let r = endOffset + n - 1
    while (l <= r) {
      if (l % 2) {
        sum += tree[l]
        l++
      }

      if (r % 2 === 0) {
        sum += tree[r]
        r--
      }
      l >>= 1
      r >>= 1
    }

    return sum
  }
}

module.exports = SegmentTree
