const display = document.getElementById('display');
const color = document.querySelector('.counter-content');
var counter = 0;

function colorChange () {
    if ( counter >= 1 && counter < 10 ) {
        color.style.backgroundColor = "#4B7196"
    }
    else if ( counter < 0 ) {
        color.style.backgroundColor = "#665858"
    }
    else if ( counter >= 10 && counter < 20) {
        color.style.backgroundColor = "#333" 
    }
    else if ( counter >= 20 && counter < 30) {
        color.style.backgroundColor = "#744343" 
    }
    else if ( counter >= 30 && counter < 40) {
        color.style.backgroundColor = "#9c2828" 
    }
    else if ( counter >= 40 && counter < 50) {
        color.style.backgroundColor = "#681d1d" 
    }
    else if ( counter >= 50) {
        color.style.backgroundColor = "#68661d" 
    }
    else {
     
        color.style.backgroundColor = "#33334888"
    }
};
function plusBtn () {
    counter++;
    display.innerText = counter;
    colorChange();
}
function resetBtn () {
    counter = 0;
    display.innerText = 0;
    color.style.backgroundColor = "#33338888"

}
function minusBtn () {
    counter--;
    display.innerText = counter;
    colorChange();
}