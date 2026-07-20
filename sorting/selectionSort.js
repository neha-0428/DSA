
// Selection Sort

// 1. Start from the first element.
// 2. Find the minimum element in the unsorted part of the array.
// 3. Swap the minimum element with the current element.
// 4. Move to the next position and repeat the process.
// 5. Continue until the second-last index (n - 2).

function selectionSort(arr) {

    for (let i = 0; i < arr.length - 1; i++) {

        let min = i
        for (let j = i; j < arr.length; j++) {
            if (arr[j] < arr[min]) {
                min = j
            }
        }
        
        let temp = arr[min]
        arr[min] = arr[i]
        arr[i] = temp
    }

    return arr
}

let arr = [13, 46, 24, 52, 20, 9]
let arr2 = [4, 73, 2, 73, 0, 51]
console.log(selectionSort(arr))
console.log(selectionSort(arr2))


// Time Complexity:
// final : O (n2) approx