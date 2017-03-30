class MaxPQ {
  constructor (cmp = (a, b) => a - b) {
    this.cmp = cmp
    this.v = Array(1)
  }

  top () {
    return this.v[1]
  }

  pop () {
    const v = this.v
    const ret = v[1]
    v[1] = v[v.length - 1]
    v.pop()
    if (v.length > 1) this.sink(1)

    return ret
  }

  push (val) {
    const v = this.v
    v.push(val)
    this.swim(v.length - 1)
  }

  sink (i) {
    const cmp = this.cmp
    const v = this.v
    const end = v.length
    let j = i * 2
    while (j < end) {
      if (j + 1 < end && cmp(v[j], v[j + 1]) < 0) {
        j++
      }
      if (cmp(v[i], v[j]) < 0) this.swap(v, i, j)
      else break
      i = j
      j = i * 2
    }
  }

  swim (i) {
    const cmp = this.cmp
    const v = this.v
    let j = i >> 1
    while (j > 0) {
      if (cmp(v[i], v[j]) > 0) {
        this.swap(v, i, j)
      } else break
      i = j
      j >>= 1
    }
  }

  swap (nums, i, j) {
    const tmp = nums[i]
    nums[i] = nums[j]
    nums[j] = tmp
  }

  size () {
    return this.v.length - 1
  }
}

class MinPQ extends MaxPQ {
  constructor (cmp = (a, b) => a - b) {
    super((a, b) => cmp(b, a))
  }
}

module.exports = {
  MaxPQ,
  MinPQ
}
