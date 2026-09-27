
function pattern(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j <= i; j++) {
            process.stdout.write('* ')
        }
        console.log()
    }
}

pattern(4)


function pattern1(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= i; j++) {
            process.stdout.write(j + ' ')
        }
        console.log()
    }
}

pattern1(4)

// Used n + ( (n+1) / 2) approach so approx complexity is N2
// Time complexity = O(N2)
// Space Complexity = O(1)