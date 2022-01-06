// Complexity O(log2(n))

function binarySearch(arr, searchNum) {
    let startPosIndex = 0
    let endPosIndex = arr.length - 1
    let middle
    let iterations = 0

    const detectStartEnd = (start, end) => {
        middle = Math.floor((end - start)/2) + start
        startPosIndex = arr[middle] > searchNum ? start : middle + 1
        endPosIndex = arr[middle] > searchNum ? middle - 1: end

        return middle
    }

    while(arr[middle] !== searchNum && startPosIndex <= endPosIndex) {
        iterations++
        middle = detectStartEnd(startPosIndex, endPosIndex)
    }

    return arr[middle] === searchNum ? `Found number ${arr[middle]} on position ${middle} after ${iterations} iterations` : `Not found - ${iterations} iterations`
}

console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 5))
console.log(binarySearch([1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20], 21))


