function bubbleSort(arr) {
    for(let i = 0; i < arr.length - 1; i++) {
        let swap = false;
        for(let j = 1; j < arr.length - i; j++) {
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
    }
}

console.log(bubbleSort([234, 43, 323, 5002, 2, -3, 99, 345, 0, 50, 302]))

