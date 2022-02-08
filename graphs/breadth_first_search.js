/*
    BFS visits the nodes one level at a time.
    To prevent visiting the same node more than once, we’ll maintain a visited object.
    Since we need to process the nodes in a First In First Out fashion,
    a queue is a good contender for the data structure to use. The time complexity is O(V+E)
 */

const graph = {
    a: ['b','c'],
    b: ['f'],
    c: ['d','e'],
    d: ['f'],
    e: ['f'],
    f: ['g'],
}

function breadthSearch(graph, start, end) {
    let queue = []
    const visited = []
    queue.push(start)
    while(queue.length > 0) {
        const current = queue.shift()
        if(visited.includes(current)) continue
        if(!graph[current]) {
            graph[current] = []
        }
        if(graph[current].includes(end)) {
            return true
        } else {
            queue = [...queue, ...graph[current]]
        }
        visited.push(current)
    }
    return false
}

console.log(breadthSearch(graph, 'a', 'g'))
console.log(breadthSearch(graph, 'a', 'e'))
console.log(breadthSearch(graph, 'a', 'n'))
console.log(breadthSearch(graph, 'n'))
