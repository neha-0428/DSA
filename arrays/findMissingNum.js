
function findMissingNum(arr) {

    let actualSum = 0
    let sum = 0

    for (let i = 0; i < arr.length; i++) {

        sum += arr[i]
        actualSum += i + 1

    }

    return actualSum - sum;

    
}

// let arr = [0, 2, 3, 1, 4]
let arr =  [0, 1, 2, 4, 5, 6]
console.log(findMissingNum(arr))

