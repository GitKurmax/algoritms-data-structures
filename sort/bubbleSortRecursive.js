function bubbleSortRecursive(arr, index) {
        let swap = false;

        for(let j = 1; j < arr.length - index; j++) {
            if(arr[j-1] > arr[j]) {
                const elem = arr[j-1]
                arr[j-1] = arr[j]
                arr[j] = elem
                swap = true
            }
        }
        if(!swap) {
            return arr
        }
    return bubbleSortRecursive(arr, index + 1)
}

console.log(bubbleSortRecursive([234, 43, 323, 5002, 2, 99, 345, 0, 50, 302], 0))
