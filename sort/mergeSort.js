// Complexity O(n log n)

function mergeSort(arr) {
    let middle = Math.ceil(arr.length/2)
    if(arr.length === 1) {
        return arr
    }
    let arrLeft = arr.filter((elem, index) => index < middle)
    let arrRight = arr.filter((elem, index) => index >=middle)
    const arr1 = mergeSort(arrLeft)
    const arr2 = mergeSort(arrRight)
    const resultArr = merge(arr1, arr2)
    return resultArr
}

function merge(arr1, arr2) {
    let result = []
    let rightIndex = 0
    for(let i=0; i<arr1.length; i++) {
        if (rightIndex > arr2.length - 1) {
            result.push(arr1[i])
            continue
        }
        if(arr1[i] < arr2[rightIndex]){
            result.push(arr1[i])
            if (i === arr1.length - 1 && rightIndex === arr2.length - 1) {
                result.push(arr2[rightIndex])
            }
        } else {
            result.push(arr2[rightIndex])
            rightIndex++
            i--
        }

    }
    return result
}

console.log(mergeSort([234, 43, 323, 5002, 2, 99, 345, 0, 50, 302]))
console.log(mergeSort([3,0,5,1]))
