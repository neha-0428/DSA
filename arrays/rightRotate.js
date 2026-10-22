
// brute force approach
function rightRotate(arr, k) {
    let n = arr.length;

    k = k % n
    if (k === 0) return
    
    let temp = []

    for (let i = 0; i < n - k; i++) {
        temp[i] = arr[i]
    }
    
    for (let i = n - k; i < n; i++) {
        arr[i - (n - k)] = arr[i]
    }
    
    for (let i = k; i < n; i++) {
        arr[i] = temp[i - k]
    }
}

// let arr = [1, 2, 3, 4, 5] // => [4, 5, 1, 2, 3]
// let arr = [5, 4, 2, 6, 9] // => [2, 6, 9, 5, 4]
let arr = [4, 7, 9, 2, 8, 1, 5, 2, 4] // => [2, 8, 1, 5, 2, 4, 4, 7, 9]
rightRotate(arr, 6)
// console.log(arr)

// Time Complexity = O(n - k) + O(k) + O(k) => O(n + k)
// Space Complexity = O(n - k)

// Optimized approach
function rightRotate1(arr, k) {

    let n = arr.length

    k = k % n
    if (k === 0) return

    reverse(arr, 0, n - k)

    reverse(arr, n - k, n)

    reverse(arr, 0, n)
}

function reverse(arr, start, end) {

    while (start <= end) {
        let temp = arr[start]
        arr[start] = arr[end]
        arr[end] = temp

        start++
        end--
    }
}

// let arr1 = [1, 2, 3, 4, 5] // => [4, 5, 1, 2, 3]
// let arr1 = [5, 4, 2, 6, 9] // => [2, 6, 9, 5, 4]
let arr1 = [4, 7, 9, 2, 8, 1, 5, 2, 4] // => [2, 8, 1, 5, 2, 4, 4, 7, 9]
rightRotate(arr1, 6)
console.log(arr1)

// Time Complexity = O(n)
// Space Complexity = O(1)