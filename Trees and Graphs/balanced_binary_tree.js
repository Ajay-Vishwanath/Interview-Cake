// Write a function to see if a binary tree ↴ is "superbalanced"(a new tree property we just made up).

// A tree is "superbalanced" if the difference between the depths of any two leaf nodes ↴ is no greater than one.

class BinaryTreeNode {
    constructor(value) {
        this.value = value;
        this.left = null;
        this.right = null;
    }

    insertLeft(value) {
        this.left = new BinaryTreeNode(value);
        return this.left;
    }

    insertRight(value) {
        this.right = new BinaryTreeNode(value);
        return this.right;
    }
}

function isBalanced(treeRoot) {

    // Determine if the tree is superbalanced
    if (!treeRoot) return true;

    const depths = [];
    const nodes = [[treeRoot, 0]];

    while (nodes.length) {
        const nodePair = nodes.pop();
        const node = nodePair[0];
        const depth = nodePair[1];

        if (!node.left && !node.right) {
            if (!depths.includes(depth)) {
                depths.push(depth);


                if (
                    (depths.length > 2) || (depths.length === 2 && Math.abs(depths[0] - depths[1]) > 1)) {
                    return false;
                }
            }
        } else {

            if (node.left) {
                nodes.push([node.left, depth + 1])
            }

            if (node.right) {
                nodes.push([node.right, depth + 1])
            }
        }
    }
    return true;
}