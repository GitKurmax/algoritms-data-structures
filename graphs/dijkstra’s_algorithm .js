// Not mine

// Time Complexity: O(E Log V)
// where, E is the number of edges and V is the number of vertices.
// Space Complexity: O(V)

const graph = {
    a: {b: 2, c:1},
    b: {f: 7},
    c: {d: 5, e: 2},
    d: {f: 2},
    e: {f: 1},
    f: {g: 1},
    g: {},
}

function shortPath(graph, start, end) {
    const costs = {}
    const processed = []
    let neighbors = {}

    Object.keys(graph).forEach(node => {
        if (node !== start) {
            let value = graph[start][node]
            costs[node] = value || Infinity
        }
    })
    let node = findNodeLowestCost(costs, processed)

    while (node) {
        const cost = costs[node]
        neighbors = graph[node]
        Object.keys(neighbors).forEach(neighbor => {
            let newCost = cost + neighbors[neighbor]
            if (newCost < costs[neighbor]) {
                costs[neighbor] = newCost
            }
        })
        processed.push(node)
        node = findNodeLowestCost(costs, processed)
    }
    return costs
}


function findNodeLowestCost(costs, processed) {
    let lowestCost = Infinity
    let lowestNode;

    Object.keys(costs).forEach(node => {
        let cost = costs[node]
        if (cost < lowestCost && !processed.includes(node)) {
            lowestCost = cost
            lowestNode = node
        }
    })
    return lowestNode
}

console.log(shortPath(graph, 'a', 'g'));

// Mine code

function shortPathMine(graph, start, end) {
    const visited = []
    const costs = {}
    let neighbors;

    // Initial costs object
    Object.keys(graph).forEach(node => {
        if(node === start) {
            costs[start] = 0
        } else {
            costs[node] = Infinity
        }
    })


    while(start !== end) {
        neighbors = Object.entries(graph[start])

        // Set distance to neighbors
        neighbors.forEach(([node, cost]) => {
            if(!visited.includes(node)) {
                costs[node] = costs[node] < costs[start] + cost ? costs[node] : cost + costs[start]
            }
        })
        visited.push(start)
        start = minCost(visited, costs)
    }

    return costs
}

function minCost(visited, costs) {
    const [min] = Object.entries(costs).sort((a, b) => a[1] - b[1])
        .filter(node => !visited.includes(node[0]))
    return min[0]
}

console.log(shortPathMine(graph, 'a', 'g'));
