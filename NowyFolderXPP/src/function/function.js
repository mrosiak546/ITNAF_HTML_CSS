// Funkcja klasyczna isOdd(x)
function isOdd(x) {
  if (x % 2 === 1) {
    return true;
  } else {
    return false;
  }
}

// Funkcja strzałkowa isEven(x)
const isEven = (x) => {
  if (x % 2 === 0) {
    return true;
  } else {
    return false;
  }
};

//Sprawdzenie zadania
console.log(isOdd(3));
console.log(isEven(3));
