module.exports = function reverse (n) {
    if (n < 0) {
        n *= -1;
    } else if (n < 10) {
        return n;
    }
    let ret = n % 10;
    n = parseInt(n / 10);
    for (let i = 10; n > 10; i *= 10) {
        ret = ret * i + n % 10;
        n = parseInt(n / 10)
        if (n < 10) {
            ret = ret * i + n;
            return ret;
        }
    }
    if (n === 10) {
        ret = ret * 100 + 1;
    }
    return ret;
}

// function test_func(n) {
//     console.log(n)
// }

// function main(outputNum) {
//     test_func(outputNum);
// }

// main(162);

// cd <path_to_index.js_file> && node index.js