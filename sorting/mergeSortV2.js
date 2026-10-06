
function mergeSort(arr, low, high) {

    // Base Condition
    if (low == high) return

    let mid = (low + (high - low) / 2) | 0

    mergeSort(arr, low, mid)

    mergeSort(arr, mid+1, high)

    merge(arr, low, mid, high)

}

function merge(arr, low, mid, high) {

    let left = low
    let right = mid+1
    let result = []

    while (left <= mid && right <= high) {
        if (arr[left] >= arr[right]) {
            result.push(arr[right])
            right++
        } else {
            result.push(arr[left])
            left++
        }
    }

    while (left <= mid) {
        result.push(arr[left])
        left++
    }

    while (right <= high) {
        result.push(arr[right])
        right++
    }

    for (let i=low; i < high; i++) {
        arr[i] = result[i - low];
    }
    
}

let arr = [3, 2, 4, 1, 3];
let arr1 = [4, 2, 6, 1, 9, 3, 5, 2, 8]

mergeSort(arr, 0, arr.length - 1)
mergeSort(arr1, 0, arr1.length - 1)

console.log(arr)
console.log(arr1)


// Time Complexity = O(log base 2 n) => since its divide by 2