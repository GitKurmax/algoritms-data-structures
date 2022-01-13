// Complexity O(log2(n))

function binarySearch(arr, searchNum, count) {
    let middle = Math.floor(arr.length /2)

    if(arr[middle] === searchNum) {
        console.log('Iterations - ', count)
        return true
    }
    if(arr.length <= 1) {
        console.log('Iterations - ', count)
        return false
    }

    let newArr = []
    let start = arr[middle] > searchNum ? 0 : middle + 1
    let end = arr[middle] > searchNum ? middle - 1 : arr.length - 1
    for (let i = start; i <= end; i++) {
       newArr.push(arr[i])
    }
    return binarySearch(newArr, searchNum, count + 1)
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 11, 1))
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 21, 1))
