function createRange(from, to) {
    let numbers = [];
    for (let num = from; num <= to; num++) {
        numbers.push(num);
    }
    return numbers;
}
console.log(createRange(5, 20));

function createOddRange(from, to) {
    let result = [];
    for (let n = from; n <= to; n++) {
        if (n % 2 !== 0) {
            result.push(n);
        }
    }
    return result;
}
console.log(createOddRange(5, 20));
