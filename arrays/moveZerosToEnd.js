
function moveZeros(arr) {

    let left = 0
    
    for (let right = 0; right < arr.length; right++) {

        if (arr[right] !== 0) {
            [arr[left], arr[right]] = [arr[right], arr[left]]
            left++
        }
        
    }

}

let arr = [0, 4, 0, 5, 0]
// let arr = [0, 1, 4, 0, 5, 2]
// let arr = [11, 0, 0, 0, 5]
// let arr = [-10,-9,-8]
moveZeros(arr)
console.log(arr)