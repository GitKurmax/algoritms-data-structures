// Complexity O(n)

function linearSearch(arr, num) {
    let res = "Not found"

    for(let i=0; i<arr.length; i++) {
        if(arr[i] === num) {
           return  `Number ${num} is found on position ${i} after ${++i} iterations`
        }
    }

    return res
}

console.log(linearSearch([1,2,7,4,5,6,3,8,9,10], 3))