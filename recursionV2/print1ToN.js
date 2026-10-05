
function print1(i, n) {
    if (i > n) return

    console.log(i);

    print1(i+1, n)
}

print1(1, 5)

// Using Backtracking
function print2(i, n) {
    if (i < 1) return

    print2(i - 1, n)
    console.log(i)
}

print2(5, 5)