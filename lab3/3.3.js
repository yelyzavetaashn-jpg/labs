const ipToInteger = (ip = '192.168.1.100') => {
    return ip
        .split('.')           // розділяємо на октети
        .map(Number)          // перетворюємо кожен на число
        .reduce((accumulator, octet) => (accumulator << 8) + octet, 0);
};

console.log(ipToInteger('8.8.4.4'));
