
function maxConsecutive(arr) {
    let maxCount = 0
    let count = 0

    for (let i = 0; i <= arr.length; i++) {

        if (arr[i] === 1) {
            count++
            maxCount = Math.max(maxCount, count)
        } else {
            count = 0
        }
    }

    return maxCount
}

let arr = [1, 1, 0, 0, 1, 1, 1, 0]
// let arr = [0, 0, 0, 0, 0, 0, 0, 1]
// let arr = [1]
console.log(maxConsecutive(arr))