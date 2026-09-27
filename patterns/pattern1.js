
function pattern(n) {
    for (let i = 0; i < n; i++) {
        for (let j = 0; j < n; j++) {
            process.stdout.write('* ')
        }
        console.log()
    }
}

pattern(4)

// Time complexity = O(N2)
// Space Complexity = O(1)