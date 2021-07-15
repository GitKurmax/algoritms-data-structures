function selectionSort(arr) {
    for(let i=0 ; i < arr.length - 1; i++) {
        let min = arr[i]
        for(let j=i+1; j < arr.length; j++) {
            if(min > arr[j]) {
                swap(arr, i, j)
                min = arr[i]
            }
        }
    }
    return arr
}

function swap(arr, firstElemPosition, secondElemPosition) {
   [arr[firstElemPosition], arr[secondElemPosition]] = [arr[secondElemPosition], arr[firstElemPosition]]
}

console.log(selectionSort([234, 43, 323, 5002, 2, 99, 345, 0, 50, 302]))
