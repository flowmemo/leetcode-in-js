/*
155. Min Stack
Design a stack that supports push, pop, top, and retrieving the minimum element in constant time.

push(x) -- Push element x onto stack.
pop() -- Removes the element on top of the stack.
top() -- Get the top element.
getMin() -- Retrieve the minimum element in the stack.
Example:
MinStack minStack = new MinStack();
minStack.push(-2);
minStack.push(0);
minStack.push(-3);
minStack.getMin();   --> Returns -3.
minStack.pop();
minStack.top();      --> Returns 0.
minStack.getMin();   --> Returns -2.
*/

/**
 * initialize your data structure here.
 */
var MinStack = function () {
  this.len = 0
  this.stk = []
  this.min = []
}

/**
 * @param {number} x
 * @return {void}
 */
MinStack.prototype.push = function (x) {
  this.stk.push(x)
  this.min.push(this.len ? Math.min(x, this.min[this.len - 1]) : x)
  ++this.len
}

/**
 * @return {void}
 */
MinStack.prototype.pop = function () {
  if (this.len) {
    this.stk.pop()
    this.min.pop()
    --this.len
  }
}

/**
 * @return {number}
 */
MinStack.prototype.top = function () {
  return this.stk[this.len - 1]
}

/**
 * @return {number}
 */
MinStack.prototype.getMin = function () {
  return this.min[this.len - 1]
}

/**
 * Your MinStack object will be instantiated and called as such:
 * var obj = Object.create(MinStack).createNew()
 * obj.push(x)
 * obj.pop()
 * var param_3 = obj.top()
 * var param_4 = obj.getMin()
 */

module.exports = MinStack
