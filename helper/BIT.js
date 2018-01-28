// Binary Indexed Tree - Sum

class BIT {
  constructor (arr) {
    const n = this.n = arr.length
    this.tree = Array(n + 1).fill(0)
    for (let i = 0; i < n; ++i) {
      this.addAtIndex(i, arr[i])
    }
  }
  addAtIndex (i, val) {
    const tree = this.tree
    const n = this.n
    i += 1
    while (i <= n) {
      tree[i] += val
      i += i & (-i)
    }
  }
  sumPrefix (endOffset) {
    const tree = this.tree
    let sum = 0
    while (endOffset) {
      sum += tree[endOffset]
      endOffset -= endOffset & (-endOffset)
    }
    return sum
  }
  sumRange (startOffset, endOffset) {
    return this.sumPrefix(endOffset) - this.sumPrefix(startOffset)
  }
}

module.exports = BIT
