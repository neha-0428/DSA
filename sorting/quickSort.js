
function quickSort(arr, low, high) {

    let pivot = arr[low]

    let partition = partitionFn(arr, pivot, low, high)

    quickSort(arr, pivot, low, partition)

    quickSort(arr, pivot, partition + 1, high)

}

function partitionFn (arr, pivot, low, high) {

    let i = low
    let j = high

    while (j <= i) {

        if (arr[i] > pivot || arr[j] < pivot) {
            let temp = arr[j]
            arr[i] = arr[j]
            arr[j] = temp

            i++
            j--
        } else if (arr[i] < pivot) {
            i++
        } else {
            j--
        }
    }

    return j

}


let arr = [3, 7, 4, 2, 1, 6, 5]
quickSort(arr, 0, arr.length - 1)
console.log(arr)