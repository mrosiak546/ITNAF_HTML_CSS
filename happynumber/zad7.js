function isHappyNumber(number) {
    let sum = 0;
    let digits = number.toString().split('');
    for (let i = 0; i < digits.length; i++) {
        sum += Math.pow(parseInt(digits[i]), 2);
        console.log(sum);
    }
    if (sum == 1) {
        return true;
    } else {
        return isHappyNumber(sum);
    }
}

console.log(isHappyNumber(19));
