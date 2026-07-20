
// Approach: sort the adjacents

// 1. Reverse loop an array till 1
// 2. For every iteration, run another loop which will find if adjacent elements are sorted, if not sorts them by swapping

function bubbleSort(arr) {

    for (let i = arr.length - 1; i > 0; i--) {

        let didSwap = false
        for (let j = 0; j < i; j++) {

            if (arr[j] > arr[j+1]) {
                let temp = arr[j+1]
                arr[j+1] = arr[j]
                arr[j] = temp

                didSwap = true
            }
        }

        if (!didSwap) {
            break;
        }
    }

    return arr
}

let arr = [13, 46, 24, 52, 20, 9]
let arr2 = [4, 73, 2, 73, 0, 51]
let arr3 = [1, 2, 3, 4, 5]
console.log(bubbleSort(arr))
console.log(bubbleSort(arr2))
console.log(bubbleSort(arr3))


// Time Complexity: worst case
// first loop will run for n times
// inner loop will run for n - 1 + n - 2 + n - 3 + ... + n => (n * (n + 1)) / 2
// final : O (n2) approx


// Time Complexity: Best case -> O (N) as no sorting takes place