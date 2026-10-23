
function intersectedArray(arr1, arr2) {
    let left = 0
    let right = 0
    let result = []

    while (left < arr1.length && right < arr2.length) {

        if (arr1[left] < arr2[right]) {
            left++
        } else if (arr2[right] < arr1[left]) {
            right++
        } else {
            result.push(arr1[left])
            left++
            right++
        }
    }

    return result

}

// let arr1 = [1, 2, 2, 3, 5]
// let arr2 = [1, 2, 7]

let arr1 = [1, 2, 2, 3, 3, 3]
let arr2 = [2, 3, 3, 4, 5, 7]
console.log(intersectedArray(arr1, arr2))