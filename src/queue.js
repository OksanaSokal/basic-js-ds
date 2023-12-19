const { NotImplementedError } = require('../extensions/index.js');

const { ListNode } = require('../extensions/list-node.js');

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
  constructor() {
    this.queue = {};
    this.head = null;
    this.tail = null;
  }
  getUnderlyingList() {
    let node = new ListNode(this.head);
    while (this.queue) {
      node.next = this.head++;
    }
    return node;
  }

  enqueue(value) {
    return (this.queue[this.tail++] = value);

    // remove line with error and write your code here
  }

  dequeue() {
    let newHead = this.queue[this.head++];
    this.tail--;
    return newHead;

    // remove line with error and write your code here
  }
}

module.exports = {
  Queue,
};
