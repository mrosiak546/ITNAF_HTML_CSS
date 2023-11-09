//funkcja suma z tablicą jako argument
function suma(tablica) {
    let suma = 0;
    for (let i = 0; i < tablica.length; i++) {
        suma += tablica[i];
    }
    return suma;
}

console.log(suma([3,7,5]));