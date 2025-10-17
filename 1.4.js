const data = [10, false, '234', true, {}, 'lab', 8000, null, NaN, 'mylittlepony', true];

const types = {};
for (const element of data) {
    const kind = typeof element;
    if (!(kind in types)) {
        types[kind] = 0;
    }
    types[kind]++;
}
console.log(types);
