// Implement a queue ↴ with 2 stacks.↴ Your queue should have an enqueue and a dequeue method and it should be "first in first out"(FIFO).

// Optimize for the time cost of mm calls on your queue.These can be any mix of enqueue and dequeue calls.

// Assume you already have a stack implementation and it gives O(1)O(1) time push and pop.

//  Implement the enqueue and dequeue methods

class QueueTwoStacks {
    constructor() {
        this.inStack = [];
        this.outStack = [];
    }

    enqueue(item) {
        this.inStack.push(item);
    }

    dequeue() {
        if (this.outStack.length === 0) {

            while (this.inStack.length) {
                this.outStack.push(this.inStack.pop());
            }

            if (this.outStack.length === 0) {
                throw new Error("Can't dequeue from empty queue!")
            }
        }
        return this.outStack.pop();
    }
}