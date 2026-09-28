
// Given an integer n, return true if it is a power of two. Otherwise, return false.
// An integer n is a power of two, if there exists an integer x such that n == 2x.

// Solution: In binary, any number that is a power of 2 has exactly one 1 bit (e.g., 8 = 1000₂). The number right before it has all 1s trailing after a 0 (e.g., 7 = 0111₂).If you perform a bitwise AND (&) on these two numbers, a power of 2 will always result in 0.


function isPowerOfTwo(n) {
    return n > 0 && (n & (n - 1)) === 0
}

console.log(isPowerOfTwo(8));
console.log(isPowerOfTwo(19));

// Time Complexity : O(1)