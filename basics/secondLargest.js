
function secondHighest (s) {
    let largest = 0;
    let secondLargest = -Infinity;

    for (let i = 0; i < s.length; i++) {
        if (isNaN(s[i])) {
            continue;
        }

        
        if (s[i] > largest) {
            secondLargest = largest;
            largest = Number(s[i])
        } else if (s[i] > secondLargest && s[i] !== largest) {
            secondLargest = Number(s[i])
        }
    }

    return secondLargest === -Infinity ? -1 : secondLargest;
};

// console.log(secondHighest('dfa12321afd'))
console.log(secondHighest('abc1111'))