// Complexity O(n2)

function selectionSort(arr) {
    for(let i=0 ; i < arr.length - 1; i++) {
        let minIndex = i
        for(let j=i+1; j < arr.length; j++) {
            if(arr[minIndex] > arr[j]) {
                minIndex = j
            }
        }

        [arr[i], arr[minIndex]] = [arr[minIndex], arr[i]]
    }
    return arr
}

console.log(selectionSort([234, 43, 323, 5002, 2, 99, 345, 0, 50, 302]))
