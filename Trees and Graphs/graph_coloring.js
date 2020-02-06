// Given an undirected graph ↴ with maximum degree ↴ DD, find a graph coloring ↴ using at most D + 1D + 1 colors.

//     Solution
// We go through the nodes in one pass, assigning each node the first legal color we find.

// How can we be sure we'll always have at least one legal color for every node? In a graph with maximum degree DD, each node has at most DD neighbors. That means there are at most DD colors taken by a node's neighbors.And we have D + 1D + 1 colors, so there's always at least one color left to use.

// When we color each node, we're careful to stop iterating over colors as soon as we find a legal color.

class GraphNode {
    constructor(label) {
        this.label = label;
        this.neighbors = new Set();
        this.color = null;
    }
}

function colorGraph(graph, colors) {

    // Create a valid coloring for the graph
    graph.forEach(node => {

        const illegalColors = new Set();

        node.neighbors.forEach(neighbor => {
            if (neighbor === node) {
                throw new Error('This graph is a loop!')
            }

            if (neighbor.color) {
                illegalColors.add(neighbor.color)
            }
        })


        for (let i = 0; i < colors.length; i++) {
            const color = colors[i];

            if (!illegalColors.has(color)) {
                node.color = color
                break;
            }
        }
    })
}
