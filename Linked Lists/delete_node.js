// Delete a node from a singly - linked list, ↴ given only a variable pointing to that node.

// The input could, for example, be the variable b below:

// class LinkedListNode {
//     constructor(value) {
//         this.value = value;
//         this.next = null;
//     }
// }

// const a = new LinkedListNode('A');
// const b = new LinkedListNode('B');
// const c = new LinkedListNode('C');

// a.next = b;
// b.next = c;

// deleteNode(b);

class LinkedListNode {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}


function deleteNode(nodeToDelete) {

    // Delete the input node from the linked list
    let tempNextNode = nodeToDelete.next

    if (tempNextNode) {
        nodeToDelete.value = tempNextNode.value;
        nodeToDelete.next = tempNextNode.next;
        tempNextNode.next = null;
    } else {
        throw new Error("Can't delete the last node with this technique!")
    }
}