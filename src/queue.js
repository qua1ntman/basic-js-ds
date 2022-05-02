const { NotImplementedError } = require('../extensions/index.js');

// const { ListNode } = require('../extensions/list-node.js');

/**
 * Implement the Queue with a given interface via linked list (use ListNode extension above).
 *
 * @example
 * const queue = new Queue();
 *
 * queue.enqueue(1); // adds the element to the queue
 * queue.enqueue(3); // adds the element to the queue
 * queue.dequeue(); // returns the top element from queue and deletes it, returns 1
 * queue.getUnderlyingList() // returns { value: 3, next: null }
 */
 class Queue {
  obj = {}
  getUnderlyingList() {
    return this.obj
  }

  enqueue(value) {
      let inside = this.obj
      if (Object.keys(inside).length == 0) {
          console.log(true);
          inside.value = value
          inside.next = null
      } else {
          while (inside.next != null) {
              inside = inside.next
          }
          inside.next = {value, next: null}
      }
  }

  dequeue() {
      console.log(this.obj);
      let result = this.obj.value
      this.obj = this.obj.next
      return result
  }
}

module.exports = {
  Queue
};
