function generateRandomString(length, chars) {
    let result = '';
    const charsCount = chars.length;

    for (let i = 0; i < length; i++) {
        const randomPos = Math.floor(Math.random() * charsCount);
        result += chars[randomPos];
    }

    return result;
}

const characters = 'abcdefghijklmnopqrstuvwxyz0123456789';
const key = generateRandomString(16, characters);
console.log(key);
