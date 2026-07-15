// Count all Digits of a Number

// Approach 1
function count(num) {
    let count = 0

    while (num > 0) {
        count++
        num = Math.trunc(num / 10);
    }

    return count

}

function count1(num) {
    return Math.trunc(Math.log10(num) + 1)
}

// console.log(count(10284))
// console.log(count(1028))
// console.log(count(102))
// console.log(count(1))
// console.log(count())

console.log(count1(10284))
console.log(count1(1028))
console.log(count1(102))
console.log(count1(1))
console.log(count1())