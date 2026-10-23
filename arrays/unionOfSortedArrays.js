
function union(arr1, arr2) {

    let left = 0
    let right = 0

    let result = []

    while (left < arr1.length && right < arr2.length) {
        let value

        if (arr1[left] < arr2[right]) {

            value = arr1[left++]

        } else if (arr2[right] < arr1[left]) {

            value = arr2[right++]

        } else {

            value = arr1[left]
            left++
            right++
        }

        if (result.length === 0 || result[result.length - 1] !== value) {
            result.push(value)
        }

        console.log('here')

    }

    while (left < arr1.length) {

        let value = arr1[left++]

        if (result[result.length - 1] !== value) {
            result.push(arr1[left])
        }
    }

    while (right < arr2.length) {

        let value = arr2[right++]

        if (result[result.length - 1] !== value) {
            result.push(arr2[right])
        }
    }

    return result

}

// let arr1 = [1, 2, 3, 4, 5]
// let arr2 = [1, 2, 7]

let arr1 = [3, 4, 6, 7, 9, 9]
let arr2 = [1, 5, 7, 8, 8]
console.log(union(arr1, arr2))