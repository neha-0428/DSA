
// parameterized recursion
function printSum(n , sum) {
    if (n < 1) {
        console.log(sum);
        return
    }

    printSum(n - 1, sum + n)

}

printSum(5, 0)

// Functional Recursion
function printSum2(n) {
    if (n < 1) return 0

    return n + printSum2(n-1)

}

console.log(printSum2(5))