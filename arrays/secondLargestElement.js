
function secondLargestElement(nums) {

    let largest = nums[0]
    let secondLargest = -Infinity

    for (let i = 1; i < nums.length; i++) {

        if (nums[i] > largest) {
            secondLargest = largest
            largest = nums[i]
        } else if (nums[i] > secondLargest && nums[i] != largest) {
            secondLargest = nums[i]
        }
    }

    return secondLargest === -Infinity ? -1 : secondLargest
}

// let arr = [8, 8, 7, 6, 5]
// let arr = [10, 10, 10, 10, 10]
// let arr = [3, 2, 2, 10, 10, 10]
let arr = [1000,-10000]
console.log(secondLargestElement(arr))