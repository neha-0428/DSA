
function linearSearch (nums, target) {

    for (let i = 0; i < nums.length; i++) {

        if (nums[i] === target) {
            return i
        }
    }

    return -1
}

let arr =  [2, 3, 4, 5, 3]
let target = 10
console.log(linearSearch(arr, target))