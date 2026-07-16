
function fibonacciNum(n) {

    if (n < 2 && n >= 0) {
        return n
    }

    return fibonacciNum(n - 1) + fibonacciNum(n - 2)
}

console.log(fibonacciNum(6))