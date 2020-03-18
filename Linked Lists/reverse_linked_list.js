// Hooray! It's opposite day. Linked lists go the opposite way today.

// Write a function for reversing a linked list.↴ Do it in place.↴

// Your function will have one input: the head of the list.

// Your function should return the new head of the list.

//     Here's a sample linked list node class:

// class LinkedListNode {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

function reverse(headOfList) {
    let currentNode = headOfList;
    let previousNode = null;
    let nextNode = null;

    // Until we have 'fallen off' the end of the list
    while (currentNode) {

        // Copy a pointer to the next element
        // before we overwrite currentNode.next
        nextNode = currentNode.next;

        // Reverse the 'next' pointer
        currentNode.next = previousNode;

        // Step forward in the list
        previousNode = currentNode;
        currentNode = nextNode;
    }

    return previousNode;
}