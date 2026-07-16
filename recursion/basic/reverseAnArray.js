
function reverseArray(i, arr, result) {

    if (i > arr.length - 1) {
        return result
    }

    result.push(arr[arr.length - i - 1])

    return reverseArray(i + 1, arr, result)
}

console.log(reverseArray(0, [1, 2, 3, 4, 5], []))
console.log(reverseArray(0, [1, 0, 3, 2, 5], []))

function reverseArrayOptimal(i, arr) {
    if (i >= Math.floor(arr.length / 2)) {
        return arr
    }

    let temp = arr[i]
    arr[i] = arr[arr.length - i - 1]
    arr[arr.length - i - 1] = temp
        
    return reverseArrayOptimal(i + 1, arr)
}

console.log(reverseArrayOptimal(0, [1, 2, 3, 4, 5]))
console.log(reverseArrayOptimal(0, [1, 0, 3, 2, 5]))