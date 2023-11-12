let st = new Set();
function isHappyNumber2(number){
    let sum = 0;
    let digits = number.toString().split('');
    for (let i = 0; i < digits.length; i++) {
        sum += Math.pow(parseInt(digits[i]), 2);
        console.log(sum);
    }
    if (sum == 1) {
        return true;
    } else if (st.has(sum)){
        return false;
    } else {
        st.add(sum);
        return isHappyNumber2(sum);
    }
}

console.log(isHappyNumber2(19));
console.log(isHappyNumber2(20));