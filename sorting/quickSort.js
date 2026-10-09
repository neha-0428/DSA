
function quickSort(arr, low, high) {

    if (low < high) {

        let partition = partitionFn(arr, low, high)

        quickSort(arr, low, partition - 1)

        quickSort(arr, partition + 1, high)

    }

}

function partitionFn (arr, low, high) {

    let pivot = arr[low]

    let i = low
    let j = high

    while (i < j) {

        while (arr[i] <= pivot && i <= high - 1) {
            i++
        }

        while (arr[j] > pivot && j >= low + 1) {
            j--
        }

        if (i < j) {
            let temp = arr[i]
            arr[i] = arr[j]
            arr[j] = temp
        }
    }

    let temp = arr[low]
    arr[low] = arr[j]
    arr[j] = temp

    return j
}


let arr = [3, 7, 4, 1]
let arr1 = [3, 7, 4, 2, 1, 6, 5]

quickSort(arr, 0, arr.length - 1)
quickSort(arr1, 0, arr1.length - 1)

console.log(arr)
console.log(arr1)



// Time Complexity = O(n log n)
// Space Complexity = O (1) -> extra space