function rank(num, pos) {
    const numbers = num.toString().split('')

    return Number(numbers[numbers.length - pos]) || -1
}

function radixSort(arr) {
    let rankObj = {}
    let notDone = true;
    let pos = 1

    while(notDone) {
        notDone = false
        arr.forEach(num => {
            const rankValue = rank(num, pos)

            if(rankValue === -1) {
                rankObj[0] = rankObj[0] ? [...rankObj[0], num] : [num]
            } else {
                notDone = true
                rankObj[rankValue] = rankObj[rankValue] ? [...rankObj[rankValue], num] : [num]
            }
        })

        arr = Object.values(rankObj).reduce((acc, val) => {
            return [...acc, ...val]
        }, [])

        rankObj = {}
        pos += 1
    }
    return arr
}

console.log(radixSort([234, 43, 323, 5002, 2, 99, 345, 0, 50, 302]))
