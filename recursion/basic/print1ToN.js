
// forwarding
function print(i, n) {

    if (i === n) {
        return
    }

    process.stdout.write(i + 1 + " ")
    
    return print(i + 1, n)
}

console.log(print(0, 5))

//backtracking
function print2(i, n) {

    if (i > n) {
        return
    }

    print2(i + 1, n)

    process.stdout.write(i + 1 + " ")
}

console.log(print2(0, 5))