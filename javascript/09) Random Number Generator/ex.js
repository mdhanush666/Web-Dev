
const btnRoll = document.getElementById("btnRoll");
const lbl = document.getElementById("lbl");

const max = 10, min = 1;

let random;

btnRoll.onclick = function(){
    random = Math.trunc(Math.random() * max) + min;
    lbl.textContent = random;
}