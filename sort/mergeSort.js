function mergeSort(arr) {
    let middle = Math.ceil(arr.length/2)
    if(arr.length === 1) {
        return arr
    }

    let arrLeft = arr.filter((elem, index) => index < middle)
    let arrRight = arr.filter((elem, index) => index >=middle)

    return merge(mergeSort(arrLeft), mergeSort(arrRight))
}

function merge(arr1, arr2) {
    let result = []
    let rightIndex = 0
    for(let i=0; i < arr1.length; i++) {
        if (rightIndex > arr2.length - 1) {
            result.push(arr1[i])
            continue
        }

        if (arr1[i] < arr2[rightIndex]) {
            result.push(arr1[i])
        } else {
            result.push(arr2[rightIndex])
            rightIndex++
            i--
        }

        if (i === arr1.length - 1 && rightIndex === arr2.length - 1) {
            result.push(arr2[rightIndex])
        }
    }
    return result
}

console.log(mergeSort([234, 43, 2, 323, 5002, 2, 99, 345, 0, 50, 302]))
//console.log(mergeSort([3,0,5,1]))
//console.log(merge([2, 43, 234, 323, 5002], [0, 50,99, 302, 345]))
//console.log(merge([234, 43], [323]))
//console.log(merge([0, 2, 2, 43, 99, 234, 323, 5002], [0, 50, 99, 302, 345]))
//console.log(merge([0, 99], [0, 99]))
