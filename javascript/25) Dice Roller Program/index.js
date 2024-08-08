
const img = document.getElementById("img");

function btnRoll(){
  
  let rollNum = Math.trunc(Math.random() * 6) + 1;
  //let rollImg = `<img src="imgs/1.png" alt="">`;

  img.src = `imgs/${rollNum}.png`;

}