
function reverse(arr, i) {    
    let midIndex = (arr.length / 2) | 0
    
    if (i >= midIndex) return

    reverse(arr, i+1)

    let rightIndex = arr.length - 1 - i;
    let temp = arr[i]
    arr[i] = arr[rightIndex]
    arr[rightIndex] = temp
}

let arr = [1, 2, 3];
reverse(arr, 0)
console.log(arr)

let arr2 = [1, 2, 3, 4, 5, 6];
reverse(arr2, 0)
console.log(arr2)