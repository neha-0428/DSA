
function fibonacci(n) {
    if (n == 0 || n == 1) return n

    return fibonacci(n - 1) + fibonacci(n - 2)
}

console.log(fibonacci(0));
console.log(fibonacci(1));
console.log(fibonacci(2));
console.log(fibonacci(5));


// TC = O(2 ** n)
// Reason: In recursion tree, we have checked that every function calls 2 more functions, so it is approximately exponential