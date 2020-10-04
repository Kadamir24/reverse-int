module.exports = function reverse (n) {
    if (n < 0) {
        n = n * (-1);
    }
    strNum = n + '';
    let newStr = '';
    for (let i = strNum.length - 1; i >= 0; i--) {
        if (i == strNum.length - 1 && strNum[i] == 0) {
            continue
        }
        newStr += strNum[i];

    }
    return newStr;
}
