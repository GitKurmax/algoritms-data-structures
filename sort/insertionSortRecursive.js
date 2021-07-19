function insertionSortRecursive(arr, count) {
    if (count === arr.length) return arr
    for(let j = 0; j < count; j++) {
        if( arr[j] > arr[count]) {
            [arr[count], arr[j]] = [arr[j], arr[count]]
        }
    }
    return insertionSortRecursive(arr, count + 1)
}

console.log(insertionSortRecursive([234, 43, 323, 5002, 2, 99, 345, 0, 50, 302], 1))
