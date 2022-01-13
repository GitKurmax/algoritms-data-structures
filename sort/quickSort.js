// Also called Hoare`s sort
// Complexity n*log(n)

function quickSort(arr) {
    if(arr.length <= 1) return arr

    let pivot = Math.floor(arr.length/2)
    let [left, right] = [[],[]]

    for(let i=0; i<arr.length; i++) {
        if(arr[pivot] > arr[i]) left.push(arr[i])
        if(arr[pivot] < arr[i]) right.push(arr[i])
    }

    return [...quickSort(left), arr[pivot], ...quickSort(right)]
}

console.log(quickSort([50,-3,0,-5,3,1,4,2,23,-10]))