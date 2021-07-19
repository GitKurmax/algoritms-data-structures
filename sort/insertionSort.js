function insertionSort(arr) {
    for (let i = 1; i < arr.length; i++) {
        for(let j = 0; j < i; j++) {
            if( arr[j] > arr[i]) {
                [arr[i], arr[j]] = [arr[j], arr[i]]
            }
        }
    }
    return arr
}

console.log(insertionSort([234, 43, 323, 5002, 2, 99, 345, 0, 50, 302]))
