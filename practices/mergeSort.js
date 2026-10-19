
function mergeSort(arr, l, r) {
    if (l === r) return
    
    let m = (l + (r - l) / 2) | 0

    mergeSort(arr, l, m)
    mergeSort(arr, m+1, r)

    merge(arr, l, m, r)

}

function merge(arr, l, m, r) {

    let low = l
    let mid = m + 1
    let result = []

    while (low <= m && mid <= r) {

        if (arr[low] < arr[mid]) {
            result.push(arr[low])
            low++
        } else {
            result.push(arr[mid])
            mid++
        }
    }

    while (low <= m) {
        result.push(arr[low])
        low++
    }

    while (mid <= r) {
        result.push(arr[mid])
        mid++
    }

    for (let i = l; i <= r; i++) {
        arr[i] = result[i - l]
    }
}

let arr = [4, 7, 2, 8, 1, 5, 3, 9, 6]
mergeSort(arr, 0, arr.length - 1)
console.log(arr)