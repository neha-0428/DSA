// Check if the Number is Armstrong

function armstrong(num) {
    let sum = 0
    let originalNum = num
    let numLen = String(num).length

    while (num > 0) {
        let digit = num % 10;
        sum += Math.pow(digit, numLen)
        num = Math.trunc(num / 10)
    }

    return sum === originalNum ? true : false
}

console.log(armstrong(153))
console.log(armstrong(1634))
console.log(armstrong(723))


// TimeComplexity = log (base 10) n
// Space complexity = O(1)