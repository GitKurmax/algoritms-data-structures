// Complexity O(n)

const numToFind = 7
const numbers = [1,2,7,4,5,6,3,8,9,10]
let res = "Not found"

for(let i=0; i<numbers.length; i++) {
    if(numbers[i] === numToFind) {
        res = `Number ${numToFind} is found on position ${i} after ${++i} iterations`
        break;
    }
}

console.log(res)
