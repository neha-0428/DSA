
function binarySearch(arr, target) {
    
    let left = 0
    let right = arr.length - 1

    while (left <= right) {
        let mid = Math.trunc(left + (right - left) / 2)

        if (target === arr[mid]) {
            return mid;
        }

        if (target < arr[mid]) {
            right = mid - 1
        } else {
            left = mid + 1
        }
    }

    return -1;
}


// let arr = [1, 3, 4, 7, 21, 54, 84]
// console.log(binarySearch(arr, 1))
// console.log(binarySearch(arr, 3))
// console.log(binarySearch(arr, 4))
// console.log(binarySearch(arr, 7))
// console.log(binarySearch(arr, 21))
// console.log(binarySearch(arr, 54))
// console.log(binarySearch(arr, 84))
// console.log(binarySearch(arr, 8404))

let arr = [5]
console.log(binarySearch(arr, 5));
