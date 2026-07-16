
function printSum(i, n, sum) {

    if (i > n) {
        return sum
    }

    sum += i
    return printSum(i + 1, n, sum)
}

console.log(printSum(0, 5, 0))
console.log(printSum(0, 4, 0))



function print(n) {
    if (n < 1) {
        return n
    }

    return n + print(n - 1)
}


console.log(print(5))
console.log(print(4))