
// Approach: 

// 1. Loop through the array
// 2. For every iteration, loop backwards from current interation (i) till 1st index
// 3. Check if inner loop > 0 and sorting requires by checking if the previous element is greater than current
// 4. If greater, then swap, if exit outer loop (use while loop)

function insertionSort(arr) {

    for (let i = 0; i < arr.length; i++) {

        let j = i;
        while (j > 0 && arr[j-1] > arr[j]) {
            let temp = arr[j - 1]
            arr[j - 1] = arr[j]
            arr[j] = temp

            j--
        }
    }

    return arr;

}

let arr = [13, 46, 24, 52, 20, 9]
let arr2 = [4, 73, 2, 73, 0, 51]
let arr3 = [1, 2, 3, 4, 5]
console.log(insertionSort(arr))
console.log(insertionSort(arr2))
console.log(insertionSort(arr3))

// Time Complexity: Best Case => O (N)
// Time Complexity: Worst Case, Average Case => approx O (n2)

// Inner loop
// 1 + 2 + 3 + ... + n - 1 => (n * (n - 1)) / 2 