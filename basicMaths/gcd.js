// GCD of Two Numbers

// brute force approach
function gcd(num1, num2) {
    let gcd = 1;

    let minNum = Math.min(num1, num2)

    for (let i = 2; i <= minNum; i++) {

        if (num1 % i === 0 && num2 % i === 0) {
            gcd = i
        }

    }

    return gcd

}

// console.log(gcd(12, 18))
// console.log(gcd(40, 20))

// Time complexity = O (min(num1, num2))
// spaceComplexity = O (1)

// optimized approach
function optimizedGCD(num1, num2) {

    if (num1 === 0) return num2;
    if (num2 === 0) return num1;

    while (num1 > 0 && num2 > 0) {
        if (num1 > num2) {
            num1 = num1 % num2
        } else {
            num2 = num2 % num1
        }
    }
    if (num1 === 0) return num2
    return num1

}

console.log(optimizedGCD(12, 18))
console.log(optimizedGCD(40, 20))

// Time Complexity: log (base theta) min(num1, num2) i.e O(log(min(a, b)))
// space Complexity: O(!)