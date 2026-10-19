
// Brute force approach
function leftRotateByOne(nums) {
    let temp = nums[0]

    for (let i = 1; i < nums.length; i++) {
        nums[i - 1] = nums[i]
    }

    nums[nums.length - 1] = temp
}

// let nums = [1, 2, 3, 4, 5]
let nums = [-1, 0, 3, 6]
leftRotateByOne(nums)
// console.log(nums);

// Time Complexity = O(N)


// Brute Force approach
function leftRotateByK(nums, k) {

    if (k === nums.length) return

    if (k > nums.length) {
        k = k % nums.length
    }
        
    let temp = []
    let n = nums.length

    // added elements in temp arr
    for (let i = 0; i < k; i++) {
        temp[i] = nums[i]
    }

    // shift elements
    for (let i = k; i < n; i++) {
        nums[i - k] = nums[i]
    }

    // add rotated elements back
    for (let i = n - k; i < n; i++) {
        nums[i] = temp[i - (n - k)]
    }
}

// let nums1 = [1, 2, 3, 4, 5, 6]
// let k = 2

let nums1 = [3, 4, 1, 5, 3, -5]
let k = 8
leftRotateByK(nums1, k)
console.log(nums1);

// Time Complexity : O(k) + O(n - k) + O(k) => O(n + k)
// Space Complexity : O(k)