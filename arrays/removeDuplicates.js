
function removeDuplicates(arr) {

    if (arr.length === 0) return 0

    let left = 0

    for (let right = 1; right < arr.length; right++) {

        if (arr[right] !== arr[left]) {

            left++
            arr[left] = arr[right]
        }
    }

    return left + 1

}

// let arr = [0, 0, 3, 3, 5, 6]
// let arr = [0, 3, 3, 3, 5, 6]
let arr = [-2, 2, 4, 4, 4, 4, 5, 5, 7]
console.log(removeDuplicates(arr))
console.log(arr)

// Time complexity = O(N)
// Space Complexity = O(1)