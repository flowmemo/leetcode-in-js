/*
146. LRU Cache
Design and implement a data structure for Least Recently Used (LRU) cache. It should support the following operations: get and set.

get(key) - Get the value (will always be positive) of the key if the key exists in the cache, otherwise return -1.
set(key, value) - Set or insert the value if the key is not already present. When the cache reached its capacity, it should invalidate the least recently used item before inserting a new item.
*/

/**
 * @constructor
 */
var LRUCache = function (capacity) {
  this.map = new Map()
  this.count = 0
  this.capacity = capacity
  this.head0 = new Dlist()
  this.rear0 = new Dlist()
  this.head0.next = this.rear0
  this.rear0.pre = this.head0
}

/**
 * @param {number} key
 * @returns {number}
 */
LRUCache.prototype.get = function (key) {
  const node = this.map.get(key)
  if (!node) return -1
  this.set(key, node.val)
  return node.val
}

/**
 * @param {number} key
 * @param {number} value
 * @returns {void}
 */
LRUCache.prototype.set = function (key, value) {
  if (!this.capacity) return
  const map = this.map
  let node = map.get(key)

  // set up node
  if (node) {
    node.val = value
    node.pre.next = node.next
    node.next.pre = node.pre
  } else {
    if (this.count === this.capacity) {
      let rear = this.rear0.pre
      rear.val = value
      node = rear
      rear.pre.next = rear.next
      rear.next.pre = rear.pre
      map.delete(node.key)
    } else {
      this.count++
      node = new Dlist(key, value)
    }
    node.key = key
    map.set(key, node)
  }

  // append node
  let head = this.head0.next
  this.head0.next = node
  head.pre = node
  node.pre = this.head0
  node.next = head
}

class Dlist {
  // head <-> rear
  constructor (key, val) {
    this.key = key
    this.val = val
    this.pre = this.next = null
  }
}

let lru = new LRUCache(2)
lru.set(1, 1)
lru.set(2, 2)
// console.log(lru.map)
console.log(lru.get(1))
lru.set(3, 3)

console.log(lru.map)
