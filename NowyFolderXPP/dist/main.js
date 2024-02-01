
function $parcel$export(e, n, v, s) {
  Object.defineProperty(e, n, {get: v, set: s, enumerable: true, configurable: true});
}

$parcel$export(module.exports, "function", () => $7dca5c2e0718101c$exports.function);
$parcel$export(module.exports, "script", () => $facecf0110d46d03$exports.script);
$parcel$export(module.exports, "zad3", () => $1d9f6ea449d14dcf$exports.zad3);
$parcel$export(module.exports, "zad4", () => $1a744aef419db1f1$exports.zad4);
$parcel$export(module.exports, "zad5", () => $b29d32a3c90878cc$exports.zad5);
$parcel$export(module.exports, "zad6", () => $6829481c047c1250$exports.zad6);
$parcel$export(module.exports, "zad7", () => $377233d83ffd5e7a$exports.zad7);
var $7dca5c2e0718101c$exports = {};
// Funkcja klasyczna isOdd(x)
function $7dca5c2e0718101c$var$isOdd(x) {
    if (x % 2 === 1) return true;
    else return false;
}
// Funkcja strzałkowa isEven(x)
const $7dca5c2e0718101c$var$isEven = (x)=>{
    if (x % 2 === 0) return true;
    else return false;
};
//Sprawdzenie zadania
console.log($7dca5c2e0718101c$var$isOdd(3));
console.log($7dca5c2e0718101c$var$isEven(3));


var $facecf0110d46d03$exports = {};
let $facecf0110d46d03$var$result = 0;
let $facecf0110d46d03$var$isClicked = false;
function $facecf0110d46d03$var$displayResult() {
    document.querySelector(".js-result").innerHTML = `Result: ${$facecf0110d46d03$var$result}`;
}
function $facecf0110d46d03$var$addUsingButton() {
    $facecf0110d46d03$var$result++;
    $facecf0110d46d03$var$displayResult();
}
function $facecf0110d46d03$var$subtractUsingButton() {
    $facecf0110d46d03$var$result--;
    $facecf0110d46d03$var$displayResult();
}
function $facecf0110d46d03$var$changeColorText() {
    const text = document.querySelector(".js-result");
    if ($facecf0110d46d03$var$isClicked) text.style.color = "black";
    else text.style.color = "red";
    $facecf0110d46d03$var$isClicked = !$facecf0110d46d03$var$isClicked;
}
// Sprawdznie aki branch: git branch -a
//tworzenie nowego brancha git checkout -b nazwaBrancha
$facecf0110d46d03$var$displayResult();


var $1d9f6ea449d14dcf$exports = {};
function $1d9f6ea449d14dcf$var$range(a, b) {
    let arr = [];
    for(var i = a; i <= b; i++)arr.push(i);
    return arr;
}
console.log($1d9f6ea449d14dcf$var$range(1, 10));


var $1a744aef419db1f1$exports = {};
//funkcja suma z tablicą jako argument
function $1a744aef419db1f1$var$suma(tablica) {
    let suma = 0;
    for(let i = 0; i < tablica.length; i++)suma += tablica[i];
    return suma;
}
console.log($1a744aef419db1f1$var$suma([
    3,
    7,
    5
]));


var $b29d32a3c90878cc$exports = {};
//Fibonacci
function $b29d32a3c90878cc$var$fibonnaci(n) {
    let fib = [
        0,
        1
    ];
    for(let i = 2; i < n; i++)fib.push(fib[i - 1] + fib[i - 2]);
    return fib;
}
console.log($b29d32a3c90878cc$var$fibonnaci(9));


var $6829481c047c1250$exports = {};
//funkcja palindrom
function $6829481c047c1250$var$palindrom(slowo) {
    let dlugosc = slowo.length;
    for(let i = 0; i < dlugosc / 2; i++){
        if (slowo[i] !== slowo[dlugosc - 1 - i]) return false;
    }
    return true;
}
console.log($6829481c047c1250$var$palindrom("kajak"));


var $377233d83ffd5e7a$exports = {};
let $377233d83ffd5e7a$var$st = new Set();
function $377233d83ffd5e7a$var$isHappyNumber2(number) {
    let sum = 0;
    let digits = number.toString().split("");
    for(let i = 0; i < digits.length; i++){
        sum += Math.pow(parseInt(digits[i]), 2);
        console.log(sum);
    }
    if (sum == 1) return true;
    else if ($377233d83ffd5e7a$var$st.has(sum)) return false;
    else {
        $377233d83ffd5e7a$var$st.add(sum);
        return $377233d83ffd5e7a$var$isHappyNumber2(sum);
    }
}
console.log($377233d83ffd5e7a$var$isHappyNumber2(19));
console.log($377233d83ffd5e7a$var$isHappyNumber2(20));




//# sourceMappingURL=main.js.map
