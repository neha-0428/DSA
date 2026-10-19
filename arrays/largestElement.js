
function largestElement(nums) {

    let max = nums[0]

    for (let i = 1; i < nums.length; i++) {

        if (nums[i] > max) {
            max = nums[i]
        }
    }

    return max
}

let arr = [3, 3, 0, -99, -40]
console.log(largestElement(arr))