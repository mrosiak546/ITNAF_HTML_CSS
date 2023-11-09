//funkcja palindrom
function palindrom(slowo) {
    let dlugosc = slowo.length;
    for (let i = 0; i < dlugosc / 2; i++) {
        if (slowo[i] !== slowo[dlugosc - 1 - i]) {
            return false;
        }
    }
    return true;
}

console.log(palindrom("kajak"));