
function merge(nums1, m, nums2, n) {

    let l = nums1.length - 1

    let i = nums1.length - 1
    let j = nums2.length - 1

    while (i > 0 && j > 0) {

        if (nums2[j] >= nums1[i]) {
            nums1[l] = nums2[j]
            l--
            j--
        } else {
            nums1[l] = nums1[i]
            l--
            i--
        }
    }

    while (i > 0) {
        nums1[l] = nums1[i]
        l--
        i--
    }

    while (j > 0) {
        nums1[l] = nums2[j]
        l--
        j--
    }
}


// let nums1 = [1,2,3,0,0,0]
let nums1 = [4,5,6,0,0,0]
let m = 3
let nums2 = [2,5,6]
// let nums2 = [1,2,3]
let n = 3

merge(nums1, m, nums2, n)

console.log(nums1)

let arr1 = [1]
let m1 = 1
let arr2 = []
let n2 = 0

// merge(arr1, m1, arr2, n2)
// console.log(arr1)