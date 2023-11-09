let result = 0;
let isClicked = false;

function displayResult() {
    document.querySelector(".js-result").innerHTML = `Result: ${result}`;
}

function addUsingButton() {
    result++;
    displayResult();
}

function subtractUsingButton() {
    result--;
    displayResult();
}

function changeColorText(){
    const text = document.querySelector(".js-result");

    if(isClicked){
        text.style.color = "black";
    }
    else{
        text.style.color = "red";
    }

    isClicked = !isClicked;
}

// Sprawdznie aki branch: git branch -a
//tworzenie nowego brancha git checkout -b nazwaBrancha

displayResult();