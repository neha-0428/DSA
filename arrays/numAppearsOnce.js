
// Find a num which appears once and the others are twice in an array

function numThatAppearsOnce(arr) {
    
    let xor = 0

    for (let i = 0; i < arr.length; i++) {

        // xor returns same numbers as 0, and different as a number itself
        xor = xor ^ arr[i]

    }

    return xor
}

let arr = [1, 1, 2, 3, 3, 4, 4]
console.log(numThatAppearsOnce(arr))

// Time Complexity = O(N)
// Space Complexity = O(1)