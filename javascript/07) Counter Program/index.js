
let getNum = document.getElementById("count_lbl").textContent = 0;

// Increase..

document.getElementById("btnIncrease").onclick = function(){
    getNum++;
    document.getElementById("count_lbl").textContent = getNum;
};

// Decrease..

document.getElementById("btnDecrease").onclick = function(){
    getNum--;
    document.getElementById("count_lbl").textContent = getNum;
};

// Reset..

document.getElementById("btnReset").onclick = function(){
    getNum = 0;
    document.getElementById("count_lbl").textContent = getNum;
};