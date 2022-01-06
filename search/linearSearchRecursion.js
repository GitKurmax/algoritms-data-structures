// Complexity O(n)

function linearSearch(arr, num, pos) {
    return pos >= arr.length
        ? "Not found"
        : arr[pos] === num ? `Number ${num} is found on position ${pos} after ${++pos} iterations`
            :  linearSearch(arr, num, pos + 1)
}

console.log(linearSearch([1,2,7,4,5,6,3,8,9,10], 7, 0))