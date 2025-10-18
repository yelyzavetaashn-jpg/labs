function midValue(num1, num2) {
    return (num1 + num2) / 2;
}

function pow2(value) {
    return value ** 2;
}

function pow3(value) {
    return value ** 3;
}

function processNumbers() {
    const results = [];
    for (let n = 0; n < 10; n++) {
        const sq = pow2(n);
        const cb = pow3(n);
        const mid = midValue(sq, cb);
        results.push(mid);
    }
    return results;
}

console.log(midValue(2, 9));
console.log(pow2(9));
console.log(pow3(9));
console.log(processNumbers());
