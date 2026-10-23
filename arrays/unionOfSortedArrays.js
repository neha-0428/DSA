
function union(arr1, arr2) {

    let left = 0
    let right = 0

    let result = []

    while (left < arr1.length && right < arr2.length) {

        if (arr1[left] < arr2[right] && arr1[left - 1] !== arr1[left]) {

            result.push(arr1[left])
            left++

        } else if (arr2[right] < arr1[left] && arr2[right - 1] !== arr2[right]) {

            result.push(arr2[right])
            right++

        } else {

            result.push(arr1[left])
            left++
            right++
        }

    }

    while (left < arr1.length) {

        if (arr1[left - 1] !== arr1[left]) {
            
            result.push(arr1[left])
            
        }
        left++
    }

    while (right < arr2.length) {

        if (arr2[right - 1] !== arr2[right]) {
            
            result.push(arr2[right])
            
        }
        right++
    }

    return result

}

// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [1, 2, 7]

let arr1 = [3, 4, 6, 7, 9, 9]
let arr2 = [1, 5, 7, 8, 8]
console.log(union(arr1, arr2))