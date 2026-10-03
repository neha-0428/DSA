// Given a signed 32-bit integer x, return x with its digits reversed. If reversing x causes the value to go outside the signed 32-bit integer range [-231, 231 - 1], then return 0.

// Assume the environment does not allow you to store 64-bit integers (signed or unsigned).

function reverse(n) {
    let originalNum = Math.abs(x)
    let reverse = 0

    while (originalNum > 0) {
        let digit = Math.trunc(originalNum % 10)
        reverse = (reverse * 10) + digit

        if (reverse >= ((2 ** 31) - 1) || reverse <= (-2) ** 31) {
            return 0
        }

        originalNum = Math.trunc(originalNum / 10)
    }

    return x < 0 ? -reverse : reverse
    
}


console.log(reverse(123));
console.log(reverse(-123));
console.log(reverse(1534236469));
